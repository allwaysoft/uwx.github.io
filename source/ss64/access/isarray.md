---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>IsArray</h1>
<p>  Return  TRUE if the expression is an array, otherwise return FALSE.</p>
<pre>Syntax
      IsArray(<i>expression</i>)

Key
   <i>expression</i>    A variable.</pre>
<p>The IsArray() function can be used in VBA.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim ArrMonths(1 To 12) as Integer<br>
</span><span class="code">Dim  boolCheck<br>
boolCheck = IsArray(ArrMonths)<br> 
</span>&nbsp;Returns <span class="code">True</span></p>
<p><span class="code">Dim ArrDays, boolCheck<br>
ArrDays = Array(1,2,3,4,5,6,7) <br>
boolCheck = IsArray(ArrDays)<br>
</span>&nbsp;Returns <span class="code">True</span></p>
<p class="quote">“Days of absence, sad and dreary, Clothed in sorrow's dark array, Days of absence, I am weary; She I love is far away” ~ William Shakespeare</p>
<p><b>Related:</b></p>
<p><a href="isnull.html">IsNull</a> - Is <i>expression</i> NULL? True/False </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="isarray.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

