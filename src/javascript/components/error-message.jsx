const React = require('react');
const ComponentBase = require('../mixins/component-base');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  toDisplay() {
    return this.state.display ? "block" : "none"
  },

  getClassName() {
    return this.props.className ? this.props.className : "";
  },

  render() {
    return (
        <div className={ this.getClassName() } style={ { 'display': this.toDisplay() } }>
          Please complete all fields.
        </div>
    )
  }
})