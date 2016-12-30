(function(t){if(typeof exports=="object"&&typeof module=="object")t(require("../../lib/codemirror"));else if(typeof define=="function"&&define.amd)define(["../../lib/codemirror"],t);else t(CodeMirror)})(function(t){"use strict";function e(t){var e=[];t.split(" ").forEach(function(t){e.push({name:t})});return e}var E=e("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL");var i=e("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");t.defineMode("forth",function(){function t(t,e){var E;for(E=t.length-1;E>=0;E--){if(t[E].name===e.toUpperCase()){return t[E]}}return undefined}return{startState:function(){return{state:"",base:10,coreWordList:E,immediateWordList:i,wordList:[]}},token:function(e,E){var i;if(e.eatSpace()){return null}if(E.state===""){if(e.match(/^(\]|:NONAME)(\s|$)/i)){E.state=" compilation";return"builtin compilation"}i=e.match(/^(\:)\s+(\S+)(\s|$)+/);if(i){E.wordList.push({name:i[2].toUpperCase()});E.state=" compilation";return"def"+E.state}i=e.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i);if(i){E.wordList.push({name:i[2].toUpperCase()});return"def"+E.state}i=e.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/);if(i){return"builtin"+E.state}}else{if(e.match(/^(\;|\[)(\s)/)){E.state="";e.backUp(1);return"builtin compilation"}if(e.match(/^(\;|\[)($)/)){E.state="";return"builtin compilation"}if(e.match(/^(POSTPONE)\s+\S+(\s|$)+/)){return"builtin"}}i=e.match(/^(\S+)(\s+|$)/);if(i){if(t(E.wordList,i[1])!==undefined){return"variable"+E.state}if(i[1]==="\\"){e.skipToEnd();return"comment"+E.state}if(t(E.coreWordList,i[1])!==undefined){return"builtin"+E.state}if(t(E.immediateWordList,i[1])!==undefined){return"keyword"+E.state}if(i[1]==="("){e.eatWhile(function(t){return t!==")"});e.eat(")");return"comment"+E.state}if(i[1]===".("){e.eatWhile(function(t){return t!==")"});e.eat(")");return"string"+E.state}if(i[1]==='S"'||i[1]==='."'||i[1]==='C"'){e.eatWhile(function(t){return t!=='"'});e.eat('"');return"string"+E.state}if(i[1]-68719476735){return"number"+E.state}return"atom"+E.state}}}});t.defineMIME("text/x-forth","forth")});