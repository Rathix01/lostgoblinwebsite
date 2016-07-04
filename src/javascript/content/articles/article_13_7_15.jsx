const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>MonsterMaze UPDATE</h1>
          <p className={ ArticleStyles.textContainer }>
            Hey everyone
            <br/>MonsterMaze has just been updated and is NOW available from your store!
            <br/><a href="https://itunes.apple.com/us/app/monstermaze-defense-cookies/id935872732">iOS</a>
            <br/><a href="https://play.google.com/store/apps/details?id=com.lostgoblin.monstermaze">Google Play</a>
            <br/>We've added 10 new super hard levels, lets see what you got! Also added Achievements, Game Centre, Google Play, new improved Global leaderboards and Facebook invites, so please invite all your friends!
            <br/>Thanks for all the support from all our friends and family so far, please install the update and pass this along
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/wmplayer-2015-06-28-13-11-06-87.png"/>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 13th Jul 2015
          </p>
        </div>
    )
  }
})