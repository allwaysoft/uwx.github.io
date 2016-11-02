---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>fg</h1> 
<p>Send job to foreground </p>
<pre>Syntax
      fg [<i>PID</i>...]

Options:
 If PID is specified, the job with the specified group id is put in the foreground.</pre>
<p>Send the specified job to the foreground. While a foreground job is executed, fish is suspended. If no job is specified, the last job to be used is put in the foreground.</p>
<p>The PID of the desired process is usually found by using process expansion.</p>
<p>Example</p>
<p>Put the job with job id 0 in the foreground:<span class="code"><br>
fg %0 </span></p>
<p class="quote"><i>“A true friend stabs you in the front” ~ Oscar Wilde</i></p>
<p><b>Related bash commands</b>:<br>
  <br>
<a href="bg.html">bg</a> - Send to background<br> 
<a href="jobs.html">jobs</a> - List active jobs<br>
<a href="suspend.html">suspend</a> - Suspend execution of this shell</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

