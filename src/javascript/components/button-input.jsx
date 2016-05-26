const React = require('react');
const ComponentBase = require('../mixins/component-base');

module.exports = React.createClass({

	mixins: [ ComponentBase ],

	getInitialState() {
	    return { clicks: 0 }
	},

	getButtonClassName() {
 		return this.props.className ? this.props.className : "";
 	},

 	handleClick() {
 		this.setState( { clicks: ( this.state.clicks + 1 ) }, this.publishState );
 	},

 	render() {
 		return <button className={ this.getButtonClassName() + " btn" } onClick={ this.handleClick }>{ this.props.text } { this.props.children }</button>
 	}
});
