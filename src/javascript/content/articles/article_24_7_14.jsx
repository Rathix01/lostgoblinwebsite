const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Press Releases and Marketing MonsterMaze</h1>
          <p className={ ArticleStyles.textContainer }>
            So as we are getting close to finishing our first game Monster Maze the questions around how to market ourselves and our game are starting to bubble up to the top of the most important issues to think about.  This has also been pushed to more important as we are submitting our game to the NZGDA&rsquo;s <a href="http://www.nzgda.com/news/nz-games-industry-launches-business-startup-competition/">Business Startup Competition</a>
            <br/>As i flex my creative writing muscles I have found a couple of good resources for press kits created by the indie company Vlambeer <a href="http://dopresskit.com/">dopresskit</a> & <a href="http://dodistribute.com/">dodistribute</a> These look like great resources and they give it away for free so you can't ask for better than that.  Also if you haven't played <a href="http://www.vlambeer.com/index.php?tag=luftrauser">Luftrauser</a> you should its great fun.  I think there is a free browser version but I bought it on steam to give them some monetary support.
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 24th Aug 2014
          </p>
        </div>
    )
  }
})