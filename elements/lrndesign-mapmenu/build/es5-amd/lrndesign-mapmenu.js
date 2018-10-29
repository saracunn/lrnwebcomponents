define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/lrndesign-mapmenu-item.js",
  "./lib/lrndesign-mapmenu-submenu.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_a7e2ee20dbb911e89c3e4b059f833045() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 1em 2em;\n      }\n      :host > ::shadow lrndesign-mapmenu-submenu + lrndesign-mapmenu-submenu {\n        margin-top: 1em;\n      }\n    </style>\n    <slot></slot>\n"
    ]);
    _templateObject_a7e2ee20dbb911e89c3e4b059f833045 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_a7e2ee20dbb911e89c3e4b059f833045()
    ),
    is: "lrndesign-mapmenu",
    properties: {}
  });
});
