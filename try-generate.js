'use strict';
/*globals require, global, console*/
/*exported require, global, console*/

const fs = require('fs-extra');
if (!fs.existsSync('_generated')) {
  global.keepOutput = true;
  require('./alt-generator.js');
} else {
  fs.copySync('_generated', 'public');
}