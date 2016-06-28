// System.
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const AnimationContainer = require('./animation-container');
const VisibilityToggle = require('./visibility-toggle');
const BlogListStyles = require('../styles/blog-list-styles');
const BlogListItem = require('./blog-list-item');

// Add the article component require statements here...
const TestArticle = require('../content/articles/test-article');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
      <VisibilityToggle id="BlogList" defaultVisibility={ false } className={ BlogListStyles.container }>
        <AnimationContainer id="BlogListAnimation" className={ BlogListStyles.list }>

          <BlogListItem id="TestArticle1" title="Dev Blog Coming soon" subtext="Watch this space" hero='1' img="GoE-logo.png" component={ TestArticle }>
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle2" title="The Second Test" subtext="More subtext" hero='2' img="GoE-background.jpg" component={ TestArticle }>
          </BlogListItem>

          <BlogListItem id="TestArticle3" title="The Third Test" subtext="Yet more subtext" hero='3' img="building-voodoo-hut.jpg" component={ TestArticle }>
          </BlogListItem>

          <BlogListItem id="TestArticle4" title="The Forth Test" subtext="We can fit a reasonable amount of text in here." img="building-voodoo-hut.jpg" component={ TestArticle }>
            
          </BlogListItem>

          <BlogListItem id="TestArticle5" title="The Fifth Test" subtext="And there is a lot that can go in here as well. Use as much as you like." img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle6" title="The Sixth Test" subtext="Much Text goes here..." img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle7" title="The Seventh Test" subtext="Testing for Effects on Height" img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle8" title="The Eighth Test" subtext="Lots of tests...." img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle8" title="9 Tests!" subtext="Lots of test items." img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

          <BlogListItem id="TestArticle8" title="The Tenth Test" subtext="How many is too many?" img="building-voodoo-hut.jpg">
            <TestArticle />
          </BlogListItem>

        </AnimationContainer>
      </VisibilityToggle>
    )
  }
})