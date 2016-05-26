const React = require('react');
const ComponentBase = require('../mixins/component-base');
const DevBlogPanel = require('./dev-blog-panel');
const GamesPanel = require('./games-panel');
const OurStoryPanel = require('./our-story-panel');
const ContactUsPanel = require('./contact-us-panel');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div>
        <DevBlogPanel id='DevBlogPanel' />
        <GamesPanel id='GamesPanel' />
        <OurStoryPanel id="OurStoryPanel" />
        <ContactUsPanel id="ContactUsPanel" />
      </div>
    )
  }
})