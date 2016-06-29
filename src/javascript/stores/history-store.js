const Bacon = require('baconjs');
const R = require('ramda');
const BrowserHistory = require("html5-history");
const Crossroads = require('crossroads');
const Router = require('./route-store')

const BlogListActions = require('../actions/blog-list-actions');
const DevBlogPanelAnimationStore = require('./dev-blog-panel-animation-store');

const toBlogList = () => "/blog";
const toHomePage = () => "/";
const toArticlePage = ( state ) => "/blog?id=" + getUrlFromState( state );
const getUrlFromState = ( state ) => {
	console.log( state );
	return ( state.props === undefined ? state.url : state.props.url );
}

window.addEventListener("popstate", function() {
	window.location = window.location;
}, false);

function handleLocationChange( url ) {
  BrowserHistory.pushState(null, null, url );
}

BlogListActions.actions.ShowBlogList.map( toBlogList ).onValue( handleLocationChange );
BlogListActions.actions.BackToHomeBackButton.map( toHomePage ).onValue( handleLocationChange );
BlogListActions.actions.BlogItemSelect.map( toArticlePage ).onValue( handleLocationChange );
BlogListActions.actions.HeroItemSelect.map( toArticlePage ).onValue( handleLocationChange );