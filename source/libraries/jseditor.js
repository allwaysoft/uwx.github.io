/*globals UglifyJS, js_beautify, CodeMirror, weirdhash, outputText, makeFunc, generateNumberList, randomizeList, reverseList, JSHINT, transpileArnold, runBrainfuck, makeVisible, fishq9plus, math*/
/*exported UglifyJS, js_beautify, CodeMirror, weirdhash, outputText, makeFunc, generateNumberList, randomizeList, reverseList, JSHINT, transpileArnold, runBrainfuck, makeVisible, fishq9plus, math, removeDuplicateLines, removeEmptyLines, trimLines, re_escape_n, re_escape, descape, jsonEscape, minify, beautify, escapeNonPrintable, escapeNonPrintableJSON, unZalgo, fromBinary, toBinary, toHex, fromHex, toDec, fromDec, doChecksum, titleCase, htmlEscape*/
/*jshint evil:true*/

'use strict';

function removeDuplicateLines(text) {
  text = text.replace(/\r/g, '');

  const inputArr = text.split('\n');
  const len = inputArr.length;
  const outputArray = [];

  let n = 0;
  let processedLines = 0;

  const hash = {};
  let xkey = '';
  let hkey = '';

  const caseSensitive = document.getElementById('chk-case-sensitive').checked;
  //tff
  if (caseSensitive) {
    for (let x = 0; x < len; x++) {
      xkey = inputArr[x];
      hkey = ' ' + xkey;
      if (!hash[hkey] || xkey === '') {
        hash[hkey] = x + 1;
        outputArray[n] = xkey;
        n++;
      } else { 
        processedLines++;
      }
    }
  } else {
    for (let x = 0; x < len; x++) {
      xkey = inputArr[x];
      hkey = ' ' + xkey.toUpperCase();
      if (!hash[hkey] || xkey === '') {
        hash[hkey] = x + 1;
        outputArray[n] = xkey;
        n++;
      } else { 
        processedLines++;
      }
    }
  }
  const lines = processedLines === 1 ? 'line' : 'lines';
  
  return [outputArray.join('\n'), processedLines + ' ' + lines + ' removed.'];
}

function removeEmptyLines(str) {
  const input = str.replace(/\r/g, '').split('\n');
  const out = [];
  const length = input.length;

  for (let i = 0; i < length; i++) {
    if (input[i].trim() !== '') {
      out.push(input[i]);
    }
  }

  return out.join('\n');
}

function trimLines(str) {
  const input = str.replace(/\r/g, '').split('\n');
  const out = [];
  const length = input.length;

  for (let i = 0; i < length; i++) {
    out.push(input[i].trim());
  }

  return out.join('\n');
}

function re_escape_n(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function re_escape(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\n/g, '\\n');
}

function descape(string) {
  /*
  From joliss/js-string-escape under MIT:

  The MIT License (MIT)

  Copyright (c) 2013 Jo Liss

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

   */
  return ('' + string).replace(/["'\\\n\r\u2028\u2029]/g, function (character) {
    // Escape all characters not included in SingleStringCharacters and
    // DoubleStringCharacters on
    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
    switch (character) {
      case '"':
      case "'":
      case '\\':
        return '\\' + character;
      // Four possible LineTerminator characters need to be escaped:
      case '\n':
        return '\\n';
      case '\r':
        return '\\r';
      case '\u2028':
        return '\\u2028';
      case '\u2029':
        return '\\u2029';
    }
  });
}

