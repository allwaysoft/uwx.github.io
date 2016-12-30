(function(t){if(typeof exports=="object"&&typeof module=="object")t(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror","../htmlmixed/htmlmixed"],t);else t(CodeMirror)})(function(t){"use strict";var e=["template","literal","msg","fallbackmsg","let","if","elseif","else","switch","case","default","foreach","ifempty","for","call","param","deltemplate","delcall","log"];t.defineMode("soy",function(n){var a=t.getMode(n,"text/plain");var i={html:t.getMode(n,{name:"text/html",multilineTagIndentFactor:2,multilineTagIndentPastTag:false}),attributes:a,text:a,uri:a,css:t.getMode(n,"text/css"),js:t.getMode(n,{name:"text/javascript",statementIndent:2*n.indentUnit})};function l(t){return t[t.length-1]}function r(t,e,n){var a=t.string;var i=n.exec(a.substr(t.pos));if(i){t.string=a.substr(0,t.pos+i.index)}var l=t.hideFirstChars(e.indent,function(){return e.localMode.token(t,e.localState)});t.string=a;return l}return{startState:function(){return{kind:[],kindTag:[],soyState:[],indent:0,localMode:i.html,localState:t.startState(i.html)}},copyState:function(e){return{tag:e.tag,kind:e.kind.concat([]),kindTag:e.kindTag.concat([]),soyState:e.soyState.concat([]),indent:e.indent,localMode:e.localMode,localState:t.copyState(e.localMode,e.localState)}},token:function(a,o){var s;switch(l(o.soyState)){case"comment":if(a.match(/^.*?\*\//)){o.soyState.pop()}else{a.skipToEnd()}return"comment";case"variable":if(a.match(/^}/)){o.indent-=2*n.indentUnit;o.soyState.pop();return"variable-2"}a.next();return null;case"tag":if(a.match(/^\/?}/)){if(o.tag=="/template"||o.tag=="/deltemplate")o.indent=0;else o.indent-=(a.current()=="/}"||e.indexOf(o.tag)==-1?2:1)*n.indentUnit;o.soyState.pop();return"keyword"}else if(a.match(/^([\w?]+)(?==)/)){if(a.current()=="kind"&&(s=a.match(/^="([^"]+)/,false))){var c=s[1];o.kind.push(c);o.kindTag.push(o.tag);o.localMode=i[c]||i.html;o.localState=t.startState(o.localMode)}return"attribute"}else if(a.match(/^"/)){o.soyState.push("string");return"string"}a.next();return null;case"literal":if(a.match(/^(?=\{\/literal})/)){o.indent-=n.indentUnit;o.soyState.pop();return this.token(a,o)}return r(a,o,/\{\/literal}/);case"string":var s=a.match(/^.*?("|\\[\s\S])/);if(!s){a.skipToEnd()}else if(s[1]=='"'){o.soyState.pop()}return"string"}if(a.match(/^\/\*/)){o.soyState.push("comment");return"comment"}else if(a.match(a.sol()?/^\s*\/\/.*/:/^\s+\/\/.*/)){return"comment"}else if(a.match(/^\{\$[\w?]*/)){o.indent+=2*n.indentUnit;o.soyState.push("variable");return"variable-2"}else if(a.match(/^\{literal}/)){o.indent+=n.indentUnit;o.soyState.push("literal");return"keyword"}else if(s=a.match(/^\{([\/@\\]?[\w?]*)/)){if(s[1]!="/switch")o.indent+=(/^(\/|(else|elseif|case|default)$)/.test(s[1])&&o.tag!="switch"?1:2)*n.indentUnit;o.tag=s[1];if(o.tag=="/"+l(o.kindTag)){o.kind.pop();o.kindTag.pop();o.localMode=i[l(o.kind)]||i.html;o.localState=t.startState(o.localMode)}o.soyState.push("tag");return"keyword"}return r(a,o,/\{|\s+\/\/|\/\*/)},indent:function(e,a){var i=e.indent,r=l(e.soyState);if(r=="comment")return t.Pass;if(r=="literal"){if(/^\{\/literal}/.test(a))i-=n.indentUnit}else{if(/^\s*\{\/(template|deltemplate)\b/.test(a))return 0;if(/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(a))i-=n.indentUnit;if(e.tag!="switch"&&/^\{(case|default)\b/.test(a))i-=n.indentUnit;if(/^\{\/switch\b/.test(a))i-=n.indentUnit}if(i&&e.localMode.indent)i+=e.localMode.indent(e.localState,a);return i},innerMode:function(t){if(t.soyState.length&&l(t.soyState)!="literal")return null;else return{state:t.localState,mode:t.localMode}},electricInput:/^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",fold:"indent"}},"htmlmixed");t.registerHelper("hintWords","soy",e.concat(["delpackage","namespace","alias","print","css","debugger"]));t.defineMIME("text/x-soy","soy")});