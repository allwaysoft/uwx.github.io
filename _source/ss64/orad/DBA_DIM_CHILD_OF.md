---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_DIM_CHILD_OF </h1><p>Representaion of a 1: n hierarchical relationship between a pair of levels in a dimension </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the dimension
   DIMENSION_NAME
      Name of the dimension
   HIERARCHY_NAME
      Name of the hierarchy
   POSITION
      Hierarchical position within this hierarchy,position 1 being the most detailed
   CHILD_LEVEL_NAME
      Name of the child-side level of this 1:n relationship
   JOIN_KEY_ID
      Keys that join child uniquely to the parent
   PARENT_LEVEL_NAME
      Name of the parent-side level of this 1:n relationship

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_DIM_CHILD_OF.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

