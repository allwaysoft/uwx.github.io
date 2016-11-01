---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>chroot</h1> 
<p> change the root directory to the supplied directory
<i>newroot </i>and exec <i>command</i>, if supplied, or an interactive copy of your
shell. </p>
<pre>Syntax
      chroot [-u -<i>user</i>] [-g -<i>group</i>] [-G -<i>group</i>,<i>group</i>,...] <i>newroot</i> [<i>command</i>] [<i>ARGS</i>]

Options
   -u   Set the USER to <i>user</i> after the chroot has taken place.

   -g   Set the GROUP to <i>group</i> after the chroot has taken place.

   -G   Set the Group List to <i>group</i>(s) after the chroot has taken place.</pre>
<p> The following environment variable is referenced by chroot:</p>
<p> <span class="code">SHELL</span> If set, the string specified by <span class="code">SHELL</span> is interpreted as the name
of the shell to exec.<br> 
If the variable <span class="code">SHELL</span> is not set, /bin/sh
is used.</p>
<p class="quote"><i>“Humility, that low, sweet root, 
From which all heavenly virtues shoot” - Thomas Moore (The Loves of the Angels)</i></p>
<p><b>Related:</b></p>
<p><a href="cron.html">cron</a> - Daemon to execute scheduled commands<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="cd.html">chdir</a> - change the current working Folder</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
