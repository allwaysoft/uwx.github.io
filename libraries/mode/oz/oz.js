(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("oz",function(e){function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=/[\^@!\|<>#~\.\*\-\+\\\/,=]/;var r=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/;var i=/(:::)|(\.\.\.)|(=<:)|(>=:)/;var a=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"];var o=["end"];var f=t(["true","false","nil","unit"]);var u=t(["andthen","at","attr","declare","feat","from","lex","mod","mode","orelse","parser","prod","prop","scanner","self","syn","token"]);var c=t(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]);var s=t(a);var l=t(o);function d(e,t){if(e.eatSpace()){return null}if(e.match(/[{}]/)){return"bracket"}if(e.match(/(\[])/)){return"keyword"}if(e.match(i)||e.match(r)){return"operator"}if(e.match(f)){return"atom"}var a=e.match(c);if(a){if(!t.doInCurrentLine)t.currentIndent++;else t.doInCurrentLine=false;if(a[0]=="proc"||a[0]=="fun")t.tokenize=k;else if(a[0]=="class")t.tokenize=m;else if(a[0]=="meth")t.tokenize=h;return"keyword"}if(e.match(s)||e.match(u)){return"keyword"}if(e.match(l)){t.currentIndent--;return"keyword"}var o=e.next();if(o=='"'||o=="'"){t.tokenize=z(o);return t.tokenize(e,t)}if(/[~\d]/.test(o)){if(o=="~"){if(!/^[0-9]/.test(e.peek()))return null;else if(e.next()=="0"&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}if(o=="0"&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number";return null}if(o=="%"){e.skipToEnd();return"comment"}else if(o=="/"){if(e.eat("*")){t.tokenize=p;return p(e,t)}}if(n.test(o)){return"operator"}e.eatWhile(/\w/);return"variable"}function m(e,t){if(e.eatSpace()){return null}e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/);t.tokenize=d;return"variable-3"}function h(e,t){if(e.eatSpace()){return null}e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/);t.tokenize=d;return"def"}function k(e,t){if(e.eatSpace()){return null}if(!t.hasPassedFirstStage&&e.eat("{")){t.hasPassedFirstStage=true;return"bracket"}else if(t.hasPassedFirstStage){e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/);t.hasPassedFirstStage=false;t.tokenize=d;return"def"}else{t.tokenize=d;return null}}function p(e,t){var n=false,r;while(r=e.next()){if(r=="/"&&n){t.tokenize=d;break}n=r=="*"}return"comment"}function z(e){return function(t,n){var r=false,i,a=false;while((i=t.next())!=null){if(i==e&&!r){a=true;break}r=!r&&i=="\\"}if(a||!r)n.tokenize=d;return"string"}}function v(){var e=a.concat(o);return new RegExp("[\\[\\]]|("+e.join("|")+")$")}return{startState:function(){return{tokenize:d,currentIndent:0,doInCurrentLine:false,hasPassedFirstStage:false}},token:function(e,t){if(e.sol())t.doInCurrentLine=0;return t.tokenize(e,t)},indent:function(t,n){var r=n.replace(/^\s+|\s+$/g,"");if(r.match(l)||r.match(s)||r.match(/(\[])/))return e.indentUnit*(t.currentIndent-1);if(t.currentIndent<0)return 0;return t.currentIndent*e.indentUnit},fold:"indent",electricInput:v(),lineComment:"%",blockCommentStart:"/*",blockCommentEnd:"*/"}});e.defineMIME("text/x-oz","oz")});