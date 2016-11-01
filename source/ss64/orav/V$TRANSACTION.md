---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$TRANSACTION </h1>  
 <p> Data Dictionary View </p> 
 
<pre>Columns
   ___________________________
 
   ADDR
   CR_CHANGE
   CR_GET
   DSCN-B
   DSCN-W
   FLAG
   LOG_IO
   NAME
   NOUNDO
   PHY_IO
   PRV_XIDSLT
   PRV_XIDSQN
   PRV_XIDUSN
   PTX
   PTX_XIDSLT
   PTX_XIDSQN
   PTX_XIDUSN
   RECURSIVE
   SES_ADDR
   SPACE
   START_SCNB
   START_SCNW
   START_TIME
   START_UBABLK
   START_UBAFIL
   START_UBAREC
   START_UBASQN
   START_UEXT
   STATUS
   UBABLK
   UBAFIL
   UBAREC
   UBASQN
   USED_UBLK      (UNDO Blocks)
   USED_UREC      (UNDO records)
   XIDSLOT
   XIDSQN
   XIDUSN</pre>
<p>List the Undo per session</p>
<p class="code">SELECT<br>
s.sid, <br>
s.username,<br>
r.name "RBS name", <br>
tx.start_time,<br>
tx.used_ublk "Undo blocks",<br>
tx.used_urec "Undo recs"<br> 
FROM
<br>
v$session s,<br>
v$transaction tx,<br>
v$rollname r<br> 
WHERE
<br>
tx.addr = s.taddr and<br>
r.usn = tx.xidusn;</p>
<p><b>Related:</b></p>
<p><span class="code"><a href="V$SESSION.html">V$SESSION</a><br>
<a href="V$ROLLNAME.html">V$ROLLNAME</a>.usn &nbsp;&nbsp;= v$transaction</span>.<span class="code">xidusn</span></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$TRANSACTION.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

