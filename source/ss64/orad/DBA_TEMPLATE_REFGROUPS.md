---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_TEMPLATE_REFGROUPS </h1><p> Table for maintaining refresh group information for template. </p> 
 
<pre>Columns
   ___________________________
 
   REFRESH_GROUP_ID
      Internal primary key of the refresh groups table.
   REFRESH_GROUP_NAME
      Name of the refresh group
   REFRESH_TEMPLATE_ID
      Primary key of the template containing the refresh group.
   REFRESH_TEMPLATE_NAME
      Name of the deployment template containing the refresh group.
   ROLLBACK_SEG
      Name of the rollback segment to use during refresh.
   START_DATE
      Refresh start date.
   INTERVAL
      Refresh interval.

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_TEMPLATE_REFGROUPS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

