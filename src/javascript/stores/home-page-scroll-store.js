const Bacon = require('baconjs');
const MenuOptionStore = require('./menu-option-store');
const ScrollElementStore = require('./scroll-element-store');
const WindowScrollPositionStore = require('./window-scroll-position-store');
const BlogListActions = require('../actions/blog-list-actions');

const toTemplate = ( el, scroll, change ) => ({ el: el, scroll: scroll, change: change })
const toPosition = ( menuOption ) => ({ y: document.querySelector( "#" + menuOption.actionKey ).getBoundingClientRect().top });
const scrollToTarget = ( template ) => {
	TweenMax.to( template.el, 0.5, { scrollTop: toY( template ), ease: Power2.easeInOut } )
}
const toY = ( template ) => ( ( template.scroll.position + template.change.y ) - 40 );

const el = ScrollElementStore.scrollElement;
const toTopOfDevBlog = BlogListActions.actions.ShowBlogList.map( { actionKey: "DevBlog" } );
const toTopOfHeros = BlogListActions.actions.HeroItemSelect.map( { actionKey: "DevBlog" } );

const positionUpdates = MenuOptionStore.menuUpdates.merge( toTopOfDevBlog ).merge( toTopOfHeros );

const positionChange = positionUpdates.map( toPosition );
const position = WindowScrollPositionStore.scrollPosition

const positions = Bacon.when( [ el.toProperty(), 
			  position.toProperty(),
			  positionChange.toEventStream() ], toTemplate )

positions.onValue( scrollToTarget )