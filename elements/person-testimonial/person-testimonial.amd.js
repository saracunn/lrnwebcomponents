define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/iron-image/iron-image.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./lib/person-testimonial-icon.js"],function(_exports,_polymerLegacy,_paperCard,_ironImage,_ironIcon,_HAXWiring,_simpleColors,_personTestimonialIcon){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PersonTestimonial=void 0;function _templateObject_151c6f00344a11e99fa573ee2f165716(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"simple-colors\">\n      :host {\n        display: block;\n        --person-testimonial-font-family: sans-serif;\n        --person-testimonial-bg: var(--simple-colors-default-theme-grey-1);\n        --person-testimonial-color: var(--simple-colors-default-theme-accent-7);\n        --person-testimonial-text: var(--simple-colors-default-theme-grey-12);\n      }\n\n      paper-card {\n        display: inline-flex;\n        background-color: var(--person-testimonial-bg);\n        color: var(--person-testimonial-text);\n        font-family: var(--person-testimonial-font-family);\n      }\n\n      iron-image {\n        display: block;\n        width: 150px;\n        height: 100%;\n      }\n      .image {\n        padding-right: 5px;\n        background-color: var(--person-testimonial-color);\n      }\n\n      iron-icon {\n        --iron-icon-height: 24px;\n        --iron-icon-width: 24px;\n        --iron-icon-fill-color: var(--person-testimonial-color);\n      }\n\n      .wrap {\n        margin: 15px;\n      }\n\n      .testimonial {\n        line-height: 24px;\n        font-size: 16px;\n        font-style: italic;\n      }\n\n      .name {\n        font-size: 21px;\n        text-transform: uppercase;\n        font-weight: bold;\n        margin-top: 20px;\n      }\n\n      .position {\n        font-size: 14px;\n        margin-top: 5px;\n      }\n\n      .arrow_right {\n        width: 0;\n        height: 0;\n        border-top: 15px solid var(--person-testimonial-bg);\n        border-bottom: 15px solid var(--person-testimonial-bg);\n        border-left: solid 15px transparent;\n        background-color: var(--person-testimonial-color);\n        position: relative;\n        top: 55px;\n      }\n\n      #quotestart {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quoteend {\n        display: inline-flex;\n      }\n\n      @media screen and (max-width: 850px) {\n        paper-card {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        iron-image {\n          display: block;\n          border-radius: 50%;\n          width: 200px;\n          height: 200px;\n        }\n        .image {\n          margin-top: 25px;\n          border-radius: 50%;\n          padding: 5px;\n          margin-left: auto;\n          margin-right: auto;\n        }\n        .arrow_right {\n          display: none;\n        }\n        .name,\n        .position {\n          text-align: center;\n        }\n      }\n    </style>\n    <paper-card elevation=\"[[elevation]]\">\n      <div class=\"image\">\n        <iron-image\n          src=\"[[image]]\"\n          sizing=\"cover\"\n          preload=\"\"\n          fade=\"\"\n        ></iron-image>\n      </div>\n      <div class=\"arrow_right\"></div>\n      <div class=\"wrap\">\n        <div class=\"testimonial\">\n          <iron-icon\n            id=\"quotestart\"\n            icon=\"persontestimonial:format-quote\"\n          ></iron-icon>\n          <slot></slot>\n          <iron-icon\n            id=\"quoteend\"\n            icon=\"persontestimonial:format-quote\"\n          ></iron-icon>\n        </div>\n        <div class=\"name\">[[name]]</div>\n        <div class=\"position\">[[position]]</div>\n      </div>\n    </paper-card>\n  "]);_templateObject_151c6f00344a11e99fa573ee2f165716=function _templateObject_151c6f00344a11e99fa573ee2f165716(){return data};return data}var PersonTestimonial=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_151c6f00344a11e99fa573ee2f165716()),is:"person-testimonial",behaviors:[HAXBehaviors.PropertiesBehaviors,_simpleColors.SimpleColors],properties:{elevation:{type:Number,value:1,reflectToAttribute:!0},image:{type:String},name:{type:String},position:{type:String}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Testimonial",description:"A person saying a nice thing about us",icon:"editor:format-quote",color:"orange",groups:["Content","Presentation"],handles:[{type:"image",source:"image",title:"name",caption:"position"}],meta:{author:"EberlyODL / LRNWebComponents"}},settings:{quick:[{property:"image",title:"Image",description:"Adds image to this testimonial",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"image",title:"Image",description:"Adds image to testimonial",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{slot:"",title:"User's testimonial:",description:"This is where you enter your testimonial.",inputMethod:"code-editor",required:!0},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"}],advanced:[]}};this.setHaxProperties(props)}});_exports.PersonTestimonial=PersonTestimonial});