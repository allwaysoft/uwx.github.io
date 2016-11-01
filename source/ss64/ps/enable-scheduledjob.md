---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Enable-ScheduledJob (PowerShell 3.0+)</h1> 
<p>Enable a scheduled job.</p>
<pre>Syntax
      Enable-ScheduledJob [-InputObject] <i>ScheduledJobDefinition</i>
         [-PassThru] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Enable-ScheduledJob [-Id] <i>Int32</i>
         [-PassThru] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Enable-ScheduledJob [-Name] <i>String</i>
         [-PassThru] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Id <i>Int32</i>
       Enables the scheduled job with the specified identification number (ID).
       Enter the ID of a scheduled job.

   -InputObject <i>ScheduledJobDefinition</i>
       The scheduled job to be enabled.
       Enter a variable that contains ScheduledJobDefinition objects or type a
       command or expression that gets ScheduledJobDefinition objects, such as
       a Get-ScheduledJob command.
       You can also pipe a ScheduledJobDefinition object to Enable-ScheduledJob.

   -Name <i>String</i>
       Enables the scheduled jobs with the specified names.
       Enter the name of a scheduled job. Wildcards are supported.

   -PassThru
       Returns the scheduled jobs that were enabled.
       By default, this cmdlet does not generate any output.

   -Confirm
       Prompt for confirmation before running the cmdlet.

   -WhatIf
       Show what would happen if the cmdlet runs. The cmdlet is not run.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p>Enable-ScheduledJob cmdlet re-enables scheduled jobs that were disabled. Enabled jobs run automatically when triggered.</p>
<p>To enable a scheduled job, the Enable-ScheduledJob cmdlet sets the Enabled property of the scheduled job to True      ($true).</p>
<p><b>Examples</b></p>
<p>Enable the scheduled job with ID 2 :</p>
<p><span class="code">C:\PS&gt; Enable-ScheduledJob -ID 2 -Passthru</span></p>
<p>Enable all scheduled jobs:</p>
<p><span class="code"> C:\PS&gt; Get-ScheduledJob | Enable-ScheduledJob -Passthru</span><br>
<br>
Enable all scheduled jobs on the computers listed in <span class="code">Servers.txt</span> The command uses       Invoke-Command to run a Enable-ScheduleJob command on each remote computer:</p>
<p class="code">PS C:\&gt; <a href="invoke-command.html">Invoke-Command</a> -ComputerName (Get-Content Servers.txt) -ScriptBlock {Enable-ScheduledJob -Name Inventory}</p>
<p class="quote"><i>“New York is an exciting town where something is happening all the time, most unsolved” ~  Johnny Carson</i></p><p><b>Related:</b><br>
<br>
<a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="disable-scheduledjob.html">Disable-ScheduledJob</a> - Disable a scheduled job <br>
<a href="get-scheduledjob.html">Get-ScheduledJob</a> - Get scheduled jobs on the local computer<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enable-scheduledjob.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

