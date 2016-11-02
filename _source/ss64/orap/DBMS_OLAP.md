---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_OLAP</h1> 
<p>Mview analysis and advisory functions, some of the procedures 
  generate output tables. </p>
<pre>Subprocedures:

ADD_FILTER_ITEM  Filter the contents being used during the recommendation process. 

CREATE_ID        Generate an internal ID used by a new workload collection,
                 a new filter, or a new advisor run 

ESTIMATE_MVIEW_SIZE 
                 Estimate the size of an mview that you might create, in bytes
                 and rows. 

EVALUATE_MVIEW_STRATEGY
                 Measure the utilization of each existing mview. 

GENERATE_MVIEW_REPORT
                 Generate an HTML-based report on the given Advisor run 

GENERATE_MVIEW_SCRIPT  
                 Generate a simple script containing the SQL commands to
                 implement Summary Advisor recommendations 

LOAD_WORKLOAD_CACHE
                 Obtain a SQL cache workload. 

LOAD_WORKLOAD_TRACE
                 Load a workload collected by Oracle Trace. 

LOAD_WORKLOAD_USER 
                 Loads a user-defined workload. 

PURGE_FILTER     Delete a specific filter or all filters. 

PURGE_RESULTS    Remove all results or those for a specific run. 

PURGE_WORKLOAD   Delete all workloads or a specific collection. 

RECOMMEND_MVIEW_STRATEGY
                 Generate a set of recommendations about which mviews
                 should be created, retained, or dropped. 

SET_CANCELLED
                 Stop the Advisor if it takes too long returning results. 

VALIDATE_DIMENSION 
                 Verify that the relationships specified in a dimension
                 are correct. 

VALIDATE_WORKLOAD_CACHE 
                 Validate the SQL Cache workload before performing load operations 

VALIDATE_WORKLOAD_TRACE 
                 Validate the Oracle Trace workload before performing
                 load operations 

VALIDATE_WORKLOAD_USER
                 Validate the user-supplied workload before performing
                 load operations  
<span class="body"><b><br></b>For full documentation of the packaged procedures above see the Oracle Manual:<br>"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br><br></b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> <i>by Steven Feuerstein et al</i><b></b><b><br>
Related Commands:<br></b><br></span></pre>
<p><span class="body"><b>Related Packages:</b></span> </p>
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

