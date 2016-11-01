---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_2PC_NEIGHBORS</h1> 
 <p> information about incoming and outgoing connections for pending transactions.</p> 
 
<pre>Columns
   ___________________________
 
   LOCAL_TRAN_ID
      --
   IN_OUT
      "in" for incoming connections,"out" for outgoing
   DATABASE
      in: client database name; out: outgoing db link
   DBUSER_OWNER
      in: name of local user; out: owner of db link
   INTERFACE
      "C" for request commit,else "N" for prepare or request readonly commit
   DBID
      the database id at the other end of the connection
   SESS#
      session number at this database of the connection 
   BRANCH
      transaction branch ID at this database of the connection</pre>
<p><b>Related:</b></p>
<p><a href="DBA_2PC_PENDING.html">DBA_2PC_PENDING</a><br>
DBA_PROXIES<br>
<a href="DBA_DB_LINKS.html">DBA_DB_LINKS</a><br>
<a href="DBA_PENDING_TRANSACTIONS.html">DBA_PENDING_TRANSACTIONS</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_2PC_NEIGHBORS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

