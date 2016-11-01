---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>KILL</h1>
<p>Terminate a user process</p>
<pre>Syntax
      KILL {<i>session_ID </i>| UOW} [WITH STATUSONLY] 

Key<i>
   </i><i>session_ID</i>    The session ID of the process to terminate.Int)
   UOW           The Unit of Work ID of a  distributed transaction. (GUID)
   STATUSONLY    Generate a rollback progress report (for an earlier KILL statement)</pre>
<p>  The KILL statement may take some time to  roll back a long transaction.</p>
<p>KILL WITH STATUSONLY will not terminate or roll back any transactions.</p>
<p>Example</p>
<pre>KILL 54;<br>KILL 54 WITH STATUSONLY;<br>GO</pre>
<p class="quote"><i>"Whom the gods love dies young" ~ Menander 300 BC </i></p>
<p><b>Related commands:</b></p>
<p>  sys.dm_tran_locks<br>
Equivalent Oracle command:  <a href="../ora/system_a.html">ALTER SYSTEM</a> KILL SESSION</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

