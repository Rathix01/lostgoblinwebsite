const Bacon = require('baconjs');
const MenuActions = require('../actions/menu-actions');
const WindowScrollPositionStore = require('./window-scroll-position-store');

const devblog = MenuActions.actions.DevBlog.toEventStream();
const games = MenuActions.actions.Games.toEventStream();
const ourStory = MenuActions.actions.OurStory.toEventStream();
const contactUs = MenuActions.actions.ContactUs.toEventStream()

const menuUpdates = devblog.merge( games ).merge( ourStory ).merge( contactUs );

module.exports = {
	menuUpdates: menuUpdates
}