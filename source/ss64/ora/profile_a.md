---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER PROFILE</h1> 
<p>Edit the resource limits associated with a user profile<br>
  <br>
  Syntax:</p>
<pre>   <b>ALTER PROFILE <i>profile_name </i>LIMIT <i>limit(s) range</i></b>

KEY
   limit  =  SESSIONS_PER_USER
             CPU_PER_SESSION
             CPU_PER_CALL
             CONNECT_TIME
             IDLE_TIME
             LOGICAL_READS_PER_SESSION
             LOGICAL_READS_PER_CALL
             COMPOSITE_LIMIT
             PRIVATE_SGA

   range  =  UNLIMITED | DEFAULT | <i>integer</i>

for PRIVATE_SGA specify K or M
e.g.
ALTER PROFILE MyProfile LIMIT PRIVATE_SGA 50 K

New with Oracle 8 are password related profile limits…

Syntax:

   <b>ALTER PROFILE <i>profile_name</i> LIMIT <i>pw_limit(s) range</i></b>

KEY
  pw_limit = PASSWORD_LIFE_TIME
             PASSWORD_GRACE_TIME
             PASSWORD_REUSE_TIME
             PASSWORD_REUSE_MAX
             FAILED_LOGIN_ATTEMPTS
             PASSWORD_LOCK_TIME

   range  =  UNLIMITED | DEFAULT | <i>expression</i>

Syntax to customise password verification:

   <b>ALTER PROFILE <i>profile_name</i> LIMIT PASSWORD_VERIFY_FUNCTION {<i>plsql_function</i></b> <b>| NULL | DEFAULT}
</b>
Definitions
   CONNECT_TIME - Max. time user can stay connected 
   IDLE_TIME    - Max. time user can stay connected &amp; idle
   PRIVATE_SGA  - Session space in the shared pool - K or M (bytes)
   COMPOSITE_LIMIT - A weighted sum of CPU_PER_SESSION, CONNECT_TIME, LOGICAL_READS_PER_SESSION, and PRIVATE_SGA. 
   PASSWORD_LIFE_TIME  - Expire password after X no of days
   PASSWORD_GRACE_TIME - Lock account X days after LIFE_TIME expires.
   PASSWORD_REUSE_TIME - Min. no. days before the same pw can be reused
   PASSWORD_REUSE_MAX  - Min. no. of number of pw changes before the current password can be reused
   FAILED_LOGIN_ATTEMPTS - Max no. of incorrect logins before account is locked
   PASSWORD_LOCK_TIME  - Max. no. of days an account will be locked </pre>
<p>DEFAULT refers to values set in the DEFAULT user profile.<br>
  <br>
<i class="quote">"Oh judge! Your damn laws! The good people don't need them, and the bad people don't obey them" ~ Ammon Hennacy</i><br>
  <br>
  <b> Related Commands:<br>
  <br>
  </b>PROFILE - <a href="profile_c.html">CREATE PROFILE</a> <br>
  PROFILE - <a href="profile_d.html">DROP PROFILE</a><br>
  ROLE - <a href="role_s.html">SET ROLE</a> <br>
  ROLE - <a href="role_a.html">ALTER ROLE</a></p>
<p><b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/DBA_PROFILES.html">DBA_PROFILES</a><br> 
&nbsp;<a href="../orad/DBA_SYS_PRIVS.html">DBA_SYS_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SYS_PRIVS.html">USER_SYS_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ROLE_SYS_PRIVS.html">ROLE_SYS_PRIVS</a> <br>
  <br> 
&nbsp;<a href="../orav/V$SESSION.html">V$SESSION</a><br> 
&nbsp;<a href="../orav/V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a><br> 
&nbsp;<a href="../orav/V$SESSTAT.html">V$SESSTAT</a><br> 
&nbsp;<a href="../orav/V$SESS_IO.html">V$SESS_IO</a></p><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="profile_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

