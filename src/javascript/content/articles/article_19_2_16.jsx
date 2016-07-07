const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Art Process</h1>
          <p className={ ArticleStyles.textContainer }>
            It's time to look at the process and journey we have taken to develop the art so far for Goblins of Elderstone. Please note that we are not even in Alpha yet and everything is still very much WORK IN PROGRESS - we have a long way to go still  ;)
          </p>
          <p className={ ArticleStyles.textContainer }>
            It all started almost a year ago with a concept render I did in Blender and we are now finally getting to a much more polished looked in engine in Unreal. I think I’m going to break this up into 4 parts, focusing first on the general look and the environment art, then next time we will go through the buildings evolution. After that we’ll talk about the process for the goblins and creatures and finally we’ll show the path we took with the UI.  
          </p>
          <h1 className={ ArticleStyles.subHeader }>Part 1 - Environment and general look</h1>
          <p className={ ArticleStyles.textContainer }>
            First off let me show some images that were inspirations and references for what I wanted to make and what we wanted to emulate artistically. The first thing I did was build several boards on pinterest with all my favourite images from games and concept art that I thought would be great reference for our game. I &lt;3 pinterest. This proved to be invaluable later when we entered production as it was easy for me to share the boards with other team members to discuss concepts or ideas. I then also created a massive &ldquo;art direction&rdquo; board in Google Drawings with all the Key images from my own concepts, renders and references from images found on pinterest and google images. This was really useful as you can scale the board up to a ridiculous size and past all your images in full res and move them around as you need.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/art-board.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Looking at some of these a little closer and trying to name the references as best I can:
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/pigart.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            This is from a tutorial by <a className={ ArticleStyles.link } href="https://www.youtube.com/watch?v=rtO9maU709k">PigArt</a>, I found on Youtube for Low Poly modeling and has been the foundation of all our vegetation and rocks etc.
          </p>
          <p className={ ArticleStyles.textContainer }>
            There is a lot of great low poly art out there but in terms of colour there are 2 images I always keep coming back to and it's these 2 (I don't know who they belong to):
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/cliff.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            This was found on pinterest and comes from a polycount competition I think, I love the rock colour and the greens.
          </p>
          <p className={ ArticleStyles.textContainer }>
            The colours of these for day and night are great. I believe this belongs to <a className={ ArticleStyles.link } href="https://www.reddit.com/user/ManiacComet">ManiacComet</a>? but was found on pinterest as well.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/forest_s.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            the mood of this at night is also so good
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/night-camp.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            credit <a className={ ArticleStyles.link } href="https://www.behance.net/timmychau">Timmy Chau</a>
          </p>
          <p className={ ArticleStyles.textContainer }>
            And at some point I discovered this increadible art from  <a className={ ArticleStyles.link } href="https://milanvasek.artstation.com/">Milan Vasek</a>
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/autumn.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            I would later use his beautiful birch trees as a reference for my own.
          </p>
          <p className={ ArticleStyles.textContainer }>
            Some of the games that have been an inspiration to the art style as well as the gameplay are obvious, but for this post I only want to focus on the art, environment art specifically, will discuss gameplay and design another day:
          </p>
          <p className={ ArticleStyles.textContainer }>
            <a className={ ArticleStyles.link } href="http://www.dofus.com/en">Dofus/Wakfu</a> - colours and cuteness, I've always loved the art and especially the colours in Dofus.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/dofus2.jpg"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/dofus.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            <a className={ ArticleStyles.link } href="http://www.22cans.com/">Godus</a> - simple design and colours, a lot of their concept/marketing art was really great (let's not talk about the execution of the game…)
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/godus.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            <a className={ ArticleStyles.link } href="http://armello.com/">Armello</a> - disney feeling of fantasy and fable - what a beautiful game.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/armello.jpg"/>
          <p className={ ArticleStyles.textContainer }>
            Of course there are many other games, movies and images that influenced me during the process and many games have been announced or released with a low poly art style now, but the above is a good concentration of what hit the right marks with me and are still references we go to.
            <br/>So! - let me walk you through what we have done so far.
          </p>
          <h1 className={ ArticleStyles.subHeader }>Original Concept Render and Target</h1>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/Tribes_worldart_testHD_withHut_s.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            This was the very first render I did with some basic trees, rocks, a building built from a reference online (I&rsquo;ll get into those in the building part of this post) and my gobo. The world at this stage was 3 boxes.
          </p>
          <p className={ ArticleStyles.textContainer }>
            Night time with lights
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/Tribes_worldart_test_night_newhut01.png"/>
          </div>  
          <p className={ ArticleStyles.textContainer }>
            After some more experiments with lights and a few new assets. I knew I wanted to make the art with vertex painted assets and only doing textures where finer detail was required. I love the idea that the game should make you think of a toy world
          </p>
          <p className={ ArticleStyles.textContainer }>
            When we went into pre-production and added our amazing talented artist <a className={ ArticleStyles.link } href="https://twitter.com/MomoSchli">@MomoSchli</a> we developed the target render further with some of our first building assets, lots of lights and several concept ideas for the environment. (this was also our first reveal of the logo and name for the game)
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/Mockup06.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            More assets and details for the website background.
            <br/>With an art direction established we got to work on getting the game looking like our concept renders.
          </p>
          <p className={ ArticleStyles.textContainer }>
            This was the first set of assets I made (from the original concepts) placed in Unreal with default lighting and materials.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/UE4Editor-2015-07-20-19-01-46-91.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            I knew we had a lot of work to do :/
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/UE4Editor-2015-07-11-00-14-28-64.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            at night with a small horde of goblins. Early days...
          </p>
          <h1 className={ ArticleStyles.subHeader }>The Level</h1>
          <p className={ ArticleStyles.textContainer }>
            Production started and our 3D artist joined the team. He took on the production of the buildings and goblins and I focused on getting the world and environment looking right. After lots of improvements to the materials, lights and a post processing volume along with new assets for cliffs and trees I remade the test made we had been using:
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/Pieces-ready-fopr-assembly.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            All the cliff pieces ready to be used to make the map (eventually we hope to procedurally generate the world with pieces like these)
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/laying-out-the-border.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Building the level
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/frame-done.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/in-3D.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            tada!
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/new-level.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            TADAAA!!!
          </p>
          <p className={ ArticleStyles.textContainer }>
            I was really happy with these results but we were nowhere near the fantastic magical look of our concepts or references. So more work to be done...
          </p>
          <p className={ ArticleStyles.textContainer }>
            New trees and a night and day post processing volume:
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00001.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00002.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            more trees and different tests with water
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00061.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00011.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            argh… I thought this looked good at the time… looking at it now I just shake my head.
          </p>
          <h1 className={ ArticleStyles.subHeader }>Starting fixing the colours</h1>
          <p className={ ArticleStyles.textContainer }>
            So there was a major problem we had with our colours. We just couldn't get the in game colours to look the same as the colours in blender. We discovered that there is an issue with vertex painted assets when imported to Unreal. At first we repainted the assets in blender to be darker and more saturated, but obviously this wasn't going to be viable solution, so we dug around a bit and finally found a solution.
          </p>
          <p className={ ArticleStyles.textContainer }>
            <b>sRGB colour fix</b>
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/srgbColorFix.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            more info on a similar problem with the same solution <a className={ ArticleStyles.link } href="https://answers.unrealengine.com/questions/160870/how-to-set-the-proper-color-in-color-picker.html">here</a>
          </p>
          <p className={ ArticleStyles.textContainer }>
            <b>Colour Grading</b>
          </p>
          <p className={ ArticleStyles.textContainer }>
            The next step, and the one that makes the biggest visual difference by far, is colour grading using a Look Up Table (LUT) reference in the post processing volume.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/screenshotforcolorgrading_s.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            This is a screenshot I took of the game, with some reference cubes of white, yellow, red and blue (should have made one in black I think as well) to use for my colour grading process in photoshop. I used some tutorials for this on youtube and the <a className={ ArticleStyles.link } href="https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/ColorGrading/index.html">documentation</a> on Unreal is great.
            <br/>Here is a before and after
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/colorgrading_JaredAttempt.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Another before and after in the regular game view
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/before.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/after.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            more tweaks and improvements to the colours and post processes for day and night,
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00061.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            At this stage I was finally becoming happy with the look we were getting.
            <br/>It was time to get rid of some of the lifelessness of the &ldquo;flat&rdquo; grass.
          </p>
          <h1 className={ ArticleStyles.subHeader }>Trees and Grass</h1>
          <p className={ ArticleStyles.textContainer }>
            I started playing around with the procedural foliage generator volume in Unreal and we added a texture to the grass material as a shader to create a multicoloured, tessellated low poly texture look to the flat grass surface. Our 3D artist built the shader and I have been playing with some of the variables but it's not quite there yet.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00096.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00103.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            The foliage generator is great!
            <br/>The grass material
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/grass-material.png"/>
          </div>  
          <p className={ ArticleStyles.textContainer }>
            More grass types for the foliage (also added <a className={ ArticleStyles.link } href="https://docs.unrealengine.com/latest/INT/Engine/Rendering/Materials/Functions/Reference/WorldPositionOffset/index.html#simplegrasswind">SimpleWind</a> to make them move), better colours
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00138.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            And finally we changed the look of our water and built a new shader for that
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/water.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/water-mat.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            The water material with its tessellation and noise to make it move ever so subtly. From this <a className={ ArticleStyles.link } href="http://www.broad-strokes.com/2015-01/coconut-express-bonus-content-low-poly-mini-tutorials/">reference</a>.
          </p>
          <p className={ ArticleStyles.textContainer }>
            And the world at night...
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/moonlight.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/night-in-game.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Really coming together but that grass texture needs work...
          </p>
          <p className={ ArticleStyles.textContainer }>
            From a distance
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/ScreenShot00144.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Had lots of issues with shadow distance settings between ray cast shadows and cascade, eventually found some distances that work, but I suspect we will need to do a lot more work to resolve these. you can see the strange AO shadowing around everything happening here at this distance.
          </p>
          <p className={ ArticleStyles.textContainer }>
            And then finally, what the game looks like today:
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/HighresScreenshot00149.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            I’m really glad with what we’ve got going so far but we still have some way to go to get the environment exactly to where we want.
          </p>
          <h1 className={ ArticleStyles.subHeader }>World</h1>
          <p className={ ArticleStyles.textContainer }>
            The world map has gone through a few concepts since we began. This is a very underdeveloped section of the game and will get a lot more attention much later on. I’ll repost about it again when we have worked on it some more.
            <br/>Here are some initial concepts:
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/Worldmap3.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Flat 2D
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/world_render_test1_large.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            very simple 3D low poly
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/world_map.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            low poly ocean with topological &ldquo;cut out&rdquo; flat world and a sun
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/region_map_s.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Finally we decided to go with a world made out of Hexes to better suit a procedurally generated approach. Smaller world space with more replayability. Our 3D artist built these awesome hex cubes to try out a system for it.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/Map_Example.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            A few map sizes. The pieces without colour are undiscovered hexes.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/region-1.png"/>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/region-2.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Returning from the scouting trek
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/region2.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            A larger map
            <br/>What it looks like today, in game
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/world3.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Day
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/article_19_2_16/worldnight.png"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            Night (still have to deal with the sun one day :P)
            <br/>Well that's it for this post. I’ll be posting about the buildings in the next part
            <br/>Cheers
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 19th Feb 2016
          </p>
        </div>
    )
  }
})