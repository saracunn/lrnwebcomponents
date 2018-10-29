import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import "./lib/side-comments.js";
Polymer({
  _template: html`
    <style>
       :host {
        display: block;
      }
    </style>
    <div id="commentable-area">
      <p data-section-id="1" class="commentable-section">
        This is a section that can be commented on.
        This is a section that can be commented on.
        This is a section that can be commented on.
        This is a section that can be commented on.
        This is a section that can be commented on.
        This is a section that can be commented on.
      </p>
      <p data-section-id="2" class="commentable-section">
        This is a another section that can be commented on.
        This is a another section that can be commented on.
        This is a another section that can be commented on.
        This is a another section that can be commented on.
        This is a another section that can be commented on.
        This is a another section that can be commented on.
        This is a another section that can be commented on.
      </p>
      <p data-section-id="3" class="commentable-section">
        This is yet another section that can be commented on.
        This is yet another section that can be commented on.
        This is yet another section that can be commented on.
        This is yet another section that can be commented on.
        This is yet another section that can be commented on.
      </p>
    </div>
`,
  is: "lrndesign-sidecomments",
  properties: { title: { type: String, value: "lrndesign-sidecomments" } },
  ready: function() {
    const SideComments = require("side-comments"),
      target = this.shadowRoot.querySelector("#commentable-area");
    sideComments = new SideComments(
      target,
      {
        id: 1,
        avatarUrl: "http://f.cl.ly/items/0s1a0q1y2Z2k2I193k1y/default-user.png",
        name: "You"
      },
      [
        {
          sectionId: "1",
          comments: [
            {
              authorAvatarUrl:
                "http://f.cl.ly/items/1W303Y360b260u3v1P0T/jon_snow_small.png",
              authorName: "Jon Sno",
              comment: "I'm Ned Stark's bastard. Related: I know nothing."
            },
            {
              authorAvatarUrl:
                "http://f.cl.ly/items/2o1a3d2f051L0V0q1p19/donald_draper.png",
              authorName: "Donald Draper",
              comment: "I need a scotch."
            }
          ]
        },
        {
          sectionId: "3",
          comments: [
            {
              authorAvatarUrl:
                "http://f.cl.ly/items/0l1j230k080S0N1P0M3e/clay-davis.png",
              authorName: "Senator Clay Davis",
              comment: "These Side Comments are incredible. Sssshhhiiiiieeeee."
            }
          ]
        }
      ]
    );
  }
});
