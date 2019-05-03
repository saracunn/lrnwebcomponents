define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/csv-render/csv-render.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],function(_exports,_polymerLegacy,_csvRender,_HAXWiring,_schemaBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnTable=void 0;function _templateObject_7394e3106a8611e983e8252e0e4d94db(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n      .hidden-title {\n        display: none;\n      }\n    </style>\n    <div typeof=\"oer:SupportingMaterial\">\n      <div class=\"hidden-title\" property=\"oer:name\">[[title]]</div>\n      <div property=\"oer:description\">\n        <slot></slot>\n        <csv-render\n          data-source=\"[[csvFile]]\"\n          caption=\"[[title]]\"\n          summary=\"[[description]]\"\n        ></csv-render>\n      </div>\n    </div>\n  "]);_templateObject_7394e3106a8611e983e8252e0e4d94db=function _templateObject_7394e3106a8611e983e8252e0e4d94db(){return data};return data}/**
 * `lrn-table`
 * `Accessibly render a HTML table from a csv file`
 *
 * @microcopy - language worth noting:
 *  - CSV - Comma separated values
 *
 * @customElement
 * @polymer
 * @polymerLegacy
 * @demo demo/index.html
 */var LrnTable=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_7394e3106a8611e983e8252e0e4d94db()),is:"lrn-table",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{/**
     * Title of this table. This is both for accessibility and presentation.
     */title:{type:String},/**
     * The file to load material from.
     */csvFile:{type:String},/**
     * An extended description of the material in the table for improved accessibility.
     */description:{type:String}},/**
   * attached.
   */attached:function attached(){// Establish hax properties if they exist
var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"CSV table",description:"This can generate a table from a CSV file no matter where it is located.",icon:"editor:border-all",color:"green",groups:["Presentation","Table","Data"],handles:[{type:"csv",source:"csvFile"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"textfield",icon:"link",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield",icon:"editor:title"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield",icon:"editor:short-text"}],configure:[{property:"csvFile",title:"Source",description:"The URL for this csv file.",inputMethod:"haxupload",required:!0},{property:"title",title:"Title",description:"Title for the table to be generated.",inputMethod:"textfield"},{property:"description",title:"Description",description:"More detailed description for improved accessibility of the table data.",inputMethod:"textfield"}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrnTable=LrnTable});