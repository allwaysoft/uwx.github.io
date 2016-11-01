---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>ALTER USER</h1>
<p>Rename a database user or change its default schema.</p>
<pre>Syntax
      ALTER USER <i>user</i> WITH [NAME = <i>new_user_name</i>] [, DEFAULT_SCHEMA = <i>schema</i> ]

Key<i>
   </i>user          Name for the user in this database.
   new_user_name New name for this user.
   schema        The first schema that will used to resolve object names for <i>user</i>.
                 default schema = dbo
</pre>
<p>    All members of the sysadmin fixed server role have a default schema of dbo.</p>
<p>A user that is not mapped to a SQL Server login may connect to other databases as guest, this just requires GRANT CONNECT TO guest;</p>
<p>Examples</p>
<pre>ALTER USER user87 WITH NAME = user143;

ALTER USER user21 WITH NAME = user144, DEFAULT_SCHEMA = Sales;<br>GO</pre>
<p class="quote"><i>"My friend, there are two kinds of people in the world, Those with guns and those who dig." - The Good, The Bad, and The Ugly</i></p>
<p><b>Related commands:</b></p>
<p><a href="http://msdn.microsoft.com/en-us/library/ms174378.aspx">sp_change_users_login auto_fix,'<i>username</i>'</a> - Map an existing database user to a SQL Server login.<br>  
<a href="login_c.html">CREATE LOGIN</a><br>
  <a href="user_c.html">CREATE USER</a><br>
  <a href="user_d.html">DROP USER</a><br>
Equivalent Oracle command: <a href="../ora/user_a.html">ALTER USER</a> </p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

