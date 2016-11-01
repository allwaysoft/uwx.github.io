---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Show-eventLog</h1> 
<p> Display the event logs of the local or a remote computer in Event Viewer.</p>
<pre>Syntax
      Show-EventLog [[-ComputerName] <i>string</i>] [<i>CommonParameters</i>]

Key:
   -ComputerName <i>string</i>[]
       Specify a remote computer. The default is the local computer.
       Type the NetBIOS name, an Internet Protocol (IP) address, or a
       fully qualified domain name of a remote computer.
       This parameter does not rely on PowerShell remoting.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Remove-EventLog will delete an event log file and unregister all of its event sources for the log. This cmdlet can also be used to unregister event sources without deleting any event logs.</p>
<p>The  EventLog cmdlets work only on classic event logs. To get events from logs that use the Windows Event Log technology in Windows Vista and later versions of Windows, use <a href="get-winevent.html">Get-WinEvent</a>.</p>
<p><b>Examples</b></p>
<p>Open Event Viewer and display the classic event logs from the local computer:</p>
<p><span class="code">PS C:\&gt; show-eventlog</span></p>
<p>Open Event Viewer and display the classic event logs from server64 :</p>
<p class="code">PS C:\&gt; show-eventlog -computername Server64</p>
<p class="quote"><i>“Don't tell me where your priorities are. Show me where you spend your money and I'll tell you what they are” ~ James W. Frick</i></p>
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
<div id="bl" class="footer"><a href="show-eventlog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

