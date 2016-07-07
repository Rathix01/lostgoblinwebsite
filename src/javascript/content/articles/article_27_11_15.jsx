const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Goblins Are Here</h1>
          <p className={ ArticleStyles.textContainer }>
            After much silence we are super happy to announce our new game:
            <br/><a className={ ArticleStyles.link } href="http://www.goblinsofelderstone.com">Goblins of Elderstone</a>
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/GoE_Logo.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Goblins of Elderstone is a fantastical village building simulation game, centered around our adorable goblins, in a procedural generated world of Elderstone for PC. You take on the role of the first king of a small tribe of goblins and have to fight, raid, trade and divine your clan to greater prosperity.
            <br/>
            We have spent almost a year now in concept and pre-production stage, building a design and prototype to look for funding to build this awesome game of ours. And today we can happily say that we have landed some funding and have been building the game full time for about 2 months now. Please check out the site and follow and share on twitter. We will endeavor to post more regularly here on the site and be more active on twitter so please follow us along on this crazy journey to deliver a magical game.
            <br/>
            See you again soon!
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 27th Nov 2015
          </p>
        </div>
    )
  }
})