!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/paper-button/paper-button.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/paper-button/paper-button.js"],t):t((e=e||self).LayoutBuilder={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function c(){var e,t,n=(e=['\n<style>\n:host {\n  display: block;\n}\n\n:host paper-button {\n  display: block;\n  margin: 0;\n}\n:host paper-button,\n:host #content-wrapper {\n  border: 1px solid #ddd;\n}\n\n:host #content:not(:empty) {\n  padding: 15px;\n}\n\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<div id="content-wrapper">\n  <div id="prepend-child"><paper-button on-tap="_handleAddChild">Insert into [[type]]</paper-button></div>\n  <div id="content"><slot></slot></div>\n</div>\n<div id="insert-sibling-after">\n  <paper-button on-tap="_handleAddSibling">Add new [[type]]</paper-button>\n</div>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var l=function(e){function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a(this,o(l).apply(this,arguments))}var p,s,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(l,t.PolymerElement),p=l,d=[{key:"template",get:function(){return t.html(c())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Layout builder",description:"A new UI for adding content to layouts",icon:"icons:android",color:"green",groups:["Builder"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},u(o(l),"properties",this),{type:{name:"type",type:Boolean,value:"layout"},id:{name:"id",type:String,reflecttoAttribute:!0}})}},{key:"tag",get:function(){return"layout-builder"}}],(s=[{key:"connectedCallback",value:function(){u(o(l.prototype),"connectedCallback",this).call(this),this.id=this._generateUUID()}},{key:"_handleAddChild",value:function(){var e=document.createElement("layout-builder");e.type="sub-"+this.type,e.innerHTML="I am a ".concat(this.type," of ").concat(this.id,"."),this.prepend(e)}},{key:"_handleAddSibling",value:function(){var e=document.createElement("layout-builder");e.type=this.type,e.innerHTML="I am a ".concat(this.type," of ").concat(this.id,"."),this.parentNode.insertBefore(e,this.nextSibling)}},{key:"_generateUUID",value:function(){var e=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return this.type+"-ss-s-s-s-sss".replace(/s/g,e)}}])&&n(p.prototype,s),d&&n(p,d),l}();window.customElements.define(l.tag,l),e.LayoutBuilder=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=layout-builder.umd.js.map
