var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var actions = {
  StickyMenuHamburgerButton: new Bacon.Bus()
}

ActionManager.register( actions );

module.exports = {
  actions: actions
};