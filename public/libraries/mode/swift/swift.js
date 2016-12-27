(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";function t(e){var t={};for(var n=0;n<e.length;n++)t[e[n]]=true;return t}var n=t(["var","let","class","deinit","enum","extension","func","import","init","protocol","static","struct","subscript","typealias","as","dynamicType","is","new","super","self","Self","Type","__COLUMN__","__FILE__","__FUNCTION__","__LINE__","break","case","continue","default","do","else","fallthrough","if","in","for","return","switch","where","while","associativity","didSet","get","infix","inout","left","mutating","none","nonmutating","operator","override","postfix","precedence","prefix","right","set","unowned","weak","willSet"]);var r=t(["var","let","class","enum","extension","func","import","protocol","struct","typealias","dynamicType","for"]);var i=t(["Infinity","NaN","undefined","null","true","false","on","off","yes","no","nil","null","this","super"]);var o=t(["String","bool","int","string","double","Double","Int","Float","float","public","private","extension"]);var u="+-/*%=|&<>#";var a=";,.(){}[]";var f=/^-?(?:(?:[\d_]+\.[_\d]*|\.[_\d]+|0o[0-7_\.]+|0b[01_\.]+)(?:e-?[\d_]+)?|0x[\d_a-f\.]+(?:p-?[\d_]+)?)/i;var c=/^[_A-Za-z$][_A-Za-z$0-9]*/;var l=/^[@\.][_A-Za-z$][_A-Za-z$0-9]*/;var s=/^\/(?!\s)(?:\/\/)?(?:\\.|[^\/])+\//;function p(e,t,p){if(e.sol())t.indented=e.indentation();if(e.eatSpace())return null;var d=e.peek();if(d=="/"){if(e.match("//")){e.skipToEnd();return"comment"}if(e.match("/*")){t.tokenize.push(m);return m(e,t)}if(e.match(s))return"string-2"}if(u.indexOf(d)>-1){e.next();return"operator"}if(a.indexOf(d)>-1){e.next();e.match("..");return"punctuation"}if(d=='"'||d=="'"){e.next();var h=v(d);t.tokenize.push(h);return h(e,t)}if(e.match(f))return"number";if(e.match(l))return"property";if(e.match(c)){var _=e.current();if(n.hasOwnProperty(_)){if(r.hasOwnProperty(_))t.prev="define";return"keyword"}if(o.hasOwnProperty(_))return"variable-2";if(i.hasOwnProperty(_))return"atom";if(p=="define")return"def";return"variable"}e.next();return null}function d(){var e=0;return function(t,n,r){var i=p(t,n,r);if(i=="punctuation"){if(t.current()=="(")++e;else if(t.current()==")"){if(e==0){t.backUp(1);n.tokenize.pop();return n.tokenize[n.tokenize.length-1](t,n)}else--e}}return i}}function v(e){return function(t,n){var r,i=false;while(r=t.next()){if(i){if(r=="("){n.tokenize.push(d());return"string"}i=false}else if(r==e){break}else{i=r=="\\"}}n.tokenize.pop();return"string"}}function m(e,t){e.match(/^(?:[^*]|\*(?!\/))*/);if(e.match("*/"))t.tokenize.pop();return"comment"}function h(e,t,n){this.prev=e;this.align=t;this.indented=n}function _(e,t){var n=t.match(/^\s*($|\/[\/\*])/,false)?null:t.column()+1;e.context=new h(e.context,n,e.indented)}function x(e){if(e.context){e.indented=e.context.indented;e.context=e.context.prev}}e.defineMode("swift",function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=t.tokenize[t.tokenize.length-1]||p;var i=r(e,t,n);if(!i||i=="comment")t.prev=n;else if(!t.prev)t.prev=i;if(i=="punctuation"){var o=/[\(\[\{]|([\]\)\}])/.exec(e.current());if(o)(o[1]?x:_)(t,e)}return i},indent:function(t,n){var r=t.context;if(!r)return 0;var i=/^[\]\}\)]/.test(n);if(r.align!=null)return r.align-(i?1:0);return r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/"}});e.defineMIME("text/x-swift","swift")});