---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>IsNumeric</h1>
<p>  Return  TRUE  if the expression is a valid number, otherwise return FALSE.</p>
<pre>Syntax
      IsNumeric(<i>expression</i>)

Key
   <i>expression</i>    A string or numeric expression.</pre>
<p>The IsNumeric() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim boolDemo as Boolean<br>
boolDemo = IsNumeric(123.45)<br>
</span>Returns <span class="code">True<br>
boolDemo = IsNumeric("123.45")<br>
</span>Returns <span class="code">True<br>
boolDemo = IsNumeric("SS64")<br>
</span>Returns <span class="code">False</span></p>
<p class="quote"><i>“Art is the elimination of the unnecessary” ~ Pablo Picasso</i></p>
<p><b>Related:</b></p>
<p><a href="nz.html">Nz</a> - Detect a NULL value or Zero Length String.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="isnumeric.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

