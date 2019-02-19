define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/app-layout/app-layout.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js"],function(_exports,_polymerLegacy,_appLayout,_paperIconButton,_paperTooltip){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignDrawer=void 0;function _templateObject_eb9b8b80344811e9823dcb60a3df5ff1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        --lrndesign-drawer-width: 30%;\n      }\n      app-header {\n        z-index: 100;\n      }\n      app-drawer {\n        --app-drawer-width: var(--lrndesign-drawer-width);\n        --app-drawer-content-container: {\n          padding: 16px;\n          overflow-y: scroll;\n          margin-top: 112px;\n        }\n      }\n    </style>\n    <app-header>\n      <app-drawer opened=\"{{opened}}\" align=\"{{align}}\">\n        <slot></slot>\n      </app-drawer>\n    </app-header>\n    <paper-icon-button\n      icon=\"[[icon]]\"\n      alt=\"[[alt]]\"\n      id=\"flyout-drawer\"\n    ></paper-icon-button>\n    <paper-tooltip for=\"flyout-drawer\">[[alt]]</paper-tooltip>\n  "]);_templateObject_eb9b8b80344811e9823dcb60a3df5ff1=function _templateObject_eb9b8b80344811e9823dcb60a3df5ff1(){return data};return data}var LrndesignDrawer=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_eb9b8b80344811e9823dcb60a3df5ff1()),is:"lrndesign-drawer",properties:{opened:{type:Boolean,value:!1},icon:{type:String,value:"icon"},align:{type:String,value:"left"},alt:{type:String,value:""}},ready:function ready(){var root=this,opened=this.opened;this.shadowRoot.querySelector("paper-icon-button").addEventListener("click",function(e){root.opened=!root.opened})}});_exports.LrndesignDrawer=LrndesignDrawer});