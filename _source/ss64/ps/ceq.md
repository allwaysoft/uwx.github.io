---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>-ceq</h1> 
<p>ceq is a  comparison operator  that will test if one numeric or string expression is equal to another,</p>
<pre>Syntax
      <i>expression</i> -ceq <i>expression</i></pre>
<p>ceq is a case-sensitive match and will ignore wildcards. </p>
<p>This operator  returns <span class="code">True</span> or <span class="code">False</span>. </p>
<p><b>Examples</b></p>
<p class="code">PS C:\&gt; 'alpha' -ceq 'alphA'<br>
False
<br>
PS C:\&gt; 123 -ceq 123<br>
True<br>
PS C:\&gt; $demo = 'ABC'<br>
 PS C:\&gt; $demo -ceq 'ABC'<br> 
True
<br>
</p>
<p class="quote"><i>  “All animals are equal But some animals are more equal than others” ~ George Orwell, Animal Farm</i></p>
<p><b>Related:</b></p>
<p><a href="eq.html">-eq</a> - Test for equality<br>
<a href="contains.html">-contains</a> - test for the existence of one item in a collection, array or hashtable.<br>
<a href="syntax-compare.html">Syntax - Comparison Operators</a> </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ceq.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

