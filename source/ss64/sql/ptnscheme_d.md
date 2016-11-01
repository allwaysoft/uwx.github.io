---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP  PARTITION SCHEME</h1>
<p>Drop  a partition function from the current database.</p>
<pre>Syntax
      DROP PARTITION SCHEME <i>ps_name</i> [;]

Key<i>
   </i><i>ps_name</i>     The partition scheme to drop.</pre> 
<p>  This command requires that the partition scheme is not currently being used by any tables or indexes.</p>
<p>Example</p>
<pre>DROP PARTITION SCHEME myRangePS;</pre>
<p><i>"Most of the things we do have never been done before" - Enron corporate, 'who we are' statement </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="ptnscheme_c.html">CREATE PARTITION SCHEME</a><br>
  <a href="ptnscheme_a.html">ALTER PARTITION SCHEME</a><br>
Equivalent Oracle command:  <a href="../ora/table_a_part.html">ALTER TABLE</a> Partitioning clause</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ptnscheme_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

