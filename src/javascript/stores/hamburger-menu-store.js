const Bacon = require('baconjs');
const HamburgerMenuActions = require('../actions/hamburger-menu-actions');
const AnimationStore = require('./animation-store');

const toToggleMobileMenu = ( ex, next ) => ({ display: !ex.display });
const toAnimationTweens = ( state ) => state.display ? getArrivalTweens() : getDepartureTweens();

const getArrivalTweens = ( scroll ) => ({
	tweenProps: [{
			time: 0.6,
			fn: "fromTo", 
			label: "MobileMenuArrive", 
			target: "MobileMenuAnimation", 
			from: { y: 0, opacity: 0 }, 
			to: { y: 400, opacity: 1, ease: Back.easeOut },
	}]
});

const getDepartureTweens = ( scroll ) => ({
	tweenProps: [{
			time: 0.6,
			fn: "fromTo", 
			label: "MobileMenuArrive", 
			target: "MobileMenuAnimation", 
			from: { y: 400, opacity: 1 }, 
			to: { y: 0, opacity: 0, ease: Back.easeIn },
	}]
});

const toggle = HamburgerMenuActions.actions.StickyMenuHamburgerButton
							.scan( { display: false }, toToggleMobileMenu )
							.map( toAnimationTweens )
							.flatMap( AnimationStore.toTimeline );

toggle.log('>')

module.exports = {
	toggle: toggle
}