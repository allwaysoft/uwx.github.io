// Brainfuck Interpreter
// from https://github.com/skilldrick/brainfuck-js with edits
/*jshint browser:true,node:false,esnext:false*/
/*globals console:false*/
(function(){
  'use strict';

  window.parseBrainfuck = (function () {
    var input;
    var output;
    var data;
    var ptr;
    var debug = false;

    // max operations/instructions
    var maxOps = 10000;
    // num of operations
    var nops = 0;

    var ops = {
      '+': function () {
        data[ptr] = data[ptr] || 0;
        data[ptr]++;
        if (++nops >= maxOps) throw 'Exceeded limit of operations (' + maxOps + ')';
        if (debug) console.log('+', data[ptr], ptr);
      },

      '-': function () {
        data[ptr] = data[ptr] || 0;
        data[ptr]--;
        if (++nops >= maxOps) throw 'Exceeded limit of operations (' + maxOps + ')';
        if (debug) console.log('-', data[ptr], ptr);
      },

      '<': function () {
        ptr--;
        if (ptr < 0) {
          ptr = 0; //Don't allow pointer to leave data array
        }
        if (++nops >= maxOps) throw 'Exceeded limit of operations (' + maxOps + ')';
        if (debug) console.log('<', ptr);
      },

      '>': function () {
        ptr++;
        if (++nops >= maxOps) throw 'Exceeded limit of operations (' + maxOps + ')';
        if (debug) console.log('>', ptr);
      },

      '.': function () {
        var c = String.fromCharCode(data[ptr]);
        output.push(c);
        if (++nops >= maxOps) throw 'Exceeded limit of operations (' + maxOps + ')';
        if (debug) console.log('.', c, data[ptr]);
      },

      ',': function () {
        var c = input.shift();
        if (typeof c == "string") {
          data[ptr] = c.charCodeAt(0);
        }
        if (++nops >= maxOps) throw 'Exceeded limit of operations (' + maxOps + ')';
        if (debug) console.log(',', c, data[ptr]);
      },
    };

    function program(nodes) {
      return function (inputString) {
        output = [];
        data = [];
        ptr = 0;

        input = inputString && inputString.split('') || [];

        nodes.forEach(function (node) {
          node();
        });

        return output.join('');
      };
    }

    function loop(nodes) {
      return function () {
        var loopCounter = 0;

        while(data[ptr] > 0) {
          if (loopCounter++ >= 10000) { throw "Infinite loop detected"; }

          nodes.forEach(function (node) {
            node();
          });
        }
      };
    }



    var programChars;

    function parseProgram() {
      var nodes = [];
      var nextChar;

      while (programChars.length > 0) {
        nextChar = programChars.shift();
        if (ops[nextChar]) {
          nodes.push(ops[nextChar]);
        } else if (nextChar == '[') {
          nodes.push(parseLoop());
        } else if (nextChar == ']') {
          throw "Missing opening bracket";
        } else {
          // ignore it
        }
      }

      return program(nodes);
    }

    function parseLoop() {
      var nodes = [];
      var nextChar;

      while (programChars[0] != ']') {
        nextChar = programChars.shift();
        if (nextChar === undefined || nextChar === null) {
          throw "Missing closing bracket";
        } else if (ops[nextChar]) {
          nodes.push(ops[nextChar]);
        } else if (nextChar == '[') {
          nodes.push(parseLoop());
        } else {
          // ignore it
        }
      }
      programChars.shift(); //discard ']'

      return loop(nodes);
    }

    function parse(str) {
      programChars = str.split('');
      return parseProgram();
    }

    return parse;
  })();


  window.runBrainfuck = function(code, input) {
    input = input || '';
    return window.parseBrainfuck(code)(input);
  };
})();