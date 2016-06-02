const React = require( 'react');
const ComponentBase = require( '../mixins/component-base' );
const ButtonInput = require('./button-input');
const SocialMediaButtons = require('./social-media-buttons');
const AnimationContainer = require('./animation-container');
const MobileMenuStyles = require('../styles/mobile-menu-styles'); 
const MenuStyles = require('../styles/menu-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <AnimationContainer id='MobileMenuAnimation' className={ MobileMenuStyles.container }>
        <div className={ MenuStyles.container }>
            <div className={ MenuStyles.main }>
              <div className={ MenuStyles.menuOptions }>
                <ButtonInput id="DevBlog"   className={ MenuStyles.option }>Devblog</ButtonInput>
                <ButtonInput id="Games"     className={ MenuStyles.option }>Games</ButtonInput>
                <ButtonInput id="OurStory"  className={ MenuStyles.option }>Our Story</ButtonInput>
                <ButtonInput id="ContactUs" className={ MenuStyles.option }>Contact Us</ButtonInput>
              </div>
              <SocialMediaButtons />
            </div>
        </div>
      </AnimationContainer>
    )
  }
})