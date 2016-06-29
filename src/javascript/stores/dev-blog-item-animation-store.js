const Bacon = require('baconjs');
const R = require('ramda');
const AnimationStore = require('./animation-store');
const RouteStore = require('./route-store');
const StateStore = require('./state-store');
const BlogListStore = require('./blog-list-store');
const DevBlogPanelAnimationStore = require('./dev-blog-panel-animation-store');
const DevBlogListAnimationStore = require('./dev-blog-list-animation-store');
const BlogListActions = require('../actions/blog-list-actions');

const toArriveTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "fromTo",
		label: "ListArrive", 
		target: "DevBlogArticleAnimation",
		from: { opacity: 0, y: 40 },
		to: { opacity: 1, y: 0, ease: Back.easeOut },
	},{
		time: 0.4,
		fn: "fromTo",
		label: "BackToListBtnArrive", 
		target: "BackToListAnimation",
		from: { opacity: 0, scale: 0.6, rotateZ: 90 },
		to: { opacity: 1, scale: 1, rotateZ: 0,  ease: Back.easeOut, delay: 0.2 }
	}]
});

const toDepartTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "fromTo",
		label: "BackToListBtnArrive", 
		target: "BackToListAnimation",
		from: { opacity: 1, scale: 1, rotateZ: 0 },
		to: { opacity: 0, scale: 0.6, rotateZ: 90, ease: Back.easeIn }
	},{
		time: 0.4,
		fn: "fromTo",
		label: "ListDepart", 
		target: "DevBlogArticleAnimation",
		from: { opacity: 1, y: 0 },
		to: { opacity: 0, y: -40, ease: Back.easeIn },
	}]
});

const toDataItem = R.curry(( route, data ) => data.url === route.urlParams.id )
const toRouteDataItem = ( template ) => ({ props: R.filter( toDataItem( template.route ), template.data ).shift() });


const isItemPage = ( state ) => state.location === "blog-item";
const toVisible = R.curry( ( isVisible, state ) => ( { display: isVisible } ) );

const itemPageRoute = RouteStore.location.filter(isItemPage).debounce(600);
const delayedItemSelect = BlogListActions.actions.BlogItemSelect.debounce(1200);
const heroItemSelect = BlogListActions.actions.HeroItemSelect.debounce(1200);

const routeAndDataTemplate = Bacon.combineTemplate({ route: itemPageRoute, data: BlogListStore.allBlogItems })
const routeArrive = routeAndDataTemplate.map( toRouteDataItem ).toEventStream();

const articleArrive = Bacon.when( [ DevBlogListAnimationStore.depart.toProperty(), delayedItemSelect ], ( list, item ) => item );

const heroPanelsLeave = DevBlogPanelAnimationStore.heroSelectAnimation
const heroArticleArrive = Bacon.when( [ heroPanelsLeave.toProperty(), heroItemSelect ], ( leave, item ) => ({ props: item }))

const arrive = articleArrive.merge( routeArrive ).merge( heroArticleArrive );
const isVisible = arrive.map( toVisible( true ) );

arrive.map( R.prop("props") ).onValue( StateStore.publish("BlogArticle") );
isVisible.onValue( StateStore.publish('DevBlogArticleVisibility') )
isVisible.onValue( StateStore.publish('BackToListVisibility') )

const arriveAnimation = arrive.map( toArriveTweens ).flatMap( AnimationStore.toTimeline );
arriveAnimation.onValue(() => {});

const depart = BlogListActions.actions.BackToListBackButton.map( toDepartTweens ).flatMap( AnimationStore.toTimeline );
const isNotVisible = depart.map( toVisible( false ) );
isNotVisible.onValue( StateStore.publish('DevBlogArticleVisibility') )
isNotVisible.onValue( StateStore.publish('BackToListVisibility') )

module.exports = {
	arriveAnimation
}
