define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js",
  "time-elements/time-elements.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_8a41a230dbb911e8b53b675c4965a2a2() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      .comment-left {\n        float: left;\n        display: inline-block;\n      }\n      .comment-right {\n        display: inline-block;\n      }\n    </style>\n    <div class="comment-container">\n      <div class="comment-left">\n        <lrndesign-avatar></lrndesign-avatar>\n      </div>\n      <div class="comment-right">\n        <div class="row-1">\n          <span>{{name}}</span>\n          <relative-time datetime$="{{date}}">\n          </relative-time>\n        </div>\n        <div class="row-2">\n          <slot></slot>\n        </div>\n        <div class="row-3">\n          {{links}}\n        </div>\n      </div>\n    </div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      .comment-left {\n        float: left;\n        display: inline-block;\n      }\n      .comment-right {\n        display: inline-block;\n      }\n    </style>\n    <div class="comment-container">\n      <div class="comment-left">\n        <lrndesign-avatar></lrndesign-avatar>\n      </div>\n      <div class="comment-right">\n        <div class="row-1">\n          <span>{{name}}</span>\n          <relative-time datetime\\$="{{date}}">\n          </relative-time>\n        </div>\n        <div class="row-2">\n          <slot></slot>\n        </div>\n        <div class="row-3">\n          {{links}}\n        </div>\n      </div>\n    </div>\n'
      ]
    );
    _templateObject_8a41a230dbb911e8b53b675c4965a2a2 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_8a41a230dbb911e8b53b675c4965a2a2()
    ),
    is: "lrndesign-comment",
    properties: {
      avatar: { type: Object, reflectToAttribute: !0, notify: !0 },
      name: { type: String, reflectToAttribute: !0, notify: !0 },
      date: {
        type: String,
        value: "2014-04-01T00:00:00.000Z",
        reflectToAttribute: !0,
        notify: !0
      },
      links: { type: Object, notify: !0 }
    }
  });
});
