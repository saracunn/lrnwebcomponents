define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/polymer/lib/utils/async.js",
  "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js",
  "./node_modules/@polymer/app-layout/app-header/app-header.js",
  "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js",
  "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js",
  "./node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js",
  "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js",
  "./node_modules/@polymer/paper-progress/paper-progress.js",
  "./node_modules/@polymer/iron-media-query/iron-media-query.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@lrnwebcomponents/map-menu/map-menu.js",
  "./lib/outline-player-arrow.js"
], function(_polymerLegacy, _polymerDom, async, _elementMixin) {
  "use strict";
  async = babelHelpers.interopRequireWildcard(async);
  function _templateObject_dbdfcc70dbb911e8a20e476acf0e8725() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        font-family: libre baskerville;\n        position: relative;\n        overflow: hidden;\n        --outline-player-min-height: \'\';\n        --app-drawer-width: 300px;\n        --outline-player-dark: #222222;\n        --outline-player-light: #F8F8F8;\n        --outline-player-arrow-margin-top: 50px;\n      }\n\n      :host[closed] {\n        --app-drawer-width: 0px;\n      }\n\n      h1 {\n        font-size: 3em;\n        line-height: 1em;\n      }\n\n      h2 {\n        font-size: 2em;\n      }\n\n      h3 {\n        font-size: 1.75em;\n      }\n\n      p {\n        line-height: 26px;\n        min-height: 26px;\n      }\n\n      a,\n      a:visited,\n      a:active {\n        color: #000;\n      }\n\n      a:hover {\n        color: #2196f3;\n      }\n\n      ul li {\n        padding-bottom: 1.5em;\n        line-height: 1.5;\n        color: #424242;\n        max-width: 28em;\n      }\n\n      ul li:last-child {\n        padding-bottom: 1em;\n      }\n\n      app-toolbar {\n        background-color: var(--outline-player-light);\n        color: var(--outline-player-dark);\n        font-weight: bold;\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -1px var(--outline-player-dark);\n        box-shadow: 0 0 6px -1px var(--outline-player-dark);\n      }\n\n      app-drawer-layout {\n        min-height: 100%;\n        min-height: -moz-available;          /* WebKit-based browsers will ignore this. */\n        min-height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */\n        min-height: fill-available;\n        /* if the user has set a specific value then override the defaults */\n        min-height: var(--outline-player-min-height);\n      }\n\n      .outline-title {\n        font-size: 24px;\n        height: 64px;\n        padding: 16px;\n        margin: 0;\n      }\n\n      #menu {\n        padding: 8px;\n      }\n\n      outline-player-navigation {\n        --outline-player-dark: var(--outline-player-dark);\n      }\n\n      paper-icon-button+[main-title] {\n        margin-left: 24px;\n      }\n\n      paper-progress {\n        display: block;\n        width: 100%;\n        --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n        --paper-progress-container-color: transparent;\n      }\n\n      app-header {\n        color: var(--outline-player-dark);\n        /* Enable outline to be placed anywhere in the dom */\n        /* This will override the app-header-layout forcing fixed mode */\n        position: absolute !important;\n        left: 0 !important;\n        --app-header-background-rear-layer: {\n          /* app-header-layout will force fixed */\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      app-toolbar {\n        box-shadow: none;\n        border-bottom: none;\n        background: none;\n      }\n\n      app-drawer {\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        position: absolute;\n        min-height: var(--outline-play-min-height);\n        --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n        --app-drawer-content-container: {\n          overflow: scroll;\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      #content {\n        display: flex;\n        justify-content: center;\n      }\n\n      #content>* {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      #slot {\n        padding: 1em;\n        max-width: 65em;\n        flex: 1 1 auto;\n        order: 1;\n      }\n\n      .desktopNav {\n        margin-left: 2%;\n        margin-right: 2%;\n        position: relative;\n        margin-top: var(--outline-player-arrow-margin-top);\n      }\n\n      #desktopNavLeft {\n        order: 0\n      }\n\n      #desktopNavRight {\n        order: 2\n      }\n    </style>\n    <iron-ajax auto="[[auto]]" url="[[outlineLocation]][[outlineFile]]" handle-as="json" last-response="{{_outlineData}}"></iron-ajax>\n    <iron-ajax auto="[[auto]]" url="[[outlineLocation]][[activeItem.location]]" handle-as="text" loading="{{__loadingContent}}" last-response="{{_activeItemContent}}"></iron-ajax>\n    <app-drawer-layout>\n      <app-drawer id="drawer" swipe-open="" slot="drawer">\n        <template is="dom-if" if="[[__hasTitle(outlineTitle)]]">\n          <h2 class="outline-title">[[outlineTitle]]</h2>\n        </template>\n        <map-menu id="menu" items="{{outline}}" data="[[_outlineData.items]]" selected="{{selected}}" active-indicator="" auto-scroll=""></map-menu>\n      </app-drawer>\n      <app-header-layout>\n        <app-header reveals="" slot="header">\n          <app-toolbar>\n            <paper-icon-button icon="menu" on-click="_toggleMenu"></paper-icon-button>\n            <div main-title="">\n              [[activeItem.title]]\n              <div id="slotTitle">\n                <slot name="title"></slot>\n              </div>\n            </div>\n            <template is="dom-if" if="[[!breakpointDesktop]]">\n              <outline-player-arrow id="prevpage" disabled="[[disablePrevPage(__activeIndex)]]" icon="icons:arrow-back" on-click="prevPage">\n                Previous page\n              </outline-player-arrow>\n              <outline-player-arrow id="nextpage" disabled="[[disableNextPage(__activeIndex)]]" icon="icons:arrow-forward" on-click="nextPage">\n                Next page\n              </outline-player-arrow>\n            </template>\n            <paper-progress hidden$="[[!__loadingContent]]" value="10" indeterminate="" bottom-item=""></paper-progress>\n          </app-toolbar>\n        </app-header>\n        <div id="content">\n          <div id="slot">\n            <slot></slot>\n          </div>\n          <template is="dom-if" if="[[breakpointDesktop]]">\n            <div class="desktopNav" id="desktopNavLeft">\n              <outline-player-arrow sticky="" id="prevpage" disabled="[[disablePrevPage(__activeIndex)]]" icon="icons:arrow-back" on-click="prevPage">\n                Previous page\n              </outline-player-arrow>\n            </div>\n            <div class="desktopNav" id="desktopNavRight">\n              <outline-player-arrow sticky="" id="nextpage" disabled="[[disableNextPage(__activeIndex)]]" icon="icons:arrow-forward" on-click="nextPage">\n                Next page\n              </outline-player-arrow>\n            </div>\n          </template>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n    <iron-media-query query="(min-width: 700px)" query-matches="{{breakpointDesktop}}"></iron-media-query>\n'
      ],
      [
        '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        font-family: libre baskerville;\n        position: relative;\n        overflow: hidden;\n        --outline-player-min-height: \'\';\n        --app-drawer-width: 300px;\n        --outline-player-dark: #222222;\n        --outline-player-light: #F8F8F8;\n        --outline-player-arrow-margin-top: 50px;\n      }\n\n      :host[closed] {\n        --app-drawer-width: 0px;\n      }\n\n      h1 {\n        font-size: 3em;\n        line-height: 1em;\n      }\n\n      h2 {\n        font-size: 2em;\n      }\n\n      h3 {\n        font-size: 1.75em;\n      }\n\n      p {\n        line-height: 26px;\n        min-height: 26px;\n      }\n\n      a,\n      a:visited,\n      a:active {\n        color: #000;\n      }\n\n      a:hover {\n        color: #2196f3;\n      }\n\n      ul li {\n        padding-bottom: 1.5em;\n        line-height: 1.5;\n        color: #424242;\n        max-width: 28em;\n      }\n\n      ul li:last-child {\n        padding-bottom: 1em;\n      }\n\n      app-toolbar {\n        background-color: var(--outline-player-light);\n        color: var(--outline-player-dark);\n        font-weight: bold;\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -1px var(--outline-player-dark);\n        box-shadow: 0 0 6px -1px var(--outline-player-dark);\n      }\n\n      app-drawer-layout {\n        min-height: 100%;\n        min-height: -moz-available;          /* WebKit-based browsers will ignore this. */\n        min-height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */\n        min-height: fill-available;\n        /* if the user has set a specific value then override the defaults */\n        min-height: var(--outline-player-min-height);\n      }\n\n      .outline-title {\n        font-size: 24px;\n        height: 64px;\n        padding: 16px;\n        margin: 0;\n      }\n\n      #menu {\n        padding: 8px;\n      }\n\n      outline-player-navigation {\n        --outline-player-dark: var(--outline-player-dark);\n      }\n\n      paper-icon-button+[main-title] {\n        margin-left: 24px;\n      }\n\n      paper-progress {\n        display: block;\n        width: 100%;\n        --paper-progress-active-color: rgba(255, 255, 255, 0.5);\n        --paper-progress-container-color: transparent;\n      }\n\n      app-header {\n        color: var(--outline-player-dark);\n        /* Enable outline to be placed anywhere in the dom */\n        /* This will override the app-header-layout forcing fixed mode */\n        position: absolute !important;\n        left: 0 !important;\n        --app-header-background-rear-layer: {\n          /* app-header-layout will force fixed */\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      app-toolbar {\n        box-shadow: none;\n        border-bottom: none;\n        background: none;\n      }\n\n      app-drawer {\n        border-bottom: solid 1px var(--outline-player-dark);\n        -webkit-box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        box-shadow: 0 0 6px -3px var(--outline-player-dark);\n        position: absolute;\n        min-height: var(--outline-play-min-height);\n        --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n        --app-drawer-content-container: {\n          overflow: scroll;\n          background-color: var(--outline-player-light);\n        }\n      }\n\n      #content {\n        display: flex;\n        justify-content: center;\n      }\n\n      #content>* {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      #slot {\n        padding: 1em;\n        max-width: 65em;\n        flex: 1 1 auto;\n        order: 1;\n      }\n\n      .desktopNav {\n        margin-left: 2%;\n        margin-right: 2%;\n        position: relative;\n        margin-top: var(--outline-player-arrow-margin-top);\n      }\n\n      #desktopNavLeft {\n        order: 0\n      }\n\n      #desktopNavRight {\n        order: 2\n      }\n    </style>\n    <iron-ajax auto="[[auto]]" url="[[outlineLocation]][[outlineFile]]" handle-as="json" last-response="{{_outlineData}}"></iron-ajax>\n    <iron-ajax auto="[[auto]]" url="[[outlineLocation]][[activeItem.location]]" handle-as="text" loading="{{__loadingContent}}" last-response="{{_activeItemContent}}"></iron-ajax>\n    <app-drawer-layout>\n      <app-drawer id="drawer" swipe-open="" slot="drawer">\n        <template is="dom-if" if="[[__hasTitle(outlineTitle)]]">\n          <h2 class="outline-title">[[outlineTitle]]</h2>\n        </template>\n        <map-menu id="menu" items="{{outline}}" data="[[_outlineData.items]]" selected="{{selected}}" active-indicator="" auto-scroll=""></map-menu>\n      </app-drawer>\n      <app-header-layout>\n        <app-header reveals="" slot="header">\n          <app-toolbar>\n            <paper-icon-button icon="menu" on-click="_toggleMenu"></paper-icon-button>\n            <div main-title="">\n              [[activeItem.title]]\n              <div id="slotTitle">\n                <slot name="title"></slot>\n              </div>\n            </div>\n            <template is="dom-if" if="[[!breakpointDesktop]]">\n              <outline-player-arrow id="prevpage" disabled="[[disablePrevPage(__activeIndex)]]" icon="icons:arrow-back" on-click="prevPage">\n                Previous page\n              </outline-player-arrow>\n              <outline-player-arrow id="nextpage" disabled="[[disableNextPage(__activeIndex)]]" icon="icons:arrow-forward" on-click="nextPage">\n                Next page\n              </outline-player-arrow>\n            </template>\n            <paper-progress hidden\\$="[[!__loadingContent]]" value="10" indeterminate="" bottom-item=""></paper-progress>\n          </app-toolbar>\n        </app-header>\n        <div id="content">\n          <div id="slot">\n            <slot></slot>\n          </div>\n          <template is="dom-if" if="[[breakpointDesktop]]">\n            <div class="desktopNav" id="desktopNavLeft">\n              <outline-player-arrow sticky="" id="prevpage" disabled="[[disablePrevPage(__activeIndex)]]" icon="icons:arrow-back" on-click="prevPage">\n                Previous page\n              </outline-player-arrow>\n            </div>\n            <div class="desktopNav" id="desktopNavRight">\n              <outline-player-arrow sticky="" id="nextpage" disabled="[[disableNextPage(__activeIndex)]]" icon="icons:arrow-forward" on-click="nextPage">\n                Next page\n              </outline-player-arrow>\n            </div>\n          </template>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n    <iron-media-query query="(min-width: 700px)" query-matches="{{breakpointDesktop}}"></iron-media-query>\n'
      ]
    );
    _templateObject_dbdfcc70dbb911e8a20e476acf0e8725 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_dbdfcc70dbb911e8a20e476acf0e8725()
    ),
    is: "outline-player",
    behaviors: [MaterializeCSSBehaviors.ColorBehaviors, SchemaBehaviors.Schema],
    properties: {
      auto: { type: Boolean, value: !1 },
      outlineFile: { type: String, value: "outline.json" },
      outlineLocation: { type: String },
      outlineTitle: { type: String },
      selected: { type: String, observer: "_selectedPageChanged" },
      closed: { type: Boolean, reflectToAttribute: !0, value: !1 },
      _activeItemContent: {
        type: String,
        observer: "_activeItemContentChanged"
      },
      outline: { type: Array, notify: !0, observer: "_outlineChanged" },
      activeItem: { type: Object, notify: !0 },
      autoloader: {
        type: Array,
        value: [
          "license-element",
          "grid-plate",
          "q-r",
          "self-check",
          "tab-list",
          "multiple-choice",
          "oer-schema",
          "hero-banner",
          "magazine-cover",
          "task-list",
          "video-player",
          "lrn-table",
          "media-image",
          "lrndesign-blockquote",
          "meme-maker",
          "a11y-gif-player",
          "paper-audio-player",
          "wikipedia-query",
          "wave-player",
          "pdf-element",
          "lrn-vocab",
          "lrn-math",
          "person-testimonial",
          "citation-element",
          "lrn-calendar",
          "code-editor",
          "place-holder",
          "aframe-player"
        ],
        observer: "_autoLoadChanged"
      },
      breakpointDesktop: { type: String, value: "600px" },
      fillRemaining: { type: Boolean, value: !1, reflectToAttribute: !0 }
    },
    attached: function attached() {
      var _this = this;
      this.refreshDynamicPositions();
      window.addEventListener("resize", function() {
        _this.refreshDynamicPositions();
      });
    },
    refreshDynamicPositions: function refreshDynamicPositions() {
      var boundingRect = this.getBoundingClientRect(),
        windowHeight = window.innerHeight,
        minHeight = windowHeight - boundingRect.top,
        styleChanges = {};
      if (this.fillRemaining) {
        styleChanges["--outline-player-min-height"] = minHeight + "px";
      }
      styleChanges["--outline-player-arrow-margin-top"] =
        minHeight / 2 - 20 + "px";
      this.updateStyles(styleChanges);
    },
    _toggleMenu: function _toggleMenu() {
      this.$.drawer.toggle();
      this.closed = !this.$.drawer.opened;
      async.microTask.run(function() {
        window.dispatchEvent(new Event("resize"));
        (0, _elementMixin.updateStyles)();
      });
    },
    _autoLoadChanged: function _autoLoadChanged(newValue) {
      if (
        babelHelpers.typeof(newValue) !== "undefined" &&
        newValue.constructor === Array
      ) {
        if (babelHelpers.typeof(this.__processedList) === "undefined") {
          this.__processedList = {};
        }
        for (var i in newValue) {
          var tag = newValue[i].toLowerCase();
          if (babelHelpers.typeof(this.__processedList[tag]) === "undefined") {
            try {
              this.__processedList[tag] = tag;
              this.importHref(
                this.resolveUrl("../".concat(tag, "/").concat(tag, ".html")),
                function() {},
                function() {}
              );
            } catch (err) {}
          }
        }
      }
    },
    wipeSlot: function wipeSlot(element) {
      var slot =
        1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "*";
      if ("*" === slot) {
        while (null !== (0, _polymerDom.dom)(element).firstChild) {
          (0, _polymerDom.dom)(element).removeChild(
            (0, _polymerDom.dom)(element).firstChild
          );
        }
      } else {
        for (var i in (0, _polymerDom.dom)(element).childNodes) {
          if (
            babelHelpers.typeof((0, _polymerDom.dom)(element).childNodes[i]) !==
              "undefined" &&
            (0, _polymerDom.dom)(element).childNodes[i].slot === slot
          ) {
            (0, _polymerDom.dom)(element).removeChild(
              (0, _polymerDom.dom)(element).childNodes[i]
            );
          }
        }
      }
    },
    _activeItemContentChanged: function _activeItemContentChanged(newValue) {
      if (babelHelpers.typeof(newValue) !== "undefined") {
        this.wipeSlot(this, "*");
        if (null !== newValue) {
          var frag = document.createRange().createContextualFragment(newValue);
          (0, _polymerDom.dom)(this).appendChild(frag);
        }
      }
    },
    _outlineChanged: function _outlineChanged(newValue, oldValue) {
      if (
        babelHelpers.typeof(newValue) !== "undefined" &&
        babelHelpers.typeof(oldValue) !== "undefined" &&
        newValue.constructor === Array &&
        babelHelpers.typeof(newValue[0]) !== "undefined"
      ) {
        this.set("activeItem", newValue[0]);
        this.__activeIndex = 0;
      }
    },
    disablePrevPage: function disablePrevPage(index) {
      if (0 === index) {
        return !0;
      }
      return !1;
    },
    disableNextPage: function disableNextPage(index) {
      if (index === this._outlineData.items.length - 1) {
        return !0;
      }
      return !1;
    },
    prevPage: function prevPage() {
      this.changePage("previous");
    },
    nextPage: function nextPage() {
      this.changePage("next");
    },
    changePage: function changePage(direction) {
      if (
        "next" == direction &&
        this.__activeIndex < this._outlineData.items.length - 1
      ) {
        this.selected = this._outlineData.items[this.__activeIndex + 1].id;
      } else if ("previous" == direction && 0 < this.__activeIndex) {
        this.selected = this._outlineData.items[this.__activeIndex - 1].id;
      }
      var arrows = this.querySelectorAll("outline-player-arrow"),
        _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0;
      try {
        for (
          var _iterator = arrows[Symbol.iterator](), _step, arrow;
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = !0
        ) {
          arrow = _step.value;
          arrow.resetPosition();
        }
      } catch (err) {
        _didIteratorError = !0;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && null != _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    _selectedPageChanged: function _selectedPageChanged(newValue) {
      var _this2 = this;
      if (babelHelpers.typeof(newValue) !== "undefined") {
        if (babelHelpers.typeof(this._outlineData) !== "undefined") {
          var item = this._outlineData.items
            .filter(function(d, i) {
              if (newValue === d.id) {
                _this2.__activeIndex = i;
                return d;
              }
            })
            .pop();
          this.set("activeItem", item);
        }
      }
    },
    __hasTitle: function __hasTitle(outlineTitle) {
      return outlineTitle ? !0 : !1;
    }
  });
});
