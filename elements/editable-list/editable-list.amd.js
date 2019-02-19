define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js","./node_modules/@polymer/iron-list/iron-list.js","./lib/editable-list-item.js"],function(_exports,_polymerElement,_simpleModal,_ironList,_editableListItem){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.EditableList=void 0;function _templateObject_d5091530344911e99d744129ad60b9cb(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\niron-list {\n  height: 100%;\n}</style>\n<iron-list id=\"list\" items=\"[[items]]\" as=\"item\" mutable-data>\n  <template>\n    <editable-list-item edit-mode=\"[[item.metadata.canEdit]]\" can-edit=\"[[item.metadata.canEdit]]\" can-delete=\"[[item.metadata.canDelete]]\" value=\"[[item.title]]\"></editable-list-item>\n  </template>\n</iron-list>"]);_templateObject_d5091530344911e99d744129ad60b9cb=function _templateObject_d5091530344911e99d744129ad60b9cb(){return data};return data}var EditableList=function(_PolymerElement){babelHelpers.inherits(EditableList,_PolymerElement);function EditableList(){babelHelpers.classCallCheck(this,EditableList);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(EditableList).apply(this,arguments))}babelHelpers.createClass(EditableList,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(EditableList.prototype),"connectedCallback",this).call(this);var modal=window.SimpleModal.requestAvailability();this.$.list.addEventListener("editable-list-item-delete",this.triggerDeleteModal.bind(this))}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.$.list.removeEventListener("editable-list-item-delete",this.triggerDeleteModal.bind(this))}},{key:"triggerDeleteModal",value:function triggerDeleteModal(e){this.activeElement=e.detail.element;var c=document.createElement("div");c.innerHTML="<div>Are you sure you want to delete <strong>".concat(e.detail.element.value,"</strong>?</div>");var button1=document.createElement("paper-button");button1.raised=!0;button1.addEventListener("click",this._deleteItemConfirm.bind(this));button1.appendChild(document.createTextNode("Delete"));var button2=document.createElement("paper-button");button2.raised=!0;button2.setAttribute("dialog-dismiss","dialog-dismiss");button2.appendChild(document.createTextNode("cancel"));var b=document.createElement("div");b.appendChild(button1);b.appendChild(button2);var evt=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:"Delete ".concat(e.detail.element.value),elements:{content:c,buttons:b},invokedBy:e.detail.element.$.delete,clone:!1}});this.dispatchEvent(evt)}},{key:"_deleteItemConfirm",value:function _deleteItemConfirm(e){var evt=new CustomEvent("simple-modal-hide",{bubbles:!0,cancelable:!0,detail:{}});this.dispatchEvent(evt)}},{key:"_editModeChanged",value:function _editModeChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this._itemsChanged(this.items);for(var i in this.items){if(this.items[i].metadata){this.items[i].metadata.canEdit=newValue;this.notifyPath("items.".concat(i,".metadata.canEdit"))}}}}},{key:"_itemsChanged",value:function _itemsChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&"string"===typeof newValue){this.set("items",JSON.parse(newValue))}}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_d5091530344911e99d744129ad60b9cb())}},{key:"properties",get:function get(){return{editMode:{name:"editMode",type:"Boolean",value:!1,notify:!0,reflectToAttribute:!0,observer:"_editModeChanged"},items:{name:"items",type:"Array",value:[],reflectToAttribute:!1,observer:"_itemsChanged"},activeElement:{name:"activeElement",type:"Object"}}}},{key:"tag",get:function get(){return"editable-list"}}]);return EditableList}(_polymerElement.PolymerElement);_exports.EditableList=EditableList;window.customElements.define(EditableList.tag,EditableList)});