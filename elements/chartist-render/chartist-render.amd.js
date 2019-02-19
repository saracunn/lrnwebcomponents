define(["exports","meta","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js","./node_modules/@polymer/polymer/lib/utils/resolve-url.js"],function(_exports,meta,_polymerLegacy,_esGlobalBridge,_resolveUrl){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ChartistRender=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject_7b847a00344811e980de4748f556ed2a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div id=\"chart\" chart$=\"[[__chartId]]\" class$=\"ct-chart [[scale]]\"></div>\n  "]);_templateObject_7b847a00344811e980de4748f556ed2a=function _templateObject_7b847a00344811e980de4748f556ed2a(){return data};return data}var ChartistRender=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_7b847a00344811e980de4748f556ed2a()),is:"chartist-render",listeners:{tap:"makeChart"},properties:{id:{type:String,value:"chart"},type:{type:String,value:"bar"},scale:{type:String,observer:"makeChart"},chartTitle:{type:String,value:null,observer:"makeChart"},chartDesc:{type:String,value:"",observer:"makeChart"},data:{type:Object,value:null,observer:"makeChart"},options:{type:Object,value:null,observer:"makeChart"},responsiveOptions:{type:Array,value:[],observer:"makeChart"},showTable:{type:Boolean,value:!1,observer:"makeChart"}},created:function created(){var name="chartist",basePath=(0,_resolveUrl.pathFromUrl)(decodeURIComponent(meta.url)),location="".concat(basePath,"lib/chartist/dist/chartist.min.js");window.addEventListener("es-bridge-".concat(name,"-loaded"),this._chartistLoaded.bind(this));window.ESGlobalBridge.requestAvailability();window.ESGlobalBridge.instance.load(name,location)},_chartistLoaded:function _chartistLoaded(){this.__chartistLoaded=!0;if(this.__chartId){this._chartReady()}},attached:function attached(){this.__chartId=this._getUniqueId("chartist-render-");if(this.__chartistLoaded){this._chartReady()}},_checkReady:function _checkReady(){var root=this;setInterval(root._chartReady,500)},_chartReady:function _chartReady(){var container=this.$.chart;if(null!==container){this.fire("chartist-render-ready",this);if(null!==this.data)this.makeChart();clearInterval(this._checkReady)}},makeChart:function makeChart(){var root=this,chart;if(this.__chartistLoaded&&this.__chartId&&null!==root.data&&null!==this.$.chart){if("bar"==root.type){chart=Chartist.Bar(this.$.chart,root.data,root.options,root.responsiveOptions)}else if("line"==root.type){chart=Chartist.Line(this.$.chart,root.data,root.options,root.responsiveOptions)}else if("pie"==root.type){chart=Chartist.Pie(this.$.chart,root.data,root.options,root.responsiveOptions)}root.fire("chartist-render-draw",chart);chart.on("created",function(){root.addA11yFeatures(chart.container.childNodes[0])});return chart}else{return null}},addA11yFeatures:function addA11yFeatures(svg){var desc=this.data.labels!==void 0&&null!==this.data.labels?this.chartDesc+this.makeA11yTable(svg):this.chartDesc;this._addA11yFeature(svg,"desc",desc);this._addA11yFeature(svg,"title",this.chartTitle);svg.setAttribute("aria-labelledby",this.__chartId+"-chart-title "+this.__chartId+"-chart-desc")},makeA11yTable:function makeA11yTable(svg){for(var title=null!==this.chartTitle?this.chartTitle:"A "+this.type+" chart.",table=["<table summary=\"Each column is a series of data, and the first column is the data label.\">","<caption>"+title+"</caption>","<tbody>"],i=0;i<this.data.labels.length;i++){table.push("<tr><th scope=\"row\">"+this.data.labels[i]+"</th>");if("pie"==this.type){table.push("<td>"+this.data.series[i]+"</td>")}else{for(var j=0;j<this.data.series.length;j++){table.push("<td>"+this.data.series[j][i]+"</td>")}}table.push("</tr>")}table.push("</tbody></table>");return table.join("")},_addA11yFeature:function _addA11yFeature(svg,tag,html){var el=document.createElement(tag),first=svg.childNodes[0];el.innerHTML=html;el.setAttribute("id",this.__chartId+"-chart-"+tag);svg.insertBefore(el,first)},_getUniqueId:function _getUniqueId(prefix){var id=prefix+Date.now();return id}});_exports.ChartistRender=ChartistRender});