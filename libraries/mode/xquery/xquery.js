(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],e);else e(CodeMirror)})(function(e){"use strict";e.defineMode("xquery",function(){var e=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),i=e("operator"),a={type:"atom",style:"atom"},o={type:"punctuation",style:null},l={type:"axis_specifier",style:"qualifier"};var s={"if":t,"switch":t,"while":t,"for":t,"else":n,then:n,"try":n,"finally":n,"catch":n,element:r,attribute:r,"let":r,"implements":r,"import":r,module:r,namespace:r,"return":r,"super":r,"this":r,"throws":r,where:r,"private":r,",":o,"null":a,"fn:false()":a,"fn:true()":a};var f=["after","ancestor","ancestor-or-self","and","as","ascending","assert","attribute","before","by","case","cast","child","comment","declare","default","define","descendant","descendant-or-self","descending","document","document-node","element","else","eq","every","except","external","following","following-sibling","follows","for","function","if","import","in","instance","intersect","item","let","module","namespace","node","node","of","only","or","order","parent","precedes","preceding","preceding-sibling","processing-instruction","ref","return","returns","satisfies","schema","schema-element","self","some","sortby","stable","text","then","to","treat","typeswitch","union","variable","version","where","xquery","empty-sequence"];for(var u=0,c=f.length;u<c;u++){s[f[u]]=e(f[u])}var m=["xs:string","xs:float","xs:decimal","xs:double","xs:integer","xs:boolean","xs:date","xs:dateTime","xs:time","xs:duration","xs:dayTimeDuration","xs:time","xs:yearMonthDuration","numeric","xs:hexBinary","xs:base64Binary","xs:anyURI","xs:QName","xs:byte","xs:boolean","xs:anyURI","xf:yearMonthDuration"];for(var u=0,c=m.length;u<c;u++){s[m[u]]=a}var d=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(var u=0,c=d.length;u<c;u++){s[d[u]]=i}var h=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(var u=0,c=h.length;u<c;u++){s[h[u]]=l}return s}();function t(e,t,n){t.tokenize=n;return n(e,t)}function n(n,l){var m=n.next(),h=false,y=p(n);if(m=="<"){if(n.match("!--",true))return t(n,l,s);if(n.match("![CDATA",false)){l.tokenize=f;return"tag"}if(n.match("?",false)){return t(n,l,u)}var k=n.eat("/");n.eatSpace();var b="",v;while(v=n.eat(/[^\s\u00a0=<>\"\'\/?]/))b+=v;return t(n,l,o(b,k))}else if(m=="{"){x(l,{type:"codeblock"});return null}else if(m=="}"){g(l);return null}else if(c(l)){if(m==">")return"tag";else if(m=="/"&&n.eat(">")){g(l);return"tag"}else return"variable"}else if(/\d/.test(m)){n.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/);return"atom"}else if(m==="("&&n.eat(":")){x(l,{type:"comment"});return t(n,l,r)}else if(!y&&(m==='"'||m==="'"))return t(n,l,i(m));else if(m==="$"){return t(n,l,a)}else if(m===":"&&n.eat("=")){return"keyword"}else if(m==="("){x(l,{type:"paren"});return null}else if(m===")"){g(l);return null}else if(m==="["){x(l,{type:"bracket"});return null}else if(m==="]"){g(l);return null}else{var w=e.propertyIsEnumerable(m)&&e[m];if(y&&m==='"')while(n.next()!=='"'){}if(y&&m==="'")while(n.next()!=="'"){}if(!w)n.eatWhile(/[\w\$_-]/);var z=n.eat(":");if(!n.eat(":")&&z){n.eatWhile(/[\w\$_-]/)}if(n.match(/^[ \t]*\(/,false)){h=true}var q=n.current();w=e.propertyIsEnumerable(q)&&e[q];if(h&&!w)w={type:"function_call",style:"variable def"};if(d(l)){g(l);return"variable"}if(q=="element"||q=="attribute"||w.type=="axis_specifier")x(l,{type:"xmlconstructor"});return w?w.style:"variable"}}function r(e,t){var n=false,r=false,i=0,a;while(a=e.next()){if(a==")"&&n){if(i>0)i--;else{g(t);break}}else if(a==":"&&r){i++}n=a==":";r=a=="("}return"comment"}function i(e,t){return function(r,a){var o;if(h(a)&&r.current()==e){g(a);if(t)a.tokenize=t;return"string"}x(a,{type:"string",name:e,tokenize:i(e,t)});if(r.match("{",false)&&m(a)){a.tokenize=n;return"string"}while(o=r.next()){if(o==e){g(a);if(t)a.tokenize=t;break}else{if(r.match("{",false)&&m(a)){a.tokenize=n;return"string"}}}return"string"}}function a(e,t){var r=/[\w\$_-]/;if(e.eat('"')){while(e.next()!=='"'){}e.eat(":")}else{e.eatWhile(r);if(!e.match(":=",false))e.eat(":")}e.eatWhile(r);t.tokenize=n;return"variable"}function o(e,t){return function(r,i){r.eatSpace();if(t&&r.eat(">")){g(i);i.tokenize=n;return"tag"}if(!r.eat("/"))x(i,{type:"tag",name:e,tokenize:n});if(!r.eat(">")){i.tokenize=l;return"tag"}else{i.tokenize=n}return"tag"}}function l(e,r){var a=e.next();if(a=="/"&&e.eat(">")){if(m(r))g(r);if(c(r))g(r);return"tag"}if(a==">"){if(m(r))g(r);return"tag"}if(a=="=")return null;if(a=='"'||a=="'")return t(e,r,i(a,l));if(!m(r))x(r,{type:"attribute",tokenize:l});e.eat(/[a-zA-Z_:]/);e.eatWhile(/[-a-zA-Z0-9_:.]/);e.eatSpace();if(e.match(">",false)||e.match("/",false)){g(r);r.tokenize=n}return"attribute"}function s(e,t){var r;while(r=e.next()){if(r=="-"&&e.match("->",true)){t.tokenize=n;return"comment"}}}function f(e,t){var r;while(r=e.next()){if(r=="]"&&e.match("]",true)){t.tokenize=n;return"comment"}}}function u(e,t){var r;while(r=e.next()){if(r=="?"&&e.match(">",true)){t.tokenize=n;return"comment meta"}}}function c(e){return y(e,"tag")}function m(e){return y(e,"attribute")}function d(e){return y(e,"xmlconstructor")}function h(e){return y(e,"string")}function p(e){if(e.current()==='"')return e.match(/^[^\"]+\"\:/,false);else if(e.current()==="'")return e.match(/^[^\"]+\'\:/,false);else return false}function y(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function x(e,t){e.stack.push(t)}function g(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||n}return{startState:function(){return{tokenize:n,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n},blockCommentStart:"(:",blockCommentEnd:":)"}});e.defineMIME("application/xquery","xquery")});