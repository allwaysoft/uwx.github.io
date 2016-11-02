---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>SET TRANSACTION</h1> 
<p>Modify properties for the current transaction.<br>
  <br>
  Syntax:</p>
<pre>   SET TRANSACTION READ ONLY [NAME '<i>text</i>']
   SET TRANSACTION READ WRITE [NAME '<i>text</i>']
   SET TRANSACTION ISOLATION LEVEL {SERIALIZABLE | <u>READ COMMITTED</u>} [NAME '<i>text</i>']
   SET TRANSACTION USE ROLLBACK SEGMENT <i>rb_segment </i>[NAME '<i>text</i>']</pre>
<p> If used, this should be the first statement in the transaction,  the transaction ends with either a COMMIT or ROLLBACK statement. Data definition language (DDL) statements within a transaction will cause an implicit commit of the transaction.</p>
<p>READ ONLY= transaction-level <a href="syntax-locking.html">read consistency</a>, all subsequent queries will only see changes committed before the transaction began. </p>
<p>READ WRITE = statement-level <a href="syntax-locking.html">read consistency</a></p>
<p>READ COMMITTED = Oracle waits for Locks to be released </p>
<p>SERIALIZABLE = Oracle does not wait for Locks to be released (statement fails) </p>
<p><b>Related Commands:<br>
  <br>
  </b> <a href="system_a.html">ALTER SYSTEM</a> ENABLE RESTRICTED SESSION <br>
  <a href="system_a.html">ALTER SYSTEM</a> SET ISOLATION_LEVEL = {SERIALIZABLE | <u>READ COMMITTED</u>}  <br>
  <a href="session_a.html">ALTER SESSION<br>
  </a><a href="commit.html">COMMIT</a><br>
  <a href="rollback.html">ROLLBACK</a><a href="session_a.html"> </a><br>
  <b><br>
  </b><b>Related Views:</b></p>
<pre> <a href="../orad/DBA_PENDING_TRANSACTIONS.html">DBA_PENDING_TRANSACTIONS</a>
                                           <a href="../orad/USER_RESOURCE_LIMITS.html">USER_RESOURCE_LIMITS</a>
 <a href="../orad/DBA_ROLLBACK_SEGS.html">DBA_ROLLBACK_SEGS</a>
 <a href="../orav/V$SESSION.html">V$SESSION</a>
 <a href="../orav/V$TRANSACTION.html">V$TRANSACTION</a>
 <a href="../orav/V$TRANSACTION_ENQUEUE.html">V$TRANSACTION_ENQUEUE</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="transaction_s.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

