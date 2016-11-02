---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disable-ScheduledJob (PowerShell 3.0+)</h1> 
<p>Disable a scheduled job.</p>
<pre>Syntax
      Disable-ScheduledJob [-InputObject] <i>ScheduledJobDefinition</i>
         [-PassThru] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Disable-ScheduledJob [-Id] <i>Int32</i>
         [-PassThru] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Disable-ScheduledJob [-Name] <i>String</i>
         [-PassThru] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Id <i>Int32</i>
       Disables the scheduled job with the specified identification number (ID).
       Enter the ID of a scheduled job.

   -InputObject <i>ScheduledJobDefinition</i>
       The scheduled job to be disabled.
       Enter a variable that contains ScheduledJobDefinition objects or type a
       command or expression that gets ScheduledJobDefinition objects, such as
       a Get-ScheduledJob command.
       You can also pipe a ScheduledJobDefinition object to Disable-ScheduledJob.

   -Name <i>String</i>
       Disables the scheduled jobs with the specified names.
       Enter the name of a scheduled job. Wildcards are supported.

   -PassThru
       Returns the scheduled jobs that were disabled.
       By default, this cmdlet does not generate any output.

   -Confirm
       Prompt for confirmation before running the cmdlet.

   -WhatIf
       Show what would happen if the cmdlet runs. The cmdlet is not run.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p>Disable-ScheduledJob cmdlet temporarily disables scheduled jobs. Disabling preserves all job properties and      does not disable the job triggers, but it prevents the scheduled jobs from starting automatically when triggered.      </p>
<p>You can start a disabled scheduled job by using the Start-Job cmdlet or use a disabled scheduled job as a template.          </p>
<p>To disable a scheduled job,  Disable-ScheduledJob  sets the Enabled property of the scheduled job to      False ($false). <br>
To re-enable the scheduled job, use the Enable-ScheduledJob cmdlet.</p>
<p><b>Examples</b></p>
<p>Disable the scheduled job with ID 2 on the local computers:</p>
<p><span class="code">C:\PS&gt; Disable-ScheduledJob -ID 2 -Passthru</span></p>
<p>Disable all scheduled jobs:</p>
<p><span class="code"> C:\PS&gt; Get-ScheduledJob | Disable-ScheduledJob -Passthru</span><br>
<br>
Disable all scheduled jobs on the computers listed in <span class="code">Servers.txt</span> The command uses       Invoke-Command to run a Disable-ScheduleJob command on each remote computer:</p>
<p class="code">PS C:\&gt; <a href="invoke-command.html">Invoke-Command</a> -ComputerName (Get-Content Servers.txt) -ScriptBlock {Disable-ScheduledJob -Name TestJob}</p>
<p class="quote"><i>“New York is an exciting town where something is happening all the time, most unsolved” ~  Johnny Carson</i></p><p><b>Related:</b><br>
<br>
<a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="enable-scheduledjob.html">Enable-ScheduledJob</a> - Enable a scheduled job<br>
<a href="get-scheduledjob.html">Get-ScheduledJob</a> - Get scheduled jobs on the local computer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

