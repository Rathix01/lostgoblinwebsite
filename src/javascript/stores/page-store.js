const Bacon = require('baconjs');
const R = require('ramda')
const MenuOptionStore = require('./menu-option-store');

const toNextAndPrev = ( existing, next ) => R.merge( next, { prev: existing.next }) 
const toNextPage = ( menuUpdate ) => ({ next: menuUpdate.actionKey });

const init = Bacon.once({ next: "DevBlog" }).debounce(600).toEventStream();
const menuUpdates = MenuOptionStore.menuUpdates.map(toNextPage)

const pageChanges = menuUpdates.merge(init)
const page = pageChanges.scan({ prev: null }, toNextAndPrev)

module.exports = {
	page: page
}