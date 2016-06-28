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
            <p>We are a very small indie studio based in New Zealand. </p>
            <p>Gustav Seymore and Vaughan Sanders founded the studio in 2014 with the dream of making small, high quality, independent games. We have over 20 years of game industry experience. </p>
            <p>We really like goblins.</p>
            <p>
              Our first PC game, Goblins of Elderstone, is a sandbox tribe management city building game with some light RPG and strategy elements filled with adorable chaotic goblins that will kill each other and burn down the village if they don't like how you rule them!
            </p>
          </div>
        </div>
      </div>
    )
  }
})