// common hansen funcs used across tool files
'use strict';
/* jshint browser:true */
/* exported makeFunc */
/* globals console, myCodeMirror */

function makeFunc(action, errorText) {
  return function() {
    try {
      myCodeMirror.setValue(action(myCodeMirror.getValue()));
    } catch (err) {
      outputText(errorText + err);

      console.trace(err);
    }
  };
}

function makeVisible(el) {
  el.style.display = '';
}

//  function toggleSelector(selector) {
//    toggleElement(document.querySelector(selector));
//  }

function outputText(str) {
  var lintOutput = document.querySelector('#lint-output');
  makeVisible(lintOutput);
  lintOutput.innerHTML = str.replace(/\n/g, '<br>');
}