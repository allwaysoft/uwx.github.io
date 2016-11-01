---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER ROLE</h1> 
<p>Change the password requirements for a user role.<br>
  <br>
  Syntax:</p>
<pre>Add password to a role:
   ALTER ROLE <i>role</i> IDENTIFIED BY <i>password</i>

Remove password from a role:
   ALTER ROLE <i>role</i> NOT IDENTIFIED

Change role to an application role:
   ALTER ROLE <i>role</i> IDENTIFIED USING [<i>schema</i>.]<i>package</i>

Authorised by the OS:
   ALTER ROLE <i>role</i> IDENTIFIED EXTERNALLY

Authorised by Directory Service:
   ALTER ROLE <i>role</i> IDENTIFIED GLOBALLY
</pre>
<p>Before you alter a role to IDENTIFIED GLOBALLY, you must  revoke the  role from all users, roles, and PUBLIC (apart from the user who is currently altering the role.) Also if any roles have been granted to the role IDENTIFIED EXTERNALLY then revoke those grants.</p>
<p>Changing a role will not affect any user sessions that are already running with that role enabled. </p>
<p><i class="quote">"True leadership is the art of changing a group from what it is to what it ought to be" ~ Virginia Allan</i><b><br>
<br>
Related Commands:<br>
<br>
</b>PROFILE - <a href="profile_a.html">ALTER PROFILE</a><br>
ROLE - <a href="role_c.html">CREATE ROLE</a> <br>
ROLE - <a href="role_s.html">SET ROLE</a> <br>
ROLE - <a href="role_d.html">DROP ROLE</a> <br>
<b><br>
</b><b>Related Views:</b></p>
<pre>                                           <a href="../orad/USER_RESOURCE_LIMITS.html">USER_RESOURCE_LIMITS</a>
 <a href="../orad/DBA_RGROUP.html">DBA_RGROUP</a>
 <a href="../orad/DBA_ROLES.html">DBA_ROLES</a>
 <a href="../orad/DBA_ROLE_PRIVS.html">DBA_ROLE_PRIVS</a>                            <a href="../orad/USER_ROLE_PRIVS.html">USER_ROLE_PRIVS</a>      <a href="../orad/ROLE_ROLE_PRIVS.html">ROLE_ROLE_PRIVS</a>
 <a href="../orad/DBA_SYS_PRIVS.html">DBA_SYS_PRIVS</a>                             <a href="../orad/USER_SYS_PRIVS.html">USER_SYS_PRIVS</a>       <a href="../orad/ROLE_SYS_PRIVS.html">ROLE_SYS_PRIVS</a>
</pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="role_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

