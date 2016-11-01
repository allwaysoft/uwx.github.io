---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>LODCTR.exe</h1> 
<p>Load PerfMon performance counters (update registry values).</p>
<pre>Syntax:
      LODCTR <i>option</i>

Options:

   INI-FileName
      An initialization file that contains  the counter name definitions and
      explain text for an extensible counter DLL.

   /S:<i>Backup-FileName</i>
      Save the current perf registry strings and info to <i>Backup-FileName</i>

   /R:<i>Backup-FileName</i>
      Restore the perf registry strings and info using <i>Backup-FileName</i>

   /R
      Rebuild the perf registry strings and info from scratch based on the current 
      registry settings and backup INI files.
      Often required if Perfmon crashes, or the server is rebooted while perfmon is running.

   /T:<i>Service-Name</i>
      Set the performance counter service as trusted.

   /E:<i>Service-Name</i>
      Enable the performance counter service.

   /D:<i>Service-Name</i>
      Disable the performance counter service.

   /Q
      Query all performance counter service information

   /Q:<i>Service-Name</i>
      Query specific performance counter service information.

   /M:<i>Counter-Manifest</i>
      Install Windows Vista performance counter provider definition XML file to system repository.</pre>
<p>Any arguments with spaces in the names must be enclosed within
"Double Quotation" marks.</p>
<p><b>Examples:</b></p>
<p>Rebuild the performance counters:</p>
<p><span class="code">C:\&gt; lodctr /r<br>
</span></p>
<p class="quote"><i>“People count up the faults of those who keep them waiting” ~ French Proverb</i></p><p><b>Related:</b><br>
<br>
<a href="logman.html">LOGMAN</a> - Manage Performance Monitor logs<br>
Powershell: <a href="../ps/new-object.html">New-Object</a> System.Diagnostics.PerformanceCounter </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="lodctr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

