(function(){"use strict";var o=CodeMirror.getMode({indentUnit:2},"text/x-gss");function t(t){test.mode(t,o,Array.prototype.slice.call(arguments,1),"gss")}t("atComponent","[def @component] {","[tag foo] {","  [property color]: [keyword black];","}","}")})();