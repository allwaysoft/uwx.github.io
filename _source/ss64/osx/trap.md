---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>trap</h1> 
<p>Execute a command when the shell receives a signal.</p>
<pre>Syntax
      trap [-lp] [[<i>arg</i>] <i>sigspec</i> ...]

Key
   -p   Display signal commands (or trap commands for <i>sigspec</i>)

   -l   Print a list of signal names and their corresponding numbers.

   arg  The command to be executed when the shell receives signal(s) <i>sigspec</i>.
</pre>
<p>  If <span class="code"><i>arg</i></span> is absent (and there is a single sigspec) or -, each specified signal is reset to its original
disposition (the value it had upon entrance to the shell). </p>
<p>If <span class="code"><i>arg</i></span> is the null string the signal specified by each <i>sigspec</i> is ignored by the shell and by the commands it invokes.</p>
<p> If <span class="code"><i>arg</i></span> is not present and -p has been supplied, then the trap commands associated with each <i>sigspec</i> are displayed. If no arguments are supplied or if only -p is given, trap prints the list of 
commands associated with each signal. </p>
<p>Each sigspec is either a signal name defined in &lt;signal.h&gt;, or a signal number. Signal names are case insensitive and the SIG prefix is optional. </p>
<p>If a <i>sigspec </i>is EXIT (0) the command <span class="code"><i>arg</i></span> is executed on exit from the shell. <br>
If a
<i>sigspec</i> is DEBUG, the command <span class="code"><i>arg</i></span> is executed before every simple command, for command, case command, select command, every arithmetic for command, and before the first command executes
in a shell function (see SHELL GRAMMAR). Refer to the description of the extdebug option to the shopt builtin for details of its effect on the DEBUG trap. </p>
<p>If a sigspec is ERR,
the command <span class="code"><i>arg</i></span> is executed whenever a simple command has a non-zero exit status, subject to the following conditions. The ERR trap is not executed if the failed command is part of the
command list immediately following a <a href="while.html">while</a> or until keyword, part of the test in an if statement, part of a &amp;&amp; or || list, or if the command's return value is being inverted via !.<br>
These are the same conditions obeyed by the errexit option. </p>
<p>If a sigspec is RETURN, the command <span class="code"><i>arg</i></span> is executed each time a shell function or a script executed with the . or source 
builtins finishes executing. </p>
<p>Signals ignored upon entry to the shell cannot be trapped or reset. Trapped signals that are not being ignored are reset to their original values in a<br>
child process when it is created. </p>
<p>The return status is false if any sigspec is invalid; otherwise trap returns true.</p>
<p>trap is a bash built in command.</p>
<p class="quote"><i>“When elephant steps on a trap, no more trap” ~ African Proverb</i></p>
<p><b>Related:</b></p>
<p>
  <a href="exec.html">exec</a> - Execute a command</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="trap.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
