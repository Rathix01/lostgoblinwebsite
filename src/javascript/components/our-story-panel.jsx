const React = require('react');
const ComponentBase = require('../mixins/component-base');
const OurStoryPanelStyles = require('../styles/our-story-panel-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className={ OurStoryPanelStyles.container } id="OurStory">
        <h1 className={ OurStoryPanelStyles.header }> Our Story </h1>
        <div className={ OurStoryPanelStyles.ourStory }>
          <div className={ OurStoryPanelStyles.ourStoryLogo }>
            <img src="images/header-logo.png" className={ OurStoryPanelStyles.ourStoryLogoImage } />
          </div>
          <div className={ OurStoryPanelStyles.ourStoryText }>
            Lost Goblin Games... something something something.
          </div>
        </div>
      </div>
    )
  }
})