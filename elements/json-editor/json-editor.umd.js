!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/paper-input/paper-textarea.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/paper-input/paper-textarea.js"],t):t((e=e||self).JsonEditor={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(){var e,t,n=(e=['\n<style>:host {\n  display: block;\n  \n}\n\n:host([hidden]) {\n  display: none;\n}\n:host([error]) paper-textarea {\n  --iron-autogrow-textarea: {\n    background-color: #ffeeee;\n  };\n}\npaper-textarea {\n  --iron-autogrow-textarea: {\n    font-family: "Lucida Console", Monaco, monospace;\n    font-weight: 600;\n    white-space: pre;\n    line-height: 20px;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    color: #000000;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: 0.3s linear all;\n    -webkit-transition: 0.3s linear all;\n    -moz-transition: 0.3s linear all;\n    -ms-transition: 0.3s linear all;\n    -o-transition: 0.3s linear all;\n};\n}</style>\n<paper-textarea \n  label="[[label]]"\n  value="{{value}}"\n  error-message="Invalid JSON!"\n  readonly="[[disabled]]"\n  invalid="[[error]]"\n  max-rows="[[maxRows]]"></paper-textarea>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return i=function(){return n},n}var l=function(e){function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a(this,r(l).apply(this,arguments))}var u,p,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(l,t.PolymerElement),u=l,c=[{key:"template",get:function(){return t.html(i())}},{key:"properties",get:function(){return{label:{name:"label",type:"String",value:"JSON data"},error:{name:"error",type:"Boolean",value:!1,reflectToAttribute:!0},disabled:{name:"disabled",type:"Boolean",value:!1,reflectToAttribute:!0},maxRows:{name:"maxRows",type:"Number",value:0,reflectToAttribute:!0},value:{name:"value",type:"String",value:"",notify:!0,reflectToAttribute:!1,observer:"_valueChanged"},formatTest:{name:"value",type:"String",computed:"_computeFormattedValue(value)"},currentData:{name:"currentData",type:"Object",notify:!0,computed:"_computeCurrentData(value)"}}}},{key:"tag",get:function(){return"json-editor"}}],(p=[{key:"_valueChanged",value:function(e,t){try{JSON.parse(e)&&(this.error=!1)}catch(e){this.error=!0}}},{key:"_computeFormattedValue",value:function(e){try{var t=JSON.stringify(JSON.parse(t),null,2);t!==e&&(this.value=t)}catch(e){}}},{key:"_computeCurrentData",value:function(e){try{return JSON.parse(e)}catch(e){}}}])&&n(u.prototype,p),c&&n(u,c),l}();window.customElements.define(l.tag,l),e.JsonEditor=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=json-editor.umd.js.map
