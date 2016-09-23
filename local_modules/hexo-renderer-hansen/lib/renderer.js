'use strict';
/*jshint node:true*/
module.exports = function (data, options) {
  return data.text.replace(/:::( (\w+)(\r\n|\n))?(.*?):::/g, function(match, $1, spoiler_ticker, $3, spoiler_content) {
    return `<div class="spoiler-parent"><dt class="spoiler-text"><strong>` + (spoiler_ticker || 'Spoiler:') + `</strong><a href="javascript:void(0);" class="spoiler-toggle">Show</a></dt><dd><div class="spoiler-content" name="spoiler" style="display: none;">` + spoiler_content + `</div></dd></div>`;
  });
};
