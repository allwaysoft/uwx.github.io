---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>nice</h1> 
<p>Run a command with modified scheduling priority, print or modify 
the scheduling priority of a job.</p>
<pre>SYNTAX
      nice [<i>Option</i>]... [<i>Command</i> [<i>Arg</i>]...]

OPTION
      -n <i>MyADJUSTMENT</i>
      -<i>MyADJUSTMENT</i>
      --adjustment=<i>MyADJUSTMENT</i>

 Priority can be adjusted by `nice' over the range
  of -20 (the highest priority) 
  to 19 (the lowest)</pre>
<p> If no arguments are given, `nice' prints the current scheduling 
  priority, which it inherited. </p>
<p>Otherwise, `nice' runs the given <i>Command</i> with its scheduling 
  priority adjusted. <br>
  <br>
  If no option for <i>MyADJUSTMENT</i> is given, the priority of the command is 
  incremented by 10. You must have appropriate privileges to specify a negative 
  adjustment. <br>
  <br>
  Because most shells have a built-in command by the same name, using the unadorned 
  command name in a script or interactively can get you different functionality 
  than that described here.</p>
<p><b>Examples</b></p>
<p>Run an echo command with low priority:<br>
<span class="code">sudo nice -n 10 echo Hello</span></p>
<p>Run an echo command with high priority:<br>
<span class="code">sudo nice -n -10 echo Hello</span><br>
  <br>
  <i class="quote">"Work is achieved by those employees who have not yet reached their 
  level of incompetence" ~ Laurence J. Peter (The 
Peter Principle)</i> </p>
<p><b>Related:</b><br>
<br>
<a href="nohup.html">nohup</a> - Run a command immune to hangups<br>
<a href="sync.html">sync</a> - Synchronize data on disk with memory<br>
<a href="sleep.html">sleep</a> - Delay for a specified time <br>
Equivalent Windows commands: 
<a href="../nt/start.html">START</a> /HIGH - Start a program with `high' scheduling priority</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="nice.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

