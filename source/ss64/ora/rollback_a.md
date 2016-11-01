---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER ROLLBACK SEGMENT</h1> 
<p>Take an existing RBS on-line or off-line or change its storage 
  parameters.<br>
  <br>
  Syntax:</p>
<pre>   ALTER ROLLBACK SEGMENT <i>rbs_name</i> {ONLINE | OFFLINE}

   ALTER ROLLBACK SEGMENT <i>rbs_name</i> STORAGE <a href="clause_storage.html">storage_clause</a>

   ALTER ROLLBACK SEGMENT <i>rbs_name</i> SHRINK [TO <i>int</i> {K | M}]</pre>
<p>If you use  rollback segments to manage undo space, you are  operating in <i> manual </i>undo management mode.</p>
<p>If you use an undo tablespace, you are operating in <i>automatic </i>undo management mode. You determine the mode at instance startup using theUNDO_MANAGEMENT initialization parameter. 
  See the Oracle9i Database Reference for further information.<br>
  <br>
  To monitor rollback usage (waits/gets should be &lt; 1 %)</p>
<pre>select name, waits, gets
from v$rollstat, v$rollname
where v$rollstat.usn = v$rollname.usn;</pre>
<p><span class="quote"><i>"Never mistake motion for action" ~ Ernest Hemmingway</i></span><br>
<br>
<b>Related Commands:</b><br>
<br>
<a href="rollback_c.html">CREATE ROLLBACK SEGMENT</a> <br>
<a href="rollback_d.html">DROP ROLLBACK SEGMENT</a><br>
ORA-01555 - Snapshot too old (Rollback has been overwritten) <br><br>
<b>Related Views:</b></p>
<pre> <a href="../orad/DBA_ROLLBACK_SEGS.html">DBA_ROLLBACK_SEGS</a>
 <a href="../orav/V$ROLLNAME.html">V$ROLLNAME</a>
 <a href="../orav/V$ROLLSTAT.html">V$ROLLSTAT</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rollback_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

