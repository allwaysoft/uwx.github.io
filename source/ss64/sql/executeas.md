---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>EXECUTE AS </h1>
<p>Execute a stored procedure or function.</p>
<pre>Syntax
      EXEC[UTE] AS CALLER [;]

      EXEC[UTE] AS USER  = '<i>name</i>'
          [WITH {NO REVERT | COOKIE INTO @varbinary_variable} ]  [;]

      EXEC[UTE] AS LOGIN  = '<i>name</i>'
          [WITH {NO REVERT | COOKIE INTO @varbinary_variable} ]  [;]

Key:
    LOGIN      Impersonate a login.
    USER       Impersonate a user in the current database.
	 <i>name</i>       A valid sysadmin user/login name.  (not a built-in account)
    NO REVERT  The context switch cannot be reverted back
</pre> 
<p><b>Example</b></p>
<pre>EXECUTE AS USER = 'scott';</pre>
<p class="quote"><i>“The deepest and most lifelike emotion has been expressed, and that's the reason they have taken so long to execute” ~ Rembrandt</i></p>
<p><b>Related:</b></p>
<p>  <a href="execute.html">EXECUTE</a><br>
  <a href="revert.html">REVERT</a><br>
Equivalent Oracle command: <a href="../ora/session_a.html">ALTER SESSION</a> SET 
CURRENT_SCHEMA = <i>schema</i></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="executeas.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

