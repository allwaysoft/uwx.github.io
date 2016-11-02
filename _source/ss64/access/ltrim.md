---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Ltrim</h1>
<p>  Remove leading spaces from a string.</p>
<pre>Syntax
      Ltrim(<i>string</i>)

Key
   <i>string</i>    A text string or string <a href="stringexpression.html">expression</a>.</pre>
<p> The Ltrim() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><span class="code">Ltrim()</span> will return a Variant, you can also use <span class="code">Ltrim$()</span> to return a String. <br>
You should use <span class="code">Ltrim()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p><b>Examples</b></p>
<p><span class="code">Dim strDemo as String<br>
strDemo = Ltrim(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The world is everlasting")<br>
</span>Returns <span class="code">"The world is everlasting"</span></p>
<p class="quote"><i>“The hands of every clock are shears, trimming us away scrap by scrap, and every time piece with a digital readout blinks us towards implosion” ~ Dean Koontz</i></p>
<p><b>Related:</b></p>
<p><a href="left.html">Left</a> - Extract a substring from a string<br>
<a href="rtrim.html">RTrim</a> - Remove trailing spaces from a string.<br>
<a href="trim.html">Trim</a> - Remove leading and trailing spaces from a string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

