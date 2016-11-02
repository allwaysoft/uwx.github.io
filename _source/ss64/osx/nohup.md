---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>nohup</h1> 
<p>Run a command immune to hangups, runs the given <i>Command</i> 
  with hangup signals (SIGHUP) ignored, so that the command can continue running in the 
background after you log out.</p>
<pre>Syntax
      nohup [<i>Command</i> [<i>Arg</i>]...]         </pre>
<p> Run <i>command</i> such that it will ignore hangup signals. </p>
<p>Note that commands can set their own response to hangups, overriding 
  nohup. </p>
<p>Without an argument (allowed in only a shell script), causes the 
  shell to ignore hangups for the remainder of the script. `nohup' does not automatically 
  put the command it runs in the background; you must do that explicitly, by ending 
  the command line with an `&amp;'. </p>
<p>If the output file nohup.out cannot be created in the current directory, the nohup
utility uses the directory named by the variable HOME to create the file.</p>
<p>If the standard output is a terminal, the standard output is
appended to the file nohup.out in the current directory. <br>
If standard error is a terminal, it is directed to the same place as the standard output.</p>
<p> Exit Status<br>
126 The utility was found but could not be invoked.<br> 127 The utility could not be found or an error occurred in nohup.<br> Otherwise, the exit status of nohup shall be that of utility.</p>
<p><b>Example</b></p>
<p>bash script that takes any simple command and runs it in the background. Logging output and error output to <span class="code">~/launch</span> The output files are suffixed with the date and time.</p>
<pre>#!/bin/bash
<a href="mkdir.html">mkdir</a> -p ~/launch
logfilename="${1##*/}_$(<a href="date.html">date</a> +%F_%H%M%S)"
echo "== LAUNCH $@ ==" &gt; ~/launch/${logfilename}_stdout.log
echo "== LAUNCH $@ ==" &gt; ~/launch/${logfilename}_stderr.log
nohup "$@" &gt;&gt;~/launch/${logfilename}_stdout.log 2&gt;&gt;~/launch/${logfilename}_stderr.log &amp;</pre>
<p class="quote"><i>“Love is a perky elf dancing a merry little jig and then suddenly he turns on you with a miniature machine gun” ~ Matt Groening</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/nohup.1.html">nohup</a> - Apple.com<br>
<a href="chroot.html">chroot</a> - Run a command with a different root directory<br>
  <a href="exec.html">exec</a> - Execute a command<br>
  <a href="if.html">if</a> - Conditionally perform a command<br>
  <a href="nice.html">nice</a> - Change job scheduling priority <br>
<a href="screen.html">screen</a> - Multiplex terminal, run remote shells via ssh<br>
<a href="su.html">su</a> - Run a command with substitute user and group id</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nohup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
