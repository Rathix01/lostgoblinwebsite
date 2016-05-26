const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanelStyles = require('../styles/dev-blog-panel-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  getClassNameFromProps() {
    return this.props.className ? this.props.className : DevBlogPanelStyles.item
  },

  render() {
    return (
      <div className={ this.getClassNameFromProps() }>
        <img src={ "../content/images/" + this.state.img } className={ DevBlogPanelStyles.subHeroImage } />
        <div className={ DevBlogPanelStyles.subTitle }>
          { this.state.title }
        </div>
      </div>
    )
  }
})


