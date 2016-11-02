---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>DISASSOCIATE STATISTICS </h1> 
<p>Disassociate a type of statistics (or default statistics) with 
  an object.<br>
  <br>
  <br>
  Syntax:</p>
<pre>   DISSASSOCIATE STATISTICS FROM object [<i>schema</i>.]<i>object_name</i> [FORCE]

Where <i>object</i> is any of
   COLUMNS
   FUNCTIONS
   PACKAGES
   TYPES
   INDEXES
   INDEXTYPES</pre>
<p>More than one object of the same type can be disassociated in a single statement if separated with commas.<br>
e.g.<br>
DISASSOCIATE STATISTICS FROM PACKAGES pkg_emp.start, pkg_emp.finish ; <br>
<br>
DISASSOCIATE… FORCE will automatically delete statistics where necessary.<br>
<br>
<span class="quote"><i> "There are lies, damned lies, and statistics" ~ Disraeli</i></span><br>
<br>
<b>Related Commands:</b></p>
<p><a href="../orap/DBMS_STATS.html">DBMS_STATS</a><br>
<a href="explain.html">EXPLAIN PLAN</a><br>
IMP with rows=y<br>
STATISTICS - <a href="stats_assoc.html">ASSOCIATE STATISTICS</a></p>
<p><b>Related Views:</b></p>
<pre> <a href="../orad/DBA_PART_COL_STATISTICS.html">DBA_PART_COL_STATISTICS</a>  <a href="../orad/ALL_PART_COL_STATISTICS.html">ALL_PART_COL_STATISTICS</a> <a href="../orad/USER_PART_COL_STATISTICS.html">USER_PART_COL_STATISTICS</a> 
 <a href="../orad/DBA_TAB_COL_STATISTICS.html">DBA_TAB_COL_STATISTICS</a>   <a href="../orad/ALL_TAB_COL_STATISTICS.html">ALL_TAB_COL_STATISTICS</a>  <a href="../orad/USER_TAB_COL_STATISTICS.html">USER_TAB_COL_STATISTICS</a> 

 <a href="../orav/V$BUFFER_POOL_STATISTICS.html">V$BUFFER_POOL_STATISTICS</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stats_dis.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

