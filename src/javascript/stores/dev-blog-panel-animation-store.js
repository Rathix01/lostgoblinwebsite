const Bacon = require('baconjs');
const R = require('ramda')
const AnimationStore = require('./animation-store');
const RouteStore = require('./route-store');
const BlogListActions = require('../actions/blog-list-actions');
const StateStore = require('./state-store')

const toHeroArriveTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "staggerFromTo",
		label: "HeroArrive", 
		target: "Hero1Animation Hero2Animation Hero3Animation",
		from: { opacity: 0, scale: 1.3, y: 40 },
		to: { opacity: 1, scale: 1, y: 0, ease: Back.easeOut },
		stagger: 0.2
	}]
});

const toHeroDepartTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "staggerFromTo",
		label: "HeroDepart", 
		target: "Hero1Animation Hero2Animation Hero3Animation",
		from: { opacity: 1, scale: 1, y: 0 },
		to: { opacity: 0, scale: 0.6, y: -100, ease: Back.easeOut },
		stagger: 0.2
	}]
});

const isHomePage = ( state ) => state.location === "home";
const wasOnHomePage = ( state ) => state.prev === "home";
const toVisible = R.curry( ( isVisible, state ) => ( { display: isVisible } ) )

// arrive
const homePageRoute = RouteStore.location.filter( isHomePage );
const backToHerosClick = BlogListActions.actions.BackToHomeBackButton.debounce( 600 );
const arrivals = homePageRoute.merge( backToHerosClick );
const heroArriveAnimations = arrivals.map( toHeroArriveTweens ).flatMap( AnimationStore.toTimeline );

//depart
const showBlogList = BlogListActions.actions.ShowBlogList.debounce(600);
const heroItemSelect = BlogListActions.actions.HeroItemSelect;
const heroDepartAnimation = showBlogList.map( toHeroDepartTweens ).flatMap( AnimationStore.toTimeline );
const heroSelectAnimation = heroItemSelect.map( toHeroDepartTweens ).flatMap( AnimationStore.toTimeline );

// these no-ops kick off the above animations.
heroArriveAnimations.onValue(() => {});
heroDepartAnimation.onValue(() => {});
heroSelectAnimation.onValue(() => {});

arrivals.merge(heroArriveAnimations)
			 .map( toVisible( true ) )
			 .merge( heroDepartAnimation.merge(heroSelectAnimation).map( toVisible( false ) ) )
			 .onValue( StateStore.publish( "DevBlogPanelVisibility" ) );

module.exports = {
	heroArriveAnimations, 
	heroDepartAnimation,
	heroSelectAnimation
}