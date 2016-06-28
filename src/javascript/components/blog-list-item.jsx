const React = require('react');
const ComponentBase = require('../mixins/component-base');
const ActionManager = require('../actions/action-manager');
const AnimationContainer = require('./animation-container');
const BlogListItem = require('./blog-list-item');
const R = require('ramda')

const BlogListStyles = require('../styles/blog-list-styles');


module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return { page: "Home" };
  },

  componentDidMount() {
    ActionManager.actionBus.push( { actionKey: "BlogItem", props: this.props } )
  },

  handleClick() {
    this.publishToAction( "BlogItemSelect", { props: this.props })
  },

  render() {
    return (
      <div className={ BlogListStyles.itemContainer } onClick={ this.handleClick }>
        <div className={ BlogListStyles.thumb }>
          <img src={ "../content/images/" + this.props.img } className={ BlogListStyles.thumbImg } />
        </div>
        <div>
          <h3 className={ BlogListStyles.title }>{ this.props.title }</h3>
          <p className={ BlogListStyles.subtext }>{ this.props.subtext }</p>
        </div>
      </div>
    )
  }
})