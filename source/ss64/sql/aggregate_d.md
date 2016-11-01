---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1> DROP  AGGREGATE</h1>
<p>Drop a user-defined aggregate function</p>
<pre>Syntax
      DROP AGGREGATE [ <i>schema_name</i> . ] <i>aggregate_name</i>
</pre>
<p>
  If the aggregate function is still referenced by  any views, functions, or stored procedures (created with schema binding) then the attempt to drop will fail.</p>
<p>Minimum permissions: ALTER permission on the schema, or CONTROL permission on the aggregate.</p>
<p><b>Example</b></p>
<p>DROP AGGREGATE dbo.myAggregate</p>
<p class="quote"><i>"Do you feel you've learnt by your mistakes here?<br>
I think I have, yes, and I think I can probably repeat them almost<br>
perfectly. I know my mistakes inside out" ~ Peter Cook and Dudley Moore</i></p>
<p><b>Related commands:</b><br>
  <br>
  <a onclick="javascript:TrackThisClick('ctl00_LibFrame_MainContent_ctl00','ctl00_LibFrame_MainContent_ctl00::ctl00_LibFrame_MainContent_ctl01',this.href);" href="aggregate_c.html">CREATE AGGREGATE</a><br>
  <br>
  <b>Equivalent Oracle command</b>:<a href="../bash/export.html"><br>
  <br>
</a><a href="../ora/function_d.html">DROP FUNCTION</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

