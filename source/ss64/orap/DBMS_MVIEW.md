---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_MVIEW</h1> 
<p>Refresh materialized views (MVIEWS), purge logs and understand 
  the capabilities of an mview.</p>
<pre>Subprocedures:

BEGIN_TABLE_REORGANIZATION 
                 Perform a process to preserve materialized view data needed
                 for refresh. 

END_TABLE_REORGANIZATION 
                 Ensure that the materialized view data for the master table
                 is valid and that the master table is in the proper state. 

EXPLAIN_MVIEW    Explain what is possible with a materialized view or potential
                 materialized view. 

EXPLAIN_REWRITE  Explain why a query failed to rewrite. 

I_AM_A_REFRESH Function
                 Return the value of the I_AM_REFRESH package state. 

PMARKER Function
                 Return a partition marker from a rowid. This function is used
                 for Partition Change Tracking (PCT). 

PURGE_DIRECT_LOAD_LOG 
                 Purge rows from the direct loader log after they are no longer
                 needed by any materialized view (used with data warehousing). 

PURGE_LOG        Purge rows from the materialized view log. 

PURGE_MVIEW_FROM_LOG 
                 Purge rows from the materialized view log. 

REFRESH          Consistently refresh one or more materialized views that are
                 not members of the same refresh group. 

REFRESH_ALL_MVIEWS 
                 Refresh all materialized views that do not reflect changes
                 to their master table or master materialized view. 

REFRESH_DEPENDENT 
                 Refresh all table-based materialized views that depend on
                 a specified master table or master materialized view, or list of
                 master tables or master materialized views.  

REGISTER_MVIEW   Administer an mview.  

UNREGISTER_MVIEW Unregister an mview.
                 Invoked at a master site or master mview site
                   
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br></b></span></pre>
<p><span class="body"><b>Related Views:</b></span> </p>
<pre> <a href="../orad/DBA_MVIEWS.html">DBA_MVIEWS</a>           <a href="../orad/ALL_MVIEWS.html">ALL_MVIEWS</a>           <a href="../orad/USER_MVIEWS.html">USER_MVIEWS</a> 
 <a href="../orad/DBA_MVIEW_AGGREGATES.html">DBA_MVIEW_AGGREGATES</a> <a href="../orad/ALL_MVIEW_AGGREGATES.html">ALL_MVIEW_AGGREGATES</a> <a href="../orad/USER_MVIEW_AGGREGATES.html">USER_MVIEW_AGGREGATES</a> 
 <a href="../orad/DBA_MVIEW_ANALYSIS.html">DBA_MVIEW_ANALYSIS</a>   <a href="../orad/ALL_MVIEW_ANALYSIS.html">ALL_MVIEW_ANALYSIS</a>   <a href="../orad/USER_MVIEW_ANALYSIS.html">USER_MVIEW_ANALYSIS</a> 
 <a href="../orad/DBA_MVIEW_DETAIL_RELATIONS.html">DBA_MVIEW_DETAIL_RELATIONS</a> <a href="../orad/ALL_MVIEW_DETAIL_RELATIONS.html">ALL_MVIEW_DETAIL_RELATIONS</a> <a href="../orad/USER_MVIEW_DETAIL_RELATIONS.html">USER_MVIEW_DETAIL_RELATIONS</a> 
 <a href="../orad/DBA_MVIEW_JOINS.html">DBA_MVIEW_JOINS</a>      <a href="../orad/ALL_MVIEW_JOINS.html">ALL_MVIEW_JOINS</a>      <a href="../orad/USER_MVIEW_JOINS.html">USER_MVIEW_JOINS</a> 
 <a href="../orad/DBA_MVIEW_KEYS.html">DBA_MVIEW_KEYS</a>       <a href="../orad/ALL_MVIEW_KEYS.html">ALL_MVIEW_KEYS</a>       <a href="../orad/USER_MVIEW_KEYS.html">USER_MVIEW_KEYS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_MVIEW.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

