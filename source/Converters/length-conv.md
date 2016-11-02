---
title: Length Converter
---

<script type="text/javascript">
  var u = {
  'defaultValue': [
    "meters", 1
  ],
  'units': [
    ["ångströms",                       "u_angstroms", "Å",        1e-10],
    ["astronomical units",              "u_astronomical_units", "au",       149598550000],
    ["barleycorns",                     "u_barleycorns", "",         0.008467],
    ["cables",                          "u_cables", "",         182.88],
    ["centimeters",                     "u_centimeters", "cm",       0.01],
    ["chains (surveyors')",             "u_chains_surveyors", "",         20.116840233680467360934721869444],
    ["decimeters",                      "u_decimeters", "dm",       0.1],
    ["ells (UK)",                       "u_ells_UK", "",         0.875],
    ["ems (pica)",                      "u_ems_pica", "",         0.0042333],
    ["fathoms",                         "u_fathoms", "",         1.8288],
    ["feet (UK & US)",                  "u_feet_UK_US", "",         0.3048],
    ["feet (US survey)",                "u_feet_US_survey", "",         0.30480060960121920243840487680975],
    ["furlongs",                        "u_furlongs", "",         201.168],
    ["hands",                           "u_hands", "",         0.1016],
    ["hectometers",                     "u_hectometers", "hm",       100],
    ["inches",                          "u_inches", "in",       0.0254],
    ["kilometers",                      "u_kilometers", "km",       1000],
    ["light years",                     "u_light_years", "",         9.460528405e15],
    ["meters",                          "u_meters", "m",        1],
    ["micrometers",                     "u_micrometers", "µm",       1e-6],
    ["mil",                             "u_mil", "",         0.0000254],
    ["miles (UK & US)",                 "u_miles_UK_US", "",         1609.344],
    ["miles (nautical, international)", "u_miles_nautical_international", "",         1852],
    ["miles (nautical, UK)",            "u_miles_nautical_UK", "",         1853.184],
    ["millimeters",                     "u_millimeters", "mm",       0.001],
    ["nanometers",                      "u_nanometers", "nm",       1e-9],
    ["parsecs",                         "u_parsecs", "",         3.0856776e16],
    ["picometers",                      "u_picometers", "pm",       1e-12],
    ["Scandinavian mile",               "u_Scandinavian_mile", "",         10000],
    ["thou",                            "u_thou", "",         0.0000254],
    ["yards",                           "u_yards", "",         0.9144]
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

Convert between length measurements.

<div id="finputs">
<input name="u_angstroms" id="u_angstroms" tabindex="5" size="25"> ångströms<br>
<input name="u_astronomical_units" id="u_astronomical_units" tabindex="5" size="25"> astronomical units<br>
<input name="u_barleycorns" id="u_barleycorns" tabindex="5" size="25"> barleycorns<br>
<input name="u_cables" id="u_cables" tabindex="5" size="25"> cables<br>
<input name="u_centimeters" id="u_centimeters" tabindex="5" size="25"> centimeters<br>
<input name="u_chains_surveyors" id="u_chains_surveyors" tabindex="5" size="25"> chains (surveyors')<br>
<input name="u_decimeters" id="u_decimeters" tabindex="5" size="25"> decimeters<br>
<input name="u_ells_UK" id="u_ells_UK" tabindex="5" size="25"> ells (UK)<br>
<input name="u_ems_pica" id="u_ems_pica" tabindex="5" size="25"> ems (pica)<br>
<input name="u_fathoms" id="u_fathoms" tabindex="5" size="25"> fathoms<br>
<input name="u_feet_UK_US" id="u_feet_UK_US" tabindex="5" size="25"> feet (UK & US)<br>
<input name="u_feet_US_survey" id="u_feet_US_survey" tabindex="5" size="25"> feet (US survey)<br>
<input name="u_furlongs" id="u_furlongs" tabindex="5" size="25"> furlongs<br>
<input name="u_hands" id="u_hands" tabindex="5" size="25"> hands<br>
<input name="u_hectometers" id="u_hectometers" tabindex="5" size="25"> hectometers<br>
<input name="u_inches" id="u_inches" tabindex="5" size="25"> inches<br>
<input name="u_kilometers" id="u_kilometers" tabindex="5" size="25"> kilometers<br>
<input name="u_light_years" id="u_light_years" tabindex="5" size="25"> light years<br>
<input name="u_meters" id="u_meters" tabindex="5" size="25"> meters<br>
<input name="u_micrometers" id="u_micrometers" tabindex="5" size="25"> micrometers<br>
<input name="u_mil" id="u_mil" tabindex="5" size="25"> mil<br>
<input name="u_miles_UK_US" id="u_miles_UK_US" tabindex="5" size="25"> miles (UK & US)<br>
<input name="u_miles_nautical_international" id="u_miles_nautical_international" tabindex="5" size="25"> miles (nautical, international)<br>
<input name="u_miles_nautical_UK" id="u_miles_nautical_UK" tabindex="5" size="25"> miles (nautical, UK)<br>
<input name="u_millimeters" id="u_millimeters" tabindex="5" size="25"> millimeters<br>
<input name="u_nanometers" id="u_nanometers" tabindex="5" size="25"> nanometers<br>
<input name="u_parsecs" id="u_parsecs" tabindex="5" size="25"> parsecs<br>
<input name="u_picometers" id="u_picometers" tabindex="5" size="25"> picometers<br>
<input name="u_Scandinavian_mile" id="u_Scandinavian_mile" tabindex="5" size="25"> Scandinavian mile<br>
<input name="u_thou" id="u_thou" tabindex="5" size="25"> thou<br>
<input name="u_yards" id="u_yards" tabindex="5" size="25"> yards<br>
<p><input id="gen" class="genbtn" value="Convert" tabindex="4" type="submit"></p>
<div>