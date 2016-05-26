var Bacon = require('baconjs');
var ActionManager = require( './action-manager' );

var actions = {
  DevBlog: new Bacon.Bus(),
  Games: new Bacon.Bus(),
  OurStory: new Bacon.Bus(),
  ContactUs: new Bacon.Bus(),
}


ActionManager.register( actions );

module.exports = {
  actions: actions
};