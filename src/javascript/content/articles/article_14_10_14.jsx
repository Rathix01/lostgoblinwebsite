const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>New Screenshots</h1>
          <p className={ ArticleStyles.textContainer }>
            Heyas
            <br/>So <a href="http://www.gameplanet.co.nz/pc/news/g542912c759209/First-person-survival-horror-Phantasmal-wins-NZ-25K-KiwiGameStarter-comp/?utm_source=twitter&utm_medium=social">Phantasmal</a> won the <a href="http://www.nzgda.com/news/nz-games-industry-launches-business-startup-competition/">KiwiGameStarter</a> - well done again guys, please check out their game and support them.
            <br/>And now some new Screenshots!!! :D
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/MonsterMaze-2014-10-14-22-41-25-68.png"/>
          <p className={ ArticleStyles.textContainer }>
            Title Screen
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/MonsterMaze-2014-10-14-22-42-07-49.png"/>
          <p className={ ArticleStyles.textContainer }>
            Level Launch screen
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/MonsterMaze-2014-10-14-22-43-58-80.png"/>
          <p className={ ArticleStyles.textContainer }>
            Some early madness
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/MonsterMaze-2014-10-14-22-45-32-94.png"/>
          <p className={ ArticleStyles.textContainer }>
            Getting better :D
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/MonsterMaze-2014-10-14-22-46-32-00.png"/>
          <p className={ ArticleStyles.textContainer }>
            Victory!!
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 14th Oct 2014
          </p>
        </div>
    )
  }
})