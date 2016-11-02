---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_TRIGGERS </h1><p> All triggers in the database </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the trigger
   TRIGGER_NAME
      Name of the trigger
   TRIGGER_TYPE
      When the trigger fires - BEFORE/AFTER and STATEMENT/ROW
   TRIGGERING_EVENT
      Statement that will fire the trigger - INSERT,UPDATE and/or DELETE
   TABLE_OWNER
      Owner of the table that this trigger is associated with
   BASE_OBJECT_TYPE
      --
   TABLE_NAME
      Name of the table that this trigger is associated with
   COLUMN_NAME
      The name of the column on which the trigger is defined over
   REFERENCING_NAMES
      Names used for referencing to OLD and NEW values within the trigger
   WHEN_CLAUSE
      WHEN clause must evaluate to true in order for triggering body to execute
   STATUS
      If DISABLED then trigger will not fire
   DESCRIPTION
      Trigger description
   ACTION_TYPE
      --
   TRIGGER_BODY
      Action taken by this trigger when it fires</pre>
<p><b>Related:</b></p>
<p>DBA_TRIGGER_ORDERING<br>
<a href="DBA_TRIGGER_COLS.html">DBA_TRIGGER_COLS</a><br>
<a href="DBA_INTERNAL_TRIGGERS.html">DBA_INTERNAL_TRIGGERS</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_TRIGGERS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

