const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>A NEW GAME IS COMING!</h1>
          <p className={ ArticleStyles.textContainer }>
            We are VERY excited to announce that we are in going into full production of our new game! We&rsquo;ve been quietly working on this over the last few months and are almost ready to announce the new game to the world. Want to do a few more small things and then I will let shout it out to the world :D
            <br/>Stay tuned!
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 20th Sep 2015
          </p>
        </div>
    )
  }
})