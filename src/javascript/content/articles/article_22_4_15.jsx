const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Has it really been 3 months??</h1>
          <p className={ ArticleStyles.textContainer }>
            Wow so it is almost the end of April and a lot has happened since we last posted an update, we launched our first game <a href="http://www.lostgoblin.com/games/monstermaze/">MonsterMaze</a> thank you everyone that downloaded and played it, we even got a 8/10 review <a href="http://gameslikefinder.com/monstermaze-defense-of-the-cookies/">GamesLikeFinder Review</a>.
          </p>
          <p className={ ArticleStyles.textContainer }>
            I quit my day job to become our first full time team member, decided that with no current ties I could code from anywhere in the world with my laptops so have moved to Texas for a couple of months as my first digital nomad destination.  I will do a separate travel update so stay tuned for that.
          </p>
          <p className={ ArticleStyles.textContainer }>
            I even managed to finally get myself a twitter account @codergoblin well behind the times I know, but better late than never so give me a follow.
          </p>
          <p className={ ArticleStyles.textContainer }>
            Now for what the future holds for Lost Goblin... firstly while we have had a great response to MonsterMaze from the people that played it, we did not have a lot of downloads.  There are many reasons for this especially around our lack of visibility and the saturation of games in the App Stores, but the best thing we can do at this stage is work on an update that includes some more content for our current players and better social interaction and achievements to try and get more conversations happening on our players social feeds.
          </p>
          <p className={ ArticleStyles.textContainer }>
            Secondly we are working through the planning stages of our second title, it is a little too early for a proper announcement but we are getting quietly excited about it ;)
          </p>
          <p className={ ArticleStyles.textContainer }>
            It is both amazing and scary to finally be a full time indie developer especially when our current title does not come close to supporting me let alone Art Goblin as well, but I am looking forward to the challenges ahead and having the chance to tell you all about it.
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: CodeGoblin, Date: 22nd Apr 2015
          </p>
        </div>
    )
  }
})