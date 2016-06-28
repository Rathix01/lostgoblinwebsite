/**
 * @jsx React.DOM
 */
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanelStyles = require('../styles/dev-blog-panel-styles');
const BlogList = require('./blog-list');
const ButtonInput = require('./button-input');
const AnimationContainer = require('./animation-container');
const HeroTilePanel = require('./hero-tile-panel');
const BackButton = require('./back-button');
const ArticlePage = require('./article-page')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div  className={ DevBlogPanelStyles.container } id="DevBlog">
        <h1 className={ DevBlogPanelStyles.header }> 
          Devblog 
          <BackButton id="BackToHome" />
        </h1>
        <HeroTilePanel id="HeroPanel" />
        <BlogList id="BlogList" />
        <ArticlePage id="BlogArticle" />
      </div>
    )
  }
})