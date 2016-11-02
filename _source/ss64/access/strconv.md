---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>StrConv</h1>
<p>  Return a string converted to Upper/lower case or Unicode.</p>
<pre>Syntax
      StrConv(<i>String</i>, <i>conversion</i> [, <i><a href="../locale.html">LCID</a></i>])

Key
  <i>String</i>     The string to convert.

  <i>conversion</i> The type of conversion to perform.

  <i>LCID</i>       The <a href="../locale.html">Locale</a></pre>
<p>Valid parameters for <i>conversion</i>:</p>
<table border="1" cellpadding="4" cellspacing="0" width="550">
<tbody><tr>
<th width="92">Parameter</th>
<th width="32">Value</th>
<th>Description</th>
</tr>
<tr>
<td>vbUpperCase</td>
<td>1</td>
<td>Convert the string to all uppercase.</td>
</tr>
<tr>
<td>vbLowerCase</td>
<td>2</td>
<td>Convert the string to all lowercase.</td>
</tr>
<tr>
<td>vbProperCase</td>
<td>3</td>
<td>Convert the first letter to every word to uppercase. All other characters are left as lowercase.</td>
</tr>
<tr>
<td>vbUnicode</td>
<td>64</td>
<td>Convert the string to Unicode.</td>
</tr>
<tr>
<td>vbFromUnicode</td>
<td>128</td>
<td>Convert the string from Unicode to the default code page of the system.</td>
</tr>
</tbody></table>
<p>The StrConv() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.The vb constants are only valid in VBA code, to use strconv() in a query use the numeric value. In far east locales StrComp supports additional constants for converting Hiragana and Katana characters. </p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = StrConv("the universe is everlasting", vbProperCase)<br>
MsgBox 
strDemo<br>
</span>'Returns: <span class="code">"The Universe Is Everlasting"</span></p>
<p class="quote"><i>“Where there is shouting, there is no true knowledge” ~ Leonardo da Vinci</i></p>
<p><b>Related:</b></p>
<p><a href="cstr.html">CStr</a> - Convert to String<br>
<a href="http://support.microsoft.com/kb/298607">Q298607</a> - How to use the StrConv function</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

