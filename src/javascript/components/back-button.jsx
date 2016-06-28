const React = require('react');
const ComponentBase = require('../mixins/component-base');
const BackButtonStyles = require('../styles/back-button-styles');
const VisibilityToggle = require('./visibility-toggle');
const AnimationContainer = require('./animation-container');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  handleClick() {
    this.publishToAction( this.props.id + 'BackButton', {} );
  },

  render() {
    return (
      <VisibilityToggle id='DevPanelBackButtonVisibility'>
        <AnimationContainer id="DevPanelBackButtonAnimation"  className={ BackButtonStyles.container }>
          <div className={ BackButtonStyles.clickArea } onClick={ this.handleClick }></div>
        </AnimationContainer>
      </VisibilityToggle>
    )
  }
})