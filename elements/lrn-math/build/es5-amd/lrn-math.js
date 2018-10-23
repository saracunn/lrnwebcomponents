define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnMath = void 0;
  function _templateObject_98648950d6f411e8abb521c9ec9777e7() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_98648950d6f411e8abb521c9ec9777e7 = function() {
      return data;
    };
    return data;
  }
  var LrnMath = (function(_PolymerElement) {
    babelHelpers.inherits(LrnMath, _PolymerElement);
    function LrnMath() {
      babelHelpers.classCallCheck(this, LrnMath);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnMath.__proto__ || Object.getPrototypeOf(LrnMath)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnMath,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnMath.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnMath.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnMath.haxProperties,
              LrnMath.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_98648950d6f411e8abb521c9ec9777e7()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrn math",
                description: "Automated conversion of lrn-math/",
                icon: "icons:android",
                color: "green",
                groups: ["Math"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrn-math";
          }
        }
      ]
    );
    return LrnMath;
  })(_polymerElement.PolymerElement);
  _exports.LrnMath = LrnMath;
  window.customElements.define(LrnMath.tag, LrnMath);
});