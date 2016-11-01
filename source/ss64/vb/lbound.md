---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>LBound</h1> 
<p>Return the smallest available subscript for an array dimension.</p>
<pre>Syntax 
      LBound(<i>arrayname</i>[, <i>dimension</i>])

Key
   <i>arrayname</i>    The name of the array variable

   <i>dimension</i>    The array dimension as a whole number
                1 for the first dimension, 2 for the second etc
                (default=1)
</pre>
<p>The LBound function is used with the UBound Function to determine the size of an array. Use <a href="ubound.html">UBound</a>  to find the upper limit of an array dimension. The default lower bound for any dimension is always 0.</p>
<p>Example</p>
<pre>Dim Arr(5,10,12)
result = LBound(Arr, 1)
WScript<a href="echo.html">.Echo</a> result
</pre>
<p class="quote"><i>“Who looks outside, dreams; who looks inside, awakes” - Carl Gustav Jung</i></p>
<p><b>Related:</b></p>
<p><a href="array.html">Array</a>(<i>el1,el2,el3</i>) - Add values to an Array variable<br>
<a href="dim.html">Dim</a> - Declare a new variable or array variable<br>
<a href="ubound.html">UBound</a> - Return the largest subscript for an array dimension<br>
Equivalent in PowerShell: <span class="code">$arrDemo.getupperbound(0)</span> or <span class="code">$arrDemo.length-1</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lbound.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

