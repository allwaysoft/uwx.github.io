---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Hex</h1>
<p>Return the hex value of a <i>number</i>.</p>
<pre>Syntax
      Hex (<i>number</i>)

Key
   <i>number</i>   The number to convert to hex.</pre>
<p>If number is not already a whole number, it is rounded to the nearest whole number before being evaluated.</p>
<p>If <i>number</i> is Null, Hex() returns Null.<br>
If <i>number</i> is Empty, Hex() returns Zero (0).<br>
If <i>number</i> is any other number, Hex() returns up to eight hexadecimal characters.</p>
<p>You can represent hexadecimal numbers directly by preceding numbers in the proper range with &amp;H. For example, &amp;H10 represents decimal 16 in hexadecimal notation.</p>
<p>The Hex() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<blockquote>
<p><img src="hex.png" width="239" height="111" alt="hex"></p>
</blockquote>
<p>Examples</p>
<p class="code"> Dim MyHex<br>
MyHex = Hex(5) ' Returns 5.<br>
MyHex = Hex(10) ' Returns A.<br>
MyHex = Hex(459) ' Returns 1CB.</p>
<p class="quote"><i>“The most important thing in an argument, next to being right, is to leave an escape hatch for your opponent, so that he can gracefully swing over to your side without too much apparent loss of face” ~ Sydney J. Harris</i></p>
<p><b>Related:</b></p>
<p><a href="int.html">Int</a> - Return the integer portion of a number</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="hex.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

