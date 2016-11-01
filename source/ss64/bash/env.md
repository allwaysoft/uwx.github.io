---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>env</h1> 
<p>Display, set, or remove environment variables, Run a command in 
a modified environment.</p>
<pre><i>Syntax</i>
     env [OPTION]... [NAME=VALUE]... [COMMAND [ARGS]...]

Options

  -u NAME
  --unset=NAME
       Remove variable NAME from the environment, if it was in the
       environment.

  -
  -i
  --ignore-environment
       Start with an empty environment, ignoring the inherited
       environment.</pre>
<p><span class="body"> Arguments of the form `VARIABLE=VALUE' set the environment 
  variable VARIABLE to value VALUE. <br>
  <br>
  VALUE can be empty (`VARIABLE='). Setting a variable to an empty value is different 
  from unsetting it.<br>
  <br>
  The first remaining argument specifies the program name to invoke; it is searched 
  for according to the `PATH' environment variable. Any remaining arguments are 
  passed as arguments to that program.<br>
  <br>
  If no command name is specified following the environment specifications, the 
  resulting environment is printed. This is like specifying a command name of 
  `printenv'.</span> </p>
<p class="quote"><i>"It isn't the pollution that is harming the environment, it's the
impurities in the air and water" ~ Dan Quayle</i></p>
<p><b>Related:</b><br>
<br>
<a href="hostname.html">hostname</a> - Print or set system name<br>
<a href="local.html">local</a> - Create variables <br>
<a href="logname.html">logname</a> - Print current login name<br>
printenv - Print environment variables <br>
<a href="readonly.html">readonly</a> - Mark variables/functions as readonly<br>
<a href="set.html">set</a> - Manipulate shell variables and functions<br>
<a href="shift.html">shift</a> - Shift positional parameters<br>
<a href="shopt.html">shopt</a> - Shell Options <br>
<a href="uname.html">uname</a> - Print system information<br>
<a href="unset.html">unset</a> - Remove variable or function names<br>
<a href="who.html">who</a> - Print who is currently logged in<br>
Equivalent Windows command: 
<a href="../nt/set.html">SET</a> / <a href="../nt/setx.html">SETX</a> - Display, set, or remove   environment variables</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="env.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

