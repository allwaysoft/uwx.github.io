---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>DROP LOGIN </h1>
<p>Remove a SQL Server login account (User).</p>
<pre>Syntax
      DROP LOGIN <i>login_name</i>

Options
   <i>login_name</i>   The login to be dropped.</pre> 
<p>This command will fail if the user is currently logged in or if the login  owns any securable, server-level object, or SQL Server Agent job.</p>
<p>Example</p>
<pre>DROP LOGIN Billg;<br>GO</pre>
<p class="quote"><i>"I always wanted to be somebody, but I should have been more specific"
~ Lily Tomlin </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="login_c.html">CREATE LOGIN</a><br>
  <a href="login_a.html">ALTER LOGIN</a><br>
Equivalent Oracle commands:  <a href="../ora/user_d.html">DROP USER</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="login_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

