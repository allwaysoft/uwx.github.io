---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>SHUTDOWN</h1> 
<p>Shutdown a database instance.<br>
  This is a SQL*Plus command (not part of standard SQL)<br>
  <br>
  Syntax:</p>
<pre>   SHUTDOWN ABORT

   SHUTDOWN IMMEDIATE

   SHUTDOWN TRANSACTIONAL [LOCAL]

   SHUTDOWN NORMAL

key:
   ABORT
              The fastest possible shutdown of the database without waiting for
              calls to complete or users to disconnect.
              Uncommitted transactions are not rolled back.
              Client SQL statements currently being processed are terminated.
              All users currently connected to the database are implicitly disconnected
              and the next database startup will require instance recovery.

              You must use this option if a background process terminates abnormally.

   IMMEDIATE
              Does not wait for current calls to complete or users to disconnect from
              the database.
              Further connects are prohibited.
              The database is closed and dismounted.
              The instance is shutdown and no instance recovery is required on the next database startup.

   NORMAL
              NORMAL is the default option which waits for users to disconnect from
              the database.
              Further connects are prohibited.
              The database is closed and dismounted.
              The instance is shutdown and no instance recovery is required on the next database startup.

   TRANSACTIONAL [LOCAL]

              A planned shutdown of an instance, allowing active transactions to complete first.
              It prevents clients from losing work without requiring all users to log off.
              No client can start a new transaction on this instance.
              Attempting to start a new transaction results in disconnection.
              After completion of all transactions, any client still connected to
              the instance is disconnected.
              Now the instance shuts down (SHUTDOWN IMMEDIATE).
              The next startup of the database will not require any instance recovery procedures.

              The LOCAL mode specifies a transactional shutdown on the local instance only,
              so that it only waits on local transactions to complete, not all transactions.
              This is useful, for example, for scheduled outage maintenance.
</pre>
<p><span class="quote"><i>"Never appeal to a man's "better nature." He may not have one.
Invoking his self-interest gives you more leverage." ~ Lazarus Long</i></span><b><br>
<br>
Related Commands:<br>
</b> <a href="database_a.html"><br>
ALTER DATABASE</a> MOUNT | OPEN<br>
<a href="session_a.html"> ALTER SESSION</a> CLOSE DATABASE LINK <br>
<a href="system_a.html">ALTER SYSTEM</a> disable restricted session <br>
<a href="system_a.html">ALTER SYSTEM</a> kill session <br>
<a href="startup.html">STARTUP</a> <br>
<br>
<b>Related Views:</b></p>
<pre>   <a href="../orad/DBA_PENDING_TRANSACTIONS.html">DBA_PENDING_TRANSACTIONS</a> 
   <a href="../orad/DBA_JOBS_RUNNING.html">DBA_JOBS_RUNNING</a>  
   <a href="../orav/V$SESSION.html">V$SESSION</a>

</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

