const Bacon = require('baconjs');
const Crossroads = require('crossroads');

const locationBus = new Bacon.Bus();

function handleRoute( location, urlParams ) {
  //console.log( 'route->', location, urlParams )
  locationBus.push( {
    location: location,
    urlParams: urlParams
  })
}

// routes
Crossroads.addRoute( "/",               handleRoute.bind( this, 'home' ) );
Crossroads.addRoute( "/{?query}",       handleRoute.bind( this, 'home' ) );
Crossroads.addRoute( "/blog/{?query}",  handleRoute.bind( this, 'blog' ) );

setTimeout(function() {
  Crossroads.parse( document.location.pathname + document.location.search );
}, 30);

module.exports = {
    location: locationBus//.toEventStream()
}