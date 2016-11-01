---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>jobs</h1> 
<p>List active jobs.</p>
<pre>Syntax
      jobs [-<i>lnprs</i>] [ <i>jobspec</i> ... ]
<br>      jobs -x <i>command</i> [ <i>args</i> ... ]

Key
   -l     List process IDs in addition to the normal information.<br>   -p     List only the process ID of the job's process group leader.<br>   -n     Display information only about jobs that have changed status since the <br>          user was last notified of their status.<br>   -r     Restrict output to running jobs.<br>   -s     Restrict output to stopped jobs.</pre>
<p>The first form lists the active jobs.</p>
<p>If <i>jobspec</i> is given, output is restricted to information about that job. The return status is 0 unless an invalid option is encountered or an invalid <i>jobspec</i> is supplied.</p>
<p> If the -x option is supplied, jobs replaces any jobspec found in <i>command</i> or <i>args</i> with the corresponding process group ID, and executes <i>command</i> passing it <i>args</i>, returning its exit status.</p>
<p>jobs is a bash built in command: <span class="code"> $ help jobs </span></p>
<p class="quote"><i>"Less layers, Means more happy players" ~ Carmel 
  McConnell</i></p>
<p><b>Related:</b></p>
<p><a href="bg.html">bg</a> - Send to background<br>
<a href="fg.html">fg</a> - Send job to foreground<br>
<a href="suspend.html">suspend</a> - Suspend execution of this shell<br>
<a href="sched.html">sched</a> - Schedule a command to run at a later time.<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later date/time<br>
<a href="disown.html">disown</a> - Unbind a job from the current login session</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="jobs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
