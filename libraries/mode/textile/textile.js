(function(e){if(typeof exports=="object"&&typeof module=="object"){e(require("../../lib/codemirror"))}else if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],e)}else{e(CodeMirror)}})(function(e){"use strict";var t={addition:"positive",attributes:"attribute",bold:"strong",cite:"keyword",code:"atom",definitionList:"number",deletion:"negative",div:"punctuation",em:"em",footnote:"variable",footCite:"qualifier",header:"header",html:"comment",image:"string",italic:"em",link:"link",linkDefinition:"link",list1:"variable-2",list2:"variable-3",list3:"keyword",notextile:"string-2",pre:"operator",p:"property",quote:"bracket",span:"quote",specialChar:"tag",strong:"strong",sub:"builtin",sup:"builtin",table:"variable-3",tableHeading:"operator"};function i(e,t){t.mode=d.newLayout;t.tableHeading=false;if(t.layoutType==="definitionList"&&t.spanningLayout&&e.match(c("definitionListEnd"),false))t.spanningLayout=false}function n(e,i,n){if(n==="_"){if(e.eat("_"))return a(e,i,"italic",/__/,2);else return a(e,i,"em",/_/,1)}if(n==="*"){if(e.eat("*")){return a(e,i,"bold",/\*\*/,2)}return a(e,i,"strong",/\*/,1)}if(n==="["){if(e.match(/\d+\]/))i.footCite=true;return r(i)}if(n==="("){var l=e.match(/^(r|tm|c)\)/);if(l)return o(i,t.specialChar)}if(n==="<"&&e.match(/(\w+)[^>]+>[^<]+<\/\1>/))return o(i,t.html);if(n==="?"&&e.eat("?"))return a(e,i,"cite",/\?\?/,2);if(n==="="&&e.eat("="))return a(e,i,"notextile",/==/,2);if(n==="-"&&!e.eat("-"))return a(e,i,"deletion",/-/,1);if(n==="+")return a(e,i,"addition",/\+/,1);if(n==="~")return a(e,i,"sub",/~/,1);if(n==="^")return a(e,i,"sup",/\^/,1);if(n==="%")return a(e,i,"span",/%/,1);if(n==="@")return a(e,i,"code",/@/,1);if(n==="!"){var u=a(e,i,"image",/(?:\([^\)]+\))?!/,1);e.match(/^:\S+/);return u}return r(i)}function a(e,t,i,n,a){var l=e.pos>a?e.string.charAt(e.pos-a-1):null;var o=e.peek();if(t[i]){if((!o||/\W/.test(o))&&l&&/\S/.test(l)){var u=r(t);t[i]=false;return u}}else if((!l||/\W/.test(l))&&o&&/\S/.test(o)&&e.match(new RegExp("^.*\\S"+n.source+"(?:\\W|$)"),false)){t[i]=true;t.mode=d.attributes}return r(t)}function r(e){var i=l(e);if(i)return i;var n=[];if(e.layoutType)n.push(t[e.layoutType]);n=n.concat(u(e,"addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","strong","sub","sup","table","tableHeading"));if(e.layoutType==="header")n.push(t.header+"-"+e.header);return n.length?n.join(" "):null}function l(e){var i=e.layoutType;switch(i){case"notextile":case"code":case"pre":return t[i];default:if(e.notextile)return t.notextile+(i?" "+t[i]:"");return null}}function o(e,t){var i=l(e);if(i)return i;var n=r(e);if(t)return n?n+" "+t:t;else return n}function u(e){var i=[];for(var n=1;n<arguments.length;++n){if(e[arguments[n]])i.push(t[arguments[n]])}return i}function s(e){var t=e.spanningLayout,i=e.layoutType;for(var n in e)if(e.hasOwnProperty(n))delete e[n];e.mode=d.newLayout;if(t){e.layoutType=i;e.spanningLayout=true}}var f={cache:{},single:{bc:"bc",bq:"bq",definitionList:/- [^(?::=)]+:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},attributes:{align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/},createRe:function(e){switch(e){case"drawTable":return f.makeRe("^",f.single.drawTable,"$");case"html":return f.makeRe("^",f.single.html,"(?:",f.single.html,")*","$");case"linkDefinition":return f.makeRe("^",f.single.linkDefinition,"$");case"listLayout":return f.makeRe("^",f.single.list,c("allAttributes"),"*\\s+");case"tableCellAttributes":return f.makeRe("^",f.choiceRe(f.single.tableCellAttributes,c("allAttributes")),"+\\.");case"type":return f.makeRe("^",c("allTypes"));case"typeLayout":return f.makeRe("^",c("allTypes"),c("allAttributes"),"*\\.\\.?","(\\s+|$)");case"attributes":return f.makeRe("^",c("allAttributes"),"+");case"allTypes":return f.choiceRe(f.single.div,f.single.foot,f.single.header,f.single.bc,f.single.bq,f.single.notextile,f.single.pre,f.single.table,f.single.para);case"allAttributes":return f.choiceRe(f.attributes.selector,f.attributes.css,f.attributes.lang,f.attributes.align,f.attributes.pad);default:return f.makeRe("^",f.single[e])}},makeRe:function(){var e="";for(var t=0;t<arguments.length;++t){var i=arguments[t];e+=typeof i==="string"?i:i.source}return new RegExp(e)},choiceRe:function(){var e=[arguments[0]];for(var t=1;t<arguments.length;++t){e[t*2-1]="|";e[t*2]=arguments[t]}e.unshift("(?:");e.push(")");return f.makeRe.apply(null,e)}};function c(e){return f.cache[e]||(f.cache[e]=f.createRe(e))}var d={newLayout:function(e,t){if(e.match(c("typeLayout"),false)){t.spanningLayout=false;return(t.mode=d.blockType)(e,t)}var i;if(!l(t)){if(e.match(c("listLayout"),false))i=d.list;else if(e.match(c("drawTable"),false))i=d.table;else if(e.match(c("linkDefinition"),false))i=d.linkDefinition;else if(e.match(c("definitionList")))i=d.definitionList;else if(e.match(c("html"),false))i=d.html}return(t.mode=i||d.text)(e,t)},blockType:function(e,t){var i,n;t.layoutType=null;if(i=e.match(c("type")))n=i[0];else return(t.mode=d.text)(e,t);if(i=n.match(c("header"))){t.layoutType="header";t.header=parseInt(i[0][1])}else if(n.match(c("bq"))){t.layoutType="quote"}else if(n.match(c("bc"))){t.layoutType="code"}else if(n.match(c("foot"))){t.layoutType="footnote"}else if(n.match(c("notextile"))){t.layoutType="notextile"}else if(n.match(c("pre"))){t.layoutType="pre"}else if(n.match(c("div"))){t.layoutType="div"}else if(n.match(c("table"))){t.layoutType="table"}t.mode=d.attributes;return r(t)},text:function(e,t){if(e.match(c("text")))return r(t);var i=e.next();if(i==='"')return(t.mode=d.link)(e,t);return n(e,t,i)},attributes:function(e,i){i.mode=d.layoutLength;if(e.match(c("attributes")))return o(i,t.attributes);else return r(i)},layoutLength:function(e,t){if(e.eat(".")&&e.eat("."))t.spanningLayout=true;t.mode=d.text;return r(t)},list:function(e,t){var i=e.match(c("list"));t.listDepth=i[0].length;var n=(t.listDepth-1)%3;if(!n)t.layoutType="list1";else if(n===1)t.layoutType="list2";else t.layoutType="list3";t.mode=d.attributes;return r(t)},link:function(e,i){i.mode=d.text;if(e.match(c("link"))){e.match(/\S+/);return o(i,t.link)}return r(i)},linkDefinition:function(e,i){e.skipToEnd();return o(i,t.linkDefinition)},definitionList:function(e,t){e.match(c("definitionList"));t.layoutType="definitionList";if(e.match(/\s*$/))t.spanningLayout=true;else t.mode=d.attributes;return r(t)},html:function(e,i){e.skipToEnd();return o(i,t.html)},table:function(e,t){t.layoutType="table";return(t.mode=d.tableCell)(e,t)},tableCell:function(e,t){if(e.match(c("tableHeading")))t.tableHeading=true;else e.eat("|");t.mode=d.tableCellAttributes;return r(t)},tableCellAttributes:function(e,i){i.mode=d.tableText;if(e.match(c("tableCellAttributes")))return o(i,t.attributes);else return r(i)},tableText:function(e,t){if(e.match(c("tableText")))return r(t);if(e.peek()==="|"){t.mode=d.tableCell;return r(t)}return n(e,t,e.next())}};e.defineMode("textile",function(){return{startState:function(){return{mode:d.newLayout}},token:function(e,t){if(e.sol())i(e,t);return t.mode(e,t)},blankLine:s}});e.defineMIME("text/x-textile","textile")});