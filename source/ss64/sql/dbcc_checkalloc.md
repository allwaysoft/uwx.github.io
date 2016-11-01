---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC CHECKALLOC - Check the consistency of disk space allocation.</h1>
<pre>Syntax
      <b>DBCC CHECKALLOC </b>[ ( '<i>database</i>' | <i>database_id </i>| 0 
	       [ , NOINDEX  | , { REPAIR_ALLOW_DATA_LOSS | REPAIR_FAST | REPAIR_REBUILD } ]
			   [WITH 
				  { [ ALL_ERRORMSGS ]
                   [ , NO_INFOMSGS ]
                   [ , TABLOCK ]
                   [ , ESTIMATEONLY ] 
				  }
				]
		]

 Key:
   REPAIR_FAST | REPAIR_REBUILD | NOINDEX - deprecated options
   REPAIR_ALLOW_DATA_LOSS - Use only as a last resort
                          - back up the database before you run this option.</pre>
<p>To find the repair level to use run DBCC CHECKDB without a repair option. The best and easiest way to repair errors is to restore from a backup. </p>
<p><b>Examples</b></p>
<pre>-- Check disk space allocation for the current database.<br>DBCC CHECKALLOC;<br>GO
</pre>
<p class="quote"><i>"Millions of individuals making their own decisions in the market-place will
always allocate resources better than any centralized government planning
process"
~ Ronald W. Reagan </i></p>
<p>  <b>Related</b></p>
<p><a href="dbcc_checkdb.html">DBCC CHECKDB</a> - Check allocation, and integrity of all objects.</p>
<p><b>Equivalent Oracle commands</b>:</p>
<p> <a href="../ora/table_a_cons.html">ALTER TABLE</a> MODIFY CONSTRAINT VALIDATE<br>
  <a href="../orap/DBMS_REPAIR.html">DBMS_REPAIR</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_checkalloc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

