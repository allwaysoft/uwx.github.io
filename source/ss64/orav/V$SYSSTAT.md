---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SYSSTAT </h1>  
<p> Cumulative statistics since the last startup of the database. </p> 
<pre>Columns
   ___________________________
 
   STATISTIC#
   NAME
   CLASS
   VALUE
</pre>
<p><br>
<b>Example</b><br>
Display the cumulative logons: 
</p>
<pre>SELECT rpad(c.name||':',11)||
       rpad(' current logons='||(to_number(b.sessions_current)-1),20)||
       'cumulative logons='||rpad(substr(a.value,1,10),10)||
       'highwater mark='||b.sessions_highwater Information
FROM
  v$sysstat a,
  v$license b,
  v$database c
WHERE
  a.name = 'logons cumulative';
</pre>
<p><b>Related:</b></p><pre><a href="V$GLOBAL_TRANSACTION.html">V$GLOBAL_TRANSACTION</a> 
<a href="V$SHARED_POOL_RESERVED.html">V$SHARED_POOL_RESERVED</a> 
<a href="V$SORT_SEGMENT.html">V$SORT_SEGMENT</a> 
<a href="V$SORT_USAGE.html">V$SORT_USAGE</a> 
<a href="V$STATNAME.html">V$STATNAME</a> 
<a href="V$SYSTEM_CURSOR_CACHE.html">V$SYSTEM_CURSOR_CACHE</a> 
<a href="V$SYSTEM_EVENT.html">V$SYSTEM_EVENT</a> 
<a href="V$TRANSACTION.html">V$TRANSACTION</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SYSSTAT.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->
