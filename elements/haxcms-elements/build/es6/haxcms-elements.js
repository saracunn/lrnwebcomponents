import {
  html,
  PolymerElement
} from "./node_modules/@polymer/polymer/polymer-element.js";
export { HaxcmsElements };
class HaxcmsElements extends PolymerElement {
  static get tag() {
    return "haxcms-elements";
  }
}
window.customElements.define(HaxcmsElements.tag, HaxcmsElements);