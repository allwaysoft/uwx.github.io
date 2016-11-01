---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>While ... WEnd </h1> 
<p>Repeat a block of statements.</p>
<pre>Syntax 
      While <i>condition</i> 
         [<i>Statements</i>]
      WEnd

Key
   <i>condition </i>  An expression that evaluates to True or False<span class="code"></span>

   <i>Statements</i>  Program code to be executed if <i>condition</i> is True</pre>
<p>Example</p>
<pre>While second(Time()) &gt; 30 
   WScript<a href="echo.html">.Echo</a> "This line will repeat for 30 seconds"
Wend</pre>
<p class="quote"><i>“Don’t ask what the world needs. Ask what makes you come alive, and go do it. Because what the world needs is people who have come alive” ~ Howard Thurman</i></p>
<p><b>Related:</b></p>
<p><a href="if.html">If..Then</a> - Conditionally execute a block of statements<br>
<a href="select.html">Select...Case</a> - Conditional execution of a block of code<br>
<a href="do.html">Do..Loop</a> - Repeat a block of statements<br>
Equivalent PowerShell cmdlet: <a href="../ps/while.html">While</a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="while.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

