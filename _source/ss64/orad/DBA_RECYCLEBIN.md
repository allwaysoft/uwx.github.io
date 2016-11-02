---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_RECYCLEBIN</h1><p> Information about all recycle bins in the database.</p> 
 
<pre>Columns
   ___________________________
    
   OWNER          Name of the original owner of the object
   OBJECT_NAME    New name of the object
   ORIGINAL_NAME  Original name of the object
   OPERATION      Operation carried out on the object (Drop/Truncate)
   TYPE           Type of the object (Table/index/Partition etc)
   TS_NAME        Name of the tablespace to which the object belongs
   CREATETIME     Timestamp for the creation of the object
   DROPTIME       Timestamp for the dropping of the object
   DROPSCN        System change number (SCN) of the transaction which moved the object to the recycle bin
   PARTITION_NAME  Name of the partition which was dropped
   CAN_UNDROP     Indicates whether the object can be undropped (YES) or not (NO)
   CAN_PURGE      Indicates whether the object can be purged (YES) or not (NO)
   RELATED        Object number of the parent object
   BASE_OBJECT    Object number of the base object
   PURGE_OBJECT   Object number for the object which gets purged
   SPACE          Number of blocks used by the object</pre>
<p><b>Related:</b></p>
<p><span class="code">USER_RECYCLEBIN</span></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_RECYCLEBIN.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

