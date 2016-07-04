const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>our first demo!</h1>
          <p className={ ArticleStyles.textContainer }>
            our first gameplay video is up on our new youtube channel!!! go check it out our <a href="http://youtu.be/7r4QtJdZPcM">gameplay video</a>
            <br/>See you again soon :)
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 1st Sep 2014
          </p>
        </div>
    )
  }
})