(function(){var e=CodeMirror.getMode({indentUnit:4},{name:"python",version:3,singleLineStringErrors:false});function r(r){test.mode(r,e,Array.prototype.slice.call(arguments,1))}r("decoratorStartOfLine","[meta @dec]","[keyword def] [def function]():","    [keyword pass]");r("decoratorIndented","[keyword class] [def Foo]:","    [meta @dec]","    [keyword def] [def function]():","        [keyword pass]");r("matmulWithSpace:","[variable a] [operator @] [variable b]");r("matmulWithoutSpace:","[variable a][operator @][variable b]");r("matmulSpaceBefore:","[variable a] [operator @][variable b]");r("fValidStringPrefix","[string f'this is a {formatted} string']");r("uValidStringPrefix","[string u'this is an unicode string']")})();