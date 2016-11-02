---
title: Time Converter
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
    "seconds", 1
  ],
  'units': [
      ["centuries",                   "u_centuries", "",    3153600000],
      ["days",                        "u_days", "d",   86400],
      ["decades",                     "u_decades", "",    315360000],
      ["femtoseconds",                "u_femtoseconds", "fs",  1e-15],
      ["fortnights",                  "u_fortnights", "",    1209600],
      ["hours",                       "u_hours", "h",   3600],
      ["microseconds",                "u_microseconds", "μs",  1e-6],
      ["millenia",                    "u_millenia", "",    31536000000],
      ["milliseconds",                "u_milliseconds", "ms",  1e-3],
      ["minutes",                     "u_minutes", "min", 60],
      ["months (Common)",             "u_months_Common", "",    2628000],
      ["months (Synodic)",            "u_months_Synodic", "",    2551442.8896],
      ["nanoseconds",                 "u_nanoseconds", "ns",  1e-9],
      ["picoseconds",                 "u_picoseconds", "ps",  1e-12],
      ["quarters (Common)",           "u_quarters_Common", "",    7884000],
      ["seconds",                     "u_seconds", "s",   1],
      ["shakes",                      "u_shakes", "",    1e-8],
      ["weeks",                       "u_weeks", "",    604800],
      ["years (Common)",              "u_years_Common", "y",   31536000],
      ["years (Average Gregorian)",   "u_years_Average_Gregorian", "",    31556952],
      ["years (Julian)",              "u_years_Julian", "",    31557600],
      ["years (Leap)",                "u_years_Leap", "",    31622400],
      ["years (Tropical)",            "u_years_Tropical", "",    31556925.216]
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

Convert between time measurements.

<div id="finputs">
<input name="u_centuries" id="u_centuries" tabindex="5" size="25"> centuries<br>
<input name="u_days" id="u_days" tabindex="5" size="25"> days<br>
<input name="u_decades" id="u_decades" tabindex="5" size="25"> decades<br>
<input name="u_femtoseconds" id="u_femtoseconds" tabindex="5" size="25"> femtoseconds<br>
<input name="u_fortnights" id="u_fortnights" tabindex="5" size="25"> fortnights<br>
<input name="u_hours" id="u_hours" tabindex="5" size="25"> hours<br>
<input name="u_microseconds" id="u_microseconds" tabindex="5" size="25"> microseconds<br>
<input name="u_millenia" id="u_millenia" tabindex="5" size="25"> millenia<br>
<input name="u_milliseconds" id="u_milliseconds" tabindex="5" size="25"> milliseconds<br>
<input name="u_minutes" id="u_minutes" tabindex="5" size="25"> minutes<br>
<input name="u_months_Common" id="u_months_Common" tabindex="5" size="25"> months (Common)<br>
<input name="u_months_Synodic" id="u_months_Synodic" tabindex="5" size="25"> months (Synodic)<br>
<input name="u_nanoseconds" id="u_nanoseconds" tabindex="5" size="25"> nanoseconds<br>
<input name="u_picoseconds" id="u_picoseconds" tabindex="5" size="25"> picoseconds<br>
<input name="u_quarters_Common" id="u_quarters_Common" tabindex="5" size="25"> quarters (Common)<br>
<input name="u_seconds" id="u_seconds" tabindex="5" size="25"> seconds<br>
<input name="u_shakes" id="u_shakes" tabindex="5" size="25"> shakes<br>
<input name="u_weeks" id="u_weeks" tabindex="5" size="25"> weeks<br>
<input name="u_years_Common" id="u_years_Common" tabindex="5" size="25"> years (Common)<br>
<input name="u_years_Average_Gregorian" id="u_years_Average_Gregorian" tabindex="5" size="25"> years (Average Gregorian)<br>
<input name="u_years_Julian" id="u_years_Julian" tabindex="5" size="25"> years (Julian)<br>
<input name="u_years_Leap" id="u_years_Leap" tabindex="5" size="25"> years (Leap)<br>
<input name="u_years_Tropical" id="u_years_Tropical" tabindex="5" size="25"> years (Tropical)<br>
<p><input id="gen" class="genbtn" value="Convert" tabindex="4" type="submit"></p>
<div>