const React = require( 'react');
const ComponentBase = require( '../mixins/component-base' );
const MenuStyles = require('../styles/menu-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      	<div className={ MenuStyles.socialMediaButtons }>
	      <a href='https://twitter.com/lostgoblin' target='_blank' className={ MenuStyles.twitterButton }></a>
	      <a href='https://www.facebook.com/lostgoblin' target='_blank' className={ MenuStyles.facebookButton }></a>
	      <a href='https://www.youtube.com/channel/UC7ZqW4h80IIZmD9lucm2iow' target='_blank' className={ MenuStyles.youtubeButton }></a>
	      <a href='https://www.instagram.com/art_goblin/' target='_blank' className={ MenuStyles.instagramButton }></a>
	      <a href='https://nz.pinterest.com/lostgoblin/' target='_blank' className={ MenuStyles.pintrestButton }></a>
	    </div>
    )
  }
})

