---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>IsNull</h1>
<p>  Return  TRUE if the expression is <a href="syntax-null.html">NULL</a>, otherwise return FALSE.</p>
<pre>Syntax
      IsNull(<i>expression</i>)

Key
   <i>expression</i>    A string or numeric expression.</pre>
<p>The IsNull() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p>MS Access makes a distinction between an empty string "" and a NULL value. If you type something into a field and then delete it, you will be left with a zero length string, in contrast if nothing has ever been entered into a field it will be NULL. IsNull() will only detect NULLs. </p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="isnull.png" width="439" height="104" alt="IsNull"></p>
<p>In SQL queries  it is also useful to use the SQL <span class="code">IS</span> operator with <span class="code">Null</span> to find Null values:</p>
<p><img src="null.png" width="248" height="106" alt="Is NULL"></p>
</blockquote>
<p>In VBA:</p>
<p><span class="code">Dim boolDemo as Boolean<br>
boolDemo = <b>IsNull(</b>Me!txtDescription<b>)</b><br>

If boolDemo = True Then Msgbox "A required value is missing!"</span></p>
<p class="quote"><i>“Art is the elimination of the unnecessary” ~ Pablo Picasso</i></p>
<p><b>Related:</b></p>
<p><a href="nz.html">Nz</a> - Detect a NULL or   a Zero Length string.<br>
<a href="isempty.html">IsEmpty</a> - Test if an expression is Empty (unassigned).</p>
<!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="isnull.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

