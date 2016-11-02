---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_SNAPSHOT_LOGS </h1><p> All snapshot logs owned by the user </p> 
 
<pre>Columns
   ___________________________
 
   LOG_OWNER
      Owner of the snapshot log
   MASTER
      Name of the master table which changes are logged
   LOG_TABLE
      Log table; with rowids and timestamps of rows which changed in themaster
   LOG_TRIGGER
      Trigger on master table; fills the snapshot log
   ROWIDS
      If YES,the snapshot log records rowid information
   PRIMARY_KEY
      If YES,the snapshot log records primary key information
   OBJECT_ID
      If YES,the snapshot log records object id information
   FILTER_COLUMNS
      If YES,the snapshot log records filter column information
   SEQUENCE
      If YES,the snapshot log records sequence information
   INCLUDE_NEW_VALUES
      If YES,the snapshot log records old and new values (else only old values)
   CURRENT_SNAPSHOTS
      Dates that all known simple snapshots last refreshed
   SNAPSHOT_ID
      --

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="USER_SNAPSHOT_LOGS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

