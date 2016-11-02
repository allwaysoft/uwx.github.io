---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>DROP PROFILE</h1> 
<p>Drop a user profile<br>
  <br>
  Syntax:</p>
<pre>   DROP PROFILE <i>profile_name</i> [CASCADE]</pre>
<p>If a user is currently assigned to a profile, then the profile cannot be dropped, specifying CASCADE will remove all such profile assignments 
  before dropping the profile itself.</p>
<p>If you do manage to disconnect a user account from it's assigned profile e.g. via export and import, you will then find the account is unable to login (invalid username/password) to resolve this, recreate the profile or assign the user to a different profile (ALTER USER…)<br>
<span class="quote"><br>
<i>"I would rather train someone and lose them, then not train them and 
  keep them" ~ Zig Ziglar</i></span><b><br>
  <br>
  Related Commands:<br>
  <br>
  </b>PROFILE - <a href="profile_c.html">CREATE PROFILE</a> <br>
  PROFILE - <a href="profile_a.html">ALTER PROFILE</a><br>
ROLE - <a href="role_d.html">DROP ROLE</a></p>
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
<div id="bl" class="footer"><a href="profile_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

