!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@polymer/paper-styles/color.js"),require("@polymer/polymer/lib/utils/async.js"),require("@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-localstorage/iron-localstorage.js"),require("@polymer/neon-animation/neon-animated-pages.js"),require("@polymer/neon-animation/animations/slide-from-right-animation.js"),require("@polymer/neon-animation/animations/slide-from-left-animation.js"),require("@polymer/neon-animation/animations/slide-right-animation.js"),require("@polymer/neon-animation/animations/slide-left-animation.js"),require("@polymer/app-layout/app-header-layout/app-header-layout.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("@polymer/app-layout/app-drawer-layout/app-drawer-layout.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-dialog/paper-dialog.js"),require("@polymer/paper-fab/paper-fab.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),require("@polymer/paper-listbox/paper-listbox.js"),require("@polymer/paper-item/paper-item.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/iron-flex-layout/iron-flex-layout.js","@polymer/paper-styles/color.js","@polymer/polymer/lib/utils/async.js","@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-localstorage/iron-localstorage.js","@polymer/neon-animation/neon-animated-pages.js","@polymer/neon-animation/animations/slide-from-right-animation.js","@polymer/neon-animation/animations/slide-from-left-animation.js","@polymer/neon-animation/animations/slide-right-animation.js","@polymer/neon-animation/animations/slide-left-animation.js","@polymer/app-layout/app-header-layout/app-header-layout.js","@polymer/app-layout/app-drawer/app-drawer.js","@polymer/app-layout/app-drawer-layout/app-drawer-layout.js","@polymer/paper-button/paper-button.js","@polymer/paper-dialog/paper-dialog.js","@polymer/paper-fab/paper-fab.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/paper-dropdown-menu/paper-dropdown-menu.js","@polymer/paper-listbox/paper-listbox.js","@polymer/paper-item/paper-item.js"],n):n(e.polymerLegacy_js,null,null,e.async,e.ironA11yKeysBehavior_js)}(this,function(e,n,t,o,i){"use strict";var a=document.createElement("div");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="layout-style">\n  <template>\n    <style>\n      .layout {\n        @apply(--layout);\n      }\n      .layout.horizontal {\n        @apply(--layout-horizontal);\n      }\n      .layout.vertical {\n        @apply(--layout-vertical);\n      }\n      .layout.center {\n        @apply(--layout-center);\n      }\n      .layout.center-center {\n        @apply(--layout-center-center);\n      }\n      .flex {\n        @apply(--layout-flex);\n      }\n      .two {\n        @apply(--layout-flex-2);\n      }\n      .end-justified {\n        @apply(--layout-end-justified);\n      }\n      .end {\n        @apply(--layout-end);\n      }\n      .justified {\n        @apply(--layout-justified);\n      }\n      .self-center {\n        @apply(--layout-self-center);\n      }\n      .wrap {\n         @apply(--layout-wrap);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(a);var r=document.createElement("div");r.setAttribute("style","display: none;"),r.innerHTML='<dom-module id="contentsequencer-style">\n  <template strip-whitespace="">\n    <style>\n\n:host {\n  display: block;\n  line-height: 24px;\n\n  --paper-menu: {\n    cursor: pointer;\n    background: inherit;\n    padding: 0;\n  };\n\n  --app-drawer-content-container: {\n    background: var(--lrndesign-contentsequencer-background, --paper-grey-100);\n  };\n\n  --nav-height: 64px;\n}\n\n\n:host([theme="minimal"]) {\n  position: relative;\n}\n\n#headerpanel {\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  margin-left: 256px; /* drawer width */\n}\n\n#headerpanel[narrow] {\n  margin-left: 0;\n}\n\napp-drawer-layout {\n  overflow-x: hidden;\n}\n\n.drawer-content-wrapper {\n  padding: 16px;\n}\n\n#main-content {\n  background: var(--lrndesign-contentsequencer-background, --paper-grey-300);\n}\n\n#pages {\n  top: var(--nav-height);\n}\n\n#controls[narrow] {\n  width: 100%;\n}\n\n#main-toolbar {\n  background: var(--lrndesign-contentsequencer-header-background, --paper-blue-600);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: var(--nav-height);\n  padding: 0 16px;\n}\n\n#main-toolbar .title {\n  margin: 0 8px;\n  flex: 1;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\npaper-icon-button[icon=menu] {\n  margin-right: 0 !important;\n}\n\npaper-fab {\n  --paper-fab-keyboard-focus-background: var(--lrndesign-contentsequencer-fab-background, --paper-blue-700);\n  --paper-fab-background: var(--lrndesign-contentsequencer-fab-background, --paper-blue-700);\n  flex-shrink: 0;\n}\n\n/* override external styles */\n:host([theme="minimal"]) #resumeDialog > * {\n  margin-top: 20px;\n  padding: 0 24px;\n}\n\n:host([theme="minimal"]) #resumeDialog .buttons {\n  padding: 8px 8px 8px 24px;\n  margin: 0;\n}\n\n.countdown iron-icon {\n  margin-right: 3px;\n}\n\n:host(:not([theme="minimal"])) #drawer .countdown {\n  display: none;\n}\n\n:host([theme="minimal"]) #drawer .countdown {\n  padding: 0 16px 16px 16px;\n  font-style: italic;\n  color: var(--paper-blue-500);\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n\n#controls {\n  position: fixed;\n  right: 0;\n  bottom: 16px;\n  padding: 0 16px;\n  width: calc(100% - 256px); /* width of drawer */\n  box-sizing: border-box;\n  pointer-events: none; /* allow users to scroll */\n}\n\n#controls .fabs {\n  /* Note: custom props don\'t work in calc(). */\n  max-width: calc(800px + 175px);\n  margin: 0 auto;\n}\n\n.navbutton {\n  pointer-events: initial; /* make sure buttons are clickable */\n}\n\n.navbutton.prevbutton {\n  transition: transform 300ms ease-in-out;\n}\n\n.navbutton.prevbutton[disabled] {\n  background: var(--lrndesign-contentsequencer-fab-background);\n  color: white;\n  transform: scale(0);\n}\n\n.navbutton.donebutton {\n  background: var(--google-green-500);\n}\n\n#toc {\n  /* ensures bottom of nav scrolling meny doesn\'t overlap with file bug link. */\n  margin-bottom: 1.5em;\n}\n\n.toc-item {\n  font-size: 14px;\n  color: var(--paper-grey-500);\n  overflow: hidden;\n  border-radius: 4px;\n  padding: 6px 16px;\n  box-sizing: content-box; /* override users that set * selector box-sizing. */\n}\n\n.toc-item i {\n  display: inline-block;\n  font-style: normal;\n  width: 24px;\n  min-width: 24px;\n  background: #fff;\n  border-radius: 50%;\n  text-align: center;\n  height: 24px;\n  vertical-align: middle;\n  line-height: 24px;\n  border: 2px solid var(--paper-grey-400);\n  margin-right: 8px;\n  font-weight: 400;\n}\n\n.toc-item i::before,\n.toc-item i::after {\n  content: \'\';\n  display: block;\n  border-left: 1px solid var(--paper-grey-400);\n  width: 0;\n  height: 44px;\n  z-index: 1;\n  margin-top: 1px;\n}\n\n.toc-item i::before {\n  margin-top: -44px;\n  margin-left: 11px;\n}\n\n.toc-item i::after {\n  margin-left: 11px;\n}\n\n.toc-item.completed {\n  color: var(--paper-grey-900);\n}\n\n.toc-item.iron-selected {\n  color: var(--paper-grey-900);\n  background-color: var(--paper-grey-300);\n  font-weight: 600;\n}\n\n.toc-item.completed i,\n.toc-item.completed i::before,\n.toc-item.completed i::after,\n.toc-item.iron-selected i,\n.toc-item.iron-selected i:before {\n  border-color: var(--paper-blue-500);\n}\n\n.toc-item:first-of-type i::before,\n.toc-item:last-of-type i::after {\n  display: none;\n}\n\n#metadata {\n  color: var(--lrndesign-contentsequencer-footer-text-color, #777);\n  font-size: 0.7em;\n  flex: 0 0 80px;\n}\n\n#feedback a {\n  color: currentcolor;\n}\n\n@media (min-width: 641px) {\n  :host(:not([theme="minimal"])) #pages {\n    margin-top: 32px;\n  }\n  #controls {\n    padding: 0 32px;\n    bottom: 32px;\n  }\n}\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r);var s=document.createElement("div");s.setAttribute("style","display: none;"),s.innerHTML='<dom-module id="lrndesign-contentsequencer">\n  <template strip-whitespace="">\n    <style include="layout-style"></style>\n    <style include="contentsequencer-style"></style>\n\n    <iron-localstorage name="{{title}}" value="{{state}}" hidden="" on-iron-localstorage-load-empty="_stateInit" on-iron-localstorage-load="_stateLoaded">\n    </iron-localstorage>\n\n    <app-drawer-layout fullbleed="" narrow="{{_narrow}}">\n      <app-drawer id="drawer" swipe-open="">\n\n        <div class="drawer-content-wrapper layout vertical" style="height:100%">\n\n          <div class="flex" style="overflow: auto;">\n            <div title="Time remaining" hidden$="{{!_isPositiveNum(duration)}}" class="countdown layout horizontal">\n              <iron-icon icon="schedule"></iron-icon> <span>[[remaining]]</span>\n            </div>\n\n            <paper-dropdown-menu id="toc" class="flex" on-iron-select="_allowcontentsequencerComplete">\n              <paper-listbox slot="dropdown-content" selected="{{selected}}">\n              <template is="dom-repeat" items="{{steps}}" strip-whitespace="">\n                <paper-item class$="{{_tocItemClass(selected, index)}}">\n                  <i>{{item.step}}</i><span>{{item.label}}</span>\n                </paper-item>\n              </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n        </div>\n\n      </app-drawer>\n\n      <app-header-layout fullbleed="">\n\n        <div id="headerpanel" fixed="" narrow$="[[_narrow]]">\n          <div id="main-toolbar" hidden$="[[noToolbar]]">\n            <h3 class="title">[[title]]</h3>\n            <div title="Time remaining" hidden$="{{!_isPositiveNum(duration)}}" class="countdown layout horizontal">\n              <iron-icon icon="schedule"></iron-icon> <span>{{remaining}}</span>\n            </div>\n          </div>\n        </div>\n\n        <div id="main-content">\n\n          <neon-animated-pages id="pages" selected="{{selected}}" on-iron-deselect="_onStepLeave" on-iron-items-changed="_onStepsChanged">\n            <slot select="lrndesign-contentsequencer-step"></slot>\n          </neon-animated-pages>\n\n          <footer id="controls" hidden$="[[noArrows]]" narrow$="[[_narrow]]">\n            <div class="fabs layout horizontal justified">\n              <paper-fab raised="" class="navbutton prevbutton" icon="chevron-left" on-tap="selectPrevious" title="Previous step" disabled$="{{_isFirstStep(selected)}}">\n              </paper-fab>\n\n              <div>\n                <template is="dom-if" if="{{_showNextFab(selected, steps)}}" strip-whitespace="">\n                  <paper-fab icon="chevron-right" raised="" class="navbutton nextbutton" title="{{_nextFabTitle(selected)}}" on-tap="selectNext">\n                  </paper-fab>\n                </template>\n\n                <template is="dom-if" if="{{_showDoneFab(selected, steps)}}" strip-whitespace="">\n                  <paper-fab icon="done" raised="" class="navbutton donebutton" on-tap="_goToDoneLink" title="Complete contentsequencer">\n                  </paper-fab>\n                </template>\n              </div>\n            </div>\n          </footer>\n        </div>\n\n      </app-header-layout>\n    </app-drawer-layout>\n\n    <paper-dialog id="resumeDialog" modal="">\n      <h2>Would you like to resume where you left off?</h2>\n      <p>Step <span>{{_storedStep.step}}</span>: <span>{{_storedStep.label}}</span></p>\n      <div class="buttons">\n        <paper-button dialog-dismiss="" on-click="_stateInit">Cancel</paper-button>\n        <paper-button dialog-confirm="" on-click="_resume" autofocus="">Resume</paper-button>\n      </div>\n    </paper-dialog>\n\n  </template>\n  \n</dom-module>',document.head.appendChild(s),e.Polymer({is:"lrndesign-contentsequencer",behaviors:[i.IronA11yKeysBehavior],properties:{title:{type:String,value:""},category:{type:String,value:null},environment:{type:String,value:null},feedbackLink:{type:String,value:""},selected:{type:Number,value:0},duration:{type:Number,value:0,readOnly:!0},remaining:{type:String,value:"",readOnly:!0},lastUpdated:{type:String,value:""},doneLink:{type:String,value:"/"},steps:{type:Array,value:function(){return[]},readOnly:!0},state:{type:Object,value:null},noToolbar:{type:Boolean,value:!1},noArrows:{type:Boolean,value:!1},noHighlight:{type:Boolean,value:!1,reflectToAttribute:!0},_storedStep:{type:Object,value:null},_resumed:{type:Boolean,value:!1},_userHasNavigated:{type:Boolean,value:!1,readOnly:!0}},observers:["_selectedChanged(steps, selected)"],keyBindings:{left:"selectPrevious",right:"selectNext"},ready:function(){this.keyEventTarget=document.body,this._updateStepIndexFromUrl()},_onStepsChanged:function(){var e=0,n=this.$.pages.items.map(function(n,t){return e+=n.duration,n.step=t+1,n}.bind(this));this._setSteps(n),this._setDuration(e),this._updateRemaining(),this.fire("lrndesign-contentsequencer-ready",{steps:this.steps})},selectNext:function(){this.$.pages.entryAnimation="slide-from-right-animation",this.$.pages.exitAnimation="slide-left-animation",this.select(this.selected+1)},selectPrevious:function(){this.$.pages.entryAnimation="slide-from-left-animation",this.$.pages.exitAnimation="slide-right-animation",this.select(this.selected-1)},select:function(e){e<0||e>this.steps.length-1||(this._allowcontentsequencerComplete(),this.selected=e)},_selectedChanged:function(e,n){if(this.set("state.stepIndex",this.selected),this._updateRemaining(),this.steps.length){var t=this.steps[this.selected];t.active=!0,location.hash=this.selected.toString(),this.fire("lrndesign-contentsequencer-step",{index:this.selected,step:t}),this.selected===this.steps.length-1&&!this._resumed&&this._userHasNavigated&&this.fire("lrndesign-contentsequencer-complete")}},_onStepLeave:function(e,n){n.item.active=!1,this._scrollToTopOfStep()},_stateInit:function(){this.state={stepIndex:this.selected}},_stateLoaded:function(){var e=this;o.microTask.run(function(){e._storedStep=e.steps[e.state.stepIndex],0===e.selected&&e.state.stepIndex>0&&e.$.resumeDialog.open()})},_updateStepIndexFromUrl:function(){var e=parseInt(location.hash.slice(1),10);(isNaN(e)||e<0)&&(e=0),this.steps&&this.steps.length&&e>this.steps.length-1&&(e=this.steps.length-1),this.selected=e},_allowcontentsequencerComplete:function(){this._set_userHasNavigated(!0)},_updateRemaining:function(){if(this.steps){var e=0;this.steps.slice(this.selected).forEach(function(n){e+=n.duration||0});var n=this._narrow?"":" remaining";this._setRemaining(e+" min"+n)}},_resume:function(){this._resumed=!0,this.select(this.state.stepIndex),this._resumed=!1},_goToDoneLink:function(){if(""!=this.doneLink)window.location.href=this.doneLink;else{for(var e,n=location.search.substring(1).split("&"),t=0;t<n.length;t++){var o=n[t].split("=");if("index"===o[0]){e=o[1];break}}"index"===(e=(e=e?decodeURIComponent(e):"").replace(/[^a-z0-9\-]+/gi,""))&&(e=""),window.location.href="/"+e}},_tocItemClass:function(e,n){var t=["toc-item"];return n<e&&t.push("completed"),t.join(" ")},_scrollToTopOfStep:function(){document.body.scrollTop=0},_isPositiveNum:function(e){return e>0},_isFirstStep:function(e){return isNaN(e)||0==e},_isLastStep:function(e){return!!this.steps.length&&e>=this.steps.length-1},_showDoneFab:function(e,n){return this._isLastStep(e)},_showNextFab:function(e,n){return!this._isLastStep(e)},_nextFabTitle:function(e){return e>0?"Next step":"Start contentsequencer"}})});
//# sourceMappingURL=lrndesign-contentsequencer.umd.js.map
