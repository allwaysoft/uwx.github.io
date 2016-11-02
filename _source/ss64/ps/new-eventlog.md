---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-eventLog</h1> 
<p> Create a new classic event log and a new event source on a local or remote computer.</p>
<pre>Syntax
      New-EventLog [-LogName] <i>string</i> [-Source] <i>string</i>[] [[-ComputerName] <i>string</i>[]]
         [-CategoryResourceFile <i>string</i>] [-MessageResourceFile <i>string</i>]
            [-ParameterResourceFile <i>string</i>] [<i>CommonParameters</i>]

Key:
   -CategoryResourceFile <i>string</i><br>       Path to the file that contains category strings for the source events.
       Also known as the Category Message File.<br>        <br>       The file must be present on the computer on which the event log is being
       created. This parameter does not create or move files.<br>        <br>   -ComputerName <i>string</i>[]<br>       Create the new event logs on the specified computers.
       The default is the local computer.<br>        <br>       Type the NetBIOS name, an Internet Protocol (IP) address, or a fully qualified
       domain name of a remote computer.<br>       To specify the local computer, type the computer name, a dot (.), or "localhost".<br>        <br>       This parameter does not rely on PowerShell remoting.<br>        <br>   -LogName <i>string</i><br>       The name of the event log. <br>        <br>       If the log does not exist, New-EventLog creates the log and uses this
       value for the Log and LogDisplayName properties of the new event log.
       If the log exists, New-EventLog registers a new source for the event log.<br>        <br>   -MessageResourceFile <i>string</i><br>       The path to the file that contains message formatting strings for the
       source events. This file is also known as the Event Message File.<br>        <br>       The file must be present on the computer on which the event log is being
       created. This parameter does not create or move files.<br>        <br>   -ParameterResourceFile <i>string</i><br>       The path to the file that contains strings used for parameter
       substitutions in event descriptions. 
       This file is also known as the Parameter Message File.<br>        <br>       The file must be present on the computer on which the event log is being
       created. This parameter does not create or move files.<br>        <br>   -Source <i>string</i>[]<br>       The names of the event log sources, such as application programs that
       write to the event log. This parameter is required.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Cmdlets that contain the EventLog noun (the Event log cmdlets) work only on classic event logs. To get events from logs that use the  Event Log technology in Windows Vista and later versions of Windows, use <a href="get-winevent.html">Get-WinEvent</a></p>
<p><b>Examples</b></p>
<p>Create the TestLog event log on the local computer and register a new source for it:</p>
<p><span class="code">PS C:\&gt; new-eventlog -source TestApp -logname TestLog -MessageResourceFile C:\Test\TestApp.dll</span><br>
  <br>
  Add a new event source, NewTestApp, to the Application log on the Server64 remote computer (requires NewTestApp.dll to exist).</p>
<p class="code">PS C:\&gt; $file = "C:\Program Files\TestApps\NewTestApp.dll"<br>
PS C:\&gt; new-eventlog -computername Server64 -source NewTestApp -logname Application -MessageResourceFile $file -CategoryResourceFile $file</p>
<p class="quote"><i>“Some men have only one book in them, others a library” ~ Proverb</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-eventlog.html">Get-Eventlog</a> - Get event log data <br>
<a href="remove-eventlog.html">Remove-EventLog</a> - Delete an event log</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

