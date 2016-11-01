---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>IsArray</h1> 
<p> Returns a Boolean value indicating whether a variable is an array. </p>
<pre>Syntax
      IsArray(<i>Variable_Name</i>)

Key
   <i>Variable_Name</i>    Any variable.</pre>
<p>IsArray returns True if the variable is an array; otherwise, it returns False. IsArray is especially useful with variants containing arrays.</p>
<p><b>Examples</b></p>
<p>Test whether MyVariable is an array:</p>
<p class="code">Dim MyVariable<br>
Dim MyArray(3)</p>
<p><span class="code">MyArray(0) = "Sunday"<br>
MyArray(1) = "Monday"<br>
MyArray(2) = "Tuesday"<br>
MyVariable = IsArray(MyArray) </span>' MyVariable contains "True".</p>
<p class="quote"><i>“The trouble with Buddhism ?-- in order to free oneself of all desire, one has to desire to do so” ~ Henry Miller </i></p>
<p><b>Related:</b></p>
<p><a href="isnumeric.html">IsNumeric</a> -  Is <i>expression</i> a Numeric?</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

