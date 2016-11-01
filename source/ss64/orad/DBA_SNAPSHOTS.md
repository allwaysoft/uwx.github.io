---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_SNAPSHOTS </h1><p> All snapshots in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the snapshot
   NAME
      The view used by users and applications for viewing the snapshot
   TABLE_NAME
      Table the snapshot is stored in -- has an extra column for the master rowid
   MASTER_VIEW
      View of the master table,owned by the snapshot owner,used for refreshes
   MASTER_OWNER
      Owner of the master table
   MASTER
      Name of the master table that this snapshot is a copy of
   MASTER_LINK
      Database link name to the master site
   CAN_USE_LOG
      If NO,this snapshot is complex and will never use a log
   UPDATABLE
      If NO,the snapshot is read only. Look up REPLICATION 
   REFRESH_METHOD
      The values used to drive a fast refresh of the snapshot
   LAST_REFRESH
      SYSDATE from the master site at the time of the last refresh
   ERROR
      The number of failed automatic refreshes since last successful refresh
   FR_OPERATIONS
      If REGENERATE,then the fast refresh operations have not been generated
   CR_OPERATIONS
      If REGENERATE,then the complete refresh operations have not been generated
   TYPE
      The type of refresh (complete,fast,force) for all automatic refreshes
   NEXT
      The date function used to compute next refresh dates
   START_WITH
      The date function used to compute next refresh dates
   REFRESH_GROUP
      All snapshots in a given refresh group get refreshed in the same transaction
   UPDATE_TRIG
      The name of the trigger which fills the UPDATE_LOG
   UPDATE_LOG
      The table which logs changes made to an updatable snapshots
   QUERY
      The original query that this snapshot is an instantiation of
   MASTER_ROLLBACK_SEG
      Rollback segment to use at the master site
   STATUS
      The status of the contents of the snapshot
   REFRESH_MODE
      This indicates how and when the snapshot will be refreshed
   PREBUILT
      If YES,this snapshot uses a prebuilt table as the base table</pre>
<p><b>Related:</b></p>
<p><a href="DBA_SNAPSHOT_LOGS.html">DBA_SNAPSHOT_LOGS</a><br>
<a href="DBA_RGROUP.html">DBA_RGROUP</a><br>
<a href="DBA_RCHILD.html">DBA_RCHILD</a> 
<a href="DBA_REFRESH.html"><br>
DBA_REFRESH</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_SNAPSHOTS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

