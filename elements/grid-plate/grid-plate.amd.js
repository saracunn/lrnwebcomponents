define(["exports","require","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/utils/render-status.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js","./node_modules/@lrnwebcomponents/responsive-utility/responsive-utility.js"],function(_exports,_require,_polymerElement,_renderStatus,_polymerDom,_async,_HAXWiring,_ironA11yKeys,_responsiveUtility){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.GridPlate=void 0;_require=babelHelpers.interopRequireWildcard(_require);function _templateObject_e9f7da406a8511e998799d4ab84c2117(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"simple-colors\">\n        :host {\n          display: block;\n          --grid-plate-row-margin: 0px;\n          --grid-plate-row-padding: 0px;\n          --grid-plate-item-margin: 15px;\n          --grid-plate-editable-border-color: #ccc;\n          --grid-plate-active-border-color: #6cd;\n          --grid-plate-col-transition: all 0.2s ease-in-out;\n        }\n        :host .row {\n          width: 100%;\n          display: flex;\n          flex-wrap: wrap;\n          justify-content: space-between;\n          align-items: stretch;\n          margin: var(--grid-plate-row-margin);\n          padding: var(--grid-plate-row-padding);\n        }\n        :host .column {\n          width: 100%;\n          flex: 0 0 auto;\n          transition: var(--grid-plate-col-transition);\n        }\n        :host([edit-mode]) .column {\n          min-height: 150px;\n        }\n\n        :host([edit-mode]) .column {\n          outline: 1px dotted var(--grid-plate-editable-border-color);\n        }\n        :host .column[style=\"min-height: unset\"] {\n          display: none;\n        }\n        :host([edit-mode]) .column[style=\"min-height: unset\"]:not(:empty) {\n          display: block;\n          outline: 1px solid red;\n          width: 20%;\n          margin-top: var(--grid-plate-item-margin);\n        }\n        :host([edit-mode])\n          .column[style=\"min-height: unset\"]:not(:empty):before {\n          content: \"Layout hides column (\" attr(id) \")\";\n          color: red;\n          margin: var(--grid-plate-item-margin);\n          padding: 15px 0;\n          min-height: 150px;\n        }\n        :host ::slotted(*) {\n          margin: var(--grid-plate-item-margin);\n          padding: 0;\n        }\n        :host ::slotted(*.mover) {\n          outline: 2px dashed var(--grid-plate-editable-border-color);\n          outline-offset: 4px;\n        }\n        :host ::slotted(*.active-item) {\n          outline: 2px dashed var(--grid-plate-active-border-color);\n          outline-offset: 4px;\n        }\n        :host ::slotted(*[data-draggable]:focus),\n        :host ::slotted(*[data-draggable]:hover),\n        :host ::slotted(*[data-draggable]:active) {\n          cursor: move;\n        }\n\n        :host([edit-mode]) .column.mover {\n          background-color: yellow;\n        }\n        :host .column[data-draggable].mover {\n          background-color: pink;\n        }\n\n        paper-icon-button {\n          display: none;\n          position: absolute;\n          margin: 0;\n          padding: 0;\n          outline: none;\n          width: 20px;\n          height: 20px;\n          color: black;\n          background-color: #eeeeee;\n          border-radius: 50%;\n          box-sizing: content-box !important;\n          z-index: 1;\n          min-width: unset;\n        }\n\n        paper-icon-button[disabled] {\n          color: #aaa;\n          background-color: #ddd;\n        }\n        paper-icon-button[disabled]:focus,\n        paper-icon-button[disabled]:hover {\n          cursor: not-allowed;\n        }\n        paper-icon-button.active {\n          display: block;\n        }\n\n        .button-holding-pen {\n          position: relative;\n        }\n      </style>\n      <div class=\"button-holding-pen\">\n        <paper-icon-button\n          icon=\"icons:arrow-upward\"\n          title=\"move item up\"\n          id=\"up\"\n          on-tap=\"moveActiveElement\"\n        >\n        </paper-icon-button>\n        <paper-icon-button\n          icon=\"icons:arrow-forward\"\n          title=\"move item right\"\n          id=\"right\"\n          on-tap=\"moveActiveElement\"\n        >\n        </paper-icon-button>\n        <paper-icon-button\n          icon=\"icons:arrow-downward\"\n          title=\"move item down\"\n          id=\"down\"\n          on-tap=\"moveActiveElement\"\n        >\n        </paper-icon-button>\n        <paper-icon-button\n          icon=\"icons:arrow-back\"\n          title=\"move item left\"\n          id=\"left\"\n          on-tap=\"moveActiveElement\"\n        >\n        </paper-icon-button>\n      </div>\n      <div class=\"row\">\n        <div\n          class=\"column\"\n          id=\"col1\"\n          style$=\"[[_getColumnWidth(0,columnWidths)]]\"\n        >\n          <slot name=\"col-1\"></slot>\n        </div>\n        <div\n          class=\"column\"\n          id=\"col2\"\n          style$=\"[[_getColumnWidth(1,columnWidths)]]\"\n        >\n          <slot name=\"col-2\"></slot>\n        </div>\n        <div\n          class=\"column\"\n          id=\"col3\"\n          style$=\"[[_getColumnWidth(2,columnWidths)]]\"\n        >\n          <slot name=\"col-3\"></slot>\n        </div>\n        <div\n          class=\"column\"\n          id=\"col4\"\n          style$=\"[[_getColumnWidth(3,columnWidths)]]\"\n        >\n          <slot name=\"col-4\"></slot>\n        </div>\n        <div\n          class=\"column\"\n          id=\"col5\"\n          style$=\"[[_getColumnWidth(4,columnWidths)]]\"\n        >\n          <slot name=\"col-5\"></slot>\n        </div>\n        <div\n          class=\"column\"\n          id=\"col6\"\n          style$=\"[[_getColumnWidth(5,columnWidths)]]\"\n        >\n          <slot name=\"col-6\"></slot>\n        </div>\n      </div>\n      <iron-a11y-keys\n        stop-keyboard-event-propagation\n        target=\"[[__activeItem]]\"\n        keys=\"enter\"\n        on-keys-pressed=\"setActiveElement\"\n      ></iron-a11y-keys>\n      <iron-a11y-keys\n        target=\"[[__activeItem]]\"\n        keys=\"esc\"\n        on-keys-pressed=\"cancelActive\"\n      ></iron-a11y-keys>\n    "]);_templateObject_e9f7da406a8511e998799d4ab84c2117=function _templateObject_e9f7da406a8511e998799d4ab84c2117(){return data};return data}/**
`grid-plate`
A grid plate based on a layout that manipulates it.

* @demo demo/index.html

@microcopy - the mental model for this element
 -

*/var GridPlate=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(GridPlate,_PolymerElement);function GridPlate(){var _this;babelHelpers.classCallCheck(this,GridPlate);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GridPlate).call(this));new Promise(function(res,rej){return _require.default(["@polymer/paper-icon-button/paper-icon-button.js"],res,rej)});new Promise(function(res,rej){return _require.default(["@polymer/iron-icons/iron-icons.js"],res,rej)});return _this}babelHelpers.createClass(GridPlate,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;babelHelpers.get(babelHelpers.getPrototypeOf(GridPlate.prototype),"connectedCallback",this).call(this);(0,_renderStatus.afterNextRender)(this,function(){this.addEventListener("focusin",this._focusIn.bind(this));this.addEventListener("focusout",this._focusOut.bind(this));// listen for HAX if it's around
document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this));// listen for HAX insert events if it exists
document.body.addEventListener("hax-insert-content",this.haxInsertContent.bind(this))});window.ResponsiveUtility.requestAvailability();window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this,attribute:"responsive-size",relativeToParent:!0,sm:this.breakpointSm,md:this.breakpointMd,lg:this.breakpointLg,xl:this.breakpointXl}}));// Establish hax property binding
this.options={};var layouts=Object.keys(this.layouts),getOptions=function getOptions(){//loop through all the supplied layouts to get the HAX layout options & descriptions
for(var i=0;i<layouts.length;i++){_this2.options[layouts[i]]=_this2.layouts[layouts[i]].columnLayout}};getOptions();this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setup(GridPlate.haxProperties,GridPlate.tag,this)}},{key:"cancelActive",/**
   * Cancel active element
   */value:function cancelActive(e){this.__activeItem=null}/**
   * Determines if the item can move a set number of slots.
   *
   * @param {object} the item
   * @param {number} -1 for left or +1 for right
   * @returns {boolean} if the item can move a set number of slots
   */},{key:"canMoveSlot",value:function canMoveSlot(item,before){var dir=before?-1:1,max=this.shadowRoot.querySelectorAll(".column").length,col=item.getAttribute("slot").split("-"),dest=parseInt(col[1])+dir;return 1<=dest&&dest<=max}/**
   * Moves an item a set number of slots.
   *
   * @param {object} the item
   * @param {number} -1 for left or +1 for right
   */},{key:"moveSlot",value:function moveSlot(item,before){var dir=before?-1:1,col=item.getAttribute("slot").split("-"),dest=parseInt(col[1])+dir;if(this.canMoveSlot(item,dir)){item.setAttribute("slot","col-"+dest)}}/**
   * Determines if the item can move a set number of slots.
   *
   * @param {object} the item
   * @param {boolean} move item before previous? (false for move item after next)
   * @returns {boolean} if the item can move a set number of slots
   */},{key:"canMoveOrder",value:function canMoveOrder(item,before){var target=before?item.previousElementSibling:item.nextElementSibling;return null!==target&&target.getAttribute("slot")===item.getAttribute("slot")}/**
   * Moves an item's order within a slot.
   *
   * @param {object} the item
   * @param {boolean} move item before previous? (false for move item after next)
   */},{key:"moveOrder",value:function moveOrder(item){var before=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!0,dir=before?-1:1;if(this.canMoveOrder(item,before)){if(before){(0,_polymerDom.dom)(this).insertBefore(this.__activeItem,this.__activeItem.previousElementSibling)}else{(0,_polymerDom.dom)(this).insertBefore(this.__activeItem.nextElementSibling,this.__activeItem)}}}/**
   * Move the active element based on which button got pressed.
   */},{key:"moveActiveElement",value:function moveActiveElement(e){var _this3=this,normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;// see if this was an up down left or right movement
switch(local.id){case"up":this.moveOrder(this.__activeItem,!0);break;case"down":this.moveOrder(this.__activeItem,!1);break;case"left":this.moveSlot(this.__activeItem,!0);break;case"right":this.moveSlot(this.__activeItem,!1);break;}// ensure arrows are correctly positioned after the move
setTimeout(function(){if(_this3.__activeItem&&"function"===typeof _this3.__activeItem.focus){_this3.positionArrows(_this3.__activeItem);_this3.__activeItem.focus()}},100)}/**
   * Notice changes to what's active and ensure UX associated w/ it is visble
   */},{key:"_activeItemChanged",value:function _activeItemChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=newValue){// position arrows
newValue.classList.add("active-item");this.positionArrows(newValue)}else if(null==newValue){this.positionArrows(newValue)}// if we had a previous value then remove the active item class
if(babelHelpers.typeof(oldValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=oldValue){oldValue.classList.remove("active-item");oldValue.blur()}}/**
   * Set the target element to active
   */},{key:"setActiveElement",value:function setActiveElement(e){this.shadowRoot.querySelector("#right").focus();e.preventDefault();e.stopPropagation()}/**
   * gets the column widths based on selected layout and current responsive width
   *
   * @param {string} a string that describes the current responsive width
   * @param {string} the name of selected layout
   * @param {object} predefined layouts of column sizes and various responsive widths
   * @param {boolean} disable responsive sizing?
   * @returns {object} an object with a layout's column sizes at the current responsive width
   */},{key:"_getColumnWidths",value:function _getColumnWidths(){var responsiveSize=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"sm",layout=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"1-1",layouts=2<arguments.length?arguments[2]:void 0,disableResponsive=3<arguments.length?arguments[3]:void 0,newl=layouts[layout],//how old layout names map to the new ones
oldLayouts={12:"1","8/4":"2-1","6/6":"1-1","4/8":"1-2","4/4/4":"1-1-1","3/3/3/3":"1-1-1-1"},oldl=oldLayouts[layout],size=!1!==disableResponsive?"xl":responsiveSize;if(newl!==void 0&&newl[size]!==void 0){//return the layout
return layouts[layout][size]}else if(layouts[oldl]!==void 0&&layouts[oldl][size]!==void 0){//return new layout that maps to old one
return layouts[oldl][size]}else{//return 2-column layout
return layouts["1-1"][size]}}/**
   * gets a given column's current width based on layout and current responsive width
   *
   * @param {number} the index of the column
   * @param {object} an object with a layout's column sizes at the current responsive width
   * @returns {string} a given column's current width based on layout and current responsive width
   */},{key:"_getColumnWidth",value:function _getColumnWidth(column,columnWidths){return columnWidths!==void 0&&columnWidths[column]!==void 0?"width:"+columnWidths[column]:"min-height: unset"}/**
   * gets a given column's current width based on layout and current responsive width
   *
   * @param {string} the name of selected layout
   * @returns {number} the number of columns in this layout
   */},{key:"_getColumns",value:function _getColumns(columnWidths){return columnWidths.length}/**
   * Focus / tab / click event normalization
   */},{key:"_focusIn",value:function _focusIn(e){if(this.editMode){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;// only activate if we touch something that's in the slot of the grid plate
if((0,_polymerDom.dom)(local).parentNode===this){this.__activeItem=local}}}/**
   * Focus / tab / click event normalization
   */},{key:"_focusOut",value:function _focusOut(e){if(this.editMode){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;// @todo need to correctly de-focus when the element loses focus entirely
if(local.parentNode===this||document.activeElement.parentNode===this||document.activeElement===this){}else{//this.__activeItem = null;
}}}/**
   * Position the arrows to change directions around something
   */},{key:"positionArrows",value:function positionArrows(item){if(null==item){this.shadowRoot.querySelector("#up").classList.remove("active");this.shadowRoot.querySelector("#down").classList.remove("active");this.shadowRoot.querySelector("#left").classList.remove("active");this.shadowRoot.querySelector("#right").classList.remove("active")}else{this.shadowRoot.querySelector("#up").classList.add("active");this.shadowRoot.querySelector("#down").classList.add("active");this.shadowRoot.querySelector("#left").classList.add("active");this.shadowRoot.querySelector("#right").classList.add("active");// ensure we disable invalid options contextually
// test for an element above us
this.shadowRoot.querySelector("#up").disabled=!this.canMoveOrder(item,!0);// test for an element below us
this.shadowRoot.querySelector("#down").disabled=!this.canMoveOrder(item,!1);// test for a column to the left of us
this.shadowRoot.querySelector("#left").disabled=!this.canMoveSlot(item,!0);// test for a column to the right of us
this.shadowRoot.querySelector("#right").disabled=!this.canMoveSlot(item,!1);// get coordinates of the page and active element
var bodyRect=this.getBoundingClientRect(),elemRect=item.getBoundingClientRect(),topOffset=elemRect.top-bodyRect.top,leftOffset=elemRect.left-bodyRect.left;// set the arrows to position correctly at all 4 sides
this.shadowRoot.querySelector("#up").style.top=topOffset-20+"px";this.shadowRoot.querySelector("#down").style.top=topOffset+elemRect.height+"px";this.shadowRoot.querySelector("#left").style.top=topOffset+elemRect.height/2+"px";this.shadowRoot.querySelector("#right").style.top=topOffset+elemRect.height/2+"px";this.shadowRoot.querySelector("#up").style.left=leftOffset+elemRect.width/2-10+"px";this.shadowRoot.querySelector("#down").style.left=leftOffset+elemRect.width/2-10+"px";this.shadowRoot.querySelector("#left").style.left=leftOffset-20+"px";this.shadowRoot.querySelector("#right").style.left=leftOffset+elemRect.width+"px"}}/**
   * Notice edit state has changed
   */},{key:"_editModeChanged",value:function _editModeChanged(newValue,oldValue){var _this4=this,children=(0,_polymerDom.dom)(this).getEffectiveChildNodes();if("object"===babelHelpers.typeof(children)){if(newValue&&!oldValue){// walk the children and apply the draggable state needed
for(var i in children){if(babelHelpers.typeof(children[i].tagName)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].addEventListener("drop",this.dropEvent.bind(this));children[i].addEventListener("dragstart",this.dragStart.bind(this));children[i].addEventListener("dragend",this.dragEnd.bind(this));children[i].addEventListener("dragover",function(e){e.preventDefault()});children[i].setAttribute("draggable",!0);children[i].setAttribute("data-draggable",!0);// ensure they can be focused
children[i].setAttribute("tabindex",0)}}_async.microTask.run(function(){for(var j=1;j<=_this4.columns.length;j++){if(_this4.shadowRoot.querySelector("#col"+j)!==void 0){_this4.shadowRoot.querySelector("#col"+j).addEventListener("drop",_this4.dropEvent.bind(_this4));_this4.shadowRoot.querySelector("#col"+j).addEventListener("dragstart",_this4.dragStart.bind(_this4));_this4.shadowRoot.querySelector("#col"+j).addEventListener("dragend",_this4.dragEnd.bind(_this4));_this4.shadowRoot.querySelector("#col"+j).addEventListener("dragover",function(e){e.preventDefault()});_this4.shadowRoot.querySelector("#col"+j).setAttribute("data-draggable",!0)}}})}// flipping from true to false
else if(!newValue&&oldValue){// walk the children and apply the draggable state needed
for(var i in children){if(babelHelpers.typeof(children[i].tagName)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].removeEventListener("drop",this.dropEvent.bind(this));children[i].removeEventListener("dragstart",this.dragStart.bind(this));children[i].removeEventListener("dragend",this.dragEnd.bind(this));children[i].removeEventListener("dragover",function(e){e.preventDefault()});children[i].removeAttribute("draggable");children[i].removeAttribute("data-draggable");children[i].removeAttribute("tabindex")}}_async.microTask.run(function(){for(var j=1;j<=_this4.columns.length;j++){if(_this4.shadowRoot.querySelector("#col"+j)!==void 0){_this4.shadowRoot.querySelector("#col"+j).removeEventListener("drop",_this4.dropEvent.bind(_this4));_this4.shadowRoot.querySelector("#col"+j).removeEventListener("dragstart",_this4.dragStart.bind(_this4));_this4.shadowRoot.querySelector("#col"+j).removeEventListener("dragend",_this4.dragEnd.bind(_this4));_this4.shadowRoot.querySelector("#col"+j).removeEventListener("dragover",function(e){e.preventDefault()});_this4.shadowRoot.querySelector("#col"+j).removeAttribute("data-draggable")}}})}}}/**
   * Drop an item onto another
   */},{key:"dropEvent",value:function dropEvent(e){var _this5=this,normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;// if we have a slot on what we dropped into then we need to mirror that item
// and place ourselves below it in the DOM
if(babelHelpers.typeof(this.__activeItem)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&babelHelpers.typeof(local)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=local.getAttribute("slot")&&this.__activeItem!==local){this.__activeItem.setAttribute("slot",local.getAttribute("slot"));(0,_polymerDom.dom)(this).insertBefore(this.__activeItem,local);// ensure that if we caught this event we process it
e.preventDefault();e.stopPropagation()}// special case for dropping on an empty column or between items
// which could involve a miss on the column
else if(".column"===local.tagName){var col=local.id.replace("col","");this.__activeItem.setAttribute("slot","col-"+col);(0,_polymerDom.dom)(this).appendChild(this.__activeItem);// ensure that if we caught this event we process it
e.preventDefault();e.stopPropagation()}var children=(0,_polymerDom.dom)(this).children;// walk the children and apply the draggable state needed
for(var i in children){if(babelHelpers.typeof(children[i].classList)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].classList.remove("mover")}}for(var j=1;j<=this.columns.length;j++){if(this.shadowRoot.querySelector("#col"+j)!==void 0){this.shadowRoot.querySelector("#col"+j).classList.remove("mover")}}// position arrows / set focus in case the DOM got updated above
setTimeout(function(){if(_this5.__activeItem&&"function"===typeof _this5.__activeItem.focus){_this5.positionArrows(_this5.__activeItem);_this5.__activeItem.focus()}},100)}/**
   * Start a drag event, this is an element being dragged
   */},{key:"dragStart",value:function dragStart(e){var children=(0,_polymerDom.dom)(this).children;// walk the children and apply the draggable state needed
for(var i in children){if(babelHelpers.typeof(children[i].classList)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].classList.add("mover")}}for(var j=1;j<=this.columns.length;j++){if(this.shadowRoot.querySelector("#col"+j)!==void 0){this.shadowRoot.querySelector("#col"+j).classList.add("mover")}}}/**
   * When we end dragging ensure we remove the mover class.
   */},{key:"dragEnd",value:function dragEnd(e){var children=(0,_polymerDom.dom)(this).children;// walk the children and apply the draggable state needed
for(var i in children){if(babelHelpers.typeof(children[i].classList)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].classList.remove("mover")}}for(var j=1;j<=this.columns.length;j++){if(this.shadowRoot.querySelector("#col"+j)!==void 0){this.shadowRoot.querySelector("#col"+j).classList.remove("mover")}}}/**
   * Insert event noticed by HAX
   */},{key:"haxInsertContent",value:function haxInsertContent(e){var _this6=this;// see if WE are the thing that's active when insert was fired
if(this===window.HaxStore.instance.activeContainerNode){// trick events into rebinding since this event is only possible
// when we are in an edit state
this.editMode=!1;// delay and then set it back, re-applying all events
setTimeout(function(){_this6.editMode=!0;if(_this6.__activeItem&&"function"===typeof _this6.__activeItem.focus){_this6.positionArrows(_this6.__activeItem);_this6.__activeItem.focus()}},100)}}/**
   * Store updated, sync.
   */},{key:"_haxStorePropertyUpdated",value:function _haxStorePropertyUpdated(e){if(e.detail&&babelHelpers.typeof(e.detail.value)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&e.detail.property){if("object"===babelHelpers.typeof(e.detail.value)){this.set(e.detail.property,null)}if("editMode"===e.detail.property&&this.ignoreHax){// do nothing, we were told to ignore hax
}else{this.set(e.detail.property,e.detail.value)}}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_e9f7da406a8511e998799d4ab84c2117())}},{key:"tag",get:function get(){return"grid-plate"}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,settings:{quick:[],configure:[{property:"layout",title:"Column Layout",description:"Style to present these items (may change for small screens)",inputMethod:"select",options:this.options}],advanced:[{property:"breakpointSm",title:"Small Breakpoint",description:"Anything less than this number (in pixels) will render with the smallest version of this layout",inputMethod:"textfield",validationType:"number"},{property:"breakpointMd",title:"Medium Breakpoint",description:"Anything less than this number (in pixels) will render with the small version of this layout",inputMethod:"textfield",validationType:"number"},{property:"breakpointLg",title:"Large Breakpoint",description:"Anything less than this number (in pixels) will render with the medium version of this layout.",inputMethod:"textfield",validationType:"number"},{property:"breakpointXl",title:"Extra-Large Breakpoint",description:"Anything less than this number (in pixels) will render with the large version of this layout. Anything greater than or equal to this number will display with the maximum number of columns for this layout.",inputMethod:"textfield",validationType:"number"}]},saveOptions:{unsetAttributes:["__active-item","edit-mode"]}}}},{key:"properties",get:function get(){return{ignoreHax:{type:Boolean,value:!1},/**
       * Custom small breakpoint for the layouts; only updated on attached
       */breakpointSm:{type:Number,value:900},/**
       * Custom medium breakpoint for the layouts; only updated on attached
       */breakpointMd:{type:Number,value:1200},/**
       * Custom large breakpoint for the layouts; only updated on attached
       */breakpointLg:{type:Number,value:1500},/**
       * Custom extra-large breakpoint for the layouts; only updated on attached
       */breakpointXl:{type:Number,value:1800},/**
       * number of columns at this layout / responsive size
       */columns:{type:Number,computed:"_getColumns(columnWidths)",reflectToAttribute:!0},/**
       * name of selected layout
       */columnWidths:{type:String,computed:"_getColumnWidths(responsiveSize,layout,layouts,disableResponsive)"},/**
       * disables responsive layouts for HAX preview
       */disableResponsive:{type:Boolean,value:!1,notify:!0},/**
       * If the grid plate is in a state where its items
       * can be modified as far as order or column placement.
       */editMode:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_editModeChanged"},/**
       * an object with a layout's column sizes
       * at the current responsive width
       */layout:{type:String,value:"1-1",reflectToAttribute:!0},/**
       * Predefined layouts of column sizes and various responsive widths. 
       * For example:```
  {
    "1-1-1-1": {                         //the name of the layout
      "xs": ["100%","100%","100%","100%] //the responsive width of each column when the grid is extra small
      "sm": ["50%","50%","50%","50%"]    //the responsive width of each column when the grid is small
      "md": ["50%","50%","50%","50%"]    //the responsive width of each column when the grid is medium
      "lg": ["25%","25%","25%","25%"]    //the responsive width of each column when the grid is large
      "xl": ["25%","25%","25%","25%"]    //the responsive width of each column when the grid is extra large
    },
    {...}
  }```
      */layouts:{type:Object,value:{1:{columnLayout:"1: full width",xs:["100%"],sm:["100%"],md:["100%"],lg:["100%"],xl:["100%"]},"1-1":{columnLayout:"2: equal width",xs:["100%","100%"],sm:["50%","50%"],md:["50%","50%"],lg:["50%","50%"],xl:["50%","50%"]},"2-1":{columnLayout:"2: wide & narrow",xs:["100%","100%"],sm:["50%","50%"],md:["66.6666667%","33.3333337%"],lg:["66.6666667%","33.3333337%"],xl:["66.6666667%","33.3333337%"]},"1-2":{columnLayout:"2: narrow & wide",xs:["100%","100%"],sm:["50%","50%"],md:["33.3333333%","66.6666667%"],lg:["33.3333333%","66.6666667%"],xl:["33.3333333%","66.6666667%"]},"3-1":{columnLayout:"2: wider & narrower",xs:["100%","100%"],sm:["50%","50%"],md:["75%","25%"],lg:["75%","25%"],xl:["75%","25%"]},"1-3":{columnLayout:"2: narrower & wider",xs:["100%","100%"],sm:["50%","50%"],md:["25%","75%"],lg:["25%","75%"],xl:["25%","75%"]},"1-1-1":{columnLayout:"3: equal width",xs:["100%","100%","100%"],sm:["100%","100%","100%"],md:["33.3333333%","33.3333333%","33.3333333%"],lg:["33.3333333%","33.3333333%","33.3333333%"],xl:["33.3333333%","33.3333333%","33.3333333%"]},"2-1-1":{columnLayout:"3: wide, narrow, and narrow",xs:["100%","100%","100%"],sm:["100%","50%","50%"],md:["50%","25%","25%"],lg:["50%","25%","25%"],xl:["50%","25%","25%"]},"1-2-1":{columnLayout:"3: narrow, wide, and narrow",xs:["100%","100%","100%"],sm:["100%","100%","100%"],md:["25%","50%","25%"],lg:["25%","50%","25%"],xl:["25%","50%","25%"]},"1-1-2":{columnLayout:"3: narrow, narrow, and wide",xs:["100%","100%","100%"],sm:["50%","50%","100%"],md:["25%","25%","50%"],lg:["25%","25%","50%"],xl:["25%","25%","50%"]},"1-1-1-1":{columnLayout:"4: equal width",xs:["100%","100%","100%","100%"],sm:["50%","50%","50%","50%"],md:["25%","25%","25%","25%"],lg:["25%","25%","25%","25%"],xl:["25%","25%","25%","25%"]},"1-1-1-1-1":{columnLayout:"5: equal width",xs:["100%","100%","100%","100%","100%"],sm:["50%","50%","50%","50%","50%"],md:["20%","20%","20%","20%","20%"],lg:["20%","20%","20%","20%","20%"],xl:["20%","20%","20%","20%","20%"]},"1-1-1-1-1-1":{columnLayout:"6: equal width",xs:["100%","100%","100%","100%","100%","100%"],sm:["50%","50%","50%","50%","50%","50%"],md:["33.3333333%","33.3333333%","33.3333333%","33.3333333%","33.3333333%","33.3333333%"],lg:["16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%"],xl:["16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%","16.6666667%"]}}},/**
       * Responsive size as `xs`, `sm`, `md`, `lg`, or `xl`
       */responsiveSize:{type:String,value:"xs",reflectToAttribute:!0},/**
       * Track active item
       */__activeItem:{type:Object,observer:"_activeItemChanged"}}}}]);return GridPlate}(_polymerElement.PolymerElement);_exports.GridPlate=GridPlate;window.customElements.define(GridPlate.tag,GridPlate)});