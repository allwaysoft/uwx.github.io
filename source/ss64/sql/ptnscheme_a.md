---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER  PARTITION SCHEME</h1>
<p>Change the allocation of a NEXT USED filegroup to a partition scheme.</p>
<pre>Syntax
      ALTER PARTITION SCHEME <i>partition_scheme</i><br>         NEXT USED [<i>filegroup</i>] [;]

Key
   file_group     A single filegroup to be designated as NEXT USED. Must already exist.
</pre> 
<p>  The filegroup does not need to be empty, one file group may be used for multiple partitions. </p>
<p>To remove the NEXT USED allocation, run the command without specifying any  filegroup.</p>
<p>Example</p>
<pre>ALTER PARTITION SCHEME myRangePtnScheme<br>NEXT USED fg4;
</pre>
<p class="quote"><i>"The difference between a politician and a statesman is: a politician thinks of the next election and a statesman thinks of the next generation" -  Freeman Clarke</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="ptnfunction_a.html">ALTER PARTITION FUNCTION</a><a href="ptnfunction_c.html"><br>
  CREATE PARTITION FUNCTION</a><br>
  <a href="ptnscheme_c.html">CREATE PARTITION SCHEME</a><br>
  <a href="ptnscheme_d.html">DROP PARTITION SCHEME</a>  <br>
Equivalent Oracle command:  <a href="../ora/table_a_part.html">ALTER TABLE</a> Partitioning clause</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ptnscheme_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

