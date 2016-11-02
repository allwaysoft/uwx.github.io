

<h1>HTML 5 Colour Mixer</h1>
<p>Type in a hex  code, or just click to select and mix:</p> 


<script>
// ==========================================================================      width: 6em;      border: 2px solid #fff;
//  JavaScript HTML Colour Code Averages
//  Copyright (C) 2011  SS64.com
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
//  A local copy of the GNU General Public License is available here:
//  http://ss64.com/docs/gpl-3.0.txt

function roundnumber(rnum) {
  var newnumber = Math.round(rnum*Math.pow(10,0))/Math.pow(10,0);
  return newnumber; 
}

function GetDec(Hex)
{
   if(Hex == "A")
      Value = 10;
   else
   if(Hex == "B")
      Value = 11;
   else
   if(Hex == "C")
      Value = 12;
   else
   if(Hex == "D")
      Value = 13;
   else
   if(Hex == "E")
      Value = 14;
   else
   if(Hex == "F")
      Value = 15;
   else
      Value = eval(Hex)
   return Value;
}
function GetHex(Dec)
{
   if(Dec == 10)
      Value = "A";
   else
   if(Dec == 11)
      Value = "B";
   else
   if(Dec == 12)
      Value = "C";
   else
   if(Dec == 13)
      Value = "D";
   else
   if(Dec == 14)
      Value = "E";
   else
   if(Dec == 15)
      Value = "F";
   else
      Value = "" + Dec;
   return Value;
}
function HexAverage()
{
var cr = document.getElementById('swatchResult');
//var sw1 = document.getElementById('HexIn');
//var sw2 = document.getElementById('HexIn2');

Input = window.document.forms['ColourForm'].elements['HexIn'].value;
document.getElementById('color1').value = Input
//sw1.style.background = Input
Input = Input.substring(1);

Input2 = window.document.forms['ColourForm'].elements['HexIn2'].value;
document.getElementById('color2').value = Input2
//sw2.style.background = Input2
Input2 = Input2.substring(1);

if (Input.charAt(0) == '#' || Input.length !=6) {
   Input = '000000';
}
if (Input2.charAt(0) == '#' || Input2.length !=6) {
   Input2 = '000000';
}

Input = Input.toUpperCase();
Input2 = Input2.toUpperCase();
a = GetDec(Input.substring(0, 1));
b = GetDec(Input.substring(1, 2));
c = GetDec(Input.substring(2, 3));
d = GetDec(Input.substring(3, 4));
e = GetDec(Input.substring(4, 5));
f = GetDec(Input.substring(5, 6));

a2 = GetDec(Input2.substring(0, 1));
b2 = GetDec(Input2.substring(1, 2));
c2 = GetDec(Input2.substring(2, 3));
d2 = GetDec(Input2.substring(3, 4));
e2 = GetDec(Input2.substring(4, 5));
f2 = GetDec(Input2.substring(5, 6));

x = (a * 16) + b;
y = (c * 16) + d;
z = (e * 16) + f;

x2 = (a2 * 16) + b2;
y2 = (c2 * 16) + d2;
z2 = (e2 * 16) + f2;

Red = roundnumber((x + x2)/2);
Green = roundnumber((y + y2)/2);
Blue = roundnumber((z + z2)/2);

a = GetHex(Math.floor(Red / 16));
b = GetHex(Red % 16);
c = GetHex(Math.floor(Green / 16));
d = GetHex(Green % 16);
e = GetHex(Math.floor(Blue / 16));
f = GetHex(Blue % 16);

z = '#' + a + b + c + d + e + f;

window.document.forms['ColourForm'].elements['HexOut'].value = z;
newcolour = '#' + z;
cr.style.background = z

//swatchcol1 = '#' + Input;
//sw1.style.background = swatchcol1

//swatchcol2 = '#' + Input2;
//sw2.style.background = swatchcol2
}
</script>
<form name="ColourForm"><table id="colour">
<!--  -->
<tbody>
<tr> 
<td><input name="color1" id="color1" class="colorwell" value="#d4c339" onchange="javascript:document.getElementById('HexIn').value = document.getElementById('color1').value;" type="color">
<input name="HexIn" type="text" id="HexIn" class="inputnum" value="#d4c339" onblur="HexAverage();" size="22" maxlength="7" spellcheck="false"></td>
<td>&nbsp;</td>
<td></td>
</tr>
<tr>
<td></td>
<td><input value="Mix »" onclick="HexAverage()" name="Button" type="button" class="buttons"></td>
<td><input name="HexOut" maxlength="7" size="22" type="text" class="result" id="swatchResult" spellcheck="false"></td></tr>
<tr> 
<td><input name="color2" id="color2" class="colorwell" value="#c5ebec" onchange="javascript:document.getElementById('HexIn2').value = document.getElementById('color2').value;" type="color">
<input name="HexIn2" type="text" id="HexIn2" class="inputnum" value="#c5ebec" onblur="HexAverage();" size="22" maxlength="7" spellcheck="false"></td>
<td>&nbsp;</td>
<td><div>&nbsp;</div></td></tr>
<tr>
<td><div id="swatch2">&nbsp;<br></div>  <br>
</td>
<td>&nbsp; </td><td>&nbsp;</td></tr>
</tbody></table></form>
<h2><br>
Convert RGB to Hex colour</h2>
<form>
<table>
<tbody><tr>

