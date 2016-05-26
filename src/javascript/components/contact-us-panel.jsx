const React = require('react');
const ComponentBase = require('../mixins/component-base');
const ContactUsPanelStyles = require('../styles/contact-us-panel-styles');
const ButtonInput = require('./button-input');
const TextInput = require('./text-input');
const TextAreaInput = require('./text-area-input');
const ErrorMessage = require('./error-message')
const AnimationContainer = require('./animation-container')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className={ ContactUsPanelStyles.container } id='ContactUs'>
        <h1 className={ ContactUsPanelStyles.header }> Contact Us </h1>
        <div className={ ContactUsPanelStyles.contactUs }>
          <div className={ ContactUsPanelStyles.nameAndEmail }>
            <TextInput id="Name" placeholder="Name" className={ ContactUsPanelStyles.textInput } />
            <TextInput id="Email" placeholder="Email" className={ ContactUsPanelStyles.textInput } />
          </div>
          <div className={ ContactUsPanelStyles.yourMessage }>
            <TextAreaInput id="Message" placeholder="Message" className={ ContactUsPanelStyles.textAreaInput } />
            <ButtonInput id="SendMessage"  className={ ContactUsPanelStyles.sendMessageButton }>Send Message</ButtonInput>
            <ErrorMessage id="ErrorMessage" className={ ContactUsPanelStyles.errorMessage } />
          </div>
        </div>
        <AnimationContainer id="ThankyouAnimation" className={ ContactUsPanelStyles.thankyouContainer }> 
          <div className={ ContactUsPanelStyles.thankyou }>
            <h1>Thanks!</h1>
            <p>Our mail goblin will get that to us soon</p>
          </div>
        </AnimationContainer>
      </div>
    )
  }
})