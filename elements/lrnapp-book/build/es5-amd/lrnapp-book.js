define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icons/hardware-icons.js",
  "./node_modules/@polymer/iron-ajax/iron-ajax.js",
  "./node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "./node_modules/@polymer/paper-styles/color.js",
  "paper-search/paper-search-bar.js",
  "@polymer/paper-tooltip/paper-tooltip.js",
  "./node_modules/@polymer/paper-slider/paper-slider.js",
  "./node_modules/@polymer/app-layout/app-layout.js",
  "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js",
  "./node_modules/@polymer/app-layout/app-header/app-header.js",
  "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js",
  "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js",
  "./node_modules/@polymer/app-route/app-location.js",
  "./node_modules/@polymer/app-route/app-route.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./node_modules/@lrnwebcomponents/lrndesign-stepper/lrndesign-stepper.js",
  "./node_modules/@lrnwebcomponents/lrnsys-progress/lrnsys-progress.js",
  "./node_modules/@lrnwebcomponents/elmsln-loading/elmsln-loading.js",
  "./node_modules/@lrnwebcomponents/page-scroll-position/page-scroll-position.js",
  "./node_modules/@lrnwebcomponents/hax-body/hax-body.js",
  "./node_modules/@lrnwebcomponents/material-progress/material-progress.js",
  "./node_modules/@lrnwebcomponents/lrndesign-mapmenu/lrndesign-mapmenu.js",
  "./lib/lrnapp-book-progress-dashboard.js"
], function(_polymerLegacy, _polymerDom, _elementMixin) {
  "use strict";
  function _templateObject_050dca70dbba11e8bc142be5d27dc747() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: block;\n        font-size: 1em;\n        box-sizing: content-box;\n      }\n      #toolbar {\n        color: gray;\n        background-color: white;\n        padding: 0 .5em;\n        margin: 0;\n        height: auto;\n        box-sizing: content-box;\n        transition: all .4s ease;\n      }\n      paper-button {\n        padding: 0;\n        margin: 0;\n        min-width: 1rem;\n      }\n\n      hax-panel ::shadow app-drawer {\n        padding: 0;\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        box-sizing: content-box;\n        margin-left: -300px;\n        --app-drawer-content-container: {\n          background-color: #fafafa;\n          padding: 0;\n          border-right: 1px solid #c8c8c8;\n          overflow: inherit;\n          width: 300px !important;\n        }\n      }\n      app-drawer {\n        padding: 0;\n        top: 0;\n        bottom: 0;\n        z-index: 1;\n        position: absolute;\n        box-sizing: content-box;\n        --app-drawer-content-container: {\n          background-color: #fafafa;\n          padding: 0;\n          border-right: 1px solid #c8c8c8;\n          overflow-y: scroll;\n          width: 300px !important;\n          box-shadow: 0 76px 8px 0 rgba(0, 0, 0, 0.4);\n          height: 100vh;\n          top: 0;\n          position: sticky;\n        }\n      }\n      hax-panel {\n        font-size: .8rem;\n      }\n      hax-panel {\n      --app-drawer-content-container: {\n          background-color: #fafafa;\n          padding: 0;\n          border-right: 1px solid #c8c8c8;\n          overflow-y: scroll;\n          width: 300px !important;\n          box-shadow: 0 76px 8px 0 rgba(0, 0, 0, 0.4);\n          height: 100vh;\n          top: 0;\n          position: sticky;\n        }\n      }\n\n      lrndesign-stepper-button {\n        --lrndesign-stepper-btn-active: #f6f7f7;\n      }\n      lrndesign-stepper-button ::shadow paper-button {\n        margin: 0;\n        height: 3em;\n      }\n      lrndesign-stepper-button ::shadow .title-container.lrndesign-stepper-button {\n        padding: 0;\n        width: 100%;\n        right: unset;\n      }\n      lrndesign-stepper-button ::shadow .node-title.lrndesign-stepper-button {\n        font-size: .9em;\n        line-height: 1.5em;\n      }\n\n      .loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: .9;\n        text-align: center;\n        align-content: space-around;\n        justify-content: center;\n        position: absolute;\n        background-color: white;\n        padding: 0;\n        margin: 0;\n        display: flex;\n        margin: 0 auto;\n        visibility: visible;\n        transition: visibility 1s, opacity 1s ease;\n      }\n      .loading elmsln-loading {\n        margin: 0 5em;\n        display: inline-flex;\n      }\n      #bodyloading {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n      }\n      #bodyloading .loading,\n      #bodyloading elmsln-loading{\n        display: block;\n        height: 5em;\n      }\n      .outline-title {\n        margin-left: .5em;\n        max-width: 50%;\n      }\n      .content-nav-buttons {\n        top: 60%;\n        position: fixed;\n        opacity: .8;\n        padding: 0 .25em;\n        height: 40%;\n        padding-top: 15%;\n        margin-top: -15%;\n      }\n      .content-nav-buttons:hover {\n        opacity: 1;\n      }\n      .prev {\n        left: 0;\n        order: 1;\n      }\n      .next {\n        right: 0;\n        transition: right .2s ease;\n        order: 2;\n      }\n      app-header {\n        width: 100%;\n        left: 0 !important;\n        z-index: 2 !important;\n        position: sticky !important;\n      }\n      app-header-layout {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n      }\n      .content-body {\n        position: relative;\n        padding: 0;\n        margin: -3em 4em 5em 4em;\n        font-size: 1.1em;\n        transition:\n          margin .4s ease,\n          width .4s ease;\n      }\n\n      .content-nav-buttons paper-icon-button {\n        width: 4em;\n        height: 4em;\n        opacity: .4;\n        display: block;\n        visibility: visible;\n        transition:\n          opacity .4s linear,\n          visibility 1s linear,\n          height .4s ease,\n          width .4s ease;\n      }\n      .content-nav-buttons paper-icon-button:hover {\n        opacity: 1;\n      }\n      paper-tooltip {\n        --paper-tooltip-opacity: .96;\n      }\n      :host[drawer-opened] .content-nav-buttons paper-icon-button {\n        width: 2.5em;\n        height: 2.5em;\n      }\n      :host[edit-mode] .content-nav-buttons {\n        opacity: 0;\n        pointer-events: none;\n        visibility: hidden;\n      }\n      .content-title {\n        font-size: 1.4em;\n        margin: 0;\n        padding: .25em 0;\n        background-color: white;\n        top: 70px;\n        position: sticky;\n      }\n      .content-current {\n        min-height: 100vh;\n      }\n      .content-next {\n        background-color: grey;\n        opacity: .8;\n      }\n      #header {\n        position: sticky;\n        top: 0;\n        left: 0;\n        width: 100%;\n        color: black;\n        background-color: white;\n        z-index: 2;\n        padding: 0;\n        margin: 0;\n        opacity: 1;\n        box-sizing: content-box;\n        transition: all .4s ease;\n      }\n      app-drawer-layout {\n        font-family: sans-serif;\n      }\n      :host {\n        --app-drawer-width: 300px;\n      }\n      :host[full-width] {\n        --app-drawer-width: 0px;\n      }\n      :host[drawer-opened] .prev,\n      :host[edit-mode] .prev {\n        left: 17em;\n      }\n      .progress-container {\n        width: 90%;\n        padding: 0;\n        margin: 0 0 0 1em;\n        overflow: visible;\n      }\n\n      [main-title] {\n        font-weight: lighter;\n        padding: .6em 0 0 0;\n        margin: 0;\n        height: 3em;\n        overflow-y: scroll;\n      }\n      [hidden] {\n        visibility: hidden !important;\n        opacity: 0 !important;\n        display: block !important;\n      }\n      paper-search-bar[hidden] {\n        display: none !important;\n      }\n      lrnsys-progress {\n        margin-top: .5em;\n        padding: .2em 0 0 0;\n        box-sizing: content-box;\n      }\n      lrnsys-progress lrnsys-progress-circle {\n        list-style-type: none;\n        box-sizing: content-box;\n      }\n\n      #bookdrawercontent {\n        overflow: scroll;\n        visibility: visible;\n        display: block;\n        opacity: 1;\n        transition: visibility 1s linear, opacity 1s linear;\n      }\n      @media (max-width: 1200px) {\n        :host .content-body {\n          font-size: .94em;\n        }\n      }\n      @media (max-width: 960px) {\n        :host .content-body {\n          font-size: .92em;\n        }\n      }\n      @media (max-width: 820px) {\n        :host .content-body {\n          font-size: .9em;\n        }\n      }\n      @media (max-width: 700px) {\n        :host .content-body {\n          font-size: .9em;\n        }\n      }\n      @media (max-width: 639px) {\n        app-drawer-layout {\n          top: 0;\n        }\n        [main-title] {\n          font-size: .8em;\n        }\n        .content-title {\n          font-size: 1.1em;\n        }\n        .outline-title {\n          position: absolute !important;\n          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n          clip: rect(1px, 1px, 1px, 1px);\n          overflow: hidden;\n          height: 1px;\n        }\n        :host .content-body {\n          margin: 0 .5em;\n          font-size: .9em;\n          width: 85%;\n        }\n        .content-nav-buttons {\n          position: relative;\n          display: flex;\n          top: unset;\n          padding: 0;\n          opacity: .8;\n          height: unset;\n          margin: 0;\n        }\n        .content-nav {\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          vertical-align: middle;\n        }\n        .next {\n          right: unset;\n        }\n      }\n      @media (max-width: 500px) {\n        [main-title] {\n          font-size: .7em;\n        }\n      }\n      /**\n       * Authoring section\n       */\n      #editbutton {\n        position: fixed;\n        bottom: 0;\n        right: 0;\n        margin: 2em;\n        padding: .5em;\n        width: 1.6em;\n        height: 1.6em;\n        visibility: visible;\n        opacity: 1;\n        transition: all .4s ease;\n      }\n      :host[edit-mode] #editbutton {\n        width: 100%;\n        z-index: 100;\n        right: 0;\n        bottom: 0;\n        border-radius: 0;\n        margin: 0;\n        padding: 1em;\n        background-color: var(--paper-blue-500) !important;\n      }\n      :host[edit-mode] #header {\n        background-color: var(--paper-grey-500);\n      }\n      :host[edit-mode] #toolbar {\n        opacity: .5;\n      }\n      .your-progress-button {\n        padding-right: 1em;\n      }\n      #mapmenu {\n        padding: 1em 0;\n        overflow-x: hidden;\n      }\n      .course-title-drawer {\n        font-size: 1.2em;\n      }\n    </style>\n    <page-scroll-position value="{{scrollPosition}}"></page-scroll-position>\n    <div id="anchor"></div>\n    <iron-ajax id="outlineajax" params="[[requestParams]]" url="[[outlinePath]]" handle-as="json" on-response="handleOutlineResponse" last-response="{{outlineData}}"></iron-ajax>\n    <iron-ajax id="bookajax" params="[[requestParams]]" url="[[bookPath]]" handle-as="json" on-response="handleBookResponse" last-response="{{bookData}}"></iron-ajax>\n    <iron-ajax id="pageajax" url="[[pagePath]]" params="[[pageParams]]" handle-as="json" on-response="handlePageResponse" last-response="{{pageData}}"></iron-ajax>\n    <iron-ajax id="pageupdateajax" url="[[pageUpdatePath]]" params="[[pageParams]]" method="PUT" body="[[updatePageData]]" content-type="application/json" handle-as="json" on-response="_handleUpdateResponse"></iron-ajax>\n    <iron-ajax id="pagedeleteajax" url="[[pageDeletePath]]" params="[[pageParams]]" method="DELETE" content-type="application/json" handle-as="json" on-response="_handleDeleteResponse"></iron-ajax>\n    <iron-ajax id="pagecreateajax" url="[[pageCreatePath]]" method="POST" body="[[createRequestBody]]" handle-as="json" on-response="_ajaxCreateStubHandler"></iron-ajax>\n\n    <app-location route="{{route}}" query-params="{{queryParams}}"></app-location>\n    <app-route route="{{route}}" pattern="[[endPoint]]/:type/:id" data="{{data}}" tail="{{tail}}" query-params="{{queryParams}}">\n    </app-route>\n  <!-- body where most of the heavy lifting happens -->\n    <app-drawer-layout>\n      <hax-panel id="haxpanel">\n        <span slot="post">\n          <lrnsys-collapselist-item>\n          <span slot="label"><div class="label">Engagements</div></span>\n          <span slot="content">\n            <hax-panel-item icon="touch-app" icon-class="blue-text" label="Interactive video" event-name="h5p-interactive-video" voice-command="insert interactive video"></hax-panel-item>\n            <hax-panel-item icon="hardware:videogame-asset" icon-class="red-text" label="Self-check" event-name="h5p-multiple-choice" voice-command="insert self check"></hax-panel-item>\n            <hax-panel-item icon="timeline" icon-class="yellow-text text-darken-4" label="Timeline" event-name="timeline" voice-command="insert timeline"></hax-panel-item>\n            <hax-panel-item icon="maps:place" icon-class="green-text" label="Map" event-name="map" voice-command="insert map"></hax-panel-item>\n            <hax-panel-item icon="social:share" icon-class="pink-text" label="JMOL" event-name="jmol" voice-command="insert molecule"></hax-panel-item>\n            <hax-panel-item icon="social:poll" icon-class="orange-text" label="Poll" event-name="poll" voice-command="insert poll"></hax-panel-item>\n          </span>\n        </lrnsys-collapselist-item>\n        <lrnsys-collapselist-item>\n          <span slot="label"><div class="label">Assessments</div></span>\n          <span slot="content">\n            <hax-panel-item icon="assignment" icon-class="yellow-text text-darken-2" label="Assignment" event-name="assignment" voice-command="insert assignment"></hax-panel-item>\n            <hax-panel-item icon="assessment" icon-class="purple-text text-darken-2" label="Quiz" event-name="quiz" voice-command="insert quiz"></hax-panel-item>\n          </span>\n        </lrnsys-collapselist-item>\n      </span>\n      </hax-panel>\n      <app-drawer slot="drawer" id="bookdrawer" opened="{{drawerOpened}}" swipe-open="" transition-duration="150">\n        <div id="bookdrawercontent" style="height: 100%; overflow: auto;" hidden$="[[!bookItems]]">\n          <paper-search-bar hide-filter-button="" hidden$="[[!showSearch]]"></paper-search-bar>\n          <lrndesign-mapmenu id="mapmenu" on-tap="_bookOutlineTap">\n            <!-- Server response will populate this -->\n          </lrndesign-mapmenu>\n        </div>\n      </app-drawer>\n      <app-header-layout>\n        <app-header slot="header" id="header" shadow="" fixed="">\n          <div id="outlineloading" class="loading">\n            <elmsln-loading color="grey-text" size="medium"></elmsln-loading>\n            <elmsln-loading color="grey-text" size="medium"></elmsln-loading>\n            <elmsln-loading color="grey-text" size="medium"></elmsln-loading>\n          </div>\n          <app-toolbar id="toolbar" sticky="" class="tall">\n            <div style="pointer-events: auto;" class="menu-btn-wrap">\n              <paper-icon-button style="pointer-events: auto;" title="Content outline" id="menubutton" icon="menu"></paper-icon-button>\n            </div>\n            <div spacer="" class="outline-title">[[outlineTitle]]</div>\n            <div spacer="" main-title="" style="pointer-events: auto;">\n              <div class="progress-container">\n                <lrnsys-progress sound-finish="[[soundFinish]]" sound="[[sound]]" complete-sound="[[completeSound]]" finished-sound="[[finishedSound]]" title="The steps to complete this lesson" id="progress" active="{{activePage}}" items="{{outlineItems}}" progressive-unlock="" size="small"></lrnsys-progress>\n              </div>\n            </div>\n            <div class="your-progress-button">\n              <lrnsys-dialog body-append="" modal="" on-tap="progressdashboardopen" header="Your progress" alt="Your progress">\n                <span slot="button"><iron-icon icon="av:equalizer"></iron-icon></span>\n                <div>\n                  <lrnapp-book-progress-dashboard id="progressdashboard" source-path="[[progressDashboardPath]]" route-data="[[data]]"></lrnapp-book-progress-dashboard>\n                </div>\n              </lrnsys-dialog>\n            </div>\n          </app-toolbar>\n        </app-header>\n        <div class="content-body">\n          <div id="current" class="content-current">\n            <h2 id="currenttitle" class="content-title">[[currentTitle]]</h2>\n            <div id="bodyloading" class="loading">\n              <elmsln-loading color="grey-text" size="large"></elmsln-loading>\n              <h3 class="loading-text">Loading content..</h3>\n            </div>\n            <div>\n              <hax-body id="haxbody">\n                <slot id="slottedarea"></slot>\n              </hax-body>\n            </div>\n          </div>\n        </div>\n        <div class="content-nav">\n          <div class="content-nav-buttons next">\n            <paper-icon-button id="next" title="[[nextLabel]]" on-tap="_nextBtn" icon="hardware:keyboard-arrow-right" data-voicecommand="next page" hidden$="[[!hasNextPage]]"></paper-icon-button>\n            <paper-tooltip for="next" position="left" offset="0" animation-delay="100">\n              [[nextLabel]]\n            </paper-tooltip>\n          </div>\n          <div class="content-nav-buttons prev">\n            <paper-icon-button id="prev" title="[[prevLabel]]" on-tap="_prevBtn" icon="hardware:keyboard-arrow-left" data-voicecommand="previous page" hidden$="[[!hasPrevPage]]"></paper-icon-button>\n            <paper-tooltip for="prev" position="right" offset="0" animation-delay="100">\n              [[prevLabel]]\n            </paper-tooltip>\n          </div>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n    <!-- edit mode if they have permissions -->\n    <paper-fab id="editbutton" icon="editor:mode-edit" class="red white-text" hidden$="[[!currentPageData.page.meta.canUpdate]]" data-voicecommand="Edit content" on-tap="_toggleEditMode" title="Tap to place content in edit mode."></paper-fab>\n    <paper-tooltip for="editbutton" position="bottom" offset="8" animation-delay="100">\n      <span id="fablabel">edit mode</span>\n    </paper-tooltip>\n    <paper-toast id="toast" horizontal-align="left"></paper-toast>\n'
      ],
      [
        '\n    <style include="materializecss-styles"></style>\n    <style>\n      :host {\n        display: block;\n        font-size: 1em;\n        box-sizing: content-box;\n      }\n      #toolbar {\n        color: gray;\n        background-color: white;\n        padding: 0 .5em;\n        margin: 0;\n        height: auto;\n        box-sizing: content-box;\n        transition: all .4s ease;\n      }\n      paper-button {\n        padding: 0;\n        margin: 0;\n        min-width: 1rem;\n      }\n\n      hax-panel ::shadow app-drawer {\n        padding: 0;\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        box-sizing: content-box;\n        margin-left: -300px;\n        --app-drawer-content-container: {\n          background-color: #fafafa;\n          padding: 0;\n          border-right: 1px solid #c8c8c8;\n          overflow: inherit;\n          width: 300px !important;\n        }\n      }\n      app-drawer {\n        padding: 0;\n        top: 0;\n        bottom: 0;\n        z-index: 1;\n        position: absolute;\n        box-sizing: content-box;\n        --app-drawer-content-container: {\n          background-color: #fafafa;\n          padding: 0;\n          border-right: 1px solid #c8c8c8;\n          overflow-y: scroll;\n          width: 300px !important;\n          box-shadow: 0 76px 8px 0 rgba(0, 0, 0, 0.4);\n          height: 100vh;\n          top: 0;\n          position: sticky;\n        }\n      }\n      hax-panel {\n        font-size: .8rem;\n      }\n      hax-panel {\n      --app-drawer-content-container: {\n          background-color: #fafafa;\n          padding: 0;\n          border-right: 1px solid #c8c8c8;\n          overflow-y: scroll;\n          width: 300px !important;\n          box-shadow: 0 76px 8px 0 rgba(0, 0, 0, 0.4);\n          height: 100vh;\n          top: 0;\n          position: sticky;\n        }\n      }\n\n      lrndesign-stepper-button {\n        --lrndesign-stepper-btn-active: #f6f7f7;\n      }\n      lrndesign-stepper-button ::shadow paper-button {\n        margin: 0;\n        height: 3em;\n      }\n      lrndesign-stepper-button ::shadow .title-container.lrndesign-stepper-button {\n        padding: 0;\n        width: 100%;\n        right: unset;\n      }\n      lrndesign-stepper-button ::shadow .node-title.lrndesign-stepper-button {\n        font-size: .9em;\n        line-height: 1.5em;\n      }\n\n      .loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: .9;\n        text-align: center;\n        align-content: space-around;\n        justify-content: center;\n        position: absolute;\n        background-color: white;\n        padding: 0;\n        margin: 0;\n        display: flex;\n        margin: 0 auto;\n        visibility: visible;\n        transition: visibility 1s, opacity 1s ease;\n      }\n      .loading elmsln-loading {\n        margin: 0 5em;\n        display: inline-flex;\n      }\n      #bodyloading {\n        height: 100%;\n        display: flex;\n        justify-content: center;\n      }\n      #bodyloading .loading,\n      #bodyloading elmsln-loading{\n        display: block;\n        height: 5em;\n      }\n      .outline-title {\n        margin-left: .5em;\n        max-width: 50%;\n      }\n      .content-nav-buttons {\n        top: 60%;\n        position: fixed;\n        opacity: .8;\n        padding: 0 .25em;\n        height: 40%;\n        padding-top: 15%;\n        margin-top: -15%;\n      }\n      .content-nav-buttons:hover {\n        opacity: 1;\n      }\n      .prev {\n        left: 0;\n        order: 1;\n      }\n      .next {\n        right: 0;\n        transition: right .2s ease;\n        order: 2;\n      }\n      app-header {\n        width: 100%;\n        left: 0 !important;\n        z-index: 2 !important;\n        position: sticky !important;\n      }\n      app-header-layout {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n      }\n      .content-body {\n        position: relative;\n        padding: 0;\n        margin: -3em 4em 5em 4em;\n        font-size: 1.1em;\n        transition:\n          margin .4s ease,\n          width .4s ease;\n      }\n\n      .content-nav-buttons paper-icon-button {\n        width: 4em;\n        height: 4em;\n        opacity: .4;\n        display: block;\n        visibility: visible;\n        transition:\n          opacity .4s linear,\n          visibility 1s linear,\n          height .4s ease,\n          width .4s ease;\n      }\n      .content-nav-buttons paper-icon-button:hover {\n        opacity: 1;\n      }\n      paper-tooltip {\n        --paper-tooltip-opacity: .96;\n      }\n      :host[drawer-opened] .content-nav-buttons paper-icon-button {\n        width: 2.5em;\n        height: 2.5em;\n      }\n      :host[edit-mode] .content-nav-buttons {\n        opacity: 0;\n        pointer-events: none;\n        visibility: hidden;\n      }\n      .content-title {\n        font-size: 1.4em;\n        margin: 0;\n        padding: .25em 0;\n        background-color: white;\n        top: 70px;\n        position: sticky;\n      }\n      .content-current {\n        min-height: 100vh;\n      }\n      .content-next {\n        background-color: grey;\n        opacity: .8;\n      }\n      #header {\n        position: sticky;\n        top: 0;\n        left: 0;\n        width: 100%;\n        color: black;\n        background-color: white;\n        z-index: 2;\n        padding: 0;\n        margin: 0;\n        opacity: 1;\n        box-sizing: content-box;\n        transition: all .4s ease;\n      }\n      app-drawer-layout {\n        font-family: sans-serif;\n      }\n      :host {\n        --app-drawer-width: 300px;\n      }\n      :host[full-width] {\n        --app-drawer-width: 0px;\n      }\n      :host[drawer-opened] .prev,\n      :host[edit-mode] .prev {\n        left: 17em;\n      }\n      .progress-container {\n        width: 90%;\n        padding: 0;\n        margin: 0 0 0 1em;\n        overflow: visible;\n      }\n\n      [main-title] {\n        font-weight: lighter;\n        padding: .6em 0 0 0;\n        margin: 0;\n        height: 3em;\n        overflow-y: scroll;\n      }\n      [hidden] {\n        visibility: hidden !important;\n        opacity: 0 !important;\n        display: block !important;\n      }\n      paper-search-bar[hidden] {\n        display: none !important;\n      }\n      lrnsys-progress {\n        margin-top: .5em;\n        padding: .2em 0 0 0;\n        box-sizing: content-box;\n      }\n      lrnsys-progress lrnsys-progress-circle {\n        list-style-type: none;\n        box-sizing: content-box;\n      }\n\n      #bookdrawercontent {\n        overflow: scroll;\n        visibility: visible;\n        display: block;\n        opacity: 1;\n        transition: visibility 1s linear, opacity 1s linear;\n      }\n      @media (max-width: 1200px) {\n        :host .content-body {\n          font-size: .94em;\n        }\n      }\n      @media (max-width: 960px) {\n        :host .content-body {\n          font-size: .92em;\n        }\n      }\n      @media (max-width: 820px) {\n        :host .content-body {\n          font-size: .9em;\n        }\n      }\n      @media (max-width: 700px) {\n        :host .content-body {\n          font-size: .9em;\n        }\n      }\n      @media (max-width: 639px) {\n        app-drawer-layout {\n          top: 0;\n        }\n        [main-title] {\n          font-size: .8em;\n        }\n        .content-title {\n          font-size: 1.1em;\n        }\n        .outline-title {\n          position: absolute !important;\n          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n          clip: rect(1px, 1px, 1px, 1px);\n          overflow: hidden;\n          height: 1px;\n        }\n        :host .content-body {\n          margin: 0 .5em;\n          font-size: .9em;\n          width: 85%;\n        }\n        .content-nav-buttons {\n          position: relative;\n          display: flex;\n          top: unset;\n          padding: 0;\n          opacity: .8;\n          height: unset;\n          margin: 0;\n        }\n        .content-nav {\n          width: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          vertical-align: middle;\n        }\n        .next {\n          right: unset;\n        }\n      }\n      @media (max-width: 500px) {\n        [main-title] {\n          font-size: .7em;\n        }\n      }\n      /**\n       * Authoring section\n       */\n      #editbutton {\n        position: fixed;\n        bottom: 0;\n        right: 0;\n        margin: 2em;\n        padding: .5em;\n        width: 1.6em;\n        height: 1.6em;\n        visibility: visible;\n        opacity: 1;\n        transition: all .4s ease;\n      }\n      :host[edit-mode] #editbutton {\n        width: 100%;\n        z-index: 100;\n        right: 0;\n        bottom: 0;\n        border-radius: 0;\n        margin: 0;\n        padding: 1em;\n        background-color: var(--paper-blue-500) !important;\n      }\n      :host[edit-mode] #header {\n        background-color: var(--paper-grey-500);\n      }\n      :host[edit-mode] #toolbar {\n        opacity: .5;\n      }\n      .your-progress-button {\n        padding-right: 1em;\n      }\n      #mapmenu {\n        padding: 1em 0;\n        overflow-x: hidden;\n      }\n      .course-title-drawer {\n        font-size: 1.2em;\n      }\n    </style>\n    <page-scroll-position value="{{scrollPosition}}"></page-scroll-position>\n    <div id="anchor"></div>\n    <iron-ajax id="outlineajax" params="[[requestParams]]" url="[[outlinePath]]" handle-as="json" on-response="handleOutlineResponse" last-response="{{outlineData}}"></iron-ajax>\n    <iron-ajax id="bookajax" params="[[requestParams]]" url="[[bookPath]]" handle-as="json" on-response="handleBookResponse" last-response="{{bookData}}"></iron-ajax>\n    <iron-ajax id="pageajax" url="[[pagePath]]" params="[[pageParams]]" handle-as="json" on-response="handlePageResponse" last-response="{{pageData}}"></iron-ajax>\n    <iron-ajax id="pageupdateajax" url="[[pageUpdatePath]]" params="[[pageParams]]" method="PUT" body="[[updatePageData]]" content-type="application/json" handle-as="json" on-response="_handleUpdateResponse"></iron-ajax>\n    <iron-ajax id="pagedeleteajax" url="[[pageDeletePath]]" params="[[pageParams]]" method="DELETE" content-type="application/json" handle-as="json" on-response="_handleDeleteResponse"></iron-ajax>\n    <iron-ajax id="pagecreateajax" url="[[pageCreatePath]]" method="POST" body="[[createRequestBody]]" handle-as="json" on-response="_ajaxCreateStubHandler"></iron-ajax>\n\n    <app-location route="{{route}}" query-params="{{queryParams}}"></app-location>\n    <app-route route="{{route}}" pattern="[[endPoint]]/:type/:id" data="{{data}}" tail="{{tail}}" query-params="{{queryParams}}">\n    </app-route>\n  <!-- body where most of the heavy lifting happens -->\n    <app-drawer-layout>\n      <hax-panel id="haxpanel">\n        <span slot="post">\n          <lrnsys-collapselist-item>\n          <span slot="label"><div class="label">Engagements</div></span>\n          <span slot="content">\n            <hax-panel-item icon="touch-app" icon-class="blue-text" label="Interactive video" event-name="h5p-interactive-video" voice-command="insert interactive video"></hax-panel-item>\n            <hax-panel-item icon="hardware:videogame-asset" icon-class="red-text" label="Self-check" event-name="h5p-multiple-choice" voice-command="insert self check"></hax-panel-item>\n            <hax-panel-item icon="timeline" icon-class="yellow-text text-darken-4" label="Timeline" event-name="timeline" voice-command="insert timeline"></hax-panel-item>\n            <hax-panel-item icon="maps:place" icon-class="green-text" label="Map" event-name="map" voice-command="insert map"></hax-panel-item>\n            <hax-panel-item icon="social:share" icon-class="pink-text" label="JMOL" event-name="jmol" voice-command="insert molecule"></hax-panel-item>\n            <hax-panel-item icon="social:poll" icon-class="orange-text" label="Poll" event-name="poll" voice-command="insert poll"></hax-panel-item>\n          </span>\n        </lrnsys-collapselist-item>\n        <lrnsys-collapselist-item>\n          <span slot="label"><div class="label">Assessments</div></span>\n          <span slot="content">\n            <hax-panel-item icon="assignment" icon-class="yellow-text text-darken-2" label="Assignment" event-name="assignment" voice-command="insert assignment"></hax-panel-item>\n            <hax-panel-item icon="assessment" icon-class="purple-text text-darken-2" label="Quiz" event-name="quiz" voice-command="insert quiz"></hax-panel-item>\n          </span>\n        </lrnsys-collapselist-item>\n      </span>\n      </hax-panel>\n      <app-drawer slot="drawer" id="bookdrawer" opened="{{drawerOpened}}" swipe-open="" transition-duration="150">\n        <div id="bookdrawercontent" style="height: 100%; overflow: auto;" hidden\\$="[[!bookItems]]">\n          <paper-search-bar hide-filter-button="" hidden\\$="[[!showSearch]]"></paper-search-bar>\n          <lrndesign-mapmenu id="mapmenu" on-tap="_bookOutlineTap">\n            <!-- Server response will populate this -->\n          </lrndesign-mapmenu>\n        </div>\n      </app-drawer>\n      <app-header-layout>\n        <app-header slot="header" id="header" shadow="" fixed="">\n          <div id="outlineloading" class="loading">\n            <elmsln-loading color="grey-text" size="medium"></elmsln-loading>\n            <elmsln-loading color="grey-text" size="medium"></elmsln-loading>\n            <elmsln-loading color="grey-text" size="medium"></elmsln-loading>\n          </div>\n          <app-toolbar id="toolbar" sticky="" class="tall">\n            <div style="pointer-events: auto;" class="menu-btn-wrap">\n              <paper-icon-button style="pointer-events: auto;" title="Content outline" id="menubutton" icon="menu"></paper-icon-button>\n            </div>\n            <div spacer="" class="outline-title">[[outlineTitle]]</div>\n            <div spacer="" main-title="" style="pointer-events: auto;">\n              <div class="progress-container">\n                <lrnsys-progress sound-finish="[[soundFinish]]" sound="[[sound]]" complete-sound="[[completeSound]]" finished-sound="[[finishedSound]]" title="The steps to complete this lesson" id="progress" active="{{activePage}}" items="{{outlineItems}}" progressive-unlock="" size="small"></lrnsys-progress>\n              </div>\n            </div>\n            <div class="your-progress-button">\n              <lrnsys-dialog body-append="" modal="" on-tap="progressdashboardopen" header="Your progress" alt="Your progress">\n                <span slot="button"><iron-icon icon="av:equalizer"></iron-icon></span>\n                <div>\n                  <lrnapp-book-progress-dashboard id="progressdashboard" source-path="[[progressDashboardPath]]" route-data="[[data]]"></lrnapp-book-progress-dashboard>\n                </div>\n              </lrnsys-dialog>\n            </div>\n          </app-toolbar>\n        </app-header>\n        <div class="content-body">\n          <div id="current" class="content-current">\n            <h2 id="currenttitle" class="content-title">[[currentTitle]]</h2>\n            <div id="bodyloading" class="loading">\n              <elmsln-loading color="grey-text" size="large"></elmsln-loading>\n              <h3 class="loading-text">Loading content..</h3>\n            </div>\n            <div>\n              <hax-body id="haxbody">\n                <slot id="slottedarea"></slot>\n              </hax-body>\n            </div>\n          </div>\n        </div>\n        <div class="content-nav">\n          <div class="content-nav-buttons next">\n            <paper-icon-button id="next" title="[[nextLabel]]" on-tap="_nextBtn" icon="hardware:keyboard-arrow-right" data-voicecommand="next page" hidden\\$="[[!hasNextPage]]"></paper-icon-button>\n            <paper-tooltip for="next" position="left" offset="0" animation-delay="100">\n              [[nextLabel]]\n            </paper-tooltip>\n          </div>\n          <div class="content-nav-buttons prev">\n            <paper-icon-button id="prev" title="[[prevLabel]]" on-tap="_prevBtn" icon="hardware:keyboard-arrow-left" data-voicecommand="previous page" hidden\\$="[[!hasPrevPage]]"></paper-icon-button>\n            <paper-tooltip for="prev" position="right" offset="0" animation-delay="100">\n              [[prevLabel]]\n            </paper-tooltip>\n          </div>\n        </div>\n      </app-header-layout>\n    </app-drawer-layout>\n    <!-- edit mode if they have permissions -->\n    <paper-fab id="editbutton" icon="editor:mode-edit" class="red white-text" hidden\\$="[[!currentPageData.page.meta.canUpdate]]" data-voicecommand="Edit content" on-tap="_toggleEditMode" title="Tap to place content in edit mode."></paper-fab>\n    <paper-tooltip for="editbutton" position="bottom" offset="8" animation-delay="100">\n      <span id="fablabel">edit mode</span>\n    </paper-tooltip>\n    <paper-toast id="toast" horizontal-align="left"></paper-toast>\n'
      ]
    );
    _templateObject_050dca70dbba11e8bc142be5d27dc747 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_050dca70dbba11e8bc142be5d27dc747()
    ),
    is: "lrnapp-book",
    listeners: {
      "menubutton.tap": "toggleBook",
      "progress.node-percent-milestone": "testMilestone",
      "route-change": "_routeChange",
      "haxpanel.hax-item-selected": "_haxOperation",
      "haxpanel.hax-content-insert": "_haxContentInsert"
    },
    observers: ["_routeChanged(data, route, endPoint)"],
    properties: {
      progressDashboardPath: { type: String },
      showSearch: { type: Boolean, reflectToAttribute: !0, value: !1 },
      createRequestBody: {
        type: Object,
        computed: "_computeCreateRequestBody(currentPageData)"
      },
      updatePageData: {
        type: Object,
        value: { id: null, type: null, attributes: {} }
      },
      pageUpdatePath: {
        type: String,
        computed: "_computePageUpdatePath(data, sourcePath)"
      },
      sourcePath: { type: String },
      editMode: {
        type: Boolean,
        value: !1,
        reflectToAttribute: !0,
        observer: "_editModeChanged"
      },
      drawerOpened: { type: Boolean, value: !0, reflectToAttribute: !0 },
      route: { type: Object, notify: !0 },
      currentTitle: { type: String },
      outlineTitle: { type: String },
      bookTitle: { type: String, value: "Course outline" },
      soundFinish: { type: Boolean, value: !0 },
      sound: { type: Boolean, value: !0 },
      completeSound: { type: String, value: "" },
      finishedSound: { type: String, value: "" },
      scrollPosition: { type: Number, value: 0, observer: "_scrollChanged" },
      activePage: { type: Number, value: 0, observer: "_activePageChanged" },
      activeOutline: {
        type: Number,
        value: 0,
        observer: "_activeOutlineChanged"
      },
      outlineItems: {
        type: Array,
        value: [],
        notify: !0,
        observer: "_outlineItemsChanged"
      },
      bookItems: { type: Array, value: [], notify: !0 },
      itemResponses: { type: Array, value: [] },
      requestParams: { type: Object, notify: !0, value: { node: null } },
      pageParams: { type: Object, notify: !0, value: { load: !1 } },
      outlineData: { type: Object, notify: !0 },
      bookData: { type: Object, notify: !0 },
      pageData: { type: Object, notify: !0 },
      outlinePath: { type: String },
      bookPath: { type: String },
      pagePath: { type: String },
      hasPrevPage: { type: Boolean, notify: !0 },
      prevLabel: { type: String },
      hasNextPage: { type: Boolean, notify: !0 },
      nextLabel: { type: String },
      resetScroll: { type: Boolean, value: !1 },
      currentPageData: {
        type: Object,
        value: {},
        observer: "_currentPageDataUpdated"
      },
      responseData: { type: Object, value: {} },
      rebuildOutline: { type: Boolean, value: !1 },
      fullWidth: {
        type: Boolean,
        reflectToAttribute: !0,
        value: !1,
        observer: "_fullWidthChanged"
      }
    },
    ready: function ready() {
      var _this = this;
      this.$.bodyloading.hidden = !0;
      this.$.outlineajax.generateRequest();
      setTimeout(function() {
        _this._resetScroll();
      }, 500);
    },
    _fullWidthChanged: function _fullWidthChanged() {
      (0, _elementMixin.updateStyles)();
    },
    progressdashboardopen: function progressdashboardopen() {
      this.$.progressdashboard.showProgress = !0;
    },
    _computePageUpdatePath: function _computePageUpdatePath(data, sourcePath) {
      return sourcePath.replace("%", data.id);
    },
    _haxOperation: function _haxOperation(e) {
      this.$.toast.show(e.detail.eventName);
    },
    _haxContentInsert: function _haxContentInsert(e) {
      this.$.toast.show(e.detail.eventName);
      var properties = {};
      if (babelHelpers.typeof(e.detail.properties) !== "undefined") {
        properties = e.detail.properties;
      }
      this.$.haxbody.haxInsert(e.detail.tag, e.detail.content, properties);
    },
    _computeCreateRequestBody: function _computeCreateRequestBody(
      currentPageData
    ) {
      if (babelHelpers.typeof(currentPageData.page) !== "undefined") {
        return {
          bid: currentPageData.page.relationships.book.id,
          pid: currentPageData.page.relationships.parent.id
        };
      }
    },
    _toggleEditMode: function _toggleEditMode() {
      this.editMode = !this.editMode;
    },
    _editModeChanged: function _editModeChanged(newValue, oldValue) {
      if (babelHelpers.typeof(newValue) !== "undefined") {
        if (!0 === newValue) {
          this.$.editbutton.icon = "save";
          this.$.editbutton.title = "Tap to save content and exit edit mode";
          this.$.fablabel = "save changes";
          this.__bookdraweropened = this.$.bookdrawer.opened;
          if (this.$.bookdrawer.opened) {
            this.$.bookdrawer.opened = !1;
          }
          this.$.haxpanel.opened = !0;
          this.$.currenttitle.contentEditable = !0;
          this.$.haxbody.editMode = !0;
          this.resetScroll = !0;
          this.$.toast.show("Authoring mode active");
        } else {
          this.$.editbutton.icon = "editor:mode-edit";
          this.$.editbutton.title = "Tap to place content in edit mode.";
          this.$.fablabel = "edit mode";
          this.$.bookdrawer.opened = this.__bookdraweropened;
          this.$.haxpanel.opened = !1;
          this.$.currenttitle.contentEditable = !1;
          this.$.haxbody.editMode = !1;
          this.resetScroll = !1;
          if (!0 === oldValue) {
            var updated = !1,
              haxcontent = this.$.haxbody.haxToContent();
            if (this.$.currenttitle.innerHTML !== this.currentPageData.title) {
              this.currentPageData.title = this.$.currenttitle.innerHTML;
              this.updatePageData.attributes.title = this.currentPageData.title;
            }
            if (this.currentPageData.content !== haxcontent) {
              this.currentPageData.content = haxcontent;
              this.updatePageData.attributes.body = this.currentPageData.content;
              updated = !0;
            }
            if (updated) {
              this.updatePageData.type = this.data.type;
              this.updatePageData.id = this.data.id;
              this.$.toast.show("Saving...");
              this.$.pageupdateajax.generateRequest();
            }
          }
        }
      }
    },
    _handleUpdateResponse: function _handleUpdateResponse() {
      this.$.toast.show("Saved!");
    },
    _bookOutlineTap: function _bookOutlineTap(e) {
      var normalizedEvent = (0, _polymerDom.dom)(e),
        local = normalizedEvent.localTarget;
      if (
        babelHelpers.typeof(local.getAttribute("data-book-parent")) !==
        "undefined"
      ) {
        this.activeOutline = local.getAttribute("data-book-parent");
      }
    },
    _activeOutlineChanged: function _activeOutlineChanged(newValue, oldValue) {
      if (
        babelHelpers.typeof(newValue) !== "undefined" &&
        babelHelpers.typeof(oldValue) !== "undefined"
      ) {
        this.rebuildOutline = !0;
      }
    },
    _routeChanged: function _routeChanged(data, route, endPoint) {
      if ("string" === typeof route.path) {
        if ("string" === typeof endPoint) {
          if (route.path.startsWith(endPoint)) {
            if (
              !1 != this.pageParams.load &&
              babelHelpers.typeof(data.type) !== "undefined" &&
              babelHelpers.typeof(data.id) !== "undefined"
            ) {
              this.pageParams[data.type] = data.id;
              if (
                babelHelpers.typeof(this.responseData[data.type + data.id]) !==
                "undefined"
              ) {
                this.set(
                  "currentPageData",
                  this.responseData[data.type + data.id]
                );
              } else {
                this.$.bodyloading.hidden = !1;
                this.$.pageajax.generateRequest();
              }
              if (this.rebuildOutline) {
                this.set("requestParams", []);
                this.set("requestParams", this.pageParams);
                if (
                  babelHelpers.typeof(
                    this.responseData[data.type + "." + data.id + ".outline"]
                  ) !== "undefined"
                ) {
                  this.activePage = 0;
                  this.set("outlineItems", []);
                  this.set(
                    "outlineItems",
                    this._toArray(
                      this.responseData[data.type + "." + data.id + ".outline"]
                        .items
                    )
                  );
                  this.set(
                    "outlineTitle",
                    this.responseData[data.type + "." + data.id + ".outline"]
                      .items.outlineTitle
                  );
                } else {
                  this.$.outlineloading.hidden = !1;
                  this.pageParams.load = !1;
                  this.$.outlineajax.generateRequest();
                }
                this.rebuildOutline = !1;
              }
            }
            return;
          }
        }
        window.location.reload();
      }
    },
    _resetScroll: function _resetScroll() {
      this.resetScroll = !0;
      this.scrollPosition = 0;
      this.$.anchor.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "nearest"
      });
    },
    _activePageChanged: function _activePageChanged(newValue, oldValue) {
      var _this2 = this;
      if (babelHelpers.typeof(newValue) !== "undefined") {
        if (babelHelpers.typeof(this.outlineItems) !== "undefined") {
          this.set("route.path", this.outlineItems[newValue].url);
          this.updatePageData.attributes = {};
          this.updatePageData.id = null;
          this.updatePageData.type = null;
        }
        if (babelHelpers.typeof(oldValue) !== "undefined") {
        }
        setTimeout(function() {
          _this2.resetScroll = !1;
        }, 1e3);
        if (0 == newValue) {
          this.hasPrevPage = !1;
        } else {
          this.hasPrevPage = !0;
          if (babelHelpers.typeof(this.outlineItems) !== "undefined") {
            this.prevLabel = this.outlineItems[newValue - 1].title;
          }
        }
        if (
          babelHelpers.typeof(this.outlineItems) !== "undefined" &&
          newValue + 1 == this.outlineItems.length
        ) {
          this.hasNextPage = !1;
        } else {
          this.hasNextPage = !0;
          if (babelHelpers.typeof(this.outlineItems) !== "undefined") {
            this.nextLabel = this.outlineItems[newValue + 1].title;
          }
        }
      }
    },
    _outlineItemsChanged: function _outlineItemsChanged(newValue) {
      if (
        babelHelpers.typeof(newValue) !== "undefined" &&
        0 != newValue.length
      ) {
        if (0 != this.activePage) {
          this.prevLabel = newValue[this.activePage - 1].title;
        }
        if (this.activePage + 1 != newValue.length) {
          this.nextLabel = newValue[this.activePage + 1].title;
        }
      }
    },
    testMilestone: function testMilestone(e) {
      if (75 == e.detail.percentage) {
        console.log(
          "@todo preload the next page and present grayed out right of UI."
        );
      }
    },
    _scrollChanged: function _scrollChanged(newValue) {
      if (
        babelHelpers.typeof(this.outlineItems) !== "undefined" &&
        babelHelpers.typeof(this.outlineItems[this.activePage]) !==
          "undefined" &&
        newValue > this.outlineItems[this.activePage].value &&
        !this.resetScroll
      ) {
        if (75 <= newValue) {
          this.outlineItems[this.activePage].value = this.outlineItems[
            this.activePage
          ].max;
          this.set(
            "outlineItems." + this.activePage + ".value",
            this.outlineItems[this.activePage].max
          );
        } else {
          this.outlineItems[this.activePage].value = newValue;
          this.set("outlineItems." + this.activePage + ".value", newValue);
        }
      }
    },
    _nextBtn: function _nextBtn() {
      if (this.activePage < this.outlineItems.length - 1) {
        this.set(
          "outlineItems." + this.activePage + ".value",
          this.outlineItems[this.activePage].max
        );
        this.activePage = this.activePage + 1;
      }
    },
    _prevBtn: function _prevBtn() {
      if (0 < this.activePage) {
        this.activePage = this.activePage - 1;
      }
    },
    toggleBook: function toggleBook() {
      if (this.editMode) {
        this.$.haxpanel.toggle();
        this.fullWidth = !this.$.haxpanel.opened;
      } else {
        this.$.bookdrawer.toggle();
        this.fullWidth = !this.$.bookdrawer.opened;
      }
    },
    handleOutlineResponse: function handleOutlineResponse(obj) {
      if (babelHelpers.typeof(obj) !== "undefined") {
        var response = obj.detail.response.data,
          items = this._toArray(obj.detail.response.data.items),
          outlineTitle = obj.detail.response.data.outlineTitle;
        if (0 !== this.activePage) {
          this.activePage = 0;
        }
        this.set(
          "responseData." + this.data.type + "." + this.data.id + ".outline",
          response
        );
        this.set("outlineItems", []);
        this.set("outlineItems", items);
        this.set("outlineTitle", outlineTitle);
        var activePage = 0;
        for (var i in items) {
          if (
            this.data.type === items[i].type &&
            this.data.id === items[i].id &&
            0 !== i
          ) {
            activePage = parseInt(i);
          }
        }
        if (0 !== activePage) {
          this.activePage = activePage;
        }
        this.$.outlineloading.hidden = !0;
        this.pageParams.load = !0;
        if (0 === this.bookItems.length) {
          this.$.bookajax.generateRequest();
          this.pageParams = this.requestParams;
          this.$.pageajax.generateRequest();
        }
      }
    },
    handleBookResponse: function handleBookResponse(obj) {
      var response = obj.detail.response.data;
      this.set("bookItems", this._toArray(response.items));
      this.$.mapmenu.innerHTML = response.render;
    },
    handlePageResponse: function handlePageResponse(obj) {
      if (babelHelpers.typeof(obj) !== "undefined") {
        var response = obj.detail.response.data;
        this.set("responseData." + this.data.type + this.data.id, response);
        this.set("currentPageData", response);
      }
    },
    _currentPageDataUpdated: function _currentPageDataUpdated(newValue) {
      if (
        babelHelpers.typeof(newValue) !== "undefined" &&
        babelHelpers.typeof(newValue.content) !== "undefined"
      ) {
        this.set("currentTitle", newValue.title);
        var slot = (0, _polymerDom.dom)(this.$.haxbody);
        while (null !== slot.firstChild) {
          slot.removeChild(slot.firstChild);
        }
        var tmp = document.createElement("div"),
          frag = document
            .createRange()
            .createContextualFragment(newValue.content);
        tmp.appendChild(frag);
        if (null == tmp.firstChild) {
          var tmp2 = document.createElement("p");
          tmp2.innerHTML = tmp.innerHTML;
          tmp = document.createElement("div");
          tmp.innerHTML = tmp2.outerHTML;
        } else if (babelHelpers.typeof(tmp.firstChild.length) !== "undefined") {
          var tmp2 = document.createElement("p");
          tmp2.innerHTML = tmp.innerHTML;
          tmp = document.createElement("div");
          tmp.innerHTML = tmp2.outerHTML;
        }
        while (tmp.firstChild) {
          (0, _polymerDom.dom)(this.$.haxbody).appendChild(tmp.firstChild);
        }
        this._resetScroll();
        this.$.bodyloading.hidden = !0;
        if (this.editMode && !newValue.page.meta.canUpdate) {
          this.editMode = !1;
        }
      }
    },
    _toArray: function _toArray(obj) {
      return Object.keys(obj).map(function(key) {
        return obj[key];
      });
    }
  });
});
