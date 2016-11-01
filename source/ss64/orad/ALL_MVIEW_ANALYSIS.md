---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_MVIEW_ANALYSIS </h1><p> Description of the materialized views accessible to the user </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the materialized view
   MVIEW_NAME
      Name of the materialized view
   MVIEW_TABLE_OWNER
      Owner of the container table
   CONTAINER_NAME
      Name of the container table for this materialized view
   LAST_REFRESH_SCN
      The SCN of the last transaction to refresh the materialized view
   LAST_REFRESH_DATE
      The date of the last refresh of the materialized view
   REFRESH_METHOD
      User declared method of refresh for the materialized view
   SUMMARY
      Indicates if the materialized view includes the GROUP BY clause
   FULLREFRESHTIM
      The time that it took to fully refresh the materialized view
   INCREFRESHTIM
      The time that it took to incrementally refresh the materialized view
   CONTAINS_VIEWS
      This materialized view contains views in the FROM clause
   UNUSABLE
      This materialized view is unusable,the build was deferred
   RESTRICTED_SYNTAX
      This materialized view contains restrictive syntax
   INC_REFRESHABLE
      This materialized view is not restricted from being incrementally refreshed
   KNOWN_STALE
      This materialized view is directly stale
   INVALID
      Invalidity of the materialized Y = INVALID,N = VALID
   REWRITE_ENABLED
      This materialized view is enabled for query rewrite
   QUERY_LEN
      The length (in bytes) of the query field
   QUERY
      SELECT expression of the materialized view definition
   REVISION
      Reserved for internal use

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_MVIEW_ANALYSIS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

