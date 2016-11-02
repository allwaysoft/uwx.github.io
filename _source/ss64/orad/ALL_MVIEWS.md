---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_MVIEWS </h1><p> All materialized views in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the materialized view
   MVIEW_NAME
      Name of the materialized view
   CONTAINER_NAME
      Name of the materialized view container table
   QUERY
      The defining query that the materialized view instantiates
   QUERY_LEN
      The number of bytes in the defining query (based on the server character set
   UPDATABLE
      Indicates whether the materialized view can be updated
   UPDATE_LOG
      Name of the table that logs changes to an updatable materialized view
   MASTER_ROLLBACK_SEG
      Name of the rollback segment to use at the master site
   MASTER_LINK
      Name of the database link to the master site
   REWRITE_ENABLED
      Indicates whether rewrite is enabled for the materialized view 
   REWRITE_CAPABILITY
      Indicates the kind of rewrite that is enabled
   REFRESH_MODE
      Indicates how and when the materialized view will be refreshed
   REFRESH_METHOD
      The default refresh method for the materialized view (complete,fast,...)
   BUILD_MODE
      How and when to initially build (load) the materialized view container
   FAST_REFRESHABLE
      Indicates the kinds of operations that can be fast refreshed for the MV
   LAST_REFRESH_TYPE
      Indicates the kind of refresh that was last performed on the MV
   LAST_REFRESH_DATE
      The date that the materialized view was last refreshed
   STALENESS
      Indicates the staleness state of the materialized view (fresh,stale,...)
   AFTER_FAST_REFRESH
      Indicates the staleness state the MV will have after a fast refresh is done
   UNKNOWN_PREBUILT
      Indicates if the materialized view is prebuilt
   UNKNOWN_PLSQL_FUNC
      Indicates if the materialized view contains PL/SQL function
   UNKNOWN_EXTERNAL_TABLE
      Indicates if the materialized view contains external tables
   UNKNOWN_CONSIDER_FRESH
      Indicates if the materialized view is considered fresh
   UNKNOWN_IMPORT
      Indicates if the materialized view is imported
   COMPILE_STATE
      Indicates the validity of the MV meta-data
   USE_NO_INDEX
      Indicates whether the MV uses no index

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_MVIEWS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

