(function(e){if(typeof exports=="object"&&typeof module=="object")e(require("../../lib/codemirror"),require("../yaml/yaml"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror","../yaml/yaml"],e);else e(CodeMirror)})(function(e){var t=0,n=1,r=2;e.defineMode("yaml-frontmatter",function(i,a){var o=e.getMode(i,"yaml");var f=e.getMode(i,a&&a.base||"gfm");function s(e){return e.state==r?f:o}return{startState:function(){return{state:t,inner:e.startState(o)}},copyState:function(t){return{state:t.state,inner:e.copyState(s(t),t.inner)}},token:function(i,a){if(a.state==t){if(i.match(/---/,false)){a.state=n;return o.token(i,a.inner)}else{a.state=r;a.inner=e.startState(f);return f.token(i,a.inner)}}else if(a.state==n){var s=i.sol()&&i.match(/---/,false);var u=o.token(i,a.inner);if(s){a.state=r;a.inner=e.startState(f)}return u}else{return f.token(i,a.inner)}},innerMode:function(e){return{mode:s(e),state:e.inner}},blankLine:function(e){var t=s(e);if(t.blankLine)return t.blankLine(e.inner)}}})});