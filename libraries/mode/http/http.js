(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("http",function(){function e(e,r){e.skipToEnd();r.cur=o;return"error"}function r(r,n){if(r.match(/^HTTP\/\d\.\d/)){n.cur=t;return"keyword"}else if(r.match(/^[A-Z]+/)&&/[ \t]/.test(r.peek())){n.cur=i;return"keyword"}else{return e(r,n)}}function t(r,t){var i=r.match(/^\d+/);if(!i)return e(r,t);t.cur=n;var u=Number(i[0]);if(u>=100&&u<200){return"positive informational"}else if(u>=200&&u<300){return"positive success"}else if(u>=300&&u<400){return"positive redirect"}else if(u>=400&&u<500){return"negative client-error"}else if(u>=500&&u<600){return"negative server-error"}else{return"error"}}function n(e,r){e.skipToEnd();r.cur=o;return null}function i(e,r){e.eatWhile(/\S/);r.cur=u;return"string-2"}function u(r,t){if(r.match(/^HTTP\/\d\.\d$/)){t.cur=o;return"keyword"}else{return e(r,t)}}function o(e){if(e.sol()&&!e.eat(/[ \t]/)){if(e.match(/^.*?:/)){return"atom"}else{e.skipToEnd();return"error"}}else{e.skipToEnd();return"string"}}function c(e){e.skipToEnd();return null}return{token:function(e,r){var t=r.cur;if(t!=o&&t!=c&&e.eatSpace())return null;return t(e,r)},blankLine:function(e){e.cur=c},startState:function(){return{cur:r}}}});e.defineMIME("message/http","http")});