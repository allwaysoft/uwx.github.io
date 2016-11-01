---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>users</h1> 
<p>Print login names of users currently logged in, print on a single 
  line a blank-separated list of user names of users currently logged in to the 
current host.</p>
<pre>Syntax
      users [<i>file</i>]
</pre>
<p><span class="body">  With no <i>file</i> argument, `users' extracts its information from the
file `/var/run/utmp'.  </span></p>
<p><span class="body">If a <i>file</i> argument is given, `users' uses that
file instead.  A common choice is `/var/run/wtmp'.</span></p>
<pre>The only options are `--help' and `--version'. </pre>
<p>Each user name corresponds to a login session, so if a user has 
  more than one login session, that user's name will appear the same number of 
  times in the output. </p>
<p class="quote"><i>“For solving a surprisingly large and varied number of problems, crowds are smarter than individuals” ~ Michael Shermer</i></p>
<p><b>Related:</b><br>
<br>
<a href="groups.html">groups</a> - Print group names a user is in<br>
<a href="hostname.html">hostname</a> - Print or set system name <br>
<a href="id.html">id</a> - Print user and group id's<br>
<a href="logname.html">logname</a> - Print current login name<br>
printenv - Print environment variables.<br>
<a href="uname.html">uname</a> - Print system information <br>
<a href="who.html">who</a> - Print who is currently logged in <br>
whoami - Print the current user id and name (`id -un') <br>
Equivalent Windows commands: <a href="../ps/get-aduser.html">Get-adUser</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="users.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

