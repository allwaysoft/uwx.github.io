---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_SUMMARIES </h1><p> Description of the summaries accessible to the user </p> 
 
<pre>Columns
   ___________________________
 
   SUMMARY_NAME
      Name of the summary
   CONTAINER_OWNER
      Owner of the container table
   CONTAINER_NAME
      Name of the container table for this summary
   LAST_REFRESH_SCN
      The SCN of the last transaction to refresh the summary
   LAST_REFRESH_DATE
      The date of the last refresh of the summary
   REFRESH_METHOD
      User declared method of refresh for the summary
   SUMMARY
      Indicates the presence of either aggregation or a GROUP BY
   FULLREFRESHTIM
      The time that it took to fully refresh the summary
   INCREFRESHTIM
      The time that it took to incrementally refresh the summary
   CONTAINS_VIEWS
      This summary contains views in the FROM clause
   UNUSABLE
      This summary is unusable,the build was deferred
   RESTRICTED_SYNTAX
      This summary contains restrictive syntax
   INC_REFRESHABLE
      This summary is not restricted from being incrementally refreshed
   KNOWN_STALE
      This summary is directly stale
   QUERY_LEN
      --
   QUERY
      --

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_SUMMARIES.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

