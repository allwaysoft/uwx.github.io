---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Stop-Job</h1> 
<p>Stop a PowerShell background job.</p>
<pre>Syntax
      Stop-Job [-Job <i>job</i>[]] [-PassThru] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Stop-Job [[-InstanceId] <i>Guid</i>[]] [-PassThru] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Stop-Job [[-Name] <i>string</i>[]] [-PassThru] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Stop-Job [[-Id] <i>Int32</i>[]] [-PassThru] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Stop-Job [-State {NotStarted | Running | Completed | Failed | Stopped | Blocked}] [<i>CommonParameters</i>]

Key
   -Job <i>Job</i>[]
       The jobs to be stopped.
       Enter a variable that contains the jobs or a command that gets the jobs.
       Jobs can also be piped to Stop-Job.
       By default, will delete all jobs that were started in the current session.

    -Id <i>Int32</i>[]
       Stop only jobs with the specified IDs. The default is all jobs in the current session.

       The ID is an integer that uniquely identifies the job within the current session.
       It is easier to remember and to type than the instance ID, but it is unique only
       within the current session. You can type one or more IDs (separated by commas).
       To find the ID of a job, type "Get-Job" without parameters.

   -InstanceId <i>Guid</i>[]
       Stop jobs with the specified instance IDs. The default is all jobs.

       An instance ID is a GUID that uniquely identifies the job on the computer.
       To find the instance ID of a job, use Get-Job.

   -Name <i>string</i>[]
       Stop the job(s) with the specified friendly names.
       Enter a job name, or use wildcard characters to enter a job name pattern.
       By default, stops all jobs in the current session.
       The friendly name is not guaranteed to be unique, use the -WhatIf and -Confirm parameters

   -PassThru<br>       Return an object representing the new background job. By default, this cmdlet does not generate any output.

   -State <i>JobState</i>
       Stop only jobs in the specified state.
       Valid values are NotStarted, Running, Completed, Stopped, Failed, and Blocked.

   -Confirm
       Prompt for confirmation before executing the command.
        
   -WhatIf
       Describe what would happen without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Standard <a href="get-alias.html">Aliases</a> for Stop-Job:<b><span class="code"> spjb</span></b></p>
<p>Stop-Job  stops a  PowerShell background job on the local computer. It does not delete background jobs. To delete a job, use <a href="remove-job.html">Remove-Job</a>.</p>
<p>Stopping a job will complete all tasks that are pending in that job queue and then end the job.</p>
<p><b>Examples</b></p>
<p>Stop all jobs with a State value of "Failed":</p>
<p><span class="code">PS C:\&gt; stop-job -state failed</span></p>
<p>Stop all the background jobs in the current session:</p>
<p><span class="code">PS C:\&gt; get-job | stop-job</span></p>
<p>Get  the InstanceIDs of all jobs:</p>
<p><span class="code">PS C:\&gt; get-job | format-table ID, Name, Command, InstanceID -auto</span></p>
<p>Get the the (calculated)  job state of all jobs:</p>
<p><span class="code">PS C:\&gt; get-job | format-table ID, Name, Command, @{Label="State";Expression={$_.jobstateinfo.state{% raw %}}}{% endraw %} -auto</span></p>
<p><span class="code"></span> Stop a background job with a given InstanceID:</p>
<p class="code">PS C:\&gt; stop-job -instanceid e4bbfed1-9c64-401a-a2c3-a7db34336cdf</p>
<p>Start a job remotely using Invoke-Command and then stop the job that is running on a remote computer. Because the job is local, the "param" keyword is required to declare the local variables, and the -ArgumentList parameter can then be used to supply values for the variables:</p>
<p><span class="code">PS C:\&gt; $s = new-pssession -computername Server64 -credential domain64\admin01<br>
PS C:\&gt; $j = invoke-command -session $s -scriptblock {start-job -scriptblock {get-eventlog system{% raw %}}}{% endraw %}<br>
<br>
PS C:\&gt; invoke-command -session $s -scriptblock {param($j) stop-job -job $j} -ArgumentList $j</span></p>
<p>Start a job on the local computer, which runs on Server64 (using <span class="code">-AsJob</span> makes the remote command run as a background job), then stop the job with a local Stop-Job command:</p>
<p class="code">PS C:\&gt; $myjob = invoke-command -computername Server64 -scriptblock {get-eventlog system} -asjob<br>
<br>
PS C:\&gt; $myjob | stop-job -passthru</p>
<p class="quote"><i>“The beautiful thing about learning is nobody can take it away from you” ~ B. B. King</i></p>
<p><b>Related:</b><br><br>
<a href="get-job.html">Get-Job</a> - Get PowerShell background jobs that are running<br> 
<a href="invoke-command.html">Invoke-Command</a>        -   Run command
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --></p><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stop-job.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

