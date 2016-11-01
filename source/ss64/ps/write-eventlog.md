---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Write-EventLog</h1> 
<p> Write an event to an event log.</p>
<pre>Syntax
      Write-EventLog [-LogName] <i>string</i> [-Source] <i>string</i>
         [-EventID] <i>int</i> [-Message] <i>string</i> 
            [[-EntryType] <i>EventLogEntryType</i>] [-Category <i>Int16</i>]
               [-ComputerName <i>string</i>] [-RawData <i>Byte</i>[]] [<i>CommonParameters</i>]

Key:
   -Category <i>Int16</i>
       A task category for the event.
       Enter an integer that is associated with the strings in the
       category message file for the event log.

   -ComputerName <i>string</i> 
      Specify a remote computer. The default is the local computer.

       Type the NetBIOS name, an Internet Protocol (IP) address,
       or a fully qualified domain name of a remote computer.

       This parameter does not rely on Windows PowerShell remoting.

   -EntryType <i>EventLogEntryType</i>
       The <a href="http://go.microsoft.com/fwlink/?LinkId=143599">entry type</a> of the event.
       Valid values are:  Error, Warning, <u>Information</u>, SuccessAudit, FailureAudit.

   -EventID <i>int</i>
       The event identifier. This parameter is required.

   -logName <i>string</i>
       Name of the log file to which the event will be written.
       Enter the log name (the value of the Log property, not the LogDisplayName).
       Wildcard characters are not permitted. This parameter is required.

   -Message <i>string</i>
       The event message. This parameter is required.

    -RawData <i>Byte</i>[]
       The binary data that is associated with the event, in bytes.

    -Source &lt;string&gt;
       The event source, which is typically the name of the application
       that is writing the event to the log

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Write-EventLog  writes an event to an event log.<br>
<br>
To write an event to an event log, the event log must exist on the computer and the source must be registered for the event log. <br>
<br>
The cmdlets that contain the EventLog noun (the EventLog cmdlets) work only on classic event logs. To get events from logs that use the Windows Event Log technology in Windows Vista and later versions of Windows, use <a href="get-winevent.html">Get-WinEvent</a></p>
<p><b>Examples</b></p>
<p>Write an event from the SS64App source to the Application event log:</p>
<p><span class="code">PS C:\&gt; write-eventlog -logname Application -source SS64App -eventID 3001 -entrytype Information -message "Something happened." -category 1 -rawdata 10,20</span><br>
  <br>
  writes an event from the MyApp source to the Application event log on the Server64 remote computer:</p>
<p class="code">PS C:\&gt; write-eventlog -computername Server64 -logname Application -source SS64App -eventID 3001 -message "something else happened."</p>
<p class="quote"><i>"The Statesman who yields to war fever must realize that once the signal is given, he is no longer the master of policy but the slave of unforeseeable and uncontrollable events"  ~ Sir Winston Spencer Churchill</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-winevent.html">Get-WinEvent</a> - Get events from event logs and event trace logs<br>
<a href="get-event.html">Get-Event</a> - Get events in the event queue</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="write-eventlog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

