(function(){var o=CodeMirror.getMode({indentUnit:2},"ruby");function r(r){test.mode(r,o,Array.prototype.slice.call(arguments,1))}r("divide_equal_operator","[variable bar] [operator /=] [variable foo]");r("divide_equal_operator_no_spacing","[variable foo][operator /=][number 42]")})();