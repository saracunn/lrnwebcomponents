!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js"],n):n((e=e||self).CodeSample={},e.polymerElement_js,e.flattenedNodesObserver_js)}(this,function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e,n,t){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}(e,n);if(r){var a=Object.getOwnPropertyDescriptor(r,n);return a.get?a.get.call(t):a.value}})(e,n,t||e)}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=c(["\n  <style>\n    /*\n\n  Atom One Dark by Daniel Gamage\n  Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\n  base:    #282c34\n  mono-1:  #abb2bf\n  mono-2:  #818896\n  mono-3:  #5c6370\n  hue-1:   #56b6c2\n  hue-2:   #61aeee\n  hue-3:   #c678dd\n  hue-4:   #98c379\n  hue-5:   #e06c75\n  hue-5-2: #be5046\n  hue-6:   #d19a66\n  hue-6-2: #e6c07b\n\n  */\n\n    .hljs {\n      display: block;\n      overflow-x: auto;\n      color: var(--code-sample-color, #abb2bf);\n      background: var(--code-sample-background, #282c34);\n    }\n\n    .hljs-comment,\n    .hljs-quote {\n      color: #5c6370;\n      font-style: italic;\n    }\n\n    .hljs-doctag,\n    .hljs-keyword,\n    .hljs-formula {\n      color: #c678dd;\n    }\n\n    .hljs-section,\n    .hljs-name,\n    .hljs-selector-tag,\n    .hljs-deletion,\n    .hljs-subst,\n    .hljs-tag {\n      color: #e06c75;\n    }\n\n    .hljs-literal {\n      color: #56b6c2;\n    }\n\n    .hljs-string,\n    .hljs-regexp,\n    .hljs-addition,\n    .hljs-attribute,\n    .hljs-meta-string {\n      color: #98c379;\n    }\n\n    .hljs-built_in,\n    .hljs-class .hljs-title {\n      color: #e6c07b;\n    }\n\n    .hljs-attr,\n    .hljs-variable,\n    .hljs-template-variable,\n    .hljs-type,\n    .hljs-selector-class,\n    .hljs-selector-attr,\n    .hljs-selector-pseudo,\n    .hljs-number {\n      color: #d19a66;\n    }\n\n    .hljs-symbol,\n    .hljs-bullet,\n    .hljs-link,\n    .hljs-meta,\n    .hljs-selector-id,\n    .hljs-title {\n      color: #61aeee;\n    }\n\n    .hljs-emphasis {\n      font-style: italic;\n    }\n\n    .hljs-strong {\n      font-weight: bold;\n    }\n\n    .hljs-link {\n      text-decoration: underline;\n    }\n\n    .hljs-params {\n      color: #e6c07b;\n    }\n  </style>\n"]);return u=function(){return e},e}var d=n.html(u()),g={},p=[],h=Object.keys,m={},f={},b=/^(no-?highlight|plain|text)$/i,v=/\blang(?:uage)?-([\w-]+)\b/i,y=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,E="</span>",_={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function N(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function O(e){return e.nodeName.toLowerCase()}function R(e,n){var t=e&&e.exec(n);return t&&0===t.index}function w(e){return b.test(e)}function C(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function M(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),O(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function x(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function r(a,o){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var i={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");i[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?s("keyword",a.keywords):h(a.keywords).forEach(function(e){s(e,a.keywords[e])}),a.keywords=i}a.lexemesRe=t(a.lexemes||/\w+/,!0),o&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&o.terminator_end&&(a.terminator_end+=(a.end?"|":"")+o.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]),a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return C(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[C(e)]||[e]}("self"===e?a:e)})),a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,o);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?(?:"+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=l.length?t(function(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,o="",i=0;i<e.length;i++){var s=a,l=n(e[i]);for(i>0&&(o+=t);l.length>0;){var c=r.exec(l);if(null==c){o+=l;break}o+=l.substring(0,c.index),l=l.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?o+="\\"+String(Number(c[1])+s):(o+=c[0],"("==c[0]&&a++)}}return o}(l,"|"),!0):{exec:function(){return null}}}}(e)}function S(e,n,t,r){function a(e,n){var t=c.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function o(e,n,t,r){var a='<span class="'+(r?"":_.classPrefix);return(a+=e+'">')+n+(t?"":E)}function i(){p+=null!=d.subLanguage?function(){var e="string"==typeof d.subLanguage;if(e&&!m[d.subLanguage])return N(h);var n=e?S(d.subLanguage,h,!0,g[d.subLanguage]):j(h,d.subLanguage.length?d.subLanguage:void 0);return d.relevance>0&&(f+=n.relevance),e&&(g[d.subLanguage]=n.top),o(n.language,n.value,!1,!0)}():function(){var e,n,t,r;if(!d.keywords)return N(h);for(r="",n=0,d.lexemesRe.lastIndex=0,t=d.lexemesRe.exec(h);t;)r+=N(h.substring(n,t.index)),(e=a(d,t))?(f+=e[1],r+=o(e[0],N(t[0]))):r+=N(t[0]),n=d.lexemesRe.lastIndex,t=d.lexemesRe.exec(h);return r+N(h.substr(n))}(),h=""}function s(e){p+=e.className?o(e.className,"",!0):"",d=Object.create(e,{parent:{value:d}})}function l(e,n){if(h+=e,null==n)return i(),0;var r=function(e,n){var t,r,a;for(t=0,r=n.contains.length;t<r;t++)if(R(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=(a=n.contains[t].beginRe.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.contains[t]}(n,d);if(r)return r.skip?h+=n:(r.excludeBegin&&(h+=n),i(),r.returnBegin||r.excludeBegin||(h=n)),s(r),r.returnBegin?0:n.length;var a=function e(n,t){if(R(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(d,n);if(a){var o=d;o.skip?h+=n:(o.returnEnd||o.excludeEnd||(h+=n),i(),o.excludeEnd&&(h=n));do{d.className&&(p+=E),d.skip||d.subLanguage||(f+=d.relevance),d=d.parent}while(d!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),s(a.starts)),o.returnEnd?0:n.length}if(function(e,n){return!t&&R(n.illegalRe,e)}(n,d))throw new Error('Illegal lexeme "'+n+'" for mode "'+(d.className||"<unnamed>")+'"');return h+=n,n.length||1}var c=D(e);if(!c)throw new Error('Unknown language: "'+e+'"');x(c);var u,d=r||c,g={},p="";for(u=d;u!==c;u=u.parent)u.className&&(p=o(u.className,"",!0)+p);var h="",f=0;try{for(var b,v,y=0;d.terminators.lastIndex=y,b=d.terminators.exec(n);)v=l(n.substring(y,b.index),b[0]),y=b.index+v;for(l(n.substr(y)),u=d;u.parent;u=u.parent)u.className&&(p+=E);return{relevance:f,value:p,language:e,top:d}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:N(n)};throw e}}function j(e,n){n=n||_.languages||h(m);var t={relevance:0,value:N(e)},r=t;return n.filter(D).filter(L).forEach(function(n){var a=S(n,e,!1);a.language=n,a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)}),r.language&&(t.second_best=r),t}function k(e){return _.tabReplace||_.useBR?e.replace(y,function(e,n){return _.useBR&&"\n"===e?"<br>":_.tabReplace?n.replace(/\t/g,_.tabReplace):""}):e}function T(e){var n,t,r,a,o,i=function(e){var n,t,r,a,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=v.exec(o))return D(t[1])?t[1]:"no-highlight";for(n=0,r=(o=o.split(/\s+/)).length;n<r;n++)if(w(a=o[n])||D(a))return a}(e);w(i)||(_.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,o=n.textContent,r=i?S(i,o,!0):j(o),(t=M(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,t){var r=0,a="",o=[];function i(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function s(e){a+="<"+O(e)+p.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+N(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){a+="</"+O(e)+">"}function c(e){("start"===e.event?s:l)(e.node)}for(;e.length||n.length;){var u=i();if(a+=N(t.substring(r,u[0].offset)),r=u[0].offset,u===e){o.reverse().forEach(l);do{c(u.splice(0,1)[0]),u=i()}while(u===e&&u.length&&u[0].offset===r);o.reverse().forEach(s)}else"start"===u[0].event?o.push(u[0].node):o.pop(),c(u.splice(0,1)[0])}return a+N(t.substr(r))}(t,M(a),o)),r.value=k(r.value),e.innerHTML=r.value,e.className=function(e,n,t){var r=n?f[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}(e.className,i,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function A(){if(!A.called){A.called=!0;var e=document.querySelectorAll("pre code");p.forEach.call(e,T)}}function D(e){return e=(e||"").toLowerCase(),m[e]||m[f[e]]}function L(e){var n=D(e);return n&&!n.disableAutodetect}g.highlight=S,g.highlightAuto=j,g.fixMarkup=k,g.highlightBlock=T,g.configure=function(e){_=C(_,e)},g.initHighlighting=A,g.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",A,!1),addEventListener("load",A,!1)},g.registerLanguage=function(e,n){var t=m[e]=n(g);t.aliases&&t.aliases.forEach(function(n){f[n]=e})},g.listLanguages=function(){return h(m)},g.getLanguage=D,g.autoDetection=L,g.inherit=C,g.IDENT_RE="[a-zA-Z]\\w*",g.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",g.NUMBER_RE="\\b\\d+(\\.\\d+)?",g.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",g.BINARY_NUMBER_RE="\\b(0b[01]+)",g.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",g.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},g.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[g.BACKSLASH_ESCAPE]},g.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[g.BACKSLASH_ESCAPE]},g.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},g.COMMENT=function(e,n,t){var r=g.inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return r.contains.push(g.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},g.C_LINE_COMMENT_MODE=g.COMMENT("//","$"),g.C_BLOCK_COMMENT_MODE=g.COMMENT("/\\*","\\*/"),g.HASH_COMMENT_MODE=g.COMMENT("#","$"),g.NUMBER_MODE={className:"number",begin:g.NUMBER_RE,relevance:0},g.C_NUMBER_MODE={className:"number",begin:g.C_NUMBER_RE,relevance:0},g.BINARY_NUMBER_MODE={className:"number",begin:g.BINARY_NUMBER_RE,relevance:0},g.CSS_NUMBER_MODE={className:"number",begin:g.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},g.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[g.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[g.BACKSLASH_ESCAPE]}]},g.TITLE_MODE={className:"title",begin:g.IDENT_RE,relevance:0},g.UNDERSCORE_TITLE_MODE={className:"title",begin:g.UNDERSCORE_IDENT_RE,relevance:0},g.METHOD_GUARD={begin:"\\.\\s*"+g.UNDERSCORE_IDENT_RE,relevance:0};function B(){var e=c(['\n<style>\n:host {\n    display: block;\n}\n\n:host([hidden]),\n[hidden] {\n    display: none;\n}\n\npre {\n    margin: 0;\n    @apply --code-sample-pre;\n}\n\npre, code {\n    font-family: var(--code-sample-font-family, Operator Mono, Inconsolata, Roboto Mono, monaco, consolas, monospace);\n    font-size: var(--code-sample-font-size, 0.875rem);\n}\n\n.hljs {\n    padding: 0 1.25rem;\n    line-height: var(--code-sample-line-height, 1.3);\n    @apply --code-sample-hljs;\n}\n\n.demo:not(:empty) {\n    padding: var(--code-sample-demo-padding, 0 0 1.25rem);\n    @apply --code-sample-demo-not-empty;\n}\n\n.demo {\n    @apply --code-sample-demo;\n}\n\n#code-container {\n    position: relative;\n    @apply --code-sample-code-container;\n}\n\n#code-container:hover {\n    @apply --code-sample-code-container-hover;\n}\n\n#code-container:hover > button {\n    @apply --code-sample-code-container-hover-button;\n}\n\nbutton {\n    background: var(--code-sample-copy-button-bg-color, #e0e0e0);\n    border: none;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 0;\n    text-transform: uppercase;\n    @apply --code-sample-copy-clipboard-button;\n}\n        </style>\n<div id="theme">','</div>\n<div id="demo" class="demo"></div>\n<slot id="content"></slot>\n\n<div id="code-container">\n  <button type="button" hidden="[[!copyClipboardButton]]" id="copyButton" title="Copy to clipboard" on-click="_copyToClipboard">Copy</button>\n  <pre id="code"></pre>\n</div>']);return B=function(){return e},e}g.registerLanguage("javascript",function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]};a.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,r,e.REGEXP_MODE];var i=a.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:i}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:i}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}),g.registerLanguage("xml",function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}),window.hljs=g;var I=function(e){function c(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),s(this,o(c).apply(this,arguments))}var u,p,h;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(c,n.PolymerElement),u=c,h=[{key:"template",get:function(){return n.html(B(),this.constructor.theme||d)}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Code sample",description:"A sample of code highlighted in the page",icon:"icons:code",color:"blue",groups:["Code","Development"],meta:{author:"kuscamara"}},settings:{quick:[],configure:[{slot:"",slotWrapper:"template",slotAttributes:{"preserve-content":"preserve-content"},title:"Source",description:"The URL for this video.",inputMethod:"code-editor"},{attribute:"copy-clipboard-button",title:"Copy to clipboard button",description:"button in top right that says copy to clipboard",inputMethod:"boolean"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){a(e,n,t[n])})}return e}({},l(o(c),"properties",this),{copyClipboardButton:{type:Boolean,value:!1},theme:{type:String,observer:"_themeChanged"},render:{type:Boolean,value:!1},type:{type:String}})}},{key:"tag",get:function(){return"code-sample"}}],(p=[{key:"connectedCallback",value:function(){var e=this;l(o(c.prototype),"connectedCallback",this).call(this),setTimeout(function(){e.querySelector("template")?e._observer=new t.FlattenedNodesObserver(e.shadowRoot.querySelector("#content"),function(){return e._updateContent()}):e.childNodes.length&&console.error("<code-sample>:","content must be provided inside a <template> tag")})}},{key:"disconnectedCallback",value:function(){l(o(c.prototype),"disconnectedCallback",this).call(this),this._observer&&(this._observer.disconnect(),this._observer=null)}},{key:"_themeChanged",value:function(e){if(e&&this._themeCanBeChanged()){var n=this.shadowRoot.querySelector("#theme").querySelector("style");this.shadowRoot.querySelector("#theme").replaceChild(document.importNode(e.content,!0),n)}}},{key:"_themeCanBeChanged",value:function(){if(window.ShadyCSS)console.error("<code-sample>:","Theme changing is not supported in Shady DOM.");else{if("TEMPLATE"===this.theme.tagName)return!0;console.error("<code-sample>:","theme must be a template")}}},{key:"_updateContent",value:function(){this._code&&this._code.parentNode.removeChild(this._code),this._demo&&(this.shadowRoot.querySelector("#demo").innerHTML="");var e=this._getCodeTemplate();this.render&&(this._demo=this.shadowRoot.querySelector("#demo").appendChild(document.importNode(e.content,!0))),this._highlight(e.innerHTML)}},{key:"_getCodeTemplate",value:function(){var e=t.FlattenedNodesObserver.getFlattenedNodes(this.shadowRoot.querySelector("#content"));return[].filter.call(e,function(e){return e.nodeType===Node.ELEMENT_NODE})[0]}},{key:"_highlight",value:function(e){this._code=document.createElement("code"),this.type&&this._code.classList.add(this.type),this._code.innerHTML=this._entitize(this._cleanIndentation(e)),this.shadowRoot.querySelector("#code").appendChild(this._code),g.highlightBlock(this._code)}},{key:"_cleanIndentation",value:function(e){var n=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(n,"g"),"\n")}},{key:"_entitize",value:function(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}},{key:"_copyToClipboard",value:function(e){var n=e.target,t=this._textAreaWithClonedContent();t.select();try{document.execCommand("copy",!1),n.textContent="Done"}catch(e){console.error(e),n.textContent="Error"}t.remove(),setTimeout(function(){n.textContent="Copy"},1e3)}},{key:"_textAreaWithClonedContent",value:function(){var e=document.createElement("textarea");return document.body.appendChild(e),e.value=this._cleanIndentation(this._getCodeTemplate().innerHTML),e}}])&&r(u.prototype,p),h&&r(u,h),c}();window.customElements.define(I.tag,I),e.CodeSample=I,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=code-sample.umd.js.map
