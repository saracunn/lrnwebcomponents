define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js",
  "../node_modules/@polymer/paper-input/paper-input.js",
  "../node_modules/@polymer/paper-styles/paper-styles.js",
  "../node_modules/@polymer/paper-button/paper-button.js",
  "../node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "../node_modules/@polymer/iron-pages/iron-pages.js",
  "../node_modules/@polymer/iron-icons/iron-icons.js",
  "../node_modules/@polymer/iron-icon/iron-icon.js",
  "../node_modules/@lrnwebcomponents/simple-colors/simple-colors.js",
  "../node_modules/@vaadin/vaadin-upload/vaadin-upload.js",
  "../node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./hax-preview.js",
  "./hax-app-browser.js",
  "./hax-gizmo-browser.js"
], function(
  _polymerLegacy,
  _polymerDom,
  _appDrawer,
  _paperInput,
  _paperStyles,
  _paperButton,
  _paperIconButton,
  _ironPages,
  _ironIcons,
  _ironIcon,
  _simpleColors,
  _vaadinUpload,
  _materializecssStyles,
  _haxPreview,
  _haxAppBrowser,
  _haxGizmoBrowser
) {
  "use strict";
  function _templateObject_4b00fc10f72011e8896bf72847fe39df() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n  <custom-style>\n    <style is="custom-style" include="materializecss-styles simple-colors">\n      :host {\n        display: block;\n        --hax-manager-steps-color: #FFFFFF;\n        --hax-manager-ink-color: #FFFFFF;\n        --hax-accent: var(--simple-colors-default-theme-light-green-1);\n        color: #FFFFFF;\n      }\n      #dialog {\n        color: #FFFFFF;\n        z-index: 10000;\n        padding: 56px 0;\n        margin-top: 64px;\n        --app-drawer-width: 400px;\n        --app-drawer-content-container: {\n          background-color: rgba(0, 0, 0, 0.7);\n        };\n      }\n      #closedialog {\n        float: right;\n        top: 135px;\n        right: 0;\n        position: absolute;\n        padding: 4px;\n        margin: 0;\n        color: var(--simple-colors-default-theme-light-green-1, green);\n        background-color: transparent;\n        width: 40px;\n        height: 40px;\n        min-width: unset;\n      }\n      :host([active-page="0"]) #dialog {\n        --app-drawer-width: 400px;\n      }\n      :host([active-page="1"]) #dialog {\n        --app-drawer-width: 800px;\n      }\n      :host([active-page="2"]) #dialog {\n        --app-drawer-width: 800px;\n      }\n      :host([active-step]) #dialog {\n        --app-drawer-width: 1000px;\n      }\n      :host([searching]) #dialog {\n        --app-drawer-width: 1000px;\n      }\n      .title {\n        text-align: center;\n        padding: 16px;\n        margin: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        font-size: 32px;\n        font-weight: bold;\n        font-family: sans-serif;\n        text-transform: uppercase;\n        color: var(--simple-colors-default-theme-light-green-1);\n      }\n      #activepage {\n      }\n      #preview {\n        height: 100%;\n      }\n      vaadin-upload {\n        --primary-color: var(--hax-accent);\n        --primary-font-color: #FFFFFF;\n        --dark-primary-color: #FFFFFF;\n        --light-primary-color: var(--hax-accent);\n        --error-color: darkred;\n        color: #FFFFFF;\n        display: block;\n        padding: 32px !important;\n        --vaadin-upload-button-add-wrapper: {\n          border: 2px solid #FFFFFF;\n          background-color: var(--hax-accent);\n          color: #FFFFFF;\n          display: block;\n        };\n        --vaadin-upload-buttons-primary: {\n          display: block;\n          width: 100%;\n          flex: unset;\n          -webkit-flex: unset;\n        };\n        --vaadin-upload-button-add: {\n          color: #000000;\n          display: block;\n          flex: unset;\n          -webkit-flex: unset;\n          text-align: center;\n        };\n        --vaadin-upload-drop-label: {\n          color: #FFFFFF;\n          display: block;\n          padding: 16px;\n        };\n        --vaadin-upload-drop-label-dragover: {\n          color: #FFFFFF;\n        };\n        --vaadin-upload-file-list: {\n          padding: 16px;\n          margin: 0;\n          color: #FFFFFF;\n        };\n        --vaadin-upload-file: {\n          color: #FFFFFF;\n        };\n      }\n      vaadin-upload[dragover] {\n        border-color: #396;\n      }\n      vaadin-upload-file {\n        --disabled-text-color: #222222;\n      }\n      .add-area-content-wrapper {\n        padding: 0 16px;\n      }\n      .add-url-are,\n      .add-upload-area {\n        margin: 16px 0;\n      }\n      .url-description {\n        font-size: 18px;\n        color: #FFFFFF;\n        line-height: 22px;\n        font-family: sans-serif;\n        letter-spacing: 1px;\n      }\n      #steppages {\n        height: 100%;\n      }\n      #newassetconfigure {\n        width: 100%;\n        margin: 0;\n        padding: 16px;\n        background-color: var(--simple-colors-default-theme-light-green-1);\n        color: #000000;\n      }\n      paper-input {\n        color: #FFFFFF;\n        --paper-input-container-invalid-color: var(--simple-colors-red-foreground3);\n        --secondary-text-color: #FFFFFF;\n        --primary-text-color: #FFFFFF;\n        --paper-input-container-input-color: #FFFFFF;\n        --paper-input-container-color: #FFFFFF;\n        --paper-input-container-focus-color: var(--simple-colors-default-theme-light-green-1);\n      }\n      @media screen and (max-width: 550px) {\n        .hide-on-mobile {\n          opacity: 0;\n          visibility: hidden;\n          position: absolute;\n          left: -9999px;\n        }\n        .page-area.hax-manager {\n          padding: 6px;\n        }\n      }\n    </style>\n  </custom-style>\n    <app-drawer id="dialog" opened="{{opened}}" disable-swipe="">\n      <div class="dialog-contents" id="dialogcontent" style="height: 100%; overflow: auto;">\n        <iron-pages id="steppages" selected="{{activeStep}}" fallback-selection="select" role="main">\n          <div data-value="select">\n            <iron-pages id="activepage" selected="{{activePage}}" fallback-selection="link">\n              <div class="page-area add-area">\n                <h3 class="title">[[addTitle]]</h3>\n                <div class="add-area-content-wrapper">\n                  <div class="add-url-area">\n                    <paper-input id="url" label="URL" type="url" auto-validate=""></paper-input>\n                  <div class="url-description">A full URL with https:// referencing a link that already exists on the web.</div>\n                  </div>\n                  <div class="add-upload-area">\n                    <vaadin-upload form-data-name="file-upload" id="fileupload" hidden$="[[!canSupportUploads]]"></vaadin-upload>\n                  </div>\n                  <paper-button id="newassetconfigure" raised="">Configure item</paper-button>\n                </div>\n              </div>\n              <div class="page-area">\n                <hax-app-browser id="appbrowser">\n                  <slot></slot>\n                </hax-app-browser>\n              </div>\n              <div class="page-area">\n                <hax-gizmo-browser id="gizmobrowser"></hax-gizmo-browser>\n              </div>\n            </iron-pages>\n          </div>\n          <div style="height:100%;">\n            <hax-preview id="preview" element="{{activeHaxElement}}"></hax-preview>\n          </div>\n        </iron-pages>\n        <paper-button id="closedialog" on-tap="cancel">\n          <iron-icon icon="icons:cancel" title="Close dialog"></iron-icon>\n        </paper-button>\n      </div>\n    </app-drawer>\n'
      ],
      [
        '\n  <custom-style>\n    <style is="custom-style" include="materializecss-styles simple-colors">\n      :host {\n        display: block;\n        --hax-manager-steps-color: #FFFFFF;\n        --hax-manager-ink-color: #FFFFFF;\n        --hax-accent: var(--simple-colors-default-theme-light-green-1);\n        color: #FFFFFF;\n      }\n      #dialog {\n        color: #FFFFFF;\n        z-index: 10000;\n        padding: 56px 0;\n        margin-top: 64px;\n        --app-drawer-width: 400px;\n        --app-drawer-content-container: {\n          background-color: rgba(0, 0, 0, 0.7);\n        };\n      }\n      #closedialog {\n        float: right;\n        top: 135px;\n        right: 0;\n        position: absolute;\n        padding: 4px;\n        margin: 0;\n        color: var(--simple-colors-default-theme-light-green-1, green);\n        background-color: transparent;\n        width: 40px;\n        height: 40px;\n        min-width: unset;\n      }\n      :host([active-page="0"]) #dialog {\n        --app-drawer-width: 400px;\n      }\n      :host([active-page="1"]) #dialog {\n        --app-drawer-width: 800px;\n      }\n      :host([active-page="2"]) #dialog {\n        --app-drawer-width: 800px;\n      }\n      :host([active-step]) #dialog {\n        --app-drawer-width: 1000px;\n      }\n      :host([searching]) #dialog {\n        --app-drawer-width: 1000px;\n      }\n      .title {\n        text-align: center;\n        padding: 16px;\n        margin: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        font-size: 32px;\n        font-weight: bold;\n        font-family: sans-serif;\n        text-transform: uppercase;\n        color: var(--simple-colors-default-theme-light-green-1);\n      }\n      #activepage {\n      }\n      #preview {\n        height: 100%;\n      }\n      vaadin-upload {\n        --primary-color: var(--hax-accent);\n        --primary-font-color: #FFFFFF;\n        --dark-primary-color: #FFFFFF;\n        --light-primary-color: var(--hax-accent);\n        --error-color: darkred;\n        color: #FFFFFF;\n        display: block;\n        padding: 32px !important;\n        --vaadin-upload-button-add-wrapper: {\n          border: 2px solid #FFFFFF;\n          background-color: var(--hax-accent);\n          color: #FFFFFF;\n          display: block;\n        };\n        --vaadin-upload-buttons-primary: {\n          display: block;\n          width: 100%;\n          flex: unset;\n          -webkit-flex: unset;\n        };\n        --vaadin-upload-button-add: {\n          color: #000000;\n          display: block;\n          flex: unset;\n          -webkit-flex: unset;\n          text-align: center;\n        };\n        --vaadin-upload-drop-label: {\n          color: #FFFFFF;\n          display: block;\n          padding: 16px;\n        };\n        --vaadin-upload-drop-label-dragover: {\n          color: #FFFFFF;\n        };\n        --vaadin-upload-file-list: {\n          padding: 16px;\n          margin: 0;\n          color: #FFFFFF;\n        };\n        --vaadin-upload-file: {\n          color: #FFFFFF;\n        };\n      }\n      vaadin-upload[dragover] {\n        border-color: #396;\n      }\n      vaadin-upload-file {\n        --disabled-text-color: #222222;\n      }\n      .add-area-content-wrapper {\n        padding: 0 16px;\n      }\n      .add-url-are,\n      .add-upload-area {\n        margin: 16px 0;\n      }\n      .url-description {\n        font-size: 18px;\n        color: #FFFFFF;\n        line-height: 22px;\n        font-family: sans-serif;\n        letter-spacing: 1px;\n      }\n      #steppages {\n        height: 100%;\n      }\n      #newassetconfigure {\n        width: 100%;\n        margin: 0;\n        padding: 16px;\n        background-color: var(--simple-colors-default-theme-light-green-1);\n        color: #000000;\n      }\n      paper-input {\n        color: #FFFFFF;\n        --paper-input-container-invalid-color: var(--simple-colors-red-foreground3);\n        --secondary-text-color: #FFFFFF;\n        --primary-text-color: #FFFFFF;\n        --paper-input-container-input-color: #FFFFFF;\n        --paper-input-container-color: #FFFFFF;\n        --paper-input-container-focus-color: var(--simple-colors-default-theme-light-green-1);\n      }\n      @media screen and (max-width: 550px) {\n        .hide-on-mobile {\n          opacity: 0;\n          visibility: hidden;\n          position: absolute;\n          left: -9999px;\n        }\n        .page-area.hax-manager {\n          padding: 6px;\n        }\n      }\n    </style>\n  </custom-style>\n    <app-drawer id="dialog" opened="{{opened}}" disable-swipe="">\n      <div class="dialog-contents" id="dialogcontent" style="height: 100%; overflow: auto;">\n        <iron-pages id="steppages" selected="{{activeStep}}" fallback-selection="select" role="main">\n          <div data-value="select">\n            <iron-pages id="activepage" selected="{{activePage}}" fallback-selection="link">\n              <div class="page-area add-area">\n                <h3 class="title">[[addTitle]]</h3>\n                <div class="add-area-content-wrapper">\n                  <div class="add-url-area">\n                    <paper-input id="url" label="URL" type="url" auto-validate=""></paper-input>\n                  <div class="url-description">A full URL with https:// referencing a link that already exists on the web.</div>\n                  </div>\n                  <div class="add-upload-area">\n                    <vaadin-upload form-data-name="file-upload" id="fileupload" hidden\\$="[[!canSupportUploads]]"></vaadin-upload>\n                  </div>\n                  <paper-button id="newassetconfigure" raised="">Configure item</paper-button>\n                </div>\n              </div>\n              <div class="page-area">\n                <hax-app-browser id="appbrowser">\n                  <slot></slot>\n                </hax-app-browser>\n              </div>\n              <div class="page-area">\n                <hax-gizmo-browser id="gizmobrowser"></hax-gizmo-browser>\n              </div>\n            </iron-pages>\n          </div>\n          <div style="height:100%;">\n            <hax-preview id="preview" element="{{activeHaxElement}}"></hax-preview>\n          </div>\n        </iron-pages>\n        <paper-button id="closedialog" on-tap="cancel">\n          <iron-icon icon="icons:cancel" title="Close dialog"></iron-icon>\n        </paper-button>\n      </div>\n    </app-drawer>\n'
      ]
    );
    _templateObject_4b00fc10f72011e8896bf72847fe39df = function _templateObject_4b00fc10f72011e8896bf72847fe39df() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_4b00fc10f72011e8896bf72847fe39df()
    ),
    is: "hax-manager",
    properties: {
      opened: {
        type: Boolean,
        value: !1,
        reflectToAttribute: !0,
        observer: "_openedChanged"
      },
      editExistingNode: { type: Boolean, value: !1 },
      editTitle: {
        type: String,
        computed: "_computeEditTitle(editExistingNode)"
      },
      addTitle: { type: String, value: "Add content" },
      activeStep: {
        type: Boolean,
        reflectToAttribute: !0,
        value: !1,
        observer: "_activeStepChanged"
      },
      searching: { type: Boolean, reflectToAttribute: !0, value: !1 },
      activePage: {
        type: String,
        reflectToAttribute: !0,
        value: 0,
        observer: "_activePageChanged"
      },
      canSupportUploads: { type: Boolean, value: !1 },
      activeHaxElement: { type: Object, observer: "_activeHaxElementChanged" },
      appList: { type: Array, value: [] },
      __allowUpload: { type: Boolean, value: !1 },
      appendJwt: { type: String, value: null },
      appendUploadEndPoint: { type: String, value: null }
    },
    created: function created() {
      this.__attached = !1;
    },
    attached: function attached() {
      if (!this.__attached) {
        this.__attached = !0;
        document.body.appendChild(this);
      } else {
        this.fire("hax-register-manager", this);
        document.body.addEventListener(
          "hax-store-property-updated",
          this._haxStorePropertyUpdated.bind(this)
        );
        document.body.addEventListener(
          "hax-app-picker-selection",
          this._haxAppPickerSelection.bind(this)
        );
        document.body.addEventListener(
          "place-holder-file-drop",
          this._placeHolderFileDrop.bind(this)
        );
        this.$.dialog.addEventListener(
          "iron-overlay-canceled",
          this.close.bind(this)
        );
        this.$.dialog.addEventListener(
          "iron-overlay-closed",
          this.close.bind(this)
        );
        this.$.closedialog.addEventListener("tap", this.close.bind(this));
        this.$.newassetconfigure.addEventListener(
          "tap",
          this.newAssetConfigure.bind(this)
        );
        this.$.fileupload.addEventListener(
          "upload-before",
          this._fileAboutToUpload.bind(this)
        );
        this.$.fileupload.addEventListener(
          "upload-response",
          this._fileUploadResponse.bind(this)
        );
      }
    },
    detached: function detached() {
      document.body.removeEventListener(
        "hax-store-property-updated",
        this._haxStorePropertyUpdated.bind(this)
      );
      document.body.removeEventListener(
        "hax-app-picker-selection",
        this._haxAppPickerSelection.bind(this)
      );
      document.body.removeEventListener(
        "place-holder-file-drop",
        this._placeHolderFileDrop.bind(this)
      );
      this.$.dialog.removeEventListener(
        "iron-overlay-canceled",
        this.close.bind(this)
      );
      this.$.dialog.removeEventListener(
        "iron-overlay-closed",
        this.close.bind(this)
      );
      this.$.closedialog.removeEventListener("tap", this.close.bind(this));
      this.$.newassetconfigure.removeEventListener(
        "tap",
        this.newAssetConfigure.bind(this)
      );
      this.$.fileupload.removeEventListener(
        "upload-before",
        this._fileAboutToUpload.bind(this)
      );
      this.$.fileupload.removeEventListener(
        "upload-response",
        this._fileUploadResponse.bind(this)
      );
    },
    togglePanelSize: function togglePanelSize(e) {
      this.$.dialog.classList.toggle("grow");
      this.updateStyles();
      window.dispatchEvent(new Event("resize"));
    },
    _computeEditTitle: function _computeEditTitle(updateExisting) {
      if (
        babelHelpers.typeof(this.activeHaxElement) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0)) &&
        updateExisting
      ) {
        return "Update";
      } else {
        return "Insert";
      }
    },
    _placeHolderFileDrop: function _placeHolderFileDrop(e) {
      this.resetManager();
      this.open();
      window.HaxStore.instance.activePlaceHolder = e.detail.placeHolderElement;
      this.$.fileupload._onDrop(e.detail);
    },
    _fileAboutToUpload: function _fileAboutToUpload(e) {
      if (!this.__allowUpload) {
        e.preventDefault();
        e.stopPropagation();
        var values = { source: e.detail.file.name, type: e.detail.file.type },
          type = window.HaxStore.guessGizmoType(values),
          targets = window.HaxStore.getHaxAppStoreTargets(type);
        if (0 != targets.length) {
          window.HaxStore.instance.haxAppPicker.presentOptions(
            targets,
            type,
            "Where would you like to upload this " + type + "?",
            "app"
          );
        } else {
          window.HaxStore.toast(
            "Sorry, you don't have a storage location that can handle " +
              type +
              " uploads!",
            5e3
          );
        }
      } else {
        this.__allowUpload = !1;
      }
    },
    _haxAppPickerSelection: function _haxAppPickerSelection(e) {
      var connection = e.detail.connection;
      this.__appUsed = e.detail;
      this.$.fileupload.method = connection.operations.add.method;
      var requestEndPoint = connection.protocol + "://" + connection.url;
      if ("/" != requestEndPoint.substr(requestEndPoint.length - 1)) {
        requestEndPoint += "/";
      }
      if (
        babelHelpers.typeof(connection.operations.add.endPoint) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        requestEndPoint += connection.operations.add.endPoint;
      }
      if (null != this.appendUploadEndPoint) {
        requestEndPoint += "?" + this.appendUploadEndPoint;
      }
      if (null != this.appendJwt) {
        requestEndPoint +=
          "&" + this.appendJwt + "=" + localStorage.getItem(this.appendJwt);
      }
      this.$.fileupload.headers = connection.headers;
      this.$.fileupload.target = requestEndPoint;
      this.__allowUpload = !0;
      this.$.fileupload.uploadFiles();
    },
    _fileUploadResponse: function _fileUploadResponse(e) {
      var response = JSON.parse(e.detail.xhr.response),
        map = this.__appUsed.connection.operations.add.resultMap,
        data = {},
        item = {};
      if (
        babelHelpers.typeof(this._resolveObjectPath(map.item, response)) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        data = this._resolveObjectPath(map.item, response);
      }
      item.type = map.defaultGizmoType;
      for (var prop in map.gizmo) {
        item[prop] = this._resolveObjectPath(map.gizmo[prop], data);
      }
      if (
        babelHelpers.typeof(item.url) ===
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0)) &&
        babelHelpers.typeof(item.source) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0))
      ) {
        item.url = item.source;
      }
      if (
        babelHelpers.typeof(map.gizmo.type) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        item.type = this._resolveObjectPath(map.gizmo.type, data);
      }
      this.$.url.value = item.url;
      this.newAssetConfigure();
    },
    _activePageChanged: function _activePageChanged(newValue, oldValue) {
      if (
        babelHelpers.typeof(newValue) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        this.searching = !1;
        this.updateStyles();
        if (1 === newValue) {
          this.$.appbrowser.resetBrowser();
        } else if (2 === newValue) {
          this.$.gizmobrowser.resetBrowser();
        }
      }
    },
    _haxStorePropertyUpdated: function _haxStorePropertyUpdated(e) {
      if (
        e.detail &&
        babelHelpers.typeof(e.detail.value) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0)) &&
        e.detail.property
      ) {
        this.set(e.detail.property, e.detail.value);
      }
    },
    _activeHaxElementChanged: function _activeHaxElementChanged(
      newValue,
      oldValue
    ) {
      if (
        babelHelpers.typeof(oldValue) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        this.$.preview.advancedForm = !1;
        if (
          babelHelpers.typeof(newValue.tag) ===
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0))
        ) {
          this.resetManager();
        } else {
          this.$.fileupload.set("files", []);
          this.$.dialog.scrollTop = 0;
          this.selectStep("configure");
        }
      }
    },
    insertHaxElement: function insertHaxElement(e) {
      var previewNode = this.$.preview.previewNode,
        element = window.HaxStore.nodeToHaxElement(previewNode);
      element.replace = this.editExistingNode;
      if (
        babelHelpers.typeof(this.activeHaxElement.__type) !==
        ("undefined" === typeof void 0
          ? "undefined"
          : babelHelpers.typeof(void 0))
      ) {
        element.__type = this.activeHaxElement.__type;
      }
      element.replacement = previewNode;
      this.fire("hax-insert-content", element);
      var toast = "New element added!";
      if (this.editExistingNode) {
        toast = "Element updated!";
      }
      window.HaxStore.toast(toast, 2e3);
      this.close();
    },
    resetManager: function resetManager() {
      var activePage =
        0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : 0;
      this.selectStep("select");
      this.activePage = activePage;
      document.body.style.overflow = null;
      this.appList = window.HaxStore.instance.appList;
      this.searching = !1;
      window.HaxStore.write("activeApp", null, this);
      window.dispatchEvent(new Event("resize"));
      this.editExistingNode = !1;
      this.$.url.value = "";
      this.$.fileupload.headers = "";
      this.$.fileupload.method = "";
      this.$.fileupload.target = "";
      this.__allowUpload = !1;
    },
    cancel: function cancel(e) {
      this.close();
    },
    _openedChanged: function _openedChanged(newValue, oldValue) {
      if (oldValue && !newValue) {
        document.body.style.overflow = null;
      } else if (newValue && !oldValue) {
        document.body.style.overflow = "hidden";
      }
    },
    close: function close(e) {
      var normalizedEvent = (0, _polymerDom.dom)(e),
        local = normalizedEvent.localTarget;
      if (
        babelHelpers.typeof(e) ===
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0)) ||
        local === this.$.dialog ||
        local === this.$.closedialog
      ) {
        window.HaxStore.write("activeHaxElement", {}, this);
        this.opened = !1;
        this.resetManager();
      }
    },
    open: function open(e) {
      this.opened = !0;
    },
    newAssetConfigure: function newAssetConfigure() {
      var values = { source: this.$.url.value },
        type = window.HaxStore.guessGizmoType(values),
        haxElements = window.HaxStore.guessGizmo(type, values);
      if (0 < haxElements.length) {
        if (1 === haxElements.length) {
          if (
            babelHelpers.typeof(haxElements[0].tag) !==
            ("undefined" === typeof void 0
              ? "undefined"
              : babelHelpers.typeof(void 0))
          ) {
            window.HaxStore.write("activeHaxElement", haxElements[0], this);
          }
        } else {
          window.HaxStore.instance.haxAppPicker.presentOptions(
            haxElements,
            type,
            "Pick how to present the " + type,
            "gizmo"
          );
        }
      } else {
        window.HaxStore.toast(
          "Sorry, HAX doesn't know how to handle that type of link yet."
        );
      }
    },
    toggleDialog: function toggleDialog() {
      var toggle =
        0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : !0;
      if (this.opened && toggle) {
        this.close();
      } else {
        window.HaxStore.instance.closeAllDrawers(this);
      }
    },
    selectStep: function selectStep(step) {
      if ("configure" == step) {
        this.activeStep = !0;
      } else {
        this.activeStep = !1;
      }
    },
    _activeStepChanged: function _activeStepChanged(newValue, oldValue) {
      if (newValue || !newValue) {
        this.updateStyles();
        window.dispatchEvent(new Event("resize"));
      }
    },
    _resolveObjectPath: function _resolveObjectPath(path, obj) {
      return path.split(".").reduce(function(prev, curr) {
        return prev ? prev[curr] : null;
      }, obj || self);
    }
  });
});