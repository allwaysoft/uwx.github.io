---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE USER</h1> 
<p>Create a user.<br>
  <br>
  Syntax:</p>
<pre>   CREATE USER <i>username</i>
      IDENTIFIED {BY <i>password</i> | EXTERNALLY | GLOBALLY AS '<i>external_name</i>'}
         <i>options</i>;

<i>options</i>:
   
   DEFAULT TABLESPACE <i>tablespace</i>
   TEMPORARY TABLESPACE <i>tablespace</i>
   QUOTA <i>int</i> {K | M} ON <i>tablespace</i>
   QUOTA UNLIMITED ON <i>tablespace</i>
   <a href="profile_c.html">PROFILE</a> <i>profile_name</i>
   PASSWORD EXPIRE
   ACCOUNT {LOCK|UNLOCK}

<b>EXAMPLES</b>

-- Create a user with no rights to save data or create objects:

CREATE USER limited IDENTIFIED BY ChangeThis;


-- Create a user with full rights to create objects and save data:

DROP USER MySchemaOwner CASCADE;

CREATE USER MySchemaOwner IDENTIFIED BY ChangeThis
       DEFAULT TABLESPACE data  
       TEMPORARY TABLESPACE temp
       QUOTA UNLIMITED ON data;

CREATE ROLE conn;

GRANT CREATE session, CREATE table, CREATE view, 
      CREATE procedure,CREATE synonym,
      ALTER table, ALTER view, ALTER procedure,ALTER synonym,
      DROP table, DROP view, DROP procedure,DROP synonym,
      TO conn;

GRANT conn TO MySchemaOwner;</pre>
<p>You have to create a user first before you can GRANT permissions, roles or assign a default ROLE.<br>
<br>
<i class="quote">"If you bungle raising your children, I don't think whatever else you do well matters very much" ~ Jacqueline Kennedy Onassis</i><br>
<br>
<b> Related Commands:</b></p>
<p><a href="user_a.html">ALTER USER</a> DEFAULT ROLE <br>
<a href="user_d.html">DROP USER</a><br>
<a href="grant.html">GRANT</a> <br>
<br>
<b>Related Views:</b></p>
<pre>                                           <a href="../orad/USER_PASSWORD_LIMITS.html">USER_PASSWORD_LIMITS</a>  
                                                                <a href="../orad/SESSION_ROLES.html">SESSION_ROLES</a>
                                                                <a href="../orad/SESSION_PRIVS.html">SESSION_PRIVS</a>
                                                                <a href="../orad/SESSION_CONTEXT.html">SESSION_CONTEXT</a>
 <a href="../orad/DBA_TS_QUOTAS.html">DBA_TS_QUOTAS</a>                             <a href="../orad/USER_TS_QUOTAS.html">USER_TS_QUOTAS</a>
 <a href="../orad/DBA_USERS.html">DBA_USERS</a>            <a href="../orad/ALL_USERS.html">ALL_USERS</a>            <a href="../orad/USER_USERS.html">USER_USERS</a>

 <a href="../orav/V$SESSION.html">V$SESSION</a>
 <a href="../orav/V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a>
  </pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="user_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

