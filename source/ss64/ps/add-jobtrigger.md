---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-JobTrigger (PowerShell 3.0+)</h1> 
<p>Add  a job trigger to a scheduled job. <br>
A "job trigger" starts a scheduled job on a one-time or recurring schedule or when an event occurs.          <br>
To identify the job triggers to add, use the <span class="code">-Trigger</span> parameter. <br>
To identify the scheduled job to which the triggers are added, use the<span class="code"> -Name, -ID</span>, or <span class="code">-InputObject</span> parameters. <br>
To create job triggers for the value of the Trigger parameter, use the <a href="new-jobtrigger.html">New-JobTrigger</a> cmdlet or use a <a href="syntax-hash-tables.html">hash table</a>.</p>
<pre>Syntax
      Add-JobTrigger[-InputObject] <i>ScheduledJobDefinition</i>[]
        [-Trigger] <i>ScheduledJobTrigger</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

      Add-JobTrigger [-Id] <i>Int32</i>[] [-Trigger] <i>ScheduledJobTrigger</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

      Add-JobTrigger [-Name] <i>String</i>[] [-Trigger] <i>ScheduledJobTrigger</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

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

   -Trigger <i>ScheduledJobTrigger</i>[]
       The job triggers to add.
       Enter a hash table that specifies job triggers or a variable that contains ScheduledJobTrigger
       objects, or type a command or expression that gets ScheduledJobTrigger objects,
       such as Get-JobTrigger. You can also pipe ScheduledJobTrigger objects to Add-JobTrigger.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Add a job trigger to a scheduled job:</p>
<p><span class="code">C:\PS&gt; $trigger64 = New-JobTrigger -Daily -At 5AM<br>
C:\PS&gt; Add-JobTrigger -Trigger $trigger64 -Name Job64</span></p>
<p>Add an AtStartup job trigger to all scheduled jobs on the local computer:</p>
<p><span class="code"> C:\PS&gt; Get-ScheduledJob | Add-JobTrigger -Trigger (New-JobTrigger -AtStartup)</span><br>
<br>
Copy a job trigger:</p>
<p class="code">PS C:\&gt; $trigger = Get-JobTrigger -Name BackupArchives                                 <br>
PS C:\&gt; Add-JobTrigger -Name TestBackup, BackupLogs -Trigger $trigger</p>
<p class="quote"><i>“History teaches us that men and nations behave wisely once they have exhausted all other alternatives” ~ Abba Eban </i></p>
<p><b>Related:</b></p>
<p><a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="get-jobtrigger.html">Get-JobTrigger</a> - Get the job triggers of scheduled jobs<br>
<a href="new-jobtrigger.html">New-JobTrigger</a> - Create a new Job Trigger<br>
<a href="set-jobtrigger.html">Set-JobTrigger</a> - Change the job trigger of a scheduled job</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

