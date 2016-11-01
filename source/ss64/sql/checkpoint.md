---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CHECKPOINT</h1>
<p>Write all dirty pages to disk.</p>
<pre>Syntax
      CHECKPOINT [<i>duration</i>]

Key<i>
   </i><i>duration</i>    Time for the checkpoint to complete (seconds).</pre>
<p>     CHECKPOINT will write to disk all  those data pages  in the buffer cache of the current database which have been modified, but not yet written to disk. </p>
<p>Issuing SHUTDOWN WITH NOWAIT or directly stopping the msSqlServer service from the Windows control panel will <b>not </b>perform a checkpoint. When the database is restarted, this will force a rollback operation to occur for any uncompleted transactions. </p>
<p>Example</p>
<pre>CHECKPOINT</pre>
<p class="quote"><i>"The checkpoint is not a security 
  measure designed to prevent terrorists from transporting bombs. It is 
  a political tactic aimed at making Palestinians suffer in order to
  break their wills"
~ Wendy Pearlman</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="database_a.html">ALTER DATABASE</a><br>
  <a href="shutdown.html">SHUTDOWN</a><br>
  <br>
<b>Equivalent Oracle command</b>:</p>
<p> <a href="../ora/system_a.html">ALTER SYSTEM</a> FLUSH SHARED POOL</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="checkpoint.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

