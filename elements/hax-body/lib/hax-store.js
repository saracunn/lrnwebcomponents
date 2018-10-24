import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/paper-toast/paper-toast.js";
import "media-behaviors/media-behaviors.js";
import "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "./hax-app.js";
import "./hax-stax.js";
import "./hax-stax-browser.js";
import "./hax-blox.js";
import "./hax-blox-browser.js";

Polymer.HaxStore = Polymer({
  _template: html`
    <style>
      :host {
        display: none;
      }
    </style>
    <slot></slot>
    <iron-ajax id="appstore" url="[[appStore.url]]" params="[[appStore.params]]" method="GET" content-type="application/json" handle-as="json" last-response="{{__appStoreData}}"></iron-ajax>
`,

  is: "hax-store",

  behaviors: [MediaBehaviors.Video, HAXBehaviors.PropertiesBehaviors],

  observers: ["_loadAppStoreData(__appStoreData, haxAutoloader)"],

  properties: {
    /**
     * Hax app picker element.
     */
    haxAppPicker: {
      type: Object
    },
    /**
     * Hax stax picker element.
     */
    haxStaxPicker: {
      type: Object
    },
    /**
     * Hax manager element.
     */
    haxManager: {
      type: Object
    },
    /**
     * Hax autoloader element.
     */
    haxAutoloader: {
      type: Object
    },
    /**
     * A list of all haxBodies that exist
     */
    haxBodies: {
      type: Array,
      value: []
    },
    /**
     * An active place holder item reference. This is used
     * for inline drag and drop event detection so that we
     * know what element replace in context.
     */
    activePlaceHolder: {
      type: Object,
      value: null
    },
    /**
     * The hax-body that is currently active.
     */
    activeHaxBody: {
      type: Object
    },
    /**
     * Possible appStore endpoint for loading in things dynamically.
     */
    appStore: {
      type: Object,
      observer: "_appStoreChanged"
    },
    /**
     * HAX Toast message.
     */
    haxToast: {
      type: Object
    },
    /**
     * Hax panel element.
     */
    haxPanel: {
      type: Object
    },
    /**
     * Hax export dialog element.
     */
    haxExport: {
      type: Object
    },
    /**
     * Hax preferences dialog element.
     */
    haxPreferences: {
      type: Object
    },
    /**
     * Active HAX Element if we have one we are working on.
     */
    activeHaxElement: {
      type: Object
    },
    /**
     * Active Node.
     */
    activeNode: {
      type: Object
    },
    /**
     * Active container Node, 2nd highest parent of activeNode.
     */
    activeContainerNode: {
      type: Object
    },
    /**
     * editMode
     */
    editMode: {
      type: Boolean,
      value: false
    },
    /**
     * Boolean for if this instance has backends that support uploading
     */
    canSupportUploads: {
      type: Boolean,
      value: false
    },
    /**
     * skip the exit trap to prevent losing data
     */
    skipExitTrap: {
      type: Boolean,
      value: false
    },
    /**
     * Default settings that can be overridden as needed
     */
    defaults: {
      type: Object,
      value: {
        image: {
          src: "stock.jpg",
          alt: "A beachfront deep in the heart of Alaska."
        },
        iframe: {
          src: "https://www.wikipedia.org/"
        }
      }
    },
    /**
     * Available gizmos.
     */
    gizmoList: {
      type: Array,
      value: []
    },
    /**
     * Available elements keyed by tagName and with
     * their haxProperties centrally registered.
     */
    elementList: {
      type: Object,
      value: {}
    },
    /**
     * Available apps of things supplying media / content.
     */
    appList: {
      type: Array,
      value: []
    },
    /**
     * Available hax stax which are just re-usable templates
     */
    staxList: {
      type: Array,
      value: []
    },
    /**
     * Available hax blox which are grid plate / layout elements
     */
    bloxList: {
      type: Array,
      value: []
    },
    /**
     * Global preferences that HAX can write to and
     * other elements can use to go off of.
     */
    globalPreferences: {
      type: Object,
      value: {}
    },
    /**
     * Globally active app, used for brokering communications
     */
    activeApp: {
      type: Object,
      value: {}
    },
    /**
     * Valid tag list, tag only and including primatives for a baseline.
     */
    validTagList: {
      type: Array,
      value: [
        "p",
        "div",
        "ol",
        "ul",
        "li",
        "a",
        "strong",
        "kbd",
        "em",
        "i",
        "b",
        "hr",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "code",
        "figure",
        "img",
        "iframe",
        "video",
        "audio",
        "section",
        "grid-plate",
        "template",
        "webview"
      ]
    },
    /**
     * Gizmo types which can be used to bridge apps to gizmos.
     */
    validGizmoTypes: {
      type: Array,
      value: [
        "data",
        "video",
        "audio",
        "text",
        "link",
        "file",
        "pdf",
        "image",
        "csv",
        "doc",
        "content",
        "text",
        "inline",
        "*"
      ]
    },
    /**
     * Sandboxed environment test
     */
    _isSandboxed: {
      type: Boolean,
      value: function() {
        let test = document.createElement("webview");
        // if this function exists it means that our deploy target
        // is in a sandboxed environment and is not able to run iframe
        // content with any real stability. This is beyond edge case but
        // as this is an incredibly useful tag we want to make sure it
        // can mutate to work in chromium and android environments
        // which support such sandboxing
        if (typeof test.reload === "function") {
          return true;
        }
        return false;
      }
    },
    /**
     * Internal app store data property after request
     */
    __appStoreData: {
      type: Object
    }
  },

  /**
   * If this is a text node or not so we know if the inline context
   * operations are valid.
   */
  isTextElement: function(node) {
    let tag = node.tagName.toLowerCase();
    if (this.validTagList.includes(tag)) {
      if (
        [
          "p",
          "ol",
          "ul",
          "li",
          "a",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "code",
          "figure"
        ].includes(tag)
      ) {
        return true;
      }
    }
    return false;
  },

  /**
   * test for being a valid grid plate, li is here because
   * nested lists make this really complicated
   */
  isGridPlateElement: function(node) {
    let tag = node.tagName.toLowerCase();
    if (this.validTagList.includes(tag)) {
      if (
        [
          "p",
          "ol",
          "ul",
          "li",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "code",
          "figure",
          "grid-plate"
        ].includes(tag)
      ) {
        return true;
      }
    }
    return false;
  },

  /**
   * Notice _appStore changed.
   */
  _appStoreChanged: function(newValue, oldValue) {
    // if we have an endpoint defined, pull it
    if (typeof newValue !== typeof undefined) {
      // support having the request or remote loading
      // depending on the integration type
      if (typeof newValue.apps === typeof undefined) {
        this.$.appstore.generateRequest();
      } else {
        this.__appStoreData = newValue;
      }
    }
  },

  /**
   * Load and attach items from the app store.
   */
  _loadAppStoreData: function(appDataResponse, haxAutoloader) {
    if (typeof appDataResponse !== typeof undefined) {
      // autoload elements
      if (typeof appDataResponse.autoloader !== typeof undefined) {
        for (var i = 0; i < appDataResponse.autoloader.length; i++) {
          let loader = document.createElement(appDataResponse.autoloader[i]);
          Polymer.dom(haxAutoloader).appendChild(loader);
        }
      }
      // load apps automatically
      if (typeof appDataResponse.apps !== typeof undefined) {
        var apps = appDataResponse.apps;
        for (var i = 0; i < apps.length; i++) {
          let app = document.createElement("hax-app");
          app.data = apps[i];
          // see if anything coming across claims to be a backend for adding items
          // and then enable the upload button
          if (typeof apps[i].connection.operations.add !== typeof undefined) {
            Polymer.HaxStore.write("canSupportUploads", true, this);
          }
          Polymer.HaxStore.instance.appendChild(app);
        }
      }
      // load in stax dynamically
      if (typeof appDataResponse.stax !== typeof undefined) {
        var staxs = appDataResponse.stax;
        for (var i = 0; i < staxs.length; i++) {
          let stax = document.createElement("hax-stax");
          stax.data = staxs[i];
          Polymer.HaxStore.instance.appendChild(stax);
        }
      }
      // load in blox dynamically
      if (typeof appDataResponse.blox !== typeof undefined) {
        var bloxs = appDataResponse.blox;
        for (var i = 0; i < bloxs.length; i++) {
          let blox = document.createElement("hax-blox");
          blox.data = bloxs[i];
          Polymer.HaxStore.instance.appendChild(blox);
        }
      }
    }
  },

  /**
   * Detached life cycle
   */
  detached: function() {
    // notice hax property definitions coming from anywhere
    document.body.removeEventListener(
      "hax-register-properties",
      this._haxStoreRegisterProperties.bind(this)
    );
    // app registration can come in automatically from app-stores
    // or through direct definition in the DOM
    document.body.removeEventListener(
      "hax-register-app",
      this._haxStoreRegisterApp.bind(this)
    );
    // register stax which are groupings of haxElements
    document.body.removeEventListener(
      "hax-register-stax",
      this._haxStoreRegisterStax.bind(this)
    );
    // register blox which are grid plate configurations
    // with lots of sane visual defaults
    document.body.removeEventListener(
      "hax-register-blox",
      this._haxStoreRegisterBlox.bind(this)
    );
    // register the pieces of the body of what we call HAX
    // think of this like the core of the system required
    // to do anything like have buttons or state management

    // write data to the store
    document.body.removeEventListener(
      "hax-store-write",
      this._writeHaxStore.bind(this)
    );
    // register the manager panel / modal
    document.body.removeEventListener(
      "hax-register-manager",
      this._haxStoreRegisterManager.bind(this)
    );
    // register the autoloader area for elements
    document.body.removeEventListener(
      "hax-register-autoloader",
      this._haxStoreRegisterAutoloader.bind(this)
    );
    // register a body, kind of a big deal
    document.body.removeEventListener(
      "hax-register-body",
      this._haxStoreRegisterBody.bind(this)
    );
    // register the interaction panel / menu
    document.body.removeEventListener(
      "hax-register-panel",
      this._haxStoreRegisterPanel.bind(this)
    );
    // register the app picker for contextual setting / option
    document.body.removeEventListener(
      "hax-register-app-picker",
      this._haxStoreRegisterAppPicker.bind(this)
    );
    // stax modal
    document.body.removeEventListener(
      "hax-register-stax-picker",
      this._haxStoreRegisterStaxPicker.bind(this)
    );
    // blox modal
    document.body.removeEventListener(
      "hax-register-blox-picker",
      this._haxStoreRegisterBloxPicker.bind(this)
    );
    // preferences modal
    document.body.removeEventListener(
      "hax-register-preferences",
      this._haxStoreRegisterPreferences.bind(this)
    );
    // export modal
    document.body.removeEventListener(
      "hax-register-export",
      this._haxStoreRegisterExport.bind(this)
    );

    // notice content insert and help it along to the body
    document.body.removeEventListener(
      "hax-insert-content",
      this._haxStoreInsertContent.bind(this)
    );
  },

  /**
   * attached.
   */
  attached: function() {
    window.onbeforeunload = function() {
      // ensure we don't leave DURING edit mode
      if (
        !Polymer.HaxStore.instance.skipExitTrap &&
        Polymer.HaxStore.instance.editMode
      ) {
        return "Are you sure you want to leave? Your work will not be saved!";
      }
    };
    // capture events and intercept them globally
    window.addEventListener("keypress", event => {
      const keyName = event.key;
      // if we are editing and enter is pressed see if we should
      // process it or inject a new p tag
      if (
        typeof Polymer.HaxStore.instance.activeContainerNode !==
          typeof undefined &&
        keyName === "Enter" &&
        Polymer.HaxStore.instance.editMode &&
        Polymer.HaxStore.instance.activeNode !== null &&
        Polymer.HaxStore.instance.activeContainerNode ===
          Polymer.HaxStore.instance.activeNode &&
        !Polymer.HaxStore.instance.haxAppPicker.opened
      ) {
        const activeNodeTagName =
          Polymer.HaxStore.instance.activeContainerNode.tagName;
        var selection = window.getSelection();
        const range = selection.getRangeAt(0).cloneRange();
        var tagTest = range.commonAncestorContainer.tagName;
        if (typeof tagTest === typeof undefined) {
          tagTest = range.commonAncestorContainer.parentNode.tagName;
        }
        // test if we want to touch Enter based on tag name and range
        // we ignore Enter for our purposes when in a list
        if (
          ["P", "H1", "H2", "H3", "H4", "H5", "H6"].includes(
            activeNodeTagName
          ) &&
          !["UL", "OL", "LI"].includes(tagTest)
        ) {
          // we need to do goofy stuff for p tags since people
          // will expect to be able to split them mid typing
          if (range.endOffset !== this.activeContainerNode.textContent.length) {
            event.preventDefault();
            // create a cloned range where it's sitting
            range.setStart(selection.focusNode, range.startOffset);
            // generate a completely fake element and insert it so we
            // track it's position as a "split point"
            var frag = document
              .createRange()
              .createContextualFragment("<hax-split-point></hax-split-point>");
            range.insertNode(frag);
            // force this to be a constant since activeNode will
            // change mid operation but we want limit to remain
            // as a pointer to it's position in the DOM
            const limit = Polymer.HaxStore.instance.activeContainerNode;
            var node = Polymer.dom(
              Polymer.HaxStore.instance.activeContainerNode
            ).querySelector("hax-split-point");
            // run a split node function as modified from stackoverflow
            if (node != null) {
              try {
                this.__splitNode(node, limit);
              } catch (e) {}
            }
          } else {
            event.preventDefault();
            Polymer.HaxStore.instance.fire("hax-insert-content", {
              tag: "p",
              content: ""
            });
          }
        }
      }
    });
    this._injectToast();
    // register built in primitive definitions
    this._buildPrimitiveDefinitions();
  },

  /**
   * Magic node splitting function
   */
  __splitNode: function(node, limit) {
    // kick off activeNode so that we drop classes / cruft
    Polymer.HaxStore.write("activeNode", null, this);
    // allow that to have processed...
    setTimeout(() => {
      // find the parent of the item we are splicing
      var parent = limit.parentNode;
      // get the index of this selected text way down below
      var parentOffset = this.__getNodeIndex(parent, limit);
      var doc = node.ownerDocument;
      // make a fake range of these section of the DOM
      var leftRange = doc.createRange();
      // start it at the beginning of the element and run it to
      // just before that place holder we are targeting
      leftRange.setStart(parent, parentOffset);
      leftRange.setEndBefore(node);
      // convert this front portion into a document fragment
      var left = leftRange.extractContents();
      // insert this fragment just before the activeNode.
      // This probably looks weird but effectively we copy the
      // element in these operations and then insert the thing
      // next to itself. The extractContents function generates
      // a node from the part of the previous one as well as
      // deletes what was there from the DOM. This effectively
      // lets us take 1 element and split it into two at the
      // cursor position as triggered by an Enter press. Insane.
      Polymer.dom(this.activeHaxBody).insertBefore(left, limit);
      // remove the place holder
      node.parentNode.removeChild(node);
      // set active back to what it was, technically moved down
      // in the document order because of above
      Polymer.HaxStore.write("activeNode", limit, this);
    }, 100);
  },

  /**
   * Get node index within a parent item so we know
   * how far down the object to look for it's position.
   * This is a helper with no other meaningful purpose.
   */
  __getNodeIndex: function(parent, node) {
    var index = parent.childNodes.length;
    while (index--) {
      if (node === parent.childNodes[index]) {
        break;
      }
    }
    return index;
  },

  /**
   * Created life-cycle to ensure a single global store.
   */
  created: function() {
    // claim the instance spot. This way we can easily
    // be referenced globally
    if (!Polymer.HaxStore.instance) {
      Polymer.HaxStore.instance = this;
    }
    // notice hax property definitions coming from anywhere
    document.body.addEventListener(
      "hax-register-properties",
      this._haxStoreRegisterProperties.bind(this)
    );
    // app registration can come in automatically from app-stores
    // or through direct definition in the DOM
    document.body.addEventListener(
      "hax-register-app",
      this._haxStoreRegisterApp.bind(this)
    );
    // register stax which are groupings of haxElements
    document.body.addEventListener(
      "hax-register-stax",
      this._haxStoreRegisterStax.bind(this)
    );
    // register blox which are grid plate configurations
    // with lots of sane visual defaults
    document.body.addEventListener(
      "hax-register-blox",
      this._haxStoreRegisterBlox.bind(this)
    );
    // register the pieces of the body of what we call HAX
    // think of this like the core of the system required
    // to do anything like have buttons or state management

    // write data to the store
    document.body.addEventListener(
      "hax-store-write",
      this._writeHaxStore.bind(this)
    );
    // register the manager panel / modal
    document.body.addEventListener(
      "hax-register-manager",
      this._haxStoreRegisterManager.bind(this)
    );
    // register the autoloader area for elements
    document.body.addEventListener(
      "hax-register-autoloader",
      this._haxStoreRegisterAutoloader.bind(this)
    );
    // register a body, kind of a big deal
    document.body.addEventListener(
      "hax-register-body",
      this._haxStoreRegisterBody.bind(this)
    );
    // register the interaction panel / menu
    document.body.addEventListener(
      "hax-register-panel",
      this._haxStoreRegisterPanel.bind(this)
    );
    // register the app picker for contextual setting / option
    document.body.addEventListener(
      "hax-register-app-picker",
      this._haxStoreRegisterAppPicker.bind(this)
    );
    // stax modal
    document.body.addEventListener(
      "hax-register-stax-picker",
      this._haxStoreRegisterStaxPicker.bind(this)
    );
    // blox modal
    document.body.addEventListener(
      "hax-register-blox-picker",
      this._haxStoreRegisterBloxPicker.bind(this)
    );
    // preferences modal
    document.body.addEventListener(
      "hax-register-preferences",
      this._haxStoreRegisterPreferences.bind(this)
    );
    // export modal
    document.body.addEventListener(
      "hax-register-export",
      this._haxStoreRegisterExport.bind(this)
    );

    // notice content insert and help it along to the body
    document.body.addEventListener(
      "hax-insert-content",
      this._haxStoreInsertContent.bind(this)
    );
    document.body.style.setProperty("--hax-ui-headings", "#d4ff77");
  },

  /**
   * Build HAX property definitions for primitives that we support.
   */
  _buildPrimitiveDefinitions: function() {
    // sandboxes need a webview definition
    // we don't want people making them but we need to
    // know how to edit them if asked
    if (Polymer.HaxStore.instance._isSandboxed) {
      let webview = {
        canScale: true,
        canPosition: true,
        canEditSource: false,
        settings: {
          quick: [
            {
              attribute: "src",
              title: "Source",
              description: "The URL for this video.",
              inputMethod: "textfield",
              icon: "link",
              required: true,
              validationType: "url"
            }
          ],
          configure: [
            {
              attribute: "src",
              title: "Source",
              description: "The URL for this video.",
              inputMethod: "textfield",
              icon: "link",
              required: true,
              validationType: "url"
            }
          ],
          advanced: []
        }
      };
      this.setHaxProperties(webview, "webview");
    }
    let iframe = {
      canScale: true,
      canPosition: true,
      canEditSource: true,
      gizmo: {
        title: "Basic iframe",
        description: "A basic iframe",
        icon: "icons:fullscreen",
        color: "grey",
        groups: ["Content"],
        handles: [
          {
            type: "link",
            source: "src",
            height: "height",
            width: "width"
          }
        ],
        meta: {
          author: "W3C"
        }
      },
      settings: {
        quick: [
          {
            attribute: "src",
            title: "Source",
            description: "The URL for this video.",
            inputMethod: "textfield",
            icon: "link",
            required: true,
            validationType: "url"
          }
        ],
        configure: [
          {
            attribute: "src",
            title: "Source",
            description: "The URL for this video.",
            inputMethod: "textfield",
            icon: "link",
            required: true,
            validationType: "url"
          }
        ],
        advanced: []
      }
    };
    this.setHaxProperties(iframe, "iframe");
    let img = {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Basic image",
        description: "A basic img tag",
        icon: "image:image",
        color: "grey",
        groups: ["Image", "Media"],
        handles: [
          {
            type: "link",
            source: "src"
          },
          {
            type: "image",
            source: "src",
            height: "height",
            width: "width"
          }
        ],
        meta: {
          author: "W3C"
        }
      },
      settings: {
        quick: [
          {
            attribute: "src",
            title: "Source",
            description: "The URL for this video.",
            inputMethod: "textfield",
            icon: "link",
            required: true,
            validationType: "url"
          },
          {
            attribute: "alt",
            title: "Alt text",
            description: "Useful for screen readers and improved SEO.",
            inputMethod: "alt",
            icon: "accessibility"
          },
          {
            attribute: "height",
            title: "Height",
            description: "height in pixels of the item",
            inputMethod: "textfield",
            icon: "icons:swap-vert"
          },
          {
            attribute: "width",
            title: "Width",
            description: "width in pixels of the item",
            inputMethod: "textfield",
            icon: "icons:swap-horiz"
          }
        ],
        configure: [
          {
            attribute: "src",
            title: "Source",
            description: "The URL for this video.",
            inputMethod: "textfield",
            icon: "link",
            required: true,
            validationType: "url"
          },
          {
            attribute: "alt",
            title: "Alt text",
            description: "Useful for screen readers and improved SEO.",
            inputMethod: "alt",
            icon: "accessibility"
          },
          {
            attribute: "height",
            title: "Height",
            description: "height in pixels of the item",
            inputMethod: "textfield",
            icon: "icons:swap-vert"
          },
          {
            attribute: "width",
            title: "Width",
            description: "width in pixels of the item",
            inputMethod: "textfield",
            icon: "icons:swap-horiz"
          }
        ],
        advanced: []
      }
    };
    this.setHaxProperties(img, "img");
    let ahref = {
      canScale: false,
      canPosition: false,
      canEditSource: false,
      gizmo: {
        title: "Basic link",
        description: "A basic a tag",
        icon: "icons:link",
        color: "grey",
        groups: ["Link"],
        handles: [
          {
            type: "link",
            source: "href",
            title: "innerText",
            alt: "title"
          },
          {
            type: "inline",
            text: "innerText"
          }
        ],
        meta: {
          author: "W3C"
        }
      },
      settings: {
        quick: [
          {
            attribute: "href",
            title: "Link",
            description: "The URL for this video.",
            inputMethod: "textfield",
            icon: "icons:link",
            required: true,
            validationType: "url"
          },
          {
            attribute: "title",
            title: "Title text",
            description: "Useful for screen readers and improved SEO.",
            inputMethod: "textfield",
            icon: "icons:accessibility"
          }
        ],
        configure: [
          {
            attribute: "innerText",
            title: "Text",
            description: "Text of the link",
            inputMethod: "textfield",
            required: true
          },
          {
            attribute: "href",
            title: "Link",
            description: "The URL for this video.",
            inputMethod: "textfield",
            icon: "icons:link",
            required: true,
            validationType: "url"
          },
          {
            attribute: "title",
            title: "Title text",
            description: "Useful for screen readers and improved SEO.",
            inputMethod: "textfield",
            icon: "icons:accessibility"
          },
          {
            attribute: "target",
            title: "Target",
            description: "Where to place the link.",
            inputMethod: "select",
            icon: "icons:launch",
            options: {
              "": "Same window",
              _blank: "New window",
              _top: "Top window",
              _parent: "Parent window"
            }
          }
        ],
        advanced: []
      }
    };
    this.setHaxProperties(ahref, "a");
    let p = {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      settings: {
        quick: [],
        configure: [],
        advanced: []
      }
    };
    this.setHaxProperties(p, "p");
    let hr = {
      canScale: true,
      canPosition: false,
      canEditSource: false,
      settings: {
        quick: [],
        configure: [],
        advanced: []
      }
    };
    this.setHaxProperties(hr, "hr");
  },

  /**
   * Inject a toast element to manage our messages
   */
  _injectToast: function() {
    var toast = document.createElement("paper-toast");
    toast.id = "haxtoast";
    toast.duration = 3000;
    // move this object to the body level so it doesn't
    // run into stack order context issues
    document.body.appendChild(toast);
    this.haxToast = toast;
  },

  /**
   * Set the haxManager node so we can interface with it.
   * This also allows for using a different manager that supplies
   * the same functions if that would be desired at some point.
   */
  _haxStoreRegisterManager: function(e) {
    if (e.detail && typeof this.haxManager === typeof undefined) {
      this.haxManager = e.detail;
    }
  },

  /**
   * Register autoloader so we can ship to it from app-store spec
   */
  _haxStoreRegisterAutoloader: function(e) {
    if (e.detail && typeof this.haxAutoloader === typeof undefined) {
      this.haxAutoloader = e.detail;
    }
  },

  /**
   * Set the appPicker node so we can interface with it.
   * This helps with picking between multiple options when we need the user
   * to decide between a sub-set of options
   */
  _haxStoreRegisterAppPicker: function(e) {
    if (e.detail && typeof this.haxAppPicker === typeof undefined) {
      this.haxAppPicker = e.detail;
    }
  },

  /**
   * Set the stax picker so that we have an element in charge
   * of the listing of available stax.
   */
  _haxStoreRegisterStaxPicker: function(e) {
    if (e.detail && typeof this.haxStaxPicker === typeof undefined) {
      this.haxStaxPicker = e.detail;
    }
  },

  /**
   * Set the blox picker so that we have an element in charge
   * of the listing of available blox.
   */
  _haxStoreRegisterBloxPicker: function(e) {
    if (e.detail && typeof this.haxBloxPicker === typeof undefined) {
      this.haxBloxPicker = e.detail;
    }
  },

  /**
   * Close all drawers
   */
  closeAllDrawers: function(active = false) {
    // walk all drawers, close everything
    // except active. This also will allow them
    // to close everything then.
    let drawers = [
      "haxManager",
      "haxBloxPicker",
      "haxStaxPicker",
      "haxPreferences",
      "haxExport"
    ];
    for (var i in drawers) {
      if (active === this[drawers[i]]) {
        active.open();
        if (drawers[i] === "haxManager") {
          setTimeout(() => {
            if (
              active.querySelector("#activepage .iron-selected paper-input") !=
              null
            ) {
              active
                .querySelector("#activepage .iron-selected paper-input")
                .focus();
            }
          }, 200);
        } else {
          setTimeout(() => {
            if (
              active.querySelector(
                "paper-checkbox,paper-input,textarea,paper-button"
              ) != null
            ) {
              active
                .querySelector(
                  "paper-checkbox,paper-input,textarea,paper-button"
                )
                .focus();
            }
          }, 100);
        }
      } else {
        this[drawers[i]].close();
      }
    }
  },

  /**
   * Insert content in the body.
   */
  _haxStoreInsertContent: function(e) {
    if (e.detail) {
      var properties = {};
      // support for properties to be set automatically optionally
      if (typeof e.detail.properties !== typeof undefined) {
        properties = e.detail.properties;
      }
      // invoke insert or replacement on body, same function so it's easier to trace
      if (e.detail.replace && e.detail.replacement) {
        let node = Polymer.HaxStore.haxElementToNode(
          e.detail.tag,
          e.detail.content,
          properties
        );
        if (this.activeNode !== this.activeContainerNode) {
          this.activeHaxBody.haxReplaceNode(
            this.activeNode,
            node,
            this.activeContainerNode
          );
        } else {
          this.activeHaxBody.haxReplaceNode(this.activeNode, node);
        }
      } else if (
        typeof e.detail.__type !== typeof undefined &&
        e.detail.__type === "inline"
      ) {
        let node = Polymer.HaxStore.haxElementToNode(
          e.detail.tag,
          e.detail.content,
          properties
        );
        // inserts where it needs to go!!!!!
        Polymer.HaxStore.instance.activeHaxBody.$.inlinetracker.insertAdjacentElement(
          "beforebegin",
          node
        );
        // removes the selection even if the user lost focus
        // which will appear to wipe the old text and replace it with the new
        if (this.activePlaceHolder !== null) {
          this.activePlaceHolder.extractContents();
        }
        // set it to nothing
        this.activePlaceHolder = null;
        // hide the inline context menu
        Polymer.HaxStore.instance.activeHaxBody.$.inlinecontextmenu.opened = false;
      } else {
        this.activeHaxBody.haxInsert(
          e.detail.tag,
          e.detail.content,
          properties
        );
      }
    }
  },

  /**
   * Set the activeHaxBody and add to the list so we know what to insert into.
   */
  _haxStoreRegisterBody: function(e) {
    if (e.detail) {
      this.haxBodies.push(e.detail);
      // default active the whatever is last here
      this.activeHaxBody = e.detail;
      // needed so that higher order things can respond to us having a body
      Polymer.HaxStore.write("activeHaxBody", this.activeHaxBody, this);
      Polymer.HaxStore.write("editMode", this.editMode, this);
    }
  },

  /**
   * Set the haxPanel so we know what to insert into.
   */
  _haxStoreRegisterPanel: function(e) {
    if (e.detail && typeof this.haxPanel === typeof undefined) {
      this.haxPanel = e.detail;
    }
  },

  /**
   * Set the haxExport so we know who to call for exporting
   */
  _haxStoreRegisterExport: function(e) {
    if (e.detail && typeof this.haxExport === typeof undefined) {
      this.haxExport = e.detail;
    }
  },

  /**
   * Set the haxPreferences so we know what has global preferences
   */
  _haxStoreRegisterPreferences: function(e) {
    if (e.detail && typeof this.haxPreferences === typeof undefined) {
      this.haxPreferences = e.detail;
    }
  },

  /**
   * Feature detect on the bar.
   */
  computePolyfillSafe: function() {
    /**
     * These are our bad actors in polyfill'ed browsers.
     * This means that https://github.com/webcomponents/webcomponentsjs/commit/ce464bb533bf39b544c312906499a6044ee0d30d
     * explains things but basically if shadow-dom is polyfilled
     * then we can't safely execute a DOM manipulating execCommand.
     * This
     */
    if (document.head.createShadowRoot || document.head.attachShadow) {
      return true;
    } else {
      console.log("Shadow DOM missing, can't safely use list operations.");
      return false;
    }
  },

  /**
   * Write store event callback.
   */
  _writeHaxStore: function(e) {
    // ensure we have a valid store write
    if (
      e.detail &&
      typeof e.detail.value !== typeof undefined &&
      e.detail.property &&
      e.detail.owner
    ) {
      this.set(e.detail.property, e.detail.value);
      this.fire("hax-store-property-updated", {
        property: e.detail.property,
        value: e.detail.value,
        owner: e.detail.owner
      });
    }
  },

  /**
   * Notice that an app was set in HAX; register it
   */
  _haxStoreRegisterApp: function(e) {
    if (e.detail) {
      e.detail.index = this.appList.length;
      this.push("appList", e.detail);
      Polymer.HaxStore.write("appList", this.appList, this);
      // we don't care about this after it's launched
      if (
        typeof e.target.parentElement !== typeof undefined &&
        e.target.parentElement.tagName === "HAX-STORE"
      ) {
        Polymer.dom(e.target.parentElement).removeChild(e.target);
      }
    }
  },

  /**
   * Notice that a stax was set in HAX; register it
   */
  _haxStoreRegisterStax: function(e) {
    if (e.detail) {
      e.detail.index = this.staxList.length;
      this.push("staxList", e.detail);
      Polymer.HaxStore.write("staxList", this.staxList, this);
      // we don't care about this after it's launched
      if (
        typeof e.target.parentElement !== typeof undefined &&
        e.target.parentElement.tagName === "HAX-STORE"
      ) {
        Polymer.dom(e.target.parentElement).removeChild(e.target);
      }
    }
  },

  /**
   * Notice that a blox was set in HAX; register it
   */
  _haxStoreRegisterBlox: function(e) {
    if (e.detail) {
      e.detail.index = this.bloxList.length;
      this.push("bloxList", e.detail);
      Polymer.HaxStore.write("bloxList", this.bloxList, this);
      // we don't care about this after it's launched
      if (
        typeof e.target.parentElement !== typeof undefined &&
        e.target.parentElement.tagName === "HAX-STORE"
      ) {
        Polymer.dom(e.target.parentElement).removeChild(e.target);
      }
    }
  },

  /**
   * Notice that a property off an element was set in HAX some place; register it here
   */
  _haxStoreRegisterProperties: function(e) {
    if (e.detail && e.detail.properties && e.detail.tag) {
      // only register tag if we don't know about it already
      if (typeof this.elementList[e.detail.tag] === typeof undefined) {
        // look for a gizmo; it's not required, technically.
        let gizmo = e.detail.properties.gizmo;
        if (gizmo) {
          gizmo.tag = e.detail.tag;
          let gizmos = this.gizmoList;
          gizmos.push(gizmo);
          Polymer.HaxStore.write("gizmoList", gizmos, this);
          // delete this tag if it was in the autoloader
          // as it has served it's purpose.
          if (
            typeof e.target.parentElement !== typeof undefined &&
            e.target.parentElement.tagName === "HAX-AUTOLOADER"
          ) {
            Polymer.dom(e.target.parentElement).removeChild(e.target);
          }
        }
        this.set("elementList." + e.detail.tag, e.detail.properties);
        // only push new values on if we got something new
        if (
          !this.validTagList.find(element => {
            return element === e.detail.tag;
          })
        ) {
          this.push("validTagList", e.detail.tag);
        }
      }
    }
  }
});
/**
 * Simple Array smashing function to ensure Object is array.
 */
