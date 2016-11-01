---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>ALTER RESOURCE COST</h1> 
<p>Define the resource costs used by the CREATE PROFILE command<br>
  <br>
  Syntax:</p>
<pre>   ALTER RESOURCE COST <i>option(s)</i>

options are any combination of

   CPU_PER_SESSION <i>int</i>
   CONNECT_TIME <i>int</i>
   LOGICAL_READS_PER_SESSION <i>int</i>
   PRIVATE_SGA <i>int</i>
</pre>
<p><i>int</i> is the integer weight applied to each option<br>
  <br>
  The units being costed are <br>
  CPU = 1/100 sec<br>
  connect_time = 1/100 sec<br>
SGA = bytes</p>
<p>You must have the system privilege: ALTER RESOURCE COST <br>
  <br>
  <i> <span class="quote">"There is no such thing as an ugly woman - there are only the ones 
    who do not know how to make themselves attractive" ~ Christian 
    Dior</span><br>
</i><br>
  <b>Related Commands:<br>
  <br>
  </b>PROFILE - <a href="profile_c.html">CREATE PROFILE</a> <br>
PROFILE - <a href="profile_a.html">ALTER PROFILE</a></p>
<p><b>Related Views:</b></p>
<p class="code">&nbsp;<a href="../orad/DBA_PROFILES.html">DBA_PROFILES</a><br> 
&nbsp;<a href="../orad/DBA_SYS_PRIVS.html">DBA_SYS_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/USER_SYS_PRIVS.html">USER_SYS_PRIVS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../orad/ROLE_SYS_PRIVS.html">ROLE_SYS_PRIVS</a> <br>
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
<div id="bl" class="footer"><a href="resource_a.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

