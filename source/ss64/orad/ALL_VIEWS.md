---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>ALL_VIEWS </h1><p> 
</p><p>Description of views accessible to the user </p>
<p>Columns</p>
<pre>   ___________________________
 
   OWNER
      Owner of the view
   VIEW_NAME
      Name of the view
   TEXT_LENGTH
      Length of the view text
   TEXT
      View text
   TYPE_TEXT_LENGTH
      Length of the type clause of the object view
   TYPE_TEXT
      Type clause of the object view
   OID_TEXT_LENGTH
      Length of the WITH OBJECT OID clause of the object view
   OID_TEXT
      WITH OBJECT OID clause of the object view
   VIEW_TYPE_OWNER
      Owner of the type of the view if the view is an object view
   VIEW_TYPE
      Type of the view if the view is an object view
   SUPERVIEW_NAME
      Name of the superif view is a subview</pre>
<p><b>Examples (SQL*Plus):</b></p>
<p>View the definition of <i>myview:</i></p>
<p class="code">set LONG 1000<br>
select TEXT from ALL_VIEWS <br>
where owner='<i>myowner</i>' and view_name='<i>myview</i>';</p>
<p>1000 should be more than large enough to read most view definitions, but if you want to set this exactly look at the TEXT_LENGTH column:</p>
<p class="code">select TEXT_LENGTH from ALL_VIEWS <br>
where view_name = '<i>myview</i>';</p>
<p><b>Related:</b><span class="body"><b><br>
</b><a href="DBA_VIEWS.html">DBA_Views</a></span></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="ALL_VIEWS.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