Polymer.HaxStore.toArray = obj => {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};
/**
 * Helper to convert camel case to dash; important when setting attributes.
 */
Polymer.HaxStore.camelToDash = str => {
  return str
    .replace(/\W+/g, "-")
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .toLowerCase();
};
/**
 * Helper to convert dash to camel; important when reading attributes.
 */
Polymer.HaxStore.dashToCamel = str => {
  return str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
};
/**
 * Convert HTML into HAX Elements
 */
Polymer.HaxStore.htmlToHaxElements = html => {
  let elements = [];
  const validTags = Polymer.HaxStore.instance.validTagList;
  let fragment = document.createElement("div");
  fragment.innerHTML = html;
  const children = fragment.childNodes;
  // loop over the new nodes
  for (var i = 0; i < children.length; i++) {
    // verify this tag is a valid one
    if (
      typeof children[i].tagName !== typeof undefined &&
      validTags.includes(children[i].tagName.toLowerCase())
    ) {
      elements.push(Polymer.HaxStore.nodeToHaxElement(children[i], null));
    }
  }
  return elements;
};
/**
 * Convert a node to a HAX element. Hax elements ensure
 * a certain level of sanitization by verifying tags and
 * properties / attributes that have values.
 */
Polymer.HaxStore.nodeToHaxElement = (node, eventName = "insert-element") => {
  // build out the properties to send along
  let props = {};
  // support basic styles
  if (typeof node.style !== typeof undefined) {
    props.style = node.getAttribute("style");
  }
  // don't set a null style
  if (props.style === null || props.style === "null") {
    delete props.style;
  }
  // test if a class exists, not everything scopes
  if (typeof node.attributes.class !== typeof undefined) {
    props.class = node.attributes.class.nodeValue.replace("hax-active", "");
  }
  // test if a id exists as its a special case in attributes... of course
  if (typeof node.attributes.id !== typeof undefined) {
    props.id = node.getAttribute("id");
  }
  // complex elements need complex support
  if (typeof node.properties !== typeof undefined) {
    // run through attributes, though non-reflected props won't be here
    // run through properties, we always defer to property values
    for (var property in node.properties) {
      // make sure we only set things that have a value
      if (
        property != "class" &&
        property != "style" &&
        node.properties.hasOwnProperty(property) &&
        typeof node[property] !== undefined &&
        node[property] != null &&
        node[property] != ""
      ) {
        props[property] = node[property];
      }
      // special support for false boolean
      else if (node[property] === false) {
        props[property] = node[property];
      }
    }
    for (var attribute in node.attributes) {
      // make sure we only set things that have a value
      if (
        typeof node.attributes[attribute].name !== typeof undefined &&
        node.attributes[attribute].name != "class" &&
        node.attributes[attribute].name != "style" &&
        node.attributes[attribute].name != "id" &&
        node.attributes.hasOwnProperty(attribute) &&
        typeof node.attributes[attribute].value !== undefined &&
        node.attributes[attribute].value != null &&
        node.attributes[attribute].value != "" &&
        !node.properties.hasOwnProperty(
          Polymer.HaxStore.dashToCamel(node.attributes[attribute].name)
        )
      ) {
        props[Polymer.HaxStore.dashToCamel(node.attributes[attribute].name)] =
          node.attributes[attribute].value;
      } else {
        // note: debug here if experiencing attributes that won't bind
      }
    }
  } else {
    // much easier case, usually just in primatives
    for (var attribute in node.attributes) {
      // make sure we only set things that have a value
      if (
        typeof node.attributes[attribute].name !== typeof undefined &&
        node.attributes[attribute].name != "class" &&
        node.attributes[attribute].name != "style" &&
        node.attributes[attribute].name != "id" &&
        node.attributes.hasOwnProperty(attribute) &&
        typeof node.attributes[attribute].value !== undefined &&
        node.attributes[attribute].value != null &&
        node.attributes[attribute].value != ""
      ) {
        props[Polymer.HaxStore.dashToCamel(node.attributes[attribute].name)] =
          node.attributes[attribute].value;
      }
    }
  }
  // support sandboxed environments which
  // will hate iframe tags but love webview
  let tag = node.tagName.toLowerCase();
  if (Polymer.HaxStore.instance._isSandboxed && tag === "iframe") {
    tag = "webview";
  }
  let slotContent = Polymer.HaxStore.getHAXSlot(node);
  // special edge case for slot binding in primatives
  if (tag === "a") {
    props.innerText = slotContent;
  } else if (tag === "p" || tag === "ol" || tag === "ul" || tag === "div") {
    props.innerHTML = slotContent;
  }
  let element = {
    tag: tag,
    properties: props,
    content: slotContent
  };
  if (eventName !== null) {
    element.eventName = eventName;
  }
  return element;
};
/**
 * Convert a haxElement to a DOM node.
 */
