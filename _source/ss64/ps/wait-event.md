---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Wait-event</h1> 
<p> Wait until a particular event is raised before continuing to run.</p>
<pre>Syntax
      Wait-Event [[-SourceIdentifier] <i>string</i>]
         [-Timeout <i>int</i>] [<i>CommonParameters</i>]

Key:
   -SourceIdentifier <i>string</i>
       Wait only for events with the specified source identifier.
       By default, Wait-Events waits for any event.

   -Timeout <i>int</i>
       The maximum time, in seconds, to wait for the event to occur.
       The default, -1, waits indefinitely.
       The timing starts when you submit the Wait-Event command.

       If the specified time is exceeded, the wait ends and the command prompt returns,
       even if the event has not been raised. No error message is displayed.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Wait-Event  suspends execution of a script or function until a particular event is raised. Execution resumes when the event is detected. To cancel the wait, press CTRL+C. <br>
<br>
This feature provides an alternative to polling for an event. </p>
<p>The response to an event may be determined in two different ways: by using the -Action parameter of the event subscription and by waiting for an event to return and then respond with an action.</p>
<p><b>Examples</b></p>
<p>Wait for the next event that is raised:</p>
<p><span class="code">PS C:\&gt; wait-event</span></p>
<p>Wait for the next event that is raised with a source identifier of "ProcessStarted":</p>
<p><span class="code">PS C:\&gt; wait-event -sourceIdentifier "ProcessStarted"</span></p>
<p>Wait up to 90 seconds, for the next event that is raised with a source identifier of "ProcessStarted":</p>
<p><span class="code">PS C:\&gt; wait-event -sourceIdentifier "ProcessStarted" -timeout 90</span></p>
<p>Wait  for a timer event on a timer that is set for 2000 milliseconds:</p>
<p><span class="code">PS C:\&gt; $timer.Interval = 2000 <br>
PS C:\&gt; $timer.Autoreset = $false <br>
PS C:\&gt; $timer.Enabled = $true<br>
</span><span class="code"> PS C:\&gt; Wait-Event Timer.Elapsed</span></p>
<p class="quote"><i>“Don't wait for extraordinary opportunities. Seize common occasions and make them great. Weak men wait for opportunities; strong men make them” ~ Orison Swett Marden</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-event.html">Get-Event</a> - Get events in the event queue<br> 
<a href="wait-job.html">Wait-Job</a> - Wait for a background job</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="wait-event.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

