// common hansen funcs used across tool files
/* jshint browser:true */
/* exported makeFunc */
/* globals console, myCodeMirror */

//Finds y value of given object
function hFindPos(obj) {
  'use strict';
  var curtop = 0;
  if (obj.offsetParent) {
    do {
        curtop += obj.offsetTop;
    } while (obj = obj.offsetParent); // jshint ignore:line
  }
  return curtop;
}

function makeFunc(action, errorText) {
  'use strict';
  return function() {
    try {
      var act = action(myCodeMirror.getValue());
      if (act === null || act === undefined) throw new Error('result is null or undefined'); // just in case
      if (typeof act != 'string') act = act.toString(); // if return value is number or whatever
      myCodeMirror.setValue(act);
    } catch (err) {
      outputText(errorText + err);
      console.error(err);
      console.trace(err);
    }
  };
}

function makeVisible(el) {
  'use strict';
  el.style.display = '';
}

//  function toggleSelector(selector) {
//    toggleElement(document.querySelector(selector));
//  }

function outputText(str) {
  'use strict';
  var lintOutput = document.querySelector('#lint-output');
  makeVisible(lintOutput);
  if (str.trim()) { // length > 0
    lintOutput.innerHTML = str.replace(/\n/g, '<br>');
  } else {
    lintOutput.innerHTML = 'No result or error. Have you tried turning it off and on again?';
  }
  if (lintOutput.scrollIntoView) lintOutput.scrollIntoView();
  else window.scroll(0, hFindPos(lintOutput));
}