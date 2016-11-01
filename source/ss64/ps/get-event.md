---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-event</h1> 
<p> Get the events in the PowerShell event queue for the current session.</p>
<pre>Syntax
      Get-Event [-EventIdentifier] <i>int</i> [<i>CommonParameters</i>]

      Get-Event [[-SourceIdentifier] <i>string</i>] [<i>CommonParameters</i>]

Key:
   -EventIdentifier <i>int</i>
       Get only the events with the specified event identifier.

   -SourceIdentifier <i>string</i>
       Get only events with the specified source identifier.
       The default is all events in the event queue.
       Wildcards are not permitted.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>When an event occurs, it is added to the PowerShell event queue. The event queue includes events for which you have registered, events created by using the New-Event cmdlet, and the event that is raised when Windows PowerShell exits. You can
use Get-Event or Wait-Event to get the events.<br>
<br>
This cmdlet does not get events from the Event Viewer logs. To get those events, use <a href="get-winevent.html">Get-WinEvent</a> or <a href="get-eventlog.html">Get-Eventlog</a>.</p>
<p><b>Examples</b></p>
<p>Get all events in the event queue:</p>
<p><span class="code">PS C:\&gt; get-event</span><br>
  <br>
  Get events in which the value of the SourceIdentifier property is "PowerShell.ProcessCreated".</p>
<p class="code">PS C:\&gt; get-event -sourceIdentifier "PowerShell.ProcessCreated"</p>
<p>Get events with specific properties:</p>
<p class="code">PS C:\&gt; $events = get-event<br>
PS C:\&gt; $events[0] | format-list -property *<br>
PS C:\&gt; get-event | where {$_.TimeGenerated -ge "11/13/2008 12:15:00 PM"}</p>
<p class="quote"><i>“The Statesman who yields to war fever must realize that once the signal is given, he is no longer the master of policy but the slave of unforeseeable and uncontrollable events” ~ Sir Winston Spencer Churchill</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="new-event.html">New-Event</a> - Create a new event<br> 
<a href="remove-event.html">Remove-Event</a> - Delete events from the event queue<br>
<a href="get-winevent.html">Get-WinEvent</a> - Get events from event logs and event trace logs<br>
<a href="get-eventlog.html">Get-Eventlog</a> - Get event log data</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-event.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

