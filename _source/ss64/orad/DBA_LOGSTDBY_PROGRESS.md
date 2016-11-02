---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_LOGSTDBY_PROGRESS </h1><p> List the SCN values describing read and apply progress </p> 
 
<pre>Columns
   ___________________________
 
   APPLIED_SCN
   APPLIED_TIME
      Estimate of the time the applied_scn was generated
   READ_SCN
      All log data greater than this SCN has been preserved in the database
   READ_TIME
      Estimate of the time the read_scn was generated
   NEWEST_SCN
      The most recent SCN available on standby.
   NEWEST_TIME
      Estimate of the time the newest_scn was generated

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_LOGSTDBY_PROGRESS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

