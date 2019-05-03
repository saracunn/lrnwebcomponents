!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).JsonOutlineSchema={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,i){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,i){var n=[null];n.push.apply(n,e);var r=new(Function.bind.apply(t,n));return i&&a(r,i.prototype),r}).apply(null,arguments)}function s(t){var e="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,o(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a(n,t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=function(){function t(){i(this,t),this.id="item-"+this.generateUUID(),this.title="New item",this.location="",this.description="",this.parent="",this.metadata={},this.order=0,this.indent=0}return r(t,[{key:"readLocation",value:function(){return FALSE}},{key:"writeLocation",value:function(t){return FALSE}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}]),t}();window.JSONOutlineSchema=window.JSONOutlineSchema||{},window.JSONOutlineSchema.requestAvailability=function(){return window.JSONOutlineSchema.instance||(window.JSONOutlineSchema.instance=document.createElement("json-outline-schema"),document.body.appendChild(window.JSONOutlineSchema.instance)),window.JSONOutlineSchema.instance};var d=function(t){function n(){var t,e,r,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return i(this,n),e=this,(t=!(r=o(n).call(this))||"object"!=typeof r&&"function"!=typeof r?l(e):r).tag=n.tag,t._queue=[],t.template=document.createElement("template"),t.attachShadow({mode:"open"}),a||t.render(),t.__ready=!1,t.file=null,t.id=t.generateUUID(),t.title="New site",t.author="",t.description="",t.license="by-sa",t.metadata={},t.items=[],t.debug=!1,window.JSONOutlineSchema.instance=l(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,s(HTMLElement)),r(n,[{key:"html",get:function(){return"\n<style>:host {\n  display: block;\n}\n:host([debug]) {\n  font-family: monospace;\n  white-space: pre;\n  margin: 16px 0px;\n}\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"}}],[{key:"properties",get:function(){return{}}},{key:"tag",get:function(){return"json-outline-schema"}}]),r(n,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this),this._queue.length&&this._processQueue(),window.addEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-ready",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t),this.__ready=!0}},{key:"_copyAttribute",value:function(t,e){var i=this.shadowRoot.querySelectorAll(e),n=this.getAttribute(t),r=null==n?"removeAttribute":"setAttribute",o=!0,a=!1,u=void 0;try{for(var s,l=i[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){s.value[r](t,n)}}catch(t){a=!0,u=t}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}}},{key:"_queueAction",value:function(t){this._queue.push(t)}},{key:"_processQueue",value:function(){var t=this;this._queue.forEach(function(e){t["_".concat(e.type)](e.data)}),this._queue=[]}},{key:"_setProperty",value:function(t){var e=t.name,i=t.value;this[e]=i}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("json-outline-schema-debug-toggle",this._toggleDebug.bind(this));var t=new CustomEvent("json-outline-schema-unready",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}},{key:"clone",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.parse(JSON.stringify(t))}},{key:"newItem",value:function(){return new c}},{key:"addItem",value:function(t){var e=this.validateItem(t);return count=array_push(this.items,e),count}},{key:"validateItem",value:function(t){var i=new c;for(var n in i)"undefined"!==e(t[n])&&(i[n]=t[n]);return i}},{key:"removeItem",value:function(t){for(var e in this.items)if(this.items[e].id==t){var i=this.items[e];return delete this.items[e],i}return!1}},{key:"updateItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.validateItem(t);for(var n in this.items)if(this.items[n].id==i.id)return this.items[n]=i,!e||this.save();return!1}},{key:"load",value:function(t){if(t){this.file=t;var i=json_decode(file_get_contents(t));for(var n in i)"undefined"!==e(this[n])&&"items"!==n&&(this[n]=i[n]);if(isset(i.items))for(var n in i.items){var r=new c;r.id=item.id,r.indent=item.indent,r.location=item.location,r.order=item.order,r.parent=item.parent,r.title=item.title,r.description=item.description,r.metadata=item.metadata,this.items[n]=r}return!0}return!1}},{key:"save",value:function(){var t={id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items};return JSON.stringify(t,null,2)}},{key:"generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"_toggleDebug",value:function(t){this.debug=!this.debug,this._triggerDebugPaint(this.debug)}},{key:"_triggerDebugPaint",value:function(t){if(t){var e={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata,items:this.items},i=document.createElement("span");i.innerHTML=JSON.stringify(e,null,2),this.shadowRoot.appendChild(i.cloneNode(!0))}else this.render()}},{key:"attributeChangedCallback",value:function(t,e,i){this.debug&&(this.render(),this._triggerDebugPaint(this.debug))}},{key:"updateMetadata",value:function(t,e){this.metadata[t]=e,this.debug&&(this.render(),this._triggerDebugPaint(this.debug))}},{key:"getItemValues",value:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=t?this.validateItem(t):new c,i&&(e.parent=i.id),e}},{key:"getItemSchema",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"item",i={$schema:"http://json-schema.org/schema#",title:this.title,type:"object",properties:{}};for(var n in"item"==e?t=new c:(t={file:this.file,id:this.id,title:this.title,author:this.author,description:this.description,license:this.license,metadata:this.metadata},"outline"==e&&(t.items=this.items)),t){var r={title:n,type:"string",value:t[n]};switch(n){case"file":case"id":case"title":case"author":case"description":case"license":case"location":case"parent":r.component={name:"paper-input",valueProperty:"value",properties:{required:!0}};break;case"indent":case"order":r.component={name:"paper-input",valueProperty:"value",properties:{required:!0},attributes:{type:"number"}};case"metadata":case"items":r.type="array",r.items={type:"object",properties:{key:{title:"key",type:"string",component:{name:"paper-input",valueProperty:"value",properties:{required:!0}}},value:{title:"value",type:"string",component:{name:"paper-input",valueProperty:"value",properties:{required:!0}}}}};break;default:console.log(n)}i.properties[n]=r}return i}},{key:"itemsToNodes",value:function(t){t=void 0!==t?t:this.items;var e=this.unflattenItems(t);return this.treeToNodes(e,document.createElement("ul"))}},{key:"treeToNodes",value:function(t,e){for(var i in t){var n=document.createElement("li");n.innerText=t[i].title,n.setAttribute("data-jos-id",t[i].id),t[i].location&&n.setAttribute("data-jos-location",t[i].location),e.appendChild(n),t[i].children&&t[i].children.length>0&&e.appendChild(this.treeToNodes(t[i].children,document.createElement("ul")))}return e}},{key:"unflattenItems",value:function(t,e,i){var n=this;i=void 0!==i?i:[],e=void 0!==e?e:{id:null};var r=t.filter(function(t){return t.parent===e.id});return r.length&&(e.id?e.children=r:i=r,r.forEach(function(e){n.unflattenItems(t,e)})),i}},{key:"scrubElementJOSData",value:function(t){for(var e in t.children)t.removeAttribute("data-jos-id"),t.removeAttribute("data-jos-location"),t.children[e].children&&this.scrubElementJOSData(t.children[e])}},{key:"nodesToItems",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.getChildOutline(t);return e&&(this.items=i,this.debug&&(this.render(),this._triggerDebugPaint(this.debug))),i}},{key:"getChildOutline",value:function(t){for(var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.cloneNode(!0),a=[],u={};null!==o.firstChild;){if("undefined"!==e(o.firstChild.tagName)){var s=o.firstChild;if(null!==s.firstChild&&"undefined"!==e(s.firstChild.tagName)){var l=r;"undefined"!==e(u.id)&&(l=u.id),a=a.concat(this.getChildOutline(s,0,n+1,l))}else u=new c,s.getAttribute("data-jos-id")&&(u.id=s.getAttribute("data-jos-id")),s.getAttribute("data-jos-location")?u.location=s.getAttribute("data-jos-location"):u.location="",u.indent=n,u.order=i,i+=1,u.title=s.innerText,u.parent=r,a.push(u)}o.removeChild(o.firstChild)}return a}},{key:"nextPage",value:function(t,e){t.items=t.items.sort(function(t,e){})}},{key:"file",get:function(){return this.getAttribute("file")},set:function(t){this.__ready&&this.setAttribute("file",t)}},{key:"id",get:function(){return this.getAttribute("id")},set:function(t){this.__ready&&this.setAttribute("id",t)}},{key:"title",get:function(){return this.getAttribute("title")},set:function(t){this.__ready&&this.setAttribute("title",t)}},{key:"author",get:function(){return this.getAttribute("author")},set:function(t){this.__ready&&this.setAttribute("author",t)}},{key:"description",get:function(){return this.getAttribute("description")},set:function(t){this.__ready&&this.setAttribute("description",t)}},{key:"license",get:function(){return this.getAttribute("license")},set:function(t){this.__ready&&this.setAttribute("license",t)}},{key:"debug",get:function(){return this.getAttribute("debug")},set:function(t){this.__ready&&t?this.setAttribute("debug",t):this.removeAttribute("debug")}}],[{key:"observedAttributes",get:function(){return["file","id","title","author","description","license","debug"]}}]),n}();window.customElements.define(d.tag,d),t.JsonOutlineSchema=d,t.JSONOutlineSchemaItem=c,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=json-outline-schema.umd.js.map
