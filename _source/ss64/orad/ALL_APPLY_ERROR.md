---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_APPLY_ERROR </h1><p> Error transactions that were generated after dequeuing from the queue visible to the current user </p> 
 
<pre>Columns
   ___________________________
 
   APPLY_NAME
      Name of the apply process at the local site which processed the transaction
   QUEUE_NAME
      Name of the queue at the local site where the transaction came from
   QUEUE_OWNER
      Owner of the queue at the local site where the transaction came from
   LOCAL_TRANSACTION_ID
      Local transaction ID for the error creation transaction
   SOURCE_DATABASE
      Database where the transaction originated
   SOURCE_TRANSACTION_ID
      Original transaction ID at the source database
   SOURCE_COMMIT_SCN
      Original commit SCN for the transaction at the source database
   MESSAGE_NUMBER
      Identifier for the message in the transaction that raised an error
   ERROR_NUMBER
      Error number
   ERROR_MESSAGE
      Error message
   RECIPIENT_ID
      User ID of the original recipient
   RECIPIENT_NAME
      Name of the original recipient
   MESSAGE_COUNT
      Total number of messages inside the error transaction

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_APPLY_ERROR.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

