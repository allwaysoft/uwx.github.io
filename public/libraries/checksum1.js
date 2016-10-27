(function() { // from http://stackoverflow.com/a/811277
  'use strict';

  var hextab = "0123456789ABCDEF";

  function encode_int(i) {
    var c = [];

    for (var j = 0; j < 4; j++) {
      c[(j << 1)] = hextab[((i % 256) >> 4)];
      c[(j << 1) + 1] = hextab[((i % 256) % 16)];

      i = (i >> 8);
    }
    c[8] = 0;

    return c;
  }

  function _checksum(str) {
    var i;
    var len = str.length;
    var chk = 0x12345678;

    for (i = 0; i < len; i++) {
      chk += (str[i]) * (i + 1);
    }

    return chk;
  }

  window.checksum = function(str) {
    return encode_int(_checksum(str));
  };
})();