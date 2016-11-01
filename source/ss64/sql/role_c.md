---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE ROLE</h1>
<p>Create a new database role in the current database.</p>
<pre>Syntax
      CREATE ROLE <i>role</i> [AUTHORIZATION <i>owner</i>]

Key
   role     The role to create.
   owner    The database user or role that is to own the new role.
              (default=the user that executes the CREATE ROLE command.)
 </pre>
<p>   Starting in SQL Server 2005 the behavior of schemas changed in that schemas are no longer equivalent to database users.</p>
<p>Example</p>
<pre>CREATE ROLE nurses AUTHORIZATION JaneDoe;<br>GO
CREATE ROLE doctors AUTHORIZATION db_securityadmin;
GO</pre>
<p class="quote"><i>"I don't know if I believe in role models. We're all so different; we're all individuals. In the long run, that's what matters" - Wilson Cruz</i></p>
<p><b>Related commands:</b></p>
<p>  ALTER ROLE<br>
  <a href="role_d.html">DROP ROLE</a>  <br>
  sys.database_role_members  <br>
  sp_addrolemember  - Add members to a role<br>
Equivalent Oracle command:  <a href="../ora/role_c.html">CREATE ROLE</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="role_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

