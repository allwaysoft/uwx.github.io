---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WAITFOR.exe (<a href="../links/windows.html#kits">2003 Resource Kit</a>, standard in Windows 7/2008)</h1>
<p> Wait for or send a signal. Waitfor is used to synchronize events between one or more networked computers.</p>
<pre>Syntax
   Wait for a signal:<br>      waitfor [/t <i>Timeout</i>] <i>SignalName</i>

   Send a signal:
      waitfor [/s <i>Computer</i> [/u [<i>Domain</i>\]<i>User</i> [/p [<i>Password</i>]]]] <b>/si</b> <i>SignalName</i>

Key
   /s <i>Computer</i>  The name or IP address of the computer to signal
                (do not include backslashes).

   /u <i>User      </i>Run the script using the credentials of the specified user account.
                By default, waitfor uses the current user's credentials.

   /p [<i>Password</i>] The password of the user account specified with /u

   /si          Send the signal across the network to waiting machines.

   /t <i>Timeout</i>   Number of seconds to wait for a signal.
                The valid range is 1 - 99999 (27.7 hours)
                default = wait indefinitely.

  <i> SignalName</i>   The signal that waitfor waits for or sends.
                SignalName is not case-sensitive.

   /?           Display help.</pre>
<p>Signal names cannot exceed 225 characters. Valid characters include a-z, A-Z, 0-9, the SignalName is not case-sensitive.
</p><p>If the command line  includes <span class="code">/s <i>Computer</i></span>, the signal will be broadcast  only to the specified system rather than all the computers across the domain. On large domains or wide area networks this <span class="code"></span> will reduce unnecessary network traffic.

</p><p>To cancel WAITFOR before its timeout has been reached, either launch <span class="code">Waitfor /si <i>signal</i> </span> from a separate command-prompt or <a href="tskill.html">KILL</a> the session.

</p><p>You can run multiple instances of WAITFOR on a single computer, but each instance must wait for a different signal. Only one instance of WAITFOR can wait for a given signal on a given computer. Computers can only receive signals if they are in the same domain as the computer sending the signal.
</p><p>Batch scripts including WAITFOR can be run as <a href="schtasks.html">Scheduled</a> tasks under the SYSTEM account. 
</p><p>Typical WAITFOR applications   include waiting for large ROBOCOPY jobs to complete, restarting services across a cluster/farm, FTP or BITS downloads, compiling software  builds etc.
</p><p><b>Examples</b>
</p><p>Wait for 60 seconds or until the "simon" signal is received on the local computer:
</p><p class="code">C:\&gt; waitfor /t 60  simon </p>
<p>Activate the "simon" signal on the local computer:</p>
<p class="code">C:\&gt; waitfor /s %computername% /si  simon</p>
<p>Wait for 1 hour or until the "backupComplete" signal is received on the local computer:</p>
<p class="code">C:\&gt; waitfor /t 3600 BackupComplete</p>
<p>Activate the "backupComplete" signal on the  computer Server64:</p>
<p class="code">C:\&gt; waitfor /s Server64 /si backupComplete</p>
<p><i class="quote">“Non-violence is not inaction. It is not discussion. It is not for the timid or weak... Non-violence is hard work. It is the willingness to sacrifice. It is the patience to win” ~ Cesar Chavez</i><br>
<b><br>Related:</b><br>
<br><a href="pause.html">PAUSE</a> - Suspend processing of a batch file and display a message<br>
<a href="sleep.html">SLEEP</a> - Delay execution for a few seconds/minutes (for use within a batch file.)<br>
<a href="timeout.html">TIMEOUT</a> - Delay execution for a few seconds/minutes (for use within a batch file.)<br>
Powershell: <a href="../ps/start-sleep.html">Start-Sleep</a> - Suspend shell, script, or runspace activity (sleep)<br>
Bash: <a href="../bash/wait.html">wait</a> - Wait for a process to complete
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
