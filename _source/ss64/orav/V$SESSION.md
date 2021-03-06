---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SESSION </h1>  
<p> User sessions and (in 10g and above) wait information. </p> 
<pre>Columns
   ___________________________
 
   SADDR
   SID
   SERIAL#
   AUDSID
   PADDR
   USER#
   USERNAME
   COMMAND
   OWNERID
   TADDR
   LOCKWAIT
   STATUS
   BLOCKING_SESSION_STATUS   -- 10g and above
   BLOCKING_SESSION   -- 10g and above
   SERVER
   SCHEMA#
   SCHEMANAME
   OSUSER
   PROCESS
   MACHINE
   TERMINAL
   PROGRAM
   TYPE
   SQL_ADDRESS
   SQL_HASH_VALUE
   PREV_SQL_ADDR
   PREV_HASH_VALUE
   MODULE
   MODULE_HASH
   ACTION
   ACTION_HASH
   CLIENT_INFO
   FIXED_TABLE_SEQUENCE
   ROW_WAIT_OBJ#
   ROW_WAIT_FILE#
   ROW_WAIT_BLOCK#
   ROW_WAIT_ROW#
   LOGON_TIME
   LAST_CALL_ET
   PDML_ENABLED
   FAILOVER_TYPE
   FAILOVER_METHOD
   FAILED_OVER
   RESOURCE_CONSUMER_GROUP
   PDML_STATUS
   PDDL_STATUS
   PQ_STATUS
   CURRENT_QUEUE_DURATION
   CLIENT_IDENTIFIER</pre>
<p>  Notes:<br>
  The SYS_CONTEXT function is often a better way to return this information.<br>
  V$SESSION truncates the OSUSER to 15 characters,
    so you might want
to use the one from <a href="V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a>.</p>
<p class="code">SQL &gt; select * from v$session where sid = (select sid from v$mystat where rownum=1 );</p>
<p class="code">SQL &gt; select * from v$session where client_info like 'rman%';</p>
<p>In 10g and above, to  identify the sessions who are locking each other:<br>
<span class="code">SELECT blocking_session_status, blocking_session FROM v$session</span></p>
<p><b>Related:</b></p>
<pre><a href="../orap/DBMS_APPLICATION_INFO.html">DBMS_APPLICATION_INFO</a>.set_module/.set_client_info
SYS_CONTEXT.audsid       - More Session information
DBA_HIST_ACTIVE_SESS_HISTORY  -- 10g and above
V$ACTIVE_SESSION_HISTORY    -- 10g and above
<a href="V$ACCESS.html">V$ACCESS</a>
<a href="V$MYSTAT.html">V$MYSTAT</a> 
<a href="V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a> 
<a href="V$SESSION_CURSOR_CACHE.html">V$SESSION_CURSOR_CACHE</a> 
<a href="V$SESSION_EVENT.html">V$SESSION_EVENT</a> 
<a href="V$SESSION_LONGOPS.html">V$SESSION_LONGOPS</a> 
<a href="V$SESSION_OBJECT_CACHE.html">V$SESSION_OBJECT_CACHE</a> 
<a href="V$SESSION_WAIT.html">V$SESSION_WAIT</a> 
<a href="V$SESSTAT.html">V$SESSTAT</a>.sid 
<a href="V$SESS_IO.html">V$SESS_IO</a> </pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SESSION.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

