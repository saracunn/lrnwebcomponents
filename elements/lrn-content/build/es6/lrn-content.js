import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>
    <div typeof="oer:SupportingMaterial">
      <h2 property="oer:name">[[title]]</h2>
      <div property="oer:description">
        <slot></slot>
      </div>
    </div>
`,
  is: "lrn-content",
  properties: { title: { type: String, value: "" } }
});
