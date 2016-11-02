---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>Tablespace - free space.sql </h1> 
<p>The SQL*Plus script below will display the allocated space, free space and percentage of free space for each tablespace. </p>
<pre>SET LINESIZE 85
SET PAGESIZE 200
column tablespace_name format a18
column file_name format a25
column Allocated_kb format 999,999,999
column free_kb format 999,999,999
column Percent_Free format 999

SELECT
   df.tablespace_name,
   df.file_name,
   df.bytes/1024 Allocated_kb,
   free.free_kb,
   Round(free.free_kb/(df.bytes/1024)*100) Percent_Free
FROM
   dba_data_files df,
   (SELECT file_id, SUM(bytes)/1024 free_kb
    FROM dba_free_space GROUP BY file_id) free
WHERE
   df.file_id=free.file_id
ORDER BY
   Percent_Free;

--It is normal for the UNDO tablespace to appear full or nearly full.</pre>
<p>Note that if the tablespace has AutoExtend=ON then free space will be determined by the disc size rather than the tablespace size.</p>
<p><span class="quote"><i>“It is the final proof of God's omnipotence that he need not exist in order to save us” - Peter De Vries (The Mackerel Plaza)</i></span><b><br>
  <br>
Related:</b></p>
<p><a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a><br>
<a href="../orad/DBA_FREE_SPACE.html">DBA_FREE_SPACE</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sql-free-space.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

