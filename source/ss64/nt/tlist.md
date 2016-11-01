---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TLIST (<a href="../links/windows.html#kits">Resource Kit</a> &amp; Windows 2000 support tools)</h1>
<p>Task List.<br>
<br>
Show the command, command line, working directory, memory usage and DLLs for each running task. This command is no longer supplied with recent versions of the Windows resource kit, having been replaced by TASKLIST, however if you can find a copy Tlist does have the advantage of showing the full path of the process. </p>
<pre>Syntax
      TLIST
      TLIST -t
      TLIST <i>pid</i>
      TLIST -t <i>pid</i>
      TLIST <i>pattern<pattern></pattern></i>
      TLIST -t <i>pattern<pattern></pattern></i>

Key
   -t   : Show Task dependencies in Tree form
  <pid>
   pid  : List module information for this task
          if no PID is given - all Tasks are listed
     <pattern>
pattern : A complete task name or expression pattern (e.g. CMD.*)
          if a pattern is given it will match against
          task names or window titles.</pattern></pid></pre>
<p> <b> Example:</b><br>
  <br>
  The following batch file will show the full path of all running programs.</p>
<pre>@ECHO off
FOR /f "tokens=1" %%G in ('tlist') DO (call :s_item %%G)
GOTO :eof

:s_item
tlist %1 | find "CmdLine"</pre>
<p class="quote"><i> "When I first started running, I was so embarrassed,
I'd walk when cars passed me. I'd pretend I was
looking at the flowers" ~ Joan Benoit Samuelson,
1984 Olympic Marathon gold medalist</i></p>
<p>  <b>Related:</b><br>
  <br>
<a href="pslist.html">PsList</a> - List detailed information about processes<br>
<a href="tasklist.html">TASKLIST</a> - List running applications and services<br>
  <a href="mem.html">MEM</a> - Display memory usage<br>
  <a href="winmsd.html">WINMSD</a> - Windows NT Diagnostics (including Physical 
  Memory)<br>
Powershell: <a href="../ps/get-process.html">Get-Process</a> - Get a list of processes on a machine (ps/gps)<br>
Equivalent bash command (Linux): <a href="../bash/ps.html">ps</a> - Process status, information about processes running in memory.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tlist.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

