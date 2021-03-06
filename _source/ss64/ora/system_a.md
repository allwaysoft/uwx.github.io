---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER SYSTEM</h1> 
<p>Modify system settings.<br>
  <br>
  Syntax:</p>
<pre>   ALTER SYSTEM ARCHIVE LOG <a href="clause_archive.html">archive_log_clause</a>
   ALTER SYSTEM CHECKPOINT [<u>GLOBAL</u> | LOCAL]
   ALTER SYSTEM CHECK DATAFILES [<u>GLOBAL</u> | LOCAL]
   ALTER SYSTEM FLUSH SHARED_POOL
   ALTER SYSTEM {ENABLE | DISABLE} DISTRIBUTED RECOVERY
   ALTER SYSTEM {ENABLE | DISABLE} RESTRICTED SESSION
   ALTER SYSTEM RESUME
   ALTER SYSTEM SUSPEND
   ALTER SYSTEM SHUTDOWN [IMMEDIATE] <i>dispatcher_name</i>
   ALTER SYSTEM SWITCH LOGFILE
   ALTER SYSTEM KILL SESSION <i>'int1</i>, <i>int2'</i> [POST TRANSACTION] [IMMEDIATE]
   ALTER SYSTEM DISCONNECT SESSION '<i>int1</i>, <i>int2</i>' [IMMEDIATE]
   ALTER SYSTEM SET <i>parameter </i>= <i>value</i> [COMMENT 'text'] [DEFERRED] [<i>Scope_options</i>]
   ALTER SYSTEM RESET <i>parameter(s) </i>[<i>scope_options</i>]
   ALTER SYSTEM QUIESCE RESTRICTED<br>   ALTER SYSTEM UNQUIESCE

SET Parameters:
<a href="syntax-initora.html">   Full list of Static and dynamic parameters.</a>

<i>   Scope_options:</i>
   SCOPE = {MEMORY|SPFILE|BOTH} [SID = 'sid' [,SID =…]]

   DEFERRED - Set parameter values for future connecting sessions.
              Currently active sessions are not affected and they retain the old parameter value.
              This is required for parameters that have the ISSSYS_MODIFIABLE =DEFERRED (in <a href="../orav/V$PARAMETER.html">V$PARAMETER</a>) 
              This is optional for parameters that have the ISSSYS_MODIFIABLE =IMMEDIATE (in V$PARAMETER)
              For static parameters, DEFERRED cannot be specified.

   COMMENT text is visible in the UPDATE_COMMENT column of <a href="../orav/V$SPPARAMETER.html">V$SpPARAMETER</a>

   The SID clause is for RAC, where it's possible to change a parameter value for one instance only.
   SID= '*' will affect all instances on the cluster
   If the instance is started with an SpFILE the default = * (all instances)
   If the instance is started with a PFILE then default SID = the current instance.</pre>
<p><b>Quiesce</b></p>
<p>Putting the database into a quiesced state will prevent inactive user sessions from becoming active, Oracle then waits for existing transactions to finish. In shared server mode, Oracle will also block user logins.<br>
This allows SYS/SYSTEM to perform some maintenance tasks without a full shutdown. </p>
<p><b>Notes<br>
</b>All Byte values can also be specified in K or M or G </p>
<p>e.g. you can enter 8388608 or 8192 <b>K</b> or 8<b>M</b></p>
<p>All directory paths follow standard notation i.e UNIX 'quotes' or Windows "double quotes"</p>
<p><i class="quote">"An expert is someone who knows some of the worst mistakes that can be made in his subject and how to avoid them" ~ Werner Heisenberg </i> <b><br>
<br>
Related:<br>
</b> <a href="database_a.html"><br>
ALTER DATABASE</a><br>
<a href="session_a.html"> ALTER SESSION</a><br>
<a href="transaction_s.html">SET TRANSACTION</a>  <br>
<a href="startup.html">STARTUP</a> <br>
<a href="syntax-initora.html">Full list of Static &amp; Dynamic Parameters</a> - init.ora<br>
<a href="http://www.orafaq.com/parms/">Server Parameters</a> - 
OraFaq.com <br>
<b><br>
</b><b>Related Views:</b></p>
<pre> <a href="../orad/DBA_DATA_FILES.html">DBA_DATA_FILES</a>
 <a href="../orav/V$ARCHIVE.html">V$ARCHIVE</a>
 <a href="../orav/V$ARCHIVED_LOG.html">V$ARCHIVED_LOG</a>
 <a href="../orav/V$ARCHIVE_DEST.html">V$ARCHIVE_DEST</a>
 <a href="../orav/V$ARCHIVE_PROCESSES.html">V$ARCHIVE_PROCESSES</a>
 <a href="../orav/V$PARAMETER.html">V$PARAMETER</a>
 <a href="../orav/V$SPPARAMETER.html">V$SpPARAMETER</a>
 <a href="../orav/V$SHARED_POOL_RESERVED.html">V$SHARED_POOL_RESERVED</a> 
 <a href="../orav/V$SESSION.html">V$SESSION</a>
</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="system_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

