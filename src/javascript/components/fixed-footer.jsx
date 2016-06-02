const React = require('react');
const ComponentBase = require('../mixins/component-base');
const SocialMediaButtons = require('./social-media-buttons');
const FooterStyles = require('../styles/footer-styles')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
        <div className={ FooterStyles.fixedFooter }>
          <SocialMediaButtons id="FixedFooterSocialMediaButtons" />
        </div>
    )
  }
})