<td>&nbsp;
R:<input type="text" name="r" size="3" maxlength="3" value="55" class="rgb" onfocus="this.form.hex.value=''" onblur="strColour=rgbToHex(this.form.r.value,this.form.g.value,this.form.b.value);setBgColourById('RGBout',strColour);">
G:<input type="text" name="g" size="3" maxlength="3" value="125" class="rgb" onfocus="this.form.hex.value=''" onblur="strColour=rgbToHex(this.form.r.value,this.form.g.value,this.form.b.value);setBgColourById('RGBout',strColour);">
B:<input type="text" name="b" size="3" maxlength="3" value="255" class="rgb" onfocus="this.form.hex.value=''" onblur="strColour=rgbToHex(this.form.r.value,this.form.g.value,this.form.b.value);setBgColourById('RGBout',strColour);">
&nbsp;</td>

<td>&nbsp;
<input type="button" name="btn2" id="btn" class="buttons" value="Convert »" onclick="strColour=rgbToHex(this.form.r.value,this.form.g.value,this.form.b.value);this.form.hex.value='#'+strColour;setBgColourById('RGBout',strColour);">
&nbsp;<input name="hex" type="text" class="colorwell" id="RGBout" readonly="">
</td>

</tr>
</tbody></table>
</form>
<br>
<p class="quote"><i>“Speed kills colour... the gyroscope, when turning at full speed, shows up gray” ~ Paul Morand</i></p>
<p><b>Related:</b></p>
<p><a href="http://www.color-hex.com/">Color-hex</a> - Color informationt  including  models (RGB,HSL,HSV and CMYK) and analogous colors.<br>
<a href="http://www.colorhexa.com/">ColorHexa</a> - Information about any color and generate matching  palettes<br>
<a href="http://hex2rgba.devoth.com/">HEX to RGB</a> -  Calculator<br>
<a href="css/index.html">CSS commands</a><br>
<a href="http://www.colourlovers.com/">Colour Lovers</a> - Colour schemes<br>
<a href="https://kuler.adobe.com/create/color-wheel/">Kuler colour wheel</a><br>
<a href="http://color.hailpixel.com/">Color.hailpixel</a><br>
<a href="http://www.perbang.dk/rgbgradient/">Gradients</a> - 
Perbang.dk<br>
<a href="http://colorschemedesigner.com/">Color Scheme Designer </a> - Design color themes<br>
<a href="http://xkcd.com/color/rgb/">XKCD colour popularity</a><!-- #BeginLibraryItem "/Library/foot_root.lbi" --></p><p>
<hr>
<div id="bl" class="footer"><a href="colour.html#"><img src="images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem --><p></p>

