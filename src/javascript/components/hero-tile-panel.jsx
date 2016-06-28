/**
 * @jsx React.DOM
 */
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanelStyles = require('../styles/dev-blog-panel-styles');
const HeroTile = require('./hero-tile');
const BlogSubHeroItem = require('./blog-sub-hero-item')
const ButtonInput = require('./button-input');
const AnimationContainer = require('./animation-container');
const VisibilityToggle = require('./visibility-toggle');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <VisibilityToggle id="DevBlogPanelVisibility">
        <AnimationContainer id="Hero1Animation">
          <HeroTile id="Hero1" />
        </AnimationContainer>
        <div className={ DevBlogPanelStyles.twoMore }>
          <AnimationContainer id="Hero2Animation" className={ DevBlogPanelStyles.hero2 }>
            <BlogSubHeroItem id="Hero2" />
          </AnimationContainer>
          <AnimationContainer id="Hero3Animation" className={ DevBlogPanelStyles.hero3 }>
            <BlogSubHeroItem id="Hero3" />
          </AnimationContainer>
        </div>
        <ButtonInput id="ShowBlogList" className={ DevBlogPanelStyles.seeMorePostsButton }> See More Posts </ButtonInput>
      </VisibilityToggle>
    )
  }
})