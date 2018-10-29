import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import "./node_modules/moment/moment.js";
Polymer({
  _template: html`
    [[output]]
`,
  is: "moment-element",
  properties: {
    datetime: {
      type: String,
      value: function() {
        return new Date();
      }
    },
    inputFormat: { type: String, value: "" },
    outputFormat: { type: String, value: "" },
    from: { type: String, value: "" },
    to: { type: String, value: "" },
    output: { type: String, notify: !0 }
  },
  observers: ["_computeOutput(datetime, inputFormat, outputFormat, from, to)"],
  update: function() {
    this._computeOutput(
      this.datetime,
      this.inputFormat,
      this.outputFormat,
      this.from,
      this.to
    );
  },
  _computeOutput: function(datetime, inputFormat, outputFormat, from, to) {
    var output = inputFormat ? moment(datetime, inputFormat) : moment(datetime);
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
