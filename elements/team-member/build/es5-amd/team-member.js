define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@polymer/iron-image/iron-image.js",
  "@lrnwebcomponents/mdi-iconset-svg/mdi-social-iconset-svg.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_cb1b27a0dbb811e899d14934ee7a19c1() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n        --team-member-circle: #1E407D;\n        --team-member-border: white;\n      }\n      .team-member {\n        text-align: center;\n        padding: 8px;\n      }\n      iron-image {\n        background-color: var(--team-member-color);\n        height: 165px;\n        width: 165px;\n        margin: 0 auto;\n        border: 7px solid var(--team-member-border);\n        border-radius: 50%;\n      }\n      .name {\n        text-transform: none;\n        font-size: 16px;\n      }\n      .line1 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 22px;\n      }\n      .line2 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 18px;\n      }\n      .social {\n        display: inline-block;\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n      paper-icon-button {\n        color: var(--team-member-color);\n      }\n    </style>\n    <div class="team-member">\n      <iron-image src="[[image]]" sizing="cover" alt=""></iron-image>\n      <div class="name">[[fullName]]</div>\n      <div hidden$="[[!firstLine]]" class="line1">[[firstLine]]</div>\n      <div hidden$="[[!secondLine]]" class="line2">[[secondLine]]</div>\n      <div class="social">\n        <a tabindex="-1" href$="[[dribble]]" hidden$="[[!dribble]]"><paper-icon-button icon="mdi-social:dribble"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[facebook]]" hidden$="[[!facebook]]"><paper-icon-button icon="mdi-social:facebook-box"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[github]]" hidden$="[[!github]]"><paper-icon-button icon="mdi-social:github-circle"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[google]]" hidden$="[[!google]]"><paper-icon-button icon="mdi-social:google-plus"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[instagram]]" hidden$="[[!instagram]]"><paper-icon-button icon="mdi-social:instagram"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[linkedin]]" hidden$="[[!linkedin]]"><paper-icon-button icon="mdi-social:linkedin"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[pinterest]]" hidden$="[[!pinterest]]"><paper-icon-button icon="mdi-social:pinterest"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[tumblr]]" hidden$="[[!tumblr]]"><paper-icon-button icon="mdi-social:tumblr"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[twitch]]" hidden$="[[!twitch]]"><paper-icon-button icon="mdi-social:twitch"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[twitter]]" hidden$="[[!twitter]]"><paper-icon-button icon="mdi-social:twitter"></paper-icon-button></a>\n        <a tabindex="-1" href$="[[whatsapp]]" hidden$="[[!whatsapp]]"><paper-icon-button icon="mdi-social:whatsapp"></paper-icon-button></a>\n      </div>\n    </div>\n'
      ],
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n        --team-member-circle: #1E407D;\n        --team-member-border: white;\n      }\n      .team-member {\n        text-align: center;\n        padding: 8px;\n      }\n      iron-image {\n        background-color: var(--team-member-color);\n        height: 165px;\n        width: 165px;\n        margin: 0 auto;\n        border: 7px solid var(--team-member-border);\n        border-radius: 50%;\n      }\n      .name {\n        text-transform: none;\n        font-size: 16px;\n      }\n      .line1 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 22px;\n      }\n      .line2 {\n        font-size: 12px;\n        margin: 0;\n        padding: 4px 0;\n        line-height: 18px;\n      }\n      .social {\n        display: inline-block;\n        padding-left: 5px;\n        padding-right: 5px;\n      }\n      paper-icon-button {\n        color: var(--team-member-color);\n      }\n    </style>\n    <div class="team-member">\n      <iron-image src="[[image]]" sizing="cover" alt=""></iron-image>\n      <div class="name">[[fullName]]</div>\n      <div hidden\\$="[[!firstLine]]" class="line1">[[firstLine]]</div>\n      <div hidden\\$="[[!secondLine]]" class="line2">[[secondLine]]</div>\n      <div class="social">\n        <a tabindex="-1" href\\$="[[dribble]]" hidden\\$="[[!dribble]]"><paper-icon-button icon="mdi-social:dribble"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[facebook]]" hidden\\$="[[!facebook]]"><paper-icon-button icon="mdi-social:facebook-box"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[github]]" hidden\\$="[[!github]]"><paper-icon-button icon="mdi-social:github-circle"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[google]]" hidden\\$="[[!google]]"><paper-icon-button icon="mdi-social:google-plus"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[instagram]]" hidden\\$="[[!instagram]]"><paper-icon-button icon="mdi-social:instagram"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[linkedin]]" hidden\\$="[[!linkedin]]"><paper-icon-button icon="mdi-social:linkedin"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[pinterest]]" hidden\\$="[[!pinterest]]"><paper-icon-button icon="mdi-social:pinterest"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[tumblr]]" hidden\\$="[[!tumblr]]"><paper-icon-button icon="mdi-social:tumblr"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[twitch]]" hidden\\$="[[!twitch]]"><paper-icon-button icon="mdi-social:twitch"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[twitter]]" hidden\\$="[[!twitter]]"><paper-icon-button icon="mdi-social:twitter"></paper-icon-button></a>\n        <a tabindex="-1" href\\$="[[whatsapp]]" hidden\\$="[[!whatsapp]]"><paper-icon-button icon="mdi-social:whatsapp"></paper-icon-button></a>\n      </div>\n    </div>\n'
      ]
    );
    _templateObject_cb1b27a0dbb811e899d14934ee7a19c1 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_cb1b27a0dbb811e899d14934ee7a19c1()
    ),
    is: "team-member",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      image: { type: String },
      fullName: { type: String },
      firstLine: { type: String, value: !1 },
      secondLine: { type: String, value: !1 },
      dribble: { type: String, value: !1 },
      facebook: { type: String, value: !1 },
      github: { type: String, value: !1 },
      google: { type: String, value: !1 },
      instagram: { type: String, value: !1 },
      linkedin: { type: String, value: !1 },
      pinterest: { type: String, value: !1 },
      tumblr: { type: String, value: !1 },
      twitch: { type: String, value: !1 },
      twitter: { type: String, value: !1 },
      whatsapp: { type: String, value: !1 }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Sample gizmo",
          description:
            "The user will be able to see this for selection in a UI.",
          icon: "av:play-circle-filled",
          color: "grey",
          groups: ["Video", "Media"],
          handles: [{ type: "video", url: "source" }],
          meta: { author: "Your organization on github" }
        },
        settings: {
          quick: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          configure: [
            {
              property: "title",
              title: "Title",
              description: "The title of the element",
              inputMethod: "textfield",
              icon: "editor:title"
            }
          ],
          advanced: []
        }
      });
    }
  });
});
