---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-JobTrigger (PowerShell 3.0+)</h1> 
<p>Create a job trigger for a scheduled job.  Import the      PSScheduledJob module.</p>
<pre>Syntax
      New-JobTrigger [<b>-Once</b>] [-RandomDelay <i>TimeSpan</i>] [-RepeatIndefinitely]
        [-RepetitionDuration <i>TimeSpan</i>] [-RepetitionInterval <i>TimeSpan</i>]
           -At <i>DateTime</i> [<a href="common.html"><i>CommonParameters</i></a>]

      New-JobTrigger [<b>-Weekly</b>] [-RandomDelay <i>TimeSpan</i>] [-WeeksInterval <i>Int32</i>]
         -At <i>DateTime</i> -DaysOfWeek <i>DayOfWeek</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

      New-JobTrigger [<b>-Daily</b>] [-DaysInterval <i>Int32</i>] [-RandomDelay <i>TimeSpan</i>]
         -At <i>DateTime</i> [<a href="common.html"><i>CommonParameters</i></a>]

      New-JobTrigger [<b>-AtLogOn</b>] [-RandomDelay <i>TimeSpan</i>]
         [-User <i>String</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      New-JobTrigger [<b>-AtStartup</b>] [-RandomDelay <i>TimeSpan</i>] [<a href="common.html"><i>CommonParameters</i></a>]

key
   -At <i>DateTime</i>
        Starts the job at the specified date and time. Enter a DateTime object, such as one that the Get-Date cmdlet 
        returns, or a string that can be converted to a date and time, such as "April 19, 2012 15:00", "12/31", or 
        "3am". If you don't specify an element of the date, such as the year, the date in the trigger has the 
        corresponding element from the current date.
        
        When using the Once parameter, set the value of the At parameter to a future date and time. Because the 
        default date in a DateTime object is the current date, if you specify a time before the current time without 
        an explicit date, the job trigger is created for a time in the past.
        
        DateTime objects, and strings that are converted to DateTime objects, are automatically adjusted to be 
        compatible with the date and time formats selected for the local computer in Region and Language in Control 
        Panel.
        
    -AtLogOn
        Starts the scheduled job when the specified users log on to the computer. To specify a user, use -User
        
    -AtStartup
        Start the scheduled job when Windows starts.
        
    -Daily
        Specify a recurring daily job schedule. Use the other parameters in the Daily parameter set to specify the 
        schedule details.
        
    -DaysInterval <i>Int32</i>
        Specify the number of days between occurrences on a daily schedule. For example, a value of 3 starts the 
        scheduled job on days 1, 4, 7 and so on. The default value is 1.
        
    -DaysOfWeek <i>DayOfWeek</i>[]
        Specify the days of the week on which a weekly scheduled job runs. Enter day names, such as "Monday" or 
        integers 0-6, where 0 represents Sunday. This parameter is required in the Weekly parameter set.
        
        NOTE: Day names are converted to their integer values in the job trigger. When you enclose day names in 
        quotation marks in a command, enclose each day name in separate quotation marks, such as "Monday", "Tuesday". 
        If you enclose multiple day names in a single quotation mark pair, the corresponding integer values are 
        summed. For example, "Monday, Tuesday" (1, 2) results in a value of "Wednesday" (3).
        
    -Once
        Specify a non-recurring (one time) or custom repeating schedule. To create a repeating schedule, use the 
        Once parameter with the RepetitionDuration and RepetitionInterval parameters.
        
    -RandomDelay <i>TimeSpan</i>
        Enable a random delay that begins at the scheduled start time, and set the maximum delay value. The length 
        of the delay is set pseudo-randomly for each start and varies from no delay to the time specified by the value 
        of this parameter. The default value, zero (00:00:00), disables the random delay.
        
        Enter a timespan object, such as one returned by the New-TimeSpan cmdlet, or enter a value in 
        <i>hours:minutes:seconds</i> format, which is automatically converted to a timespan object.
        
    -RepeatIndefinitely
        This parameter, available starting in Windows PowerShell 4.0, eliminates the necessity of specifying a 
        TimeSpan.MaxValue value for the RepetitionDuration parameter to run a scheduled job repeatedly, for an 
        indefinite period.
        
    -RepetitionDuration <i>TimeSpan</i>
        Repeats the job until the specified time expires. The repetition frequency is determined by the value of the 
        RepetitionInterval parameter. For example, if the value of RepetitionInterval is 5 minutes and the value of 
        RepetitionDuration is 2 hours, the job is triggered every five minutes for two hours.
        
        Enter a timespan object, such as one that the New-TimeSpan cmdlet returns or a string that can be converted to 
        a timespan object, such as "1:05:30".
        
        To run a job indefinitely, add the RepeatIndefinitely parameter instead.
        
        To stop a job before the job trigger repetition duration expires, use the Set-JobTrigger cmdlet to set the 
        RepetitionDuration value to zero (0).
        
        This parameter is valid only when the Once, At and RepetitionInterval parameters are used in the command.
        
    -RepetitionInterval <i>TimeSpan</i>
        Repeat the job at the specified time interval. For example, if the value of this parameter is 2 hours, the 
        job is triggered every two hours. The default value, 0, does not repeat the job.
        
        Enter a timespan object, such as one that the New-TimeSpan cmdlet returns or a string that can be converted to 
        a timespan object, such as "1:05:30".
        
        This parameter is valid only when the Once, At, and RepetitionDuration parameters are used in the command.
        
    -User <i>String</i>
        Specify the users who trigger an AtLogon start of a scheduled job. Enter the name of a user in <i>UserName</i> or 
        <i>Domain\Username </i>format or enter an asterisk (*) to represent all users. The default value is all users.
        
    -Weekly
        Specify a recurring weekly job schedule. Use the other parameters in the Weekly parameter set to specify the 
        schedule details.
        
    -WeeksInterval <i>Int32</i>
        Specify the number of weeks between occurrences on a weekly job schedule. For example, a value of 3 starts 
        the scheduled job on weeks 1, 4, 7 and so on. The default value is 1.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -PipelineVariable, -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Create a job trigger that can start a scheduled job only one time:</p>
<p><span class="code">C:\PS&gt; New-JobTrigger –Once –At "1/30/2015 3:00 AM"</span></p>
<p>Create a job trigger that can start a scheduled job every other day at 1:00 a.m (starting today) If the date and time is in the past, the scheduled job will start at the next occurrence:</p>
<p><span class="code"> C:\PS&gt; New-JobTrigger –Daily –At "1:00 AM" –DaysInterval 2</span><br>
<br>
Create a job trigger that can start a scheduled job every Monday and every Friday:</p>
<p class="code">PS C:\&gt; New-JobTrigger –Weekly –DaysOfWeek Monday, Friday –At "23:00" –WeeksInterval 1</p>
<p>Create a logon job trigger that a job trigger that can start a scheduled job whenever the user jdoe logs onto the      computer:</p>
<p class="code">PS C:\&gt; New-JobTrigger -AtLogOn -User Domain01\jdoe</p>
<p>Use a job trigger to create a new scheduled job:</p>
<p class="code">PS C:\&gt; $trig = New-JobTrigger –Weekly –DaysOfWeek 1,3,5 –At 12:01AM<br>
PS C:\&gt; Register-ScheduledJob -Name Demo -FilePath C:\Scripts\demo.ps1 -Trigger $trig<br>
</p>
<p>Add a Job Trigger to an existing Scheduled Job (DemoJob):</p>
<p class="code">PS C:\&gt; Add-JobTrigger -Name DemoJob -Trigger (New-JobTrigger -Daily -At 3:10AM)</p>
<p class="quote"><i>“Success is simple. Do what's right, the right way, at the right time” ~  Arnold H. Glasgow</i></p>
<p><b>Related:</b><br>
<br>
<a href="scheduler.html">Scheduler cmdlets</a> - Get/Set scheduled jobs<br>
<a href="add-jobtrigger.html">Add-JobTrigger</a> - Add  a job trigger to a scheduled job<br>
<a href="get-jobtrigger.html">Get-JobTrigger</a> - Get the job triggers of scheduled jobs<br>
<a href="set-jobtrigger.html">Set-JobTrigger</a> - Change the job trigger of a scheduled job</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-jobtrigger.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

