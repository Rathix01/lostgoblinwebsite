const React = require('react');
const ComponentBase = require('../mixins/component-base');

module.exports = React.createClass({

	mixins: [ ComponentBase ],

	getInitialState() {
	    return { display: this.props.defaultVisibility === true ? true : false }
	},

 	render() {
 		return <div style={{ display: this.state.display === true ? "block" : "none" }} className={ this.props.className }>
 			{ this.props.children }
 		</div>
 	}
});