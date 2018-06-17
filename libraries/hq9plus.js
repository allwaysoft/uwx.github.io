// from http://esolangs.org/wiki/FISHQ9%2B under CC0
/*jshint browser:true,node:false,esnext:false*/

(function() {
  'use strict';

  var asyncAction;

  function printf(s) {
    asyncAction(s);
  }

  function bottles() {
    var b;

    printf("99 bottles of beer on the wall, 99 bottles of beer.");

    for (b = 98; b > 1; b--) {
      printf("Take one down and pass it around, " + b + " bottles of beer on the wall.\n");
      printf("");
      printf(b + " bottles of beer on the wall, " + b + " bottles of beer.\n");
    }

    printf("Take one down and pass it around, 1 bottle of beer on the wall.");
    printf("");
    printf("1 bottle of beer on the wall, 1 bottle of beer.");
    printf("Take one down and pass it around, no more bottles of beer on the wall.");
    printf("");
    printf("No more bottles of beer on the wall, no more bottles of beer.");
    printf("Go to the store and buy some more, 99 bottles of beer on the wall.");

    return 0;
  }

  function main(chan, _input) {
    asyncAction = chan; // current channel for print

    var acc = 0; // the stack

    var input;

    for (var last = 0; last < _input.length; last++) {

      input = _input[last];

      if (acc == -1 || acc == 256) {
        acc = 0;
      }

      if (input == 'i' || input == 'I' || input == '+') {
        acc++;
      } else if (input == 'd' || input == 'D') {
        acc--;
      } else if (input == 's' || input == 'S') {
        acc *= acc;
      } else if (input == 'o' || input == 'O') {
        printf(acc);
      } else if (input == 'h' || input == 'H') {
        printf("Hello World.");
      } else if (input == 'q' || input == 'Q') {
        printf(_input);
      } else if (input == '9') {
        bottles();
      } else if (input == 'k' || input == 'K') {
        asyncAction = null; // clean up
        return;
      }
    }

    asyncAction = null; // clean up
  }

  window.fishq9plus = main;
})();