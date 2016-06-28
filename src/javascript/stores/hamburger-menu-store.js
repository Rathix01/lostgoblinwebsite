const Bacon = require('baconjs');
const HamburgerMenuActions = require('../actions/hamburger-menu-actions');
const MenuActions = require('../actions/menu-actions');
const AnimationStore = require('./animation-store');

const toToggleMobileMenu = ( ex, next ) => next.isMenuEvent && ex.display === false 
											? ({ display: false, prev: ex.display })
											: ({ display: !ex.display, prev: ex.display });

const toAnimationTweens = ( state ) => state.display ? getArrivalTweens() : getDepartureTweens();
const toMenuEvent = () => ({ isMenuEvent: true });
const toChangesOnly = ( template ) => template.display !== template.prev;

const getArrivalTweens = ( scroll ) => ({
	tweenProps: [{
			time: 0.6,
			fn: "fromTo", 
			label: "MobileMenuArrive", 
			target: "MobileMenuAnimation", 
			from: { y: 0, opacity: 0 }, 
			to: { y: 300, opacity: 1, ease: Back.easeOut },
	}]
});

const getDepartureTweens = ( scroll ) => ({
	tweenProps: [{
			time: 0.4,
			fn: "fromTo", 
			label: "MobileMenuArrive", 
			target: "MobileMenuAnimation", 
			from: { y: 300, opacity: 1 }, 
			to: { y: 0, opacity: 0, ease: Back.easeIn },
	}]
});

const MenuUpdateTemplate = Bacon.combineTemplate({
	dev: MenuActions.actions.DevBlog.toProperty({}),
	games: MenuActions.actions.Games.toProperty({}),
	story: MenuActions.actions.OurStory.toProperty({}),
	contact: MenuActions.actions.ContactUs.toProperty({})
}).map( toMenuEvent ).toEventStream();

const hamburgerButton = HamburgerMenuActions.actions.StickyMenuHamburgerButton.toEventStream();
const menuActions = hamburgerButton.merge( MenuUpdateTemplate );

const toggle = menuActions.scan( { display: false }, toToggleMobileMenu ).changes().filter( toChangesOnly )						
const toggleAnimations = toggle.map( toAnimationTweens ).flatMap( AnimationStore.toTimeline );

toggleAnimations.onValue( () => {} );

module.exports = {
	toggle: toggle
}