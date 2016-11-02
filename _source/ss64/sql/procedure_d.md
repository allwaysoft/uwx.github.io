---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP PROCEDURE</h1>
<p>Drop one or more stored procedures (or procedure groups) from the current database.</p>
<pre>Syntax
      DROP PROCEDURE [<i>schema.</i>]<i>procedure</i> [,...n ];

Key<i>
   </i><i>procedure</i>     The stored procedure or stored procedure group to be removed.

This command can also be shortened to DROP PROC... </pre> 
<p>  This command requires that the partition scheme is not currently being used by any tables or indexes.</p>
<p>Example</p>
<pre>DROP PROCEDURE dbo.uspMyProc;
GO</pre>
<p><i>"The best way to get a bad law repealed is to enforce it strictly" - Abraham Lincoln </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="procedure_c.html">CREATE PROCEDURE<br>
</a><a href="procedure_a.html">ALTER PROCEDURE</a><br>
  sys.sql_modules - view procedure definition <br>
Equivalent Oracle command:  <a href="../ora/procedure_d.html">DROP PROCEDURE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="procedure_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

