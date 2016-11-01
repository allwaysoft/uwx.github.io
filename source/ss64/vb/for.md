---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>For ... Next Loop</h1> 
<p>Repeat a block of statements a given number of times.</p>
<pre>Syntax 
      For <i>counter</i> = <i>initial_value</i> To <i>Max_value</i> [Step <i>stepCounter</i>]
         [<i>Statements</i>]
         [<a href="exit.html">Exit</a> For]
      Next [<i>counter</i>]

Key
   <i>counter</i>     A numeric variable<span class="code"></span>

   <i>initial_value</i> A numeric expression for the starting value

   <i>Max_value</i>   A numeric expression for the maximum value

   <i>stepCounter</i> A numeric expression for the increment of <i>counter</i></pre>
<p>The counter may be either incremented or decremented with a positive or negative value for <i>stepCounter</i>.</p>
<p>Example</p>
<pre>  For i = 1 to 20
     WScript<a href="echo.html">.Echo</a> i
  Next
</pre>
<p class="quote"><i>“Profit in business comes from repeat customers, customers that boast about your project or service, and that bring friends with them” ~ W. Edwards Deming</i></p>
<p><b>Related:</b></p>
<p>  <a href="do.html">Do..Loop</a> - Repeat a block of statements<br>
<a href="foreach.html">For Each...</a> - Loop through the items in a collection or array<br>
Equivalent PowerShell cmdlet: <a href="../ps/for.html">For</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="for.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

