const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Monster Maze mentioned on Smallworlds</h1>
          <p className={ ArticleStyles.textContainer }>
            Hey everyone
            <br/>We got a really nice write up on the forums on Smallworlds
            <br/>check it out
            <br/><a className={ ArticleStyles.link } href="http://www.smallworlds.com/forum/threads/1293982-Play-MonsterMaze-Defence-of-the-Cookies!">Play-MonsterMaze</a>
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 3rd Aug 2015
          </p>
        </div>
    )
  }
})