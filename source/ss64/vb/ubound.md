---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>UBound</h1> 
<p>Return the largest subscript for an array dimension.</p>
<pre>Syntax 
      UBound(<i>arrayname</i>[, <i>dimension</i>])


Key
   <i>arrayname</i>    The name of the array variable

   <i>dimension</i>    The array dimension as a whole number
                1 for the first dimension, 2 for the second etc
                (default=1)
</pre>
<p>The UBound function is used with the LBound Function to determine the size of an array. Use <a href="lbound.html">LBound</a> to find the lower limit of an array dimension. </p>
<p>Example</p>
<pre>Dim Arr(5,10,12)
result = UBound(Arr, 1)
WScript<a href="echo.html">.Echo</a> result
</pre>
<p class="quote"><i>“Who looks outside, dreams; who looks inside, awakes” - Carl Gustav Jung</i></p>
<p><b>Related:</b></p>
<p><a href="array.html">Array</a>(<i>el1,el2,el3</i>) - Add values to an Array variable<br>
<a href="dim.html">Dim</a> - Declare a new variable or array variable<br>
<a href="lbound.html">LBound</a> - Return the smallest subscript for an array.<br>
Equivalent in PowerShell: <span class="code">$arrDemo.getupperbound(0)</span> or <span class="code">$arrDemo.length-1</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ubound.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

