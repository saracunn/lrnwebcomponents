!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/render-status.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/async.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@lrnwebcomponents/responsive-utility/responsive-utility.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/render-status.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/async.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@lrnwebcomponents/responsive-utility/responsive-utility.js"],t):t((e=e||self).GridPlate={},e.polymerElement_js,e.renderStatus_js,e.polymer_dom_js,e.async_js,e.HAXWiring_js)}(this,function(e,t,o,n,i,r){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,o){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(o):i.value}})(e,t,o||e)}function m(){var e,t,o=(e=['\n      <style include="simple-colors">\n        :host {\n          display: block;\n          --grid-plate-row-margin: 0px;\n          --grid-plate-row-padding: 0px;\n          --grid-plate-item-margin: 15px;\n          --grid-plate-editable-border-color: #ccc;\n          --grid-plate-active-border-color: #6cd;\n          --grid-plate-col-transition: all 0.2s ease-in-out;\n        }\n        :host .row {\n          width: 100%;\n          display: flex;\n          flex-wrap: wrap;\n          justify-content: space-between;\n          align-items: stretch;\n          margin: var(--grid-plate-row-margin);\n          padding: var(--grid-plate-row-padding);\n        }\n        :host .column {\n          width: 100%;\n          flex: 0 0 auto;\n          transition: var(--grid-plate-col-transition);\n        }\n        :host([edit-mode]) .column {\n          min-height: 150px;\n        }\n\n        :host([edit-mode]) .column {\n          outline: 1px dotted var(--grid-plate-editable-border-color);\n        }\n        :host .column[style="min-height: unset"] {\n          display: none;\n        }\n        :host([edit-mode]) .column[style="min-height: unset"]:not(:empty) {\n          display: block;\n          outline: 1px solid red;\n          width: 20%;\n          margin-top: var(--grid-plate-item-margin);\n        }\n        :host([edit-mode])\n          .column[style="min-height: unset"]:not(:empty):before {\n          content: "Layout hides column (" attr(id) ")";\n          color: red;\n          margin: var(--grid-plate-item-margin);\n          padding: 15px 0;\n          min-height: 150px;\n        }\n        :host ::slotted(*) {\n          margin: var(--grid-plate-item-margin);\n          padding: 0;\n        }\n        :host ::slotted(*.mover) {\n          outline: 2px dashed var(--grid-plate-editable-border-color);\n          outline-offset: 4px;\n        }\n        :host ::slotted(*.active-item) {\n          outline: 2px dashed var(--grid-plate-active-border-color);\n          outline-offset: 4px;\n        }\n        :host ::slotted(*[data-draggable]:focus),\n        :host ::slotted(*[data-draggable]:hover),\n        :host ::slotted(*[data-draggable]:active) {\n          cursor: move;\n        }\n\n        :host([edit-mode]) .column.mover {\n          background-color: yellow;\n        }\n        :host .column[data-draggable].mover {\n          background-color: pink;\n        }\n\n        paper-icon-button {\n          display: none;\n          position: absolute;\n          margin: 0;\n          padding: 0;\n          outline: none;\n          width: 20px;\n          height: 20px;\n          color: black;\n          background-color: #eeeeee;\n          border-radius: 50%;\n          box-sizing: content-box !important;\n          z-index: 1;\n          min-width: unset;\n        }\n\n        paper-icon-button[disabled] {\n          color: #aaa;\n          background-color: #ddd;\n        }\n        paper-icon-button[disabled]:focus,\n        paper-icon-button[disabled]:hover {\n          cursor: not-allowed;\n        }\n        paper-icon-button.active {\n          display: block;\n        }\n\n        .button-holding-pen {\n          position: relative;\n        }\n      </style>\n      <div class="button-holding-pen">\n        <paper-icon-button\n          icon="icons:arrow-upward"\n          title="move item up"\n          id="up"\n          on-tap="moveActiveElement"\n        >\n        </paper-icon-button>\n        <paper-icon-button\n          icon="icons:arrow-forward"\n          title="move item right"\n          id="right"\n          on-tap="moveActiveElement"\n        >\n        </paper-icon-button>\n        <paper-icon-button\n          icon="icons:arrow-downward"\n          title="move item down"\n          id="down"\n          on-tap="moveActiveElement"\n        >\n        </paper-icon-button>\n        <paper-icon-button\n          icon="icons:arrow-back"\n          title="move item left"\n          id="left"\n          on-tap="moveActiveElement"\n        >\n        </paper-icon-button>\n      </div>\n      <div class="row">\n        <div\n          class="column"\n          id="col1"\n          style$="[[_getColumnWidth(0,columnWidths)]]"\n        >\n          <slot name="col-1"></slot>\n        </div>\n        <div\n          class="column"\n          id="col2"\n          style$="[[_getColumnWidth(1,columnWidths)]]"\n        >\n          <slot name="col-2"></slot>\n        </div>\n        <div\n          class="column"\n          id="col3"\n          style$="[[_getColumnWidth(2,columnWidths)]]"\n        >\n          <slot name="col-3"></slot>\n        </div>\n        <div\n          class="column"\n          id="col4"\n          style$="[[_getColumnWidth(3,columnWidths)]]"\n        >\n          <slot name="col-4"></slot>\n        </div>\n        <div\n          class="column"\n          id="col5"\n          style$="[[_getColumnWidth(4,columnWidths)]]"\n        >\n          <slot name="col-5"></slot>\n        </div>\n        <div\n          class="column"\n          id="col6"\n          style$="[[_getColumnWidth(5,columnWidths)]]"\n        >\n          <slot name="col-6"></slot>\n        </div>\n      </div>\n      <iron-a11y-keys\n        stop-keyboard-event-propagation\n        target="[[__activeItem]]"\n        keys="enter"\n        on-keys-pressed="setActiveElement"\n      ></iron-a11y-keys>\n      <iron-a11y-keys\n        target="[[__activeItem]]"\n        keys="esc"\n        on-keys-pressed="cancelActive"\n      ></iron-a11y-keys>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return m=function(){return o},o}var p=function(e){function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),e=c(this,a(p).call(this)),import("@polymer/paper-icon-button/paper-icon-button.js"),import("@polymer/iron-icons/iron-icons.js"),e}var h,v,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(p,t.PolymerElement),h=p,y=[{key:"template",get:function(){return t.html(m())}},{key:"tag",get:function(){return"grid-plate"}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,settings:{quick:[],configure:[{property:"layout",title:"Column Layout",description:"Style to present these items (may change for small screens)",inputMethod:"select",options:this.options}],advanced:[{property:"breakpointSm",title:"Small Breakpoint",description:"Anything less than this number (in pixels) will render with the smallest version of this layout",inputMethod:"textfield",validationType:"number"},{property:"breakpointMd",title:"Medium Breakpoint",description:"Anything less than this number (in pixels) will render with the small version of this layout",inputMethod:"textfield",validationType:"number"},{property:"breakpointLg",title:"Large Breakpoint",description:"Anything less than this number (in pixels) will render with the medium version of this layout.",inputMethod:"textfield",validationType:"number"},{property:"breakpointXl",title:"Extra-Large Breakpoint",description:"Anything less than this number (in pixels) will render with the large version of this layout. Anything greater than or equal to this number will display with the maximum number of columns for this layout.",inputMethod:"textfield",validationType:"number"}]},saveOptions:{unsetAttributes:["__active-item","edit-mode"]}}}},{key:"properties",get:function(){return{ignoreHax:{type:Boolean,value:!1},breakpointSm:{type:Number,value:900},breakpointMd:{type:Number,value:1200},breakpointLg:{type:Number,value:1500},breakpointXl:{type:Number,value:1800},columns:{type:Number,computed:"_getColumns(columnWidths)",reflectToAttribute:!0},columnWidths:{type:String,computed:"_getColumnWidths(responsiveSize,layout,layouts,disableResponsive)"},disableResponsive:{type:Boolean,value:!1,notify:!0},editMode:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_editModeChanged"},layout:{type:String,value:"1-1",reflectToAttribute:!0},layouts:{type:Object,value:{1:{columnLayout:"1: full width",xs:["100%"],sm:["100%"],md:["100%"],lg:["100%"],xl:["100%"]},"1-1":{columnLayout:"2: equal width",xs:["100%","100%"],sm:["50%","50%"],md:["50%","50%"],lg:["50%","50%"],xl:["50%","50%"]},"2-1":{columnLayout:"2: wide & narrow",xs:["100%","100%"],sm:["50%","50%"],md:["66.6666667%","33.3333337%"],lg:["66.6666667%","33.3333337%"],xl:["66.6666667%","33.3333337%"]},"1-2":{columnLayout:"2: narrow & wide",xs:["100%","100%"],sm:["50%","50%"],md:["33.3333333%","66.6666667%"],lg:["33.3333333%","66.6666667%"],xl:["33.3333333%","66.6666667%"]},"3-1":{columnLayout:"2: wider & narrower",xs:["100%","100%"],sm:["50%","50%"],md:["75%","25%"],lg:["75%","25%"],xl:["75%","25%"]},"1-3":{columnLayout:"2: narrower & wider",xs:["100%","100%"],sm:["50%","50%"],md:["25%","75%"],lg:["25%","75%"],xl:["25%","75%"]},"1-1-1":{columnLayout:"3: equal width",xs:["100%","100%","100%"],sm:["100%","100%","100%"],md:["33.3333333%","33.3333333%","33.3333333%"],lg:["33.3333333%","33.3333333%","33.3333333%"],xl:["33.3333333%","33.3333333%","33.3333333%"]},"2-1-1":{columnLayout:"3: wide, narrow, and narrow",xs:["100%","100%","100%"],sm:["100%","50%","50%"],md:["50%","25%","25%"],lg:["50%","25%","25%"],xl:["50%","25%","25%"]},"1-2-1":{columnLayout:"3: narrow, wide, and narrow",xs:["100%","100%","100%"],sm:["100%","100%","100%"],md:["25%","50%","25%"],lg:["25%","50%","25%"],xl:["25%","50%","25%"]},"1-1-2":{columnLayout:"3: narrow, narrow, and wide",xs:["100%","100%","100%"],sm:["50%","50%","100%"],md:["25%","25%","50%"],lg:["25%","25%","50%"],xl:["25%","25%","50%"]},"1-1-1-1":{columnLayout:"4: equal width",xs:["100%","100%","100%","100%"],sm:["50%","50%","50%","50%"],md:["25%","25%","25%","25%"],lg:["25%","25%","25%","25%"],xl:["25%","25%","25%","25%"]},"1-1-1-1-1":{columnLayout:"5: equal width",xs:["100%","100%","100%","100%","100%"],sm:["50%","50%","50%","50%","50%"],md:["20%","20%","20%","20%","20%"],lg:["20%","20%","20%","20%","20%"],xl:["20%","20%","20%","20%","20%"]},"1-1-1-1-1-1":{columnLayout:"6: equal width",xs:["100%","100%","100%","100%","100%","100%"],sm:["50%","50%","50%","50%","50%","50%"],md:["33.3333333%","33.3333333%","33.3333333%","33.3333333%","33.3333333%","33.3333333%"],lg:["16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%"],xl:["16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%"]}}},responsiveSize:{type:String,value:"xs",reflectToAttribute:!0},__activeItem:{type:Object,observer:"_activeItemChanged"}}}}],(v=[{key:"connectedCallback",value:function(){var e=this;u(a(p.prototype),"connectedCallback",this).call(this),o.afterNextRender(this,function(){this.addEventListener("focusin",this._focusIn.bind(this)),this.addEventListener("focusout",this._focusOut.bind(this)),document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this)),document.body.addEventListener("hax-insert-content",this.haxInsertContent.bind(this))}),window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this,attribute:"responsive-size",relativeToParent:!0,sm:this.breakpointSm,md:this.breakpointMd,lg:this.breakpointLg,xl:this.breakpointXl}})),this.options={};var t=Object.keys(this.layouts);!function(){for(var o=0;o<t.length;o++)e.options[t[o]]=e.layouts[t[o]].columnLayout}(),this.HAXWiring=new r.HAXWiring,this.HAXWiring.setup(p.haxProperties,p.tag,this)}},{key:"cancelActive",value:function(e){this.__activeItem=null}},{key:"canMoveSlot",value:function(e,t){var o=t?-1:1,n=this.shadowRoot.querySelectorAll(".column").length,i=e.getAttribute("slot").split("-"),r=parseInt(i[1])+o;return r>=1&&r<=n}},{key:"moveSlot",value:function(e,t){var o=t?-1:1,n=e.getAttribute("slot").split("-"),i=parseInt(n[1])+o;this.canMoveSlot(e,o)&&e.setAttribute("slot","col-"+i)}},{key:"canMoveOrder",value:function(e,t){var o=t?e.previousElementSibling:e.nextElementSibling;return null!==o&&o.getAttribute("slot")===e.getAttribute("slot")}},{key:"moveOrder",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.canMoveOrder(e,t)&&(t?n.dom(this).insertBefore(this.__activeItem,this.__activeItem.previousElementSibling):n.dom(this).insertBefore(this.__activeItem.nextElementSibling,this.__activeItem))}},{key:"moveActiveElement",value:function(e){var t=this;switch(n.dom(e).localTarget.id){case"up":this.moveOrder(this.__activeItem,!0);break;case"down":this.moveOrder(this.__activeItem,!1);break;case"left":this.moveSlot(this.__activeItem,!0);break;case"right":this.moveSlot(this.__activeItem,!1)}setTimeout(function(){t.__activeItem&&"function"==typeof t.__activeItem.focus&&(t.positionArrows(t.__activeItem),t.__activeItem.focus())},100)}},{key:"_activeItemChanged",value:function(e,t){"undefined"!==s(e)&&null!=e?(e.classList.add("active-item"),this.positionArrows(e)):null==e&&this.positionArrows(e),"undefined"!==s(t)&&null!=t&&(t.classList.remove("active-item"),t.blur())}},{key:"setActiveElement",value:function(e){this.shadowRoot.querySelector("#right").focus(),e.preventDefault(),e.stopPropagation()}},{key:"_getColumnWidths",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sm",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1-1",o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=o[t],r={12:"1","8/4":"2-1","6/6":"1-1","4/8":"1-2","4/4/4":"1-1-1","3/3/3/3":"1-1-1-1"}[t],s=!1!==n?"xl":e;return void 0!==i&&void 0!==i[s]?o[t][s]:void 0!==o[r]&&void 0!==o[r][s]?o[r][s]:o["1-1"][s]}},{key:"_getColumnWidth",value:function(e,t){return void 0!==t&&void 0!==t[e]?"width:"+t[e]:"min-height: unset"}},{key:"_getColumns",value:function(e){return e.length}},{key:"_focusIn",value:function(e){if(this.editMode){var t=n.dom(e).localTarget;n.dom(t).parentNode===this&&(this.__activeItem=t)}}},{key:"_focusOut",value:function(e){this.editMode&&(n.dom(e).localTarget.parentNode===this||document.activeElement.parentNode===this||document.activeElement)}},{key:"positionArrows",value:function(e){if(null==e)this.shadowRoot.querySelector("#up").classList.remove("active"),this.shadowRoot.querySelector("#down").classList.remove("active"),this.shadowRoot.querySelector("#left").classList.remove("active"),this.shadowRoot.querySelector("#right").classList.remove("active");else{this.shadowRoot.querySelector("#up").classList.add("active"),this.shadowRoot.querySelector("#down").classList.add("active"),this.shadowRoot.querySelector("#left").classList.add("active"),this.shadowRoot.querySelector("#right").classList.add("active"),this.shadowRoot.querySelector("#up").disabled=!this.canMoveOrder(e,!0),this.shadowRoot.querySelector("#down").disabled=!this.canMoveOrder(e,!1),this.shadowRoot.querySelector("#left").disabled=!this.canMoveSlot(e,!0),this.shadowRoot.querySelector("#right").disabled=!this.canMoveSlot(e,!1);var t=this.getBoundingClientRect(),o=e.getBoundingClientRect(),n=o.top-t.top,i=o.left-t.left;this.shadowRoot.querySelector("#up").style.top=n-20+"px",this.shadowRoot.querySelector("#down").style.top=n+o.height+"px",this.shadowRoot.querySelector("#left").style.top=n+o.height/2+"px",this.shadowRoot.querySelector("#right").style.top=n+o.height/2+"px",this.shadowRoot.querySelector("#up").style.left=i+o.width/2-10+"px",this.shadowRoot.querySelector("#down").style.left=i+o.width/2-10+"px",this.shadowRoot.querySelector("#left").style.left=i-20+"px",this.shadowRoot.querySelector("#right").style.left=i+o.width+"px"}}},{key:"_editModeChanged",value:function(e,t){var o=this,r=n.dom(this).getEffectiveChildNodes();if("object"===s(r))if(e&&!t){for(var l in r)"undefined"!==s(r[l].tagName)&&(r[l].addEventListener("drop",this.dropEvent.bind(this)),r[l].addEventListener("dragstart",this.dragStart.bind(this)),r[l].addEventListener("dragend",this.dragEnd.bind(this)),r[l].addEventListener("dragover",function(e){e.preventDefault()}),r[l].setAttribute("draggable",!0),r[l].setAttribute("data-draggable",!0),r[l].setAttribute("tabindex",0));i.microTask.run(function(){for(var e=1;e<=o.columns.length;e++)void 0!==o.shadowRoot.querySelector("#col"+e)&&(o.shadowRoot.querySelector("#col"+e).addEventListener("drop",o.dropEvent.bind(o)),o.shadowRoot.querySelector("#col"+e).addEventListener("dragstart",o.dragStart.bind(o)),o.shadowRoot.querySelector("#col"+e).addEventListener("dragend",o.dragEnd.bind(o)),o.shadowRoot.querySelector("#col"+e).addEventListener("dragover",function(e){e.preventDefault()}),o.shadowRoot.querySelector("#col"+e).setAttribute("data-draggable",!0))})}else if(!e&&t){for(var l in r)"undefined"!==s(r[l].tagName)&&(r[l].removeEventListener("drop",this.dropEvent.bind(this)),r[l].removeEventListener("dragstart",this.dragStart.bind(this)),r[l].removeEventListener("dragend",this.dragEnd.bind(this)),r[l].removeEventListener("dragover",function(e){e.preventDefault()}),r[l].removeAttribute("draggable"),r[l].removeAttribute("data-draggable"),r[l].removeAttribute("tabindex"));i.microTask.run(function(){for(var e=1;e<=o.columns.length;e++)void 0!==o.shadowRoot.querySelector("#col"+e)&&(o.shadowRoot.querySelector("#col"+e).removeEventListener("drop",o.dropEvent.bind(o)),o.shadowRoot.querySelector("#col"+e).removeEventListener("dragstart",o.dragStart.bind(o)),o.shadowRoot.querySelector("#col"+e).removeEventListener("dragend",o.dragEnd.bind(o)),o.shadowRoot.querySelector("#col"+e).removeEventListener("dragover",function(e){e.preventDefault()}),o.shadowRoot.querySelector("#col"+e).removeAttribute("data-draggable"))})}}},{key:"dropEvent",value:function(e){var t=this,o=n.dom(e).localTarget;if("undefined"!==s(this.__activeItem)&&"undefined"!==s(o)&&null!=o.getAttribute("slot")&&this.__activeItem!==o)this.__activeItem.setAttribute("slot",o.getAttribute("slot")),n.dom(this).insertBefore(this.__activeItem,o),e.preventDefault(),e.stopPropagation();else if(".column"===o.tagName){var i=o.id.replace("col","");this.__activeItem.setAttribute("slot","col-"+i),n.dom(this).appendChild(this.__activeItem),e.preventDefault(),e.stopPropagation()}var r=n.dom(this).children;for(var l in r)"undefined"!==s(r[l].classList)&&r[l].classList.remove("mover");for(var a=1;a<=this.columns.length;a++)void 0!==this.shadowRoot.querySelector("#col"+a)&&this.shadowRoot.querySelector("#col"+a).classList.remove("mover");setTimeout(function(){t.__activeItem&&"function"==typeof t.__activeItem.focus&&(t.positionArrows(t.__activeItem),t.__activeItem.focus())},100)}},{key:"dragStart",value:function(e){var t=n.dom(this).children;for(var o in t)"undefined"!==s(t[o].classList)&&t[o].classList.add("mover");for(var i=1;i<=this.columns.length;i++)void 0!==this.shadowRoot.querySelector("#col"+i)&&this.shadowRoot.querySelector("#col"+i).classList.add("mover")}},{key:"dragEnd",value:function(e){var t=n.dom(this).children;for(var o in t)"undefined"!==s(t[o].classList)&&t[o].classList.remove("mover");for(var i=1;i<=this.columns.length;i++)void 0!==this.shadowRoot.querySelector("#col"+i)&&this.shadowRoot.querySelector("#col"+i).classList.remove("mover")}},{key:"haxInsertContent",value:function(e){var t=this;this===window.HaxStore.instance.activeContainerNode&&(this.editMode=!1,setTimeout(function(){t.editMode=!0,t.__activeItem&&"function"==typeof t.__activeItem.focus&&(t.positionArrows(t.__activeItem),t.__activeItem.focus())},100))}},{key:"_haxStorePropertyUpdated",value:function(e){e.detail&&"undefined"!==s(e.detail.value)&&e.detail.property&&("object"===s(e.detail.value)&&this.set(e.detail.property,null),"editMode"===e.detail.property&&this.ignoreHax||this.set(e.detail.property,e.detail.value))}}])&&l(h.prototype,v),y&&l(h,y),p}();window.customElements.define(p.tag,p),e.GridPlate=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=grid-plate.umd.js.map
