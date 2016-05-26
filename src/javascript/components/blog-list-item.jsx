const React = require('react');
const ComponentBase = require('../mixins/component-base');
const ActionManager = require('../actions/action-manager');
const AnimationContainer = require('./animation-container');
const BlogListItem = require('./blog-list-item');

const BlogListStyles = require('../styles/blog-list-styles');


module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return { page: "Home" };
  },

  componentDidMount() {
    ActionManager.actionBus.push( { actionKey: "BlogItem", props: this.props } )
  },

  render() {
    return (
      <div className={ BlogListStyles.itemContainer }>
        <img src={ "../content/images/" + this.props.img } />
        <h3>{ this.props.title }</h3>
        <p>{ this.props.subtext }</p>
      </div>
    )
  }
})