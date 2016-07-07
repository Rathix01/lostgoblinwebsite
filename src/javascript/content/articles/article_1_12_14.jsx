const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>Concepts of our spaceship</h1>
          <p className={ ArticleStyles.textContainer }>
            Been working hard on the concepts for the spaceship that represents the player on the progression map. Here are a few of the early and late concepts. I was struggling with the perspective of the &ldquo;dramatic&rdquo; angel I chose, so I decided to build a rough model in Blender. This was my first attempt at using Blender. I&rsquo;m ultimately happy with the results I got but don&rsquo;t think my initial design is very strong as far as spaceships go.
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/MM_spaceship.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            original concepts and planes
          </p>
          <div className={ ArticleStyles.imageContainer }>
            <img className={ ArticleStyles.textImage } src="./content/images/spaceship-in-perspective.jpg"/>
          </div>
          <p className={ ArticleStyles.textContainer }>
            renders of rough model
          </p>
          <p className={ ArticleStyles.textContainer }>
            Next I will probably take the render into illustrator and use it as a guide to create a 2d vector image that will then be coloured and become the final asset for the game.
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: ArtGoblin, Date: 1st Dec 2014
          </p>
        </div>
    )
  }
})