function jsonEscape(str) {
  return str.replace(/\"/g, '\\"').replace(/\r?\n/g, '\\n');
}

function minify(__str) {

  var options = UglifyJS.defaults({}, {
      spidermonkey     : false,
      outSourceMap     : null,
      sourceRoot       : null,
      inSourceMap      : null,
      sourceMapUrl     : null,
      fromString       : false,
      warnings         : false,
      mangle           : {},
      mangleProperties : false,
      nameCache        : null,
      output           : null,
      compress         : {},
      parse            : {}
  });
  UglifyJS.base54.reset();

  // 1. parse
  var toplevel = null,
      sourcesContent = {};

  toplevel = UglifyJS.parse(__str, {
    filename: 'inlinefile.js',
    toplevel: toplevel,
    bare_returns: options.parse ? options.parse.bare_returns : undefined
  });

  if (options.wrap) {
    toplevel = toplevel.wrap_commonjs(options.wrap, options.exportAll);
  }

  // 2. compress
  if (options.compress) {
      var compress = { warnings: options.warnings };
      UglifyJS.merge(compress, options.compress);
      toplevel.figure_out_scope();
      var sq = UglifyJS.Compressor(compress);
      toplevel = sq.compress(toplevel);
  }

  // 3. mangle properties
  if (options.mangleProperties || options.nameCache) {
      options.mangleProperties.cache = UglifyJS.readNameCache(options.nameCache, "props");
      toplevel = UglifyJS.mangle_properties(toplevel, options.mangleProperties);
      UglifyJS.writeNameCache(options.nameCache, "props", options.mangleProperties.cache);
  }

  // 4. mangle
  if (options.mangle) {
      toplevel.figure_out_scope(options.mangle);
      toplevel.compute_char_frequency(options.mangle);
      toplevel.mangle_names(options.mangle);
  }

  // 5. output
  var inMap = options.inSourceMap;
  var output = {};
  //if (typeof options.inSourceMap == "string") {
  //    inMap = JSON.parse(fs.readFileSync(options.inSourceMap, "utf8"));
  //}
  if (options.outSourceMap) {
      output.source_map = UglifyJS.SourceMap({
          file: options.outSourceMap,
          orig: inMap,
          root: options.sourceRoot
      });
      if (options.sourceMapIncludeSources) {
          for (var file in sourcesContent) {
              if (sourcesContent.hasOwnProperty(file)) {
                  output.source_map.get().setSourceContent(file, sourcesContent[file]);
              }
          }
      }

  }
  if (options.output) {
      UglifyJS.merge(output, options.output);
  }
  var stream = UglifyJS.OutputStream(output);
  toplevel.print(stream);

  var mappingUrlPrefix = "\n//# sourceMappingURL=";
  if (options.outSourceMap && typeof options.outSourceMap === "string" && options.sourceMapUrl !== false) {
      stream += mappingUrlPrefix + (typeof options.sourceMapUrl === "string" ? options.sourceMapUrl : options.outSourceMap);
  }

  var source_map = output.source_map;
  if (source_map) {
      source_map = source_map + "";
  }

  //return {
  //    code : stream + "",
  //    map  : source_map
  //};

  return stream + "";

}

function beautify(text) {
  return js_beautify(text, {
    'indent_size' : 2,
    'indent_char' : ' '
  });
}

function escapeNonPrintable(str) {
  // window.MATCH_NON_PRINTABLE_CHARS is from libraries/non-printable-chars-regex.js
// THE THEORY: (but not actually how it seems to work)
//    return str.replace(window.MATCH_NON_PRINTABLE_CHARS, function(match) {
//      var codePoint = match.codePointAt(0);
//      var codeVal = codePoint.toString(16);
//      if (codePoint < 256) {
//        return '\\x' + ("00" + codeVal).slice(-2); // not in JSON
//      } else if (codePoint < 65536) {
//        return '\\u' + ("0000" + codeVal).slice(-4); // basically the standard
//      } else {
//        return '\\u{' + codeVal + '}' // new in ES6
//      }
//    });
  return str.replace(window.MATCH_NON_PRINTABLE_CHARS, function(match) {
    var codePoint = match.codePointAt(0);
    var codeVal = codePoint.toString(16);
    if (codePoint < 256) {
      return '\\x' + ("00" + codeVal).slice(-2); // not in JSON
    } else {
      return '\\u' + ("0000" + codeVal).slice(-4); // basically the standard
    }
  });
}

function escapeNonPrintableJSON(str) {
  return str.replace(window.MATCH_NON_PRINTABLE_CHARS, function(match) {
    var codePoint = match.codePointAt(0);
    var codeVal = codePoint.toString(16);
    return '\\u' + ("0000" + codeVal).slice(-4); // basically the standard
  });
}

function unZalgo(str) {
  return str.replace(/[\u0300–\u036F\u1AB0–\u1AFF\u1DC0–\u1DFF\u20D0–\u20FF\uFE20–\uFE2F\u0483-\u0486\u05C7\u0610-\u061A\u0656-\u065F\u0670\u06D6-\u06ED\u0711\u0730-\u073F\u0743-\u074A\u0F18-\u0F19\u0F35\u0F37\u0F72-\u0F73\u0F7A-\u0F81\u0F84\u0e00-\u0eff\uFC5E-\uFC62]/g, '');
}

function fromBinary(str) {
  str = str.replace(/\s*/g, ''); // remove whitespace
  str = str.match(/.{1,7}/g); // split 8 chars
  var outstr = [];
  for (var i = 0; i < str.length; i++) {
    outstr.push(parseInt(str[i], 2));
  }
  return outstr.join('');
}

function toBinary(str) {
  var outstr = [];
  for (var i = 0; i < str.length; i++) {
    outstr.push(str.charCodeAt(i).toString(2));
  }
  return outstr.join(' ');
}

function toHex(str) {
  var outstr = [];
  for (var i = 0; i < str.length; i++) {
    outstr.push((str.charCodeAt(i) % 256).toString(16)); // % 256 gets only the lower byte
  }
  return outstr.join(' ');
}

function fromHex(str) {
  str = str.replace(/\s*/g, ''); // remove whitespace
  str = str.match(/../g); // split 2 chars
  var outstr = [];
  for (var i = 0; i < str.length; i++) {
    outstr.push(String.fromCharCode(parseInt(str[i], 16)));
  }
  return outstr.join('');
}

function toDec(str) {
  var outstr = [];
  for (var i = 0; i < str.length; i++) {
    outstr.push((str.charCodeAt(i) % 256).toString()); // % 256 gets only the lower byte
  }
  return outstr.join(' ');
}

function fromDec(str) {
  str = str.split(' '); // split by space
  var outstr = [];
  for (var i = 0; i < str.length; i++) {
    outstr.push(String.fromCharCode(parseInt(str[i])));
  }
  return outstr.join('');
}

function doChecksum(suffix) {
  const fastHash = weirdhash.fastHash(suffix);
  const strHash = weirdhash.strHash(suffix);
  const hashCode = weirdhash.hashCode(suffix);
  const md5 = weirdhash.md5(suffix);
  const sha1 = weirdhash.sha1(suffix);
  const sum = weirdhash.sum(suffix);
  const javaHashCode = weirdhash.javaHashCode(suffix);
  const hashCode2 = weirdhash.hashCode2(suffix);

  // FastHash
  // Simple but unreliable function to create string hash by Sergey.Shuchkin [t] gmail.com
  // hashCode by http://stackoverflow.com/users/353872/fordi
  // MD5 Algorithm from http://www.myersdaily.org/joseph/javascript/md5-text.html
  // SHA-1 implementation in JavaScript (c) Chris Veness 2002-2014 / MIT Licence
  // "blazing fast unique hash generator" from https://github.com/bevacqua/hash-sum
  // Javascript implementation of Java’s String.hashCode() method http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  // mod of hashCode by http://stackoverflow.com/users/353872/fordi using base36 and only takes in strings

  outputText('FastHash: ' + fastHash + '\n' + 
             'Sergey Shuchkin\'s: ' + strHash + '\n' + 
             'Fordi\'s: ' + hashCode + '\n' + 
             'Joseph Myers\' MD5: ' + md5 + '\n' + 
             'Chris Veness\' SHA-1: ' + sha1 + '\n' + 
             'Nicolás Bevacqua\'s: ' + sum + '\n' + 
             'Wes\': ' + javaHashCode + '\n' + 
             'Modified version of Fordi\'s: ' + hashCode2 + '\n');
  return suffix;
}

const lowers = [/(\s)A(\s)/g, /(\s)Is(\s)/g, /(\s)An(\s)/g, /(\s)The(\s)/g, /(\s)And(\s)/g, /(\s)But(\s)/g, /(\s)Or(\s)/g, /(\s)For(\s)/g, /(\s)Nor(\s)/g, /(\s)As(\s)/g, /(\s)At(\s)/g, 
  /(\s)By(\s)/g, /(\s)For(\s)/g, /(\s)From(\s)/g, /(\s)In(\s)/g, /(\s)Into(\s)/g, /(\s)Near(\s)/g, /(\s)Of(\s)/g, /(\s)On(\s)/g, /(\s)Onto(\s)/g, /(\s)To(\s)/g, /(\s)With(\s)/g];
const lowered = ['$1a$2', '$1is$2', '$1an$2', '$1the$2', '$1and$2', '$1but$2', '$1or$2', '$1for$2', '$1nor$2', '$1as$2', '$1at$2', 
  '$1by$2', '$1for$2', '$1from$2', '$1in$2', '$1into$2', '$1near$2', '$1of$2', '$1on$2', '$1onto$2', '$1to$2', '$1with$2'];
const lowersLen = lowers.length;

const uppers  = ['ID', 'TV'];

function titleCase(str) {
  str = str.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return (uppers.indexOf(txt) != -1) ? txt : (txt[0].toUpperCase() + txt.substr(1).toLowerCase());
  });

  // Certain minor words should be left lowercase unless  they are the first -- or last words in the string -- TODO: why the last words as well?

  for (let i = 0; i < lowersLen; i++) {
    str = str.replace(lowers[i], lowered[i]);
  }

  return str;
}

