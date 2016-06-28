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
        <div>
            <div className={ MobileMenuStyles.menuAreas }>
              <div className={ MobileMenuStyles.menuOptions }>
                <ButtonInput id="DevBlog"   className={ MenuStyles.option + " " + MobileMenuStyles.option }>Devblog</ButtonInput>
                <ButtonInput id="Games"     className={ MenuStyles.option + " " + MobileMenuStyles.option }>Games</ButtonInput>
                <ButtonInput id="OurStory"  className={ MenuStyles.option + " " + MobileMenuStyles.option }>Our Story</ButtonInput>
                <ButtonInput id="ContactUs" className={ MenuStyles.option + " " + MobileMenuStyles.option }>Contact Us</ButtonInput>
              </div>
              <div className={ MobileMenuStyles.socialMediaArea }>
                <SocialMediaButtons />
              </div>
            </div>
        </div>
      </AnimationContainer>
    )
  }
})