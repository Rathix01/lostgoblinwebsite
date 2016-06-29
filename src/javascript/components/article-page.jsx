const React = require('react');
const ComponentBase = require('../mixins/component-base');
const AnimationContainer = require('./animation-container');
const VisibilityToggle = require('./visibility-toggle');
const BackButton = require('./back-button');
const Styles = require('../styles/article-styles');

const getArticleFromState = ( Component, state ) => {
  return React.createClass({
      
      mixins: [ComponentBase],

      render: function() {
        return ( <div><Component /></div> );
      }    
  });
};

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  getArticle() {
    if( this.state.component !== undefined ) {
      const Article = getArticleFromState( this.state.component, this.state );
      return <Article id='Article' />
    } else {
      return <div></div>
    }
  },

  render() {
    return (
      <VisibilityToggle id='DevBlogArticleVisibility'>
        <AnimationContainer id="DevBlogArticleAnimation" className={ Styles.pageContainer }>
          <div className={ Styles.backToList }>
            <BackButton id="BackToList" />
          </div>
          { this.getArticle() }
        </AnimationContainer>
      </VisibilityToggle>
    )
  }
})