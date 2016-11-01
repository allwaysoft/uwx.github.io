---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_LOGSTDBY_EVENTS </h1><p> Information on why logical standby events </p> 
 
<pre>Columns
   ___________________________
 
   EVENT_TIME
      Time the event took place
   CURRENT_SCN
      Change vector SCN for the change
   COMMIT_SCN
      SCN for the commit record of the transaction
   XIDUSN
   XIDSLT
   XIDSQN
   EVENT
      A SQL statement or other text describing the event
   STATUS_CODE
      A number describing the event
   STATUS
      A text string describing the event
</pre>
<p><b>Related:</b></p>
<p><a href="DBA_LOGSTDBY_SKIP_TRANSACTION.html">DBA_LOGSTDBY_SKIP_TRANSACTION</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_LOGSTDBY_EVENTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

