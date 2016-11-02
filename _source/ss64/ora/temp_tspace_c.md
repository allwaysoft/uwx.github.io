---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE TEMPORARY TABLESPACE</h1> 
<p>Create a temporary tablespace.<br>
  <br>
  Syntax:</p>
<pre>   CREATE TEMPORARY TABLESPACE tablespace_name
      TEMPFILE <i>Tempfile_Options 
        </i> [EXTENT MANAGEMENT LOCAL] 
            [UNIFORM [SIZE <i>int</i> K | M] ];

<i>Tempfile_Options:</i>
    '<a href="clause_filespec.html">filespec</a>' [AUTOEXTEND OFF]
    '<a href="clause_filespec.html">filespec</a>' [AUTOEXTEND ON [NEXT <i>int</i> K | M] [MAXSIZE <i>int</i> K | M]]
</pre>
<p>The Autoextend Maxsize clause will default to UNLIMITED if no 
  value is specified. <br>
  <br>
  To create a locally managed tablespace specify 'EXTENT MANAGEMENT LOCAL'. If you set extent management to LOCAL UNIFORM, then you must ensure that each extent contains at least 5 database blocks.<br>
  <br>
  All extents of temporary tablespaces are the same size - if UNIFORM is not defined 
it will default to 1 MB.
</p><p>Example
</p><p><span class="code">CREATE <b>TEMPORARY</b> TABLESPACE ts_temp <b>TEMPFILE</b><br>
'/data/temp01.dbf' SIZE 500M,<br>
'/data/temp02.dbf' SIZE 500M<br>
autoextend off<br>
extent management local<br>
</span><span class="code">UNIFORM SIZE 1m;</span><br>
  <br>
  <i> There are two kinds of fool. One says, "This is old, and therefore good." 
  And one says, "This is new, and therefore better" - John 
Brunner, The Shockwave Rider</i>

</p><p>  <b> Related Commands:</b>
</p><p>  <a href="tablespace_c.html">CREATE TABLESPACE</a> <br>
  <a href="tablespace_d.html">DROP TABLESPACE</a> <br>
<a href="database_a.html">ALTER DATABASE</a> DEFAULT TEMPORARY TABLESPACE <i>tablespace_name</i>;<br>
  <br>
  <b>Related Views:</b></p>
<pre> <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a> 
 <a href="../orad/DBA_TABLESPACES.html">DBA_TABLESPACES</a>                           <a href="../orad/USER_TABLESPACES.html">USER_TABLESPACES</a>
 <a href="../orad/DBA_TEMP_FILES.html">DBA_TEMP_FILES</a> 
 <a href="../orad/DBA_TS_QUOTAS.html">DBA_TS_QUOTAS</a>                             <a href="../orad/USER_TS_QUOTAS.html">USER_TS_QUOTAS</a> 

 <a href="../orav/V$TEMPFILE.html">V$TEMPFILE</a>
 <a href="../orav/V$TEMPORARY_LOBS.html">V$TEMPORARY_LOBS</a>
 <a href="../orav/V$TEMPSTAT.html">V$TEMPSTAT</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

