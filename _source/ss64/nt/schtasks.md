---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SCHTASKS</h1> 
<p>Create / edit a Scheduled Job/Task.
  The job can be created on the local or a remote computer. </p>
<pre>Syntax:

   <span class="body">Create a new scheduled task</span>:
   SCHTASKS /Create [<i>Connect_Options</i>]<i> Create_Options</i> /TN <i>taskname</i>

   <span class="body">Delete the scheduled task(s)</span>
   SCHTASKS /Delete [<i>Connect_Options</i>] /TN <i>taskname</i> [/F]
   
   <span class="body">Display all scheduled tasks</span>:
   SCHTASKS /Query  [<i>Connect_Options</i>] [/FO <i>format</i>] [/NH] [/V]
   
   <span class="body">Run the scheduled task on demand:</span>
   SCHTASKS /Run [<i>Connect_Options</i>] /TN <i>taskname</i>

   <span class="body">Stop the currently running scheduled task</span>:
   SCHTASKS /End [<i>Connect_Options</i>] /TN <i>taskname</i>

   <span class="body">Change the properties of scheduled task</span>:
   SCHTASKS /Change [<i>Connect_Options</i>] {[/RU <i>username</i>] [/RP <i>password</i>] [/TR <i>taskrun</i>]} /TN taskname

   <span class="body">Show the security identifier corresponding to a scheduled task name</span>:
   SCHTASKS /ShowSID [<i>Connect_Options</i>] /TN <i>taskname</i>

 <i>Connect_Options</i>:
     /S <i>system</i>                      # Remote system (default is local)
    [/U <i>username</i> [/P <i>password</i>]]     # Submit job under this name

 <i>Create_Options</i>:
    /TR <i>taskrun</i>                     # Pathname of the executable to run
    /ST <i>starttime</i>                   # HH:MM (24 hour)
    [/RU <i>username</i> [/RP <i>password</i>]]   # Run job as this user
    /SC <i>schedule</i> [/MO <i>modifier</i>]     # When to run, see below
    [/D <i>day</i>]                        # Day = MON,TUE,WED,THU,FRI,SAT,SUN
    [/M <i>months</i>]                     # Month=JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC.
    [/I <i>idletime</i>]                   # 1 - 999 minutes (ONIDLE task only)
    [/SD <i>startdate</i>] [/ED <i>enddate</i>]   # Start / End date in Region specific format e.g. "12/12/2015"

 <i>options</i>:
    /TN   A name for the task
    /F    Force delete, ignore warnings even if the task is currently runnning.
    /FO   Output format: TABLE, LIST, CSV
    /NH   No header
    /V    Verbose output

    /SC <i>schedule</i>  The schedule frequency.
    Valid schedules: MINUTE, HOURLY, <b>DAILY</b>, WEEKLY, MONTHLY, ONCE, ONSTART,ONLOGON,ONIDLE.

    /MO <i>modifiers</i> allow finer control:

      MINUTE:  1 - 1439 minutes.
      HOURLY:  1 - 23 hours.
      DAILY:   1 - 365 days.
      WEEKLY:  1 - 52 weeks.
      ONCE:    No modifiers.
      ONSTART: No modifiers.
      ONLOGON: No modifiers.
      ONIDLE:  No modifiers.
      MONTHLY: 1 - 12, or FIRST, SECOND, THIRD, FOURTH, LAST, LASTDAY.</pre>
