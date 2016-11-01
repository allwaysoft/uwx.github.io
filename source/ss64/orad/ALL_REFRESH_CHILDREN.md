---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_REFRESH_CHILDREN </h1><p> 
</p><p>All the objects in refresh groups, where the user can touch the group </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the object in the refresh group
   NAME
      Name of the object in the refresh group
   TYPE
      Type of the object in the refresh group
   ROWNER
      Name of the owner of the refresh group
   RNAME
      Name of the refresh group
   REFGROUP
      Internal identifier of refresh group
   IMPLICIT_DESTROY
      Y or N,if Y then destroy the refresh group when its last item is subtracted
   PUSH_DEFERRED_RPC
      Y or N,if Y then push changes from snapshot to master before refresh
   REFRESH_AFTER_ERRORS
      If Y,proceed with refresh despite error when pushing deferred RPCs
   ROLLBACK_SEG
      Name of the rollback segment to use while refreshing
   JOB
      Identifier of job used to automatically refresh the group
   NEXT_DATE
      Date that this job will next be automatically refreshed,if not broken
   INTERVAL
      A date function used to compute the next NEXT_DATE
   BROKEN
      Y or N,Y is the job is broken and will never be run
   PURGE_OPTION
      The method for purging the transaction queue after each push
   PARALLELISM
      The level of parallelism for transaction propagation
   HEAP_SIZE
      The heap size used for transaction propagation ALL_REFRESH_DEPENDENCIES

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_REFRESH_CHILDREN.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

