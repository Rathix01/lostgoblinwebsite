// System.
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const AnimationContainer = require('./animation-container');
const VisibilityToggle = require('./visibility-toggle')
const BlogListStyles = require('../styles/blog-list-styles');
const BlogListItem = require('./blog-list-item');

// Add the article component require statements here...
const TestArticle = require('../content/articles/test-article');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
      <VisibilityToggle id="BlogList" defaultVisibility={ false } className={ BlogListStyles.container }>
        <AnimationContainer id="BlogListAnimation">
          // Add a BlogListItem tag here in this format.
          <BlogListItem id="TestArticle1" title="The First Test" subtext="This is the subtext" hero='1' img="GoE-logo.png">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle2" title="The Second Test" subtext="More subtext" hero='2' img="GoE-background.jpg">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle3" title="The Third Test" subtext="Yet more subtext" hero='3' img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

        </AnimationContainer>
      </VisibilityToggle>
    )
  }
})