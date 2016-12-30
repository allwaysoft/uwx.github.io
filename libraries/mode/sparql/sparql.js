(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("sparql",function(e){var t=e.indentUnit;var n;function r(e){return new RegExp("^(?:"+e.join("|")+")$","i")}var i=r(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]);var o=r(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load"]);var a=/[*+\-<>=&|\^\/!\?]/;function s(e,t){var r=e.next();n=null;if(r=="$"||r=="?"){if(r=="?"&&e.match(/\s/,false)){return"operator"}e.match(/^[\w\d]*/);return"variable-2"}else if(r=="<"&&!e.match(/^[\s\u00a0=]/,false)){e.match(/^[^\s\u00a0>]*>?/);return"atom"}else if(r=='"'||r=="'"){t.tokenize=l(r);return t.tokenize(e,t)}else if(/[{}\(\),\.;\[\]]/.test(r)){n=r;return"bracket"}else if(r=="#"){e.skipToEnd();return"comment"}else if(a.test(r)){e.eatWhile(a);return"operator"}else if(r==":"){e.eatWhile(/[\w\d\._\-]/);return"atom"}else if(r=="@"){e.eatWhile(/[a-z\d\-]/i);return"meta"}else{e.eatWhile(/[_\w\d]/);if(e.eat(":")){e.eatWhile(/[\w\d_\-]/);return"atom"}var s=e.current();if(i.test(s))return"builtin";else if(o.test(s))return"keyword";else return"variable"}}function l(e){return function(t,n){var r=false,i;while((i=t.next())!=null){if(i==e&&!r){n.tokenize=s;break}r=!r&&i=="\\"}return"string"}}function c(e,t,n){e.context={prev:e.context,indent:e.indent,col:n,type:t}}function u(e){e.indent=e.context.indent;e.context=e.context.prev}return{startState:function(){return{tokenize:s,context:null,indent:0,col:0}},token:function(e,t){if(e.sol()){if(t.context&&t.context.align==null)t.context.align=false;t.indent=e.indentation()}if(e.eatSpace())return null;var r=t.tokenize(e,t);if(r!="comment"&&t.context&&t.context.align==null&&t.context.type!="pattern"){t.context.align=true}if(n=="(")c(t,")",e.column());else if(n=="[")c(t,"]",e.column());else if(n=="{")c(t,"}",e.column());else if(/[\]\}\)]/.test(n)){while(t.context&&t.context.type=="pattern")u(t);if(t.context&&n==t.context.type){u(t);if(n=="}"&&t.context&&t.context.type=="pattern")u(t)}}else if(n=="."&&t.context&&t.context.type=="pattern")u(t);else if(/atom|string|variable/.test(r)&&t.context){if(/[\}\]]/.test(t.context.type))c(t,"pattern",e.column());else if(t.context.type=="pattern"&&!t.context.align){t.context.align=true;t.context.col=e.column()}}return r},indent:function(e,n){var r=n&&n.charAt(0);var i=e.context;if(/[\]\}]/.test(r))while(i&&i.type=="pattern")i=i.prev;var o=i&&r==i.type;if(!i)return 0;else if(i.type=="pattern")return i.col;else if(i.align)return i.col+(o?0:1);else return i.indent+(o?0:t)},lineComment:"#"}});e.defineMIME("application/sparql-query","sparql")});