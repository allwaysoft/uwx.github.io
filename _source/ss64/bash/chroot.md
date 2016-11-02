---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>chroot</h1> 
<p>Run a command with a different root directory<br>
  'chroot' runs a command with a specified root directory. On many systems, only 
  the super-user can do this. <br>
</p>
<pre>SYNTAX
     chroot <i>NEWROOT</i> [<i>COMMAND</i> [<i>ARGS</i>]...]

     chroot OPTION</pre>
<p>Ordinarily, filenames are looked up starting at the root of the directory structure, i.e. '/' <br>
<br>'chroot' changes the root to the directory <i>NEWROOT</i> (which must exist) and then runs <i>COMMAND</i> with optional <i>ARGS</i>. <br>
<br>If COMMAND is not specified, the default is the value of the `SHELL' environment variable or `/bin/sh' if not set, invoked with the `-i' option. <br>
<br>The only options are `--help' and `--version' </p>
<p class="quote"><i>“Humility, that low, sweet root, <br>
From which all heavenly virtues shoot” ~ 
Thomas Moore (The Loves of the Angels)</i></p>
<p><b>Related:</b><br>
<a href="builtin.html"><br>
builtin</a> - Run a shell builtin<br>
<a href="cron.html">cron</a> - Daemon to execute scheduled commands<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="source.html">.source</a> - Run commands from a file <br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="watch.html">watch</a> - Execute/display a program periodically<br>
Equivalent Windows command: 
RUNAS - Run command As</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chroot.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

