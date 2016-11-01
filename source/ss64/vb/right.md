---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Right</h1> 
<p> Extract a substring from a string, starting from the right-most character.</p>
<pre>Syntax
      Right(<i>string, NumberOfCharacters</i>)

Key
   <i>string</i>              A string or string <a href="stringexpression.html">expression</a>.

   <i>NumberOfCharacters  </i>The Number of characters to return</pre>
<p> <b>Examples</b></p>
<p><span class="code">Dim strDemo<br>
strDemo = Right("The world is everlasting", 11 )<br>
Msgbox strDemo <br>
</span>Returns: <span class="code">"everlasting"</span></p>
<p>A function to pad out a value with leading zeros:</p>
<pre>Function LPad(strValue, intLength)
  LPad = Right("00" &amp; strValue, intLength)
End Function</pre>
<pre>mydemo=LPad(4 2)<br>wscript.echo mydemo
<span class="body">Returns:</span> 04</pre>
<p class="quote"><i>“Begin at the beginning, the King said, very gravely, and go on till you come to the end: then stop” ~ Lewis Carroll</i></p>
<p><b>Related:</b></p>
<p><a href="left.html">Left</a> - Extract a substring from a string<br>
<a href="mid.html">Mid</a> - Extract a substring from a string</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="right.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
