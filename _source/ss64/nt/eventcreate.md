---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>EVENTCREATE</h1> 
<p>Add a message to the Windows event log, requires administrator rights.</p>
<pre>Syntax
      EVENTCREATE [/S <i>system</i> [/U <i>username</i> [/P [<i>password</i>]]]] /ID <i>eventid</i>
            [/L <i>logname</i>] [/SO srcname] /T type /D description

Key:
    /S <i>system</i>         The remote system to connect to.

    /U [<i>domain</i>\]<i>user</i>  User credentials under which to execute.

    /P [<i>password</i>]     Password for <i>user, </i>will prompt if omitted.

    /L <i>logname</i>        The event log to create an event in.

    /T <i>type</i>           The type of event to create: SUCCESS, ERROR, WARNING, INFORMATION.

    /SO <i>source</i>        The source to use for the event  A text string that represents the application
                      or component that is generating the event. Default='eventcreate'

    /ID <i>id</i>            Event ID, a number between 1 - 1000.

    /D <i>description</i>    Description text for the new event.

    /?                Help</pre>
<p><b>Examples:<br>
</b><br>
Add an ERROR to the Application log:<br>
<span class="code">C:\&gt; EVENTCREATE /T ERROR /ID 1000 /L APPLICATION /D "My application error mesaage"</span><br>
<br>
Add a WARNING to the Application log for Application SS64App:<br>
<span class="code">C:\&gt; EVENTCREATE /T WARNING /ID 500 /L APPLICATION /SO SS64App /D "Running low on diskspace"</span><br>
<br>
Add an ERROR to the Application log on Server401:<br>
<span class="code">C:\&gt; EVENTCREATE /S Server401 /T ERROR /ID 250 /L APPLICATION /D "Something bad happened"<br>
</span><br>
Add an ERROR to the Application log on Server401:<br>
<span class="code">C:\&gt; EVENTCREATE /S Server401 /U billg /P password /ID 250 /T ERROR /L APPLICATION /D "Something bad happened</span>"</p>
<p>  <i class="quote">“Ideology: a system of organizing principals, a way of seeing the world as the basis of a <a href="http://en.wikipedia.org/wiki/Social_philosophy">social</a> or <a href="http://en.wikipedia.org/wiki/Political_philosophy">political philosophy</a> or program” </i><br>
  <br>
  <b>Related:</b><br>
  <br>
  EVENTQUERY - Read an event log message<br>
EVENTTRIGGERS - Display and configure Event Triggers<br>
 Powershell: <a href="../ps/get-eventlog.html">Get-Eventlog</a> - Get / write eventlog data<br>
<a href="../vb/logevent.html">WshShell.LogEvent</a> - Log an item in the Event log <br>
<a href="wmic.html">WMIC NTEVENTLOG</a> - WMI access to the event log<br>
<a href="https://support.microsoft.com/kb/q131008/">Q131008</a> - Use eventlog from a batch file</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

