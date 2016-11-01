---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Chr</h1>
<p>Function that returns the character represented by an <a href="../ascii.html">Ascii code</a>.</p>
<pre>Syntax
      Chr (<i>ascii_code</i>)</pre>
<p><span class="code">Chr (65)</span> will return A </p>
<p>The Chr function can also be used in an SQL query.</p>
<p><span class="code">Chr()</span> will return a Variant, you can also use <span class="code">Chr$()</span> to return a String. <br>
You should use <span class="code">Chr()</span> if there is any chance of a <a href="syntax-null.html">Null</a> value, since assigning Null to a String will raise an error. </p>
<p>Use the ChrB function with byte character codes.</p>
<p><b>Examples</b></p>
<p>In a query:</p>
<blockquote>
<p><img src="chr.png" width="266" height="86" alt="CHR"></p>
</blockquote>
<p>In VBA:</p>
<p class="code">Dim strDemo As String </p>
<p class="code"> 
strDemo = Chr (65)<br>
&gt; A </p>
<p class="quote"><i>“You can easily judge the character of a man by how he treats those who can do nothing for him” ~ James D. Miles</i></p>
<p>Related:<br>
<br>
<a href="asc.html">Asc</a> - Returns the Ascii code of a character.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

