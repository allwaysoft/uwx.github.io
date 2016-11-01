---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC FREE... CACHE</h1>
<p>DBCC FREEPROCCACHE - Remove all elements from the procedure cache.<br>
DBCC FREESESSIONCACHE - Flush the distributed query connection cache.<br>
DBCC FREESYSTEMCACHE - Release all unused cache entries from all caches. </p>
<pre>Syntax
      <b>DBCC FREEPROCCACHE</b> [WITH NO_INFOMSGS]

      <b>DBCC FREESESSIONCACHE</b> [WITH NO_INFOMSGS]

      <b>DBCC FREESYSTEMCACHE </b>
        ('ALL') 
           [WITH  [MARK_IN_USE_FOR_REMOVAL] , [NO_INFOMSGS]  ]

Key:
    NO_INFOMSGS             - Suppress all information messages
    ALL                     - All supported caches
    MARK_IN_USE_FOR_REMOVAL - Free up currently used entries asap (asynchronous)
</pre>
<p> MARK_IN_USE_FOR_REMOVAL will not prevent new entries being created in the cache.<br>Requires ALTER SERVER STATE permission on the server.</p>
<p>Examples</p>
<pre>USE MyDatabase;<br>GO<br>DBCC FREESESSIONCACHE WITH NO_INFOMSGS;<br>GO

DBCC FREEPROCCACHE;</pre>
<p class="quote"><i>"It's hard to be funny when you have to be clean" ~ Mae West.</i></p>
<p><b>Related:</b></p>
<p> <a href="dbcc_dropclean.html">DBCC DROPCLEANBUFFERS</a><br>
Equivalent Oracle command: <a href="../ora/system_a.html">ALTER SYSTEM</a> FLUSH SHARED POOL</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dbcc_free.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

