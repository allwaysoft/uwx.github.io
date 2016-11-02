---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC SHRINKDATABASE</h1>
<p>Shrink the size of the database data and log files.</p>
<pre>Syntax
      DBCC SHRINKDATABASE ('<i>database</i>' <i>option </i>[<i>,option</i>] ) [WITH NO_INFOMSGS]

      DBCC SHRINKDATABASE ('<i>database_id</i>' <i>option</i> [<i>,option</i>] ) [WITH NO_INFOMSGS]

      DBCC SHRINKDATABASE (0 <i>option</i> [<i>,option</i>]) [WITH NO_INFOMSGS]

Options:
       <i>target_percent</i>
       NOTRUNCATE
       TRUNCATEONLY

Key:
     0            - Shrink the current database

   <i>target_percent</i> - Percentage of free space to remain in the database file

   NOTRUNCATE    - Free space at the end of the data file is not returned to the OS
                    (pages are still moved)
   TRUNCATEONLY  - Release free space at the end of the data file to the OS
                    (do not move pages)
	NO_INFOMSGS   - Suppress all information messages (severity 0-10)</pre>
<p>Only one of the truncate options can be specified - they do not apply to log files. </p>
<p>Example</p>
<pre>DBCC SHRINKDATABASE (MyDatabase);</pre>
<p class="quote"><i>“Men shrink less from offending one who inspires love than one who inspires fear” ~ Niccolo Machiavelli</i></p>
<p><b>Related:</b></p>
<p> <a href="database_a.html">ALTER DATABASE</a><br>
  <a href="dbcc_shrinkfile.html">DBCC SHRINKFILE</a><br>
  FILE_ID <br>
  sys.database_files <br>
Equivalent Oracle command: 
<a href="../ora/database_a.html">ALTER DATABASE... DATAFILE... </a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_shrinkdb.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

