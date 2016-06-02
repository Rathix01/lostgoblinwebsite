const React = require( 'react');
const ComponentBase = require( '../mixins/component-base' );
const StickyMenuStyles = require('../styles/sticky-menu-styles');
const MenuStyles = require('../styles/menu-styles');
const ButtonInput = require('./button-input');
const SocialMediaButtons = require('./social-media-buttons')
const AnimationContainer = require('./animation-container')
const HamburgerMenuButton = require('./hamburger-menu-button')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <AnimationContainer id="StickyMenuAnimation" className={ StickyMenuStyles.stickyContainer }>
          <div className={ MenuStyles.main }>
            <div className={ StickyMenuStyles.menuOptions }>
              <ButtonInput id="DevBlog"   className={ MenuStyles.option }>Devblog</ButtonInput>
              <ButtonInput id="Games"     className={ MenuStyles.option }>Games</ButtonInput>
              <ButtonInput id="OurStory"  className={ MenuStyles.option }>Our Story</ButtonInput>
              <ButtonInput id="ContactUs" className={ MenuStyles.option }>Contact Us</ButtonInput>
            </div>
            <div className={ MenuStyles.socialMediaButtonContainer }>
              <SocialMediaButtons /> 
            </div>
            <HamburgerMenuButton id="StickyMenuHamburgerButton" />
          </div>
      </AnimationContainer>
    )
  }
})