define(["exports","./node_modules/lit-element/lit-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_litElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.MicroCopyHeading=void 0;function _templateObject_12b43380344811e9a2e65bac5ee357be(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  margin: 16px 0;\n}\n\n:host([hidden]) {\n  display: none;\n}\nspan {\n  margin-left:8px;\n}\nh2 {\n  display: inline-flex;\n  margin: unset;\n  padding: unset;\n  font-size: 0.750em;\n  color: var(--simple-colors-default-theme-red-5, #DE2654);\n  border: 2px solid var(--simple-colors-default-theme-red-5, #DE2654);\n  line-height: 12px;\n  margin-right: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 0.09em;\n  padding: 6px 16px;\n}</style>\n<h2>","<span aria-hidden=\"true\">","</span></h2>"]);_templateObject_12b43380344811e9a2e65bac5ee357be=function _templateObject_12b43380344811e9a2e65bac5ee357be(){return data};return data}var MicroCopyHeading=function(_LitElement){babelHelpers.inherits(MicroCopyHeading,_LitElement);babelHelpers.createClass(MicroCopyHeading,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_12b43380344811e9a2e65bac5ee357be(),this.heading,this.endcap)}},{key:"tag",value:function tag(){return"micro-copy-heading"}}],[{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Micro copy-heading",description:"small call to action / attention that acts as a heading too",icon:"icons:android",color:"green",groups:["Copy"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"heading",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"endCap",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],configure:[{property:"heading",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"endCap",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function get(){return{heading:{name:"heading",type:"String",value:"Telling our story"},endcap:{name:"endcap",type:"String",value:"//"}}}}]);function MicroCopyHeading(){var _this;babelHelpers.classCallCheck(this,MicroCopyHeading);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MicroCopyHeading).call(this));_this.tag=MicroCopyHeading.tag;var obj=MicroCopyHeading.properties;for(var p in obj){if(obj.hasOwnProperty(p)){if(_this.hasAttribute(p)){_this[p]=_this.getAttribute(p)}else{_this.setAttribute(p,obj[p].value);_this[p]=obj[p].value}}}return _this}babelHelpers.createClass(MicroCopyHeading,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(MicroCopyHeading.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(MicroCopyHeading.haxProperties,MicroCopyHeading.tag,this)}}]);return MicroCopyHeading}(_litElement.LitElement);_exports.MicroCopyHeading=MicroCopyHeading;customElements.define("micro-copy-heading",MicroCopyHeading)});