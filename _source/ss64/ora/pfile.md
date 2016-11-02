---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ora.lbi" --><!-- #EndLibraryItem --><h1>CREATE PFILE </h1> 
<p>Export a binary server parameter file into a text initialization parameter file (INIT.ORA).</p>
<p>  Syntax:</p>
<pre>   CREATE PFILE [='<i>pfile_name</i>'] FROM SPFILE [='<i>SPfile_name</i>'];

</pre>
<p>A  text parameter pfile can be easily edited in a text editor.</p>
<p>You can execute this statement either before or after instance startup. </p>
<p> Oracle will look for default files, but typically you will need to specify the full pathname.<br>
  <br>
  <i> "Creation proceeds from moment to moment" - N. M. Chatterjee</i></p>
<p>  <b> Related:</b></p>
<p><a href="syntax-initora.html">Server Parameters for Oracle</a><br>
<a href="spfile.html">CREATE SPFILE</a><br>
<a href="startup.html">STARTUP</a> pfile="… "<br>
    <br>
<b>Related Views:</b></p>
<pre>                                           <a href="../orad/USER_PASSWORD_LIMITS.html">USER_PASSWORD_LIMITS</a>  
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
<div id="bl" class="footer"><a href="pfile.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

