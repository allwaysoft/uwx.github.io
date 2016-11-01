---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>exec</h1> 
<p>Execute a command</p>
<pre>Syntax
      exec [-cl] [-a <var>name</var>] [<var>command</var> [<var>arguments</var>]]

Options
      -l   Place a dash at the beginning of the zeroth arg passed to <var>command</var>.
           (This is what the <code>login</code> program does.)

      -c   Causes <var>command</var> to be executed with an empty environment.

      -a   The shell passes <var>name</var> as the zeroth argument to <var>command</var>.</pre>
<p> If <var>command</var> is supplied, it replaces the shell without creating a new process. If no <var>command</var> is specified, redirections can be used to affect the current shell environment. <br>
  <br>
  If there are no redirection errors, the return status is zero; otherwise the return status is non-zero.</p>
<p>exec is a bash built in command.</p>
<p>To run an executable file or a shell script from the command line it is often not necessary to use <span class="code">exec</span> at all, just prefix the filename with .<span class="code">/ </span><br>
bash will only search the <b>path </b>not the current working directory for the file. </p>
<p>To execute a program/script in the current working directory use:</p>
<p><span class="code">./<i>file_name</i></span><br>
<span class="code">or<br>
./<i>ScriptName</i> </span><br><br>
You might be tempted to 'fix' this by adding '.' to  $PATH but this is widely considered to be a bad idea for security reasons.</p>
<p class="quote"><i> "In art the hand can never execute anything higher than the heart can inspire" ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b><br>
<br>
exit - Exit the shell<br>
<a href="builtin.html">builtin</a> - Run a shell builtin<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later time<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="syntax-script.html">Run a bash script</a><br>
<a href="source.html">.source</a> 
- Run commands from a file <br>
<a href="su.html">su</a> - Run a command with substitute user and group id<br>
<a href="type.html">type</a> - Describe a command <br>
<a href="watch.html">watch</a> - Execute/display a program periodically<br>
Equivalent Windows command: <a href="../nt/start.html">START</a> / <a href="../nt/cmd.html">
CMD</a> - Start a new CMD shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="exec.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

