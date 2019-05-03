!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/responsive-utility/responsive-utility.js"),require("@polymer/iron-image/iron-image.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-modal/lib/simple-modal-template.js"),require("@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js"),require("@polymer/polymer/lib/utils/render-status.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/responsive-utility/responsive-utility.js","@polymer/iron-image/iron-image.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-button/paper-button.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/iron-flex-layout/iron-flex-layout.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-modal/lib/simple-modal-template.js","@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js","@polymer/polymer/lib/utils/render-status.js"],n):n((e=e||self).LrndesignGallery={},e.polymerElement_js,e.simpleColors_js,null,null,null,null,null,null,e.HAXWiring_js)}(this,function(e,n,t,i,l,o,r,a,s,d){"use strict";function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e,n,t){return n&&c(e.prototype,n),t&&c(e,t),e}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function v(e,n,t){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=m(e)););return e}(e,n);if(i){var l=Object.getOwnPropertyDescriptor(i,n);return l.get?l.get.call(t):l.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function b(){var e=f(['\n  <style is="custom-style" include="simple-colors">\n    :host {\n      display: block;\n      --lrndesign-gallery-color: var(--simple-colors-default-theme-grey-12);\n      --lrndesign-gallery-background-color: var(\n        --simple-colors-default-theme-grey-2\n      );\n      --lrndesign-gallery-focus-color: var(\n        --simple-colors-default-theme-accent-9\n      );\n      --lrndesign-gallery-border-color: var(\n        --simple-colors-default-theme-grey-4\n      );\n      --lrndesign-gallery-thumbnail-outline: 1px solid\n        var(--simple-colors-default-theme-grey-12);\n\n      --lrndesign-gallery-dialog-color: var(\n        --simple-colors-default-theme-grey-12\n      );\n      --lrndesign-gallery-dialog-background-color: var(\n        --simple-colors-default-theme-grey-1\n      );\n      --lrndesign-gallery-dialog-titlebar-color: var(\n        --simple-colors-default-theme-grey-1\n      );\n      --lrndesign-gallery-dialog-titlebar-background-color: var(\n        --simple-colors-default-theme-accent-9\n      );\n      --lrndesign-gallery-dialog-header-color: var(\n        --simple-colors-default-theme-grey-12\n      );\n      --lrndesign-gallery-dialog-header-background-color: var(\n        --simple-colors-default-theme-grey-2\n      );\n      --lrndesign-gallery-carousel-next-bg: linear-gradient(\n        to right,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0.7) 70%,\n        rgba(255, 255, 255, 0.9) 90%\n      );\n      --lrndesign-gallery-carousel-prev-bg: linear-gradient(\n        to right,\n        rgba(255, 255, 255, 0.9) 10%,\n        rgba(255, 255, 255, 0.7) 30%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 100%\n      );\n      --lrndesign-gallery-thumbnail-image: {\n        display: block;\n        border-radius: 3px;\n        border: 2px solid transparent;\n      }\n      --lrndesign-gallery-thumbnail-image-focus: {\n        opacity: 0.7;\n        border: 2px solid var(--lrndesign-gallery-focus-color);\n      }\n      --lrndesign-gallery-thumbnail-image-selected: {\n        opacity: 0.5;\n        cursor: default;\n      }\n    }\n    :host([dark]) {\n      --lrndesign-gallery-border-color: var(\n        --simple-colors-default-theme-grey-1\n      );\n      --lrndesign-gallery-carousel-next-bg: linear-gradient(\n        to right,\n        rgba(0, 0, 0, 0) 0%,\n        rgba(0, 0, 0, 0.5) 50%,\n        rgba(0, 0, 0, 0.7) 70%,\n        rgba(0, 0, 0, 0.9) 90%\n      );\n      --lrndesign-gallery-carousel-prev-bg: linear-gradient(\n        to right,\n        rgba(0, 0, 0, 0.9) 10%,\n        rgba(0, 0, 0, 0.7) 30%,\n        rgba(0, 0, 0, 0.5) 50%,\n        rgba(0, 0, 0, 0) 100%\n      );\n    }\n    :host([hidden]) {\n      display: none;\n    }\n    :host .sr-only {\n      position: absolute;\n      left: -999999;\n      height: 0;\n      width: 0;\n      overflow: hidden;\n    }\n    :host .gallerythumb {\n      min-width: unset;\n      max-width: 100%;\n      padding: 0;\n      margin: 0;\n      display: inline-block;\n      transform: none !important;\n      position: static !important;\n      cursor: pointer;\n    }\n    :host .gallerythumb iron-image {\n      @apply --lrndesign-gallery-thumbnail-image;\n    }\n    :host .gallerythumb:focus iron-image,\n    :host .gallerythumb:hover iron-image {\n      @apply --lrndesign-gallery-thumbnail-image-focus;\n    }\n    :host lrndesign-gallery-zoom iron-icon {\n      width: 24px;\n      height: 24px;\n      opacity: 0.5;\n      border-radius: 3px;\n      color: var(--lrndesign-gallery-color);\n      background-color: var(--lrndesign-gallery-dialog-background-color);\n      transition: opacity 0.5s;\n    }\n    :host lrndesign-gallery-zoom:focus iron-icon,\n    :host lrndesign-gallery-zoom:hover iron-icon {\n      opacity: 1;\n    }\n    :host #galleryprint {\n      display: none;\n    }\n    @media print {\n      :host #galleryscreen {\n        display: none;\n      }\n      :host #galleryprint {\n        display: block;\n      }\n      :host #galleryprint section {\n        margin-top: 15px;\n        margin-bottom: 15px;\n      }\n      :host #galleryprint .print-image {\n        max-width: 400px;\n        max-height: 400px;\n        display: block;\n        border: 1px solid #ddd;\n        page-break-inside: avoid;\n      }\n    }\n  </style>\n']);return b=function(){return e},e}var x=document.createElement("dom-module"),w=n.html(b());x.appendChild(w),x.register("lrndesign-gallery-shared-styles");var z=function(e){function n(){return p(this,n),y(this,m(n).apply(this,arguments))}return u(n,t.SimpleColors),g(n,[{key:"connectedCallback",value:function(){v(m(n.prototype),"connectedCallback",this).call(this)}},{key:"_addResponsiveUtility",value:function(e){window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:void 0!==e?e:{element:this,attribute:"responsive-size",relativeToParent:!0}}))}},{key:"_getAnchorData",value:function(){var e=null!==window.location.hash&&""!==window.location.hash?window.location.hash.replace("#","").split("---"):[],n=e.length>0?e[0]:-1,t=e.length>1?e[1]:-1,i=null!==this.sources?this.sources.findIndex(function(e){return e.id===t}):1,l=n===this.galleryId,o=scroll&&e.length>2&&"zoom"===e[2];return{selectedItemId:t,selectedItemIndex:i>0?i:0,selectedGallery:l,zoom:o}}},{key:"_getItemData",value:function(e,n,t){null===this.galleryId&&(this.galleryId="gallery-"+this._generateUUID());var i=this._getAnchorData(),l={};return l.details=e.details,l.index=n,l.id=this._selfOrDefault(e.id,this.galleryId+"-item-"+n),l.src=e.src,l.large=this._selfOrDefault(e.large,l.src),l.thumbnail=this._selfOrDefault(e.thumbnail,l.src),l.xofy=parseInt(n+1)+" of "+t,l.next=n+1<t?n+1:-1,l.prev=n-1>-1?n-1:-1,l.sizing=this._selfOrDefault(e.sizing,this.sizing),l.title=e.title,l.tooltip=this._selfOrDefault(l.title,"Full-Sized Image"," (Full-Sized)"),l.heading=this._selfOrDefault(l.title,"Full-Sized Image"," (Full-Sized)"),l.zoom=i.zoom&&i.selectedItemId===l.id,l.scroll=i.selectedGallery&&i.selectedItemId===l.id,l.tooltip=this._selfOrDefault(e.title,"Zoom In"," Zoom"),i.selectedItemIndex===n&&this.set("selected",l),l}},{key:"_getParentOffset",value:function(e){var n=e.parentNode;return null!=n&&n.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(n=n.host),n.offsetTop}},{key:"_scrollIntoView",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0];window.scrollTo({top:e.reduce(function(e,n){return e+n}),behavior:"smooth"})}},{key:"_isAttrSet",value:function(){return null!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}},{key:"_isSelected",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.id===n.id}},{key:"_itemsLoaded",value:function(e,n){new Image;var t=[];if(this.set("items",[]),null===this.galleryId&&(this.id="gallery-"+this._generateUUID()),null!=e&&e.length>0)for(var i in this._setAspectProperties(e[0].src),e)t[i]=this._getItemData(e[i],parseInt(i),e.length);return t}},{key:"_selfOrDefault",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=n;return null!=e&&(i=null!==t?e+t:e),i}},{key:"_setAspectProperties",value:function(e){if(null!=e){var n=new Image;n.src=e,this.aspectRatio=n.naturalWidth>0&&n.naturalHeight>0?n.naturalWidth/n.naturalHeight:1.33333333,this.extraWide=this.aspectRatio>2}}},{key:"_testAttribute",value:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)===(arguments.length>1&&void 0!==arguments[1]&&arguments[1])}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}}],[{key:"tag",get:function(){return"lrndesign-gallery-behaviors"}},{key:"properties",get:function(){return{anchorData:{type:Object,computed:"_getAnchorData()"},aspectRatio:{type:Number,value:"1.33333333"},extraWide:{type:Boolean,value:!1,reflectToAttribute:!0},galleryId:{type:String,value:null},grid:{type:Boolean,value:!1},items:{type:Array,computed:"_itemsLoaded(sources,sizing)"},responsiveSize:{type:String,value:"xs",reflectToAttribute:!0},selected:{type:Object,value:{},notify:!0,reflectToAttribute:!0},sizing:{type:String,value:"cover"},sources:{type:Array,value:[],reflectToAttribute:!1},title:{type:String,value:null}}}}]),n}();function k(){var e=f(['\n      <style>\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      </style>\n      <div id="details"></div>\n    ']);return k=function(){return e},e}window.customElements.define(z.tag,z);var _=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return u(t,n.PolymerElement),g(t,[{key:"connectedCallback",value:function(){v(m(t.prototype),"connectedCallback",this).call(this),this._detailsChanged()}},{key:"_detailsChanged",value:function(){this.$.details.innerHTML=this.details}}],[{key:"tag",get:function(){return"lrndesign-gallery-details"}},{key:"template",get:function(){return n.html(k())}},{key:"properties",get:function(){return{details:{type:String,value:null,observer:"_detailsChanged"}}}}]),t}();function $(){var e=f(['\n      <style is="custom-style" include="simple-colors">\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        :host paper-button {\n          width: 100%;\n        }\n        #zoomdialog {\n          --simple-modal-width: 75vw;\n          --simple-modal-height: 75vh;\n          --simple-modal-titlebar-color: var(\n            --lrndesign-gallery-dialog-titlebar-color\n          );\n          --simple-modal-titlebar-background: var(\n            --lrndesign-gallery-dialog-titlebar-background-color\n          );\n          --simple-modal-header-color: var(\n            --lrndesign-gallery-dialog-header-color\n          );\n          --simple-modal-header-background: var(\n            --lrndesign-gallery-dialog-header-background-color\n          );\n          --simple-modal-content-container-color: var(\n            --lrndesign-gallery-dialog-color\n          );\n          --simple-modal-content-container-background: var(\n            --lrndesign-gallery-dialog-background-color\n          );\n        }\n        #zoombtn {\n          padding: 0px;\n          margin: 0;\n          min-width: unset;\n        }\n      </style>\n      <paper-button id="zoombtn" label$="[[tooltip]]" title="">\n        <slot></slot>\n      </paper-button>\n      <paper-tooltip for="zoombtn" position="right">[[tooltip]]</paper-tooltip>\n      <simple-modal-template id="zoomdialog" title$="[[heading]]">\n        <div\n          id="details"\n          slot="header"\n          hidden$="[[!_isAttrSet(details)]]"\n        ></div>\n        <div slot="content" hidden$="[[!_isAttrSet(src)]]">\n          <img-pan-zoom\n            id="img"\n            alt$="[[zoomAlt]]"\n            src$="[[src]]"\n            max-zoom-pixel-ratio="1.5"\n            min-zoom-image-ratio="0.5"\n            zoom-per-click="1.2"\n            zoom-per-scroll="0.6"\n          >\n          </img-pan-zoom>\n          <div>\n            Swipe, use a mouse or use the +/- and arrow keys to zoom and pan the\n            image above.\n          </div>\n        </div>\n      </simple-modal-template>\n    ']);return $=function(){return e},e}window.customElements.define(_.tag,_);var I=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return u(t,n.PolymerElement),g(t,[{key:"ready",value:function(){v(m(t.prototype),"ready",this).call(this),this._detailsChanged(),this.modal=this.$.zoomdialog.associateEvents(this.$.zoombtn),this.$.zoomdialog.associateEvents(this.$.zoombtn,"gallery-zoom"),this.scrolled&&(this.dispatchEvent(new CustomEvent("gallery-scroll")),this.zoomed||this.$.zoombtn.focus()),this.zoomed&&this.zoom()}},{key:"zoom",value:function(){this.$.zoombtn.dispatchEvent(new CustomEvent("gallery-zoom",{detail:{root:this}}))}},{key:"_detailsChanged",value:function(e){this.$.details.innerHTML=this.details}},{key:"_isAttrSet",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null!=e}}],[{key:"tag",get:function(){return"lrndesign-gallery-zoom"}},{key:"behaviors",get:function(){return[LrndesignGalleryBehaviors]}},{key:"template",get:function(){return n.html($())}},{key:"properties",get:function(){return{details:{type:String,value:null,observer:"_detailsChanged"},heading:{type:String,value:"Image Zoom"},itemId:{type:String,value:null},modal:{type:Object,value:null},scrolled:{type:Boolean,value:!1},src:{type:String,reflectToAttribute:!0},tooltip:{type:String,value:"Zoom In"},zoomAlt:{type:String,value:null},zoomed:{type:Boolean,value:!1}}}}]),t}();function S(){var e=f(['\n      <style is="custom-style" include="lrndesign-gallery-shared-styles">\n        :host {\n          margin: 15px 0 0;\n          padding: 0;\n        }\n        :host #carouselitem {\n          width: 100%;\n          color: var(--lrndesign-gallery-color);\n          background-color: var(--lrndesign-gallery-background-color);\n          border: 1px solid var(--lrndesign-gallery-border-color);\n        }\n        :host(:not([responsive-size="xs"]):not([extra-wide])) #carouselitem {\n          display: flex;\n          justify-content: space-between;\n          align-items: stretch;\n          border-top: 4px solid var(--lrndesign-gallery-focus-color);\n        }\n        :host([responsive-size="sm"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size="sm"]:not([extra-wide])) #prevnextnav,\n        :host([responsive-size="md"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size="md"]:not([extra-wide])) #prevnextnav {\n          height: 200px;\n          max-height: 200px;\n        }\n        :host([responsive-size="lg"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size="lg"]:not([extra-wide])) #prevnextnav {\n          height: 300px;\n          max-height: 300px;\n        }\n        :host([responsive-size="xl"]:not([extra-wide])) #carouselitem,\n        :host([responsive-size="xl"]:not([extra-wide])) #prevnextnav {\n          height: 400px;\n          max-height: 400px;\n        }\n        :host #carouselimage {\n          position: relative;\n        }\n        :host #carouselimage iron-image {\n          width: 100%;\n          height: 100%;\n        }\n        :host #prevnextnav {\n          left: 0;\n          top: 0;\n          height: 100%;\n          width: 100%;\n          position: absolute;\n        }\n        :host #prevnextnav paper-button {\n          position: absolute;\n          display: flex;\n          align-items: center;\n          justify-content: flex-end;\n          left: 50%;\n          top: 0;\n          width: 50%;\n          height: 100%;\n          opacity: 0;\n          margin: 0;\n          border-radius: 0;\n          color: var(--lrndesign-gallery-color);\n          background-color: var(--lrndesign-gallery-background-color);\n          --paper-button-ink-color: var(--lrndesign-gallery-background-color);\n          background: var(--lrndesign-gallery-next-bg);\n          transition: opacity 0.5s;\n        }\n        :host #prevnextnav paper-button#carouselprev {\n          left: 0;\n          justify-content: flex-start;\n          background: var(--lrndesign-gallery-prev-bg);\n        }\n        :host #prevnextnav paper-button[item="-1"] {\n          display: none;\n        }\n        :host #prevnextnav paper-button:focus,\n        :host #prevnextnav paper-button:hover {\n          opacity: 0.8;\n        }\n        :host #prevnextnav iron-icon {\n          margin: 10%;\n        }\n        :host lrndesign-gallery-zoom {\n          left: 3px;\n          bottom: 0;\n          z-index: 2;\n          position: absolute;\n        }\n        :host #details {\n          flex-grow: 1;\n          flex-shrink: 1;\n          overflow-y: scroll;\n        }\n        :host([responsive-size="xs"]) #details,\n        :host([extra-wide]) #details {\n          margin-top: -4px;\n          border-top: 4px solid var(--lrndesign-gallery-focus-color);\n        }\n        :host #details-inner {\n          height: 100%;\n          display: flex;\n          position: relative;\n          justify-content: space-between;\n          flex-wrap: wrap;\n          align-items: stretch;\n          align-content: stretch;\n        }\n        :host #itemdetails,\n        :host #thumbnails {\n          padding: 20px;\n          flex-basis: 100%;\n        }\n        :host #itemdetails {\n          align-self: flex-start;\n          flex-grow: 1;\n          flex-shrink: 1;\n          overflow: scroll;\n        }\n        :host #thumbnails {\n          align-self: flex-end;\n        }\n        :host .gallerythumb[disabled] {\n          @apply --lrndesign-gallery-thumbnail-image-selected;\n        }\n        :host .gallerythumb iron-image {\n          width: 40px;\n          height: 40px;\n        }\n        :host([responsive-size="xs"]) .gallerythumb iron-image {\n          display: none;\n        }\n        :host([responsive-size="md"]) .gallerythumb iron-image {\n          width: 45px;\n          height: 45px;\n        }\n        :host([responsive-size="lg"]) .gallerythumb iron-image,\n        :host([responsive-size="xl"]) .gallerythumb iron-image {\n          width: 50px;\n          height: 50px;\n        }\n        :host #itemtitle {\n          margin-top: 0;\n        }\n        :host .x-of-y {\n          font-size: 85%;\n          font-style: italic;\n          text-align: right;\n          padding: 0;\n          margin: 0;\n        }\n        :host #xystart,\n        :host #xyend {\n          position: absolute;\n          right: 20px;\n          top: 20px;\n        }\n      </style>\n      <article id="carousel">\n        <template is="dom-if" if="[[_isAttrSet(title)]]">\n          <h1 id="gallerytitle">[[title]]</h1>\n        </template>\n        <div id="gallerydescription"><slot></slot></div>\n        <p class="sr-only">A carousel of items:</p>\n        <div id="galleryscreen">\n          <div\n            id="carouselitem"\n            aspect-ratio$="[[aspectRatio]]"\n            dark$="[[dark]]"\n            extra-wide$="[[extraWide]]"\n            image-style$="[[__imageStyle]]"\n            item="[[selected]]"\n            responsive-size$="[[responsiveSize]]"\n          >\n            <p id="xystart" class="sr-only" hidden$="[[_hideNav(items)]]">\n              Slide [[selected.xofy]] selected.\n            </p>\n            <div id="carouselimage">\n              <iron-image\n                alt$="[[selected.alt]]"\n                fade=""\n                id$="[[selected.id]]"\n                placeholder$="[[selected.thumbnail]]"\n                sizing$="[[selected.sizing]]"\n                src$="[[selected.src]]"\n                style$="[[__imageStyle]]"\n              >\n              </iron-image>\n              <lrndesign-gallery-zoom\n                details$="[[selected.details]]"\n                heading$="[[selected.heading]]"\n                id="galleryzoom"\n                item-id="[[selected.id]]"\n                src$="[[selected.large]]"\n                tooltip$="[[selected.tooltip]]"\n                zoom-alt$="[[selected.alt]]"\n                zoomed$="[[selected.zoom]]"\n              >\n                <iron-icon\n                  icon="zoom-in"\n                  hidden$="[[!_isAttrSet(icon)]]"\n                ></iron-icon>\n              </lrndesign-gallery-zoom>\n              <div id="prevnextnav">\n                <paper-button\n                  id="carouselprev"\n                  aria-controls$="[[__gallery.id]]"\n                  aria-label="prev"\n                  hidden$="[[_hideNav(items)]]"\n                  index$="[[selected.prev]]"\n                  on-tap="_onPrev"\n                  target$="[[__gallery]]"\n                  tabindex="-1"\n                  title=""\n                >\n                  <iron-icon icon="chevron-left"></iron-icon>\n                </paper-button>\n                <paper-tooltip for="carouselprev" position="top"\n                  >previous</paper-tooltip\n                >\n                <paper-button\n                  id="carouselnext"\n                  aria-controls$="[[__gallery.id]]"\n                  aria-label="next"\n                  hidden$="[[_hideNav(items)]]"\n                  index$="[[selected.next]]"\n                  on-tap="_onNext"\n                  target="[[__gallery]]"\n                  tabindex="-1"\n                  title=""\n                >\n                  <iron-icon icon="chevron-right"></iron-icon>\n                </paper-button>\n                <paper-tooltip for="carouselnext" position="top"\n                  >next</paper-tooltip\n                >\n              </div>\n            </div>\n            <div id="details" class="item-info">\n              <div id="details-inner">\n                <div id="itemdetails">\n                  <h2 id="itemtitle" hidden="[[!_isAttrSet(selected.title)]]">\n                    [[selected.title]]\n                  </h2>\n                  <div id="itembody">\n                    <lrndesign-gallery-details\n                      details$="[[selected.details]]"\n                    ></lrndesign-gallery-details>\n                  </div>\n                </div>\n                <div id="xyend">\n                  <p class="x-of-y" hidden$="[[_hideNav(items)]]">\n                    (<span class="sr-only"> End of slide </span>\n                    [[selected.xofy]]<span class="sr-only">.</span>)\n                  </p>\n                </div>\n                <div id="thumbnails" class="item-info">\n                  <div id="thumbnails-inner">\n                    <div>\n                      <p class="sr-only" hidden$="[[_hideNav(items)]]">\n                        Slides list:\n                      </p>\n                      <template is="dom-repeat" items="[[items]]" as="item">\n                        <paper-button\n                          id$="[[item.id]]"\n                          aria-controls$="[[__gallery.id]]"\n                          class="gallerythumb"\n                          hidden$="[[_hideNav(items)]]"\n                          index$="[[item.index]]"\n                          on-tap="_onNavTapped"\n                          disabled$="[[_isSelected(selected,item)]]"\n                          target$="[[item.target]]"\n                          title\n                        >\n                          <iron-image\n                            alt$="[[item.alt]]"\n                            fade\n                            sizing="cover"\n                            src$="[[item.thumbnail]]"\n                          >\n                          </iron-image>\n                        </paper-button>\n                        <paper-tooltip\n                          for$="[[item.id]]"\n                          hidden$="[[_isSelected(selected,item)]]"\n                          position="top"\n                        >\n                          [[item.alt]]\n                        </paper-tooltip>\n                      </template>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div id="galleryprint">\n          <template id="printlist" is="dom-repeat" items="[[items]]" as="item">\n            <section>\n              <template is="dom-if" if="[[_isAttrSet(item.title)]]">\n                <h2>[[item.title]]</h2>\n              </template>\n              <lrndesign-gallery-details\n                details$="[[item.details]]"\n              ></lrndesign-gallery-details>\n              <img\n                class="print-image"\n                alt$="[[item.alt]]"\n                src$="[[item.src]]"\n              />\n            </section>\n          </template>\n        </div>\n      </article>\n    ']);return S=function(){return e},e}window.customElements.define(I.tag,I);var j=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return u(t,z),g(t,[{key:"ready",value:function(){if(v(m(t.prototype),"ready",this).call(this),this.selected.scroll){var e=this.$.carouselitem;this._scrollIntoView([this._getParentOffset(e)]),this.selected.zoomed||e.focus()}}},{key:"goToItem",value:function(e){"number"==typeof e&&e>=0&&e<this.items.length&&(this.selected=this.items[e])}},{key:"_getImageStyle",value:function(e,n){return e||"xs"===n?"padding-bottom: "+100/this.aspectRatio+"%;":"xl"===n?"width: "+400*this.aspectRatio+"px; height: 400px;":"lg"===n?"width: "+300*this.aspectRatio+"px; height: 300px;":"width: "+200*this.aspectRatio+"px; height: 200px;"}},{key:"_getIndex",value:function(e,n){return e+n}},{key:"_hideNav",value:function(e){return void 0===e||e.length<2}},{key:"_onPrev",value:function(e){this.goToItem(parseInt(this.$.carouselprev.getAttribute("index")))}},{key:"_onNext",value:function(e){this.goToItem(parseInt(this.$.carouselnext.getAttribute("index")))}},{key:"_onNavTapped",value:function(e){this.goToItem(e.model.item.index)}},{key:"_updateDetails",value:function(){this.$.itembody.innerHTML=this.item.details}}],[{key:"tag",get:function(){return"lrndesign-gallery-carousel"}},{key:"behaviors",get:function(){return[z]}},{key:"template",get:function(){return n.html(S())}},{key:"properties",get:function(){return{__imageStyle:{type:String,computed:"_getImageStyle(extraWide,responsiveSize)"}}}}]),t}();function A(){var e=f(['\n      <style is="custom-style" include="lrndesign-gallery-shared-styles">\n        :host {\n          margin: 15px 0 0;\n          padding: 0;\n          max-width: 100%;\n          display: block;\n        }\n        :host .gallerythumb div {\n          position: relative;\n          display: flex;\n          align-items: stretch;\n        }\n        :host .gallerythumb div,\n        :host .gallerythumb iron-image {\n          width: 100%;\n        }\n        :host .gallerythumb {\n          width: var(--lrndesign-gallery-grid-thumbnail-xs, 100px);\n        }\n        :host([responsive-size="sm"]) .gallerythumb {\n          width: var(--lrndesign-gallery-grid-thumbnail-sm, 150px);\n        }\n        :host([responsive-size="md"]) .gallerythumb {\n          width: var(--lrndesign-gallery-grid-thumbnail-md, 200px);\n        }\n        :host([responsive-size="lg"]) .gallerythumb {\n          width: var(--lrndesign-gallery-grid-thumbnail-lg, 250px);\n        }\n        :host([responsive-size="xl"]) .gallerythumb {\n          width: var(--lrndesign-gallery-grid-thumbnail-lg, 300px);\n        }\n        :host .gallerythumb iron-icon {\n          position: absolute;\n          bottom: 7px;\n          left: 7px;\n        }\n      </style>\n      <article id="grid">\n        <template is="dom-if" if="[[_isAttrSet(title)]]">\n          <h1 id="gallery-title">[[title]]</h1>\n        </template>\n        <div id="gallery-description"><slot></slot></div>\n        <p class="sr-only">A list of thumbnail buttons items:</p>\n        <div id="galleryscreen">\n          <template id="screenlist" is="dom-repeat" items="[[items]]" as="item">\n            <lrndesign-gallery-zoom\n              anchored-item="[[__anchoredItem]]"\n              class="gallerythumb"\n              details$="[[item.details]]"\n              heading$="[[item.heading]]"\n              item-id="[[item.id]]"\n              on-gallery-scroll="_handleScroll"\n              scrolled$="[[item.scroll]]"\n              src$="[[item.large]]"\n              tooltip$="[[item.tooltip]]"\n              zoom-alt$="[[item.zoomAlt]]"\n              zoomed$="[[item.zoom]]"\n            >\n              <div>\n                <iron-image\n                  alt$="[[item.zoomAlt]]"\n                  fade\n                  sizing="cover"\n                  src$="[[item.thumbnail]]"\n                  style$="[[_getImageStyle(items)]]"\n                >\n                </iron-image>\n              </div>\n              <iron-icon icon="zoom-in"></iron-icon>\n            </lrndesign-gallery-zoom>\n          </template>\n        </div>\n        <div id="galleryprint">\n          <template id="printlist" is="dom-repeat" items="[[items]]" as="item">\n            <section>\n              <template is="dom-if" if="[[_isAttrSet(item.title)]]">\n                <h2>[[item.title]]</h2>\n              </template>\n              <lrndesign-gallery-details\n                details$="[[item.details]]"\n              ></lrndesign-gallery-details>\n              <img\n                class="print-image"\n                alt$="[[item.alt]]"\n                src$="[[item.src]]"\n              />\n            </section>\n          </template>\n        </div>\n      </article>\n    ']);return A=function(){return e},e}window.customElements.define(j.tag,j);var T=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return u(t,z),g(t,[{key:"_handleScroll",value:function(e){this._scrollIntoView([this._getParentOffset(this),e.path[0].offsetTop])}},{key:"_getImageStyle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=new Image,t=75;return void 0!==e&&e.length>0&&(n.src=e[0].src,n.naturalWidth>0&&n.naturalHeight>0&&(t=100*n.naturalHeight/n.naturalWidth)),"padding-bottom: "+t+"%;"}}],[{key:"tag",get:function(){return"lrndesign-gallery-grid"}},{key:"behaviors",get:function(){return[z]}},{key:"template",get:function(){return n.html(A())}},{key:"properties",get:function(){return{imageStyle:{type:String,computed:"_getImageStyle(items)",reflectToAttribute:!0}}}}]),t}();function O(){var e=f(['\n      <style is="custom-style" include="simple-colors">\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      </style>\n      <div id="gallery">\n        <template is="dom-if" if="[[!grid]]" restamp>\n          <lrndesign-gallery-carousel\n            accent-color$="[[accentColor]]"\n            aspect-ratio$="[[aspectRatio]]"\n            title$="[[title]]"\n            dark$="[[dark]]"\n            gallery-id$="[[id]]"\n            responsive-size$="[[responsiveSize]]"\n            sizing$="[[sizing]]"\n            sources="[[sources]]"\n            title$="[[title]]"\n          >\n            <slot></slot>\n          </lrndesign-gallery-carousel>\n        </template>\n        <template is="dom-if" if="[[grid]]">\n          <lrndesign-gallery-grid\n            accent-color$="[[accentColor]]"\n            aspect-ratio$="[[aspectRatio]]"\n            dark$="[[dark]]"\n            gallery-id$="[[id]]"\n            responsive-size$="[[responsiveSize]]"\n            sizing$="[[sizing]]"\n            sources="[[sources]]"\n            title$="[[title]]"\n          >\n            <slot></slot>\n          </lrndesign-gallery-grid>\n        </template>\n      </div>\n    ']);return O=function(){return e},e}window.customElements.define(T.tag,T);var E=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}return u(t,z),g(t,[{key:"connectedCallback",value:function(){v(m(t.prototype),"connectedCallback",this).call(this),this.HAXWiring=new d.HAXWiring,this.HAXWiring.setup(t.haxProperties,t.tag,this),this.__gallery=this.$.gallery,this.anchorData=this._getAnchorData(),window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this,attribute:"responsive-size",relativeToParent:!0}}))}},{key:"ready",value:function(){v(m(t.prototype),"ready",this).call(this)}}],[{key:"tag",get:function(){return"lrndesign-gallery"}},{key:"behaviors",get:function(){return[z]}},{key:"template",get:function(){return n.html(O())}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Image Gallery",description:"An image gallery displayed as a carousel or a grid",icon:"image:collections",color:"cyan",groups:["Content","Instructional","Media","Image"],handles:[{type:"image",source:"image"}],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"title",title:"Gallery Title",description:"A title for the gallery.",inputMethod:"textfield",icon:"editor:title"},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{property:"grid",title:"Grid View",description:"Display as grid?",inputMethod:"boolean",icon:"icons:view-module"},{slot:"description",title:"Gallery Description",description:"An optional description for the gallery.",inputMethod:"textfield"},{property:"sources",title:"Gallery Images",description:"The images for the gallery.",inputMethod:"array",properties:[{property:"title",title:"Image Title",description:"The heading for the image.",inputMethod:"textfield"},{property:"details",title:"Image Details",description:"The body text with details for the image.",inputMethod:"textfield"},{property:"src",title:"Image Source",description:"The path of the image.",inputMethod:"haxupload"},{property:"thumbnail",title:"Image Thumbnail Source",description:"The path of an optional thumbnail version of the image.",inputMethod:"haxupload"},{property:"large",title:"Image Full Size Source",description:"The path of an optional large version of the image for zooming.",inputMethod:"haxupload"}]}],advanced:[{property:"aspectRatio",title:"Aspect Ratio",description:"Custom aspect ratio, default is calculated based on the first image's aspect ratio",inputMethod:"textfield"},{property:"sizing",title:"Fit to Aspect Ratio",description:"Fit images to aspect ratio",inputMethod:"select",options:{cover:"crop",contain:"letterbox"}}]}}}},{key:"properties",get:function(){return{}}}]),t}();window.customElements.define(E.tag,E),e.LrndesignGallery=E,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-gallery.umd.js.map
