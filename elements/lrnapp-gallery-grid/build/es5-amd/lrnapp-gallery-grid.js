define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_21f463d0dbb811e8957a4381a581ed3b() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h2>[[title]]</h2>\n"
    ]);
    _templateObject_21f463d0dbb811e8957a4381a581ed3b = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_21f463d0dbb811e8957a4381a581ed3b()
    ),
    is: "lrnapp-gallery-grid",
    properties: { title: { type: String, value: "lrnapp-gallery-grid" } }
  });
});
