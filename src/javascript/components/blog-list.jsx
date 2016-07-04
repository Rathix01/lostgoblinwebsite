// System.
const React = require('react');
const ComponentBase = require('../mixins/component-base');
const AnimationContainer = require('./animation-container');
const VisibilityToggle = require('./visibility-toggle');
const BlogListStyles = require('../styles/blog-list-styles');
const BlogListItem = require('./blog-list-item');

// Add the article component require statements here...
const Article_4_12_15 = require('../content/articles/article_4_12_15');
const Article_27_11_15 = require('../content/articles/article_27_11_15');
const Article_19_11_14 = require('../content/articles/article_19_11_14');
const Article_26_6_15 = require('../content/articles/article_26_6_15');
const Article_19_2_16 = require('../content/articles/article_19_2_16');
const Article_3_1_15 = require('../content/articles/article_3_1_15');
const Article_20_9_15 = require('../content/articles/article_20_9_15');
const Article_1_12_14 = require('../content/articles/article_1_12_14');
const Article_8_1_16 = require('../content/articles/article_8_1_16');
const Article_3_8_15 = require('../content/articles/article_3_8_15');
const Article_13_7_15 = require('../content/articles/article_13_7_15');
const Article_10_12_14 = require('../content/articles/article_10_12_14');
const Article_24_8_14 = require('../content/articles/article_24_7_14');
const Article_1_9_14 = require('../content/articles/article_1_9_14');
const Article_24_1_15 = require('../content/articles/article_24_1_15');
const Article_22_4_15 = require('../content/articles/article_22_4_15');
const Article_14_10_14 = require('../content/articles/article_14_10_14');


module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
      <VisibilityToggle id="BlogList" defaultVisibility={ false } className={ BlogListStyles.container }>
        <AnimationContainer id="BlogListAnimation" className={ BlogListStyles.list }>
          
          <BlogListItem id="Article_19_2_16"
                        title="Art Process"
                        subtext="Part one of developing the art in Goblins of Elderstone"
                        hero='1'
                        img="article_19_2_16/art-board.png"
                        url="art_process_1"
                        component= {Article_19_2_16}>
          </BlogListItem>

          <BlogListItem id="Article_8_1_16"
                        title="A Fork in the Road"
                        subtext="Creating pathways in Goblins of Elderstone"
                        hero='2'
                        img="image00.png"
                        url="fork_in_the_road"
                        component= {Article_8_1_16}>
          </BlogListItem>

          <BlogListItem id="Article_4_12_15"
                        title="UMG GUI System"
                        subtext="How we implemented UMG GUI in Goblins of Elderstone"
                        img="AddGUI.png"
                        url="umg_gui_system"
                        component= {Article_4_12_15}>
          </BlogListItem>

          <BlogListItem id="Article_27_11_15"
                        title="Goblins are Here"
                        subtext="Announcing our new game"
                        hero='3'
                        img="GoE_Logo.png"
                        url="goblins_are_here"
                        component= {Article_27_11_15}>
          </BlogListItem>

          <BlogListItem id="Article_20_9_15"
                        title="A NEW GAME IS COMING!"
                        subtext="Almost announcing our new game"
                        img="GoE_Logo.png"
                        url="new_game_coming"
                        component= {Article_20_9_15}>
          </BlogListItem>

          <BlogListItem id="Article_3_8_15"
                        title="MonsterMaze mentioned"
                        subtext="We got a mention on Smallworlds!"
                        img="Titlescreen.png"
                        url="monstermaze_mention"
                        component= {Article_3_8_15}>
          </BlogListItem>

          <BlogListItem id="Article_13_7_15"
                        title="MonsterMaze UPDATE"
                        subtext="MonsterMaze has just been updated and is NOW available from your store!"
                        img="wmplayer-2015-06-28-13-11-06-87.png"
                        url="monstermaze_update"
                        component= {Article_13_7_15}>
          </BlogListItem>

          <BlogListItem id="Article_26_6_15"
                        title="June Update"
                        subtext="An update for June 2015"
                        img="Titlescreen.png"
                        url="june_update"
                        component= {Article_26_6_15}>
          </BlogListItem>

          <BlogListItem id="Article_22_4_15"
                        title="Has it really been 3 months??"
                        subtext="Wow so it is almost the end of April and a lot has happened since we last posted an update"
                        img="Titlescreen.png"
                        url="april_update"
                        component= {Article_22_4_15}>
          </BlogListItem>

          <BlogListItem id="Article_24_1_15"
                        title="New logo for Lost Goblin!"
                        subtext="Happy to announce a new logo for Lost Goblin!"
                        img="black_banner.png"
                        url="new_logo"
                        component= {Article_24_1_15}>
          </BlogListItem>

          <BlogListItem id="Article_3_1_15"
                        title="Happy Holidays and a bright 2015!!"
                        subtext="Looking to the future"
                        img="Titlescreen.png"
                        url="happy_holidays"
                        component= {Article_3_1_15}>
          </BlogListItem>

          <BlogListItem id="Article_10_12_14"
                        title="Using Instruments to find code leaks"
                        subtext="Using XCode Instruments to optimize MonsterMaze"
                        img="Screenshot-2014-12-10-22.32.34.png"
                        url="using_instruments"
                        component= {Article_10_12_14}>
          </BlogListItem>

          <BlogListItem id="Article_1_12_14"
                        title="Concepts of our spaceship"
                        subtext="Been working hard on the concepts for the spaceship that represents the player on the progression map. Here are a few of the early and late concepts."
                        img="spaceship-in-perspective.jpg"
                        url="spaceship_concepts"
                        component= {Article_1_12_14}>
          </BlogListItem>

          <BlogListItem id="Article_19_11_14"
                        title="Beta!!!"
                        subtext="MonsterMaze has entered beta"
                        img="Titlescreen.png"
                        url="monstermaze_beta"
                        component= {Article_19_11_14}>
          </BlogListItem>

          <BlogListItem id="Article_14_10_14"
                        title="New Screenshots"
                        subtext="Some new MonsterMaze screenshots"
                        img="MonsterMaze-2014-10-14-22-41-25-68.png"
                        url="monstermaze_screenshots"
                        component= {Article_14_10_14}>
          </BlogListItem>

          <BlogListItem id="Article_1_9_14"
                        title="Gameplay Video"
                        subtext="Our first gameplay video is up on our new youtube channel!!!"
                        img="MonsterMaze-2014-10-14-22-41-25-68.png"
                        url="monstermaze_gameplay"
                        component= {Article_1_9_14}>
          </BlogListItem>

          <BlogListItem id="Article_24_8_14"
                        title="Press Releases and Marketing MonsterMaze"
                        subtext="So as we are getting close to finishing our first game Monster Maze the questions around how to market ourselves and our game are starting to bubble up to the top of the most important issues to think about."
                        img="MonsterMaze-2014-10-14-22-41-25-68.png"
                        url="monstermaze_marketing"
                        component= {Article_24_8_14}>
          </BlogListItem>

        </AnimationContainer>
      </VisibilityToggle>
    )
  }
})