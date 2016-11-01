---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Array</h1> 
<p>Add values to an Array variable</p>
<pre>Syntax 
       Array (<i>el1,el2,el3</i>)

Key
   el1,2,..  Values (Elements) to add to the array
             At least one element must be supplied
</pre>
<p>Create an array with 4 items:</p>
<pre>Dim vaVolcanoes
vaVolcanoes=Array("Cinder cone","Composite","Shield volcano","Lava dome")
</pre>
<p>Alternatively define 4 individual elements:</p>
<pre>Dim vaVolcanoes(3)
vaVolcanoes(0)="Cinder cone"
vaVolcanoes(1)="Composite"
vaVolcanoes(2)="Shield volcano"
vaVolcanoes(3)="Lava dome"
</pre>
<p><i class="quote">“Listen to many, speak to a few” ~ William Shakespeare</i><br>
<b><br>
Related:</b></p>
<p>  <a href="dim.html">Dim</a> - Declare a new variable or array variable<br>
<a href="filter.html">Filter</a> - Produce an array by filtering an existing array<br>
Equivalent  in PowerShell:<a href="../ps/syntax-arrays.html"> Arrays</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="array.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

