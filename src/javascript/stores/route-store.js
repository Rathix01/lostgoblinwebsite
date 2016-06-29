const Bacon = require('baconjs');
const Crossroads = require('crossroads');

const locationBus = new Bacon.Bus();

function handleRoute( location, urlParams ) {
  locationBus.push( {
    location: location,
    urlParams: urlParams
  })
}

const toLatestRoutes = ( ex, next ) => ({ prev: ex.next, next: next.location })

// routes
Crossroads.addRoute( "/",               handleRoute.bind( this, 'home' ) );
Crossroads.addRoute( "/{?query}",       handleRoute.bind( this, 'home' ) );
Crossroads.addRoute( "/blog",  			handleRoute.bind( this, 'blog-list' ) );
Crossroads.addRoute( "/blog{?query}",  	handleRoute.bind( this, 'blog-item' ) );

setTimeout(function() {
  Crossroads.parse( document.location.pathname + document.location.search );
}, 30);

const locationChange = locationBus.scan( { prev: "", next: "" }, toLatestRoutes )

module.exports = {
    location: locationBus,
    locationChange: locationChange,
    crossroads: Crossroads
}