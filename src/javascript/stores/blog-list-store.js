const Bacon = require('baconjs');
const R = require('ramda')
const BlogListActions = require('../actions/blog-list-actions');
const StateStore = require('./state-store')

const toProps = ( state ) => state.props;
const isHero = ( state ) => R.contains( parseInt( state.hero ), [1, 2, 3] );
const isNotHero = ( state ) => !isHero( state )
const publishHeroItem = ( state ) => StateStore.publish( "Hero" + state.hero, state );
const wrap = ( item ) => [item];

const blogListItems = BlogListActions.actions.BlogItem.map(toProps)
const allBlogItems = blogListItems.map( wrap ).scan([], R.concat).changes().debounce(100);

const heroItems = blogListItems.filter(isHero)
const otherItems = blogListItems.filter(isNotHero)

heroItems.onValue( publishHeroItem );

module.exports = {
	blogListItems, allBlogItems
}