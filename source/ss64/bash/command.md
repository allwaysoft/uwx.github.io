---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>command</h1> 
<p><span class="body">Run <var>command</var> with <var>arguments</var> 
ignoring any shell function named <var>command</var>. </span></p>
<pre>SYNTAX
      command [-pVv] <i>command</i> [<i>arguments</i> ...]

OPTIONS
      -P   Use a default path
      -v   Verbose
      -V   More verbose
</pre>
<p>Only shell builtin commands or commands found 
  by searching the <code>PATH</code> are executed. If there is a shell function 
  named <code>ls</code>, running <samp>`command ls'</samp> within the function 
  will execute the external command <code>ls</code> instead of calling the function 
  recursively. <br>
  <br>
  The <samp>`-p'</samp> option means to use a default value for <code>$PATH</code> 
  that is guaranteed to find all of the standard utilities. The return status 
  in this case is 127 if <var>command</var> cannot be found or an error occurred, 
  and the exit status of <var>command</var> otherwise. <br>
  <br>
  If either the <samp>`-V'</samp> or <samp>`-v'</samp> option is supplied, a description 
  of <var>command</var> is printed. The <samp>`-v'</samp> option causes a single 
  word indicating the command or file name used to invoke <var>command</var> to 
  be displayed; the <samp>`-V'</samp> option produces a more verbose description. 
  In this case, the return status is zero if <var>command</var> is found, and 
non-zero if not. </p>
<p><span class="body"><i class="quote">"If you're not failing every now and again, it's a sign you're not doing anything very innovative" - Woody Allen</i><br>
</span><b><br>
Related:</b><br>
<br>
<a href="builtin.html">builtin</a> - Run a shell builtin<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="source.html">.source</a> - Run commands from a file <br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="type.html">type</a> - Describe a command <br>
<a href="watch.html">watch</a> - Execute/display a program periodically </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="command.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

