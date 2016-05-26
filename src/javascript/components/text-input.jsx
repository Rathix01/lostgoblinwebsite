const React = require('react');
const ComponentBase = require('../mixins/component-base');

module.exports = React.createClass({

	mixins: [ ComponentBase ],

  	getInitialState() {
	    return { value: "" }
	},

	getClassName: function () {
 		return this.props.className ? this.props.className : "";
 	},

 	handleChange( e ) {
 		//hack to fix IE11/IE12
 		if( this.state.value === "" && e.target.value === "") return
 		this.setState( { value: e.target.value }, this.publishState );
 	},

 	render: function() {
 		return <input type="text" onChange={ this.handleChange } placeholder={ this.props.placeholder } className={ this.getClassName() } maxLength={ this.props.maxLength } minLength={ this.props.minLength } value={ this.state.value } />
 	}
});