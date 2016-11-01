---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE CONTEXT</h1> 
<p>Create a set of attributes for use by application logic to validate 
  and secure an application.<br>
  <br>
  Syntax:</p>
<pre>   CREATE [OR REPLACE] CONTEXT <i>namespace</i>
     [USING] [schema.]package
        INITIALIZED {EXTERNALLY|GLOBALLY} | ACCESSED GLOBALLY
</pre>
<p><br>
<i>namespace</i> is the name of the context namespace to create or modify.</p>
<p>The ACCESSED GLOBALLY clause allows multiple sessions to
    share application attributes. i.e Any application context set in <i>namespace</i> is
    accessible  throughout
    the entire instance.</p>
<p class="quote"><i> “Think global, act local” - Roberto Goizueta (Coca Cola CEO) </i></p>
<p><b>Related Commands:</b></p>
<p>CONTEXT - <a href="context_d.html">DROP CONTEXT</a><br>
  <a href="../orap/DBMS_SESSION.html">DBMS_SESSION</a>.set_context - Procedure 
  to set current context<br>
  SYS_CONTEXT - Function to return context attributes </p>
<p><b>Related Views:</b></p>
<p class="code"> <a href="../orad/DBA_CONTEXT.html">DBA_CONTEXT</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ALL_CONTEXT.html">ALL_CONTEXT</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="context_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

