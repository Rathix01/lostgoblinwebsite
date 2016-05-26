var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var actions = {
  BlogItem: new Bacon.Bus(),
  BlogItemSelect: new Bacon.Bus()
}

ActionManager.register( actions );

module.exports = {
  actions: actions
};