<p>New options in Vista and above:<br>
</p>
<pre>   /RI <i>interval</i>      # The Repetition Interval in minutes.</pre>
<blockquote>
<p> This is not applicable for the following schedule types: <span class="code">MINUTE, HOURLY, ONSTART, ONLOGON,<br>
ONIDLE, and ONEVENT</span>. The valid range is 1 - 599940 minutes.<br>
If either the<span class="code">/ET <i>endtime</i></span> or <span class="code">/DU <i>duration</i></span> parameters are specified, the default is 10 minutes.<br>
</p>
</blockquote>
<pre>   /ET <i>endtime</i>       # The End Time to run the task, format is HH:mm (24-hour time).</pre>
<blockquote>
<p> For example, 14:50 specifies 2:50PM.<br>
This is not applicable for the following schedule types: <span class="code">ONSTART, ONLOGON, ONIDLE, and ONEVENT</span>.</p>
<pre>/DU <i>duration</i>      # A value that specifies the duration to run the task. </pre>
<p>The time format is HH:mm (24-hour time). For example, 14:50 specifies 2:50PM. This is not applicable with <span class="code">/ET <i>endtime</i></span> and for the following schedule types: <span class="code">ONSTART, ONLOGON, ONIDLE, and ONEVENT</span>. For /V1 tasks (Task Scheduler 1.0 tasks), if <span class="code">/RI </span>is specified, then the duration default is one hour.     This option is  available in Windows 2003 or greater (not XP).</p>
<pre>/K      # A value that terminates the task at the end time or duration time. </pre>
<p>This is not applicable for the following schedule types: <span class="code">ONSTART, ONLOGON, ONIDLE,</span> and <span class="code">ONEVENT</span>. <br>
Either <span class="code">/ET <i>endtime</i> </span> or <span class="code">/DU <i>duration</i> </span> must be specified.</p>
<pre>/EC <i>ChannelName</i>   # A value that specifies the event channel for ONEVENT triggers.</pre>
<p><span class="code">/IT     </span>A value that enables the task to run interactively only if the /RU user is currently logged on at the time the task runs. The task runs only if the user is logged on. </p>
<p> <span class="code">/NP</span> A value that indicates that no password is stored. The task does not run interactively as the given user. Only local resources are available. </p>
<p> <span class="code">/Z </span>A value that marks the task to be deleted after its final run. </p>
<p><span class="code">/XML <i>xmlfile </i></span>A value that creates a task from an XML file. This parameter can be combined with /RU and /RP switches, or with the /RP switch alone when the task XML already contains the principal. </p>
<p> <span class="code">/V1 </span>A value that creates a task visible to Windows 2000, Windows Server 2003, and Windows XP platforms. </p>
<p> <span class="code">/F </span>A value that forcefully creates the task and suppresses warnings if the specified task already exists.     </p>
<p> <span class="code">/RL <i>level </i></span>A value that sets the run level for the task. Valid values are <span class="code">LIMITED</span> and <span class="code">HIGHEST</span>. The default is <span class="code">LIMITED</span>. </p>
<p> <span class="code">/DELAY <i>delaytime </i></span>A value that specifies the wait time to delay the task after the trigger is fired. The time format is mmmm:ss. This option is only valid for schedule types <span class="code">ONSTART, ONLOGON,</span> and <span class="code">ONEVENT</span>. </p>
</blockquote>
<h2>Notes</h2>
<p>For MONTHLY schedules give the DAY as a number 1 - 31 (default=1)<br>
<br>
To prompt for the password, specify <span class="code">/RP *</span> or <span class="code">/RP none</span></p>
<p>The User Account under which the Schedule service runs will require specific file access permissions, user permissions and drive mappings.</p>
<p>If the <span class="code">/RU <i>username</i></span> and <span class="code">/RP <i>Password </i></span>parameters match the currently logged-in user, the task will run interactively (visible in the foreground).<br>
<br>
For the <span class="code">system</span> account, <span class="code">/RU <i>username </i></span>can be written as "", "NT AUTHORITY\SYSTEM" or "SYSTEM", a Password is not required. The <span class="code">system</span> account has full access to the local machine but has no permissions on any other machines (or mapped drives) across the Network.</p>
<p>The new task must be set to start a minimum of 1 minute into the future. The <span class="code">/SC</span> option is a little inconsistent, under Windows XP it requires an <i>HH:MM:SS</i> value, under Vista and greater it will accept <i>HH:MM</i> but in all cases the <i>SS</i> value in seconds will be ignored and rounded down.</p>
<h2>PowerShell cmdlets</h2>
<p>SCHTASKS.exe is limited to commands with less than 255 characters and does not have access to all of Scheduler 2.0 options such as  "<i>Wake up the machine to run this task</i>".</p>
<p> These additional options are available via the GUI or by using the <a href="../ps/scheduler.html">Task Scheduler PowerShell cmdlets</a>.</p>
<h2>UAC (User Account Control) prompts.</h2>
<p>If a scheduled task invokes a  UAC prompt, then the  task will fail to run unattended. To prevent this make sure that you select the 'Run With Highest Privileges' check box:</p>
<p><img src="elevate.png" width="203" height="94" alt="Elevate Scheduled task"></p>
<h2>Other languages.</h2>
<p>If you are running a non-english language version of Windows then the Days and Months accepted by SCHTASKS might be localised.<br>
e.g.  Italian days:
<span class="code">lun,
mar,
mer,
gio,
ven,
sab,
dom</span> Italian months:
<span class="code">gen,
feb,
mar,
apr,
mag,
giu,
lug,
set,
ott,
nov,
dic</span>.</p>
<p><b>Examples:</b></p>
<p>Create a  task to run at 11 pm every weekday </p>
<pre>SCHTASKS /Create /SC weekly /D MON,TUE,WED,THU,FRI /TN MyDailyBackup /ST 23:00 /TR c:\backup.cmd /RU MyDomain\MyLogin /RP MyPassword
</pre>
<p>Now delete the task: </p>
<pre>SCHTASKS /Delete /TN "MyDailyBackup" /f
</pre>
<p>Create a one-off task to run a script at exactly12 midday: </p>
<pre>SCHTASKS /create /tn "once only" /tr "<b>\"</b>c:\my folder\one.cmd<b>\"</b> arguments" /sc ONCE /sd 12/29/2014 /st 12:00</pre>
<p>Create a daily task to run a script at 5 pm: </p>
<pre>SCHTASKS /create /tn "My Script" /tr "<b>\"</b>c:\my folder\script.cmd<b>\"</b> arguments" /sc daily /sd 12/29/2014 /st 17:00
</pre>
<p>Create a task ready to run on demand - this is done by creating a task scheduled far in the past:<br>
</p>
<pre>SCHTASKS /create /tn "On demand demo" /tr "C:\Windows\notepad.exe" /sc ONCE /sd 01/01/1910 /st 00:00
</pre>
<p>Task Scheduler options are stored in the registry</p>
<pre>HKLM\SOFTWARE\Microsoft\SchedulingAgent\</pre>
<p class="quote"><i>“We don’t wake up for less than $10,000 a day” ~ Linda Evangelista </i> </p>
<p><b>Related:</b></p>
<p><a href="http://support.microsoft.com/default.aspx/kb/823093">Q823093</a> - Scheduled task does not run when the Path contains a space<br>
<a href="waitfor.html">WAITFOR</a> - Wait for or send a signal.<br>
Powershell: To schedule a PS task call <a href="../ps/powershell.html">Powershell.exe</a><br>
Equivalent bash command (linux): <a href="../bash/crontab.html">
crontab</a>  - Schedule a command to run at a later time</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="schtasks.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

