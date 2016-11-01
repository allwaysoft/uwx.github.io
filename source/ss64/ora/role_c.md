---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE ROLE</h1> 
<p>Create a user role.<br>
  <br>
  Syntax:</p>
<pre>Create role without a password:
   CREATE ROLE <i>role</i> <u>NOT IDENTIFIED</u>

Create role with a password:
   CREATE ROLE <i>role</i> IDENTIFIED BY <i>password</i>

Create an application role:
   CREATE ROLE <i>role</i> IDENTIFIED USING [<i>schema</i>.]<i>package</i>

Create role authorised by the OS:
   ALTER ROLE <i>role</i> IDENTIFIED EXTERNALLY

Create role authorised by Directory Service:
   ALTER ROLE <i>role</i> IDENTIFIED GLOBALLY

Example
--Create the role
CREATE ROLE MY_ORACLE_ROLE

--Assign all object rights from the current user schema (user_objects)

spool GrantRights.sql

SELECT
decode(
object_type,
'TABLE','GRANT SELECT, INSERT, UPDATE, DELETE , REFERENCES ON'||&amp;OWNER||'.',
'VIEW','GRANT SELECT ON '||&amp;OWNER||'.',
'SEQUENCE','GRANT SELECT ON '||&amp;OWNER||'.',
'PROCEDURE','GRANT EXECUTE ON '||&amp;OWNER||'.',
'PACKAGE','GRANT EXECUTE ON '||&amp;OWNER||'.',
'FUNCTION','GRANT EXECUTE ON'||&amp;OWNER||'.' )||object_name||' TO <b>MY_ORACLE_ROLE</b> ;' 
FROM user_objects 
WHERE
OBJECT_TYPE IN ( 'TABLE', 'VIEW', 'SEQUENCE', 'PROCEDURE', 'PACKAGE','FUNCTION'
)
ORDER BY OBJECT_TYPE

spool off

@GrantRights.sql</pre>
<p><i class="quote">"A man's gotta know his limitations" ~ Clint Eastwood, as Dirty Harry</i><b><br>
<br>
Related Commands:<br>
<br>
</b>PROFILE - <a href="profile_a.html">ALTER PROFILE</a><br>
ROLE - <a href="role_a.html">ALTER ROLE</a><br>
ROLE - <a href="role_s.html">SET ROLE</a> <br>
ROLE - <a href="role_d.html">DROP ROLE</a> <br>
<b><br>
</b><b>Related Views:</b></p>
<pre>                                           <a href="../orad/USER_RESOURCE_LIMITS.html">USER_RESOURCE_LIMITS</a>
 <a href="../orad/DBA_RGROUP.html">DBA_RGROUP</a>
 <a href="../orad/DBA_ROLES.html">DBA_ROLES</a>
 <a href="../orad/DBA_ROLE_PRIVS.html">DBA_ROLE_PRIVS</a>                            <a href="../orad/USER_ROLE_PRIVS.html">USER_ROLE_PRIVS</a>      <a href="../orad/ROLE_ROLE_PRIVS.html">ROLE_ROLE_PRIVS</a>
 <a href="../orad/DBA_SYS_PRIVS.html">DBA_SYS_PRIVS</a>                             <a href="../orad/USER_SYS_PRIVS.html">USER_SYS_PRIVS</a>       <a href="../orad/ROLE_SYS_PRIVS.html">ROLE_SYS_PRIVS</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="role_c.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

