---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_LOGMNR</h1> 
<p>LogMiner allows you to make queries based on actual changes made 
  to table data. This allows you to analyze system behavior and to perform auditing 
  tasks. </p>
<pre>Subprocedures:

ADD_LOGFILE   Add a file to the existing or newly created list of
              archive files to process. 

START_LOGMNR  Initialize the LogMiner utility. 

END_LOGMNR    Finish a LogMiner session. 

MINE_VALUE Function
              This function may be called for any row returned from
              V$LOGMNR_CONTENTS to retrieve the undo or redo column value
              of the column specified by the column_name input parameter to this function. 

COLUMN_PRESENT Function
              This function may be called for any row returned from
              V$LOGMNR_CONTENTS to determine if undo or redo column values exist
              for the column specified by the column_name input parameter to this function. 
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Views:<br><br></b></span><a href="../orav/V$LOG.html">V$LOG</a> 
<a href="../orav/V$LOGFILE.html">V$LOGFILE</a> 
<a href="../orav/V$LOGHIST.html">V$LOGHIST</a> 
<a href="../orav/V$LOGMNR_CONTENTS.html">V$LOGMNR_CONTENTS</a> 
<a href="../orav/V$LOGMNR_DICTIONARY.html">V$LOGMNR_DICTIONARY</a> 
<a href="../orav/V$LOGMNR_LOGS.html">V$LOGMNR_LOGS</a> 
<a href="../orav/V$LOGMNR_PARAMETERS.html">V$LOGMNR_PARAMETERS</a> 
<a href="../orav/V$LOG_HISTORY.html">V$LOG_HISTORY</a> </pre>
<p><a href="../orav/V$LOGMNR_CONTENTS.html"><span class="body"></span></a><span class="body"><b>Related 
  Packages:</b></span> </p>
<p><span class="body"><br>
  </span></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_LOGMNR.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

