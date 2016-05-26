var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var actions = {
  Name: new Bacon.Bus(),
  Email: new Bacon.Bus(),
  Message: new Bacon.Bus(),
  SendMessage: new Bacon.Bus(),
}


ActionManager.register( actions );

module.exports = {
  actions: actions
};