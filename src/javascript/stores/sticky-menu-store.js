const Bacon = require('baconjs');
const WindowScrollPositionStore = require('./window-scroll-position-store');
const AnimationStore = require('./animation-store');

const toDisplay = ( prev, scroll ) => ({ prev: prev.display, display: scroll.position > 430 })
const toChanges = ( scroll ) => scroll.prev !== scroll.display;

const getFromY = ( display ) => display ? -160 : 0;
const getToY = ( display ) => display ? 0 : -160;

const getFromOpacity = ( display ) => display ? 0 : 1;
const getToOpacity = ( display ) => display ? 1 : 0;

const toTweens = ( scroll ) => ({
	tweenProps: [{
			time: 0.6,
			fn: "fromTo", 
			label: "StickyMenuChange", 
			target: "StickyMenuAnimation", 
			from: { y: getFromY( scroll.display ), opacity: getFromOpacity( scroll.display ) }, 
			to: { y: getToY( scroll.display ), opacity: getToOpacity( scroll.display ), ease: Power4.easeInOut },
	}]
});

const menuPositionChanges = WindowScrollPositionStore.scrollPosition.scan( { display: false }, toDisplay ).filter( toChanges )
menuPositionChanges.changes().map( toTweens ).onValue( AnimationStore.toTimeline )