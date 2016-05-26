const React = require('react');
const ComponentBase = require('../mixins/component-base');
const Header = require('./header');
const Menu = require('./menu');
const StickyMenu = require('./sticky-menu');
const HomePage = require('./home-page')
const ArticlePage = require('./article-page');
const Footer = require('./footer');

const MainStyles = require('../styles/main-styles')

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  getInitialState() {
    return { page: "Home" };
  },

  render() {
    return (
      <main className='main-container'>
        <Header id='Header' />
        <Menu id='MainMenu' />
        <HomePage />
        <StickyMenu id='StickyMenu' />
        <Footer />
      </main>
    )
  }
})