---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Round</h1> 
<p>Round a number to <i>n</i> decimal places.</p>
<pre>Syntax
       Round(<i>Expression</i> [, <i>NumDecimalPlaces</i> )])

Key
   <i>Expression</i>        A Numeric expression

   <i>NumDecimalPlaces</i>  Decimal places to keep
                     1=&gt; 12.1
                     3=&gt; 12.123   </pre>
<p>Example</p>
<pre>myNum=123.4567
myNewNum=Round(myNum,2)
WScript<a href="echo.html">.Echo</a> myNewNum</pre>
<p class="quote"><i>“One tequila, two tequila, three tequila, floor” ~ George Carlins</i></p>
<p><b>Related:</b></p>
<p> Int(<i>number</i>) - Return the integer portion of a number<br>
Equivalent in PowerShell: <span class="code">$result = [math]::round(123.4567, 2)</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="round.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

