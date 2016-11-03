---
title: Byte Converter
---

<script type="text/javascript">
// regexes:
// ",? *
// to nil

// \(|\)|\&|,|'
// to nil

// merged version of the 2 above
// ",? *|\(|\)|\&|,|'|^\s*\[
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
      ["acre foot",               "u_acre_foot", "",       1233481.83754752],
      ["barrels (oil)",           "u_barrels_oil", "bbl",    158.987294928],
      ["bushels (UK)",            "u_bushels_UK", "",       36.36872],
      ["bushels (US)",            "u_bushels_US", "",       35.23907016688],
      ["centiliters",             "u_centiliters", "",       0.01],
      ["cubic centimeters",       "u_cubic_centimeters", "cm³",    1e-3],
      ["cubic decimeters",        "u_cubic_decimeters", "dm³",    1],
      ["cubic decameters",        "u_cubic_decameters", "",       1e6],
      ["cubic feet",              "u_cubic_feet", "ft³",    28.316846592],
      ["cubic inches",            "u_cubic_inches", "",       0.016387064],
      ["cubic kilometers",        "u_cubic_kilometers", "",       1e12],
      ["cubic meters",            "u_cubic_meters", "m³",     1e3],
      ["cubic mile",              "u_cubic_mile", "",       4.168181825e12],
      ["cubic millimeters",       "u_cubic_millimeters", "",       1e-6],
      ["cubic yards",             "u_cubic_yards", "",       764.554857984],
      ["cups",                    "u_cups", "",       0.2365882365],
      ["deciliters",              "u_deciliters", "",       0.1],
      ["dram (imperial)",         "u_dram_imperial", "",       0.0035516328125000],
      ["dram (US)",               "u_dram_US", "",       0.0036966911953125],
      ["fluid ounces (imperial)", "u_fluid_ounces_imperial", "fl oz",  0.0284130625],
      ["fluid ounces (US)",       "u_fluid_ounces_US", "fl oz",  0.0295735295625],
      ["gallons (imperial)",      "u_gallons_imperial", "gal",    4.54609],
      ["gallons, dry (US)",       "u_gallons_dry_US", "",       4.40488377086],
      ["gallons, liquid (US)",    "u_gallons_liquid_US", "gal",    3.785411784],
      ["gill (imperial)",         "u_gill_imperial", "gi",     0.1420653125],
      ["gill (US)",               "u_gill_US", "gi",     0.11829411825],
      ["kiloliters",              "u_kiloliters", "kl",     1e3],
      ["liters",                  "u_liters", "l or L", 1],
      ["liters (1901-1964)",      "u_liters_1901-1964", "",       1.000028],
      ["milliliters",             "u_milliliters", "ml",     1e-3],
      ["microliters",             "u_microliters", "µl",     1e-6],
      ["nanoliters",              "u_nanoliters", "nl",     1e-9],
      ["picoliters",              "u_picoliters", "pl",     1e-12],
      ["pints (imperial)",        "u_pints_imperial", "pt",     0.56826125],
      ["pints, dry (US)",         "u_pints_dry_US", "",       0.5506104713575],
      ["pints, liquid (US)",      "u_pints_liquid_US", "pt",     0.473176473],
      ["quarts (imperial)",       "u_quarts_imperial", "qt",     1.1365225],
      ["quarts, dry (US)",        "u_quarts_dry_US", "",       1.101220942715],
      ["quarts, liquid (US)",     "u_quarts_liquid_US", "qt",     0.946352946],
      ["table spoons",            "u_table_spoons", "",       0.01478676478125],
      ["tea spoons",              "u_tea_spoons", "",       0.00492892159375]
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
<input name="u_acre_foot" id="u_acre_foot" tabindex="5" size="25"> acre foot<br>
<input name="u_barrels_oil" id="u_barrels_oil" tabindex="5" size="25"> barrels oil<br>
<input name="u_bushels_UK" id="u_bushels_UK" tabindex="5" size="25"> bushels UK<br>
<input name="u_bushels_US" id="u_bushels_US" tabindex="5" size="25"> bushels US<br>
<input name="u_centiliters" id="u_centiliters" tabindex="5" size="25"> centiliters<br>
<input name="u_cubic_centimeters" id="u_cubic_centimeters" tabindex="5" size="25"> cubic centimeters<br>
<input name="u_cubic_decimeters" id="u_cubic_decimeters" tabindex="5" size="25"> cubic decimeters<br>
<input name="u_cubic_decameters" id="u_cubic_decameters" tabindex="5" size="25"> cubic decameters<br>
<input name="u_cubic_feet" id="u_cubic_feet" tabindex="5" size="25"> cubic feet<br>
<input name="u_cubic_inches" id="u_cubic_inches" tabindex="5" size="25"> cubic inches<br>
<input name="u_cubic_kilometers" id="u_cubic_kilometers" tabindex="5" size="25"> cubic kilometers<br>
<input name="u_cubic_meters" id="u_cubic_meters" tabindex="5" size="25"> cubic meters<br>
<input name="u_cubic_mile" id="u_cubic_mile" tabindex="5" size="25"> cubic mile<br>
<input name="u_cubic_millimeters" id="u_cubic_millimeters" tabindex="5" size="25"> cubic millimeters<br>
<input name="u_cubic_yards" id="u_cubic_yards" tabindex="5" size="25"> cubic yards<br>
<input name="u_cups" id="u_cups" tabindex="5" size="25"> cups<br>
<input name="u_deciliters" id="u_deciliters" tabindex="5" size="25"> deciliters<br>
<input name="u_dram_imperial" id="u_dram_imperial" tabindex="5" size="25"> dram imperial<br>
<input name="u_dram_US" id="u_dram_US" tabindex="5" size="25"> dram US<br>
<input name="u_fluid_ounces_imperial" id="u_fluid_ounces_imperial" tabindex="5" size="25"> fluid ounces imperial<br>
<input name="u_fluid_ounces_US" id="u_fluid_ounces_US" tabindex="5" size="25"> fluid ounces US<br>
<input name="u_gallons_imperial" id="u_gallons_imperial" tabindex="5" size="25"> gallons imperial<br>
<input name="u_gallons_dry_US" id="u_gallons_dry_US" tabindex="5" size="25"> gallons dry US<br>
<input name="u_gallons_liquid_US" id="u_gallons_liquid_US" tabindex="5" size="25"> gallons liquid US<br>
<input name="u_gill_imperial" id="u_gill_imperial" tabindex="5" size="25"> gill imperial<br>
<input name="u_gill_US" id="u_gill_US" tabindex="5" size="25"> gill US<br>
<input name="u_kiloliters" id="u_kiloliters" tabindex="5" size="25"> kiloliters<br>
<input name="u_liters" id="u_liters" tabindex="5" size="25"> liters<br>
<input name="u_liters_1901-1964" id="u_liters_1901-1964" tabindex="5" size="25"> liters 1901-1964<br>
<input name="u_milliliters" id="u_milliliters" tabindex="5" size="25"> milliliters<br>
<input name="u_microliters" id="u_microliters" tabindex="5" size="25"> microliters<br>
<input name="u_nanoliters" id="u_nanoliters" tabindex="5" size="25"> nanoliters<br>
<input name="u_picoliters" id="u_picoliters" tabindex="5" size="25"> picoliters<br>
<input name="u_pints_imperial" id="u_pints_imperial" tabindex="5" size="25"> pints imperial<br>
<input name="u_pints_dry_US" id="u_pints_dry_US" tabindex="5" size="25"> pints dry US<br>
<input name="u_pints_liquid_US" id="u_pints_liquid_US" tabindex="5" size="25"> pints liquid US<br>
<input name="u_quarts_imperial" id="u_quarts_imperial" tabindex="5" size="25"> quarts imperial<br>
<input name="u_quarts_dry_US" id="u_quarts_dry_US" tabindex="5" size="25"> quarts dry US<br>
<input name="u_quarts_liquid_US" id="u_quarts_liquid_US" tabindex="5" size="25"> quarts liquid US<br>
<input name="u_table_spoons" id="u_table_spoons" tabindex="5" size="25"> table spoons<br>
<input name="u_tea_spoons" id="u_tea_spoons" tabindex="5" size="25"> tea spoons<br>
<p><input id="gen" class="genbtn" value="Convert" tabindex="4" type="submit"></p>
<div>