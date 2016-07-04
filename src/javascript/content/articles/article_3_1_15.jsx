const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Happy Holidays and a bright 2015!!</h1>
          <p className={ ArticleStyles.textContainer }>
            We had a little bit of a Xmas and NYE break for about 10 days. Was a very long and busy year for us, but now we back at it and on track to finish MonsterMaze by January/February. Hope everyone had a safe and happy holiday and that all your big plans for 2015 are successful. This will be a big year for Lost Goblin! We will be releasing and then supporting MonsterMaze and then are aiming to do 2 new games in 2015. I have a good feeling about this year!
            <br/>In the meantime here are a few new screenshots and remember to follow us @lostgoblin :)
            <br/>Cheers
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 3rd Jan 2015
          </p>
        </div>
    )
  }
})