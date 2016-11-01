---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem -->
<h1>String</h1>
<p>Repeat a character <i>n</i> times.</p>
<pre>Syntax
      String(<i>Nunber, Character</i>)

Key<i>
   Character </i> A single character.
   <i>N          </i>The Number of repeated characters to return.</pre>
<p> The String() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">String()</span> will return a Variant, you can also use  <span class="code">String$()</span> to return a String. <br>
You should use <span class="code">String()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = String(10, "A")<br>
Msgbox strDemo
<br>
</span>Returns <span class="code">"AAAAAAAAAA"</span></p>
<p class="quote"><i>“Begin at the beginning, the King said, very gravely, and go on till you come to the end: then stop” ~ Lewis Carroll</i></p>
<p><b>Related:</b></p>
<p><a href="mid.html">Mid</a> - Extract a substring from a string<br>
<a href="right.html">Right</a> - Extract a substring from a string</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="string.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

