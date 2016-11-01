---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_2PC_PENDING</h1><p>info about distributed transactions awaiting recovery. 
</p><pre>Columns
   ___________________________
 
   LOCAL_TRAN_ID
      string of form: n.n.n,n a number
   GLOBAL_TRAN_ID
      globally unique transaction id
   STATE
      collecting,prepared,committed,forced commit or forced rollback
   MIXED
      yes = of the transaction committed and part rolled back (commit or rollback with the FORCE option was used)
   ADVICE
      C for commit,R for rollback,else null
   TRAN_COMMENT
      "text for "commit
   FAIL_TIME
      value of SYSDATE when the row was inserted (tx or system recovery)
   FORCE_TIME
      time of manual force decision (null if not forced locally)
   RETRY_TIME
      time automatic recovery (RECO) last tried to recover the transaction
   OS_USER
      operating system specific name for the end-user
   OS_TERMINAL
      operating system specific name for the end-user terminal
   HOST
      name of the host machine for the end-user
   DB_USER
      Oracle user name of the end-user at the topmost database
   COMMIT#
      global commit number for committed transactions
</pre>
<p><b>Related:</b></p>
<p> <a href="DBA_2PC_NEIGHBORS.html">DBA_2PC_NEIGHBORS</a><br>
DBA_PROXIES<br>
<a href="DBA_DB_LINKS.html">DBA_DB_LINKS</a><br>
<a href="DBA_PENDING_TRANSACTIONS.html">DBA_PENDING_TRANSACTIONS</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

