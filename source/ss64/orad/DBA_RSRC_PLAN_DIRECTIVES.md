---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_RSRC_PLAN_DIRECTIVES </h1><p> all the resource plan directives </p> 
 
<pre>Columns
   ___________________________
 
   PLAN
      Name of the plan to which this directive belongs
   GROUP_OR_SUBPLAN
      Name of the consumer group/sub-plan referred to
   TYPE
      Whether GROUP_OR_SUBPLAN refers to a consumer group or a plan
   CPU_P1
      first parameter for the CPU resource allocation method
   CPU_P2
      second parameter for the CPU resource allocation method
   CPU_P3
      third parameter for the CPU resource allocation method
   CPU_P4
      fourth parameter for the CPU resource allocation method
   CPU_P5
      fifth parameter for the CPU resource allocation method
   CPU_P6
      sixth parameter for the CPU resource allocation method
   CPU_P7
      seventh parameter for the CPU resource allocation method
   CPU_P8
      eight parameter for the CPU resource allocation method
   ACTIVE_SESS_POOL_P1
      first parameter for the maximum active sessions target resource allocationmethod
   QUEUEING_P1
      first parameter for the queueing method
   PARALLEL_DEGREE_LIMIT_P1
      first parameter for the parallel degree limit resource allocation method
   SWITCH_GROUP
      group to switch to once switch time is reached
   SWITCH_TIME
      switch time limit for execution within a group
   SWITCH_ESTIMATE
      use execution estimate to determine group?
   MAX_EST_EXEC_TIME
      use of max. estimated execution time
   UNDO_POOL
      max. undo allocation for consumer groups
   COMMENTS
      Text comment on the plan directive
   STATUS
      PENDING if it is part of the pending area,ACTIVE otherwise
   MANDATORY
      Whether the plan directive is mandatory</pre>
<p><b>Related:</b></p>
<p><a href="DBA_RSRC_PLANS.html">DBA_RSRC_PLANS</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