Polymer.HaxStore.haxElementToNode = (tag, content, properties) => {
  // support sandboxed environments which
  // will hate iframe tags but love webview
  if (Polymer.HaxStore.instance._isSandboxed && tag === "iframe") {
    tag = "webview";
  }
  var frag = document.createElement(tag);
  frag.innerHTML = content;
  // clone the fragment which will force an escalation to full node
  var newNode = frag.cloneNode(true);

  // support for properties if they exist
  for (var property in properties) {
    let attributeName = Polymer.HaxStore.camelToDash(property);
    if (properties.hasOwnProperty(property)) {
      // special supporting for boolean because html is weird :p
      if (properties[property] === true) {
        newNode.setAttribute(attributeName, properties[property]);
      } else if (properties[property] === false) {
        newNode.removeAttribute(attributeName);
      } else if (
        properties[property] != null &&
        properties[property].constructor === Array &&
        !frag.properties[property].readOnly
      ) {
        newNode.set(attributeName, properties[property]);
      } else if (
        properties[property] != null &&
        properties[property].constructor === Object &&
        !frag.properties[property].readOnly
      ) {
        newNode.set(attributeName, properties[property]);
      } else {
        newNode.setAttribute(attributeName, properties[property]);
      }
    }
  }
  return newNode;
};
/**
 * Convert a node to the correct content object for saving.
 */
