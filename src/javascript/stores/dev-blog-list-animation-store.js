const Bacon = require('baconjs');
const R = require('ramda');
const AnimationStore = require('./animation-store');
const RouteStore = require('./route-store');
const BlogListStore = require('./blog-list-store');
const DevBlogPanelAnimationStore = require('./dev-blog-panel-animation-store');
const StateStore = require('./state-store');
const BlogListActions = require('../actions/blog-list-actions');

const toListArriveTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "staggerFromTo",
		label: "ListArrive", 
		target: "BlogListAnimation",
		from: { opacity: 0, y: 40 },
		to: { opacity: 1, y: 0, ease: Back.easeOut },
		stagger: 0.2
	},{
		time: 0.4,
		fn: "fromTo",
		label: "BackBtnArrive", 
		target: "BackToHomeAnimation",
		from: { opacity: 0, scale: 0.6, rotateZ: 90 },
		to: { opacity: 1, scale: 1, rotateZ: 0,  ease: Back.easeOut }
	}]
});

const toListDepartTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "fromTo",
		label: "BackBtnDepart", 
		target: "BackToHomeAnimation",
		from: { opacity: 1, scale: 1, rotateZ: 0 },
		to: { opacity: 0, scale: 0.6, rotateZ: 90, ease: Back.easeIn }
	},{
		time: 0.4,
		fn: "staggerFromTo",
		label: "ListDepart", 
		target: "BlogListAnimation",
		from: { opacity: 1, y: 0 },
		to: { opacity: 0, y: -40, ease: Back.easeOut },
		stagger: 0.2
	}]
});

const isListPage = ( state ) => state.location === "blog-list";
const toVisible = R.curry( ( isVisible, state ) => ( { display: isVisible } ) )
const toAllItems = ( prev, next ) => prev.concat(next);

const listPageRoute = RouteStore.location.filter( isListPage ).debounce(600);
const blogListItems = BlogListStore.blogListItems.scan( [], toAllItems ).debounce(50).changes();
const devBlogPanelDepart = DevBlogPanelAnimationStore.heroDepartAnimation
const backToListAction = BlogListActions.actions.BackToListBackButton.debounce(600).toEventStream();

const arrivals = listPageRoute.merge( devBlogPanelDepart ).merge( backToListAction );
const listArrivalTemplate = Bacon.combineTemplate({ arrivals, blogListItems });

listArrivalTemplate.map( toVisible( true ) ).onValue(StateStore.publish("BlogList"))
listArrivalTemplate.map( toVisible( true ) ).onValue(StateStore.publish("BackToHomeVisibility"))
listArrivalTemplate.map( toListArriveTweens ).onValue( AnimationStore.toTimeline )

const departActions = BlogListActions.actions.BlogItemSelect.merge( BlogListActions.actions.BackToHomeBackButton.toEventStream() )

const depart = departActions.map( toListDepartTweens )
			 				.flatMap( AnimationStore.toTimeline )
			 
depart.map( toVisible( false ) ).onValue( StateStore.publish("BlogList") );
depart.map( toVisible( false ) ).onValue( StateStore.publish("BackToHomeVisibility") );

module.exports = {
	depart
}