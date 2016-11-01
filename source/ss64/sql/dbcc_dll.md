---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DBCC <i>dllname</i> </h1>
<p>Unload a DLL from memory.</p>
<pre>Syntax
      DBCC <i>dllname</i> (FREE) [ WITH NO_INFOMSGS ]


Key:
   dllname          - Name of the DLL to release from memory.
   WITH NO_INFOMSGS - Suppress all information messages.

</pre>
<p>When an extended stored procedure is executed, the DLL will remain loaded until the server is shut down (or DBCC dllname is used to unload it)</p>
<p>Example</p>
<pre>DBCC xp_my_stored_proc (FREE)</pre>
<p class="quote"><i>"...there is nothing that so much contributes to a survival of the trials and sufferings of the day as a sense of humor. It is like the buffers in
  the solid train, like the air cushion of a modern field gun. It saves the jolt;
it takes up the recoil" ~ William Howard Taft</i></p>
<p>  Equivalent Oracle command:  Set (for all packages) with <a href="../ora/syntax-initora.html">Server Parameters</a>..<br>
</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

