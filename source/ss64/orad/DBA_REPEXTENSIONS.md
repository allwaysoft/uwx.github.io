---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_REPEXTENSIONS </h1><p> Information about replication extension requests </p> 
 
<pre>Columns
   ___________________________
 
   EXTENSION_ID
      Globally unique identifier for replication extension
   REQUEST
      Kind of replication extension
   MASTERDEF
      Master definition site for replication extension
   EXPORT_REQUIRED
      YES if this extension requires an export
   REPCATLOG_ID
      Identifier of repcatlog records related to replication extension
   EXTENSION_STATUS
      Status of replication extension
   FLASHBACK_SCN
      Flashback_scn for export or change-based recovery for replication extension
   BREAK_TRANS_TO_MASTERDEF
      YES if existing masters partially push to masterdef,NO if no pushing
   BREAK_TRANS_TO_NEW_MASTERS
      YES if existing masters partially push to new masters,NO if no pushing
   PERCENTAGE_FOR_CATCHUP_MDEF
      Fraction of push to masterdef cycle devoted to catching up
   CYCLE_SECONDS_MDEF
      Length of push to masterdef cycle when catching up
   PERCENTAGE_FOR_CATCHUP_NEW
      Fraction of push to new masters cycle devoted to catching up
   CYCLE_SECONDS_NEW
      Length of push to new masters cycle when catching up</pre>
<p><b>Related:</b></p>
<p><a href="DBA_REPSCHEMA.html">DBA_REPSCHEMA</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_REPEXTENSIONS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

