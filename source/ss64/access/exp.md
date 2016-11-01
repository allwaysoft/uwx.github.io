---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Exp</h1>
<p>Exponential e raised to the <i>n</i>th power.</p>
<pre>Syntax
      Exp (<i>number</i>)

Key
   <i>number</i>   The power to raise e to.</pre>
<p><br>
The Exp() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p>To raise a number <i>N</i> to any power <i>P,</i> use the operator ^, so <span class="code"><i>N</i>^<i>P</i></span></p>
<blockquote>
<p><img src="exp.png" width="379" height="111" alt="exp"></p>
</blockquote>
<p><b>Example</b></p>
<p> Calculate <i>continually</i> compounding interest on $500 at 10% for 5 years:</p>
<p class="code">Dim dblDemo As Double<br>
dblDemo = 500 Exp(0.1*5)</p>
<p>In practice most accounts pay interest yearly or monthly rather than continually.<br>
So $500 at 10% for 5 years would be:</p>
<p><span class="code">Dim dblDemo As Double<br>
dblDemo = 500 * 1.1^5</span></p>
<p class="quote"><i>“The most important thing in an argument, next to being right, is to leave an escape hatch for your opponent, so that he can gracefully swing over to your side without too much apparent loss of face” ~ Sydney J. Harris</i></p>
<p><b>Related:</b></p>
<p><a href="log.html">Log</a> - Return the natural logarithm of a number.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="exp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

