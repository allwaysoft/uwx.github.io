'use strict';
/*jshint node:true*/

const hrender = require('./hrenderer.js');

module.exports = function (data, options) { // TODO: possibly add 2 empty lines after each spoiler content start and end so markdown-it handles it properly
  data.text = data.text.replace(/::: ([\s\S]*?)(\r\n|\n)([\s\S]*?):::/g, function(match, spoiler_ticker, $2, spoiler_content) {
    console.log('its replacin alright');
    return `<div class="spoiler-parent"><dt class="spoiler-text"><strong>` + spoiler_ticker + `</strong><a href="javascript:void(0);" class="spoiler-toggle">Show</a></dt><dd><div class="spoiler-content" name="spoiler" style="display: none;">` + spoiler_content + `</div></dd></div>`;
  }).replace(/:::([\s\S]*?):::/g, function(match, spoiler_content) {
    console.log('its replacin alright');
    return `<div class="spoiler-parent"><dt class="spoiler-text"><strong>Spoiler: </strong><a href="javascript:void(0);" class="spoiler-toggle">Show</a></dt><dd><div class="spoiler-content" name="spoiler" style="display: none;">` + spoiler_content + `</div></dd></div>`;
  });

  return hrender.call(this, data, options).replace(/`(.*?)`/gm, '<code>$1</code>'); // markdown-it render + a little bug fix
};
