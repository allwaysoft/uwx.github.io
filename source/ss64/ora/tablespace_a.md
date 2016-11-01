---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER TABLESPACE</h1> 
<p>Change the properties of a tablespace.<br>
  <br>
  Syntax:</p>
<pre>   ALTER TABLESPACE tablespace_name <i>option</i></pre>
<p> options: <br>
The <i>option</i> used with this command can be any one of the following:</p>
<pre>    ADD {TEMPFILE|DATAFILE} '<a href="clause_filespec.html">filespec</a>' [AUTOEXTEND OFF] SIZE <i>int</i> {K|M}

    ADD {TEMPFILE|DATAFILE} '<a href="clause_filespec.html">filespec</a>' SIZE <i>int</i> {K|M}
       [ AUTOEXTEND ON [NEXT <i>int</i> K | M] 
           [MAXSIZE {<u>UNLIMITED</u>|<i>int</i> K|int M}] ]

    RENAME DATAFILE 'filename' TO 'filename'
    {TEMPFILE|DATAFILE} ONLINE
    {TEMPFILE|DATAFILE} OFFLINE
    MINIMUM EXTENT <i>int</i> {K|M}
    COALESCE
    DEFAULT STORAGE <a href="clause_storage.html">storage_clause</a>
    ONLINE
    OFFLINE {<u>NORMAL</u> | TEMPORARY | IMMEDIATE}
    {BEGIN | END} BACKUP
    READ {ONLY | WRITE}
    PERMANENT | TEMPORARY
    LOGGING | NOLOGGING
    [NO] FORCE LOGGING</pre>
<p><br>
<b>Examples</b></p>
<p> <span class="code">Alter Tablespace TEMP ADD TEMPFILE 'T:\oradata\live\Temp02.DBF' SIZE 800M;</span></p>
<p class="code">Alter Tablespace SS64 ADD DATAFILE 'T:\oradata\live\Data02.DBF' SIZE 1500M;</p>
<p><a href="http://www.psoug.org/reference/tablespaces.html">More examples</a> - Morgans Library </p>
<p><i class="quote"> "God grant us the serenity to accept the things we cannot change, courage to change the things we can, and wisdom to know the difference." - Reinhold Niebuhr - The 12 step program </i><br>
  <br>
<b> Related Commands:</b></p>
<p><a href="../orap/DBMS_SPACE_ADMIN.html">DBMS_SPACE_ADMIN</a><br>
<a href="tablespace_c.html">CREATE TABLESPACE</a> <br>
<a href="tablespace_d.html">DROP TABLESPACE</a><br>
<br>
<b>Related Views:</b></p>
<pre> <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> 
 <a href="../orad/DBA_TABLESPACES.html">DBA_TABLESPACES</a>                           <a href="../orad/USER_TABLESPACES.html">USER_TABLESPACES</a> 
 <a href="../orad/DBA_TEMP_FILES.html">DBA_TEMP_FILES</a> 
 <a href="../orad/DBA_TS_QUOTAS.html">DBA_TS_QUOTAS</a>                             <a href="../orad/USER_TS_QUOTAS.html">USER_TS_QUOTAS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

