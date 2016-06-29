/**
 * @jsx React.DOM
 */
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanelStyles = require('../styles/dev-blog-panel-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  handleClick() {
    console.log(this.props.id)
  },

  render() {
    return (
      <div className={ DevBlogPanelStyles.hero } onClick={ this.handleClick }>
        <img src={ "../content/images/" + this.state.img } className={ DevBlogPanelStyles.heroImage } />
        <div className={ DevBlogPanelStyles.latestPostFeatureTile }>
          <h1 className={ DevBlogPanelStyles.latestPostTitle }>{ this.state.title }</h1>
          <p>{ this.state.subtext }</p>
        </div>
      </div>
    )
  }
})


