const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>New logo for Lost Goblin!</h1>
          <p className={ ArticleStyles.textContainer }>
            Happy to announce a new logo for Lost Goblin! Been working on this on and off for months, and I'm finally happy with the new look. I felt like the old goblin head was really cool but didn't say &ldquo;lost&rdquo; in any way, so after lots of experimentation and a lot of feedback from some good and talented friends I finally have the final look!
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/black_banner.png"/>
          </div>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 24th Jan 2015
          </p>
        </div>
    )
  }
})