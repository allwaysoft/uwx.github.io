---
title: Hex color to RGB color (and back)
---

<style type="text/css">
.boxr {
  margin: 1.714285714rem auto 1.714285714rem auto;
  /*width: 5em;*/
  border: 3px solid green;
  padding: 10px;
  background-color: #fff;
  border: 1px solid rgb(162, 230, 247);
  border-radius: 3px;

  line-height: 0.7em;
  width: 8em;
  width: -moz-fit-content;
  text-align: center;
}
</style>
<script type="text/javascript">
  /*
  ** Returns the caret (cursor) position of the specified text field.
  ** Return value range is 0-oField.value.length.
  */
  function getCaretPosition(oField) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

      // Set focus on the element
      if (oField.focus)
        oField.focus();

      // To get cursor position, get empty selection range
      var oSel = document.selection.createRange();

      // Move selection start to 0 position
      oSel.moveStart('character', -oField.value.length);

      // The caret position is selection length
      iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart === '0' || oField.selectionStart === 0)
      iCaretPos = oField.selectionStart;

    // Return results
    return iCaretPos;
  }

  function setCaretPosition(elem, caretPos) {

      if(elem != null) {
          if(elem.createTextRange) {
              var range = elem.createTextRange();
              range.move('character', caretPos);
              range.select();
          } else {
              if(elem.selectionStart) {
                  if (elem.focus)
                    elem.focus();
                  elem.setSelectionRange(caretPos, caretPos);
              } else if (elem.focus) {
                elem.focus();
              }
          }
      }
  }

  function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  }

  window.onload = function() {
    var $id = document.getElementById.bind(document);

    var hex = $id('hex');
    var rgb = $id('rgb');
    var boxr = $id('boxr');

    var hex2 = $id('hex2'); // lite mode
    var rgb2 = $id('rgb2'); // lite mode
    var boxr2 = $id('boxr2');

    hex.onkeypress = function(e) {
      setTimeout(function() { // setTimeout with 0 so we get the up-to-date field value
        console.log('typed');
        var caretPos = getCaretPosition(rgb);

        if (hex.value[0] != '#') { // RRGGBB without #
          hex.value = '#' + hex.value;
          setCaretPosition(rgb, caretPos+1);
        }
        var fakeVal = hex.value;
        if (hex.value.length == 4) { // #RGB
          fakeVal = '#' + fakeVal[1] + fakeVal[1] + fakeVal[2] + fakeVal[2] + fakeVal[3] + fakeVal[3];
        }
        rgb.value = hexToRgb(fakeVal);
        boxr.style.backgroundColor = fakeVal;
      }, 0);
    }

    rgb.onkeypress = function(e) {
      setTimeout(function() { // setTimeout with 0 so we get the up-to-date field value
        console.log('typed');
        var caretPos = getCaretPosition(rgb);

        if (rgb.value.startsWith('rgb')) { // rgb(r,g,b)
          rgb.value = rgb.value.substring(3);

          caretPos -= 3;
          if (caretPos < 0) caretPos = 0;
          setCaretPosition(rgb, caretPos);
        }
        if (rgb.value[0] == '(') { // (r,g,b
          rgb.value = rgb.value.substring(1);

          caretPos -= 1;
          if (caretPos < 0) caretPos = 0;
          setCaretPosition(rgb, caretPos);
        }
        var len = rgb.value.length-1;
        if (rgb.value[len] == ')') { // r,g,b)
          rgb.value = rgb.value.substring(0, len);
        }
        var indexs = rgb.value.indexOf(',');
        if (rgb.value.length !== 0 && indexs === -1) { // RRRGGGBBB
          rgb.value = rgb.value.match(/.{1,3}/g).join(',');
        }
        console.log('apply ' + rgb.value.split(','));
        hex.value = rgbToHex.apply(null, rgb.value.split(','));
        boxr.style.backgroundColor = hex.value;
      }, 0);
    }

    hex2.onkeypress = function(e) {
      setTimeout(function() { // setTimeout with 0 so we get the up-to-date field value
        console.log('typed');
        var value = hex2.value;

        if (value[0] != '#') { // RRGGBB without #
          value = '#' + value;
        }
        if (value.length == 4) { // #RGB
          value = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
        }
        rgb2.value = hexToRgb(value);
        boxr2.style.backgroundColor = value;
      }, 0);
    }

    rgb2.onkeypress = function(e) {
      setTimeout(function() { // setTimeout with 0 so we get the up-to-date field value
        console.log('typed');
        var value = rgb2.value;

        if (value.startsWith('rgb')) { // rgb(r,g,b)
          value = value.substring(3);
        }
        if (value[0] == '(') { // (r,g,b
          value = value.substring(1);
        }
        var len = value.length-1;
        if (value[len] == ')') { // r,g,b)
          value = value.substring(0, len);
        }
        var indexs = value.indexOf(',');
        if (value.length !== 0 && indexs === -1) { // RRRGGGBBB
          value = value.match(/.{1,3}/g).join(',');
        }
        console.log('apply ' + value.split(','));
        hex2.value = rgbToHex.apply(null, value.split(','));
        boxr2.style.backgroundColor = hex2.value;
      }, 0);
    }
  };
</script>

<input name="hex" id="hex" tabindex="5" size="40"><br>
<div id="boxr" class="boxr"><span style="color:#000;">Preview</span> <span style="color:#eee;">Preview</span></div>
<input name="rgb" id="rgb" tabindex="5" size="40">

<h1 style="font-weight: normal;">Lite mode: does not change your input.</h1>

<input name="hex2" id="hex2" tabindex="5" size="40"><br>
<div id="boxr2" class="boxr"><span style="color:#000;">Preview</span> <span style="color:#eee;">Preview</span></div>
<input name="rgb2" id="rgb2" tabindex="5" size="40">