Polymer.HaxStore.haxNodeToContent = node => {
  if (
    Polymer.HaxStore.instance.activeHaxBody.globalPreferences.haxDeveloperMode
  ) {
    console.log(node);
  }
  // ensure we have access to all the member functions of the custom element
  let prototype = Object.getPrototypeOf(node);
  // support for deep API call
  if (typeof prototype.preProcessHaxNodeToContent !== typeof undefined) {
    let clone = node.cloneNode();
    node = prototype.preProcessHaxNodeToContent(clone);
  }
  let tag = node.tagName.toLowerCase();
  // support sandboxed environments which
  // will hate iframe tags but love webview
  if (Polymer.HaxStore.instance._isSandboxed && tag === "webview") {
    tag = "iframe";
  }
  var content = "";
  // start to rebuild the same tag we got in a generalized way
  content += "<" + tag;
  // account for things that say NOT to save slot values
  var props = Polymer.HaxStore.instance.elementList[tag];
  var propvals = {};
  // grab all of the original's attributes, and pass them to the replacement
  for (var j = 0, l = node.attributes.length; j < l; ++j) {
    var nodeName = node.attributes.item(j).nodeName;
    var value = node.attributes.item(j).value;
    // encode objects and arrays because they are special
    if (
      nodeName != "style" &&
      (typeof value === typeof Object || value.constructor === Array)
    ) {
      propvals[nodeName] = JSON.stringify(value).replace(
        new RegExp('"', "g"),
        "&quot;"
      );
    }
    // only write things that aren't empty
    else if (value != null && value != "null") {
      if (value === true || value === "true") {
        propvals[nodeName] = true;
      } else if (value === false) {
        // do nothing, no reason to record false unless written as text
        // in which case below will capture it
      } else {
        // ensure that value doesn't have " in it unencoded
        if (typeof value === "string" && value !== "") {
          value = value.replace(new RegExp('"', "g"), "&quot;");
          propvals[nodeName] = value;
        }
        // special handling for empty string cause it might mean boolean
        // or it might be a string
        else if (value === "") {
          if (value == "" && node.attributes.item(j).value != "") {
            value = node.attributes.item(j).value;
          }
          propvals[nodeName] = value;
        } else {
          propvals[nodeName] = value;
        }
      }
    }
  }
  // now look through properties
  if (typeof node.properties !== typeof undefined) {
    for (var j in node.properties) {
      var nodeName = Polymer.HaxStore.camelToDash(j);
      var value = null;
      // prefer local value over properties object if possible
      if (typeof node[j] !== typeof undefined) {
        value = node[j];
      }
      // never allow read only things to recorded as they
      // are run-time creation 99% of the time
      if (!node.properties[j].readOnly && value !== node.properties[j].value) {
        // encode objects and arrays because they are special
        if (
          value != null &&
          (typeof value === typeof Object || value.constructor === Array)
        ) {
          propvals[nodeName] = JSON.stringify(value).replace(
            new RegExp('"', "g"),
            "&quot;"
          );
        }
        // only write things that aren't empty
        else if (value != null && value != "null") {
          if (value === true || value === "true") {
            propvals[nodeName] = true;
          } else if (value === false) {
            // do nothing, no reason to record false unless written as text
            // in which case below will capture it
          } else {
            // ensure that value doesn't have " in it unencoded
            if (typeof value === "string" && value !== "") {
              value = value.replace(new RegExp('"', "g"), "&quot;");
              propvals[nodeName] = value;
            }
            // special handling for empty string cause it might mean boolean
            // or it might be a string
            else if (value === "") {
              if (value == "" && node.properties[j].value != "") {
                value = node.properties[j].value;
              } else if (value === "" && node.properties[j].value == "") {
                // do nothing, the default value is empty
                // so lets record less data
              }
            } else {
              propvals[nodeName] = value;
            }
          }
        }
      }
    }
  }
  // support for tag defining which properties NOT to save
  // for simplification, everything is an attribute during this
  // operation
  if (
    typeof props !== typeof undefined &&
    typeof props.saveOptions.unsetAttributes !== typeof undefined
  ) {
    for (var i in props.saveOptions.unsetAttributes) {
      delete propvals[props.saveOptions.unsetAttributes[i]];
    }
  }
  // specialized clean up for some that can leak through from above
  // and are edge case things because #hashtag gotta love HTML attributes
  // and the webview tag. facepalm.
  let delProps = ["inner-text", "tabindex", "guestinstance"];
  for (var delProp in delProps) {
    if (typeof propvals[delProps[delProp]] !== typeof undefined) {
      delete propvals[delProps[delProp]];
    }
  }
  // remove id attribute if it's empty, somehow misses above
  if (typeof propvals.id !== typeof undefined && propvals.id === "") {
    delete propvals.id;
  }
  // run through the properties
  for (var i in propvals) {
    if (propvals[i] === true) {
      content += " " + i;
    } else {
      content += " " + i + '="' + propvals[i] + '"';
    }
  }
  // set the opening tag, support self-closing void tags
  let voidTags = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ];
  if (voidTags.includes(tag)) {
    content += "/>";
  } else {
    content += ">";
  }
  // try and work against anything NOT a P tag
  if (typeof props === typeof undefined || !props.saveOptions.wipeSlot) {
    // get content that is in the slots
    let slotnodes = Polymer.dom(node).getEffectiveChildNodes();
    // ensure there's something inside of this
    if (slotnodes.length > 0) {
      // loop through everything found in the slotted area and put it back in
      for (var j = 0, len2 = slotnodes.length; j < len2; j++) {
        if (typeof slotnodes[j].tagName !== typeof undefined) {
          // if we're a custom element, keep digging, otherwise a simple
          // self append is fine unless template tag cause it's a special
          // case for the web in general as it'll register as not a primative
          // even though it is...
          if (
            !Polymer.HaxStore.HTMLPrimativeTest(slotnodes[j].tagName) &&
            slotnodes[j].tagName !== "TEMPLATE"
          ) {
            content += Polymer.HaxStore.haxNodeToContent(slotnodes[j]);
          } else {
            // possible copy and paste glitch, ignore this at all costs
            if (
              slotnodes[j].tagName === "SPAN" &&
              slotnodes[j].id === "inlinetracker"
            ) {
            } else {
              slotnodes[j].setAttribute("data-editable", false);
              slotnodes[j].removeAttribute("data-hax-ray");
              slotnodes[j].contentEditable = false;
              content += slotnodes[j].outerHTML;
            }
          }
        }
        // keep comments with a special case since they need wrapped
        else if (slotnodes[j].nodeType === 8) {
          content += "<!-- " + slotnodes[j].textContent + " -->";
        }
        // keep everything NOT an element at this point, this helps
        // preserve whitespace because we're crazy about accuracy
        else if (
          slotnodes[j].nodeType !== 1 &&
          typeof slotnodes[j].textContent !== typeof undefined &&
          slotnodes[j].textContent !== "undefined"
        ) {
          content += slotnodes[j].textContent;
        }
      }
    }
  }
  // don't put return for span since it's an inline tag
  if (tag === "span") {
    content += "</" + tag + ">";
  } else if (tag === "hr" || tag === "br" || tag === "img") {
    // do nothing for self-closing tags they'll resolve themselves
  }
  // close the tag, placing a return in output for block elements
  else {
    content += "</" + tag + ">" + "\n";
  }
  if (
    Polymer.HaxStore.instance.activeHaxBody.globalPreferences.haxDeveloperMode
  ) {
    console.log(content);
  }
  // support postProcess text rewriting for the node that's been
  // converted to a string for storage
  if (node.postProcesshaxNodeToContent === "function") {
    content = node.postProcesshaxNodeToContent(content);
  }
  return content;
};
/**
 * Basic HTML Primitives test
 */
