---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>Active Sessions SQL</h1>  
<p> SQL to return  User Sessions  that are holding row/table locks:</p> 
<pre>-- Lists Orauser, Command, Program, Process ID, Session Locks

SELECT
   substr(a.name,1,24) name,
   substr(s.program,1,30) program,
   p.spid SPID, 
   s.osuser,
   l.SID SID,
   s.process PID, 
   s.TERMINAL, 
   S.STATUS
FROM
   sys.<a href="../orad/DBMS_LOCK_ALLOCATED.html">dbms_lock_allocated</a> a,
   <a href="V$LOCK.html">v$lock</a> l,
   <a href="V$SESSION.html">v$session</a> s,
   <a href="V$PROCESS.html">v$process</a> p
WHERE
   a.lockid = l.id1 and
   l.type = 'UL' and
   l.sid = s.sid and
   p.addr = s.paddr
   order by osuser;</pre>
<p><b>Related:<br>
</b><span class="code"><a href="sessions-sql.html">List all Sessions SQL</a></span></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sessions-active-sql.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

