define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js"
], function(_polymerLegacy, _polymerDom) {
  "use strict";
  function _templateObject_dc1f74e0dbb611e8956215710f59c831() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        outline: none;\n      }\n      #container {\n        display: none;\n        opacity: 0;\n        background-color: transparent;\n        transition: background-color .6s linear, visibility .6s linear, opacity .6s linear;\n        visibility: hidden;\n      }\n      :host[edit-mode] #container {\n        display: block;\n        opacity: .4;\n        visibility: visible;\n        background-color: var(--item-overlay-ops, #999999);\n        position: absolute;\n        z-index: 1;\n      }\n      :host[edit-mode] #container:hover,\n      :host[edit-mode] #container:focus,\n      :host[focused] #container {\n        opacity: .8;\n        background-color: var(--item-overlay-ops, #ffffff);\n      }\n      .ops {\n        width: 100%;\n        height: 39px;\n        padding: 0;\n        margin: 0;\n        border-bottom: 1px solid rgba(100, 100, 100, .4);\n        text-align: center;\n      }\n      .ops paper-icon-button {\n        display: inline-flex;\n        width: 30px;\n        height: 30px;\n        padding: 2px;\n        margin: 5px 8px;\n        color: #999999;\n      }\n      .ops paper-icon-button.active {\n        color: #000000;\n        background-color: rgba(255, 255, 255, .6);\n        border-radius: 50%;\n      }\n      .active-op {\n        text-transform:capitalize;\n        margin: 0;\n        height: 40px;\n        line-height: 40px;\n        font-size: 20px;\n        text-align: center;\n      }\n      #workingarea {\n        width: 100%;\n        padding: 0;\n        margin: 0 auto;\n        align-content: center;\n      }\n      #workingarea paper-icon-button {\n        width: 50%;\n        height: 100%;\n        display: inline-flex;\n        min-width: unset;\n        padding: 16px;\n        margin: 0;\n        border: none;\n        border-radius: 0;\n      }\n      #workingarea #option1 {\n        background-color: rgba(100, 255, 100, .6);\n      }\n      #workingarea #option2 {\n        background-color: rgba(255, 100, 100, .6);\n      }\n      #workingarea #option1:hover,\n      #workingarea #option1:focus {\n        background-color: rgba(100, 255, 100, 1);\n      }\n      #workingarea #option2:hover,\n      #workingarea #option2:focus {\n        background-color: rgba(255, 100, 100, 1);\n      }\n      #workingarea {\n        display: none;\n      }\n      #workingarea.move {\n        display: flex;\n      }\n      #workingarea.move #option1,\n      #workingarea.move #option2 {\n        background-color: rgba(200, 200, 200, .5);\n      }\n      #workingarea.move #option1:hover,\n      #workingarea.move #option1:focus,\n      #workingarea.move #option2:hover,\n      #workingarea.move #option2:focus {\n        background-color: rgba(200, 200, 200, 1);\n      }\n      #workingarea.remove {\n        display: flex;\n      }\n      #workingarea.duplicate {\n        display: flex;\n      }\n    </style>\n    <div id="container">\n      <div class="ops">\n        <paper-icon-button icon="icons:add" id="add" hidden$="[[!add]]" title="Add to this"></paper-icon-button>\n        <paper-icon-button icon="icons:create" id="edit" hidden$="[[!edit]]" title="Edit this"></paper-icon-button>\n        <paper-icon-button icon="icons:swap-horiz" id="move" hidden$="[[!move]]" title="Move this"></paper-icon-button>\n        <paper-icon-button icon="icons:delete" id="remove" hidden$="[[!remove]]" title="Delete this"></paper-icon-button>\n        <paper-icon-button icon="icons:content-copy" id="duplicate" hidden$="[[!duplicate]]" title="Duplicate this"></paper-icon-button>\n      </div>\n      <div class="active-op">[[activeTitle]]</div>\n      <div id="workingarea" class$="[[activeOp]]">\n        <paper-icon-button id="option1" title="[[__option1Text]]" icon="[[__option1Icon]]"></paper-icon-button>\n        <paper-icon-button id="option2" title="[[__option2Text]]" icon="[[__option2Icon]]"></paper-icon-button>\n      </div>\n    </div>\n    <slot></slot>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        outline: none;\n      }\n      #container {\n        display: none;\n        opacity: 0;\n        background-color: transparent;\n        transition: background-color .6s linear, visibility .6s linear, opacity .6s linear;\n        visibility: hidden;\n      }\n      :host[edit-mode] #container {\n        display: block;\n        opacity: .4;\n        visibility: visible;\n        background-color: var(--item-overlay-ops, #999999);\n        position: absolute;\n        z-index: 1;\n      }\n      :host[edit-mode] #container:hover,\n      :host[edit-mode] #container:focus,\n      :host[focused] #container {\n        opacity: .8;\n        background-color: var(--item-overlay-ops, #ffffff);\n      }\n      .ops {\n        width: 100%;\n        height: 39px;\n        padding: 0;\n        margin: 0;\n        border-bottom: 1px solid rgba(100, 100, 100, .4);\n        text-align: center;\n      }\n      .ops paper-icon-button {\n        display: inline-flex;\n        width: 30px;\n        height: 30px;\n        padding: 2px;\n        margin: 5px 8px;\n        color: #999999;\n      }\n      .ops paper-icon-button.active {\n        color: #000000;\n        background-color: rgba(255, 255, 255, .6);\n        border-radius: 50%;\n      }\n      .active-op {\n        text-transform:capitalize;\n        margin: 0;\n        height: 40px;\n        line-height: 40px;\n        font-size: 20px;\n        text-align: center;\n      }\n      #workingarea {\n        width: 100%;\n        padding: 0;\n        margin: 0 auto;\n        align-content: center;\n      }\n      #workingarea paper-icon-button {\n        width: 50%;\n        height: 100%;\n        display: inline-flex;\n        min-width: unset;\n        padding: 16px;\n        margin: 0;\n        border: none;\n        border-radius: 0;\n      }\n      #workingarea #option1 {\n        background-color: rgba(100, 255, 100, .6);\n      }\n      #workingarea #option2 {\n        background-color: rgba(255, 100, 100, .6);\n      }\n      #workingarea #option1:hover,\n      #workingarea #option1:focus {\n        background-color: rgba(100, 255, 100, 1);\n      }\n      #workingarea #option2:hover,\n      #workingarea #option2:focus {\n        background-color: rgba(255, 100, 100, 1);\n      }\n      #workingarea {\n        display: none;\n      }\n      #workingarea.move {\n        display: flex;\n      }\n      #workingarea.move #option1,\n      #workingarea.move #option2 {\n        background-color: rgba(200, 200, 200, .5);\n      }\n      #workingarea.move #option1:hover,\n      #workingarea.move #option1:focus,\n      #workingarea.move #option2:hover,\n      #workingarea.move #option2:focus {\n        background-color: rgba(200, 200, 200, 1);\n      }\n      #workingarea.remove {\n        display: flex;\n      }\n      #workingarea.duplicate {\n        display: flex;\n      }\n    </style>\n    <div id="container">\n      <div class="ops">\n        <paper-icon-button icon="icons:add" id="add" hidden\\$="[[!add]]" title="Add to this"></paper-icon-button>\n        <paper-icon-button icon="icons:create" id="edit" hidden\\$="[[!edit]]" title="Edit this"></paper-icon-button>\n        <paper-icon-button icon="icons:swap-horiz" id="move" hidden\\$="[[!move]]" title="Move this"></paper-icon-button>\n        <paper-icon-button icon="icons:delete" id="remove" hidden\\$="[[!remove]]" title="Delete this"></paper-icon-button>\n        <paper-icon-button icon="icons:content-copy" id="duplicate" hidden\\$="[[!duplicate]]" title="Duplicate this"></paper-icon-button>\n      </div>\n      <div class="active-op">[[activeTitle]]</div>\n      <div id="workingarea" class\\$="[[activeOp]]">\n        <paper-icon-button id="option1" title="[[__option1Text]]" icon="[[__option1Icon]]"></paper-icon-button>\n        <paper-icon-button id="option2" title="[[__option2Text]]" icon="[[__option2Icon]]"></paper-icon-button>\n      </div>\n    </div>\n    <slot></slot>\n'
      ]
    );
    _templateObject_dc1f74e0dbb611e8956215710f59c831 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_dc1f74e0dbb611e8956215710f59c831()
    ),
    is: "item-overlay-ops",
    listeners: {
      "add.tap": "_opTap",
      "edit.tap": "_opTap",
      "move.tap": "_opTap",
      focusin: "_inFocus",
      focusout: "_outFocus",
      "remove.tap": "_opTap",
      "duplicate.tap": "_opTap",
      "option1.tap": "_optionSelected",
      "option2.tap": "_optionSelected"
    },
    hostAttributes: { tabindex: "0" },
    properties: {
      editMode: { type: Boolean, reflectToAttribute: !0, value: !1 },
      focused: { type: Boolean, reflectToAttribute: !0, value: !1 },
      activeTitle: { type: String },
      activeOp: { type: String },
      add: { type: Boolean, value: !1 },
      edit: { type: Boolean, value: !1 },
      move: { type: Boolean, value: !1 },
      remove: { type: Boolean, value: !1 },
      duplicate: { type: Boolean, value: !1 }
    },
    attached: function attached() {
      var _this = this;
      setTimeout(function() {
        var rect = _this.getBoundingClientRect();
        _this.$.container.style.width = rect.width + "px";
        _this.$.container.style.height = rect.height + "px";
        _this.$.workingarea.style.height = rect.height - 80 + "px";
      }, 1);
      window.addEventListener("resize", this._windowResize.bind(this));
    },
    _windowResize: function _windowResize() {
      var rect = this.getBoundingClientRect();
      this.$.container.style.width = rect.width + "px";
      this.$.container.style.height = rect.height + "px";
      this.$.workingarea.style.height = rect.height - 80 + "px";
    },
    _opTap: function _opTap(e) {
      var normalizedEvent = (0, _polymerDom.dom)(e),
        local = normalizedEvent.localTarget;
      this.activeTitle = local.getAttribute("id");
      this.activeOp = local.getAttribute("id");
      this._resetActive();
      local.classList.add("active");
      switch (this.activeOp) {
        case "remove":
          this.__option1Icon = "icons:check";
          this.__option1Text = "Confirm deleting this";
          this.__option2Icon = "icons:clear";
          this.__option2Text = "Cancel";
          break;
        case "duplicate":
          this.__option1Icon = "icons:check";
          this.__option1Text = "Confirm duplicating this";
          this.__option2Icon = "icons:clear";
          this.__option2Text = "Cancel";
          break;
        case "move":
          this.__option1Icon = "icons:arrow-back";
          this.__option1Text = "Move item left";
          this.__option2Icon = "icons:arrow-forward";
          this.__option2Text = "Move item right";
          break;
      }
      var op = { element: this, operation: this.activeOp };
      this.fire("item-overlay-op-changed", op);
    },
    _inFocus: function _inFocus() {
      if (this.editMode) {
        this.focused = !0;
      }
    },
    _outFocus: function _outFocus() {
      if (this.editMode) {
        this.focused = !1;
      }
    },
    _optionSelected: function _optionSelected(e) {
      var normalizedEvent = (0, _polymerDom.dom)(e),
        local = normalizedEvent.localTarget,
        ops = {
          element: this,
          operation: this.activeOp,
          option: local.getAttribute("id")
        };
      this.fire("item-overlay-option-selected", ops);
      if ("move" != this.activeOp) {
        this._resetActive();
        this.activeOp = null;
      }
    },
    _resetActive: function _resetActive() {
      this.$.add.classList.remove("active");
      this.$.edit.classList.remove("active");
      this.$.move.classList.remove("active");
      this.$.remove.classList.remove("active");
      this.$.duplicate.classList.remove("active");
    }
  });
});
