---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-JobTrigger (PowerShell 3.0+)</h1> 
<p>Get the job triggers of scheduled jobs.</p>
<pre>Syntax
      Get-JobTrigger [-InputObject] <i>ScheduledJobDefinition</i> [[-TriggerId] <i>Int32</i>[]] [<a href="common.html"><i>CommonParameters</i></a>]

      Get-JobTrigger [-Id] <i>Int32</i> [[-TriggerId] <i>Int32</i>[]] [<a href="common.html"><i>CommonParameters</i></a>]

      Get-JobTrigger [-Name] <i>String</i> [[-TriggerId] <i>Int32</i>[]] [<a href="common.html"><i>CommonParameters</i></a>]

key
   -Id <i>Int32</i>[]
       Tthe identification numbers of the scheduled jobs.
       Add-JobTrigger adds the job trigger to the specified scheduled jobs.
       To get the identification number of scheduled jobs on the local computer or a remote computer,
       use the Get-ScheduledJob.

   -InputObject <i>ScheduledJobDefinition</i>[]
       The scheduled jobs. Enter a variable that contains ScheduledJob objects or type
       a command or expression that gets ScheduledJob objects, such as <a href="get-scheduledjob.html">Get-ScheduledJob</a>.
       You can also pipe ScheduledJob objects to Add-JobTrigger.

   -Name <i>String</i>[]
       The names of the scheduled jobs.   <a href="syntax-wildcards.html">Wildcards</a> are supported.
       Add-JobTrigger adds the job triggers to the specified scheduled jobs.
       To get the names of scheduled jobs, use <a href="get-scheduledjob.html">Get-ScheduledJob</a>.

   -TriggerId<i> Int32</i>[]
       Get the specified job triggers.
       Enter the trigger IDs of one or more job triggers of a scheduled job.
       Use this parameter when the scheduled job that is specified by the Name, ID, or InputObject
       parameters has multiple job triggers.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p>Use this command to examine the job      triggers or to pipe the job triggers to other cmdlets.          A "job trigger" defines a recurring schedule or conditions for starting a scheduled job. Job triggers are not      saved to disk independently; they are part of a scheduled job. To get a job trigger, specify the scheduled job      that the trigger starts.</p>
<p><b>Examples</b></p>
<p>Get a job trigger by scheduled job name:</p>
<p><span class="code">C:\PS&gt; Get-JobTrigger -Name BackupJob</span></p>
<p>Display the scheduled jobs, with their IDs on the local computer:</p>
<p><span class="code"> C:\PS&gt; Get-ScheduledJob</span><br>
<br>
Get the job trigger with ID = 2:</p>
<p class="code">PS C:\&gt; Get-JobTrigger -ID 2</p>
<p>Get the JobTriggers property of the demojob scheduled job:</p>
<p class="code">PS C:\&gt; (Get-ScheduledJob demojob).JobTriggers</p>
<p class="quote"><i>“There might be 1 finger on the trigger, but there will be 15 fingers on the safety catch” ~ Harold Macmillan</i></p><p><b>Related:</b><br>
<br>
<a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="add-jobtrigger.html">Add-JobTrigger</a> - Add  a job trigger to a scheduled job<br>
<a href="new-jobtrigger.html">New-JobTrigger</a> - Create a new Job Trigger<br>
<a href="set-jobtrigger.html">Set-JobTrigger</a> - Change the job trigger of a scheduled job</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-jobtrigger.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

