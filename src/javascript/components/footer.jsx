/**
 * @jsx React.DOM
 */
const React = require( 'react')
const ComponentBase = require( '../mixins/component-base' );
const AnimationContainer = require('./animation-container');
const SocialMediaButtons = require('./social-media-buttons');
const FooterStyles = require('../styles/footer-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  getCurrentYear() {
    return new Date().getFullYear();
  },

  render() {
    return (
      <div className={ FooterStyles.container }>
        <div className={ FooterStyles.footerContent }>
          <div className={ FooterStyles.socialMediaButtonBackground }>
            <div className={ FooterStyles.socialMediaButtonPosition }>
              <SocialMediaButtons id="FooterSocialMediaButtons" />
            </div>
          </div>
          <div className={ FooterStyles.disclaimer }>
            { String.fromCharCode(169) } Copyright Lost Goblin { this.getCurrentYear() }. All rights reserved. 
          </div>
        </div>
      </div>
    )
  }
})