const escapables = [
  /&/g, "&amp;",
  /</g, "&lt;",
  />/g, "&gt;",
  /À/g, "&Agrave;",
  /Á/g, "&Aacute;",
  /Â/g, "&Acirc;",
  /Ã/g, "&Atilde;",
  /Ä/g, "&Auml;",
  /Å/g, "&Aring;",
  /Æ/g, "&AElig;",
  /Ç/g, "&Ccedil;",
  /È/g, "&Egrave;",
  /É/g, "&Eacute;",
  /Ê/g, "&Ecirc;",
  /Ë/g, "&Euml;",
  /Ì/g, "&Igrave;",
  /Í/g, "&Iacute;",
  /Î/g, "&Icirc;",
  /Ï/g, "&Iuml;",
  /Ð/g, "&ETH;",
  /Ñ/g, "&Ntilde;",
  /Ò/g, "&Ograve;",
  /Ó/g, "&Oacute;",
  /Ô/g, "&Ocirc;",
  /Õ/g, "&Otilde;",
  /Ö/g, "&Ouml;",
  /Ø/g, "&Oslash;",
  /Ù/g, "&Ugrave;",
  /Ú/g, "&Uacute;",
  /Û/g, "&Ucirc;",
  /Ü/g, "&Uuml;",
  /Ý/g, "&Yacute;",
  /Þ/g, "&THORN;",
  /ß/g, "&szlig;",
  /à/g, "&agrave;",
  /á/g, "&aacute;",
  /â/g, "&acirc;",
  /ã/g, "&atilde;",
  /ä/g, "&auml;",
  /å/g, "&aring;",
  /æ/g, "&aelig;",
  /ç/g, "&ccedil;",
  /è/g, "&egrave;",
  /é/g, "&eacute;",
  /ê/g, "&ecirc;",
  /ë/g, "&euml;",
  /ì/g, "&igrave;",
  /í/g, "&iacute;",
  /î/g, "&icirc;",
  /ï/g, "&iuml;",
  /ð/g, "&eth;",
  /ñ/g, "&ntilde;",
  /ò/g, "&ograve;",
  /ó/g, "&oacute;",
  /ô/g, "&ocirc;",
  /õ/g, "&otilde;",
  /ö/g, "&ouml;",
  /ø/g, "&oslash;",
  /ù/g, "&ugrave;",
  /ú/g, "&uacute;",
  /û/g, "&ucirc;",
  /ü/g, "&uuml;",
  /ý/g, "&yacute;",
  /þ/g, "&thorn;",
  /ÿ/g, "&yuml;",
  // there is no actual representation for &nbsp;
  /// /g, "&nbsp;",
  /¡/g, "&iexcl;",
  /¢/g, "&cent;",
  /£/g, "&pound;",
  /¤/g, "&curren;",
  /¥/g, "&yen;",
  /¦/g, "&brvbar;",
  /§/g, "&sect;",
  /¨/g, "&uml;",
  /©/g, "&copy;",
  /ª/g, "&ordf;",
  /«/g, "&laquo;",
  /¬/g, "&not;",
  /\xad/g, "&shy;",
  /®/g, "&reg;",
  /¯/g, "&macr;",
  /°/g, "&deg;",
  /±/g, "&plusmn;",
  /²/g, "&sup2;",
  /³/g, "&sup3;",
  /´/g, "&acute;",
  /µ/g, "&micro;",
  /¶/g, "&para;",
  /¸/g, "&cedil;",
  /¹/g, "&sup1;",
  /º/g, "&ordm;",
  /»/g, "&raquo;",
  /¼/g, "&frac14;",
  /½/g, "&frac12;",
  /¾/g, "&frac34;",
  /¿/g, "&iquest;",
  /×/g, "&times;",
  /÷/g, "&divide;",
  /∀/g, "&forall;",
  /∂/g, "&part;",
  /∃/g, "&exist;",
  /∅/g, "&empty;",
  /∇/g, "&nabla;",
  /∈/g, "&isin;",
  /∉/g, "&notin;",
  /∋/g, "&ni;",
  /∏/g, "&prod;",
  /∑/g, "&sum;",
  /−/g, "&minus;",
  /∗/g, "&lowast;",
  /√/g, "&radic;",
  /∝/g, "&prop;",
  /∞/g, "&infin;",
  /∠/g, "&ang;",
  /∧/g, "&and;",
  /∨/g, "&or;",
  /∩/g, "&cap;",
  /∪/g, "&cup;",
  /∫/g, "&int;",
  /∴/g, "&there4;",
  /∼/g, "&sim;",
  /≅/g, "&cong;",
  /≈/g, "&asymp;",
  /≠/g, "&ne;",
  /≡/g, "&equiv;",
  /≤/g, "&le;",
  /≥/g, "&ge;",
  /⊂/g, "&sub;",
  /⊃/g, "&sup;",
  /⊄/g, "&nsub;",
  /⊆/g, "&sube;",
  /⊇/g, "&supe;",
  /⊕/g, "&oplus;",
  /⊗/g, "&otimes;",
  /⊥/g, "&perp;",
  /⋅/g, "&sdot;",
  /Α/g, "&Alpha;",
  /Β/g, "&Beta;",
  /Γ/g, "&Gamma;",
  /Δ/g, "&Delta;",
  /Ε/g, "&Epsilon;",
  /Ζ/g, "&Zeta;",
  /Η/g, "&Eta;",
  /Θ/g, "&Theta;",
  /Ι/g, "&Iota;",
  /Κ/g, "&Kappa;",
  /Λ/g, "&Lambda;",
  /Μ/g, "&Mu;",
  /Ν/g, "&Nu;",
  /Ξ/g, "&Xi;",
  /Ο/g, "&Omicron;",
  /Π/g, "&Pi;",
  /Ρ/g, "&Rho;",
  /Σ/g, "&Sigma;",
  /Τ/g, "&Tau;",
  /Υ/g, "&Upsilon;",
  /Φ/g, "&Phi;",
  /Χ/g, "&Chi;",
  /Ψ/g, "&Psi;",
  /Ω/g, "&Omega;",
  /α/g, "&alpha;",
  /β/g, "&beta;",
  /γ/g, "&gamma;",
  /δ/g, "&delta;",
  /ε/g, "&epsilon;",
  /ζ/g, "&zeta;",
  /η/g, "&eta;",
  /θ/g, "&theta;",
  /ι/g, "&iota;",
  /κ/g, "&kappa;",
  /λ/g, "&lambda;",
  /μ/g, "&mu;",
  /ν/g, "&nu;",
  /ξ/g, "&xi;",
  /ο/g, "&omicron;",
  /π/g, "&pi;",
  /ρ/g, "&rho;",
  /ς/g, "&sigmaf;",
  /σ/g, "&sigma;",
  /τ/g, "&tau;",
  /υ/g, "&upsilon;",
  /φ/g, "&phi;",
  /χ/g, "&chi;",
  /ψ/g, "&psi;",
  /ω/g, "&omega;",
  /ϑ/g, "&thetasym;",
  /ϒ/g, "&upsih;",
  /ϖ/g, "&piv;",
  /Œ/g, "&OElig;",
  /œ/g, "&oelig;",
  /Š/g, "&Scaron;",
  /š/g, "&scaron;",
  /Ÿ/g, "&Yuml;",
  /ƒ/g, "&fnof;",
  /ˆ/g, "&circ;",
  /˜/g, "&tilde;",
  / /g, "&ensp;",
  / /g, "&emsp;",
  / /g, "&thinsp;",
  /\u200c/g, "&zwnj;",
  /\u200d/g, "&zwj;",
  /\u200e/g, "&lrm;",
  /\u200f/g, "&rlm;",
  /–/g, "&ndash;",
  /—/g, "&mdash;",
  /‘/g, "&lsquo;",
  /’/g, "&rsquo;",
  /‚/g, "&sbquo;",
  /“/g, "&ldquo;",
  /”/g, "&rdquo;",
  /„/g, "&bdquo;",
  /†/g, "&dagger;",
  /‡/g, "&Dagger;",
  /•/g, "&bull;",
  /…/g, "&hellip;",
  /‰/g, "&permil;",
  /′/g, "&prime;",
  /″/g, "&Prime;",
  /‹/g, "&lsaquo;",
  /›/g, "&rsaquo;",
  /‾/g, "&oline;",
  /€/g, "&euro;",
  /™/g, "&trade;",
  /←/g, "&larr;",
  /↑/g, "&uarr;",
  /→/g, "&rarr;",
  /↓/g, "&darr;",
  /↔/g, "&harr;",
  /↵/g, "&crarr;",
  /⌈/g, "&lceil;",
  /⌉/g, "&rceil;",
  /⌊/g, "&lfloor;",
  /⌋/g, "&rfloor;",
  /◊/g, "&loz;",
  /♠/g, "&spades;",
  /♣/g, "&clubs;",
  /♥/g, "&hearts;",
  /♦/g, "&diams;"
];

function htmlEscape(str) {
  for (let i = 0, len = escapables.length; i < len; i += 2) {
    str = str.replace(escapables[i], escapables[i+1]);
  }
  return str;
}