---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DEFSCHEDULE </h1><p> Information about propagation to different destinations </p> 
 
<pre>Columns
   ___________________________
 
   DBLINK
      Destination
   JOB
      Number of job that pushes queue
   INTERVAL
      Function used to calculate the next time to push the queue to destination
   NEXT_DATE
      Next date that job is scheduled to be executed
   LAST_DATE
      Last time queue was (attempted to be) pushed to destination
   DISABLED
      Is propagation to destination disabled
   LAST_TXN_COUNT
      Number of transactions pushed during last attempt
   LAST_ERROR_NUMBER
      Oracle error number from last push
   LAST_ERROR_MESSAGE
      Error message from last push
   CATCHUP
      Used to break transaction into pieces
   TOTAL_TXN_COUNT
      Total number of transactions propagated (including error transactions)
   AVG_THROUGHPUT
      Average number of transactions (including errors) propagated per second
   AVG_LATENCY
      Average time in seconds since start of transaction to remote commit
   TOTAL_BYTES_SENT
      Total number of bytes sent over SQL*Net during propagation
   TOTAL_BYTES_RECEIVED
      Total number of bytes received over SQL*Net during propagation
   TOTAL_ROUND_TRIPS
      Total number of SQL*Net round trips during propagation
   TOTAL_ADMIN_COUNT
      Total number of administrative requests
   TOTAL_ERROR_COUNT
      Total number of error transactions propagated
   TOTAL_SLEEP_TIME
      Total time in seconds spent sleeping during propagation
   DISABLED_INTERNALLY_SET
      disabled was set internally for propagation synchronization

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DEFSCHEDULE.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

