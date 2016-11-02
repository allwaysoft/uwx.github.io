---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-Event</h1> 
<p> Delete events from the PowerShell event queue in the current session.</p>
<pre>Syntax
      Remove-Event [-EventIdentifier] <i>int</i>
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

      Remove-Event [[-SourceIdentifier] <i>string</i>]
        [-Confirm] [-WhatIf][<i>CommonParameters</i>]

Key:
   -EventIdentifier <i>int</i>
       Remove only the events with the specified event identifier.

   -SourceIdentifier <i>string</i>
       Remove only events with the specified source identifier.
       The default is all events in the event queue.
       Wildcards are not permitted.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describes what would happen if you executed the command
       without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-Event deletes only the events currently in the queue. To cancel event registrations or unsubscribe, use  Unregister-Event.</p>
<p><b>Examples</b></p>
<p>Delete events with a given source identifier :</p>
<p><span class="code">PS C:\&gt; remove-event -sourceIdentifier "ProcessStarted"</span><br>
  <br>
  Delete all events from the event queue:</p>
<p class="code">PS C:\&gt; get-event | remove-event</p>
<p class="quote"><i>“In the End, we will remember not the words of our enemies, but the silence of our friends” ~ Martin Luther King, Jr</i></p>
<p><b>Related:</b><br>
<br>
<a href="new-event.html">New-Event</a> - Create a new event<br> 
<a href="get-event.html">Get-Event</a> - Get events in the event queue<br>
<a href="unregister-event.html">Unregister-Event</a> - Cancel an event subscription</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-event.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

