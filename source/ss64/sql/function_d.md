---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP FUNCTION</h1>
<p>Remove a full-text catalog from a database. </p>
<pre>Syntax
      DROP FUNCTION [<i>schema</i>.]<i>function</i>  [,...n ] 

Key:
    <i>schema</i>    The schema to which the user-defined function belongs.

    <i>function</i>  Name of the function(s) to remove.</pre> 
<p>To run this command first remove any CHECK constraints, or DEFAULT constraints that reference the function. </p>
<p>Also an indexed  computed column that references the function will prevent  dropping the function.</p>
<p>Example</p>
<pre>DROP FUNCTION MySchema.fn_myfunction;<br>GO</pre>
<p class="quote"><i>"Form follows function" ~ Louis H. Sullivan </i></p>
<p><b>Related:</b></p>
<p>  <a href="function_c.html">CREATE FUNCTION</a><br>
  <a href="function_a.html">ALTER FUNCTION</a><br>
Equivalent Oracle commands:  <a href="../ora/function_d.html">DROP FUNCTION </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="function_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

