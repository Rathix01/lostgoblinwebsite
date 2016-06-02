const React = require('react');
const ComponentBase = require('../mixins/component-base');
const AnimationContainer = require('./animation-container');
const HamburgerMenuStyles = require('../styles/hamburger-menu-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return { clicks: 0 };
  },

  handleClick() {
    this.setState({ clicks: this.clicks + 1 }, this.publishState )
  },

  render() {
    return (
        <div className={ HamburgerMenuStyles.container } onClick={ this.handleClick }>
          <AnimationContainer id={ this.props.id + 'HamburgerContainer' } className={ HamburgerMenuStyles.innerContainer }>
            <AnimationContainer id={ this.props.id + 'Hamburger1' } className={ HamburgerMenuStyles.bar1 } />
            <AnimationContainer id={ this.props.id + 'Hamburger2' } className={ HamburgerMenuStyles.bar2 } />
            <AnimationContainer id={ this.props.id + 'Hamburger3' } className={ HamburgerMenuStyles.bar3 } />
          </AnimationContainer>
        </div>
    )
  }
})
