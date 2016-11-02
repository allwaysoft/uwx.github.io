---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>CREATE USER</h1>
<p>Add a user to the current database.</p>
<pre>Syntax
      CREATE USER <i>user</i> 
         [{ FOR | FROM } LOGIN <i>login_name</i>] [WITH DEFAULT_SCHEMA = <i>schema</i>]

      CREATE USER <i>user</i> 
         [{ FOR | FROM } CERTIFICATE <i>certificate</i>] [WITH DEFAULT_SCHEMA = <i>schema</i>]

      CREATE USER <i>user</i> 
         [{ FOR | FROM } ASYMMETRIC KEY <i>asym_key</i>] [WITH DEFAULT_SCHEMA = <i>schema</i>]

      CREATE USER <i>user</i> WITHOUT LOGIN


Key<i>
   </i>user          Name for the user in this database, up to 128 characters.

   login_name    A valid SQL Server login. When this SQL Server login enters the
                 database it will acquire the name and ID of <i>user</i>.
                 By default <i>user </i>will be mapped to the SQL Server login with the same name.

   <i>certificate</i>   The certificate for which the database user is being created.

   asym_key      The asymmetric key for which the database user is being created.

   schema        The first schema that will used to resolve object names for <i>user</i>.
                 default schema = dbo

   WITHOUT LOGIN Don't map <i>user </i>to an existing login.

</pre>
<p>    All members of the sysadmin fixed server role have a default schema of dbo.</p>
<p>A user that is not mapped to a SQL Server login may connect to other databases as guest, this just requires GRANT CONNECT TO guest;</p>
<p>Examples</p>
<pre>CREATE LOGIN user86<br>    WITH PASSWORD = 'pa$$word';<br>USE MyDatabase;<br>CREATE USER user86 FOR LOGIN user86;<br>GO

CREATE LOGIN user87<br>    WITH PASSWORD = 'pa$$word';<br>USE MyDatabase;<br>CREATE USER user87 FOR LOGIN user87<br>    WITH DEFAULT_SCHEMA = Marketing;<br>GO</pre>
<p class="quote"><i>"My friend, there are two kinds of people in the world, Those with guns and those who dig." - The Good, The Bad, and The Ugly</i></p>
<p><b>Related commands:</b></p>
<p>  <a href="login_c.html">CREATE LOGIN</a><br>
  <a href="user_a.html">ALTER USER</a><br>
  <a href="user_d.html">DROP USER</a><br>
Equivalent Oracle command:  <a href="../ora/user_c.html">CREATE USER</a></p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="user_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

