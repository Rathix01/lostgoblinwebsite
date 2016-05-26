/**
 * @jsx React.DOM
 */
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const GamesPanelStyles = require('../styles/games-panel-styles');
const HeroTile = require('./hero-tile');
const ButtonInput = require('./button-input');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className={ GamesPanelStyles.container } id="Games">
        <h1 className={ GamesPanelStyles.header }> Games </h1>
        <div className={ GamesPanelStyles.games }>
          <img src="images/goblins-of-elderstone.png" className={ GamesPanelStyles.image } />
          <img src="images/monster-maze.png" className={ GamesPanelStyles.image } />
        </div>
      </div>
    )
  }
})