---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-event</h1> 
<p> Create a new event.</p>
<pre>Syntax
      New-Event [[-SourceIdentifier] <i>string</i>] [[-Sender] <i>psobject</i>] [[-EventArguments] <i>PSObject</i>[]]
         [[-MessageData] <i>psobject</i>] [<i>CommonParameters</i>]

Key:
   -EventArguments <i>PSObject</i>[]
       An object that contains options for the event.

   -MessageData <i>psobject</i>
       Additional data associated with the event. The value of this parameter appears in the MessageData property of the event object.

   -Sender psobject
       The object that raises the event.
       The default is the Windows PowerShell engine.

   -SourceIdentifier <i>string</i>
       A a name for the new event.
       This parameter is required, and it must be unique in the session.
       The value of this parameter appears in the events SourceIdentifier property.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Use custom events to notify users about state changes in a program and any change that the program can 
detect, including hardware or system conditions, application status, disk status, network status, or the completion
of a background job.<br>
<br>
<span class="code">Register-EngineEvent</span> can be used to subscribe to the custom event and thus specify an action in response
to the event,<br>
<br>
When you subscribe to a custom event, the event subscriber is added to your session. If you cancel the event subscription by using the Unregister-Event cmdlet, the event subscriber and custom event are deleted from the session. If
you do not subscribe to the custom event, to delete the event, you must change the program conditions or close the
 PowerShell session.</p>
<p><b>Examples</b></p>
<p>Create a new event in the  PowerShell event queue. Use a Windows.Timer object to send the 
event:</p>
<p><span class="code">PS C:\&gt; new-event -sourceidentifier Timer -sender windows.timer  -messagedata "Test"</span></p>
<p class="quote"><i>“What old people say you cannot do, you try and find that you can. Old deeds for old people, and new deeds for new” ~ Henry David Thoreau</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-event.html">Get-Event</a> - Get events in the event queue<br> 
<a href="remove-event.html">Remove-Event</a> - Delete events from the event queue</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-event.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

