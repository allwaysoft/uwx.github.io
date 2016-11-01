---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE TABLESPACE</h1> 
<p>Create a permanent tablespace.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [UNDO] TABLESPACE tablespace_name
      DATAFILE <i>Datafile_Options Storage_Options</i>;

<i>Datafile_Options:</i>

    '<a href="clause_filespec.html">filespec</a>' [AUTOEXTEND OFF]
    '<a href="clause_filespec.html">filespec</a>' [AUTOEXTEND ON [NEXT <i>int</i> K | M] [MAXSIZE <i>int</i> K | M]]</pre>
<p>The Autoextend Maxsize clause will default to UNLIMITED if no value is specified.</p>
<pre><i>Storage_Options:

</i>    DEFAULT [COMPRESS|NOCOMPRESS] STORAGE <a href="clause_storage.html">storage_clause</a>
    MINIMUM EXTENT <i>int</i> {K|M}
    BLOCKSIZE <i>int</i> K
    LOGGING | NOLOGGING
    FORCE LOGGING
    <u>ONLINE</u> | OFFLINE
    <u>PERMANENT</u> | TEMPORARY
    EXTENT MANAGEMENT {DICTIONARY |
       LOCAL {AUTOALLOCATE | UNIFORM [SIZE <i>int</i> K | M]} }
    SEGMENT SPACE MANAGEMENT {MANUAL | AUTO}
</pre>
<p><b>Examples</b></p>
<p>-- With Autoextend: </p>
<p class="code">CREATE TABLESPACE ts_mydemo DATAFILE<br>
'/data/ts_mydemo01.dbf' SIZE 50M,<br>
'/data/ts_mydemo02.dbf' SIZE 64M<br>
logging<br>

autoextend on<br>
next 32m maxsize 2048m<br>
extent management local;</p>
<p>-- With specified datafile sizes:</p>
<p class="code">CREATE TABLESPACE ts_myapp DATAFILE<br>
'/data/ts_myapp01.dbf' SIZE 200M,<br>
'/data/ts_myapp02.dbf' SIZE 500M<br>
logging<br>
autoextend off<br>

extent management local;</p>
<p>-- Undo tablespace</p>
<p class="code">CREATE UNDO TABLESPACE ts_undo01 DATAFILE<br>
'/data/ts_undo01.dbf SIZE 50000M REUSE<br> 
autoextend on<br>
RETENTION NOGUARANTEE;</p>
<p>Retention guarantee can also be enabled for UNDO tablespaces with the option <span class="code">RETENTION GUARANTEE</span>, this  should be used with caution - it can easily cause updates to fail due to a lack of space in the undo tablespace.</p>
<p><i class="quote">"A place for everything and everything in its place" ~ Isabella 
  Mary Beeton, The Book of Household Management</i><br>
  <br>
<b> Related Commands:</b></p>
<p><a href="tablespace_a.html">ALTER TABLESPACE</a> <br>
<a href="temp_tspace_c.html">CREATE TEMPORARY TABLESPACE</a><br>
  <a href="tablespace_d.html">DROP TABLESPACE</a> <br>
  <br>
<b>Related Views:</b></p>
<pre> <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> 
 <a href="../orad/DBA_TABLESPACES.html">DBA_TABLESPACES</a>                           <a href="../orad/USER_TABLESPACES.html">USER_TABLESPACES</a>
 <a href="../orad/DBA_TEMP_FILES.html">DBA_TEMP_FILES</a> 
 <a href="../orad/DBA_TS_QUOTAS.html">DBA_TS_QUOTAS</a>                             <a href="../orad/USER_TS_QUOTAS.html">USER_TS_QUOTAS</a>       </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tablespace_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

