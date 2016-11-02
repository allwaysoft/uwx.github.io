---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>bg</h1> 
<p>Send job to background</p>
<pre>Syntax
      bg [<i>PID</i>...]

Options:
 If PID is specified, the jobs with the specified group ids are put in the background.</pre>
<p>Send the specified jobs to the background. A background job is executed simultaneously with fish, and does not have access to the keyboard. If no job is specified, the last job to be used is put in the background.</p>
<p>The PID of the desired process is usually found by using process expansion.</p>
<p>Example</p>
<p>Put the job with job id 0 in the background:<span class="code"><br>
bg %0 </span></p>
<p class="quote"><i>"I'm not kidding myself,
my voice is ordinary. If I stand still while
I'm singing, I might as well go back to
driving a truck" ~ Elvis Presley  </i></p>
<p><b>Related bash commands</b>:<br>
<br>
<a href="fg.html">fg</a> - Send job to foreground <br>
<a href="jobs.html">jobs</a> - List active jobs<br>
<a href="suspend.html">suspend</a> - Suspend execution of this shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="bg.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

