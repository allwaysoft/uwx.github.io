---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Log</h1>
<p> Returns the natural logarithm of a number. </p>
<pre>Syntax
      Log (<i>Number</i>)

Key
   <i>number</i>   Any valid numeric expression greater than 0.</pre>
<p>The Log() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p>The natural logarithm is the logarithm to the base e. The constant e is approximately 2.718282.</p>
<p>Calculate base-n logarithms for any number x by dividing the natural logarithm of x by the natural logarithm of <i>n</i> as follows:</p>
<p class="code">Log<i>n</i>(x) = Log(x) / Log(<i>n</i>)</p>
<p>A custom Function to calculate base-10 logarithms:</p>
<p class="code">Function Log10(X)<br>
&nbsp;Log10 = Log(X) / Log(10)<br>
End Function</p>
<p class="quote"><i>“Gold is the money of kings; silver is the money of gentlemen; barter is the money of peasants; but debt is the money of slaves” ~ Norm Franz </i></p>
<p><b>Related:</b></p>
<p><a href="exp.html">Exp</a>(<i>n</i>) - Return e (base of natural logs) raised to a power <i>n</i>.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="log.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

