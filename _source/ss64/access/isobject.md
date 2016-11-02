---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>IsObject</h1>
<p>  Return  TRUE if the identifier represents an object variable, otherwise returns FALSE.</p>
<pre>Syntax
      IsObject(<i>identifier</i>)

Key
   <i>identifier</i>    The name of a variable.</pre>
<p>This function only tests the datatype of a variable, it will still return TRUE if the variable has been set to nothing. </p>
<p>The IsObject() function can be used in VBA.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim myvariant, myCheck<br>
Dim objDemo as Object
<br> 
Set 
myvariant = objDemo<br>
myCheck = IsObject(myvariant)
</span><span class="code"></span></p>
<p class="quote">“Yellow-colored objects appear to be gold” ~ Aristotle</p>
<p><b>Related:</b></p>
<p><a href="isnull.html">IsNull</a> - Is <i>expression</i> NULL? True/False<br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

