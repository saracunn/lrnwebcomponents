define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@lrnwebcomponents/lrndesign-dialog/lrndesign-dialog.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_314745a0dbb811e8a2ae717bd8cb0bdd() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <paper-button raised="" onclick="dialog.toggle()">{{buttonLabel}}</paper-button>\n    <lrndesign-dialog id="dialog">\n      <h2>{{title}}</h2>\n      <div>\n        <slot></slot>\n      </div>\n    </lrndesign-dialog>\n'
    ]);
    _templateObject_314745a0dbb811e8a2ae717bd8cb0bdd = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_314745a0dbb811e8a2ae717bd8cb0bdd()
    ),
    is: "lrndesign-buttondialog",
    properties: {
      buttonLabel: { type: String, value: "Label" },
      title: { type: String, value: "Heading" }
    }
  });
});
