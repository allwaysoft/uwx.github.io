---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP QUEUE</h1>
<p>Drop a queue.</p>
<pre>Syntax
      DROP QUEUE <i>queue</i>[;]
      DROP QUEUE database.[schema].<i>queue</i> [;]
      DROP QUEUE <i>schema.queue</i> [;]

Key<i>
   </i><i>queue</i>     The queue to be removed.
</pre>
<p>  This command requires that no services are currently referring to the queue.</p>
<p>Example</p>
<pre>DROP QUEUE MyQueue ;</pre>
<p class="quote"><i>"An Englishman, even if he is alone, forms
an orderly queue of one" - George Mikes </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="queue_c.html">CREATE QUEUE</a><br>
  <a href="queue_a.html">ALTER QUEUE</a><br>
Equivalent Oracle command:  <a href="../orap/DBMS_JOB.html">DBMS_JOB</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="queue_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

