---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>InStr</h1> 
<p>Return the position of the first occurrence of one string within another.</p>
<pre>Syntax 
      InStr([<i>start</i>, ]<i>string1</i>, <i>string2</i>[, <i>compare</i>])

Key
   <i>string1</i>        The initial string of Text
   <i>string2</i>        The text we want to find in <i>String1</i>
   <i>Start</i>          Character position in <i>string1 </i>at which to start the search
   <i>Compare</i>        Either vbBinaryCompare or VBTextCompare</pre>
<p>Example</p>
<pre>result = InStr("Hello World", "wor")
WScript<a href="echo.html">.Echo</a> result
</pre>
<p class="quote"><i>“Who looks outside, dreams; who looks inside, awakes” ~ Carl Gustav Jung</i></p>
<p><b>Related:</b></p>
<p><a href="instrrev.html">InStrRev</a> - Find one string within another, starting from the end<br>
<a href="replace.html">Replace</a> - Find and replace text<br>
Equivalent in PowerShell: <span class="code">$result = $myvar.indexof("demo")</span> Also <span class="code">.contains("demo")</span> returns True/False </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="instr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

