import { LitElement, html, css } from "lit-element/lit-element.js";
import {
  winEventsElement,
  camelCaseToDash,
  wipeSlot
} from "@lrnwebcomponents/utils/utils.js";
import "@lrnwebcomponents/a11y-collapse/lib/a11y-collapse-group.js";
import "@lrnwebcomponents/a11y-collapse/a11y-collapse.js";
import {
  HaxSchematizer,
  HaxElementizer
} from "@lrnwebcomponents/hax-body-behaviors/lib/HAXFields.js";
/**
 * `hax-tray`
 * `The tray / dashboard area which allows for customization of all major settings`
 * @element hax-tray
 */
class HaxTray extends winEventsElement(LitElement) {
  /**
   * Convention we use
   */
  static get tag() {
    return "hax-tray";
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.__winEvents = {
      "hax-store-property-updated": "_haxStorePropertyUpdated"
    };
    this.activeValue = {
      settings: {
        layout: {
          __position: "hax-align-left",
          __scale: 100
        },
        configure: {},
        advanced: {}
      }
    };
    this.collapsed = false;
    this.activeTab = "item-0";
    this.activeSchema = [];
    this.canUndo = true;
    this.canRedo = true;
    this.elementAlign = "right";
    this.activeTagName = "Select an element to configure";
    this.activeTagIcon = "icons:settings";
    this.__setup = false;
    setTimeout(() => {
      import("./hax-tray-button.js");
      import("@polymer/iron-icon/iron-icon.js");
      import("@polymer/iron-icons/iron-icons.js");
      import("@polymer/iron-icons/editor-icons.js");
      import("@polymer/iron-icons/device-icons.js");
      import("@polymer/iron-icons/hardware-icons.js");
      import("@polymer/iron-icons/communication-icons.js");
      import("@polymer/iron-icons/social-icons.js");
      import("@polymer/iron-icons/image-icons.js");
      import("@polymer/iron-icons/av-icons.js");
      import("@polymer/iron-icons/maps-icons.js");
      import("@polymer/iron-icons/places-icons.js");
      import("@lrnwebcomponents/md-extra-icons/md-extra-icons.js");
      import("@lrnwebcomponents/hax-iconset/hax-iconset.js");
      import("@lrnwebcomponents/lrn-icons/lrn-icons.js");
      import("./hax-tray-upload.js");
      import("@lrnwebcomponents/simple-fields/simple-fields.js");
      this.addEventListener(
        "hax-tray-button-click",
        this._processTrayEvent.bind(this)
      );
      import("./hax-gizmo-browser.js");
      import("./hax-app-browser.js");
      import("./hax-blox-browser.js");
      import("./hax-stax-browser.js");
    }, 0);
  }
  /**
   * Store updated, sync.
   */
  _haxStorePropertyUpdated(e) {
    if (
      e.detail &&
      typeof e.detail.value !== typeof undefined &&
      e.detail.property
    ) {
      if (
        e.detail.property === "globalPreferences" ||
        e.detail.property === "activeGizmo" ||
        e.detail.property === "activeNode"
      ) {
        this[e.detail.property] = {};
      }
      this[e.detail.property] = e.detail.value;
    }
  }
  /**
   * LitElement render styles
   */
  static get styles() {
    return [
      css`
        :host {
          font-family: var(--simple-fields-font-family, sans-serif);
          display: block;
          z-index: 1000;
          position: absolute;
          transition: 0.2s all ease-in-out;
          --hax-contextual-action-text-color: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-contextual-action-color: var(
            --simple-colors-default-theme-cyan-7,
            #009dc7
          );
          --hax-contextual-action-hover-color: var(
            --simple-colors-default-theme-cyan-8,
            #007999
          );
          --simple-fields-accent-color: var(
            --simple-colors-default-theme-cyan-8,
            #007999
          );
          --a11y-tabs-focus-color: var(
            --hax-contextual-action-hover-color,
            var(--simple-colors-default-theme-cyan-8, #007999)
          );
        }
        .wrapper {
          color: var(--hax-color-text, black);
          position: fixed;
          top: 0;
          background-color: transparent;
          font-size: 20px;
          width: var(---hax-tray-width, 300px);
          transition: 0.2s all ease-in-out;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        :host([edit-mode]) .wrapper {
          opacity: 1;
          visibility: visible;
          right: 0;
          pointer-events: all;
        }
        #addcollapse {
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-purple-8,
            #8a009b
          );
          --simple-fields-accent-color: var(
            --simple-colors-default-theme-purple-8,
            #8a009b
          );
        }
        #settingscollapse {
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-green-8,
            #00762e
          );
          --simple-fields-accent-color: var(
            --simple-colors-default-theme-green-8,
            #00762e
          );
        }
        #searchapps {
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-cyan-8,
            #007999
          );
          --simple-fields-accent-color: var(
            --simple-colors-default-theme-cyan-8,
            #007999
          );
        }
        #templateslayouts {
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-pink-8,
            #b80042
          );
          --simple-fields-accent-color: var(
            --simple-colors-default-theme-pink-8,
            #b80042
          );
        }
        :host([edit-mode][collapsed]) a11y-collapse-group {
          right: -100vw;
        }
        :host([element-align="left"]) .wrapper {
          left: -1000px;
        }
        :host([element-align="right"]) .wrapper {
          right: -1000px;
        }
        :host([edit-mode][element-align="left"]) .wrapper {
          left: 0;
        }
        :host([edit-mode][element-align="right"]) .wrapper {
          right: 0;
        }
        :host([edit-mode][element-align="left"]) #toggle-tray-size {
          --hax-tray-button-rotate: rotate(-180deg);
        }
        /** default is right so lets support left too */
        :host([edit-mode][element-align="left"][collapsed])
          a11y-collapse-group {
          right: unset;
          left: -100vw;
        }
        :host([edit-mode][element-align="left"]) .ops,
        :host([edit-mode][element-align="left"]) .quick,
        :host([edit-mode][element-align="left"]) .quick-buttons {
          flex-direction: row-reverse;
        }
        :host([element-align="left"]) #toggle-element-align {
          --hax-tray-button-rotate: rotate(-90deg) scaleX(-1) !important;
        }
        :host([element-align="right"]) #toggle-element-align {
          --hax-tray-button-rotate: rotate(90deg) !important;
        }
        hax-tray-button,
        a11y-collapse,
        a11y-collapse-group,
        hax-app-browser,
        hax-gizmo-browser {
          transition: 0.2s all ease-in-out;
          opacity: 1;
          visibility: visible;
        }
        hax-tray-button:not(:defined),
        a11y-collapse:not(:defined),
        a11y-collapse-group:not(:defined),
        hax-app-browser:not(:defined),
        hax-gizmo-browser:not(:defined) {
          opacity: 0;
          visibility: hidden;
        }
        *[hidden] {
          display: none;
        }
        :host([element-align="right"]) a11y-collapse-group {
          margin: 0 -350px 0 0;
          right: 0;
        }
        :host([element-align="left"]) a11y-collapse-group {
          margin: 0 0 0 -350px;
          left: 0;
        }
        :host([edit-mode][element-align="left"]) a11y-collapse-group,
        :host([edit-mode][element-align="right"]) a11y-collapse-group {
          position: absolute;
          margin: 0;
          top: 32;
        }
        a11y-collapse-group {
          position: fixed;
          font-size: 16px;
          margin: 0;
          background-color: var(--simple-colors-default-theme-grey-1, #fff);
        }
        a11y-collapse {
          font-size: 12px;
          font-weight: normal;
          --a11y-tabs-content-padding: 0;
          width: calc(var(---hax-tray-width, 300px) - 2px);
          --a11y-collapse-heading-color: var(
            --simple-colors-default-theme-grey-7,
            #666
          );
          --a11y-collapse-heading-background-color: var(
            --simple-colors-default-theme-grey-2,
            #eee
          );
          --a11y-collapse-padding-top: 0px;
          --a11y-collapse-padding-right: 0px;
          --a11y-collapse-padding-bottom: 0px;
          --a11y-collapse-padding-left: 0px;
          --a11y-collapse-border: 1px solid
            var(--simple-colors-default-theme-grey-3, #dddddd);
          --a11y-collapse-border-between: 1px solid
            var(--simple-colors-default-theme-grey-3, #dddddd);
          transition: all 0.5ms ease-in-out;
          border-left: 3px solid
            var(--simple-colors-default-theme-grey-3, #dddddd);
        }
        a11y-collapse:not([expanded]) div[slot="content"] {
          display: none;
        }
        a11y-collapse div[slot="heading"] {
          cursor: pointer;
          font-size: 16px;
        }
        a11y-collapse:hover {
          --a11y-collapse-heading-color: var(
            --hax-tray-panel-accent,
            var(--simple-colors-default-theme-grey-12, #000)
          );
          --a11y-collapse-heading-background-color: var(
            --hax-tray-panel-accent-text,
            var(--simple-colors-default-theme-grey-1, #fff)
          );
        }
        a11y-collapse:hover {
          border-left: 3px solid
            var(
              --hax-tray-panel-accent,
              var(--hax-contextual-action-hover-color)
            );
        }
        a11y-collapse[expanded],
        a11y-collapse[expanded]:hover {
          --a11y-collapse-heading-color: var(
            --hax-tray-panel-accent,
            var(--hax-contextual-action-hover-color)
          );
          --a11y-collapse-heading-background-color: var(
            --hax-tray-panel-accent-text,
            var(--simple-colors-default-theme-grey-1)
          );
        }
        a11y-collapse[disabled] {
          --a11y-collapse-heading-color: var(
            --simple-colors-default-theme-grey-7,
            #666
          ) !important;
          --a11y-collapse-heading-background-color: var(
            --simple-colors-default-theme-grey-2,
            #eee
          ) !important;
          cursor: not-allowed;
        }
        a11y-collapse[disabled] div[slot="heading"] {
          cursor: not-allowed !important;
          opacity: 0.6;
        }
        #settingscollapse div[slot="content"] {
          padding: 0;
          margin: 0;
        }
        a11y-collapse[expanded] div[slot="content"] {
          min-height: 300px;
          max-height: 70vh;
          overflow: auto;
        }
        iron-icon {
          margin-right: 8px;
        }
        .quick-buttons {
          width: var(---hax-tray-width, 300px);
          display: flex;
          color: var(--simple-colors-default-theme-grey-12, #000);
          background-color: var(--simple-colors-default-theme-grey-4, #bbb);
          justify-content: space-between;
          transition: all 0.5ms ease-in-out;
        }
        .quick-buttons hax-tray-button {
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-cyan-8,
            #007999
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
        }
        #button,
        .quick-buttons #haxsavebutton {
          --hax-quick-button-accent: var(
            --simple-colors-default-theme-cyan-8,
            #007999
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-cyan-7,
            #009dc7
          );
          --hax-quick-button-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
        }
        .quick-buttons #haxcancelbutton {
          --hax-quick-button-accent: var(
            --simple-colors-default-theme-red-8,
            #ac0000
          );
          --hax-tray-panel-accent: var(
            --simple-colors-default-theme-red-7,
            #ee0000
          );
          --hax-quick-button-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
          --hax-tray-panel-accent-text: var(
            --simple-colors-default-theme-grey-1,
            #fff
          );
        }
        .quick-buttons .ops {
          display: flex;
          justify-content: flex-start;
        }
        .quick-buttons .quick {
          display: flex;
          justify-content: flex-end;
        }
        div[slot="heading"] {
          margin: 0;
          padding: 10px;
        }
        :host([element-align="right"]) #button {
          right: 0;
        }
        :host([element-align="left"]) #button {
          left: 0;
        }

        #button {
          position: fixed;
          top: 0;
          visibility: visible;
          z-index: 1000;
          margin: 0;
        }
        :host([edit-mode]) #button {
          visibility: hidden;
          opacity: 0;
        }
        #button:hover {
          opacity: 1;
        }
        .active-op-name {
          display: inline-flex;
          vertical-align: text-bottom;
          padding: 4px 2px;
          max-width: 60px;
          font-size: 11px;
          overflow: hidden;
          text-align: center;
          color: white;
        }
        /** This is mobile layout for controls */
        @media screen and (max-width: 800px) {
          .ops,
          .quick,
          .quick-buttons {
            flex-direction: row-reverse;
          }
          .wrapper {
            top: 0;
            left: 0;
            right: 0;
            margin: 0 !important;
          }
          .quick-buttons {
            position: relative;
            z-index: 1;
          }
          #toggle-element-align {
            display: none;
          }
          #toggle-tray-size {
            --hax-tray-button-rotate: rotate(-90deg) !important;
          }
          :host([edit-mode][collapsed]) a11y-collapse-group {
            top: -200vh;
            left: unset !important;
            right: unset !important;
          }
        }
        @media screen and (max-width: 600px) {
          :host([edit-mode]) .hide-small {
            display: none;
          }
        }
      `
    ];
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      ${this.hidePanelOps
        ? ``
        : html`
            <hax-tray-button
              voice-command="edit page"
              .data-opened="${this.editMode}"
              @click="${this._clickEditButton}"
              icon="create"
              id="button"
              label="${this.__tipText}"
            ></hax-tray-button>
          `}
      <div class="wrapper">
        <div class="quick-buttons">
          <div class="ops">
            ${this.hidePanelOps
              ? ``
              : html`
                  <hax-tray-button
                    mini
                    @click="${this._clickSaveButton}"
                    icon="save"
                    id="haxsavebutton"
                    label="${this.__tipText}"
                    event-name="save"
                    voice-command="save (content)(page)"
                    color-meaning
                  ></hax-tray-button>
                  <hax-tray-button
                    mini
                    icon="cancel"
                    id="haxcancelbutton"
                    label="Cancel"
                    event-name="cancel"
                    voice-command="cancel"
                    color-meaning
                  ></hax-tray-button>
                `}
            <hax-tray-button
              mini
              voice-command="toggle menu"
              id="toggle-tray-size"
              event-name="toggle-tray-size"
              icon="${this.traySizeIcon}"
              label="${this.traySizeText}"
            ></hax-tray-button>
            <hax-tray-button
              mini
              voice-command="toggle alignment"
              id="toggle-element-align"
              event-name="toggle-element-align"
              icon="image:photo-size-select-small"
              label="${this.menuAlignName}"
            ></hax-tray-button>
          </div>
          <div class="quick">
            <slot name="tray-buttons-pre"></slot>
            <hax-tray-button
              mini
              event-name="open-export-dialog"
              icon="code"
              label="View page source"
              voice-command="view (page) source"
            ></hax-tray-button>
            <hax-tray-button
              mini
              icon="icons:undo"
              hidden
              ?disabled="${!this.canUndo}"
              label="Undo previous action"
              event-name="undo"
              voice-command="undo"
              class="hide-small"
            ></hax-tray-button>
            <hax-tray-button
              mini
              icon="icons:redo"
              hidden
              ?disabled="${!this.canRedo}"
              label="Redo previous action"
              event-name="redo"
              voice-command="redo"
              class="hide-small"
            ></hax-tray-button>
            <hax-tray-button
              mini
              ?hidden="${this.hidePreferencesButton}"
              event-name="open-preferences-dialog"
              icon="settings"
              label="Advanced settings"
              voice-command="open preferences"
            ></hax-tray-button>
          </div>
        </div>
        <a11y-collapse-group accordion>
          <slot name="tray-collapse-pre"></slot>
          <a11y-collapse
            id="addcollapse"
            accordion
            @expand="${this._gizmoBrowserRefresh}"
          >
            <div slot="heading">
              <iron-icon icon="icons:add"></iron-icon> Add Content
            </div>
            <div slot="content">
              <hax-tray-upload></hax-tray-upload>
              <hax-gizmo-browser id="gizmobrowser"></hax-gizmo-browser>
            </div>
          </a11y-collapse>
          <a11y-collapse id="settingscollapse" accordion>
            <div slot="heading">
              <iron-icon icon="${this.activeTagIcon}"></iron-icon> ${this
                .activeTagName}
            </div>
            <div slot="content">
              <simple-fields
                id="settingsform"
                .schematizer="${HaxSchematizer}"
                .elementizer="${HaxElementizer}"
              >
              </simple-fields>
            </div>
          </a11y-collapse>
          <a11y-collapse
            id="searchapps"
            accordion
            @expand="${this._appBrowserRefresh}"
          >
            <div slot="heading">
              <iron-icon icon="icons:search"></iron-icon> Search
            </div>
            <div slot="content">
              <hax-app-browser id="appbrowser"></hax-app-browser>
            </div>
          </a11y-collapse>
          <a11y-collapse
            id="templateslayouts"
            accordion
            @expand="${this._refreshLists}"
          >
            <div slot="heading">
              <iron-icon icon="hax:templates"></iron-icon>Templates & Layouts
            </div>
            <div slot="content">
              <hax-blox-browser id="bloxbrowser"></hax-blox-browser>
              <hax-stax-browser id="staxbrowser"></hax-stax-browser>
            </div>
          </a11y-collapse>
          <slot name="tray-collapse-post"></slot>
        </a11y-collapse-group>
      </div>
    `;
  }
  __simpleFieldsClick(e) {
    try {
      this.activeTab = this.shadowRoot
        .querySelector("#settingsform")
        .shadowRoot.querySelector("simple-fields").activeTab;
    } catch (e) {
      // in case it missed somehow like w/ an incredibly slow repaints
      this.activeTab = "item-0";
    }
  }
  /**
   * Handlers to refresh contents on click
   */
  _gizmoBrowserRefresh(e) {
    setTimeout(() => {
      if (this.shadowRoot.querySelector("#gizmobrowser")) {
        this.shadowRoot.querySelector("#gizmobrowser").resetBrowser();
      }
    }, 0);
  }
  _appBrowserRefresh(e) {
    if (this.shadowRoot.querySelector("#appbrowser")) {
      this.shadowRoot.querySelector("#appbrowser").resetBrowser();
    }
  }
  _refreshLists(e) {
    this.shadowRoot.querySelector("#bloxbrowser").bloxList = [
      ...window.HaxStore.instance.bloxList
    ];
    this.shadowRoot.querySelector("#staxbrowser").staxList = [
      ...window.HaxStore.instance.staxList
    ];
  }
  /**
   * Process event for simple content inserts.
   */
  _processTrayEvent(e) {
    let detail = e.detail;
    // support a simple insert event to bubble up or everything else
    switch (detail.eventName) {
      case "search-selected":
        this.dispatchEvent(
          new CustomEvent("hax-search-source-updated", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: detail.index
          })
        );
        break;
      case "insert-stax":
        this.dispatchEvent(
          new CustomEvent("hax-insert-content-array", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: e.path[0].stax
          })
        );
        break;
      case "insert-blox":
        let content = "";
        for (var i = 0; i < e.path[0].blox.length; i++) {
          let node = window.HaxStore.haxElementToNode(
            e.path[0].blox[i].tag,
            e.path[0].blox[i].content,
            e.path[0].blox[i].properties
          );
          content += window.HaxStore.nodeToContent(node);
        }
        // generate a hax element
        let blox = {
          tag: "grid-plate",
          properties: {
            layout: e.path[0].layout
          },
          content: content
        };
        this.dispatchEvent(
          new CustomEvent("hax-insert-content", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: blox
          })
        );
        break;
      case "insert-tag":
        let gizmo = {
          tag: detail.value
        };
        let properties = JSON.parse(e.path[0].getAttribute("event-properties"));
        let innerContent = e.path[0].getAttribute("event-content");
        if (properties == null) {
          properties = {};
        }
        if (innerContent == null) {
          innerContent = "";
        }
        // most likely empty values but just to be safe
        let element = window.HaxStore.haxElementPrototype(
          gizmo,
          properties,
          innerContent
        );
        this.dispatchEvent(
          new CustomEvent("hax-insert-content", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: element
          })
        );
        break;
      case "open-preferences-dialog":
        window.HaxStore.write(
          "openDrawer",
          window.HaxStore.instance.haxPreferences,
          this
        );
        break;
      case "toggle-element-align":
        this.elementAlign = this.elementAlign === "right" ? "left" : "right";
        break;
      case "toggle-tray-size":
        this.collapsed = !this.collapsed;
        break;
      case "open-export-dialog":
        window.HaxStore.write(
          "openDrawer",
          window.HaxStore.instance.haxExport,
          this
        );
        break;
      case "undo":
        document.execCommand("undo");
        break;
      case "redo":
        document.execCommand("redo");
        break;
      case "cancel":
        window.HaxStore.write("editMode", false, this);
        this.dispatchEvent(
          new CustomEvent("hax-cancel", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: detail
          })
        );
        break;
    }
  }
  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      ...super.properties,
      __tipText: {
        type: String
      },
      menuAlignName: {
        type: String
      },
      offsetMargin: {
        type: String
      },
      collapsed: {
        type: Boolean,
        reflect: true
      },
      traySizeIcon: {
        type: String
      },
      traySizeText: {
        type: String
      },
      /**
       * Form values for active node
       */
      activeValue: {
        type: Object
      },
      /**
       * Form schema for active node
       */
      activeSchema: {
        type: Object
      },
      /**
       * Alignment of the initial edit button
       */
      elementAlign: {
        type: String,
        reflect: true,
        attribute: "element-align"
      },
      /**
       * Light variant for save button
       */
      light: {
        type: Boolean,
        reflect: true
      },
      /**
       * If we can currently undo based on stack position
       */
      canUndo: {
        type: Boolean,
        attribute: "can-undo"
      },
      /**
       * If we can currently redo based on stack position
       */
      canRedo: {
        type: Boolean,
        attribute: "can-redo"
      },
      /**
       * If we're "dirty" meaning stackPosition and savePosition out of sync
       */
      isDirty: {
        type: Boolean,
        attribute: "is-dirty"
      },
      /**
       * Showing preferences area.
       */
      hidePreferencesButton: {
        type: Boolean,
        reflect: true,
        attribute: "hide-preferences-button"
      },
      /**
       * Showing button area at all a well as internal
       * state managing buttons like cancel and save
       */
      hidePanelOps: {
        type: Boolean,
        reflect: true,
        attribute: "hide-panel-ops"
      },
      /**
       * Global preferences for HAX overall
       */
      globalPreferences: {
        type: Object
      },
      /**
       * Global active node so we know if we need to disable contextual settings
       */
      activeNode: {
        type: Object
      },
      /**
       * Tag name / what to display based on active element
       */
      activeTagIcon: {
        type: String
      },
      activeTagName: {
        type: String
      },
      activeGizmo: {
        type: Object
      },
      /**
       * State of the panel
       */
      editMode: {
        type: Boolean,
        reflect: true,
        attribute: "edit-mode"
      }
    };
  }
  /**
   * LitElement ready life cycle
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    if (!this.__setup) {
      setTimeout(() => {
        this.shadowRoot.querySelector(
          ".wrapper"
        ).style.margin = this.offsetMargin;
      }, 1000);
      this.__setup = true;
      this.shadowRoot
        .querySelector("#settingsform")
        .addEventListener("click", this.__simpleFieldsClick.bind(this));
      this.shadowRoot
        .querySelector("#settingsform")
        .addEventListener("value-changed", this.__valueChangedEvent.bind(this));
      // fire an event that this is a core piece of the system
      this.dispatchEvent(
        new CustomEvent("hax-register-core-piece", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            piece: "haxTray",
            object: this
          }
        })
      );
      this.dispatchEvent(
        new CustomEvent("hax-add-voice-command", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            command:
              ":name: (collapse)(open)(expand)(toggle) add content (menu)",
            context: this.shadowRoot.querySelector(
              '#addcollapse div[slot="heading"]'
            ),
            callback: "click"
          }
        })
      );
      this.dispatchEvent(
        new CustomEvent("hax-add-voice-command", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            command:
              ":name: (collapse)(open)(expand)(toggle) element settings (menu)",
            context: this.shadowRoot.querySelector(
              '#settingscollapse div[slot="heading"]'
            ),
            callback: "click"
          }
        })
      );
      this.dispatchEvent(
        new CustomEvent("hax-add-voice-command", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            command: ":name: (collapse)(open)(expand)(toggle) search (menu)",
            context: this.shadowRoot.querySelector(
              '#searchapps div[slot="heading"]'
            ),
            callback: "click"
          }
        })
      );
      this.dispatchEvent(
        new CustomEvent("hax-add-voice-command", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            command: ":name: (collapse)(open)(expand)(toggle) templates (menu)",
            context: this.shadowRoot.querySelector(
              '#templateslayouts div[slot="heading"]'
            ),
            callback: "click"
          }
        })
      );
    }
  }
  /**
   * LitElement properties changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "editMode") {
        this._editModeChanged(this[propName], oldValue);
      }
      if (propName == "offsetMargin") {
        setTimeout(() => {
          this.shadowRoot.querySelector(
            ".wrapper"
          ).style.margin = this.offsetMargin;
        }, 0);
      }
      // collaped menu state change
      if (propName == "collapsed") {
        if (this[propName]) {
          this.traySizeIcon = "hax:hax:arrow-expand-left";
          this.traySizeText = "Expand";
          // accessibility to disable entering panels that are not visible
          this.shadowRoot
            .querySelector("a11y-collapse-group")
            .setAttribute("aria-disabled", "true");
          this.shadowRoot
            .querySelector("a11y-collapse-group")
            .setAttribute("tabindex", "-1");
          this._editModeChanged(this.editMode);
        } else {
          this.traySizeIcon = "hax:hax:arrow-expand-right";
          this.traySizeText = "Collapse";
          // a11y clean up to match state
          this.shadowRoot
            .querySelector("a11y-collapse-group")
            .removeAttribute("aria-disabled");
          this.shadowRoot
            .querySelector("a11y-collapse-group")
            .removeAttribute("tabindex");
        }
      }
      //
      if (propName == "elementAlign") {
        if (this[propName] == "left") {
          this.menuAlignName = "Right align menu";
        } else {
          this.menuAlignName = "Left align menu";
        }
      }
      // active Gizmo changed
      if (propName == "activeGizmo") {
        if (this.activeGizmo) {
          this.activeTagName = this.activeGizmo.title + " Settings";
          this.activeTagIcon = this.activeGizmo.icon;
        } else {
          this.activeTagName = "Select an element";
          this.activeTagIcon = "icons:settings";
          if (!this.shadowRoot.querySelector("#addcollapse").expanded) {
            this.shadowRoot
              .querySelector('#addcollapse div[slot="heading"]')
              .click();
          }
        }
      }
      // active node changed
      if (propName == "activeNode") {
        if (this.activeNode && this.activeNode.tagName) {
          this.shadowRoot.querySelector("#settingscollapse").disabled = false;
          if (!this.shadowRoot.querySelector("#settingscollapse").expanded) {
            this.shadowRoot
              .querySelector('#settingscollapse div[slot="heading"]')
              .click();
          }
          // process fields
          this.activeHaxElement = window.HaxStore.nodeToHaxElement(
            this.activeNode,
            null
          );
          this._setupForm();
        } else {
          this.activeTagName = "Select an element to configure";
          this.activeTagIcon = "icons:settings";
          this.shadowRoot.querySelector("#settingscollapse").disabled = true;
          if (!this.shadowRoot.querySelector("#addcollapse").expanded) {
            this.shadowRoot
              .querySelector('#addcollapse div[slot="heading"]')
              .click();
          }
        }
      }
    });
  }
  /**
   * When the preview node is updated, pull schema associated with it
   */
  _setupForm() {
    let activeNode = this.activeNode;
    this.activeValue = {
      settings: {
        layout: {
          __position: "hax-align-left",
          __scale: 100
        },
        configure: {},
        advanced: {}
      }
    };
    this.shadowRoot.querySelector("#settingsform").fields = [];
    this.shadowRoot.querySelector("#settingsform").value = {};
    // see if we can get schema off of this.
    if (
      activeNode.tagName &&
      window.HaxStore.instance.elementList[activeNode.tagName.toLowerCase()]
    ) {
      let props =
        window.HaxStore.instance.elementList[activeNode.tagName.toLowerCase()];
      // generate a human name for this
      if (typeof props.gizmo.title === typeof undefined) {
        this.humanName = activeNode.tagName.replace("-", " ").toLowerCase();
      } else {
        this.humanName = props.gizmo.title;
      }
      // first, allow element properties to dictate defaults
      for (var property in this.activeHaxElement.properties) {
        props.settings.configure.forEach(el => {
          if (el.property === property) {
            this.activeValue.settings.configure[
              property
            ] = this.activeHaxElement.properties[property];
          }
          if (el.attribute === property) {
            this.activeValue.settings.configure[
              property
            ] = this.activeHaxElement.properties[property];
          }
          if (el.slot === property) {
            this.activeValue.settings.configure[
              property
            ] = this.activeHaxElement.properties[property];
          }
        });
        props.settings.advanced.forEach(el => {
          if (el.property === property) {
            this.activeValue.settings.advanced[
              property
            ] = this.activeHaxElement.properties[property];
          }
          if (el.attribute === property) {
            this.activeValue.settings.advanced[
              property
            ] = this.activeHaxElement.properties[property];
          }
          if (el.slot === property) {
            this.activeValue.settings.advanced[
              property
            ] = this.activeHaxElement.properties[property];
          }
        });
      }
      // now we need to parse through for slotted items
      // build a fake tree, then walk the configuration / advanced settings
      // looking for slot types
      let tmp = document.createElement("div");
      tmp.innerHTML = this.activeHaxElement.content;
      // step through each key
      tmp.childNodes.forEach(el => {
        // ensure we have a dom node and it isnt empty
        if (el.nodeType === 1 && el.innerHTML !== typeof undefined) {
          // walk props looking for a match
          props.settings.configure.forEach(prop => {
            // if we have a slot to match in the property AND it matches the attr
            if (prop.slot === el.getAttribute("slot")) {
              this.activeValue.settings.configure[prop.slot] = el.innerHTML;
            }
            // no slot and it didnt match so it has no slot
            else if (
              prop.slot == "" &&
              (el.getAttribute("slot") == null ||
                el.getAttribute("slot") == "null")
            ) {
              this.activeValue.settings.configure[prop.slot] = el.innerHTML;
            }
          });
          // now advanced
          props.settings.advanced.forEach(prop => {
            if (prop.slot === el.getAttribute("slot")) {
              this.activeValue.settings.advanced[prop.slot] = el.innerHTML;
            }
            // no slot and it didnt match so it has no slot
            else if (
              prop.slot == "" &&
              (el.getAttribute("slot") == null ||
                el.getAttribute("slot") == "null")
            ) {
              this.activeValue.settings.advanced[prop.slot] = el.innerHTML;
            }
          });
        }
      });
      // then we need to work on the layout piece
      if (activeNode.style.width != "") {
        this.activeValue.settings.layout.__scale = activeNode.style.width.replace(
          "%",
          ""
        );
      } else {
        this.activeValue.settings.layout.__scale = 100;
      }
      if (
        activeNode.style.display == "block" &&
        activeNode.style.margin == "0px auto" &&
        activeNode.style.float == "right"
      ) {
        this.activeValue.settings.layout.__position = "hax-align-right";
      } else if (
        activeNode.style.display == "block" &&
        activeNode.style.margin == "0px auto"
      ) {
        this.activeValue.settings.layout.__position = "hax-align-center";
      } else {
        this.activeValue.settings.layout.__position = "hax-align-left";
      }
      this.activeHaxElement.properties.__scale = this.activeValue.settings.layout.__scale;
      this.activeHaxElement.properties.__position = this.activeValue.settings.layout.__position;
      // tabs / deep objects require us to preview the value w/ the path correctly
      props.settings.configure.forEach((val, key) => {
        if (props.settings.configure[key].attribute) {
          props.settings.configure[key].property =
            props.settings.configure[key].attribute;
        }
        if (props.settings.configure[key].slot) {
          props.settings.configure[key].property =
            props.settings.configure[key].slot;
        }
      });
      props.settings.advanced.forEach((val, key) => {
        if (props.settings.advanced[key].attribute) {
          props.settings.advanced[key].property =
            props.settings.advanced[key].attribute;
        }
        if (props.settings.advanced[key].slot) {
          props.settings.advanced[key].property =
            props.settings.advanced[key].slot;
        }
      });
      props.settings.layout = [];
      // test if this element can be aligned
      if (props.canPosition) {
        props.settings.layout.push({
          property: "__position",
          title: "Alignment",
          description: "Align content relative to other content",
          inputMethod: "select",
          value: this.activeValue.settings.layout.__position,
          options: {
            "hax-align-left": "Left",
            "hax-align-center": "Center",
            "hax-align-right": "Right"
          }
        });
      }
      // test if this element can be scaled
      if (props.canScale) {
        props.settings.layout.push({
          property: "__scale",
          title: "Width",
          description: "Scale and resize content",
          inputMethod: "slider",
          value: this.activeValue.settings.layout.__scale,
          min: props.canScale.min ? props.canScale.min : 12.5,
          max: props.canScale.max ? props.canScale.max : 100,
          step: props.canScale.step ? props.canScale.step : 12.5
        });
      }

      // establish tabs container
      this.activeSchema = [
        {
          property: "settings",
          inputMethod: "tabs",
          properties: []
        }
      ];
      // array of things to forcibly disable
      let disable = [];
      // see if we have any layout settings or disable
      if (props.settings.layout.length > 0) {
        this.activeSchema[0].properties.push({
          property: "layout",
          title: "Layout",
          description: "Position the element relative to other items",
          properties: props.settings.layout
        });
      } else {
        this.activeSchema[0].properties.push({
          property: "layout",
          title: "Layout",
          description: "Position the element relative to other items",
          disabled: true
        });
      }
      // see if we have any configure settings or disable
      if (props.settings.configure.length > 0) {
        this.activeSchema[0].properties.push({
          property: "configure",
          title: "Configure",
          description: "Configure the element",
          properties: props.settings.configure
        });
      } else {
        this.activeSchema[0].properties.push({
          property: "configure",
          title: "Configure",
          description: "Configure the element",
          disabled: true
        });
      }
      // see if we have any configure settings or disable
      if (props.settings.advanced.length > 0) {
        this.activeSchema[0].properties.push({
          property: "advanced",
          title: "Advanced",
          description: "Advanced element settings",
          properties: props.settings.advanced
        });
      } else {
        this.activeSchema[0].properties.push({
          property: "advanced",
          title: "Advanced",
          description: "Advanced element settings",
          disabled: true
        });
      }
      this.__activePropSchema = props;
      this.shadowRoot.querySelector("#settingsform").fields = [
        ...this.activeSchema
      ];
      this.shadowRoot.querySelector("#settingsform").value = {
        ...this.activeValue
      };
    }
  }
  /**
   * Convert an object to an array
   */
  _toArray(obj) {
    if (obj == null) {
      return [];
    }
    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
  /**
   * Notice change in values from below
   */
  __valueChangedEvent(e) {
    if (this.editMode && e.detail.value && e.detail.value.settings) {
      let settings = e.detail.value.settings;
      let settingsKeys = {
        advanced: "advanced",
        configure: "configure",
        layout: "layout"
      };
      var setAhead;
      for (let key in settingsKeys) {
        for (let prop in settings[key]) {
          setAhead = false;
          if (settings[key][prop] != null && !settings[key][prop].readOnly) {
            // prefix is a special attribute and must be handled this way
            if (prop === "prefix" && settings[key][prop] != "") {
              this.activeNode.setAttribute("prefix", settings[key][prop]);
              setAhead = true;
            }
            // this is a special internal held "property" for layout stuff
            else if (key === "layout" && prop === "__position") {
              setAhead = true;
              this.dispatchEvent(
                new CustomEvent("hax-context-item-selected", {
                  bubbles: true,
                  composed: true,
                  detail: {
                    eventName: settings[key][prop],
                    value: settings[key][prop]
                  }
                })
              );
            }
            // this is a special internal held "property" for layout stuff
            else if (key === "layout" && prop === "__scale") {
              setAhead = true;
              this.dispatchEvent(
                new CustomEvent("hax-context-item-selected", {
                  bubbles: true,
                  composed: true,
                  detail: {
                    eventName: "hax-size-change",
                    value: settings[key][prop]
                  }
                })
              );
            }
            // try and set the pop directly if it is a prop already set
            // check on prototype, then in properties object if it has one
            // then by seeing if we have an array / object
            else if (
              this.activeNode.hasOwnProperty(prop) ||
              (this.activeNode.properties &&
                this.activeNode.properties.hasOwnProperty(prop)) ||
              (settings[key][prop] != null &&
                settings[key][prop].constructor === Array) ||
              (settings[key][prop] != null &&
                settings[key][prop].constructor === Object)
            ) {
              try {
                if (settings[key][prop].constructor === Array) {
                  this.activeNode[prop] = [...settings[key][prop]];
                } else if (settings[key][prop].constructor === Object) {
                  this.activeNode[prop] = { ...settings[key][prop] };
                } else {
                  this.activeNode[prop] = settings[key][prop];
                }
                setAhead = true;
              } catch (e) {
                console.warn(e);
                setAhead = false;
              }
            } else {
              // need to specifically walk through slots if there is anything
              // that says it has to come from a slot
              for (var propTmp in this.__activePropSchema.settings[key]) {
                if (
                  this.__activePropSchema.settings[key][propTmp].slot == prop
                ) {
                  let slotTag = "span";
                  if (
                    this.__activePropSchema.settings[key][propTmp].slotWrapper
                  ) {
                    slotTag = this.__activePropSchema.settings[key][propTmp]
                      .slotWrapper;
                  } else if (
                    this.activeNode.tagName.toLowerCase() === "code-editor"
                  ) {
                    slotTag = "template";
                  }
                  var tmpel = document.createElement(slotTag);
                  if (
                    this.__activePropSchema.settings[key][propTmp]
                      .slotAttributes
                  ) {
                    for (var attr in this.__activePropSchema.settings[key][
                      propTmp
                    ].slotAttributes) {
                      tmpel.setAttribute(
                        attr,
                        this.__activePropSchema.settings[key][propTmp]
                          .slotAttributes[attr]
                      );
                    }
                  }
                  // support unnamed slots
                  if (
                    this.__activePropSchema.settings[key][propTmp].slot !== ""
                  ) {
                    tmpel.slot = this.__activePropSchema.settings[key][
                      propTmp
                    ].slot;
                  }
                  tmpel.innerHTML = settings[key][prop];
                  const cloneIt = tmpel.cloneNode(true);
                  setAhead = true;
                  // inject the slotted content but use text nodes if this is a text element
                  if (window.HaxStore.instance.isTextElement(this.activeNode)) {
                    this.activeNode.innerHTML = tmpel.innerHTML;
                  } else {
                    // wipe just the slot in question
                    wipeSlot(
                      this.activeNode,
                      this.__activePropSchema.settings[key][propTmp].slot
                    );
                    this.activeNode.appendChild(cloneIt);
                  }
                }
              }
            }
            // this will get reached often but tough to know if we had a slot
            if (!setAhead) {
              try {
                // silly but this is the spec way to do a boolean
                if (settings[key][prop] === true) {
                  this.activeNode.setAttribute(
                    camelCaseToDash(prop),
                    camelCaseToDash(prop)
                  );
                } else if (
                  settings[key][prop] === false ||
                  settings[key][prop] === ""
                ) {
                  this.activeNode.removeAttribute(camelCaseToDash(prop));
                } else {
                  this.activeNode.setAttribute(
                    camelCaseToDash(prop),
                    settings[key][prop]
                  );
                }
              } catch (e) {
                console.warn(e);
                console.warn(prop, settings[key][prop]);
              }
            }
          } else {
            this.activeNode.removeAttribute(camelCaseToDash(prop));
          }
        }
      }
    }
  }

  /**
   * _editModeChanged
   */
  _editModeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined && newValue) {
      this.__tipText = "Save content";
      this.shadowRoot.querySelector("#button").icon = "save";
    } else {
      this.__tipText = "Edit content";
      this.shadowRoot.querySelector("#button").icon = "create";
    }
  }
  /**
   * Edit clicked, activate
   */
  _clickEditButton(e) {
    this.editMode = true;
    window.HaxStore.write("editMode", true, this);
    window.dispatchEvent(
      new CustomEvent("simple-modal-hide", {
        bubbles: true,
        cancelable: true,
        detail: {}
      })
    );
  }

  /**
   * Toggle the drawer when the button is clicked.
   */
  _clickSaveButton(e) {
    this.editMode = false;
    window.HaxStore.write("editMode", false, this);
    this.dispatchEvent(
      new CustomEvent("hax-save", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: e.detail
      })
    );
    window.dispatchEvent(
      new CustomEvent("simple-modal-hide", {
        bubbles: true,
        cancelable: true,
        detail: {}
      })
    );
  }
}

window.customElements.define(HaxTray.tag, HaxTray);
export { HaxTray };
