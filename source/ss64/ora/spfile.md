---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE SPFILE</h1> 
<p>Export a text initialization parameter file (INIT.ORA) into a binary server parameter file.</p>
<p>  Syntax:</p>
<pre>   CREATE SPFILE [='<i>SPfile_name</i>'] FROM PFILE [='<i>pfile_name</i>'];</pre>
<p>A text parameter file can be easily edited in a text editor.</p>
<p>You can execute this statement either before or after instance startup. If you have already started the instance using <i>spfile_name</i>, you cannot specify the same <i>spfile_name </i>in this statement. </p>
<p> Oracle will look for default files, but typically you will need to specify the full pathname.<br>
  <span class="quote"><br>
  <i> "There are 10 kinds of people in the world: <br>
  those who
understand binary, and those who don't"</i></span></p>
<p><b>Related:</b></p>
<p><a href="syntax-initora.html">Server Parameters for Oracle</a>
<br>
<a href="pfile.html">CREATE PFILE</a><a href="user_c.html"><br>
</a>
<a href="startup.html">STARTUP</a> pfile="… "<br>
  <br>
  <b>Related Views:</b>
</p><pre>                                           <a href="../orad/USER_PASSWORD_LIMITS.html">USER_PASSWORD_LIMITS</a>  
                                                                <a href="../orad/SESSION_ROLES.html">SESSION_ROLES</a>
                                                                <a href="../orad/SESSION_PRIVS.html">SESSION_PRIVS</a>
                                                                <a href="../orad/SESSION_CONTEXT.html">SESSION_CONTEXT</a>
 <a href="../orad/DBA_TS_QUOTAS.html">DBA_TS_QUOTAS</a>                             <a href="../orad/USER_TS_QUOTAS.html">USER_TS_QUOTAS</a>
 <a href="../orad/DBA_USERS.html">DBA_USERS</a>            <a href="../orad/ALL_USERS.html">ALL_USERS</a>            <a href="../orad/USER_USERS.html">USER_USERS</a>
 <a href="../orav/V$SESSION.html">V$SESSION</a>
 <a href="../orav/V$SESSION_CONNECT_INFO.html">V$SESSION_CONNECT_INFO</a></pre><!-- #BeginLibraryItem "/Library/foot_ora.lbi" --><p>
<!-- oracle-footer -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4275490898"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="spfile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

