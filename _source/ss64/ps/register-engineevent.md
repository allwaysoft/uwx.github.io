---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Register-EngineEvent</h1> 
<p> Subscribe to events that are generated by the  PowerShell engine and by <a href="new-event.html">New-Event</a></p>
<pre>Syntax
      Register-EngineEvent [-SourceIdentifier] <i>string</i> 
         [[-Action] <i>scriptblock</i>] [-Forward] [-MessageData <i>psobject</i>]
            [-SupportEvent] [<i>CommonParameters</i>]

Key:
   -Action <i>scriptblock</i><br>       Commands to handle the events.
       The commands in the Action run when an event is raised, instead of
       sending the event to the event queue.
       Enclose the commands {in braces} to create a script block. 

       The value of the Action parameter can include the $Event,
       $EventSubscriber, $Sender, $SourceEventArgs, and $SourceArgs automatic variables,
       which provide information about the event to the Action script block.
       For more information, see about_Automatic_Variables.

       Register-EngineEvent will return an event job object that represents the action.

   -Forward
       Send events for this subscription to the session on the local computer.
       Use this parameter when registering for events on a remote computer
       or in a remote session.

   -MessageData <i>psobject</i>
       Additional data associated with the event.
       The value of this parameter appears in the MessageData property of the event object.

   -SourceIdentifier <i>string<br></i>       The source identifier of the event to which you are subscribing.
       The source identifier must be unique in the current session.
       This parameter is required.

       The value of this parameter appears in the SourceIdentifier
       property of the subscriber object and of all event objects associated
       with this subscription.

   -SupportEvent
       Hide the event subscription.
       Use this parameter when the current subscription is part of
       a more complex event registration mechanism and it should not
       be discovered independently.

       To view or cancel a subscription that was created with -SupportEvent,
       use the Force parameter of <a href="get-eventsubscriber.html">Get-EventSubscriber</a> and <a href="unregister-event.html">Unregister-Event</a>.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Register-EngineEvent subscribes to events that are generated by the PowerShell engine and <a href="new-event.html">New-Event</a>.<br>
Use <span class="code">-SourceIdentifier</span> to specify the event.</p>
<p>Subscribing allows you to forward the events and/or specify an action to respond to the events.</p>
<p>To cancel a subscription, use <a href="unregister-event.html">Unregister-Event</a></p>
<p><b>Examples</b></p>
<p>Create a PSSession on two remote computers, then run run the Register-EngineEvent on each of them, forwading events back to the local session:</p>
<p><span class="code">PS C:\&gt; $sess = new-pssession -computername Server64, Server65<br>
<br>
PS C:\&gt; invoke-command -session $sess { Register-EngineEvent -sourceIdentifier ([System.Management.Automation.PsEngineEvent]::Exiting) -forward }</span><br>
<br>Get  the event subscriber of the Timer.Random event.</p>
<p class="code">PS C:\&gt; $demojobs = register-engineEvent -sourceIdentifier <b>PowerShell.ProcessCreated</b> -action { $processName | add-content processLog.txt } <br>
<br>
C:\PS&gt; get-event<br>
<br>
C:\PS&gt; $results = $demojobs | Receive-Job<br>
<br>
C:\PS&gt; unregister-event <b>PowerShell.ProcessCreated</b></p>
<p class="quote"><i>“History is the version of past events that people have decided to agree upon” ~ Napoleon Bonaparte</i></p>
<p><b>Related:</b></p>
<p>  <a href="register-objectevent.html">Register-ObjectEvent</a> - Subscribe to .NET events <br>
<a href="register-wmievent.html">Register-WmiEvent</a> - Subscribe to a WMI event<br>
<a href="get-event.html">Get-Event</a> - Get events in the event queue</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
