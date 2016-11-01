---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access_syntax.lbi" --><!-- #EndLibraryItem -->
<h1>Null values</h1>
<p>A NULL is a value that has not been entered, so can be thought of as unknown or missing.</p>
<p>In any database some data values will be required and some will be optional the NULL allows you to recognise and handle these 'not entered' values.</p>
<p>Handling NULLs correctly is an important task in writing any database code, this is not limited just to MS Access.</p>
<ul>
<li>Null is not the same as zero.</li>
<li> Null is not the same as an Empty (zero-length) string "".</li>
<li> Null is not the same as an Empty variable which has not yet been initialized.</li>
<li>The length of a Zero Length String is zero, the length of a NULL is unknown/undefined.</li>
</ul>
<p>In VBA code it is useful to use the <a href="nz.html">Nz()</a> function to change the NULL value into a concrete value that you can test. </p>
<p>In SQL queries  it is useful to use the SQL <span class="code">IS</span> operator with <span class="code">Null</span> to find Null values:</p>
<blockquote>
<p class="code">WHERE value IS NULL<br>
WHERE value IS NOT NULL</p>
<p class="code"><img src="null.png" width="248" height="106" alt="IS NULL query"></p>
</blockquote>
<p>You can't use the = operator to compare Null values to anything, as the result will always be Null.</p>
<p>The <a href="isnull.html">IsNull()</a> function can be used to test if a variable is NULL, but unlike <a href="nz.html">Nz()</a> it will not flag Zero Length Strings:</p>
<blockquote>
<p class="code">MyVar = Null <br>
MyCheck = IsNull(MyVar)</p>
</blockquote>
<p class="quote"><i>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight” ~ Bill Gates </i></p>
<p><b>Related</b>:</p>
<p><a href="syntax-odbc-error.html">Error trapping ODBC errors</a><br>
<a href="syntax-null-value-error.html">Error trapping NULLs</a> - <i>You tried to assign the null value to a variable </i><br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.<br>
</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="syntax-null.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem --><p></p>

