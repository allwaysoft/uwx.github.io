---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_REGISTERED_SNAPSHOTS </h1><p> Remote snapshots of local tables that the user can see </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the snapshot
   NAME
      The name of the snapshot
   SNAPSHOT_SITE
      Global name of the snapshot site
   CAN_USE_LOG
      If NO,this snapshot is complex and cannot fast refresh
   UPDATABLE
      If NO,the snapshot is read only
   REFRESH_METHOD
      Whether the snapshot uses rowid or primary key or object id for fast refresh
   SNAPSHOT_ID
      Identifier for the snapshot used by the master for fast refresh
   VERSION
      Version of snapshot
   QUERY_TXT
      Query defining the snapshot

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_REGISTERED_SNAPSHOTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

