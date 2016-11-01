---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>uname</h1> 
<p>Print system information, print information about the machine and operating system it is run on. If no options are given, `uname' acts as if the `-s' option were given.</p>
<pre>Syntax
      uname [<i>options</i>]...

Options

 -a
 --all
     Print all of the below information.

 -m
 --machine
     Print the machine (hardware) type.

 -n
 --nodename
     Print the machine's network node hostname.

 -p
 --processor
     Print the machine's processor type
<b></b>
 -r
 --kernel-release
     Print the kernel release 
<i></i>
 -s
 --kernel-name
     Print the kernel name

 -v
 --kernel-version
     Print the kernel version

 -i
 --hardware-platform
     Print the hardware platform or "unknown"

 -o
 --operating-system
     Print the operating system </pre>
<p>If multiple options or `<span class="code">-a</span>' are given, the selected information is printed in this order: <br><br>
SYSNAME NODENAME RELEASE OSVERSION MACHINE</p>
<p>The full documentation for uname is maintained as a Texinfo manual. If the info and uname programs are properly installed at your site, the command:<br>
<span class="code"> info coreutils aquname invocationaq</span> should give you access to the complete manual. <br>
<br>
The OSVERSION, at least, might be multiple words. <br>
For example: <br>
<span class="code">$uname -a <br>
=&gt; Linux hayley 1.0.4 #3 Thu May 12 18:06:34 1994 i486</span></p>
<p class="quote"><i>“What's in a name? That which we call a rose by any other name would smell as sweet” ~ William Shakespeare</i></p>
<p><b>Related:</b><br>
<br>
<a href="tty.html"> </a><a href="env.html">env</a> - Display, set, or remove 
environment variables <br>
<a href="groups.html">groups</a> - Print group names a user is in<br>
<a href="hostname.html">hostname</a> - Print or set system name <br>
<a href="id.html">id</a> - Print user and group id's<br>
<a href="logname.html">logname</a> - Print current login name<br>
ps - list processes<br>
<a href="tty.html">tty</a> - Print filename of terminal on stdin<br>
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
<div id="bl" class="footer"><a href="uname.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

