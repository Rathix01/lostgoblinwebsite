const React = require('react');
const ComponentBase = require('../mixins/component-base');
const Menu = require('./menu');
const HeaderStyles = require('../styles/header-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
        <div className={ HeaderStyles.container }>
          <div className={ HeaderStyles.mainLogoContainer }>
          </div>
        </div>
    )
  }
})