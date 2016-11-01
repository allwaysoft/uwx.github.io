---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>jobs</h1> 
<p>Print currently running jobs and their status. </p>
<pre>Syntax
      jobs [<i>OPTIONS</i>] [<i>PID</i>]


Options:
   -c 
   --command  Print the command name for each process in jobs

   -g
   --group    Only print the group id of each job

   -h
   --help     Display a help message and exit

   -l
   --last     Only the last job to be started is printed

   -p
   --pid      Print the process id for each process in all jobs </pre>
<p>On systems that supports this feature, jobs will print the CPU usage of each job since the last command was executed. The CPU usage is expressed as a percentage of full CPU activity. Note that on multiprocessor systems, the total activity can be more than 100%. </p>
<p>Example<br>
<br> 
<span class="code">$ jobs</span></p>
<p class="quote"><i>"I'm not kidding myself,
my voice is ordinary. If I stand still while
I'm singing, I might as well go back to
driving a truck" ~ Elvis Presley  </i></p>
<p><b>Related bash commands</b>:<br>
<br>
<a href="fg.html">fg</a> - Send job to foreground <br>
<a href="bg.html">bg</a> - Send to background<br>

<a href="suspend.html">suspend</a> - Suspend execution of this shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="jobs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

