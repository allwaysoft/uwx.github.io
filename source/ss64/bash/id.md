---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>id</h1> 
<p>Print real and effective user id (uid) and group id (gid), prints 
  identity information about the given user, or if no user is specified the current process.</p>
<pre>Syntax
      id [<i>options</i>]... [<i>username</i>]
</pre>
<p><span class="body">  By default, it prints the real user id, real group id, effective
  user id if different from the real user id, effective group id if
  different from the real group id, and supplemental group ids.<br>
    <br>
  Each of these numeric values is preceded by an identifying string and 
  followed by the corresponding user or group name in parentheses.</span></p>
<pre>OPTIONS
   The options cause `id' to print only part of the above information.

-g
--group
     Print only the group id.

-G
--groups
     Print only the supplementary groups.

-n
--name
     Print the user or group name instead of the ID number.
     Requires -u, -g, or -G

-r
--real
     Print the real, instead of effective, user or group id.  
     Requires -u, -g, or -G

-u
--user
     Print only the user id.</pre>
<p class="quote"><i>"Personal identity seems like it's just such an American archetype, from Holly Golightly re-inventing herself in 'Breakfast At Tiffany's' to Jay Gatsby in 'The Great Gatsby.' It seems like the sort of archetypal American issue. If you're given the freedom to be anything, or be anyone, what do you do with it?" ~ Chuck Palahniuk</i></p>
<p><b>Related:</b><br>
<br>
<a href="echo.html">echo</a> - Display message on screen <br>
<a href="env.html">env</a> - Display, set, or remove environment variables <br>
<a href="groups.html">groups</a> - Print group names a user is in <br>
<a href="hostname.html">hostname</a> - Print or set system name <br>
<a href="logname.html">logname</a> - Print current login name <br>
<a href="uname.html">uname</a> - Print system information<br>
<a href="users.html">users</a> - Print login names of users currently logged 
in <br>
<a href="who.html">who</a> - Print who is currently logged in <br>
whoami - Print the current user id and name (`id -un') <br>
Equivalent Windows command: <a href="../nt/echo.html"> ECHO </a> %USERNAME%</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="id.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

