---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_FREE_SPACE </h1><p> Free extents in all tablespaces </p> 
 
<pre>Columns
   ___________________________
 
   TABLESPACE_NAME
      Name of the tablespace containing the extent
   FILE_ID
      ID number of the file containing the extent
   BLOCK_ID
      Starting block number of the extent 
   BYTES
      Size of the extent in bytes
   BLOCKS
      Size of the extent in ORACLE blocks
   RELATIVE_FNO
      Relative number of the file containing the extent</pre>
<p><b>Example</b></p>
<p>--Free space in each tablespace: </p>
<p class="code">COLUMN tablespace_name FORMAT A15<br>
COLUMN "Total Free (MB) " FORMAT 999,999,999,999<br>
COLUMN "Largest Free Extent (MB) " FORMAT 999,999,999,999</p>
<p class="code">Select tablespace_name,<br>
Sum(bytes/(1024*1024)) "Total Free (MB) ",<br>
Max(bytes/(1024*1024)) "Largest Free Extent (MB) "<br>
From dba_free_space<br>
Group By tablespace_name; </p>
<p>  <b>Related:</b></p>
<p><a href="DBA_EXTENTS.html">DBA_EXTENTS</a><br>
<a href="../ora/sql-free-space.html">SQL Script  - Tablespace Free Space </a><br>
<a href="DBA_FREE_SPACE_COALESCED_TMP1.html">DBA_FREE_SPACE_COALESCED_TMP1<br>
</a> <a href="DBA_FREE_SPACE_COALESCED_TMP2.html">DBA_FREE_SPACE_COALESCED_TMP2</a><br> 
<a href="DBA_FREE_SPACE_COALESCED_TMP3.html">DBA_FREE_SPACE_COALESCED_TMP3</a> </p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

