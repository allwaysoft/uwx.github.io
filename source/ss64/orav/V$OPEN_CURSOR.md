---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$OPEN_CURSOR </h1>  
 <p> <span class="body">Information about all open cursors, instance-wide. </span></p> 
 
<pre>Columns
   ___________________________
 
   SADDR
   SID
   USER_NAME
   ADDRESS
   HASH_VALUE
   SQL_TEXT</pre>
<p>To check the number of cursors opened per session, try the following
query:</p>
<p>SELECT<br>
  sid, user_name, COUNT(*) "Cursors per session" <br>
  FROM v$open_cursor <br>
  GROUP BY sid, user_name;</p>
<p><b>Related:</b></p>
<p>The <a href="../ora/syntax-initora.html">Init.ora</a> parameter OPEN_CURSOR<b>S</b> sets the limit of open cursors *per session*. </p>
<pre><a href="V$SQL.html">V$SQL</a> 
<a href="V$SQLAREA.html">V$SQLAREA</a> 
<a href="V$SQLTEXT.html">V$SQLTEXT</a> 
<a href="V$SQLTEXT_WITH_NEWLINES.html">V$SQLTEXT_WITH_NEWLINES</a> 
<a href="V$SQL_BIND_DATA.html">V$SQL_BIND_DATA</a> 
<a href="V$SQL_BIND_METADATA.html">V$SQL_BIND_METADATA</a> 
<a href="V$SQL_CURSOR.html">V$SQL_CURSOR</a> 
<a href="V$SQL_SHARED_MEMORY.html">V$SQL_SHARED_MEMORY</a></pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$OPEN_CURSOR.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

