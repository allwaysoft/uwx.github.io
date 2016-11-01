---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Limit-eventLog</h1> 
<p> Limit the size of the event log and the age of its entries.</p>
<pre>Syntax
      Limit-EventLog [-LogName] <i>string</i>[] [-ComputerName <i>string</i>[]]
         [-MaximumSize <i>Int64</i>] [-OverFlowAction <i>OverflowAction</i>]
            [-RetentionDays <i>int</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key:
   -ComputerName <i>string</i>[]
       A remote computer. The default is the local computer.

       Type the NetBIOS name, an Internet Protocol (IP) address, or a fully qualified
       domain name of a remote computer
       To specify the local computer, type the computer name, a dot (.), or "localhost".
       This parameter does not rely on Windows PowerShell remoting.

   -logName <i>string</i>
       The event logs.
       Enter the log name (the value of the Log property; not the LogDisplayName) of one or 
       more event logs , separated by commas.  Wildcard characters are not permitted.
       This parameter is required.

   -OverFlowAction <i>OverflowAction</i>
       What happens when the event log reaches its maximum size.

       Valid values are:
          DoNotOverwrite      Existing entries are retained and new entries are discarded.
          OverwriteAsNeeded   Each new entry overwrites the oldest entry.
          OverwriteOlder      New events overwrite events older than the value specified
                              by the MinimumRetentionDays property.
                              If there are no events older than specified by -MinimumRetentionDays,
                              then new events are dicarded.

       This parameter specifies the value of the OverflowAction property of the
       System.Diagnostics.EventLog object that represents a classic event log.

   -RetentionDays <i>int</i>
       The minimum number of days that an event must remain in the event log.

       This parameter specifies the value of the MinimumRetentionDays property of the
       System.Diagnostics.EventLog object that represents a classic event log.

   -whatIf
       Describe the command without actually executing it.

   -confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Limit-EventLog  sets the maximum size of a classic event log, how long each event must be retained, and what happens when the log reaches its maximum size. Use it to limit the event logs on local or remote computers.<br>
<br>
The cmdlets that contain the EventLog noun (the EventLog cmdlets) work only on classic event logs. To get events from logs that use the Windows Event Log technology in Windows Vista and later versions of Windows, use <a href="get-winevent.html">Get-WinEvent</a>.</p>
<p><b>Examples</b></p>
<p>Increase the maximum size of the Windows PowerShell event log on the local computer to 20 KB:</p>
<p><span class="code">PS C:\&gt; limit-eventLog -logname "Windows PowerShell" -MaximumSize 20KB</span><br>
  <br>
  Ensure that events in the Security log on the Server64 and Server65 computers are retained for at least 7 days:</p>
<p class="code">PS C:\&gt; limit-eventlog -logname Security -comp Server64, Server65 -retentionDays 7</p>
<p>Change the overflow action of all event logs on the local computer to "OverwriteOlder":</p>
<p class="code">PS C:\&gt; $logs = get-eventlog -list | foreach {$_.log}<br>
PS C:\&gt; limit-eventlog -overflowaction OverwriteOlder -logname $logs<br>
PS C:\&gt; get-eventlog -list</p>
<p class="quote"><i>“If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them” ~ Bruce Lee</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-winevent.html">Get-WinEvent</a> - Get events from event logs and event trace logs<br>
<a href="get-event.html">Get-Event</a> - Get events in the event queue</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="limit-eventlog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

