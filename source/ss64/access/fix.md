---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Fix</h1>
<p>  Return the integer portion of a number.</p>
<pre>Syntax
      Fix (<i>expression</i>)

Key
   <i>expression</i>  The numeric expression whose integer portion will be returned.</pre>
<p>The Fix() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>. <br>
Negative numbers will be rounded <b>up</b> by Fix(). </p>
<blockquote>
<p><img src="fix.png" width="239" height="111" alt="fix example"></p>
</blockquote>
<p><b>Example</b></p>
<p class="code">Dim dblDemo as double</p>
<p><span class="code">dblDemo = Fix(123.64)</span> Will return 123<br>
<span class="code">dblDemo = Fix(-32.45)</span> Will return -32</p>
<p class="quote"><i>“If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people” ~ Chinese Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="int.html">Int</a> - Return the integer portion of a number (negative numbers round down)</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="fix.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

