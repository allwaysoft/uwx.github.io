---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_HS_PASSTHROUGH</h1> 
<p>Send a statement directly to a non-Oracle system without being 
  interpreted by the Oracle server</p>
<pre>Subprocedures:
BIND_VARIABLE         Bind an IN variable positionally with a PL/SQL program variable. 

BIND_VARIABLE_RAW     Bind IN variables of type RAW. 

BIND_OUT_VARIABLE     Bind an OUT variable with a PL/SQL program variable. 

BIND_OUT_VARIABLE_RAW Bind an OUT variable of datatype RAW with a PL/SQL program variable. 

BIND_INOUT_VARIABLE   Bind IN OUT bind variables. 

BIND_INOUT_VARIABLE_RAW  Bind IN OUT bind variables of datatype RAW. 

CLOSE_CURSOR          Close a cursor and release associated memory after the
                      SQL statement has been run at the non-Oracle system. 

EXECUTE_IMMEDIATE   Run a (non-SELECT) SQL statement immediately, without bind variables. 

EXECUTE_NON_QUERY   Function Runs a (non-SELECT) SQL statement. 

FETCH_ROW Function  Fetches rows from a query. 

GET_VALUE           Retrieves column value from SELECT statement, or retrieve
                    OUT bind parameters. 

GET_VALUE_RAW       Similar to GET_VALUE, but for datatype RAW. 

OPEN_CURSOR Function  Open a cursor for running a passthrough SQL statement at
                      the non-Oracle system. 

PARSE               Parses SQL statement at non-Oracle system.  
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:</b></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_HS_PASSTHROUGH.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

