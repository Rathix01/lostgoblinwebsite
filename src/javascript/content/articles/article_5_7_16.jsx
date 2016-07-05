const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

// <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://nz.pinterest.com/gustavseymore/building-refs/"></a>
// <a data-pin-do="embedBoard" data-pin-board-width="400" data-pin-scale-height="240" data-pin-scale-width="80" href="https://nz.pinterest.com/gustavseymore/goblin-homes/"></a>
// <script async defer src="//assets.pinterest.com/js/pinit.js"></script>

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>And we’re back!</h1>
          <p className={ ArticleStyles.textContainer }>
            Our website went through some very necessary major surgery and now we are finally back. Thank you all for being patient. Please follow us and let us know what you think of the new site and if you see any terrible mistakes :D 
            <br/><a href="https://twitter.com/lostgoblin">@lostgoblin</a>
          </p>
          <h1 className={ ArticleStyles.subHeader }>Part 2 - Buildings</h1>
          <p className={ ArticleStyles.textContainer }>
            Last time we looked at the development of the general, environment and world art style. This time I want to show you the path we took to develop the buildings of Goblins of Elderstone.
          </p>
          <p className={ ArticleStyles.textContainer }>
            Right in the beginning I started with researching a lot of tribal cultural huts and buildings as well as concept art for fantasy tribal races such as orcs and trolls and obviously goblins from other franchises such as Warcraft, Warhammer, Lord of the Rings etc but also more simple and colourful styles found in Dofus and concepts for low poly style buildings. My inspiration board is <a href="https://nz.pinterest.com/gustavseymore/building-refs/">here</a> and <a href="https://nz.pinterest.com/gustavseymore/goblin-homes/">here</a>
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Jonathan-Kirtz-4.jpg"/>     
          <p className={ ArticleStyles.textContainer }>
            <a href="http://www.geeknative.com/44964/art-jonathan-kirtz/">Jonathan Kirtz</a>
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/seaver-liu-smithy-v006b.jpg"/>     
          <p className={ ArticleStyles.textContainer }>
            <a href="https://www.artstation.com/artwork/egkQ6">Seaver Liu</a>
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Dofus_ConceptArts_BlackLiliPute_2.jpg"/>     
          <p className={ ArticleStyles.textContainer }>
            <a href="http://www.theconceptartblog.com/2014/08/10/artes-de-etienne-corbaurx-para-o-game-dofus/">Etienne Corbaurx</a>
          </p>
          <p className={ ArticleStyles.textContainer }>
            I also really loved these concepts I found on pinterest by this artist <a href="https://www.behance.net/mazarat">Azamat Khairov</a>
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/hut.jpg"/>     
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/hut2.jpg"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/hut3.jpg"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/hut4.jpg"/>
          <p className={ ArticleStyles.textContainer }>
            <a href="https://www.behance.net/gallery/19364091/Little-house">Little House</a>
          </p>
          <p className={ ArticleStyles.textContainer }>
            So we started out with some concepts based on these various styles:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Goblin_buildings00.png"/>           
          <p className={ ArticleStyles.textContainer }>
            And then decided this one was the best to start with was a take on this lovely concept by <a href="http://drawcrowd.com/projects/8b1ae8f4ca1bd46bec0e3e8dfbab7e2af8c6eaa3">Stoyan Stoyanov</a> as a reference:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Shaman_Hut_02.jpg"/>
          <p className={ ArticleStyles.textContainer }>
            It had all the right materials and simplicity so I made a sketch based on it which we developed as a placeholder for our concept render
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/concept.PNG"/>
          <p className={ ArticleStyles.textContainer }>
            Which became these assets (along with the little house from earlier) for the very early proof of concept/look render I did in Blender:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Tribes_worldart_test_night_newhut01.png"/>
          <p className={ ArticleStyles.textContainer }>
            When we finally went into full production our new artist <a href="https://twitter.com/MomoSchli">@MomoSchli</a> joined us and we started refining the models starting with the Grand Hall (which is the main building for the tribe). We decided to skip the concept sketching phase and do our concepting straight in 3D because the style was so fast (simple shapes, no textures, all vertex painted) and our artist was so fast that we could get a better feel for these buildings in 3d and in engine.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/building.png"/>     
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/warren_moritz.png"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Building_WarrenKing.png"/>
          <p className={ ArticleStyles.textContainer }>
            Development of the blacksmith building:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Building_BlacksmithDev.png"/>
          <p className={ ArticleStyles.textContainer }>
            Some turntables of more recent buildings:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/FaithHall.gif"/>     
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Tavern.gif"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Temple.gif"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Tower.gif"/>
          <p className={ ArticleStyles.textContainer }>
            Here are some more renders of buildings we’ve done that are not quite in the game yet:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Building_Voodoohut04.png"/>     
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Building_Butcher.png"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Building_Barracks02.png"/>
          <p className={ ArticleStyles.textContainer }>
            The idea of walkways and paths and lots of robes and stilts has always been important to me to get more of a chaotic goblin feeling. As seen here in the goblin town scene in The Hobbit.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/goblintown.jpg"/>
          <p className={ ArticleStyles.textContainer }>
            So the pathway system (which was explained in an <a href="http://www.lostgoblin.com/blog?id=fork_in_the_road">earlier post</a>) was really important to be part of the building's aesthetic
          </p>
          <p className={ ArticleStyles.textContainer }>
            Pathways working in an earlier version:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/ScreenShot00361.png"/>
          <p className={ ArticleStyles.textContainer }>
            This look and feel is something we will keep developing and improving.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/ScreenShot00227.png"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/ScreenShot00282.png"/>
          <h1 className={ ArticleStyles.subHeader }>Buildings for the Region Map</h1>
          <p className={ ArticleStyles.textContainer }>
            We also spent some time recently developing buildings for the region map. These serve as map location markers for settlements and interesting location that the player can deal with on the region game map layer.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/SettlementCastle.gif"/>     
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/SettlementVillage.gif"/>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/Dungeon.gif"/>
          <p className={ ArticleStyles.textContainer }>
            And here is what they look like, in game, in a very early version of the region map:
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/ScreenShot00440.png"/>
          <p className={ ArticleStyles.textContainer }>
            Well that&rsquo;s it for now. I hope this was insightful and interesting to you all. We&rsquo;ll be back sooner next time with the next part of this art process tour, showing of the main stars of the game; our super adorable goblins! :D
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_5_7_16/GOE_Gobo01.png"/>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 5th Jul 2016
          </p>
        </div>
    )
  }
})