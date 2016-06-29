const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanelStyles = require('../styles/dev-blog-panel-styles');
const AnimationContainer = require('./animation-container');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  handleClick() {
    this.publishToAction( "HeroItemSelect", this.state )
  },

  render() {
    return (
      <div className={ DevBlogPanelStyles.subImageContainer } onClick={ this.handleClick }>
        <img src={ "../content/images/" + this.state.img } className={ DevBlogPanelStyles.subHeroImage } />
      </div>
    )
  }
})


