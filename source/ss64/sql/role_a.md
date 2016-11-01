---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER ROLE</h1>
<p>Change the name of a database role.</p>
<pre>Syntax
      ALTER ROLE <i>role</i> WITH NAME = <i>new_name</i>

Key
   role       The role to alter.
   new_name   The new name for the role.
</pre>
<p>   Starting in SQL Server 2005 the behavior of schemas changed in that schemas are no longer equivalent to database users.</p>
<p>Example</p>
<pre>ALTER ROLE doctors WITH NAME = specialists;
GO</pre>
<p class="quote"><i>"I don't know if I believe in role models. We're all so different; we're all individuals. In the long run, that's what matters" ~ Wilson Cruz</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="role_c.html">CREATE ROLE</a><br>
  <a href="role_d.html">DROP ROLE</a>  <br>
  sys.database_role_members  <br>
  sp_addrolemember  - Add members to a role<br>
Equivalent Oracle command:  <a href="../ora/role_a.html">ALTER ROLE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="role_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

