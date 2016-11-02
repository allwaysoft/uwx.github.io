---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>DROP ROLE</h1> 
<p>Drop a user role.<br>
  <br>
  Syntax:</p>
<pre>   DROP ROLE <i>role</i></pre>
<p>When dropping a role, Oracle will automatically revoke all grants of the role from all users (and roles).</p>
<p>User sessions in which the role is already enabled are not affected until they disconnect.</p>
<p><i class="quote">"Small is beautiful" ~ E. F.Schumacher</i><br>
<br>
<b>Related Commands:</b><br>
<br>
PROFILE - <a href="profile_a.html">ALTER PROFILE</a><br>
ROLE - <a href="role_a.html">ALTER ROLE</a><br>
ROLE - <a href="role_s.html">SET ROLE</a> <br>
<br>
<b>Related Views:</b></p>
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
<div id="bl" class="footer"><a href="role_d.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

