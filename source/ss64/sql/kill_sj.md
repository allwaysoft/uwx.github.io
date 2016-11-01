---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_sql.lbi" --><!-- #EndLibraryItem --><h1>KILL STATS JOB </h1>
<p>Terminate an asynchronous statistics update job.</p>
<pre>Syntax:
       KILL STATS JOB <i>job_id</i> 

Key:
   <i>job_id</i>   The job_id 
</pre>
<p>  Job_id is unrelated to session_id or unit of work used by the <a href="kill.html">KILL</a> statement.</p>
<p>This command is silent - does not produce a notification message.</p>
<p>Example</p>
<pre>KILL STATS JOB 64;<br>GO</pre>
<p class="quote"><i>"Whom the gods love dies young" ~ Menander 300 BC </i></p>
<p><b>Related commands:</b></p>
<p>  <a href="kill.html">KILL</a><br>
   <a href="kill_qn.html">KILL QUERY NOTIFICATION</a>  <br>
   sys.dm_exec_background_job_queue (Lists Job_ID)</p><!-- #BeginLibraryItem "/Library/foot_sql.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- ss64-sql -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6953563613"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

