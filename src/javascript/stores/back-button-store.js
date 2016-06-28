const Bacon = require('baconjs');
const R = require('ramda')
const AnimationStore = require('./animation-store');
const RouteStore = require('./route-store');
const BlogListActions = require('../actions/blog-list-actions');
const StateStore = require('./state-store')
const DevBlogPanelAnimationStore = require('./dev-blog-panel-animation-store');

const publish = StateStore.publish("DevPanelBackButtonVisibility");

const toArriveTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "fromTo",
		label: "BackBtnArrive", 
		target: "DevPanelBackButtonAnimation",
		from: { opacity: 0, scale: 0.6, rotateZ: 90 },
		to: { opacity: 1, scale: 1, rotateZ: 0,  ease: Back.easeOut }
	}]
});

const toDepartTweens = () => ({
	tweenProps: [{
		time: 0.4,
		fn: "fromTo",
		label: "BackBtnArrive", 
		target: "DevPanelBackButtonAnimation",
		from: { opacity: 1, scale: 1, rotateZ: 0 },
		to: { opacity: 0, scale: 0.6, rotateZ: 90, ease: Back.easeIn }
	}]
});


const toVisible = R.curry( ( isVisible, state ) => ( { display: isVisible } ) )

DevBlogPanelAnimationStore.heroDepartAnimation.map( toVisible( true ) ).onValue( publish );
DevBlogPanelAnimationStore.heroDepartAnimation.delay(200).map( toArriveTweens ).onValue( AnimationStore.toTimeline );

BlogListActions.actions.BackToHomeBackButton.map( toDepartTweens )
								  .flatMap( AnimationStore.toTimeline )
								  .map( toVisible( false ) )
								  .onValue( publish )