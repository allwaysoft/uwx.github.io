---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Left</h1>
<p>  Extract a substring from a string, starting from the left-most character.</p>
<pre>Syntax
      Left(<i>string, NumberOfCharacters</i>)

Key
   <i>string</i>              A string or string <a href="stringexpression.html">expression</a>.

   <i>NumberOfCharacters  </i>The Number of characters to return</pre>
<p> The Left() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">Left()</span> will return a Variant, you can also use  <span class="code">Left$()</span> to return a String. <br>
You should use <span class="code">Left()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p>Use the LeftB function with byte data contained in a string. Instead of specifying the number of characters to return, length specifies the number of bytes.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = Left("The world is everlasting", 9 )<br>
Msgbox strDemo
<br>
</span>Returns <span class="code">"The world"</span></p>
<p class="quote"><i>“Begin at the beginning, the King said, very gravely, and go on till you come to the end: then stop” ~ Lewis Carroll</i></p>
<p><b>Related:</b></p>
<p><a href="mid.html">Mid</a> - Extract a substring from a string<br>
<a href="right.html">Right</a> - Extract a substring from a string</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

