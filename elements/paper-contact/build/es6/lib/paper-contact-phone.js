import {
  html,
  Polymer
} from "../node_modules/@polymer/polymer/polymer-legacy.js";
import "./paper-contact-behavior.js";
import "./paper-contact-shared-styles.js";
Polymer({
  is: "paper-contact-phone",
  behaviors: [PaperContactBehavior],
  _getTargetUrl: function(content) {
    return "tel:" + content;
  }
});
