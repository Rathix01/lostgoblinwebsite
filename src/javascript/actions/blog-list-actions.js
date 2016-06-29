var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var actions = {
  BlogItem: new Bacon.Bus(),
  BlogItemSelect: new Bacon.Bus(),
  HeroItemSelect: new Bacon.Bus(),
  ShowBlogList: new Bacon.Bus(),
  BackToHomeBackButton: new Bacon.Bus(),
  BackToListBackButton: new Bacon.Bus(),
}

ActionManager.register( actions );

module.exports = {
  actions: actions
};