---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Val</h1>
<p>  Extract a numeric value from a string.</p>
<pre>Syntax
      Val ( <i>String</i> )

Key
   <i>String</i>   A string <a href="stringexpression.html">expression</a>.</pre>
<p> Val() will stop reading the string at the first non-numeric character. This does not include spaces.</p>
<p>The Val() function can be used in VBA or in an <a href="syntax-functions.html">SQL query.</a> </p>
<p><b>Example</b></p>
<p><span class="code">Dim intHouseNo as Integer <br>
intHouseNo = Val ("12 Acacia Gardens")<br>
</span>returns:<span class="code"> 12</span></p>
<p class="quote"><i>“A worker may be the hammer's master, but the hammer still prevails. A tool knows exactly how it is meant to be handled, while the user of the tool can only have an approximate idea” ~ Milan Kundera</i></p>
<p><b>Related:</b></p>
<p><a href="mid.html">Mid</a> - Extract a substring from a string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="val.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

