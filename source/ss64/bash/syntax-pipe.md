---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>Pipe</h1> 
<p>Redirect the output from one command as input for another.<br>
  A <code>pipeline</code> is a sequence of simple commands separated by <code>`|'</code>. 
</p>
<p>The format for a pipeline is 
</p><pre>[<code>time</code> [<code>-p</code>]] [<code>!</code>] <i>command1</i> [<code>|</code> <i>command2</i> ...]
</pre>
<p>The output of each command in the pipeline is connected to the input of the 
  next command. That is, each command reads the previous command's output. </p>
<p>The reserved word <code>time</code> causes timing statistics to be printed 
  for the pipeline once it finishes. The statistics currently consist of elapsed 
  (wall-clock) time and user and system time consumed by the command's execution. 
  <br>
  <br>
  The <code>`-p'</code> option changes the output format to that specified by 
  POSIX.<br>
  <br>
  The <code>TIMEFORMAT</code> variable can be set to a format string that specifies 
  how the timing information should be displayed. The use of <code>time</code> 
  as a reserved word permits the timing of shell builtins, shell functions, and 
  pipelines. An external <code>time</code> command cannot time these easily. </p>
<p>If the pipeline is not executed asynchronously, the shell waits for all commands 
  in the pipeline to complete. </p>
<p>Each command in a pipeline is executed in its own subshell. The exit status 
  of a pipeline is the exit status of the last command in the pipeline. If the 
  reserved word <code>`!'</code> precedes the pipeline, the exit status is the 
  logical negation of the exit status of the last command. </p>
<p><b>Related:</b><br>
<br>
<a href="syntax-redirection.html">Redirection</a> - redirecting input/output to a file <br>
Windows equivalent: <a href="../nt/syntax-redirection.html"> Redirection</a> - Spooling  to file, piping input
</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-pipe.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
