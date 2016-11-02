---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_LOGMNR_CDC_PUBLISH</h1> 
<p>Change Data Capture (CDC) identifies data in relational tables 
  that has been added to, modified, or removed and publishes the changed data 
  in a form that is usable by an application.</p>
<pre>Subprocedures:

CREATE_CHANGE_TABLE  Create a change table in a specified schema and
                     create corresponding Change Data Capture metadata. 

ALTER_CHANGE_TABLE   Add or drop columns for an existing change table,
                     or change the properties of an existing change table. 

DROP_SUBSCRIBER_VIEW Allow the publisher to drop a subscriber view from the
                     subscriber's schema. The view must have been created by
                     a prior call to the PREPARE_SUBSCRIBER_VIEW procedure. 

DROP_SUBSCRIPTION    Allow a publisher to drop a subscription that was created
                     with a prior call to the GET_SUBSCRIPTION_HANDLE procedure. 

DROP_CHANGE_TABLE    Drop an existing change table when there is no more activity
                     on the table. 

PURGE                Monitor usage by all subscriptions, determine which rows are
                     no longer needed by subscriptions, and remove the unneeded
                     rows to prevent change tables from growing endlessly. 
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br></b><br><a href="DBMS_LOGMNR_CDC_SUBSCRIBE.html">DBMS_LOGMNR_CDC_SUBSCRIBE</a></span></pre>
<pre><span class="body"><b>Related Views:<br><br></b></span><a href="../orav/V$LOG.html">V$LOG</a> 
<a href="../orav/V$LOGFILE.html">V$LOGFILE</a> 
<a href="../orav/V$LOGHIST.html">V$LOGHIST</a> 
<a href="../orav/V$LOGMNR_CONTENTS.html">V$LOGMNR_CONTENTS</a> 
<a href="../orav/V$LOGMNR_DICTIONARY.html">V$LOGMNR_DICTIONARY</a> 
<a href="../orav/V$LOGMNR_LOGS.html">V$LOGMNR_LOGS</a> 
<a href="../orav/V$LOGMNR_PARAMETERS.html">V$LOGMNR_PARAMETERS</a> 
<a href="../orav/V$LOG_HISTORY.html">V$LOG_HISTORY</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_LOGMNR_CDC_PUBLISH.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

