define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/chartist-lib.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_06361f00d96311e890e297ecee38143a() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="chart" chart$="[[__chartId]]" class$="ct-chart [[scale]]"></div>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id="chart" chart\\$="[[__chartId]]" class\\$="ct-chart [[scale]]"></div>\n'
      ]
    );
    _templateObject_06361f00d96311e890e297ecee38143a = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_06361f00d96311e890e297ecee38143a()
    ),
    is: "chartist-render",
    listeners: { "chart.tap": "makeChart", created: "_onCreated" },
    properties: {
      id: { type: String, value: "chart" },
      type: { type: String, value: "bar" },
      scale: { type: String, observer: "makeChart" },
      chartTitle: { type: String, value: null, observer: "makeChart" },
      chartDesc: { type: String, value: "", observer: "makeChart" },
      data: { type: Object, value: null, observer: "makeChart" },
      options: { type: Object, value: null, observer: "makeChart" },
      responsiveOptions: { type: Array, value: [], observer: "makeChart" },
      showTable: { type: Boolean, value: !1, observer: "makeChart" }
    },
    attached: function attached() {
      var root = this;
      root.__chartId = root._getUniqueId("chartist-render-");
      root._chartReady();
    },
    _checkReady: function _checkReady() {
      var root = this;
      setInterval(root._chartReady, 500);
    },
    _chartReady: function _chartReady() {
      var root = this,
        query = '[chart="' + root.__chartId + '"]',
        container = document.querySelector(query);
      if (null !== container) {
        root.fire("chartist-render-ready", this);
        if (null !== root.data) root.makeChart();
        clearInterval(root._checkReady);
      }
    },
    makeChart: function makeChart() {
      var root = this,
        chart;
      if (
        null !== root.data &&
        null !== root.querySelector('[chart="' + root.__chartId + '"]')
      ) {
        if ("bar" == root.type) {
          chart = Chartist.Bar(
            '[chart="' + root.__chartId + '"]',
            root.data,
            root.options,
            root.responsiveOptions
          );
        } else if ("line" == root.type) {
          chart = Chartist.Line(
            '[chart="' + root.__chartId + '"]',
            root.data,
            root.options,
            root.responsiveOptions
          );
        } else if ("pie" == root.type) {
          chart = Chartist.Pie(
            '[chart="' + root.__chartId + '"]',
            root.data,
            root.options,
            root.responsiveOptions
          );
        }
        root.fire("chartist-render-draw", chart);
        chart.on("created", function() {
          root.addA11yFeatures(chart.container.childNodes[0]);
        });
        return chart;
      } else {
        return null;
      }
    },
    addA11yFeatures: function addA11yFeatures(svg) {
      var desc =
        this.data.labels !== void 0 && null !== this.data.labels
          ? this.chartDesc + this.makeA11yTable(svg)
          : this.chartDesc;
      this._addA11yFeature(svg, "desc", desc);
      this._addA11yFeature(svg, "title", this.chartTitle);
      svg.setAttribute(
        "aria-labelledby",
        this.__chartId + "-chart-title " + this.__chartId + "-chart-desc"
      );
    },
    makeA11yTable: function makeA11yTable() {
      for (
        var title =
            null !== this.chartTitle
              ? this.chartTitle
              : "A " + this.type + " chart.",
          table = [
            '<table summary="Each column is a series of data, and the first column is the data label.">',
            "<caption>" + title + "</caption>",
            "<tbody>"
          ],
          i = 0;
        i < this.data.labels.length;
        i++
      ) {
        table.push('<tr><th scope="row">' + this.data.labels[i] + "</th>");
        if ("pie" == this.type) {
          table.push("<td>" + this.data.series[i] + "</td>");
        } else {
          for (var j = 0; j < this.data.series.length; j++) {
            table.push("<td>" + this.data.series[j][i] + "</td>");
          }
        }
        table.push("</tr>");
      }
      table.push("</tbody></table>");
      return table.join("");
    },
    _addA11yFeature: function _addA11yFeature(svg, tag, html) {
      var el = document.createElement(tag),
        first = svg.childNodes[0];
      el.innerHTML = html;
      el.setAttribute("id", this.__chartId + "-chart-" + tag);
      svg.insertBefore(el, first);
    },
    _getUniqueId: function _getUniqueId(prefix) {
      var id = prefix + Date.now();
      while (null !== document.querySelector('[chart="' + id + '"]')) {
        id = prefix + Date.now();
      }
      return id;
    }
  });
});