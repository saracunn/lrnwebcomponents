define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/moment/moment.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_38ae1130dbb711e8acdc97d968ee4fc8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    [[output]]\n"]);
    _templateObject_38ae1130dbb711e8acdc97d968ee4fc8 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_38ae1130dbb711e8acdc97d968ee4fc8()
    ),
    is: "moment-element",
    properties: {
      datetime: {
        type: String,
        value: function value() {
          return new Date();
        }
      },
      inputFormat: { type: String, value: "" },
      outputFormat: { type: String, value: "" },
      from: { type: String, value: "" },
      to: { type: String, value: "" },
      output: { type: String, notify: !0 }
    },
    observers: [
      "_computeOutput(datetime, inputFormat, outputFormat, from, to)"
    ],
    update: function update() {
      this._computeOutput(
        this.datetime,
        this.inputFormat,
        this.outputFormat,
        this.from,
        this.to
      );
    },
    _computeOutput: function _computeOutput(
      datetime,
      inputFormat,
      outputFormat,
      from,
      to
    ) {
      var output = inputFormat
        ? moment(datetime, inputFormat)
        : moment(datetime);
      if (outputFormat) {
        output = output.format(outputFormat);
      } else if (from) {
        output = "now" === from ? output.fromNow() : output.from(moment(from));
      } else if (to) {
        output = "now" === to ? output.toNow() : output.to(moment(to));
      }
      this.set("output", output);
    }
  });
});
