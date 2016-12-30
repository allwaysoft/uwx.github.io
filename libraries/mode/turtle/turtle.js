(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("turtle",function(e){var t=e.indentUnit;var n;function r(e){return new RegExp("^(?:"+e.join("|")+")$","i")}var i=r([]);var o=r(["@prefix","@base","a"]);var l=/[*+\-<>=&|]/;function c(e,t){var r=e.next();n=null;if(r=="<"&&!e.match(/^[\s\u00a0=]/,false)){e.match(/^[^\s\u00a0>]*>?/);return"atom"}else if(r=='"'||r=="'"){t.tokenize=u(r);return t.tokenize(e,t)}else if(/[{}\(\),\.;\[\]]/.test(r)){n=r;return null}else if(r=="#"){e.skipToEnd();return"comment"}else if(l.test(r)){e.eatWhile(l);return null}else if(r==":"){return"operator"}else{e.eatWhile(/[_\w\d]/);if(e.peek()==":"){return"variable-3"}else{var c=e.current();if(o.test(c)){return"meta"}if(r>="A"&&r<="Z"){return"comment"}else{return"keyword"}}var c=e.current();if(i.test(c))return null;else if(o.test(c))return"meta";else return"variable"}}function u(e){return function(t,n){var r=false,i;while((i=t.next())!=null){if(i==e&&!r){n.tokenize=c;break}r=!r&&i=="\\"}return"string"}}function a(e,t,n){e.context={prev:e.context,indent:e.indent,col:n,type:t}}function f(e){e.indent=e.context.indent;e.context=e.context.prev}return{startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(e,t){if(e.sol()){if(t.context&&t.context.align==null)t.context.align=false;t.indent=e.indentation()}if(e.eatSpace())return null;var r=t.tokenize(e,t);if(r!="comment"&&t.context&&t.context.align==null&&t.context.type!="pattern"){t.context.align=true}if(n=="(")a(t,")",e.column());else if(n=="[")a(t,"]",e.column());else if(n=="{")a(t,"}",e.column());else if(/[\]\}\)]/.test(n)){while(t.context&&t.context.type=="pattern")f(t);if(t.context&&n==t.context.type)f(t)}else if(n=="."&&t.context&&t.context.type=="pattern")f(t);else if(/atom|string|variable/.test(r)&&t.context){if(/[\}\]]/.test(t.context.type))a(t,"pattern",e.column());else if(t.context.type=="pattern"&&!t.context.align){t.context.align=true;t.context.col=e.column()}}return r},indent:function(e,n){var r=n&&n.charAt(0);var i=e.context;if(/[\]\}]/.test(r))while(i&&i.type=="pattern")i=i.prev;var o=i&&r==i.type;if(!i)return 0;else if(i.type=="pattern")return i.col;else if(i.align)return i.col+(o?0:1);else return i.indent+(o?0:t)},lineComment:"#"}});e.defineMIME("text/turtle","turtle")});