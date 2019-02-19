define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/simple-timer/simple-timer.js","./node_modules/@lrnwebcomponents/simple-modal/simple-modal.js","./node_modules/@lrnwebcomponents/to-do/to-do.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-button/paper-button.js"],function(_exports,_polymerLegacy,_simpleTimer,_simpleModal,_toDo,_paperCard,_paperButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SillyHaxGame=void 0;function _templateObject_4c235900344a11e984672df013455c74(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <paper-card heading=\"[[haxText]]\" elevation=\"1\">\n      <simple-timer\n        id=\"timer\"\n        start-time=\"60\"\n        count-up=\"\"\n        hidden=\"\"\n        current-time=\"{{timer}}\"\n      ></simple-timer>\n      <div class=\"card-content\">\n        <to-do\n          items=\"{{tasks}}\"\n          hide-form=\"\"\n          id=\"todo\"\n          name=\"Hax Challenge\"\n        ></to-do>\n      </div>\n      <div class=\"card-actions\">\n        <paper-button id=\"play\" raised=\"\" on-tap=\"_playButton\"\n          >Play</paper-button\n        >\n        <paper-button raised=\"\" on-tap=\"_resetTimer\">Reset</paper-button>\n      </div>\n    </paper-card>\n  "]);_templateObject_4c235900344a11e984672df013455c74=function _templateObject_4c235900344a11e984672df013455c74(){return data};return data}var SillyHaxGame=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_4c235900344a11e984672df013455c74()),is:"silly-hax-game",properties:{tasks:{type:Array,value:[]},haxText:{type:String,computed:"_haxTextValue(timer)"},__score:{type:Array,value:[]},tweet:{type:String},timer:{type:Number},playing:{type:Boolean,value:!1,observer:"_playGame",reflectToAttribute:!0}},_playButton:function _playButton(e){if(!this.playing){this.playing=!0;this.$.timer.start()}},_playGame:function _playGame(newValue,oldValue){if(newValue){this.__started=!0;this.set("tasks",[]);this.push("tasks",{value:!1,label:"Start to edit with HAX",disabled:!0,id:"play"},{value:!1,label:"Embed a video by Searching for it",disabled:!0,id:"youtube"},{value:!1,label:"Turn a NASA image into a meme",disabled:!0,id:"nasa"},{value:!1,label:"Saved content!!!",disabled:!0,id:"saved"})}},_resetTimer:function _resetTimer(e){this.$.timer.pause();this.playing=!1;this.timer=0;this.set("tasks",[])},_haxTextValue:function _haxTextValue(time){if(babelHelpers.typeof(time)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))||60==time){return"Take the HAX challenge"}else{return time.toFixed(2)}},attached:function attached(){document.body.addEventListener("hax-body-tag-added",this._verifyAction.bind(this));document.body.addEventListener("hax-store-property-updated",this._propertyUpdated.bind(this))},_propertyUpdated:function _propertyUpdated(e){switch(e.detail.property){case"editMode":if(this.playing&&this.__started&&e.detail.value&&babelHelpers.typeof(this.tasks[0].label)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.set("tasks.0.value",!0);this.set("tasks.0.label",this.tasks[0].label+" - "+this.timer.toFixed(2)+" seconds")}else if(!1===e.detail.value&&this.__started&&this.playing){this.set("tasks."+(parseInt(this.tasks.length)-1)+".value",!0);this.set("tasks."+(parseInt(this.tasks.length)-1)+".label",this.tasks[parseInt(this.tasks.length)-1].label+" - "+this.timer.toFixed(2)+" seconds");this.$.timer.pause();this._verifyWin()}break;}},_verifyWin:function _verifyWin(){var win=!0,winning=0;this.set("__score",this.tasks);for(var i in this.tasks){if(!this.tasks[i].value){win=!1}else{winning++}}if(0===this.timer){win=!1;this.push("__score",{value:!1,label:"You ran out of time :(",disabled:!0,id:"time"})}else if(!win){this.push("__score",{value:!1,label:"You didn't complete everything. CHEATER!",disabled:!0,id:"cheater"})}else{this.push("__score",{value:!0,label:"You did it!!! <(:) Much Success!",disabled:!0,id:"time"});winning++}if(!win){this.__successText=":( You have much sadness by only completing "+winning+" of the available "+this.tasks.length+" challenges. If you experienced confusion when using the interface for certain tasks please let us know! We want everyone to be able to master HAX.";this.tweet="http://twitter.com/home?status="+encodeURIComponent("I took the #HaxtheWeb Challenge and finished "+winning+" challenges! Take the challenge at http://haxtheweb.org/ !")}else{this.__successText="YOU ARE A HAX MASTER! YOU BEAT ALL "+this.tasks.length+" CHALLENGES. AM I USING ENOUGH CAPSLOCK!? YOU BET I AM! TWEET YOUR SUCCESS NOW!";this.tweet="http://twitter.com/home?status="+encodeURIComponent("I are winning! I beat the #HaxtheWeb Challenge in "+this.timer.toFixed(2)+" seconds. Now I drink more coffee and code less! Take the challenge at http://haxtheweb.org/ !")}var c=document.createElement("div");c.innerHTML="<p>".concat(this.__successText,"\n      <a href=\"https://github.com/elmsln/lrnwebcomponents/issues/new\" target=\"_blank\" style=\"text-decoration: none;text-transform: none;\"><paper-button raised=\"\">Give us feedback to improve</paper-button></a>\n      <a href=\"").concat(this.tweet,"\" target=\"_blank\" style=\"text-decoration: none;text-transform: none;\"><paper-button raised=\"\">Tweet your score</paper-button></a>\n    </p>");var todo=document.createElement("to-do");todo.setAttribute("hide-form","hide-form");todo.setAttribute("name","Report card");todo.setAttribute("items",JSON.stringify(this.__score,null,2));c.appendChild(todo);var evt=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:"HAX Challenge score",elements:{content:c},invokedBy:this.$.play,clone:!0}});this.dispatchEvent(evt)},_verifyAction:function _verifyAction(e){if(this.playing&&this.__started){if("VIDEO-PLAYER"===e.detail.node.tagName){this.set("tasks.1.value",!0);this.set("tasks.1.label",this.tasks[1].label+" - "+this.timer.toFixed(2)+" seconds")}else if("MEME-MAKER"===e.detail.node.tagName){this.set("tasks.2.value",!0);this.set("tasks.2.label",this.tasks[2].label+" - "+this.timer.toFixed(2)+" seconds")}}}});_exports.SillyHaxGame=SillyHaxGame});