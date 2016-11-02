---
title: Mass Converter
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
    "kilograms", 1
  ],
  'units': [
    ["carats (metric)",                "u_carats_metric", "",     0.0002],
    ["cental",                         "u_cental", "",     45.359237],
    ["decagrams",                      "u_decagrams", "dag",  0.01],
    ["Earth masses",                   "u_Earth_masses", "",     5.980e24],
    ["femtograms",                     "u_femtograms", "fg",   1e-18],
    ["grains",                         "u_grains", "",     0.00006479891],
    ["grams",                          "u_grams", "g",    1e-3],
    ["hectograms",                     "u_hectograms", "hg",   0.1],
    ["hundredweights",                 "u_hundredweights", "",     50.80234544],
    ["kilograms",                      "u_kilograms", "kg",   1],
    ["kilotonnes",                     "u_kilotonnes", "",     1e6],
    ["megatonnes",                     "u_megatonnes", "",     1e9],
    ["micrograms",                     "u_micrograms", "µg",   1e-9],
    ["milligrams",                     "u_milligrams", "mg",   1e-6],
    ["nanograms",                      "u_nanograms", "ng",   1e-12],
    ["ounces (US & UK)",               "u_ounces_US_UK", "oz",   0.028349523125],
    ["ounces (troy, precious metals)", "u_ounces_troy_precious_metals", "oz t", 0.0311034768],
    ["picograms",                      "u_picograms", "pg",   1e-15],
    ["pounds (US & UK)",               "u_pounds_US_UK", "lbs",  0.45359237],
    ["pounds (troy, precious metals)", "u_pounds_troy_precious_metals", "",     0.3732417216],
    ["Solar masses",                   "u_Solar_masses", "",     1.989e30],
    ["slugs (g-pounds)",               "u_slugs_g-pounds", "",     14.593903],
    ["stones",                         "u_stones", "st",   6.35029318],
    ["tons (UK or long)",              "u_tons_UK_or_long", "",     1016.0469088],
    ["tons (US or short)",             "u_tons_US_or_short", "",     907.18474],
    ["tonnes (metric)",                "u_tonnes_metric", "",     1000]
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

Convert between mass units.

<div id="finputs">
<input name="u_carats_metric" id="u_carats_metric" tabindex="5" size="25"> carats (metric)<br>
<input name="u_cental" id="u_cental" tabindex="5" size="25"> cental<br>
<input name="u_decagrams" id="u_decagrams" tabindex="5" size="25"> decagrams<br>
<input name="u_Earth_masses" id="u_Earth_masses" tabindex="5" size="25"> Earth masses<br>
<input name="u_femtograms" id="u_femtograms" tabindex="5" size="25"> femtograms<br>
<input name="u_grains" id="u_grains" tabindex="5" size="25"> grains<br>
<input name="u_grams" id="u_grams" tabindex="5" size="25"> grams<br>
<input name="u_hectograms" id="u_hectograms" tabindex="5" size="25"> hectograms<br>
<input name="u_hundredweights" id="u_hundredweights" tabindex="5" size="25"> hundredweights<br>
<input name="u_kilograms" id="u_kilograms" tabindex="5" size="25"> kilograms<br>
<input name="u_kilotonnes" id="u_kilotonnes" tabindex="5" size="25"> kilotonnes<br>
<input name="u_megatonnes" id="u_megatonnes" tabindex="5" size="25"> megatonnes<br>
<input name="u_micrograms" id="u_micrograms" tabindex="5" size="25"> micrograms<br>
<input name="u_milligrams" id="u_milligrams" tabindex="5" size="25"> milligrams<br>
<input name="u_nanograms" id="u_nanograms" tabindex="5" size="25"> nanograms<br>
<input name="u_ounces_US_UK" id="u_ounces_US_UK" tabindex="5" size="25"> ounces (US & UK)<br>
<input name="u_ounces_troy_precious_metals" id="u_ounces_troy_precious_metals" tabindex="5" size="25"> ounces (troy, precious metals)<br>
<input name="u_picograms" id="u_picograms" tabindex="5" size="25"> picograms<br>
<input name="u_pounds_US_UK" id="u_pounds_US_UK" tabindex="5" size="25"> pounds (US & UK)<br>
<input name="u_pounds_troy_precious_metals" id="u_pounds_troy_precious_metals" tabindex="5" size="25"> pounds (troy, precious metals)<br>
<input name="u_Solar_masses" id="u_Solar_masses" tabindex="5" size="25"> Solar masses<br>
<input name="u_slugs_g-pounds" id="u_slugs_g-pounds" tabindex="5" size="25"> slugs (g-pounds)<br>
<input name="u_stones" id="u_stones" tabindex="5" size="25"> stones<br>
<input name="u_tons_UK_or_long" id="u_tons_UK_or_long" tabindex="5" size="25"> tons (UK or long)<br>
<input name="u_tons_US_or_short" id="u_tons_US_or_short" tabindex="5" size="25"> tons (US or short)<br>
<input name="u_tonnes_metric" id="u_tonnes_metric" tabindex="5" size="25"> tonnes (metric)<br>
<p><input id="gen" class="genbtn" value="Convert" tabindex="4" type="submit"></p>
<div>