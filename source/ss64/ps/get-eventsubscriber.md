---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-EventSubscriber</h1> 
<p> Get the event subscribers in the current session.</p>
<pre>Syntax
      Get-EventSubscriber [-SubscriptionId] <i>int</i>
         [[-Force]] [<i>CommonParameters</i>]

      Get-EventSubscriber [[-SourceIdentifier] <i>string</i>]
         [[-Force]] [<i>CommonParameters</i>]

Key:
   -Force
       Get all event subscribers, including subscribers for events that
       are hidden using <a href="register-objectevent.html">Register-ObjectEvent</a> -SupportEvent, <a href="register-wmievent.html">Register-WmiEvent</a> or <a href="register-engineevent.html">Register-EngineEvent</a>.

   -SourceIdentifier <i>string</i>
       Get only the event subscribers with the specified property value.
       The default is all event subscribers in the session.
       Wildcards are not permitted. This parameter is case-sensitive.

   -SubscriptionId <i>int</i>
       Get only the specified subscription identifier.
       The default is all event subscribers in the session.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Event logs often contain tens of thousands of event log entries,  so consider using<span class="code"> -Newest </span>parameter to limit the number of entries returned.</p>
<p><b>Examples</b></p>
<p>Get the event subscriber for an elapsed event:</p>
<p><span class="code">PS C:\&gt; Get-EventSubscriber</span><br>
<br>Get  the event subscriber of the Timer.Random event.</p>
<p class="code">PS C:\&gt; $subscriber = Get-EventSubcriber -sourceIdentifer Timer.Random</p>
<p>Display the Action property of the event subscriber object:</p>
<p class="code">PS C:\&gt; ($subscriber.action).gettype().fullname</p>
<p class="quote"><i>“History is the version of past events that people have decided to agree upon” ~ Napoleon Bonaparte</i></p>
<p><b>Related:</b></p>
<p><a href="get-winevent.html">Get-WinEvent</a> - Get events from event logs and event trace logs<br>
<a href="get-event.html">Get-Event</a> - Get events in the event queue</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-eventsubscriber.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

