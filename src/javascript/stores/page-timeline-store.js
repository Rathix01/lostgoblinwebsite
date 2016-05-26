// const Bacon = require('baconjs');
// const DevblogTimelineStore = require('./devblog-timeline-store');
// const GamesTimelineStore = require('./games-timeline-store')
// const AnimationStore = require('./animation-store')
// const PageStore = require('./page-store')
// const StateStore = require('./state-store');

// const toNextPage = ( page, trigger ) => ({ page: page.next });
// const toTweenProps = ( tweens ) => ({ tweenProps: tweens })
// const toArrivalTweens = ( tweens, trigger ) => tweens;
// const stopListening = () => Bacon.noMore

// const devblogArrive = DevblogTimelineStore.arriving.toEventStream();
// const devblogLeave = DevblogTimelineStore.leaving.toEventStream();
// const gameArrive = GamesTimelineStore.arriving.toEventStream();
// const gameLeave = GamesTimelineStore.leaving.toEventStream();

// const next = devblogArrive.merge( gameArrive ).toProperty();
// const prev = devblogLeave.merge( gameLeave ).toProperty();

// const leavingAnimations = prev.map( toTweenProps ).flatMap( AnimationStore.toTimeline );

// const initTweens = devblogArrive.map( toArrivalTweens )
// const arrivalTweens = Bacon.when([ next.toProperty(), leavingAnimations.toEventStream() ], toArrivalTweens );

// Bacon.when( [ PageStore.page.toProperty(), leavingAnimations.toEventStream() ], toNextPage ).onValue( StateStore.publish("Page") );

// arrivalTweens.map( toTweenProps ).onValue( AnimationStore.toTimeline );
// initTweens.map( toTweenProps ).flatMap( AnimationStore.toTimeline ).onValue( stopListening )