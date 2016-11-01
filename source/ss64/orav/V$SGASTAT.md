---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_orav.lbi" --><!-- #EndLibraryItem --><h1>V$SGASTAT </h1>  
 <p> Free SGA (Shared Global Area) Memory</p> 
 
<pre>Columns
   ___________________________

   NAME
   BYTES
   POOL
</pre>
<p class="code">SQL&gt; select * from v$sgastat where name = 'free memory';</p>
<p><b>Related:</b></p>
<pre><a href="V$ACTIVE_INSTANCES.html">V$ACTIVE_INSTANCES</a> 
<a href="V$INSTANCE.html">V$INSTANCE</a> 
<a href="V$SGA.html">V$SGA</a> 
</pre><!-- #BeginLibraryItem "/Library/foot_orad.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="V$SGASTAT.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div>
<!-- #EndLibraryItem -->

