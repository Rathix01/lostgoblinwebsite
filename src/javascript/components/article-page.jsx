const React = require('react');
const ComponentBase = require('../mixins/component-base');
const AnimationContainer = require('./animation-container');
const VisibilityToggle = require('./visibility-toggle');
const BackButton = require('./back-button');

const getArticleFromState = ( Component, state ) => {
  return React.createClass({
      
      mixins: [ComponentBase],

      render: function() {
        console.log('does this bit happen>?')
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
    console.log( "Component...", this.state.component )
    if( this.state.component !== undefined ) {
      const Article = getArticleFromState( this.state.component, this.state );
      return <Article id='ArticleFoo' />
    } else {
      return <div></div>
    }
  },

  render() {
    return (
      <VisibilityToggle id='DevBlogArticleVisibility'>
        <AnimationContainer id="DevBlogArticleAnimation" className='dev-blog-article-animation'>
          { this.getArticle() }
          <div >
            <BackButton id="BackToList" />
          </div>
        </AnimationContainer>
      </VisibilityToggle>
    )
  }
})