---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>InStrRev</h1> 
<p>Return the position of the first occurrence of one string within another, from the end of string.</p>
<pre>Syntax 
      InStrRev(<i>string1</i>, <i>string2</i> [,<i>start</i>][, <i>compare</i>])

Key
   <i>string1</i>        The initial string of Text
   <i>string2</i>        The text we want to find in <i>String1</i>
<i>   Start</i>          Character position in <i>string1 </i>at which to start the search
   <i>Compare</i>        Either vbBinaryCompare or VBTextCompare</pre>
<p>Example</p>
<pre>result = InStrRev("A B A B", "A", 6)
WScript<a href="echo.html">.Echo</a> result
</pre>
<p class="quote"><i>“Who looks outside, dreams; who looks inside, awakes” ~ Carl Gustav Jung</i></p>
<p><b>Related:</b></p>
<p><a href="instr.html">InStr</a> - Find one string within another<br>
<a href="replace.html">Replace</a> - Find and replace text<br>
Equivalent in PowerShell: <span class="code"></span> <span class="code">$result = $myvar.lastindexofany("A")</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="instrrev.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

