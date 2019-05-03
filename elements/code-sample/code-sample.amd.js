define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js","./lib/themes/one-dark.js","./lib/highlightjs/highlight.js","./lib/highlightjs/languages/javascript.js","./lib/highlightjs/languages/xml.js"],function(_exports,_polymerElement,_HAXWiring,_flattenedNodesObserver,_oneDark,_highlight2,_javascript,_xml){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CodeSample=void 0;function _templateObject_a91de7006a8311e9b39ac54ae35740b2(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n    display: block;\n}\n\n:host([hidden]),\n[hidden] {\n    display: none;\n}\n\npre {\n    margin: 0;\n    @apply --code-sample-pre;\n}\n\npre, code {\n    font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);\n    font-size: var(--code-sample-font-size, 0.875rem);\n}\n\n.hljs {\n    padding: 0 1.25rem;\n    line-height: var(--code-sample-line-height, 1.3);\n    @apply --code-sample-hljs;\n}\n\n.demo:not(:empty) {\n    padding: var(--code-sample-demo-padding, 0 0 1.25rem);\n    @apply --code-sample-demo-not-empty;\n}\n\n.demo {\n    @apply --code-sample-demo;\n}\n\n#code-container {\n    position: relative;\n    @apply --code-sample-code-container;\n}\n\n#code-container:hover {\n    @apply --code-sample-code-container-hover;\n}\n\n#code-container:hover > button {\n    @apply --code-sample-code-container-hover-button;\n}\n\nbutton {\n    background: var(--code-sample-copy-button-bg-color, #e0e0e0);\n    border: none;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    text-transform: uppercase;\n    @apply --code-sample-copy-clipboard-button;\n}</style>\n<div id=\"theme\">","</div>\n<div id=\"demo\" class=\"demo\"></div>\n<slot id=\"content\"></slot>\n\n<div id=\"code-container\">\n  <button type=\"button\" hidden=\"[[!copyClipboardButton]]\" id=\"copyButton\" title=\"Copy to clipboard\" on-click=\"_copyToClipboard\">Copy</button>\n  <pre id=\"code\"></pre>\n</div>"]);_templateObject_a91de7006a8311e9b39ac54ae35740b2=function _templateObject_a91de7006a8311e9b39ac54ae35740b2(){return data};return data}_highlight2.hljs.registerLanguage("javascript",_javascript.javascript);_highlight2.hljs.registerLanguage("xml",_xml.xml);window.hljs=_highlight2.hljs;/**
 * `code-sample`
 * `<code-sample>` uses [highlight.js](https://highlightjs.org/) for syntax highlighting.
 * @polymer
 * @customElement
 * @extends {PolymerElement}
 * @demo demo/index.html
 */var CodeSample=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(CodeSample,_PolymerElement);function CodeSample(){babelHelpers.classCallCheck(this,CodeSample);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CodeSample).apply(this,arguments))}babelHelpers.createClass(CodeSample,[{key:"connectedCallback",/**
   * life cycle, element is afixed to the DOM
   */value:function connectedCallback(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(CodeSample.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(CodeSample.haxProperties,CodeSample.tag,this);setTimeout(function(){if(_this.querySelector("template")){_this._observer=new _flattenedNodesObserver.FlattenedNodesObserver(_this.$.content,function(){return _this._updateContent()})}else if(_this.childNodes.length){console.error("<code-sample>:","content must be provided inside a <template> tag")}})}/**
   * life cycle, element is removed from the DOM
   */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(CodeSample.prototype),"disconnectedCallback",this).call(this);if(this._observer){this._observer.disconnect();this._observer=null}}},{key:"_themeChanged",value:function _themeChanged(theme){if(theme&&this._themeCanBeChanged()){var previousTheme=this.$.theme.querySelector("style");this.$.theme.replaceChild(document.importNode(theme.content,!0),previousTheme)}}},{key:"_themeCanBeChanged",value:function _themeCanBeChanged(){if(window.ShadyCSS){console.error("<code-sample>:","Theme changing is not supported in Shady DOM.");return}if("TEMPLATE"!==this.theme.tagName){console.error("<code-sample>:","theme must be a template");return}return!0}},{key:"_updateContent",value:function _updateContent(){if(this._code)this._code.parentNode.removeChild(this._code);if(this._demo)this.$.demo.innerHTML="";var template=this._getCodeTemplate();if(this.render){this._demo=this.$.demo.appendChild(document.importNode(template.content,!0))}this._highlight(template.innerHTML)}},{key:"_getCodeTemplate",value:function _getCodeTemplate(){var nodes=_flattenedNodesObserver.FlattenedNodesObserver.getFlattenedNodes(this.$.content);return[].filter.call(nodes,function(node){return node.nodeType===Node.ELEMENT_NODE})[0]}},{key:"_highlight",value:function _highlight(str){this._code=document.createElement("code");if(this.type)this._code.classList.add(this.type);this._code.innerHTML=this._entitize(this._cleanIndentation(str));this.$.code.appendChild(this._code);_highlight2.hljs.highlightBlock(this._code)}},{key:"_cleanIndentation",value:function _cleanIndentation(str){var pattern=str.match(/\s*\n[\t\s]*/);return str.replace(new RegExp(pattern,"g"),"\n")}},{key:"_entitize",value:function _entitize(str){return(str+"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}},{key:"_copyToClipboard",value:function _copyToClipboard(event){var copyButton=event.target,textarea=this._textAreaWithClonedContent();textarea.select();try{document.execCommand("copy",!1);copyButton.textContent="Done"}catch(err){console.error(err);copyButton.textContent="Error"}textarea.remove();setTimeout(function(){copyButton.textContent="Copy"},1e3)}},{key:"_textAreaWithClonedContent",value:function _textAreaWithClonedContent(){var textarea=document.createElement("textarea");document.body.appendChild(textarea);textarea.value=this._cleanIndentation(this._getCodeTemplate().innerHTML);return textarea}}],[{key:"template",// render function
get:function get(){return(0,_polymerElement.html)(_templateObject_a91de7006a8311e9b39ac54ae35740b2(),this.constructor.theme||_oneDark.oneDark)}// haxProperty definition
},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Code sample",description:"A sample of code highlighted in the page",icon:"icons:code",color:"blue",groups:["Code","Development"],meta:{author:"kuscamara"}},settings:{quick:[],configure:[{slot:"",slotWrapper:"template",slotAttributes:{"preserve-content":"preserve-content"},title:"Source",description:"The URL for this video.",inputMethod:"code-editor"},{attribute:"copy-clipboard-button",title:"Copy to clipboard button",description:"button in top right that says copy to clipboard",inputMethod:"boolean"}],advanced:[]}}}// properties available to the custom element for data binding
},{key:"properties",get:function get(){return{// Set to true to show a copy to clipboard button.
copyClipboardButton:{type:"Boolean",value:!1},// Tagged template literal with custom styles.
// Only supported in Shadow DOM.
theme:{type:"String",observer:"_themeChanged"},// Set to true to render the code inside the template.
render:{type:"Boolean",value:!1},// Code type (optional). (eg.: html, js, css)
// Options are the same as the available classes for `<code>` tag using highlight.js
type:{type:"String"}}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */},{key:"tag",get:function get(){return"code-sample"}}]);return CodeSample}(_polymerElement.PolymerElement);_exports.CodeSample=CodeSample;window.customElements.define(CodeSample.tag,CodeSample)});