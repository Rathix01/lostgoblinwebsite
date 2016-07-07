const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>June Update</h1>
          <p className={ ArticleStyles.textContainer }>
            I know its late June and we have been a bit quiet on the update front.  Our main focus over the last month has been to complete the update to <a className={ ArticleStyles.link } href="http://www.lostgoblin.com/games/monstermaze">MonsterMaze</a> which is currently completed and in testing for both iOS and Google Store.  We expect this to be ready for release within the coming week.
            <br/><br/>The update consists of 10 new levels and proper leader boards and achievements using both Google Play and Game Center.
            <br/><br/>Personally I have moved again since last update and I am currently living in Tokyo for three months.  I start some Japanese language lessens next week for the duration of my stay which I am looking forward to.  Tokyo is by far the largest city I have lived in and I am enjoying just wandering the streets and finding strange little shrines and shops.
            <br/><br/>I attended the <a className={ ArticleStyles.link } href="https://www.facebook.com/insertcointokyo">Insert Coin</a> game developers meetup last night which is a Tokyo based meetup with mainly foreign game developers that are working in Japan.  Was good to meet some people from the industry and see what is happening here.
            <br/><br/>Looking to the future I have been cutting some code in Unreal which has been a very pleasant experience, it is taking a little getting used to their work flow and with the ability to code in C++ and use their blueprint system there is lots of ways to solve the same problems.
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: CodeGoblin, Date: 26th Jun 2015
          </p>
        </div>
    )
  }
})