const React = require('react');
const ComponentBase = require('../mixins/component-base');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className='main-container'>
        Blog Article
      </div>
    )
  }
})