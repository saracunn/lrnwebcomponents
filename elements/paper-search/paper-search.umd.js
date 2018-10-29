!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/polymer/lib/legacy/polymer.dom.js"],t):t(e.polymerLegacy_js,null,e.polymer_dom_js)}(this,function(e,t,r){"use strict";e.Polymer({is:"paper-search-bar",properties:{query:{type:String,notify:!0,value:""},hideFilterButton:{type:Boolean,value:!1},disableFilterButton:{type:Boolean,value:!1},nrSelectedFilters:{type:Number,value:0},icon:{type:String,value:"search"},placeholder:{type:String,value:"Search"}},behaviors:[IronA11yKeysBehavior],keyBindings:{enter:"_search"},focus:function(){this.$.input.focus()},_filter:function(e){this.fire("paper-search-filter")},_clear:function(){this.query="",this.$.input.focus(),this.fire("paper-search-clear")},_search:function(){this.fire("paper-search-search")}}),e.Polymer({is:"paper-filter-dialog",properties:{filters:Array,selectedFilters:{type:Object,notify:!0,value:{}},resetButton:{type:String,value:"Reset"},saveButton:{type:String,value:"Save filters"},noValuesLabel:{type:String,value:"No filters yet"},_selectedFilters:{type:Object,value:{}},_selectedFilter:Object,_selectedFilterValues:{type:Array,value:[]}},open:function(){r.dom(document.body).appendChild(this),setTimeout(function(){this.$.dialog.open(),this._selectedFilters=Object.assign({},this.selectedFilters)}.bind(this),1)},close:function(){this.$.dialog.close()},_tapSelectFilter:function(e){this.$.selector.select(e.model.filter),this._preselectFilterValues()},_preselectFilterValues:function(){var e=this._selectedFilters[this._selectedFilter.id];this._selectedFilterValues=this._selectedFilter.values.map(function(t){return Object.assign({},t,{selected:function(t){return Boolean(e)&&e.indexOf(t.id)>=0}(t)})})},_tapReset:function(e){this._selectedFilters={}},_tapApply:function(e){this.selectedFilters=this._selectedFilters,this.fire("save")},_tapSelectValues:function(e){var t,r,i,n=this._selectedFilterValues.filter(function(e){return e.selected}).map(function(e){return e.id});this._selectedFilters=Object.assign({},this._selectedFilters,(t={},r=this._selectedFilter.id,i=n,r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t)),this.$.selector.deselect(this._selectedFilter)},_hasSelectedFilters:function(e){for(selectedFilter in e)if(e[selectedFilter].length>0)return!0;return!1},_getSelectedValuesNames:function(e,t){var r=t[e.id];if(!e.values||!r)return this.noValuesLabel;var i=e.values.filter(function(e){return r.indexOf(e.id)>=0}).map(function(e){return e.name});return i.length>0?i.join(", "):this.noValuesLabel}}),e.Polymer({is:"paper-search-panel",properties:{search:{type:String,observer:"_onChangeRequest",notify:!0},filters:Object,selectedFilters:{type:Object,observer:"_onChangeRequest",notify:!0,value:{}},items:Array,hasMore:{type:Boolean,value:!1},loading:{type:Boolean,value:!1},hideFilterButton:{type:Boolean,value:!1},count:{type:Number,notify:!0,value:20},icon:{type:String,value:"search"},placeholder:{type:String,value:"Search"},noResultsText:{type:String,value:"No matching results found."},moreButton:{type:String,value:"More"},resetButton:String,saveButton:String,noValuesLabel:String,_hasItems:{type:Boolean,computed:"_computeHasItems(items)",value:!1}},getPaperSearchBarInstance:function(){return this.$.paperSearchBar},_loadMore:function(){this.count+=20,this._updateData()},_computeHasItems:function(e){return void 0!==e&&e.length>0},_showNoResults:function(e,t){return!e&&!t},_onChangeRequest:function(e,t){void 0!==t&&(this.count=20,this._updateData())},_updateData:function(){this.fire("change-request-params")},_onFilter:function(){this.$.filterDialog.open()},_onSearch:function(){this.fire("search")},_getNrSelectedFilters:function(e){return Object.keys(e).length<=0?0:Object.keys(e).map(function(t){return e[t].length}).reduce(function(e,t){return e+t})},_disableFilterButton:function(e){return!(e&&e.length>0)}})});
//# sourceMappingURL=paper-search.umd.js.map
