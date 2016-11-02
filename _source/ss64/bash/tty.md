---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tty</h1> 
<p>Print file name of terminal on standard input, print the file 
  name of the terminal connected to standard input. It prints `not a tty' if standard 
input is not a terminal.</p>
<pre>Syntax
      tty [<i>option</i>]...

Options

   -s
   --silent
   --quiet
           Print nothing; only return an exit status.

 Exit status:

     0 if standard input is a terminal
     1 if standard input is not a terminal
     2 if given incorrect arguments
     3 if a write error occurs</pre>
<p class="quote"><i>"Behind every great fortune there is a crime" ~ Honore 
  de Balzac </i></p>
<p><b>Related:</b><br>
<br>
<a href="env.html">env</a> - Display, set, or remove environment variables <br>
<a href="hostname.html">hostname</a> - Print or set system name <br>
<a href="id.html">id</a> - Print user and group id's <br>
<a href="logname.html">logname</a> - Print current login name<br>
<a href="uname.html">uname</a> - Print system information <br>
<a href="users.html">users</a> - Print login names of users currently logged in <br>
<a href="who.html">who</a> - Print who is currently logged in <br>
whoami - Print the current user id and name (`id -un') <br>
Equivalent Windows command: 
<a href="../nt/set.html">SET</a> %COMPUTERNAME%</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

