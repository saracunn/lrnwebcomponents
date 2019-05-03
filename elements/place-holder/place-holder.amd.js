define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icons/editor-icons.js","./node_modules/@polymer/iron-icons/notification-icons.js","./node_modules/@polymer/iron-icons/av-icons.js","./node_modules/@polymer/iron-icons/device-icons.js","./node_modules/@polymer/iron-icons/image-icons.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerLegacy,_ironIcons,_editorIcons,_notificationIcons,_avIcons,_deviceIcons,_imageIcons,_simpleColors,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PlaceHolder=void 0;function _templateObject_d45ef1106a8411e99f89ad07b6dabf2b(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"simple-colors\">\n      :host {\n        display: block;\n        border: none;\n        transition: 0.2s all linear;\n      }\n      :host([drag-over]) {\n        border: 4px dashed #2196f3;\n      }\n      .placeholder-inner {\n        text-align: center;\n        padding: 16px;\n        color: var(--simple-colors-default-theme-grey-11, #222222);\n        background-color: var(--simple-colors-default-theme-grey-2, #eeeeee);\n      }\n      iron-icon.placeholder-icon {\n        margin: 0 auto;\n        width: 50%;\n        height: 50%;\n        display: block;\n      }\n      .placeholder-text {\n        line-height: 24px;\n        font-size: 24px;\n        font-style: italic;\n      }\n    </style>\n    <div class=\"placeholder-inner\">\n      <iron-icon icon=\"[[iconFromType]]\" class=\"placeholder-icon\"></iron-icon>\n      <span class=\"placeholder-text\">[[calcText]]</span>\n    </div>\n  "]);_templateObject_d45ef1106a8411e99f89ad07b6dabf2b=function _templateObject_d45ef1106a8411e99f89ad07b6dabf2b(){return data};return data}/**
 * `place-holder`
 * Placeholder for a piece of media in the future
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 * - placeholder is a grey block on the page which can respond to drag and drop
 */var PlaceHolder=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_d45ef1106a8411e99f89ad07b6dabf2b()),is:"place-holder",behaviors:[HAXBehaviors.PropertiesBehaviors],listeners:{dblclick:"fireReplaceEvent"},properties:{/**
     * calculate an icon based on the type that was used
     */iconFromType:{type:String,computed:"_getIconFromType(type, dragOver)"},/**
     * Text place holder for describing this place holder element.
     */text:{type:String,value:""},/**
     * Calculate text based on the type in the event we have no default.
     */calcText:{type:String,computed:"_getCalcText(text, type, dragOver)"},/**
     * A media type to visualize and also bubble events off of.
     */type:{type:String,value:"text"},/**
     * Bind dragging state to a variable so we can apply CSS.
     */dragOver:{type:Boolean,value:!1,reflectToAttribute:!0}},/**
   * Fire an event for things to react to above us
   */fireReplaceEvent:function fireReplaceEvent(e){this.fire("place-holder-replace",this.type)},/**
   * Get the calculated text based on text being empty and type being set.
   */_getCalcText:function _getCalcText(text,type,dragOver){if(dragOver){return"Upload file"}else if(""===text){return"Place holder for "+type+"."}else{return text}},/**
   * Generate an icon based on the media type selected
   * for the place holder.
   */_getIconFromType:function _getIconFromType(type,dragOver){if(!dragOver){switch(type){case"document":return"editor:insert-drive-file";break;case"audio":return"av:music-video";break;case"video":return"notification:ondemand-video";break;case"image":return"image:crop-original";break;case"math":return"editor:functions";break;case"text":default:return"editor:format-align-left";break;}}else{// we are dragging, ignore icon
return"icons:file-upload"}},/**
   * Attached to the DOM, now fire.
   */attached:function attached(){this.addEventListener("dragover",function(e){this.dragOver=!0;e.preventDefault();e.stopPropagation();this.classList.add("dragover")});this.addEventListener("dragleave",function(e){this.dragOver=!1;e.preventDefault();e.stopPropagation();this.classList.remove("dragover")});// self bind a drop event enough though something else
// will need to step in and do something with this.
// We are just making sure that this doesn't redirect the browser.
this.addEventListener("drop",function(e){this.dragOver=!1;e.preventDefault();e.stopPropagation();this.classList.remove("dragover");// this helps ensure that what gets drag and dropped is a file
// this prevents issues with selecting and dragging text (which triggers drag/drop)
// as well as compatibility with things that are legit in a draggable state
try{if("file"===e.dataTransfer.items[0].kind){e.placeHolderElement=this;// fire this specialized event up so things like HAX can intercept
this.fire("place-holder-file-drop",e)}}catch(e){}});// Establish hax property binding
var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Placeholder",description:"A place holder that can be converted into the media type that's been selected",icon:"image:transform",color:"grey",groups:["Placeholder"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"type",title:"Type",description:"Type of gizmo that this accepts for replacement.",inputMethod:"select",options:{text:"Text / content",document:"Document / file",audio:"Audio",video:"Video",image:"Image",math:"Math"}}],advanced:[]},saveOptions:{wipeSlot:!0}};this.setHaxProperties(props)}});_exports.PlaceHolder=PlaceHolder});