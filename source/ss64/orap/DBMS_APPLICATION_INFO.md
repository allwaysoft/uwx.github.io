---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_APPLICATION_INFO</h1> 
<p>Record the name of an executing module (or transaction) in the 
  database for later use with Oracle Trace and the SQL trace facility.</p>
<pre>Subprocedures:

SET_MODULE          Set the name of the module that is currently
                    running to a new module. 

SET_ACTION          Set the name of the current action
                    within the current module. 

READ_MODULE         Read the values of the module and
                    action fields of the current session. 

SET_CLIENT_INFO     Set the client info field of the session. 

READ_CLIENT_INFO    Read the value of the client_info field of
                    the current session. 

SET_SESSION_LONGOPS Set a row in the V$SESSION_LONGOP table. </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related Commands:<br></b><br>    Application info can be pushed into <a href="../orav/V$SESSION.html">V$SESSION</a>/<a href="../orav/V$SESSION_LONGOPS.html">V$SESSION_LONGOPS</a></span></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_APPLICATION_INFO.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

