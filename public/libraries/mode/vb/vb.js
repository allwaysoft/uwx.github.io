(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("vb",function(r,n){var t="error";function i(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]");var u=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");var o=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");var c=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");var f=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");var l=new RegExp("^[_A-Za-z][_A-Za-z0-9]*");var d=["class","module","sub","enum","select","while","if","function","get","set","property","try"];var s=["else","elseif","case","catch"];var v=["next","loop"];var m=["and","or","not","xor","in"];var h=i(m);var p=["as","dim","break","continue","optional","then","until","goto","byval","byref","new","handles","property","return","const","private","protected","friend","public","shared","static","true","false"];var b=["integer","string","double","decimal","boolean","short","char","float","single"];var k=i(p);var x=i(b);var g='"';var w=i(d);var y=i(s);var I=i(v);var E=i(["end"]);var L=i(["do"]);var z=null;e.registerHelper("hintWords","vb",d.concat(s).concat(v).concat(m).concat(p).concat(b));function C(e,r){r.currentIndent++}function R(e,r){r.currentIndent--}function F(e,r){if(e.eatSpace()){return null}var n=e.peek();if(n==="'"){e.skipToEnd();return"comment"}if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,false)){var i=false;if(e.match(/^\d*\.\d+F?/i)){i=true}else if(e.match(/^\d+\.\d*F?/)){i=true}else if(e.match(/^\.\d+F?/)){i=true}if(i){e.eat(/J/i);return"number"}var d=false;if(e.match(/^&H[0-9a-f]+/i)){d=true}else if(e.match(/^&O[0-7]+/i)){d=true}else if(e.match(/^[1-9]\d*F?/)){e.eat(/J/i);d=true}else if(e.match(/^0(?![\dx])/i)){d=true}if(d){e.eat(/L/i);return"number"}}if(e.match(g)){r.tokenize=M(e.current());return r.tokenize(e,r)}if(e.match(f)||e.match(c)){return null}if(e.match(o)||e.match(a)||e.match(h)){return"operator"}if(e.match(u)){return null}if(e.match(L)){C(e,r);r.doInCurrentLine=true;return"keyword"}if(e.match(w)){if(!r.doInCurrentLine)C(e,r);else r.doInCurrentLine=false;return"keyword"}if(e.match(y)){return"keyword"}if(e.match(E)){R(e,r);R(e,r);return"keyword"}if(e.match(I)){R(e,r);return"keyword"}if(e.match(x)){return"keyword"}if(e.match(k)){return"keyword"}if(e.match(l)){return"variable"}e.next();return t}function M(e){var r=e.length==1;var i="string";return function(a,u){while(!a.eol()){a.eatWhile(/[^'"]/);if(a.match(e)){u.tokenize=F;return i}else{a.eat(/['"]/)}}if(r){if(n.singleLineStringErrors){return t}else{u.tokenize=F}}return i}}function O(e,r){var n=r.tokenize(e,r);var i=e.current();if(i==="."){n=r.tokenize(e,r);i=e.current();if(n==="variable"){return"variable"}else{return t}}var a="[({".indexOf(i);if(a!==-1){C(e,r)}if(z==="dedent"){if(R(e,r)){return t}}a="])}".indexOf(i);if(a!==-1){if(R(e,r)){return t}}return n}var T={electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:F,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:false}},token:function(e,r){if(e.sol()){r.currentIndent+=r.nextLineIndent;r.nextLineIndent=0;r.doInCurrentLine=0}var n=O(e,r);r.lastToken={style:n,content:e.current()};return n},indent:function(e,n){var t=n.replace(/^\s+|\s+$/g,"");if(t.match(I)||t.match(E)||t.match(y))return r.indentUnit*(e.currentIndent-1);if(e.currentIndent<0)return 0;return e.currentIndent*r.indentUnit},lineComment:"'"};return T});e.defineMIME("text/x-vb","vb")});