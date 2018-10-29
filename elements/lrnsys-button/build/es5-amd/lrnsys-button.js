define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js"
], function(_polymerLegacy, _polymerDom) {
  "use strict";
  function _templateObject_44651220dbb811e8aec9e15dfc7d5f0d() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n        @apply --paper-font-common-base;\n        @apply --paper-button;\n        --lrnsys-button-height: 3em;\n      }\n      a {\n        text-decoration: none;\n        display: block;\n        color: #000000;\n      }\n      paper-button {\n        padding: 0;\n        margin: 0;\n        min-width: .1em;\n        height: inherit;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n        text-transform: unset;\n        border-radius: unset;\n      }\n      paper-button iron-icon {\n        height: var(--lrnsys-button-height);\n        margin: 0 .25em;\n      }\n      paper-button iron-icon:first-child {\n        margin: 0 .25em 0 0;\n      }\n      paper-button iron-icon:last-child {\n        margin: 0 0 0 .25em;\n      }\n      paper-button div.inner {\n        height: var(--lrnsys-button-height);\n        line-height: var(--lrnsys-button-height);\n        padding: 0 1em;\n      }\n      paper-button span.label {\n        height: var(--lrnsys-button-height);\n        line-height: var(--lrnsys-button-height);\n      }\n      .no-margin {\n        margin: 0 !important;\n      }\n      .no-right-padding {\n        padding-right: 0 !important;\n      }\n      .no-left-padding {\n        padding-left: 0 !important;\n      }\n    </style>\n    <a tabindex="-1" id="lrnsys-button-link" href$="[[showHref]]" data-prefetch-hover$="[[prefetch]]" target$="[[target]]">\n      <paper-button id="button" title="[[alt]]" raised="[[raised]]" class$="[[buttonClass]] [[color]] [[textColor]]" disabled$="[[disabled]]">\n        <div class$="inner [[innerClass]]">\n          <iron-icon icon="[[icon]]" id="icon" class$="[[iconClass]]" hidden$="[[!icon]]"></iron-icon>\n          <span class="label" hidden$="[[!label]]">\n            [[label]]\n          </span>\n          <slot></slot>\n        </div>\n      </paper-button>\n    </a>\n    <paper-tooltip for="lrnsys-button-link" animation-delay="0" hidden$="[[!alt]]">[[alt]]</paper-tooltip>\n'
      ],
      [
        '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n        @apply --paper-font-common-base;\n        @apply --paper-button;\n        --lrnsys-button-height: 3em;\n      }\n      a {\n        text-decoration: none;\n        display: block;\n        color: #000000;\n      }\n      paper-button {\n        padding: 0;\n        margin: 0;\n        min-width: .1em;\n        height: inherit;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n        text-transform: unset;\n        border-radius: unset;\n      }\n      paper-button iron-icon {\n        height: var(--lrnsys-button-height);\n        margin: 0 .25em;\n      }\n      paper-button iron-icon:first-child {\n        margin: 0 .25em 0 0;\n      }\n      paper-button iron-icon:last-child {\n        margin: 0 0 0 .25em;\n      }\n      paper-button div.inner {\n        height: var(--lrnsys-button-height);\n        line-height: var(--lrnsys-button-height);\n        padding: 0 1em;\n      }\n      paper-button span.label {\n        height: var(--lrnsys-button-height);\n        line-height: var(--lrnsys-button-height);\n      }\n      .no-margin {\n        margin: 0 !important;\n      }\n      .no-right-padding {\n        padding-right: 0 !important;\n      }\n      .no-left-padding {\n        padding-left: 0 !important;\n      }\n    </style>\n    <a tabindex="-1" id="lrnsys-button-link" href\\$="[[showHref]]" data-prefetch-hover\\$="[[prefetch]]" target\\$="[[target]]">\n      <paper-button id="button" title="[[alt]]" raised="[[raised]]" class\\$="[[buttonClass]] [[color]] [[textColor]]" disabled\\$="[[disabled]]">\n        <div class\\$="inner [[innerClass]]">\n          <iron-icon icon="[[icon]]" id="icon" class\\$="[[iconClass]]" hidden\\$="[[!icon]]"></iron-icon>\n          <span class="label" hidden\\$="[[!label]]">\n            [[label]]\n          </span>\n          <slot></slot>\n        </div>\n      </paper-button>\n    </a>\n    <paper-tooltip for="lrnsys-button-link" animation-delay="0" hidden\\$="[[!alt]]">[[alt]]</paper-tooltip>\n'
      ]
    );
    _templateObject_44651220dbb811e8aec9e15dfc7d5f0d = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_44651220dbb811e8aec9e15dfc7d5f0d()
    ),
    is: "lrnsys-button",
    properties: {
      href: { type: String, value: "#", reflectToAttribute: !0 },
      showHref: {
        type: String,
        value: !1,
        reflectToAttribute: !0,
        computed: "_getShowHref(href,disabled)"
      },
      raised: { type: Boolean, reflectToAttribute: !0 },
      label: { type: String, value: "" },
      target: { type: String, value: "" },
      icon: { type: String, value: !1 },
      hoverClass: { type: String },
      buttonClass: { type: String },
      iconClass: { type: String },
      innerClass: { type: String },
      color: { type: String },
      textColor: { type: String },
      prefetch: { type: String },
      alt: { type: String },
      disabled: { type: Boolean, value: !1 },
      focusState: { type: Boolean, value: !1 }
    },
    attached: function attached() {
      this.addEventListener("mousedown", this.tapEventOn.bind(this));
      this.addEventListener("mouseover", this.tapEventOn.bind(this));
      this.addEventListener("mouseout", this.tapEventOff.bind(this));
      this.$.button.addEventListener("focused-changed", this.focusToggle);
    },
    _getShowHref: function _getShowHref(href, disabled) {
      if (href && !disabled) {
        return href;
      }
    },
    tapEventOn: function tapEventOn() {
      var root = this;
      if (
        babelHelpers.typeof(root.hoverClass) !== "undefined" &&
        !root.disabled
      ) {
        var classes = root.hoverClass.split(" ");
        classes.forEach(function(item) {
          if ("" != item) {
            root.$.button.classList.add(item);
            if (-1 != item.indexOf("-")) {
              root.$.icon.classList.add(item);
            }
          }
        });
      }
    },
    tapEventOff: function tapEventOff() {
      var root = this;
      if (
        babelHelpers.typeof(root.hoverClass) !== "undefined" &&
        !root.disabled
      ) {
        var classes = root.hoverClass.split(" ");
        classes.forEach(function(item) {
          if ("" != item) {
            root.$.button.classList.remove(item);
            if (-1 != item.indexOf("-")) {
              root.$.icon.classList.remove(item);
            }
          }
        });
      }
    },
    focusToggle: function focusToggle() {
      var root = (0, _polymerDom.dom)(this).parentNode.parentNode;
      if (
        babelHelpers.typeof(root.hoverClass) !== "undefined" &&
        !root.disabled
      ) {
        var classes = root.hoverClass.split(" ");
        classes.forEach(function(item) {
          if ("" != item) {
            if (!root.focusState) {
              root.$.button.classList.add(item);
              if (-1 != item.indexOf("-")) {
                root.$.icon.classList.add(item);
              }
            } else {
              root.$.button.classList.remove(item);
              if (-1 != item.indexOf("-")) {
                root.$.icon.classList.remove(item);
              }
            }
          }
        });
      }
      root.focusState = !root.focusState;
    }
  });
});
