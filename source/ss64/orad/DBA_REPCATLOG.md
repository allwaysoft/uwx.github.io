---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orad.lbi" --><!-- #EndLibraryItem --><h1>DBA_REPCATLOG </h1><p> Information about asynchronous administration requests </p> 
 
<pre>Columns
   ___________________________
 
   ID
      Identifying number of repcat log record
   SOURCE
      Name of the database at which the request originated
   STATUS
      Status of the request at this database
   USERID
      Name of the user who submitted the request
   TIMESTAMP
      When the request was submitted
   ROLE
      Is this database the masterdef for the request
   MASTER
      Name of the database that processes this request
   SNAME
      Schema of replicated object name,if applicable
   REQUEST
      Name of the requested operation
   ONAME
      Replicated object name,if applicable
   TYPE
      Type of replicated object,if applicable
   MESSAGE
      Error message associated with processing the request
   ERRNUM
      Oracle error number associated with processing the request
   GNAME
      Name of the replicated object group</pre>
<p><b>Related:</b></p>
<p><a href="DBA_REPCAT_EXCEPTIONS.html">DBA_REPCAT_EXCEPTIONS</a></p><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="DBA_REPCATLOG.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

