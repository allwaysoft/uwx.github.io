

<h1>Convert Bits and Bytes</h1>
<div>  <blockquote>
<form action="convert.html#">
<table id="example">
<tbody><tr> 
<td class="tblhead">Bytes</td>
<td class="tblhead">KiB</td>
<td class="tblhead">MiB</td>
<td class="tblhead"> GiB</td>
<td class="tblhead"> TiB</td>
<td>&nbsp;</td>
</tr>
<tr> 
<td><input type="text" size="20" name="byte" value="1073741824" tabindex="10" onblur="return convert1(this.form)"></td>
<td><input type="text" size="20" name="kib" value="1048576" tabindex="9" onblur="return convertkib(this.form)"></td>
<td><input type="text" size="10" name="mib" value="1024" tabindex="8" onblur="return convertmib(this.form)"></td>
<td><input type="text" size="10" name="gib" value="1" tabindex="7" onblur="return convertgib(this.form)"></td>
<td><input type="text" size="10" name="tib" value="0.00098" tabindex="6" onblur="return converttib(this.form)"></td>
<td><input type="button" name="B2" value="Convert"></td>
</tr>
<tr> 
<td class="tblhead">Bytes</td>
<td class="tblhead">KB</td>
<td class="tblhead">MB</td>
<td class="tblhead"> GB</td>
<td class="tblhead"> TB</td>
<td>&nbsp;</td>
</tr><tr> 
<td><input type="text" size="20" name="byte2" value="1073741824" tabindex="5" onblur="return convert2(this.form)"></td>
<td><input type="text" size="20" name="kb" value="1073741.824" tabindex="4" onblur="return convertkb(this.form)"></td>
<td><input type="text" size="10" name="mb" value="1073.74182" tabindex="3" onblur="return convertmb(this.form)"></td>
<td><input type="text" size="10" name="gb" value="1.07374" tabindex="2" onblur="return convertgb(this.form)"></td>
<td><input type="text" size="10" name="tb" value="0.00107" tabindex="1" onblur="return converttb(this.form)"></td>
<td><input type="button" name="B2" value="Convert"></td>
</tr>
</tbody></table>
</form></blockquote></div>
<blockquote>
<p class="notes">Computer storage disks and RAM are manufactured in <a href="https://www.youtube.com/watch?v=b6vHZ95XDwU">binary units</a> (<a href="http://en.wikipedia.org/wiki/Power_of_two">power of 2</a>) Bytes, KiB, MiB …<br>
The <a href="http://en.wikipedia.org/wiki/Binary_prefix">binary prefix</a> convention allows common numbers such as 2048 bytes to display as round numbers, so 2 <a href="docs/bytes.html">KiB</a><br><br>
Power of <a href="http://en.wikipedia.org/wiki/Power_of_10">10</a> numbers are also calculated above (KB, MB…) these are used by <a href="http://support.apple.com/kb/TS2419">Apple</a> and some hard drive manufacturers.<br>
</p>
<p class="notes">Many documents still refer to byte measues with the old-style prefixes: <span class="code"> KB,MB,GB…</span> <br>  
These are case sensitive and easily confused with bits: <span class="code"> Kb,Mb,Gb…<br>
&nbsp;&nbsp;1 Byte = 8 bits</span><br>
  <b>Bytes</b> are used to measure disc/file sizes.<br>
<b>bits</b> are used to measure network or download speeds.</p>
<p class="notes"><i>Typical throughputs:</i><br>
Hard disk = 30 MiB per second. (x8 = 240 Mb/Sec) <br>
Gigabit Ethernet = 125 MiB per second. (x8 = 1,000 Mb/Sec) <br>
Solid state disc = 250 MiB per second. (x8 = 2,000 Mb/Sec) <br>
Fibre Channel = 2,550 MiB per second. (x8 = 20,400 Mb/Sec) <br>
</p>
</blockquote>

<h1>Convert Hex to Decimal</h1>
<blockquote>
<p>Type any hex or decimal number:</p>
<input type="text" size="40" id="in" onkeyup="convert()" value="12345678909876543">
<p id="result"></p>
</blockquote>

<script type="text/javascript">
function str_or_null(x) {
   return x === null ? 'null' : x;
}

// "1.234e+5" -> "12340"
function expandExponential(x) {
var pos = x.indexOf("e");
 if (pos === -1) pos = x.indexOf("E");
 if (pos === -1) return x;

 var base = x.substring(0, pos);
 var pow = parseInt(x.substring(pos + 1), 10);
 if (pow < 0) return x;  // not supported.

 var dotPos = base.indexOf('.');
 if (dotPos === -1) dotPos = base.length;

  var ret = base.replace('.', '');
  while (ret.length < dotPos + pow) ret += '0';
  return ret;
}

function boldDifference(correct, actual) {
 for (var i = 0, j = 0; i < correct.length && j < actual.length; i++, j++) {
 if (correct[i] !== actual[j]) {
 break;
  }
  }
if (j < actual.length) {
  return actual.substring(0, j) + '<b>' + actual.substring(j) + '</b>';
} else {
 return actual;
}
}

function convert() {
 var input = document.getElementById("in").value;
if (input) {
  var aHex = str_or_null(decToHex(input));
  var aDec = str_or_null(hexToDec(input));
  var bHex = '0x' + (parseInt(input, 10)).toString(16);
  var bDec = "" + expandExponential("" +parseInt(input, 16));

  var html = '<code><p>hexToDec(' + input + ') = ' + aDec + '</p>';
 html += '<p>decToHex(' + input + ') = ' + aHex + '</p></code>';

  document.getElementById('result').innerHTML = html;
  }
}
convert();

function viewSource() {
  window.location = 'view-source:' + window.location.href;
}
</script>

<p class="quote">“Kilted Men Given Testosterone Perform Exceedingly Zealous Yoga - Mnemonic for Kilo, Mega, Giga, Tera, Peta, Exa, Zeta, Yotta” ~ David Wu</p>
<p><b>Related:</b></p>
<p><a href="ascii.html">ASCII Table</a><br>
<a href="nt/certutil.html">CERTUTIL</a> - Convert to Base64<br>
<a href="http://encodertool.com/binary">EncoderTool.com</a> - Encode Strings<br>
</p><!-- #BeginLibraryItem "/Library/foot_root.lbi" --><p>
<hr>
<div id="bl" class="footer"><a href="convert.html#"><img src="images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

