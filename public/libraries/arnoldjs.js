(function() {
  'use strict';

  // adapted from https://github.com/theBrianCui/ArnoldJS

  var keywords = {
    "YOU SET US UP": "var",
    "CHILL OUT": "const",
    "NOT TO BE": "null",
    "YOUR CLOTHES GIVE THEM TO ME": "new",
    "I'M HERE": "this",

    //Control flow statements
    "LISTEN TO ME VERY CAREFULLY": "function",
    "I'LL BE BACK": "return",
    "BECAUSE I'M GOING TO SAY PLEASE": "if",
    "YOU HAVE NO RESPECT FOR LOGIC": "else",

    "LET'S KICK SOME ICE": "for",
    "COOL PARTY": "while",
    "THE ICEMAN COMETH": "do",
    "GET OUT": "continue",

    "WHAT THE HELL ARE YOU": "switch",
    "KNOCK KNOCK": "case",
    "GET TO THE CHOPPER": "break",
    "I'LL KILL YOU NEXT TIME": "default",

    "TRUST ME": "try",
    "IT'S NOT A TUMOR": "catch",
    "PUT THE COOKIE DOWN": "finally",

    //Others
    "TO HELL WITH YOU": "delete",
    "BULLSHIT": "false",
    "HE'LL LIVE": "true"
  };
  var objects = {
    "TALK TO THE HAND": "console.log",
    "YOU ARE TERMINATED": "process.exit",

    "FOLLOW THE NUMBERS": ".length",

    //Array Properties/Methods
    "GET YOUR ASS TO MARS": ".pop",
    "HERE IS MY INVITATION": ".push",

    //Function Properties/Methods
    "THE SUBJECT BEING COPIED": ".bind",
    "LET ME TRY MINE": ".call",
    "HERE'S A COUPLE OF ACRES": ".apply"
  };
  var operators = [{
    "YOU ARE NOT YOU YOU ARE ME": "==="
  }, {
    "STICK AROUND": "=",
    "I NEED YOUR CLOTHES YOUR BOOTS AND YOUR MOTORCYCLE": ".",
    "GET UP": "+",
    "GET DOWN": "-",
    "YOU'RE FIRED": "*",
    "HE HAD TO SPLIT": "/",
    "I LET HIM GO": "%",
    "I LIED": "!",
    "WHAT'S WRONG WITH YOUR EYES": "?",
    "I NOW KNOW WHY YOU CRY": ":"
  }];

  var characters = [{
    "DO IT NOW": "()"
  }, {
    "IT'S SHOWTIME": "{",
    "HASTA LA VISTA BABY": "}",
    "GIVE THESE PEOPLE AIR": "(",
    "ENOUGH TALK": ")",
    "TERMINATED": ";"
  }];

  var cache = null;

  //var beautify = require('js-beautify').js_beautify;

  //Replace multiple strings in one pass
  //https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  function replaceAll(str, mapObj) {
    if (cache === null) cache = new RegExp(Object.keys(mapObj).join("|"), "g");

    return str.replace(cache, function (matched) {
      return mapObj[matched];
    });
  }

  function transpile(input) {
    input = replaceAll(input, keywords);
    input = replaceAll(input, objects);

    operators.forEach(function (mapping) {
      input = replaceAll(input, mapping);
    });

    characters.forEach(function (mapping) {
      input = replaceAll(input, mapping);
    });
    return input;
  }

  window.transpileArnold = transpile;
})();