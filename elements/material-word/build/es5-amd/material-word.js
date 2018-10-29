define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_6a794d00dbb811e882422f50cb71974c() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n  <custom-style>\n  <style>\n  html {\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    outline: none;\n  }\n\n  body {\n    background: #673AB7;\n    font-family: \'Roboto\', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    color: #373737;\n    line-height: 26px;\n    text-align: left;\n    overflow-x: hidden;\n    margin: auto;\n    width: 100%;\n    outline: none;\n  }\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  *{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    border-radius: 0;\n    -webkit-border-radius: 0;\n    border-spacing: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: normal;\n    -webkit-tap-highlight-color: transparent;\n    outline: 0 !important;\n    -webkit-touch-callout: none;\n    transition-timing-function: ease-in-out;\n    -moz-transition-timing-function: ease-in-out;\n    -webkit-transition-timing-function: ease-in-out;\n    -o-transition-timing-function: ease-in-out;\n    transition-duration: .2s;\n    -moz-transition-duration: .2s;\n    -webkit-transition-duration: .2s;\n    -o-transition-duration: .2s;\n  }\n\n  @viewport {\n    width: device-width;\n  }\n\n  .fab {\n    margin: 0 7% 0 0;\n    background-color: #FF9800;\n    height: 70px;\n    width: 70px;\n    border-radius: 50px;\n    color: #fff;\n    font-size: 30px;\n    text-align: center;\n    line-height: 75px;\n    position: absolute;\n    right: 0;\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n  }\n  .fab:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22), 0 14px 56px rgba(0, 0, 0, 0.25);\n  }\n  .fab:hover i{\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n\n  .social i{\n    font-size: 40px;\n    margin: 30px 0px 15px;\n    color: #8460C4;\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n  }\n  .social i:hover{\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border-radius: 50%;\n    text-align: center;\n\n  }\n  .wrapper{\n    margin: 0 auto;\n    width: 75%;\n  }\n\n  .cname_wrapper,.title_wrapper{\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  .cname-title,.alfa-title {\n    -webkit-transform: scale(0.6);\n    transform: scale(0.6);\n    margin: -15px;\n  }\n\n  @media (min-width:480px) {\n    .title_wrapper{\n      width: 60%;\n      margin: 0 auto;\n    }\n      .wrapper{\n      margin: 0 auto;\n      width: 85%;\n    }\n  }\n  @media (min-width:640px) {\n    .wrapper{\n      margin: 0 auto;\n      width: 80%;\n    }\n  }\n  @media (min-width:768px) {\n    .title_wrapper{\n      width: 600px;\n      margin: 0 auto;\n    }\n    .cname-title{\n      -webkit-transform: scale(0.5);\n      transform: scale(0.5);\n      margin: -21px;\n    }\n    .cname_wrapper{\n      width: 690px;\n      margin: 0 auto;\n    }\n  }\n  @media (min-width:1200px) {\n     .wrapper{\n      margin: 0 auto;\n      width: 1200px;\n    }\n  }\n  .card{\n    display: inline-block;\n    width: 150px;\n    height: 150px;\n    padding: 2em;\n    margin: 1em;\n    background: #fff;\n    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);\n  }\n  .alphabets, .alfa-title , .cname-title{\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n    position: relative;\n  }\n\n  .alphabets {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  .a{\n    display: block;\n    height: 100px;\n  }\n\n  .a:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 50px 100px 50px;\n    border-color: transparent transparent rgba(233, 30, 99, 0.8) transparent;\n  }\n\n  .b{\n    display: block;\n    height: 100px;\n  }\n\n  .b:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(103, 58, 183, 0.8);\n  }\n\n  .b:after{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    top:35px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(103, 58, 183, 0.5);\n  }\n\n  .c{\n    display: block;\n    height: 100px;\n  }\n\n  .c:before{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 60px;\n    top: 12px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(0, 150, 136, 0.8);\n    -webkit-transform: rotate(140deg);\n      transform: rotate(140deg);\n  }\n\n  .c:after{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 60px;\n    top: -12px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(0, 150, 136, 0.5);\n    -webkit-transform: rotate(210deg);\n    transform: rotate(210deg);\n  }\n\n  .d{\n    display: block;\n    height: 100px;\n  }\n\n  .d:before{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 100px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(63, 81, 181, 0.8);\n  }\n\n  .e,.e-half{\n    display: block;\n    height: 100px;\n  }\n  .e:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.8);\n    height: 100px;\n    width: 40px;\n  }\n  .e:after{\n    position: absolute;\n    content: "";\n    top: 0;\n    background-color: rgba(255, 152, 0, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .e-half:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.5);\n    top:35px;\n    height: 30px;\n    width: 100px;\n  }\n  .e-half:after{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.5);\n    bottom:0;\n    height: 30px;\n    width: 100px;\n  }\n\n  .f,.f-half{\n    display: block;\n    height: 100px;\n  }\n  .f:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.8);\n    height: 100px;\n    width: 40px;\n  }\n  .f:after{\n    position: absolute;\n    content: "";\n    top: 0;\n    background-color: rgba(0, 188, 212, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .f-half:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.5);\n    top:35px;\n    height: 30px;\n    width: 100px;\n  }\n  .g{\n    display: block;\n    height: 100px;\n  }\n  .g:before{\n    position: absolute;\n    content: "";\n    height: 60px;\n    width: 60px;\n    bottom: 0;\n    left: 30px;\n    background-color: rgba(103, 58, 183, 0.8)\n  }\n  .g:after{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 60px;\n    top: -12px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(103, 58, 183, 0.5);\n    -webkit-transform: rotate(210deg);\n    transform: rotate(210deg);\n  }\n  .h,.h-half{\n    display: block;\n    height: 100px;\n  }\n  .h:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.8);\n    top:30px;\n    height: 40px;\n    width: 100px;\n  }\n  .h:after{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.5);\n    height: 100px;\n    width: 45px;\n  }\n\n  .h-half:before{\n    position: absolute;\n    content: "";\n    top: 0;\n    right: 0;\n    background-color: rgba(0, 188, 212, 0.5);\n    height: 100px;\n    width: 45px;\n  }\n\n  .i,.i-half{\n    display: block;\n    height: 100px;\n  }\n  .i:before{\n    position: absolute;\n    content: "";\n    top:0;\n    background-color: rgba(255, 152, 0, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .i:after{\n    position: absolute;\n    content: "";\n    bottom: 0;\n    background-color: rgba(255, 152, 0, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .i-half:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.8);\n    top:0px;\n    left: 25px;\n    height: 100px;\n    width: 50px;\n  }\n\n  .j{\n    display: block;\n    height: 100px;\n  }\n  .j:before{\n     position: absolute;\n    content: "";\n    height: 50px;\n    width: 100px;\n    bottom: 0;\n    border-radius: 0px 0px 50px 50px;\n    background-color: rgba(233, 30, 99, 0.5);\n  }\n  .j:after{\n    position: absolute;\n    content: "";\n    right: 0;\n    background-color: rgba(233, 30, 99, 0.8);\n    height: 100px;\n    width: 50px;\n  }\n  .k{\n    display: block;\n    height: 100px;\n  }\n  .k:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(103, 58, 183, 0.8) transparent;\n  }\n  .k:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(103, 58, 183, 0.5) transparent;\n     -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n  .l{\n    display: block;\n    height: 100px;\n  }\n  .l:before{\n    position: absolute;\n    content: "";\n    bottom:0;\n    background-color: rgba(0, 150, 136, 0.8);\n    height: 30px;\n    width: 100px;\n  }\n  .l:after{\n    position: absolute;\n    content: "";\n    left: 0;\n    background-color: rgba(0, 150, 136, 0.5);\n    height: 100px;\n    width: 50px;\n  }\n\n  .m{\n    display: block;\n    height: 100px;\n  }\n  .m:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.8) transparent;\n  }\n  .m:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.5) transparent;\n  }\n\n  .n{\n    display: block;\n    height: 100px;\n  }\n  .n:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    background-color: rgba(233, 30, 99, 0.5);\n  }\n  .n:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0px;\n    border-color: transparent transparent rgba(233, 30, 99, 0.8) transparent;\n  }\n  .o{\n    display: block;\n    height: 100px;\n  }\n  .o:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: rgba(0, 150, 136, 0.8);\n  }\n\n  .p{\n    display: block;\n    height: 100px;\n  }\n  .p:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(103, 58, 183, 0.8);\n  }\n  .p:after{\n    position: absolute;\n    content: "";\n    left: 0;\n    width: 50px;\n    height: 100px;\n    background-color: rgba(103, 58, 183, 0.5);\n  }\n\n  .q{\n    display: block;\n    height: 100px;\n  }\n  .q:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: rgba(255, 152, 0, 0.5);\n  }\n  .q:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    bottom: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 50px 50px 0px;\n    border-color: transparent transparent rgba(255, 152, 0, 0.8) transparent;\n  }\n\n  .r{\n    display: block;\n    height: 100px;\n  }\n  .r:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(0, 188, 212, 0.5);\n  }\n  .r:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0px;\n    border-color: transparent transparent rgba(0, 188, 212, 0.8) transparent;\n  }\n  .s{\n    display: block;\n    height: 100px;\n  }\n  .s:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(0, 150, 136, 0.8);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n  .s:after{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    top:35px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(0, 150, 136, 0.5);\n  }\n\n  .t{\n    display: block;\n    height: 100px;\n  }\n  .t:before{\n    position: absolute;\n    content: "";\n    top:0;\n    background-color: rgba(103, 58, 183, 0.8);\n    height: 30px;\n    width: 100px;\n  }\n  .t:after{\n    position: absolute;\n    content: "";\n    left: 25px;\n    background-color: rgba(103, 58, 183, 0.5);\n    height: 100px;\n    width: 50px;\n  }\n  .u{\n    display: block;\n    height: 100px;\n  }\n\n  .u:before{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 100px;\n    border-radius: 0 0 50px 50px;\n    background-color: rgba(255, 152, 0, 0.8);\n  }\n  .v{\n    display: block;\n    height: 100px;\n  }\n\n  .v:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 50px 100px 50px;\n    border-color: transparent transparent rgba(233, 30, 99, 0.8) transparent;\n       -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n\n  .w{\n    display: block;\n    height: 100px;\n  }\n  .w:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.8) transparent;\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  .w:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.5) transparent;\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n  .x{\n    display: block;\n    height: 100px;\n  }\n  .x:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(0, 150, 136, 0.8) transparent;\n  }\n  .x:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(0, 150, 136, 0.5) transparent;\n     -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n\n  .y{\n    display: block;\n    height: 100px;\n  }\n  .y:before{\n     position: absolute;\n    content: "";\n    height: 60px;\n    width: 100px;\n    top: 0;\n    border-radius: 0px 0px 50px 50px;\n    background-color: rgba(255, 152, 0, 0.5);\n  }\n  .y:after{\n    position: absolute;\n    content: "";\n    left: 25px;\n    background-color: rgba(255, 152, 0, 0.8);\n    height: 100px;\n    width: 50px;\n  }\n  .z{\n    display: block;\n    height: 100px;\n  }\n  .z:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    background-color: rgba(0, 188, 212, 0.5);\n  }\n  .z:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0px;\n    border-color: transparent transparent rgba(0, 188, 212, 0.8) transparent;\n      -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n  </style>\n  </custom-style>\n  <div class="card-title">\n      <div class="wrapper">\n        <div class="container-fluid">\n\n          <template is="dom-if" if="[[letters]]">\n\n            <template is="dom-repeat" items="[[letters]]">\n\n              <div class="card">\n                <div class="alphabets">\n                  <div class$="[[item]]"></div>\n                  <template is="dom-if" if="[[showHalf(item)]]">\n                    <div class$="[[item]]-half"></div>\n                  </template>\n                </div>\n              </div>\n\n            </template>\n          </template>\n        </div>\n      </div>\n</div>\n'
      ],
      [
        '\n  <custom-style>\n  <style>\n  html {\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    outline: none;\n  }\n\n  body {\n    background: #673AB7;\n    font-family: \'Roboto\', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    color: #373737;\n    line-height: 26px;\n    text-align: left;\n    overflow-x: hidden;\n    margin: auto;\n    width: 100%;\n    outline: none;\n  }\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  *{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    border-radius: 0;\n    -webkit-border-radius: 0;\n    border-spacing: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: normal;\n    -webkit-tap-highlight-color: transparent;\n    outline: 0 !important;\n    -webkit-touch-callout: none;\n    transition-timing-function: ease-in-out;\n    -moz-transition-timing-function: ease-in-out;\n    -webkit-transition-timing-function: ease-in-out;\n    -o-transition-timing-function: ease-in-out;\n    transition-duration: .2s;\n    -moz-transition-duration: .2s;\n    -webkit-transition-duration: .2s;\n    -o-transition-duration: .2s;\n  }\n\n  @viewport {\n    width: device-width;\n  }\n\n  .fab {\n    margin: 0 7% 0 0;\n    background-color: #FF9800;\n    height: 70px;\n    width: 70px;\n    border-radius: 50px;\n    color: #fff;\n    font-size: 30px;\n    text-align: center;\n    line-height: 75px;\n    position: absolute;\n    right: 0;\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n  }\n  .fab:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.22), 0 14px 56px rgba(0, 0, 0, 0.25);\n  }\n  .fab:hover i{\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n\n  .social i{\n    font-size: 40px;\n    margin: 30px 0px 15px;\n    color: #8460C4;\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n  }\n  .social i:hover{\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border-radius: 50%;\n    text-align: center;\n\n  }\n  .wrapper{\n    margin: 0 auto;\n    width: 75%;\n  }\n\n  .cname_wrapper,.title_wrapper{\n    width: 70%;\n    margin: 0 auto;\n  }\n\n  .cname-title,.alfa-title {\n    -webkit-transform: scale(0.6);\n    transform: scale(0.6);\n    margin: -15px;\n  }\n\n  @media (min-width:480px) {\n    .title_wrapper{\n      width: 60%;\n      margin: 0 auto;\n    }\n      .wrapper{\n      margin: 0 auto;\n      width: 85%;\n    }\n  }\n  @media (min-width:640px) {\n    .wrapper{\n      margin: 0 auto;\n      width: 80%;\n    }\n  }\n  @media (min-width:768px) {\n    .title_wrapper{\n      width: 600px;\n      margin: 0 auto;\n    }\n    .cname-title{\n      -webkit-transform: scale(0.5);\n      transform: scale(0.5);\n      margin: -21px;\n    }\n    .cname_wrapper{\n      width: 690px;\n      margin: 0 auto;\n    }\n  }\n  @media (min-width:1200px) {\n     .wrapper{\n      margin: 0 auto;\n      width: 1200px;\n    }\n  }\n  .card{\n    display: inline-block;\n    width: 150px;\n    height: 150px;\n    padding: 2em;\n    margin: 1em;\n    background: #fff;\n    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);\n  }\n  .alphabets, .alfa-title , .cname-title{\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n    position: relative;\n  }\n\n  .alphabets {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  .a{\n    display: block;\n    height: 100px;\n  }\n\n  .a:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 50px 100px 50px;\n    border-color: transparent transparent rgba(233, 30, 99, 0.8) transparent;\n  }\n\n  .b{\n    display: block;\n    height: 100px;\n  }\n\n  .b:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(103, 58, 183, 0.8);\n  }\n\n  .b:after{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    top:35px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(103, 58, 183, 0.5);\n  }\n\n  .c{\n    display: block;\n    height: 100px;\n  }\n\n  .c:before{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 60px;\n    top: 12px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(0, 150, 136, 0.8);\n    -webkit-transform: rotate(140deg);\n      transform: rotate(140deg);\n  }\n\n  .c:after{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 60px;\n    top: -12px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(0, 150, 136, 0.5);\n    -webkit-transform: rotate(210deg);\n    transform: rotate(210deg);\n  }\n\n  .d{\n    display: block;\n    height: 100px;\n  }\n\n  .d:before{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 100px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(63, 81, 181, 0.8);\n  }\n\n  .e,.e-half{\n    display: block;\n    height: 100px;\n  }\n  .e:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.8);\n    height: 100px;\n    width: 40px;\n  }\n  .e:after{\n    position: absolute;\n    content: "";\n    top: 0;\n    background-color: rgba(255, 152, 0, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .e-half:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.5);\n    top:35px;\n    height: 30px;\n    width: 100px;\n  }\n  .e-half:after{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.5);\n    bottom:0;\n    height: 30px;\n    width: 100px;\n  }\n\n  .f,.f-half{\n    display: block;\n    height: 100px;\n  }\n  .f:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.8);\n    height: 100px;\n    width: 40px;\n  }\n  .f:after{\n    position: absolute;\n    content: "";\n    top: 0;\n    background-color: rgba(0, 188, 212, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .f-half:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.5);\n    top:35px;\n    height: 30px;\n    width: 100px;\n  }\n  .g{\n    display: block;\n    height: 100px;\n  }\n  .g:before{\n    position: absolute;\n    content: "";\n    height: 60px;\n    width: 60px;\n    bottom: 0;\n    left: 30px;\n    background-color: rgba(103, 58, 183, 0.8)\n  }\n  .g:after{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 60px;\n    top: -12px;\n    border-radius: 0 50px 50px 0px;\n    background-color: rgba(103, 58, 183, 0.5);\n    -webkit-transform: rotate(210deg);\n    transform: rotate(210deg);\n  }\n  .h,.h-half{\n    display: block;\n    height: 100px;\n  }\n  .h:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.8);\n    top:30px;\n    height: 40px;\n    width: 100px;\n  }\n  .h:after{\n    position: absolute;\n    content: "";\n    background-color: rgba(0, 188, 212, 0.5);\n    height: 100px;\n    width: 45px;\n  }\n\n  .h-half:before{\n    position: absolute;\n    content: "";\n    top: 0;\n    right: 0;\n    background-color: rgba(0, 188, 212, 0.5);\n    height: 100px;\n    width: 45px;\n  }\n\n  .i,.i-half{\n    display: block;\n    height: 100px;\n  }\n  .i:before{\n    position: absolute;\n    content: "";\n    top:0;\n    background-color: rgba(255, 152, 0, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .i:after{\n    position: absolute;\n    content: "";\n    bottom: 0;\n    background-color: rgba(255, 152, 0, 0.5);\n    height: 30px;\n    width: 100px;\n  }\n  .i-half:before{\n    position: absolute;\n    content: "";\n    background-color: rgba(255, 152, 0, 0.8);\n    top:0px;\n    left: 25px;\n    height: 100px;\n    width: 50px;\n  }\n\n  .j{\n    display: block;\n    height: 100px;\n  }\n  .j:before{\n     position: absolute;\n    content: "";\n    height: 50px;\n    width: 100px;\n    bottom: 0;\n    border-radius: 0px 0px 50px 50px;\n    background-color: rgba(233, 30, 99, 0.5);\n  }\n  .j:after{\n    position: absolute;\n    content: "";\n    right: 0;\n    background-color: rgba(233, 30, 99, 0.8);\n    height: 100px;\n    width: 50px;\n  }\n  .k{\n    display: block;\n    height: 100px;\n  }\n  .k:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(103, 58, 183, 0.8) transparent;\n  }\n  .k:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(103, 58, 183, 0.5) transparent;\n     -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n  .l{\n    display: block;\n    height: 100px;\n  }\n  .l:before{\n    position: absolute;\n    content: "";\n    bottom:0;\n    background-color: rgba(0, 150, 136, 0.8);\n    height: 30px;\n    width: 100px;\n  }\n  .l:after{\n    position: absolute;\n    content: "";\n    left: 0;\n    background-color: rgba(0, 150, 136, 0.5);\n    height: 100px;\n    width: 50px;\n  }\n\n  .m{\n    display: block;\n    height: 100px;\n  }\n  .m:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.8) transparent;\n  }\n  .m:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.5) transparent;\n  }\n\n  .n{\n    display: block;\n    height: 100px;\n  }\n  .n:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    background-color: rgba(233, 30, 99, 0.5);\n  }\n  .n:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0px;\n    border-color: transparent transparent rgba(233, 30, 99, 0.8) transparent;\n  }\n  .o{\n    display: block;\n    height: 100px;\n  }\n  .o:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: rgba(0, 150, 136, 0.8);\n  }\n\n  .p{\n    display: block;\n    height: 100px;\n  }\n  .p:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(103, 58, 183, 0.8);\n  }\n  .p:after{\n    position: absolute;\n    content: "";\n    left: 0;\n    width: 50px;\n    height: 100px;\n    background-color: rgba(103, 58, 183, 0.5);\n  }\n\n  .q{\n    display: block;\n    height: 100px;\n  }\n  .q:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: rgba(255, 152, 0, 0.5);\n  }\n  .q:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    bottom: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 50px 50px 0px;\n    border-color: transparent transparent rgba(255, 152, 0, 0.8) transparent;\n  }\n\n  .r{\n    display: block;\n    height: 100px;\n  }\n  .r:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(0, 188, 212, 0.5);\n  }\n  .r:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0px;\n    border-color: transparent transparent rgba(0, 188, 212, 0.8) transparent;\n  }\n  .s{\n    display: block;\n    height: 100px;\n  }\n  .s:before{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(0, 150, 136, 0.8);\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n  .s:after{\n    position: absolute;\n    content: "";\n    height: 65px;\n    width: 100px;\n    top:35px;\n    border-radius: 0 30px 30px 0px;\n    background-color: rgba(0, 150, 136, 0.5);\n  }\n\n  .t{\n    display: block;\n    height: 100px;\n  }\n  .t:before{\n    position: absolute;\n    content: "";\n    top:0;\n    background-color: rgba(103, 58, 183, 0.8);\n    height: 30px;\n    width: 100px;\n  }\n  .t:after{\n    position: absolute;\n    content: "";\n    left: 25px;\n    background-color: rgba(103, 58, 183, 0.5);\n    height: 100px;\n    width: 50px;\n  }\n  .u{\n    display: block;\n    height: 100px;\n  }\n\n  .u:before{\n    position: absolute;\n    content: "";\n    height: 100px;\n    width: 100px;\n    border-radius: 0 0 50px 50px;\n    background-color: rgba(255, 152, 0, 0.8);\n  }\n  .v{\n    display: block;\n    height: 100px;\n  }\n\n  .v:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 50px 100px 50px;\n    border-color: transparent transparent rgba(233, 30, 99, 0.8) transparent;\n       -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n\n  .w{\n    display: block;\n    height: 100px;\n  }\n  .w:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    left: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.8) transparent;\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n  .w:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 35px 100px 35px;\n    border-color: transparent transparent rgba(63, 81, 181, 0.5) transparent;\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n\n  .x{\n    display: block;\n    height: 100px;\n  }\n  .x:before{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(0, 150, 136, 0.8) transparent;\n  }\n  .x:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0;\n    border-color: transparent transparent rgba(0, 150, 136, 0.5) transparent;\n     -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n\n  .y{\n    display: block;\n    height: 100px;\n  }\n  .y:before{\n     position: absolute;\n    content: "";\n    height: 60px;\n    width: 100px;\n    top: 0;\n    border-radius: 0px 0px 50px 50px;\n    background-color: rgba(255, 152, 0, 0.5);\n  }\n  .y:after{\n    position: absolute;\n    content: "";\n    left: 25px;\n    background-color: rgba(255, 152, 0, 0.8);\n    height: 100px;\n    width: 50px;\n  }\n  .z{\n    display: block;\n    height: 100px;\n  }\n  .z:before{\n    position: absolute;\n    content: "";\n    width: 100px;\n    height: 100px;\n    background-color: rgba(0, 188, 212, 0.5);\n  }\n  .z:after{\n    position: absolute;\n    content: "";\n    width: 0;\n    height: 0;\n    right: 0;\n    border-style: solid;\n    border-width: 0 100px 100px 0px;\n    border-color: transparent transparent rgba(0, 188, 212, 0.8) transparent;\n      -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n  </style>\n  </custom-style>\n  <div class="card-title">\n      <div class="wrapper">\n        <div class="container-fluid">\n\n          <template is="dom-if" if="[[letters]]">\n\n            <template is="dom-repeat" items="[[letters]]">\n\n              <div class="card">\n                <div class="alphabets">\n                  <div class\\$="[[item]]"></div>\n                  <template is="dom-if" if="[[showHalf(item)]]">\n                    <div class\\$="[[item]]-half"></div>\n                  </template>\n                </div>\n              </div>\n\n            </template>\n          </template>\n        </div>\n      </div>\n</div>\n'
      ]
    );
    _templateObject_6a794d00dbb811e882422f50cb71974c = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_6a794d00dbb811e882422f50cb71974c()
    ),
    is: "material-word",
    properties: {
      word: { type: String, notify: !0 },
      letters: { type: Array, value: [], notify: !0, reflectToAttribute: !0 },
      halfLetters: { type: Array, value: ["e", "f", "h", "i"] }
    },
    ready: function ready() {
      var word = this.getAttribute("word"),
        letters = word
          .toLowerCase()
          .trim()
          .split("");
      if (letters.length) {
        this.letters = letters;
      }
    },
    showHalf: function showHalf(letter) {
      if (this.halfLetters[letter]) {
        return !0;
      }
      return !1;
    }
  });
});
