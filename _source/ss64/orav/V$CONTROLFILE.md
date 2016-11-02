---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$CONTROLFILE </h1>  
 <p> The location and status of each controlfile in the database. </p> 
 
<pre>Columns
   ___________________________
 
   STATUS
   NAME

</pre>
<p><b>Example:</b></p>
<pre>SQL&gt; SET LINESIZE 135
 SQL&gt; SET PAGESIZE 9999
 SQL&gt; COLUMN name FORMAT A45
 SQL&gt; 
 SQL&gt; SELECT
    2 name,
    3 LPAD(status, 7) status
    4 FROM v$controlfile
    5 ORDER BY name
    6 /</pre>
<pre>   NAME                                          STATUS
   --------------------------------------------- -------
   M:\ORADATA\LIVE\CONTROL03.CTL
   T:\ORADATA\LIVE\CONTROL01.CTL
   T:\ORADATA\LIVE\CONTROL02.CTL</pre>
<pre>SQL&gt; </pre>
<p><b>Related:</b></p>
<pre>    <a href="V$CONTROLFILE_RECORD_SECTION.html">V$CONTROLFILE_RECORD_SECTION</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$CONTROLFILE.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

