!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/iron-icons/iron-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/iron-icons/iron-icons.js"],t):t((e=e||self).ScrollButton={},e.polymerElement_js)}(this,function(e,t){"use strict";function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,o){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(o):i.value}})(e,t,o||e)}function p(){var e,t,o=(e=['\n<style>\n:host {\n  display: block;\n  --scroll-button-z-index: 99;\n  z-index: var(--scroll-button-z-index);\n}\n\n:host([hidden]) {\n  display: none;\n}\npaper-icon-button {\n  background-color: rgba(0,0,0,.6);\n  color: white;\n  @apply --scroll-button-button;\n}\npaper-icon-button:hover,\npaper-icon-button:active,\npaper-icon-button:focus {\n  background-color: rgba(0,0,0,1);\n  @apply --scroll-button-button-active;\n}\npaper-tooltip {\n  --paper-tooltip-background: #000000;\n  --paper-tooltip-opacity: 1;\n  --paper-tooltip-text-color: #ffffff;\n  --paper-tooltip-delay-in: 0;\n  --paper-tooltip: {\n    border-radius: 0;\n  }\n  @apply --scroll-button-tooltip;\n}\n        </style>\n<paper-icon-button id="btn" icon="[[icon]]" title="[[label]]"></paper-icon-button>\n<paper-tooltip\n  for="btn"\n  position="[[position]]"\n  offset="14">\n  [[label]]\n</paper-tooltip>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return p=function(){return o},o}var a=function(e){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c(this,r(a).apply(this,arguments))}var u,s,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(a,t.PolymerElement),u=a,f=[{key:"template",get:function(){return t.html(p())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Scroll button",description:"button to scroll to an area or back to top",icon:"icons:android",color:"green",groups:["Button"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"target",description:"",inputMethod:"array",required:!1,icon:"icons:android"},{property:"icon",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"label",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){n(e,t,o[t])})}return e}({},l(r(a),"properties",this),{target:{name:"target",type:Object},icon:{name:"icon",type:String,value:"icons:expand-less"},label:{name:"label",type:String,value:"Scroll to top"},position:{name:"position",type:String,value:"top"}})}},{key:"tag",get:function(){return"scroll-button"}}],(s=[{key:"connectedCallback",value:function(){var e=this;l(r(a.prototype),"connectedCallback",this).call(this),this.shadowRoot.querySelector("#btn").addEventListener("click",function(t){e.target?e.target.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}):window.scrollTo({top:0,left:0,behavior:"smooth"})})}},{key:"disconnectedCallback",value:function(){var e=this;this.shadowRoot.querySelector("#btn").removeEventListener("click",function(t){e.target?e.target.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}):window.scrollTo({top:0,left:0,behavior:"smooth"})}),l(r(a.prototype),"disconnectedCallback",this).call(this)}}])&&o(u.prototype,s),f&&o(u,f),a}();window.customElements.define(a.tag,a),e.ScrollButton=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=scroll-button.umd.js.map
