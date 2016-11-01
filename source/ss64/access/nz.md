---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Nz</h1>
<p>  Detect a NULL  value or a Zero Length string. Convert NULLs to a Zero-length string, or another value.</p>
<pre>Syntax
      Nz(<i>expression</i>, [ <i>valueifnull</i> ])

Key
   valueifnull    A value to return if <i>expression</i> is NULL.

                  If <i>value_if_null</i> is not specified and the 
                  <i>expression</i> = NULL the default value
                  returned will be a zero-length string.</pre>
<p>The Nz() function can be used in VBA or in an <a href="syntax-functions.html">SQL query.</a></p>
<p>MS Access makes a distinction between an empty string "" and a <a href="syntax-null.html">NULL</a> value. If you type something into a field and then delete it, you will be left with a zero length string, in contrast if nothing has ever been entered into a field it will be NULL.<br>
<span class="code">Nz()</span> will detect either of these. </p>
<p>The <i>value_if_null</i> can be set to return any string or number. If Nz() is returning <span class="code">#Error</span> this is most often due to   returning a Data Type thats incompatible with your variable's Data Type.</p>
<p>Nz() will not flag an Empty variable which has not yet been initialized.</p>
<h2>Default</h2>
<blockquote>
<p>If the value of the variant argument is <a href="syntax-null.html">NULL</a>, the Nz function returns the number zero or a zero-length string (always  a zero-length string when used in a query expression), depending on whether the context indicates the value should be a number or a string.</p>
<p>This is not always what you want, for example in a sales database, you may have some items that are free samples with a price of $0, so for a brand new item where the cost is not yet known you wouldn't want a default of $0 in such cases something like <span class="code">Nz(Me!item_price,"N/A")</span> would be more sensible.<br>
</p>
</blockquote>
<p>The Nz function is very useful for trapping errors caused by <a href="syntax-null.html">NULL</a>/missing values, it is one of the most popula r/heavily used Access functions.</p>
<p>Nz() does not have to return a data type that matches the source data, so you can test an integer and return a string or vice versa.</p>
<p> <b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="nz.png" width="385" height="88" alt="Nz Query"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">strDemo = Nz(Me!txtDescription)<br>
strDemo = Nz(Me!txtName, "Error")<br>
<br>
intProduct = Nz(Me!cmbProductID, 0)<br>
If intProduct = 0 Then Msgbox "A required value is missing!"
</p>
<p class="quote"><i>“Is the glass half full, or half empty?<br> 
It depends on whether you're pouring, or drinking” ~ Bill Cosby</i></p>
<p><b>Related:</b></p>
<p><a href="iif.html">IIf</a> - If-Then-Else function<br>
<a href="if.html">If Then Else</a> - If-Then-Else<br>
<a href="isnull.html">IsNull</a> - Test if an expression is NULL<br>
<a href="isempty.html">IsEmpty</a> - Test if a variable is empty (unassigned) <br>
<a href="syntax-null-value-error.html">Error trapping</a> - You tried to assign the null value to a variable</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="nz.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

