const React = require('react');
const ComponentBase = require('../../mixins/component-base');;
const ArticleStyles = require('../../styles/article-styles');

module.exports = React.createClass({
  
  mixins: [ ComponentBase ],

  render() {
    return (
        <div className={ ArticleStyles.container }>
          <h1 className={ ArticleStyles.header }>UMG GUI System</h1>
          <p className={ ArticleStyles.textContainer }>
            When we first starting prototyping up our <a href="http://www.goblinsofelderstone.com">Goblins of Elderstone</a> game I was very new to unreal and UMG was just leaving the realm of experimental.  So when it came to getting some functional GUI into our game I didn’t take much time to think through a system - I just hammered in a basic system where all our GUI popups ( of which we have a lot as our game is a strategy game ) were added to a main GUI widget which could then show and hide the individual popups as it needed.  I knew this would not scale well and by the end of our prototype phase we had a monster of a main gui widget which had to control about 20 individual context specific GUI and know far too much about the context of each GUI to keep everything clean.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/hide_all_hud.png"/>
          <p className={ ArticleStyles.textContainer}>
            HideAllHuds functionality needed to know about every single widget that could have been visible… maintenance knightmare...
            <br/>
            So as we have now moved out of the prototype stage into full production one of the first major tasks was to overhaul the system, so I thought I would share what I did.
            Our new system is pretty straightforward and is focused on two main custom UMG widgets, BaseGUI and BaseWidget.  BaseGUI is the main control for our GUI, it handles creating widgets to show to the user and controlling which widget has focus if needed.  BaseWidget is the base of all of our actual visible GUI widgets and has functions which handle removal of the widget which can be overridden when needed on an individual basis.
          </p>
          <h1 className={ ArticleStyles.subHeader }>BaseGUI</h1>
          <p className={ ArticleStyles.textContainer}>
            BaseGUI is simply a UMG UserWidget that has a blank canvas panel that all our BaseWidgets are added to.  It has variables for the current modal and nonmodal widgets that have been added.  Also for convenience we have added the ingame HUD’s (to shows resource totals and build buttons etc) directly to the BaseGUI.
            <br/>
            It has functions to:
            <br/>
            AddGUI - which adds the widget to the correct place and in the case of non modal dialogs tells an existing widget to remove itself.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/AddGUI.png"/>
          <p className={ ArticleStyles.textContainer}>
            RemoveGUI - calls the OnRemove event of the widget and handles removing the references to the widget
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/RemoveGUI.png"/>
          <p className={ ArticleStyles.textContainer}>
            SetActiveGUI - when a modal dialog is added we set the other visible GUI to hit test invisible so that they can not be interacted with until the modal is resolved.  This function turns that on and off.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/SetActiveGUI.png"/>
          <p className={ ArticleStyles.textContainer}>
            Finally the BaseGUI has custom events to handle the user interaction, this is where it will create individual widgets, add them and call their correct setup functions.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/GameEvent.png"/>
          <h1 className={ ArticleStyles.subHeader }>BaseWidget</h1>
          <p className={ ArticleStyles.textContainer}>
            BaseWidget is a UMG UserWidget that all of our actual game GUI widgets derive from, it has a variable to know if it is modal which is set as a spawn pin.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/IsModal.png"/>
          <p className={ ArticleStyles.textContainer}>
            It has functions to:
            <br/>
            CloseGUI - simply gets the BaseGUI and calls RemoveGUI with itself as the widget
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/CloseGUI.png"/>
          <p className={ ArticleStyles.textContainer}>
            OnRemove - Custom event which is called by BaseGUI on all widgets it removed.  In this widget it simply removes itself from its parent but this is the event that is overridden in our actual GUI classes if it needs further functionality ( like cancelling a specific action that was being set up )
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/OnRemove.png"/>
          <p className={ ArticleStyles.textContainer}> 
            To create one of these we simply create a UMG UserWidget normally then change its base class to BaseWidget
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/Parent.png"/>
          <p className={ ArticleStyles.textContainer}>
            If we need specific functionality at the OnRemove stage we override the function and it gets called whenever this widget is removed.
          </p>
          <img className={ ArticleStyles.textImage } src="./content/images/OverriddenOnRemove.png"/>
          <p className={ ArticleStyles.textContainer}>
            This system has only been in for the last couple of weeks so it’s a bit early to tell if it handles everything we need but it certainly has reduced the overheads of adding new GUI dialogs and needed to know all the little catches which is good.
          </p>
          <p className={ ArticleStyles.textContainer}>
            <br/>Author: CodeGoblin, Date: 4th Dec 2015
          </p>
        </div>
    )
  }
})