---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_DATA_FILES </h1><p> Information about database data files </p> 
 
<pre>Columns
   ___________________________
 
   FILE_NAME
      Name of the database data file
   FILE_ID
      ID of the database data file
   TABLESPACE_NAME
      Name of the tablespace to which the file belongs
   BYTES
      Size of the file in bytes
   BLOCKS
      Size of the file in ORACLE blocks
   STATUS
      File status: "INVALID" or "AVAILABLE"
   RELATIVE_FNO
      Tablespace-relative file number
   AUTOEXTENSIBLE
      Autoextensible indicator: "YES" or "NO"
   MAXBYTES
      Maximum size of the file in bytes
   MAXBLOCKS
      Maximum size of the file in ORACLE blocks
   INCREMENT_BY
      Default increment for autoextension
   USER_BYTES
      Size of the useful portion of file in bytes
   USER_BLOCKS
      Size of the useful portion of file in ORACLE blocks
</pre>
<p>Example SQL<br>
<br>
-- List the Files in each Tablespace:</p>
<pre>Select<br>RPAD(tablespace_name,18)||' '||RTRIM(file_name) Tablespace<br>From<br>dba_data_files<br>Order By tablespace_name; </pre>
<p><b>Related:</b></p>
<p><a href="../ora/sql-free-space.html">SQL Script - Tablespace Free Space </a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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

