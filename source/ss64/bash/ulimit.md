---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>ulimit</h1> 
<p>User limits - limit the use of system-wide resources.</p>
<pre>Syntax
      ulimit [-acdfHlmnpsStuv] [<var>limit</var>]

Options

   -S   Change and report the soft limit associated with a resource. 
   -H   Change and report the hard limit associated with a resource. 

   -a   All current limits are reported. 
   -c   The maximum size of core files created. 
   -d   The maximum size of a process's data segment. 
   -f   The maximum size of files created by the shell(default option) 
   -l   The maximum size that can be locked into memory. 
   -m   The maximum resident set size. 
   -n   The maximum number of open file descriptors. 
   -p   The pipe buffer size. 
   -s   The maximum stack size. 
   -t   The maximum amount of cpu time in seconds. 
   -u   The maximum number of processes available to a single user. 
   -v   The maximum amount of virtual memory available to the process. </pre>
<p>ulimit provides control over the resources available to the shell and to processes started by it, on systems that allow such control. </p>
<p>The soft limit is the value that the kernel enforces for
the corresponding resource. The hard limit acts as a
ceiling for the soft limit.</p>
<p>An unprivileged process may
only set its soft limit to a value in the range from 0 up
to the hard limit, and (irreversibly) lower its hard
limit. A privileged process can make arbitrary changes to
either limit value.</p>
<p>If <i>limit</i> is given, it is the new value of the specified 
  resource. Otherwise, the current value of the soft limit for the specified resource 
  is printed, unless the `-H' option is supplied. </p>
<p>When setting new limits, if neither `-H' nor `-S' is supplied, both the hard 
and soft limits are set.
</p><p>Restricting per user processes ( -u) can be useful for limiting the potential effects of a <a href="http://en.wikipedia.org/wiki/Fork_bomb">fork bomb</a>.<br>
  <br>
  Values are in 1024-byte increments, except for `-t', which is in seconds, `-p', 
  which is in units of 512-byte blocks, and `-n' and `-u', which are unscaled 
  values.
</p><p>The return status is zero unless an invalid option is supplied, 
  a non-numeric argument other than <span class="code">unlimited</span> is supplied as a <i>limit</i>, or 
  an error occurs while setting a new limit.</p>
<p>ulimit is a bash built in command.<br>
  <br>
  <i class="quote">“Every man is a damn fool for at least five minutes every day; wisdom consists of not exceeding that limit” ~ Elbert Hubbard</i> </p>
<p><b>Related:</b></p>
<p><a href="limits.conf.html">limits.conf - configuration file</a><br>
<a href="quota.html">quota</a> - Display disk usage and limits<br>
setrlimit - Set resource limit <br>
<a href="http://en.wikipedia.org/wiki/Fork_bomb">Fork bomb</a> - Wikipedia<br>
Equivalent Windows command: <a href="../nt/diruse.html">DIRUSE</a> - Display disk usage</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

