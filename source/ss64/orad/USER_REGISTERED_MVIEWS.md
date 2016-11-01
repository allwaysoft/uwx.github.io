---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>USER_REGISTERED_MVIEWS </h1><p> Remote materialized views of local tables currently using logs owned by the user </p> 
 
<pre>Columns
   ___________________________
 
   OWNER
      Owner of the materialized view
   NAME
      The name of the materialized view
   MVIEW_SITE
      Global name of the materialized view site
   CAN_USE_LOG
      If NO,this materialized view is complex and cannot fast refresh
   UPDATABLE
      If NO,the materialized view is read only
   REFRESH_METHOD
      Whether the materialized view uses rowid or primary key or object id for fast refresh
   MVIEW_ID
      Identifier for the materialized view used by the master for fast refresh
   VERSION
      Version of materialized view
   QUERY_TXT
      Query defining the materialized view

</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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

