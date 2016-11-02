---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<mv><!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>nohup</h1> 
<p>No Hang Up. Run a command immune to hangups, runs the given <i>command</i> with hangup 
  signals ignored, so that the command can continue running in the background 
after you log out.</p>
<pre>SYNTAX
      nohup <i>Command</i> [<i>Arg</i>]...</pre>
<p>`nohup' increases the scheduling priority of COMMAND by 5, this 
  gives a slightly lower priority. <br>
  <br>
  If standard output is a terminal, it and standard error are redirected so that 
  they are appended to the file <span class="code">nohup.out</span>; if that cannot be written to, they 
  are appended to the file <span class="code">$HOME/nohup.out</span>. If that cannot be written to, the 
  command is not run.<br>
  <br>
  If `nohup' creates either  <span class="code">nohup.out</span> or <span class="code">$HOME/nohup.out</span>, it creates it with 
  no "group" or "other" access permissions. It does not change the permissions 
  if the output file already existed. <br>
  <br>
  `nohup' does not automatically put the command it runs in the background; you 
  must do that explicitly, by ending the command line with an `&amp;'. </p>
<p><b>Example</b></p>
<p>bash script that takes any simple command  and runs it in the background. Logging  output and error output to  <span class="code">~/launch</span> The output files are suffixed with the date and time including nanoseconds so that two of the same command run in the same second won’t try to write to the same file.</p>
<pre>#!/bin/bash
<a href="mkdir.html">mkdir</a> -p ~/launch
logfilename="${1##*/}_$(<a href="date.html">date</a> +%F_%H:%M:%S,%N)"
echo "== LAUNCH $@ ==" &gt; ~/launch/${logfilename}_stdout.log
echo "== LAUNCH $@ ==" &gt; ~/launch/${logfilename}_stderr.log
nohup "$@" &gt;&gt;~/launch/${logfilename}_stdout.log 2&gt;&gt;~/launch/${logfilename}_stderr.log &amp;</pre>
<p class="quote"><i>“Love is a perky elf dancing a merry little jig and then suddenly he turns on you with a miniature machine gun” ~ Matt Groening</i></p>
<p><b>Related:</b><br>
<br>
<a href="builtin.html">builtin</a> - Run a shell builtin <br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
<a href="exec.html">exec</a> - Execute a command<br>
<a href="if.html">if</a> - Conditionally perform a command<br>
<a href="nice.html">nice</a> - Change job scheduling priority <br>
<a href="screen.html">screen</a> - Multiplex terminal, run remote shells via ssh<br>
<a href="source.html">.source</a> - Run commands from a file <br>
<a href="su.html">su</a> - Run a command with substitute user and group id</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nohup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

</mv>