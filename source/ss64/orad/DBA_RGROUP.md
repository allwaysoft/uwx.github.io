---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_RGROUP </h1><p> All refresh groups. This view is not a join. </p> 
 
<pre>Columns
   ___________________________
 
   REFGROUP
      Internal identifier of refresh group
   OWNER
      Owner of the refresh group
   NAME
      Name of the refresh group
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
   PURGE_OPTION
      The method for purging the transaction queue after each push
   PARALLELISM
      The level of parallelism for transaction propagation
   HEAP_SIZE
      The heap size used for transaction propagation</pre>
<p><b>Related:</b></p>
<p><a href="DBA_RCHILD.html">DBA_RCHILD</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_RGROUP.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

