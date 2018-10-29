define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js",
  "./node_modules/@polymer/iron-image/iron-image.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_a0331300dbb711e89af4d37148578aee() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host #gifbutton > * {\n        position: relative;\n      }\n      :host #svg {\n        position: absolute;\n        top: 35%;\n        left: 35%;\n      }\n      :host #gifbutton:active,\n      :host #gifbutton:focus,\n      :host #gifbutton:hover {\n        cursor: pointer;\n        outline: 1px solid blue;\n      }\n      :host #preload {\n        display: none;\n      }\n    </style>\n    <div id="gifbutton" aria-role="button" aria-controls="gif" tabindex="0">\n      <div>\n        <img id="gif" alt$="[[alt]]" src$="[[srcWithoutAnimation]]" style="width:100%;height:100%;">\n        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="30%" height="30%">\n          <g opacity=".5">\n            <polygon points="30,20 30,180 170,100" fill="#000000" stroke="#ffffff" stroke-width="15px"></polygon>\n            <text x="50" y="115" fill="#ffffff" font-size="40px">GIF</text>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <iron-image id="preload" src$="[[src]]" hidden=""></iron-image>\n    <iron-a11y-keys id="a11y" keys="enter space" on-keys-pressed="toggleAnimation"></iron-a11y-keys>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n      }\n      :host #gifbutton > * {\n        position: relative;\n      }\n      :host #svg {\n        position: absolute;\n        top: 35%;\n        left: 35%;\n      }\n      :host #gifbutton:active,\n      :host #gifbutton:focus,\n      :host #gifbutton:hover {\n        cursor: pointer;\n        outline: 1px solid blue;\n      }\n      :host #preload {\n        display: none;\n      }\n    </style>\n    <div id="gifbutton" aria-role="button" aria-controls="gif" tabindex="0">\n      <div>\n        <img id="gif" alt\\$="[[alt]]" src\\$="[[srcWithoutAnimation]]" style="width:100%;height:100%;">\n        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="30%" height="30%">\n          <g opacity=".5">\n            <polygon points="30,20 30,180 170,100" fill="#000000" stroke="#ffffff" stroke-width="15px"></polygon>\n            <text x="50" y="115" fill="#ffffff" font-size="40px">GIF</text>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <iron-image id="preload" src\\$="[[src]]" hidden=""></iron-image>\n    <iron-a11y-keys id="a11y" keys="enter space" on-keys-pressed="toggleAnimation"></iron-a11y-keys>\n'
      ]
    );
    _templateObject_a0331300dbb711e89af4d37148578aee = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_a0331300dbb711e89af4d37148578aee()
    ),
    is: "a11y-gif-player",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    listeners: { tap: "toggleAnimation" },
    properties: {
      src: { type: String, value: null },
      srcWithoutAnimation: { type: String, value: null },
      alt: { type: String, value: null }
    },
    ready: function ready() {
      this.stop();
      this.$.a11y.target = this.$.gifbutton;
    },
    play: function play() {
      this.__stopped = !0;
      this.toggleAnimation();
    },
    stop: function stop() {
      this.__stopped = !1;
      this.toggleAnimation();
    },
    toggleAnimation: function toggleAnimation() {
      if (this.__stopped) {
        this.__stopped = !1;
        this.$.svg.style.visibility = "hidden";
        if (null != this.src) {
          this.$.gif.src = this.src;
        }
        this.$.gif.alt = this.alt + " (Stop animation.)";
      } else {
        this.__stopped = !0;
        this.$.svg.style.visibility = "visible";
        if (null != this.srcWithoutAnimation) {
          this.$.gif.src = this.srcWithoutAnimation;
        }
        this.$.gif.alt = this.alt + " (Play animation.)";
      }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Accessible GIF",
          description: "Makes animated GIFs accessible.",
          icon: "gif",
          color: "grey",
          groups: ["Images", "Media"],
          handles: [
            {
              type: "image",
              source: "src",
              source2: "srcWithoutAnimation",
              alt: "alt"
            }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "src",
              title: "Animated GIF",
              description: "The URL to your animated GIF.",
              inputMethod: "textfield",
              icon: "link",
              validationType: "url",
              required: !0
            },
            {
              property: "srcWithoutAnimation",
              title: "Still Image",
              description: "The URL to a still image version of your GIF.",
              inputMethod: "textfield",
              icon: "link",
              validationType: "url",
              required: !0
            },
            {
              property: "alt",
              title: "Alt Text",
              description: "Alternative text for the image.",
              inputMethod: "textfield",
              icon: "accessibility",
              required: !0
            }
          ],
          configure: [
            {
              property: "src",
              title: "Animated GIF",
              description: "The URL to your animated GIF.",
              inputMethod: "textfield",
              icon: "link",
              validationType: "url",
              required: !0
            },
            {
              property: "srcWithoutAnimation",
              title: "Still Image",
              description: "The URL to a still image version of your GIF.",
              inputMethod: "textfield",
              icon: "link",
              validationType: "url",
              required: !0
            },
            {
              property: "alt",
              title: "Alt Text",
              description: "Alternative text for the image.",
              inputMethod: "textfield",
              icon: "accessibility",
              required: !0
            }
          ],
          advanced: []
        }
      });
    }
  });
});