Polymer.HaxStore.HTMLPrimativeTest = node => {
  if (
    typeof node.tagName !== typeof undefined &&
    node.tagName.indexOf("-") == -1
  ) {
    return true;
  }
  return false;
};
/**
 * Slot content w/ support for custom elements in slot.
 */
Polymer.HaxStore.getHAXSlot = node => {
  let content = "";
  var slotnodes = Polymer.dom(node).children;
  // ensure there's something inside of this
  if (slotnodes.length > 0) {
    // loop through everything found in the slotted area and put it back in
    for (var j = 0, len2 = slotnodes.length; j < len2; j++) {
      if (typeof slotnodes[j].tagName !== typeof undefined) {
        // if we're a custom element, keep digging, otherwise a simple
        // self append is fine.
        if (slotnodes[j].tagName.indexOf("-") > 0) {
          content +=
            "  " + Polymer.HaxStore.haxNodeToContent(slotnodes[j]) + "\n";
        } else {
          content += "  " + slotnodes[j].outerHTML + "\n";
        }
      }
      // keep comments with a special case since they need wrapped
      else if (slotnodes[j].nodeType === 8) {
        content += "<!-- " + slotnodes[j].textContent + " -->";
      }
      // keep everything NOT an element at this point, this helps
      // preserve whitespace because we're crazy about accuracy
      else if (
        slotnodes[j].nodeType !== 1 &&
        typeof slotnodes[j].textContent !== typeof undefined &&
        slotnodes[j].textContent !== "undefined"
      ) {
        content += slotnodes[j].textContent;
      }
    }
  }
  return content;
};
/**
 * Shortcut to standardize the write / read process.
 */
