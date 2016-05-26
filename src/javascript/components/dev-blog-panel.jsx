/**
 * @jsx React.DOM
 */
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanelStyles = require('../styles/dev-blog-panel-styles');
const HeroTile = require('./hero-tile');
const BlogSubHeroItem = require('./blog-sub-hero-item')
const BlogList = require('./blog-list');
const ButtonInput = require('./button-input');
const AnimationContainer = require('./animation-container')
const Footer = require('./footer');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className={ DevBlogPanelStyles.container } id="DevBlog">
        <h1 className={ DevBlogPanelStyles.header }> Devblog </h1>
        <HeroTile id="Hero1" />
        <div className={ DevBlogPanelStyles.twoMore }>
          <BlogSubHeroItem id="Hero2" className={ DevBlogPanelStyles.hero2 } />
          <BlogSubHeroItem id="Hero3" className={ DevBlogPanelStyles.hero3 } />
        </div>
        <BlogList id="BlogList" />
        <ButtonInput id='SeeMorePosts' className={ DevBlogPanelStyles.seeMorePostsButton }>See More Posts</ButtonInput>
      </div>
    )
  }
})