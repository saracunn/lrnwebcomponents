define(["exports","meta","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/utils/resolve-url.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/paper-styles/shadow.js"],function(_exports,meta,_polymerLegacy,_resolveUrl,_simpleColors,_HAXWiring,_schemaBehaviors,_shadow){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignBlockquote=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject_96dddc50344911e9a0797b0375b2e814(){var data=babelHelpers.taggedTemplateLiteral(["\n    <custom-style>\n      <style is=\"custom-style\" include=\"simple-colors\">\n        :host {\n          display: inline-block;\n          position: relative;\n          box-sizing: border-box;\n          font-size: 16px;\n          z-index: 0;\n        }\n\n        :host([display-mode=\"hypercard\"]) ::slotted(*) {\n          -webkit-filter: grayscale(1) contrast(300%);\n          filter: grayscale(1) contrast(300%);\n          font-family: Chikarego, Helvetica, sans-serif;\n          transition: all 0.6s ease;\n        }\n\n        /* Let's set and reset some common styles */\n        .mb-wrap {\n          width: 300px;\n          margin: 20px auto;\n          padding: 20px;\n          position: relative;\n        }\n        .mb-wrap p {\n          margin: 0;\n          padding: 0;\n        }\n        .mb-wrap blockquote {\n          margin: 0;\n          padding: 0;\n          position: relative;\n        }\n        .mb-wrap cite {\n          font-style: normal;\n        }\n        p ::slotted(*) {\n          font-size: 16px;\n        }\n        :host([display-mode=\"default\"]) .mb-wrap {\n          background-color: #fff9c4;\n          color: var(--lrndesign-blockquote-color, #222222);\n        }\n        :host([display-mode=\"default\"]) .mb-wrap blockquote {\n          font-size: 19.2px;\n          font-style: italic;\n          margin: 4px 0;\n          padding: 24px 24px 24px 40px;\n          line-height: 1.5;\n          position: relative;\n          color: var(--lrndesign-blockquote-color, #222222);\n        }\n        :host([display-mode=\"default\"]) .mb-wrap cite {\n          color: var(--lrndesign-blockquote-cite, #222222);\n          font-size: 12.8px;\n          display: block;\n          margin-top: 4px;\n          text-align: right;\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap {\n          background: #363738 repeat top left;\n          margin-top: 100px;\n          padding-top: 100px;\n          width: 400px;\n          color: #fff;\n          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n          border-top: 10px solid #fff;\n        }\n        :host([display-mode=\"leather\"]) .mb-wrap .mb-thumb {\n          display: block;\n          width: 180px;\n          height: 180px;\n          border: 10px solid rgba(255, 255, 255, 0.5);\n          border-radius: 50%;\n          background-clip: padding-box !important;\n          background-size: contain !important;\n          position: absolute;\n          left: 50%;\n          top: -90px;\n          margin: 0 0 0 -90px;\n          box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5),\n            0 2px 3px rgba(0, 0, 0, 0.6);\n        }\n        :host([display-mode=\"leather\"]) .mb-wrap blockquote:before,\n        :host([display-mode=\"leather\"]) .mb-wrap blockquote:after {\n          position: absolute;\n          font-size: 164px;\n          top: -95px;\n          color: #242526;\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap blockquote:before {\n          content: \"\u201C\";\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap blockquote:after {\n          right: 0px;\n          content: \"\u201D\";\n        }\n        :host([display-mode=\"leather\"]) .mb-wrap blockquote p {\n          font-family: Cambria, Georgia, serif;\n          font-style: italic;\n          font-size: 25px;\n          font-weight: 400;\n          border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);\n          padding: 10px 10px 20px 10px;\n          text-align: center;\n          margin: 0 0 20px 0;\n          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);\n        }\n        :host([display-mode=\"leather\"]) .mb-wrap blockquote p ::slotted(*) {\n          font-family: Cambria, Georgia, serif;\n          font-style: italic;\n          font-weight: 400;\n          font-size: 25px;\n          text-align: center;\n          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap .mb-attribution {\n          text-align: right;\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap .mb-author {\n          text-transform: uppercase;\n          font-size: 20px;\n          font-weight: bold;\n          color: #cccccc;\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap cite a {\n          color: #f0f0f0;\n          font-style: italic;\n          font-weight: 400;\n          font-family: Cambria, Georgia, serif;\n          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);\n        }\n\n        :host([display-mode=\"leather\"]) .mb-wrap cite a:hover {\n          text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.9);\n        }\n\n        :host([display-mode=\"swoop\"]) .mb-wrap blockquote {\n          padding-top: 150px;\n        }\n        :host([display-mode=\"swoop\"]) .mb-wrap blockquote:after {\n          background: rgba(235, 150, 108, 0.8);\n          width: 130px;\n          height: 130px;\n          border-radius: 50%;\n          content: \"\u201D\";\n          position: absolute;\n          font-size: 164px;\n          line-height: 200px;\n          text-align: center;\n          top: 0px;\n          left: 50%;\n          margin-left: -65px;\n          color: rgba(255, 255, 255, 0.5);\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\n        }\n        :host([display-mode=\"swoop\"]) .mb-wrap blockquote:before {\n          content: \"\";\n          width: 500px;\n          height: 500px;\n          border-radius: 50%;\n          border-left: 5px solid rgba(235, 150, 108, 0.1);\n          position: absolute;\n          top: 0px;\n          left: -50px;\n          z-index: -1;\n        }\n        :host([display-mode=\"swoop\"]) .mb-wrap blockquote p {\n          font-family: Baskerville, Georgia, serif;\n          font-size: 28px;\n          font-style: italic;\n          background: rgba(255, 255, 255, 0.5);\n          display: inline;\n          color: rgba(235, 150, 108, 0.8);\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\n          line-height: 46px;\n          box-shadow: 0 -6px 0 rgba(235, 150, 108, 0.2);\n        }\n        :host([display-mode=\"swoop\"]) .mb-wrap .mb-attribution {\n          text-align: right;\n        }\n\n        :host([display-mode=\"swoop\"]) .mb-wrap .mb-author {\n          text-transform: uppercase;\n          font-size: 18px;\n          padding-top: 10px;\n          font-weight: bold;\n          color: #d48158;\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\n        }\n\n        :host([display-mode=\"swoop\"]) .mb-wrap cite a {\n          color: #d7aa94;\n          font-style: italic;\n        }\n\n        :host([display-mode=\"swoop\"]) .mb-wrap cite a:hover {\n          color: #d48158;\n        }\n\n        :host([display-mode=\"soft\"]) .mb-wrap {\n          width: 500px;\n        }\n\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote {\n          background: #fff;\n          padding: 30px;\n          border-radius: 5px;\n          box-shadow: inset 0 2px 0 rgba(188, 147, 200, 0.7),\n            -5px -4px 25px rgba(0, 0, 0, 0.3);\n        }\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote:after,\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote:before {\n          top: 100%;\n          border: solid transparent;\n          content: \" \";\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n        }\n\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote:after {\n          border-top-color: #ffffff;\n          border-width: 10px;\n          left: 65%;\n          margin-left: -10px;\n        }\n\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote:before {\n          border-top-color: rgba(0, 0, 0, 0.01);\n          border-width: 11px;\n          left: 65%;\n          margin-left: -11px;\n        }\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote p {\n          font-family: \"Alegreya\", serif;\n          font-size: 24px;\n          color: #b4b4b4;\n          font-weight: 400;\n          line-height: 40px;\n          font-style: italic;\n          text-indent: 100px;\n          position: relative;\n        }\n        :host([display-mode=\"soft\"]) .mb-wrap blockquote p:before {\n          content: \"\u201C\";\n          font-family: serif;\n          font-style: normal;\n          font-weight: 700;\n          position: absolute;\n          font-size: 175px;\n          top: 0px;\n          left: -105px;\n          color: rgba(188, 147, 200, 1);\n          text-shadow: 7px 14px 10px rgba(0, 0, 0, 0.1);\n        }\n        :host([display-mode=\"soft\"]) .mb-wrap .mb-attribution {\n          text-align: right;\n          padding: 20px 100px 20px 20px;\n          position: relative;\n        }\n        :host([display-mode=\"soft\"]) .mb-wrap .mb-thumb {\n          display: block;\n          width: 70px;\n          height: 70px;\n          border: 5px solid #fff;\n          border-radius: 50%;\n          background-clip: padding-box !important;\n          background-size: contain !important;\n          position: absolute;\n          right: 10px;\n          bottom: 5px;\n          box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5),\n            0 2px 3px rgba(0, 0, 0, 0.6);\n        }\n        :host([display-mode=\"soft\"]) .mb-wrap .mb-author {\n          font-family: \"Alegreya SC\", serif;\n          font-weight: 700;\n          font-size: 18px;\n          color: black;\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n        }\n\n        :host([display-mode=\"soft\"]) .mb-wrap cite a {\n          font-family: \"Alegreya\", serif;\n          font-weight: 700;\n          font-style: italic;\n          color: black;\n          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n        }\n\n        :host([display-mode=\"soft\"]) .mb-wrap cite a:hover {\n          color: rgba(188, 147, 200, 1);\n          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);\n        }\n\n        :host([display-mode=\"poster\"]) .mb-wrap {\n          width: 600px;\n          padding: 20px 240px 50px 20px;\n          overflow: hidden;\n          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.6);\n        }\n        :host([display-mode=\"poster\"]) .mb-wrap blockquote p {\n          color: rgba(255, 255, 255, 0.95);\n          font-size: 21px;\n          line-height: 26px;\n          text-align: right;\n          color: #999;\n          text-transform: uppercase;\n          font-weight: bold;\n        }\n        :host([display-mode=\"poster\"]) .mb-wrap blockquote p ::slotted(span) {\n          font-weight: 700;\n          color: #fcf779;\n          font-size: 58px;\n          line-height: 58px;\n          display: block;\n          padding: 10px;\n          text-shadow: 7px 7px 2px rgba(0, 0, 0, 0.2);\n          transform: rotate(-7deg) translateY(10px);\n        }\n        :host([display-mode=\"poster\"])\n          .mb-wrap\n          blockquote\n          p\n          ::slotted(span):before {\n          content: \"\u201C\";\n          font-weight: normal;\n          opacity: 0.1;\n          font-size: 200px;\n          position: absolute;\n          color: #fff;\n          top: -50px;\n          left: -25px;\n          transform: rotate(45deg);\n        }\n        :host([display-mode=\"poster\"]) .mb-wrap .mb-attribution {\n          text-align: right;\n          text-transform: uppercase;\n          font-weight: bold;\n          background: #222;\n          position: absolute;\n          width: 100%;\n          left: 0px;\n          bottom: 0px;\n          text-align: center;\n          padding: 30px;\n          transform: rotate(-40deg) translate(175px, 110px);\n        }\n        :host([display-mode=\"poster\"]) .mb-wrap .mb-author {\n          color: #fcf779;\n        }\n        :host([display-mode=\"poster\"]) .mb-wrap .mb-author:before {\n          content: \"-\";\n          padding-right: 4px;\n        }\n\n        :host([display-mode=\"poster\"]) .mb-wrap .mb-attribution cite a {\n          color: #fcf779;\n        }\n\n        :host([display-mode=\"poster\"]) .mb-wrap .mb-attribution cite a:hover {\n          color: #fcf779;\n        }\n\n        :host([display-mode=\"fun\"]) .mb-wrap {\n          width: 390px;\n        }\n\n        :host([display-mode=\"fun\"]) .mb-wrap blockquote {\n          text-align: center;\n          background: #333;\n          width: 350px;\n          height: 350px;\n          padding: 60px;\n          border-radius: 50%;\n          box-shadow: inset 0 0 0 10px #333,\n            inset 0 0 0 12px rgba(255, 255, 255, 0.6),\n            80px 0 0 rgba(255, 255, 255, 0.3),\n            -80px 0 0 rgba(255, 255, 255, 0.3), 50px 0 0 rgba(60, 185, 145, 0.2),\n            -50px 0 0 rgba(185, 60, 60, 0.2);\n        }\n        :host([display-mode=\"fun\"]) .mb-wrap blockquote p {\n          color: #fff;\n          font-size: 20px;\n          font-weight: 400;\n          padding-top: 25px;\n          text-transform: uppercase;\n          text-shadow: 0 0 1px #fff, 0 1px 1px #000;\n          font-family: \"Annie Use Your Telescope\", cursive;\n        }\n        :host([display-mode=\"fun\"]) .mb-wrap blockquote p ::slotted(span) {\n          display: block;\n          position: relative;\n          padding-top: 40px;\n          margin-top: 40px;\n          border-top: 1px solid rgba(255, 255, 255, 0.3);\n        }\n        :host([display-mode=\"fun\"])\n          .mb-wrap\n          blockquote\n          p\n          ::slotted(span):before {\n          position: absolute;\n          width: 50px;\n          height: 50px;\n          background: #ddd;\n          content: \"\u201C\";\n          font-size: 40px;\n          color: #333;\n          top: 0px;\n          left: 50%;\n          margin: -25px 0 0 -25px;\n          border-radius: 50%;\n        }\n        :host([display-mode=\"fun\"]) .mb-wrap .mb-attribution {\n          text-align: center;\n          font-family: \"Annie Use Your Telescope\", cursive;\n          padding: 20px;\n          font-size: 16px;\n        }\n        :host([display-mode=\"fun\"]) .mb-wrap cite a:hover {\n          color: #000;\n        }\n\n        :host([display-mode=\"photo\"]) .mb-wrap {\n          width: 350px;\n          background: #fff;\n          border-radius: 4px;\n        }\n        /* Shadow style from Nicolas Gallagher: http://nicolasgallagher.com/css-drop-shadows-without-images/demo/ */\n        :host([display-mode=\"photo\"]) .mb-wrap:before,\n        :host([display-mode=\"photo\"]) .mb-wrap:after {\n          content: \" \";\n          position: absolute;\n          z-index: -1;\n          transform: rotate(-3deg);\n          bottom: 10px;\n          box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);\n          height: 20%;\n          left: 2px;\n          max-height: 100px;\n          max-width: 300px;\n          width: 50%;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap:after {\n          transform: rotate(3deg);\n          left: auto;\n          right: 2px;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap blockquote {\n          background: #333;\n          height: 75%;\n          padding: 30px;\n          text-align: center;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap blockquote:before {\n          color: rgba(255, 255, 255, 0.2);\n          position: absolute;\n          content: \"\u201D\";\n          font-size: 150px;\n          line-height: 130px;\n          font-style: italic;\n          top: 0px;\n          right: 20px;\n          font-family: Cambria, Georgia, serif;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap blockquote p {\n          color: #fff;\n          font-family: \"Abril Fatface\", sans-serif;\n          font-size: 24px;\n          text-shadow: 1px 1px 1px #000;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap .mb-attribution {\n          padding: 20px;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap .mb-author {\n          font-size: 24px;\n          font-family: \"Dr Sugiyama\", cursive;\n          transform: rotate(-4deg);\n          color: #070d5f;\n          text-align: center;\n          min-height: 40px;\n          line-height: 40px;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap cite {\n          display: block;\n          text-align: center;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap cite a {\n          color: #999;\n          text-transform: uppercase;\n          letter-spacing: 3px;\n          font-size: 12px;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap cite a:hover {\n          color: #000;\n        }\n        :host([display-mode=\"photo\"]) .mb-wrap .mb-thumb {\n          display: block;\n          width: 70px;\n          height: 70px;\n          border: 5px solid #fff;\n          border-radius: 50%;\n          background-clip: padding-box !important;\n          background-size: contain !important;\n          position: absolute;\n          left: 30px;\n          bottom: 30px;\n          box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5),\n            0 2px 3px rgba(0, 0, 0, 0.6);\n        }\n        /* BEGIN HYPERCARDIFY, thanks @realdlnorman */\n        :host([display-mode=\"hypercard\"]) ::slotted(*) {\n          -webkit-filter: grayscale(1) contrast(300%);\n          filter: grayscale(1) contrast(300%);\n          font-family: Chikarego, Helvetica, sans-serif;\n          transition: all 0.6s ease;\n        }\n        /* Disable grayscale on hover */\n        :host([display-mode=\"hypercard\"]:hover) ::slotted(*) {\n          -webkit-filter: grayscale(0);\n          filter: none;\n        }\n      </style>\n    </custom-style>\n    <div id=\"wrap\" class=\"mb-wrap\">\n      <div id=\"thumb\" class=\"mb-thumb\"></div>\n      <blockquote cite$=\"[[sourceLink]]\">\n        <p><slot></slot></p>\n      </blockquote>\n      <div class=\"mb-attribution\">\n        <p class=\"mb-author\">[[author]]</p>\n        <cite><a href$=\"[[sourceLink]]\">[[citation]]</a></cite>\n      </div>\n    </div>\n  "]);_templateObject_96dddc50344911e9a0797b0375b2e814=function _templateObject_96dddc50344911e9a0797b0375b2e814(){return data};return data}var LrndesignBlockquote=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_96dddc50344911e9a0797b0375b2e814()),is:"lrndesign-blockquote",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{citation:{type:String,notify:!0},image:{type:String,notify:!0,observer:"_imageChanged"},author:{type:String,notify:!0},sourceLink:{type:String,notify:!0},displayMode:{type:String,reflectToAttribute:!0,notify:!0,value:"default",observer:"_displayModeChanged"}},_imageChanged:function _imageChanged(newValue,oldValue){if("hypercard"==this.displayMode){this.$.wrap.style.cssText="";this.$.thumb.style.cssText=""}else if("poster"==this.displayMode){this.$.wrap.style.cssText="background: #444 url("+newValue+") no-repeat 140% 25%";this.$.thumb.style.cssText=""}else{this.$.wrap.style.cssText="";this.$.thumb.style.cssText="background: url("+newValue+") no-repeat center center"}},_displayModeChanged:function _displayModeChanged(newValue,oldValue){if("hypercard"==newValue){this.$.wrap.style.cssText="";this.$.thumb.style.cssText="";var style=document.createElement("style"),basePath=(0,_resolveUrl.pathFromUrl)(decodeURIComponent(meta.url));style.innerHTML="@font-face {\n        font-family: 'Chikarego';\n        src: url('".concat(basePath,"lib/chikarego2-webfont.woff2') format('woff2'),\n             url('").concat(basePath,"lib/chikarego2-webfont.woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n      }");document.head.appendChild(style)}else if("poster"==newValue){this.$.wrap.style.cssText="background: #444 url("+this.image+") no-repeat 140% 25%";this.$.thumb.style.cssText=""}else{this.$.wrap.style.cssText="";this.$.thumb.style.cssText="background: url("+this.image+") no-repeat center center"}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Fancy quote",description:"Presents a famous quote with additional design options.",icon:"editor:format-quote",color:"grey",groups:["Content","Presentation"],handles:[{type:"image",source:"image",src:"image",author:"author",description:"",citation:"citation"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"displayMode",title:"Display style",description:"Style to present the quote with",inputMethod:"select",icon:"image:style",options:{default:"Default",leather:"Leather",swoop:"Swoop",soft:"Soft",poster:"Poster",fun:"Fun",photo:"Photo",hypercard:"Hypercard"}},{property:"image",title:"Image",description:"Picture of the author of this quote",inputMethod:"textfield",icon:"editor:short-text",required:!1,validationType:"text"}],configure:[{property:"displayMode",title:"Display style",description:"Style to present the quote with",inputMethod:"select",icon:"image:style",options:{default:"Default",leather:"Leather",swoop:"Swoop",soft:"Soft",poster:"Poster",fun:"Fun",photo:"Photo",hypercard:"Hypercard"}},{property:"image",title:"Image",description:"Picture of the author of this quote",inputMethod:"textfield",icon:"editor:short-text",required:!1,validationType:"text"},{property:"citation",title:"Citation",description:"",inputMethod:"textfield",icon:"editor:short-text",required:!1,validationType:"text"},{property:"author",title:"Author",description:"",inputMethod:"textfield",icon:"editor:short-text",required:!1,validationType:"text"},{slot:"",title:"Quote",description:"",inputMethod:"textfield",icon:"editor:format-quote",required:!0,validationType:"text"},{property:"sourceLink",title:"Source link",description:"Reference to the ",inputMethod:"textfield",icon:"editor:short-text",required:!1,validationType:"url"}],advanced:[]}};this.setHaxProperties(props)}});_exports.LrndesignBlockquote=LrndesignBlockquote});