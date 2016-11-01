---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsKill (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Kill processes by name or process ID.</p>
<pre>Syntax
      pskill [- ] [-t] [\\<i>computer</i> [-u <i>user</i>] [-p <i>passwd</i>]] <i>process_name</i> | <i>process_id</i>

Options:

   <i>computer</i>   The computer on which the process is running. Default=local system 

   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   -t         Kill the process and its descendants.

   <i>process_id/name</i>
              The process or processes to be killed.

   -accepteula Suppress the display of the license dialog.

   -          Help, display the supported options.</pre>
<p>  To kill a process on a remote system requires administrative privileges on the remote system.</p>
<p>When launched for the first time, PsKill will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsKill\EulaAccepted=0x01</span></p>
<p><b>  Examples:</b><br>
<br>
Kill all instances of notepad.exe running on \\workstation64:</p>
<p class="code">pskill \\workstation64 notepad</p>
<p class="quote"><i>“Never trust a man who, when left alone with a tea cosy, doesn't try it on” ~ Billy Connolly</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="tskill.html">TSKILL</a> - Kill process on a Terminal Server.<br>
<a href="taskkill.html">TASKKILL</a> - End a running process.<br>
<a href="procdump.html">ProcDump</a> - Monitor an application for CPU spikes.<br>
<a href="pslist.html">PsList</a> - List detailed information about processes.<br>
The process button of Task Manager in Windows will also  identify the process ID (PID.)<br>
<a href="pssuspend.html">PsSuspend</a> - Suspend processes (so they can be continued at a later point in time.)<br>
 Powershell: <a href="../ps/stop-process.html">Stop-Process</a> - Stop a running process. (kill) <br>
Equivalent bash command (Linux):<a href="../bash/kill.html"> kill</a> - Stop a process from running.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pskill.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