Polymer.HaxStore.write = (prop, value, obj) => {
  obj.fire("hax-store-write", { property: prop, value: value, owner: obj });
};
/**
 * Guess the type of Gizmo when given some information about what we have.
 */
Polymer.HaxStore.guessGizmoType = guess => {
  if (typeof guess.source !== typeof undefined) {
    if (guess.source.indexOf(".mp3") != -1) {
      return "audio";
    } else if (
      guess.source.indexOf(".png") != -1 ||
      guess.source.indexOf(".jpg") != -1 ||
      guess.source.indexOf(".jpeg") != -1 ||
      guess.source.indexOf(".gif") != -1
    ) {
      return "image";
    } else if (guess.source.indexOf(".pdf") != -1) {
      return "pdf";
    } else if (guess.source.indexOf(".svg") != -1) {
      return "svg";
    } else if (guess.source.indexOf(".csv") != -1) {
      return "csv";
    }
    // if it's external we can't assume what it actually is
    else if (
      Polymer.HaxStore.instance.getVideoType(guess.source) != "external"
    ) {
      return "video";
    } else {
      // we don't know how to handle this so let's just
      // try ANYTHING that matches
      return "*";
    }
  }
};
/**
 * Try and guess the Gizmo based on what we were just handed
 */
Polymer.HaxStore.guessGizmo = (guess, values, skipPropMatch = false) => {
  var matches = [];
  if (typeof guess !== typeof undefined) {
    var store = Polymer.HaxStore.instance;
    // verify type
    if (store.validGizmoTypes.includes(guess)) {
      // now we can look through them
      // look for a match
      for (var gizmoposition in store.gizmoList) {
        var gizmo = store.gizmoList[gizmoposition];
        var props = {};
        // reset match per gizmo
        var match = false;
        for (var i = 0; i < gizmo.handles.length; i++) {
          // WHAT!??!?!?!?!
          if (guess === gizmo.handles[i].type || (guess === "*" && !match)) {
            for (var property in gizmo.handles[i]) {
              // ignore type.. but again.. WHAT?!?!?!
              if (property !== "type") {
                // check the values that came across to see if there's a match
                // of any kind, we only need one but can then bind to multiple
                if (typeof values[property] !== typeof undefined) {
                  match = true;
                  props[gizmo.handles[i][property]] = values[property];
                }
              }
            }
            // omg... we just found a match on a property from who knows where!
            if (match || skipPropMatch) {
              matches.push(
                Polymer.HaxStore.haxElementPrototype(gizmo, props, "")
              );
            }
          }
        }
      }
    }
  }
  return matches;
};

