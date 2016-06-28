const Bacon = require('baconjs')
const R = require('ramda');
const ContactUsActions = require('../actions/contact-us-actions');
const StateStore = require('./state-store');
const AnimationStore = require('./animation-store');

const includeValid = ( state ) => R.merge( state, { valid: state.value && state.value.length > 0 } )
const toTemplate = ( name, email, message ) => ({ name, email, message })
const filterToInvalidFields = ( template ) => R.filter( ( key ) => template[ key ].valid !== true, R.keys( template ) )
const allFieldsAreValid = ( template ) => filterToInvalidFields( template ).length === 0;
const notAllFieldsAreValid = ( template ) => filterToInvalidFields( template ).length > 0;
const toDisplayErrorMessage = ( template ) => ({ display: true })
const toHideErrorMessage = ( template ) => ({ display: false })

const toDisplayTweens = ( scroll ) => ({
	tweenProps: [{
			time: 0.6,
			fn: "fromTo", 
			label: "ThankyouShow", 
			target: "ThankyouAnimation", 
			from: { y: 100, opacity: 0 }, 
			to: { y: -30, opacity: 1,  ease: Back.easeInOut },
	}]
});

const toHideState = ( scroll ) => ({ y: 500, opacity: 0 })
const postEmail = ( data ) => {

	var data = {
		_subject: "Lost Goblin Website - Contact Us",
		email: data.email.value,
		name: data.name.value,
		message: data.message.value
	};

	var xmlhttp = new XMLHttpRequest();
  	xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      try {
        var response = expectJsonResult
          ? JSON.parse(xmlhttp.responseText)
          : xmlhttp.responseText;
        d.resolve(response);
      } catch( exception ) {
        d.reject( 'could not parse: '+ xmlhttp.responseText);
      }
    }
  }
  xmlhttp.open( "POST", "https://formspree.io/support@lostgoblin.com" , true );
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify( data ));

}

const name = ContactUsActions.actions.Name.map( includeValid ).toProperty({ valid: false });
const email = ContactUsActions.actions.Email.map( includeValid ).toProperty({ valid: false });
const message = ContactUsActions.actions.Message.map( includeValid ).toProperty({ valid: false });
const trigger = ContactUsActions.actions.SendMessage.toEventStream();

const messageTemplate = Bacon.when([ name, email, message, trigger ], toTemplate );
const messageFieldsTemplate = Bacon.combineTemplate({ name, email, message }).filter( allFieldsAreValid )

const validMessageTemplate = messageTemplate.filter( allFieldsAreValid )
const notValidMessageTemplate = messageTemplate.filter( notAllFieldsAreValid )

notValidMessageTemplate.map( toDisplayErrorMessage ).debounce(50).onValue( StateStore.publish("ErrorMessage") )
validMessageTemplate
	.merge( messageFieldsTemplate.toEventStream() )
	.map( toHideErrorMessage )
	.onValue( StateStore.publish("ErrorMessage") )

validMessageTemplate.onValue( postEmail )

Bacon.once({}).map( toHideState ).onValue( StateStore.publish("ThankyouAnimation") );
validMessageTemplate.map( toDisplayTweens ).onValue( AnimationStore.toTimeline );