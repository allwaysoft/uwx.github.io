---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-EventLog</h1> 
<p> Get eventlog data, list the event logs.</p>
<pre>Syntax
      Get-EventLog [-logName] <i>string</i> [-newest <i>int</i>]
        [<i>CommonParameters</i>]

      Get-EventLog [-list] [-asString]
        [<i>CommonParameters</i>]

Key:
   -logName <i>string</i>
       Name of the log file from which to get log events.

   -list 
       Return a list of the log files available.

   -asString 
       Send the output as a string, instead of object(s).

   -newest 
       Gets the newest 'n' event log entries, where 
       'n' represents a numerical value for the newest 
       entries in the eventlog.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Get-EventLog only works against the 'classic' event logs  - it is compatible with Windows XP and 2003.  </p>
<p>To query the new style event logs first introduced in Windows Vista use <a href="get-winevent.html">Get-WinEvent</a>.</p>
<p>Event logs often contain tens of thousands of event log entries,  so consider using<span class="code"> -Newest </span>parameter to limit the number of entries returned.</p>
<p><b>Examples</b></p>
<p>Display the 50 most recent entries in the Application event log:</p>
<p><span class="code">PS C:\&gt; get-eventlog -newest 50 -logname application</span><br>
  <br>
  Get the 100  recent entries from the System event log and store in $MyEvents.<br>
Then pipeline the results to <a href="group-object.html">group-object </a>to group them by event id.</p>
<p class="code">PS C:\&gt; $events = get-eventlog -logname system -newest 100
    <br>
PS C:\&gt; $events | group-object eventid</p>
<p>Write a new message to the Application eventlog:</p>
<p class="code">PS C:\&gt; $log = Get-EventLog -List | Where-Object { $_.Log -eq "Application" }<br>
PS C:\&gt; $log.Source = "Test"<br>
PS C:\&gt; $log.WriteEntry("Test message")<br>
<br>
PS C:\&gt; Get-EventLog Application -Newest 1 | Select Message</p>
<p class="quote"><i>"The Statesman who yields to war fever must realize that once the signal is given, he is no longer the master of policy but the slave of unforeseeable and uncontrollable events" ~ Sir Winston Spencer Churchill</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-winevent.html">Get-WinEvent</a> - Get event log data (Vista+)<br>
<a href="get-event.html">Get-Event</a> - Get events in the event queue<br>
<a href="show-eventlog.html">Show-EventLog</a> - Display an event log</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-eventlog.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

