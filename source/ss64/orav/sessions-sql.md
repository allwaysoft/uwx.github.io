---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>Sessions SQL</h1>  
<p> SQL to return detail of all current User Sessions:</p> 
<pre>column identity format a45 heading 'PID  Client/User' ;
column command format a14 ;
column program format a23 ;

SELECT p.spid ||' '||
       s.machine||':'||
       s.osuser ||'&lt;'|| s.terminal ||'&gt;'||
       decode(s.username,s.osuser,null,s.username) identity,
       decode(s.command,  1,'CRE TAB',
                          2,'INSERT',
                          3,'SELECT',
                          6,'UPDATE',
                          7,'DELETE',
                          9,'CRE INDEX',
                         12,'DROP TABLE',
                         15,'ALT TABLE',
                         39,'CRE TBLSPC',
                         42,'ALT SESSION',
                         44,'COMMIT',
                         45,'ROLLBACK',
                         47,'PL/SQL EXEC',
                         48,'SET XACTN',
                         62,'ANALYZE TAB',
                         63,'ANALYZE IX',
                         71,'CREATE MLOG',
                         74,'CREATE SNAP',
                         79,'ALTER ROLE',
                         85,'TRUNC TAB',
                       to_char(s.command)) command, 
         substr(s.program,instr(s.program,']',-1)+1, 
         decode(instr(s.program,'.',-1) - instr(s.program,']',-1)-1,-1,99,
                instr(s.program,'.',-1) - instr(s.program,']',-1)-1)) Program
FROM <a href="V$SESSION.html">v$session</a> s, 
     <a href="V$PROCESS.html">v$process</a> p
WHERE (s.type  &lt;&gt; 'BACKGROUND')
  and (s.paddr = p.addr)
  and (s.program is not null)
ORDER BY s.osuser;</pre>
<p><b>Related:<br>
</b><span class="code"><a href="sessions-active-sql.html">List Active Sessions SQL</a></span></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sessions-sql.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

