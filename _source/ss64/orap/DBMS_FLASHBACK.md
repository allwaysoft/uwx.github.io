---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_FLASHBACK</h1> 
<p> Flash back to a version of the database at a specific time or 
  a specific System Change Number (SCN)</p>
<pre>Subprocedures:

ENABLE_AT_TIME   This procedure enables Flashback for the entire session.
                 The snapshot time is set to the SCN that most closely
                 matches the time specified in query_time. 

ENABLE_AT_SYSTEM_CHANGE_NUMBER 
                 Takes an SCN as an Oracle number and sets the session 
                 snapshot to the specified number.
                 Inside the Flashback mode, all queries will return data
                 consistent as of the specified wall-clock time or SCN. 

GET_SYSTEM_CHANGE_NUMBER Function
                 Returns the current SCN as an Oracle number.
                 You can use the SCN to store specific snapshots. 

DISABLE          Disables the Flashback mode for the entire session.  
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b><br><br></b><i>"Knife the baby" - Christopher Phillips, Microsoft Executive</i><b><br>
Related Commands:<br><br></b><a href="../ora/rollback.html">ROLLBACK</a></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<pre><a href="../orav/V$TRANSACTION.html">V$TRANSACTION</a> 
<a href="../orav/V$TRANSACTION_ENQUEUE.html">V$TRANSACTION_ENQUEUE</a>
<a href="../orav/V$GLOBAL_TRANSACTION.html">V$GLOBAL_TRANSACTION</a> </pre>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

