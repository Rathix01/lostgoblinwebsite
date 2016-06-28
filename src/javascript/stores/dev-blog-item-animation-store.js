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
		to: { opacity: 1, y: -90, ease: Back.easeOut },
	}]
});


const toVisible = R.curry( ( isVisible, state ) => ( { display: isVisible } ) );

DevBlogListAnimationStore.depart.log('depart\'n')
const delayedItemSelect = BlogListActions.actions.BlogItemSelect.debounce( 600 );

const articleArrive = Bacon.when( [ DevBlogListAnimationStore.depart.toProperty(), delayedItemSelect ], ( list, item ) => item );

//BlogArticle
articleArrive.map( R.prop("props") ).onValue( StateStore.publish("BlogArticle") );

articleArrive.map( toVisible( true ) ).onValue( StateStore.publish('DevBlogArticleVisibility') )
articleArrive.map( toArriveTweens ).onValue( AnimationStore.toTimeline );

