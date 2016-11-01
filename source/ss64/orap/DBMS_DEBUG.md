---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_DEBUG</h1> 
<p>This API is primarily intended to implement server-side debuggers 
  and it provides a way to debug server-side PL/SQL program units. </p>
<pre>Subprocedures and functions:

PROBE_VERSION         Return the version number of DBMS_DEBUG on the server. 

SELF_CHECK            Perform an internal consistency check. 

SET_TIMEOUT Function  Set the timeout value. 

INITIALIZE Function   Set debugID in target session. 

DEBUG_ON              Turns debug-mode on. 

DEBUG_OFF             Turns debug-mode off. 

ATTACH_SESSION        Notify the debug session about the target debugID. 

SYNCHRONIZE Function  Wait for program to start running. 

SHOW_SOURCE           Fetch program source. 

PRINT_BACKTRACE       Print a stack backtrace. 

CONTINUE Function     Continue execution of the target program. 

SET_BREAKPOINT Function     Set a breakpoint in a program unit. 

DELETE_BREAKPOINT Function  Delete a breakpoint. 

DISABLE_BREAKPOINT Function Disable a breakpoint. 

ENABLE_BREAKPOINT Function  Activate an existing breakpoint. 

SHOW_BREAKPOINTS            Return a listing of the current breakpoints. 

GET_VALUE Function          Get a value from the currently-running program. 

SET_VALUE Function          Set a value in the currently-running program. 

DETACH_SESSION              Stops debugging the target program. 

GET_RUNTIME_INFO Function   Return information about the current program. 

GET_INDEXES Function        Return the set of indexes for an indexed table. 

EXECUTE                     Executes SQL or PL/SQL in the target session.  
</pre><p><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b><br></b><i><br>
  "..an understanding of Visual Basic would be advantageous although not to a 
  programming level." - Job Advert for an Oracle programmer</i><b><br>
  <br>
Related Commands:<br>
  </b><br>
  <br>
</p><p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_DEBUG.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

