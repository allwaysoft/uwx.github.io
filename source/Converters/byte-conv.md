---
title: Byte Converter
---

<script type="text/javascript">
// regexes:
// ",? *
// to nil

// \(|\)|\&|,|'
// to nil

//  +
// to _

// ^
// to u_

// (.*)
// to <input name="\1" id="\1" tabindex="5" size="25">

  var u = {
  'defaultValue': [
    "bytes", 1
  ],
  'units': [
      ["bits",       "u_bits",          "",   0.125],
      ["bytes",      "u_bytes",         "",   1],
      ["kilobits",   "u_kilobits",      "Kb", 128],
      ["kibibytes",  "u_kibibytes",     "KiB", 1024],
      ["kilobytes",  "u_kilobytes",     "KB", 1000],
      ["megabits",   "u_megabits",      "Mb", 131072],
      ["mebibytes",  "u_mebibytes",     "MiB", 1048576],
      ["megabytes",  "u_megabytes",     "MB", 1000000],
      ["gigabits",   "u_gigabits",      "Gb", 134217728],
      ["gibibytes",  "u_gibibytes",     "GiB", 1073741824],
      ["gigabytes",  "u_gigabytes",     "GB", 1000000000],
      ["terabits",   "u_terabits",      "Tb", 137438953472],
      ["tebibytes",  "u_tebibytes",     "TiB", 1099511627776],
      ["terabytes",  "u_terabytes",     "TB", 1000000000000],
      ["petabits",   "u_petabits",      "Pb", 140737488355328],
      ["pebibytes",  "u_pebibytes",     "PiB", 1125899906842624],
      ["petabytes",  "u_petabytes",     "PB", 1000000000000000],
      ["exabits",    "u_exabits",       "Eb", 144115188075855872],
      ["exbibytes",  "u_exbibytes",     "EiB", 1152921504606846976],
      ["exabytes",   "u_exabytes",      "EB", 1000000000000000000],
      ["zettabits",  "u_zettabits",     "Zb",  Math.pow(1024, 7) * 0.125],
      ["zebibytes",  "u_zebibytes",     "ZiB", Math.pow(1024, 7)],
      ["zettabytes", "u_zettabytes",    "ZB",  Math.pow(1000, 7)],
      ["yottabits",  "u_yottabits",     "Yb",  Math.pow(1024, 8) * 0.125],
      ["yobibytes",  "u_yobibytes",     "YiB", Math.pow(1024, 8)],
      ["yottabytes", "u_yottabytes",    "YB",  Math.pow(1000, 8)],
  ]};

  var $id = document.getElementById.bind(document);
  var altMultiplier = {};
  var elements = {};
  var lastAssignedValue = null;
  var lastAssignedUnit = null;

  window.onload = function() {

    u.units.forEach(function(unit) {
      elements[unit[1]] = $id(unit[1]);
      altMultiplier[unit[1]] = unit[3];
    });

    Object.keys(elements).forEach(function(k) {
      elements[k].onkeypress = function(e) {
        setTimeout(function() { // setTimeout with 0 so we get the up-to-date field value
          console.log('typed');
          lastAssignedValue = elements[k].value * altMultiplier[k];
          lastAssignedUnit = k;
          console.log('value in meters ' + lastAssignedValue);
        }, 0);
      }
    });
    

    $id('gen').onclick = function() {

      if (lastAssignedValue !== null) {
        u.units.forEach(function(unit) {
          if (lastAssignedUnit !== unit[1]) {
            elements[unit[1]].value = lastAssignedValue / unit[3]; // divide or multiply here?
          }
        });
      }

    }
  };
</script>

Convert between bytes and bits.

<div id="finputs">
<input name="u_bits" id="u_bits" tabindex="5" size="25"> bits<br>
<input name="u_bytes" id="u_bytes" tabindex="5" size="25"> bytes<br>
<input name="u_kilobits" id="u_kilobits" tabindex="5" size="25"> kilobits<br>
<input name="u_kibibytes" id="u_kibibytes" tabindex="5" size="25"> kibibytes<br>
<input name="u_kilobytes" id="u_kilobytes" tabindex="5" size="25"> kilobytes<br>
<input name="u_megabits" id="u_megabits" tabindex="5" size="25"> megabits<br>
<input name="u_mebibytes" id="u_mebibytes" tabindex="5" size="25"> mebibytes<br>
<input name="u_megabytes" id="u_megabytes" tabindex="5" size="25"> megabytes<br>
<input name="u_gigabits" id="u_gigabits" tabindex="5" size="25"> gigabits<br>
<input name="u_gibibytes" id="u_gibibytes" tabindex="5" size="25"> gibibytes<br>
<input name="u_gigabytes" id="u_gigabytes" tabindex="5" size="25"> gigabytes<br>
<input name="u_terabits" id="u_terabits" tabindex="5" size="25"> terabits<br>
<input name="u_tebibytes" id="u_tebibytes" tabindex="5" size="25"> tebibytes<br>
<input name="u_terabytes" id="u_terabytes" tabindex="5" size="25"> terabytes<br>
<input name="u_petabits" id="u_petabits" tabindex="5" size="25"> petabits<br>
<input name="u_pebibytes" id="u_pebibytes" tabindex="5" size="25"> pebibytes<br>
<input name="u_petabytes" id="u_petabytes" tabindex="5" size="25"> petabytes<br>
<input name="u_exabits" id="u_exabits" tabindex="5" size="25"> exabits<br>
<input name="u_exbibytes" id="u_exbibytes" tabindex="5" size="25"> exbibytes<br>
<input name="u_exabytes" id="u_exabytes" tabindex="5" size="25"> exabytes<br>
<input name="u_zettabits" id="u_zettabits" tabindex="5" size="25"> zettabits<br>
<input name="u_zebibytes" id="u_zebibytes" tabindex="5" size="25"> zebibytes<br>
<input name="u_zettabytes" id="u_zettabytes" tabindex="5" size="25"> zettabytes<br>
<input name="u_yottabits" id="u_yottabits" tabindex="5" size="25"> yottabits<br>
<input name="u_yobibytes" id="u_yobibytes" tabindex="5" size="25"> yobibytes<br>
<input name="u_yottabytes" id="u_yottabytes" tabindex="5" size="25"> yottabytes<br>
<p><input id="gen" class="genbtn" value="Convert" tabindex="4" type="submit"></p>
<div>