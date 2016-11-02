---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>IsDate</h1>
<p>  Return  TRUE if the expression is a valid date, otherwise return FALSE.</p>
<pre>Syntax
      IsDate(<i>expression</i>)

Keyw
   <i>expression</i>    A numeric expression.</pre>
<p>The IsDate() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim boolTest as Boolean <br>
boolTest = IsDate(#1/3/2015#)<br> 
</span>Returns <span class="code">True<br>
boolTest = IsDate("January 14, 2014")<br>
</span>Returns <span class="code">True<br>
boolTest = IsDate("SS64")<br>
</span>Returns <span class="code">False </span></p>
<p class="quote"><i>“Superstition sets the whole world in flames; philosophy quenches them” ~ Voltaire </i></p>
<p><b>Related:</b></p>
<p><a href="isnull.html">IsNull</a> - Is <i>expression</i> NULL? True/False </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="isdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

