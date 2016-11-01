---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Space</h1>
<p>  Return a number of spaces.</p>
<pre>Syntax
      Space(<i>Number</i>)

Key
   <i>Number</i>  The number of spaces to return.</pre>
<p>The Space() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">Space()</span> will return a Variant, you can also use <span class="code">Space$()</span> to return a String. <br>
You should use <span class="code">Space()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p><b>Example</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = Space(5)<br>
<br> 
</span>'Returns: <span class="code">"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" </span></p>
<p class="quote"><i>“Empty pockets never held anyone back. Only empty heads and empty hearts can do that” ~ Norman Vincent Peale</i></p>
<p><b>Related:</b></p>
<p><a href="rtrim.html">RTrim</a> - Remove trailing spaces from a string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="space.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

