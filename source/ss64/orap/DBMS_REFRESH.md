---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orapack.lbi" --><!-- #EndLibraryItem --><h1>PL/SQL Packages DBMS_REFRESH</h1> 
<p>Create groups of materialized views that can be refreshed together 
  to a transactionally consistent point in time. </p>
<pre>Subprocedures:

ADD      Add materialized views to a refresh group.  

CHANGE   Change the refresh interval for a refresh group.  

DESTROY  Remove all the materialized views from a refresh group and
         delete the refresh group.  

MAKE     Specify the members of a refresh group and the time interval
         used to determine when the members of this group should be refreshed.  

REFRESH  Manually refresh a refresh group.  

SUBTRACT Remove materialized views from a refresh group.   </pre>
<p><span class="body">For full documentation of the packaged procedures above see the Oracle Manual:<br>
"Oracle9i Supplied PL/SQL Packages and Types Reference"<b><br>
<br>
</b>or the book <a href="../links/orasqllinks.html">Oracle Built in Packages</a> 
<i>by Steven Feuerstein et al</i></span></p>
<pre><span class="body"><b>Related Views:</b></span> </pre>
<pre> <a href="../orad/DBA_REFRESH.html">DBA_REFRESH</a>           <a href="../orad/ALL_REFRESH.html">ALL_REFRESH</a>           <a href="../orad/USER_REFRESH.html">USER_REFRESH</a> 
 <a href="../orad/DBA_REFRESH_CHILDREN.html">DBA_REFRESH_CHILDREN</a>  <a href="../orad/ALL_REFRESH_CHILDREN.html">ALL_REFRESH_CHILDREN</a>  <a href="../orad/USER_REFRESH_CHILDREN.html">USER_REFRESH_CHILDREN</a> </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBMS_REFRESH.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

