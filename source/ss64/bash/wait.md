---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>wait </h1> 
<p>Wait for each specified process to complete and return its termination status. </p>
<pre>Syntax
      wait [<i>n</i> ...]

Key
   n   A process ID or a job specification</pre>
<p>Each <span class="code"><i>n</i></span> can be a process ID or a job specification; if a job specification is given, all processes in that job's pipeline are waited for. </p>
<p>If <span class="code"><i>n</i></span> is not given, all currently active child processes are waited for, and the return status is zero. </p>
<p>If <span class="code"><i>n</i></span> specifies a non-existent process or job, the return status is 127. Otherwise, the return status is the exit status of the last process or job waited for.</p>
<p>wait is a bash built in command.</p>
<p><b>Example</b><br>
<br>
<span class="code">$ wait 2585</span></p>
<p class="quote"><i>“If you wait to do everything until you're sure it's right, you'll probably never do much of anything” ~ Win Borden</i></p>
<p><b>Related:</b></p>
<p><a href="ps.html">ps</a> - Process status<br>
<a href="lsof.html">lsof</a> - List open files<br>
waitfor - wait for a network resource (file/url) or until a command has completed. <br>
Equivalent Windows command: <a href="../nt/waitfor.html">WAITFOR</a> - Wait for or send a signal</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wait.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

