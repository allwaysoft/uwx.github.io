---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_RESUMABLE</h1> 
<p>Allows you to <i>suspend</i> large operations that run out of 
  space (or reach space limit) after executing for a long time, fix the problem, 
  and make the statement <i>resume</i> execution.</p>
<pre>Subprocedures:

ABORT                Abort a suspended resumable space allocation. 

GET_SESSION_TIMEOUT Function
                     Get the current timeout value of the resumable space allocations
                     for a session with session_id. 

SET_SESSION_TIMEOUT  Set the timeout of resumable space allocations 
                     for a session with session_id. 

GET_TIMEOUT Function
                     Get the current timeout value of resumable space allocations
                     for the current session. 

SET_TIMEOUT          Set the timeout of resumable space allocations
                     for the current session. 

SPACE_ERROR_INFO Function
                     Look for space-related errors in the error stack.
                     If it cannot find a space-related error, it will return FALSE.  </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i><b><br>
</b></span></p>
<pre><span class="body"><b>Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_RESUMABLE.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

