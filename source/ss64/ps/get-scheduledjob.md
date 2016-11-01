---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ScheduledJob (PowerShell 3.0+)</h1> 
<p>Get scheduled jobs on the local computer.</p>
<pre>Syntax
      Get-ScheduledJob [[-Id] <i>Int32</i>[]] [<a href="common.html"><i>CommonParameters</i></a>]

      Get-ScheduledJob [-Name] <i>String</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Id
       Get only the scheduled jobs with the specified identification number (ID).
       Enter one or more IDs of scheduled jobs on the computer.
       By default, Get-ScheduledJob gets all scheduled jobs on the computer.

   -Name
       Get only the scheduled jobs with the specified names.
       Enter one or more names of scheduled jobs on the computer. Wildcards are supported.
       By default, Get-ScheduledJob gets all scheduled jobs on the computer.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p>Get-ScheduledJob can be piped into Get-JobTrigger, to obtain a list of job triggers.</p>
<p><b>Examples</b></p>
<p>Get all scheduled jobs:</p>
<p><span class="code">C:\PS&gt; Get-ScheduledJob</span></p>
<p>Get all scheduled jobs on the computer that have names which include "Backup" or "Archive":</p>
<p><span class="code"> C:\PS&gt; Get-ScheduledJob -Name *Backup*, *Archive*</span><br>
<br>
Get all scheduled jobs on the computers listed in <span class="code">Servers.txt</span> The command uses       Invoke-Command to run a Get-ScheduleJob command on each remote computer:</p>
<p class="code">PS C:\&gt; <a href="invoke-command.html">Invoke-Command</a> -ComputerName (Get-Content Servers.txt) {Get-ScheduledJob}</p>
<p class="quote"><i>“New York is an exciting town where something is happening all the time, most unsolved” ~  Johnny Carson</i></p><p><b>Related:</b></p>
<p><a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="disable-scheduledjob.html">Disable-ScheduledJob</a> - Disable a scheduled job<br>
<a href="enable-scheduledjob.html">Enable-ScheduledJob</a> - Enable a scheduled job</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-scheduledjob.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

