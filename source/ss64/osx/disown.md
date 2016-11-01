---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>disown</h1> 
<p>Unbind a job from the current login session. Each <i>jobspec</i> is removed from the table of active jobs.</p>
<pre>Syntax
      disown [-ar] [-h] [<i>jobspec</i> ...]<br>
Key<br>   -h   Each <i>jobspec </i>is not removed from the table, but is marked so that SIGHUP is not
        sent to the job if the shell receives a SIGHUP.
<br>   -r   Without a <i>jobspec</i> argument, will restrict operation to running jobs.
<br>   -a   Without a <i>jobspec</i> argument, will remove or mark all jobs

 jobspec The job ID of a background job</pre>
<p> If no <i>jobspec</i> is present, and neither the -a nor the  -r option is supplied, the current job is used.</p>
<p>The return value is 0 unless a <i>jobspec</i> does not specify a valid job.</p>
<p>disown is a bash built in command.</p>
<p class="quote"><i>“We must learn not to disassociate the airy flower from the 
earthy root, for the flower that is cut off from its root 
fades, and its seeds are barren, whereas the root, secure 
in mother earth, can produce flower after flower and bring 
their fruit to maturity” - Kabbalah</i></p>
<p><b>Related:</b></p>
<p><a href="sched.html">sched</a> - Schedule a command to run at a later time.<br>
<a href="crontab.html">crontab</a> - Schedule a command to run at a later date/time<br>
<a href="jobs.html">jobs</a> - List active jobs<br>
<a href="screen.html">screen</a> - Multiplex terminal, run remote shells via ssh</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="disown.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
