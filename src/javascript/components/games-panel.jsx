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
          <a href='http://goblinsofelderstone.com' target="_blank">
            <img src="images/goblins-of-elderstone.png" className={ GamesPanelStyles.image } />
          </a>
          <img src="images/monster-maze.png" className={ GamesPanelStyles.image } />
          <a href='https://itunes.apple.com/us/app/monstermaze-defense-cookies/id935872732?mt=8' target='_blank'>
              <div className={ GamesPanelStyles.appStore }></div>
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.lostgoblin.monstermaze&hl=en' target='_blank'>
              <div className={ GamesPanelStyles.playStore }></div>
          </a>
        </div>
      </div>
    )
  }
})