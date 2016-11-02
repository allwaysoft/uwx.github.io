---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP ROUTE</h1>
<p>Delete a route from the current database, (delete from the routing table.)</p>
<pre>Syntax
      DROP ROUTE <i>route </i>[;]
	  
Key<i>
   route</i>     The route to drop. </pre>
<p>  If a route is dropped while in use by a  conversation, then the conversation will remain in the transmission queue (often until it times out.)</p>
<p>Example</p>
<pre>DROP ROUTE MyRoute ;</pre>
<p><i>"Get your kicks on ROUTE 66" - Jack Kerouac</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="route_c.html">CREATE ROUTE</a><br>
  <a href="route_a.html">ALTER ROUTE</a><br>
  sys.routes - List routing table   <br>
Equivalent Oracle command:  <a href="../orap/DBMS_JOB.html">DBMS_JOB</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

