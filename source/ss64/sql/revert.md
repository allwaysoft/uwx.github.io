---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>REVERT</h1>
<p>Switch execution context back to the caller of the last EXECUTE AS statement.</p>
<pre>Syntax
      REVERT [WITH COOKIE = @varbinary_variable]

Key<i>
   </i>WITH COOKIE     Cookie created in a corresponding EXECUTE AS stand-alone statement.
                      </pre>
<p>  REVERT can be specified as a stand-alone statement or used within a stored procedure or user-defined function.<br>varbinary_variable is varbinary(100)</p>
<p>Example</p>
<pre>CREATE PROCEDURE dbo.Myprocedure <br>  WITH EXECUTE AS CALLER<br>AS <br>    ...<br>    EXECUTE AS USER = 'service_account';<br>    ...<br>    REVERT;<br>    ...<br>GO</pre>
<p class="quote"><i>"I don't know if I believe in role models. We're all so different; we're all individuals. In the long run, that's what matters" - Wilson Cruz</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="executeas.html">EXECUTE AS</a><br>
Equivalent Oracle command: <a href="../ora/session_a.html">ALTER SESSION</a> SET CURRENT_SCHEMA = <i>schema</i> </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="revert.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

