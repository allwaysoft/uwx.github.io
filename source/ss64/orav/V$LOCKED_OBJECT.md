---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$LOCKED_OBJECT </h1>  
 <p> Data Dictionary View </p> 
 
<pre>Columns
   ___________________________
 
   ORACLE_USERNAME
   OS_USER_NAME
   PROCESS
   LOCKED_MODE
   XIDUSN
   XIDSLOT
   XIDSQN
   OBJECT_ID
   SESSION_ID
</pre>
<p> Who is locking what:</p>
<p class="code">select <br>
oracle_username<br>
os_user_name,<br>
locked_mode,<br>
object_name,<br>
object_type<br>
from <br>
v$locked_object a,<a href="../orad/DBA_OBJECTS.html">dba_objects</a> b<br>
where <br>
a.object_id = b.object_id</p>
<p><b>Related:</b></p>
<pre><a href="V$ENQUEUE_LOCK.html">V$ENQUEUE_LOCK</a> 
<a href="V$LATCH.html">V$LATCH</a> 
<a href="V$LOCK.html">V$LOCK</a> 
<a href="V$_LOCK.html">V$_LOCK</a>
<a href="V$LOCKS_WITH_COLLISIONS.html">V$LOCKS_WITH_COLLISIONS</a> 
<a href="V$LOCK_ACTIVITY.html">V$LOCK_ACTIVITY</a> 
<a href="V$LOCK_ELEMENT.html">V$LOCK_ELEMENT</a> 
<a href="V$RESOURCE.html">V$RESOURCE</a>  
<a href="V$RESOURCE_LIMIT.html">V$RESOURCE_LIMIT</a> 
<a href="V$TRANSACTION_ENQUEUE.html">V$TRANSACTION_ENQUEUE</a> </pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

