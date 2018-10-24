!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js"],t):t(e.polymerLegacy_js)}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e,t,n=(e=['\n    <custom-style>\n    <style is="custom-style">\n      :host {\n        display: inline-block;\n      }\n      :host[size="tiny"] #image {\n        width: 5em;\n        height: 5em;\n      }\n      :host[size="small"] #image {\n        width: 10em;\n        height: 10em;\n      }\n      :host[size="medium"] #image {\n        width: 15em;\n        height: 15em;\n      }\n      :host[size="large"] #image {\n        width: 20em;\n        height: 20em;\n      }\n      :host[size="epic"] #image {\n        width: 45em;\n        height: 45em;\n      }\n\n      :host[color="red"] #image {\n        filter: sepia() saturate(10000%) hue-rotate(30deg);\n      }\n      :host[color="purple"] #image {\n        filter: sepia() saturate(10000%) hue-rotate(290deg);\n      }\n      :host[color="blue"] #image {\n        filter: sepia() saturate(10000%) hue-rotate(210deg);\n      }\n      :host[color="orange"] #image {\n        filter: sepia() saturate(10000%) hue-rotate(320deg);\n      }\n      :host[color="yellow"] #image {\n        filter: sepia() saturate(10000%) hue-rotate(70deg);\n      }\n      #image {\n        width: 15em;\n        height: 15em;\n      }\n    </style>\n    </custom-style>\n    <img src="[[image]]" id="image" class="image-tag" alt="" />\n'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return n},n}e.Polymer({_template:e.html(o()),is:"awesome-explosion",listeners:{tap:"_setPlaySound",mouseover:"_setPlaySound",mouseout:"_setStopSound"},properties:{state:{type:String,value:"stop",reflectToAttribute:!0},stopped:{type:Boolean,computed:"_calculateStopped(state)"},playing:{type:Boolean,computed:"_calculatePlaying(state)"},paused:{type:Boolean,computed:"_calculatePaused(state)"},image:{type:String,value:"assets/explode.gif",reflectToAttribute:!0},sound:{type:String,value:"assets/273320__clagnut__fireworks.mp3",reflectToAttribute:!0},size:{type:String,value:"medium",reflectToAttribute:!0},color:{type:String,value:"",reflectToAttribute:!0},resetSound:{type:Boolean,value:!1,reflectToAttribute:!0}},_calculateStopped:function(e,o){"stop"==e?(this.stopped=!0,"undefined"!==t(window.audio)&&(window.audio.currentTime=0),this._stopSound(),this.fire("awesome-event",{message:"Sound stopped"})):this.stopped=!1},_calculatePlaying:function(e,t){"play"==e?(this.playing=!0,this._playSound(),this.fire("awesome-event",{message:"Sound played"})):this.playing=!1},_calculatePaused:function(e,t){"pause"==e?(this.paused=!0,this._stopSound(),this.fire("awesome-event",{message:"Sound paused"})):this.paused=!1},_stopSound:function(){"undefined"!==t(window.audio)&&(window.audio.pause(),this.resetSound&&(window.audio.currentTime=0))},_setPlaySound:function(e){this.state="play"},_setStopSound:function(e){this.state="pause"},_playSound:function(){"undefined"===t(window.audio)&&(window.audio=new Audio(this.sound)),window.audio.play()}})});
//# sourceMappingURL=awesome-explosion.umd.js.map
