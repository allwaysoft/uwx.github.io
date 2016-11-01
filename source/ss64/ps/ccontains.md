---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>-ccontains</h1> 
<p>CContains is a  conditional operator  that will test for the existence of one  item in a collection, <a href="syntax-arrays.html">array</a> or <a href="syntax-hash-tables.html">hashtable</a>. </p>
<pre>Syntax
      <i>expression</i> -ccontains <i>expression</i></pre>
<p>ccontains is an exact (but case-sensitive) match and will ignore wildcards. </p>
<p>To examine the contents of values within a string,  either use a wildcard -match or <a href="split.html">-split</a> the string into an array.</p>
<p>This operator  returns <span class="code">True</span> or <span class="code">False</span>. </p>
<p><b>Examples</b></p>
<p class="code">PS C:\&gt; $demoArray = 'alpha', 'beta', 'New York'<br>
PS C:\&gt; $demoArray -ccontains "alpha"<br> 
True
<br>
PS C:\&gt; $demoArray -ccontains 'New'<br>
False<br>
PS C:\&gt; $demoArray -ccontains 'New york'<br> 
False
</p>
<p class="code">PS C:\&gt; $string = 'alpha, beta, California'<br>
PS C:\&gt; $string -ccontains 'alpha'<br>
False<br>
PS C:\&gt; $string  -split ',' -ccontains 'alpha'<br>
True
<br>
</p>
<p class="quote"><i>  “Do I contradict myself? Very well, then I contradict myself, I am large, I contain multitudes” ~ Walt Whitman</i></p>
<p><b>Related:</b></p>
<p><a href="contains.html">-contains</a> - Case insensitive -contains<br>
<a href="eq.html">-eq</a> - Equality comparison Operator<br>
<a href="syntax-compare.html">Syntax - Comparison Operators</a> </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