/**
 * Filter app store apps to those that accept this file source.
 */
Polymer.HaxStore.getHaxAppStoreTargets = type => {
  let targets = Polymer.HaxStore.instance.appList.filter(app => {
    if (typeof app.connection.operations.add !== typeof undefined) {
      let add = app.connection.operations.add;
      if (
        typeof add.acceptsGizmoTypes !== typeof undefined &&
        add.acceptsGizmoTypes.includes(type)
      ) {
        return true;
      }
    }
    return false;
  });
  return targets;
};

/**
 * Generate Hax Element prototype.
 */
Polymer.HaxStore.haxElementPrototype = (gizmo, properties, content = "") => {
  return {
    tag: gizmo.tag,
    properties: properties,
    content: content,
    gizmo: gizmo
  };
};

/**
 * Wipe out the slot of an element.
 */
Polymer.HaxStore.wipeSlot = (element, slot = "") => {
  // 100% clean slate
  if (slot === "*") {
    while (Polymer.dom(element).firstChild !== null) {
      Polymer.dom(element).removeChild(Polymer.dom(element).firstChild);
    }
  } else {
    for (var i in Polymer.dom(element).childNodes) {
      // test for element nodes to be safe
      if (
        typeof Polymer.dom(element).childNodes[i] !== typeof undefined &&
        Polymer.dom(element).childNodes[i].slot === slot
      ) {
        Polymer.dom(element).removeChild(Polymer.dom(element).childNodes[i]);
      }
    }
  }
};
/**
 * Global toast
 */
Polymer.HaxStore.toast = (message, duration = 3000) => {
  Polymer.HaxStore.instance.haxToast.duration = duration;
  Polymer.HaxStore.instance.haxToast.show(message);
};
/**
 * Trick to write the store to the DOM if it wasn't there already.
 * This is not used yet but could be if you wanted to dynamically
 * load the store based on something else calling for it. Like
 * store lazy loading but it isn't tested.
 */
Polymer.HaxStore.instance = null;
Polymer.HaxStore.requestAvailability = function() {
  if (!Polymer.HaxStore.instance) {
    Polymer.HaxStore.instance = document.createElement("hax-store");
  }
  document.body.appendChild(Polymer.HaxStore.instance);
};
