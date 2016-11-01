---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_APPLY </h1><p> Details about each apply process that dequeues from the queue visible to the current user </p> 
 
<pre>Columns
   ___________________________
 
   APPLY_NAME
      Name of the apply process
   QUEUE_NAME
      Name of the queue the apply process dequeues from
   QUEUE_OWNER
      Owner of the queue the apply process dequeues from
   APPLY_CAPTURED
      Yes,if applying captured messages; No,if applying enqueued messages
   RULE_SET_NAME
      Rule set used by apply process for filtering
   RULE_SET_OWNER
      Owner of the rule set
   APPLY_USER
      Current user who is applying the messages
   APPLY_DATABASE_LINK
      For remote objects,the database link pointing to the remote database
   APPLY_TAG
      Tag associated with DDL and DML change records that will be applied
   DDL_HANDLER
      Name of the user specified ddl handler
   MESSAGE_HANDLER
      User specified procedure to handle messages other than DDL and DML messages
   STATUS
      Status of the apply process: DISABLED,ENABLED,ABORTED

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_APPLY.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

