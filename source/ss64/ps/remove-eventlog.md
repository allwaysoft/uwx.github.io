---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-eventLog</h1> 
<p> Delete an event log or unregister an event source.</p>
<pre>Syntax
      Remove-EventLog [-LogName] <i>string</i>[] [[-ComputerName] <i>string</i>[]]
        [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Remove-EventLog [[-ComputerName] <i>string</i>[]] [-Source <i>string</i>[]]
        [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key:
   -ComputerName <i>string</i>[]
       Specify a remote computer. The default is the local computer.
       Type the NetBIOS name, an Internet Protocol (IP) address, or a
       fully qualified domain name of a remote computer.
       This parameter does not rely on PowerShell remoting.

   -LogName <i>string</i>
       The event logs to delete.
       Enter the log name (not the Display Name) of one or 
       more event logs , separated by commas.
       Wildcard characters are not permitted. This parameter is required.

   -Source string[]<br>       Unregister the specified event sources.
       Enter the source names (not the executable name), separated by commas.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describes what would happen if you executed the command
       without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Remove-EventLog will delete an event log file and unregister all of its event sources for the log. This cmdlet can also be used to unregister event sources without deleting any event logs.</p>
<p>The  EventLog cmdlets work only on classic event logs. To get events from logs that use the Windows Event Log technology in Windows Vista and later versions of Windows, use <a href="get-winevent.html">Get-WinEvent</a>.</p>
<p><b>Examples</b></p>
<p>Delete the SS64 event log from the local computer and unregister its event sources:</p>
<p><span class="code">PS C:\&gt; remove-eventlog -logname SS64</span></p>
<p>Delete the MyApp event source from the logs on the local computer. Prevent the MyApp program from writing  any event logs:</p>
<p class="code">PS C:\&gt; remove-eventlog -source MyApp</p>
<p>Write a new message to the Application eventlog:</p>
<p class="code">PS C:\&gt; $log = Get-EventLog -List | Where-Object { $_.Log -eq "Application" }<br>
PS C:\&gt; $log.Source = "Test"<br>
PS C:\&gt; $log.WriteEntry("Test message")<br>
<br>
PS C:\&gt; Get-EventLog Application -Newest 1 | Select Message</p>
<p class="quote"><i>“No amount of time can erase the memory of a good cat, and no amount of masking tape can ever totally remove his fur from your couch” ~ Leo F. Buscaglia</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-eventlog.html">Get-Eventlog</a> - Get event log data <a href="new-eventlog.html"><br>
New-Eventlog</a> - Create a new event log and a new event source</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-eventlog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

