const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Beta!!!</h1>
          <p className={ ArticleStyles.textContainer }>
            Hey all, so we are finally in Beta (sort of) - we sent out our first testflight build to some friends and I set up a google form survey to go with it. yeay! but then we immediately realised we haven't played the build on iphones for ages as we always play on ipad and the UI is a little bit to small and frustrating to place towers... So that's what I'll be working on this weekend!!!
            <br/>Oh well, happy to at this stage that we can be sending out builds and hopefully everyone will give us useful feedback.
            <br/>Here is a new screenshot and the latest Title screen:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/MonsterMaze-2014-10-14-22-45-32-94.png"/>
          <img className={ ArticleStyles.textImage } src="./content/images/Titlescreen.png"/>
          <p className={ ArticleStyles.textContainer }>
            enjoy, remember to follow @lostgoblin
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 19th Nov 2014
          </p>
        </div>
    )
  }
})