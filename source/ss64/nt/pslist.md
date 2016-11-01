---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PsList (<abbr title="Download the PsTools suite"><a href="http://technet.microsoft.com/en-us/sysinternals">PsTools</a></abbr>)</h1>
<p>Process Status, list information about processes running in memory.</p>
<pre>Syntax
      pslist [-?] [-t] [-m] [-x] [\\computer [-u <i>user</i>] [-p <i>passwd</i>]] [<i>name</i> | <i>pid</i>] 

Options:

   computer   The computer on which the process is running. Default=local system 

   -p <i>passwd</i>  Specify a password for <i>user</i> (optional). Passed as clear text.
              If omitted, you will be prompted to enter a hidden password.

   -u <i>user</i>    Specify a user name for login to remote computer(optional).

   -t         Show statistics for all active threads on the system,
              each thread is grouped with its owning process.

   -m         Show memory-oriented information for each process, 
              rather than the default of CPU-oriented information.

   -x         Show CPU, memory and thread information for each process specified.

   <i>name</i>       Scan only those processes that begin with the <i>name</i> process.
              Thus:
                pslist exp
              will display processes that start with exp... Explorer, Export etc

   -accepteula Suppress the display of the license dialog.

   -?         Display options and units of measurement.</pre>
<p>The default information listed includes the time the process has executed, the amount of time the process has executed in kernel and user modes, and the amount of physical memory that the OS has assigned the process.</p>
<p>When running PsList against a remote system you must have administrative rights on that system, and the system must be running the Remote Registry <a href="syntax-services.html">service</a>.</p>
<p>When launched for the first time, PsList will create the regkey <br>
<span class="code">HKCU\Software\Sysinternals\PsList\EulaAccepted=0x01</span></p>
<p><b>  Examples:</b><br>
<br>List all processes running on \\workstation64:</p>
<p class="code">C:\&gt; <a href="sc.html">SC</a> \\workstation64  start RemoteRegistry <br>
C:\&gt; pslist \\workstation64</p>
<p class="quote"><i>“Here’s a rule I recommend. Never practice two vices at once” ~ Tallulah Bankhead</i></p>
<p><b>Related:</b></p>
<p><a href="http://forum.sysinternals.com/faq-common-pstools-issues_topic15920.html">FAQ: Common PSTools Issues</a><br>
<a href="pskill.html">PsKill</a> - Kill processes by name or process ID.<br>
<a href="openfiles.html">OPENFILES</a> - Query or display open files, disconnect files opened by network 
users.<br>
<a href="procdump.html">ProcDump</a> - Monitor an application for CPU spikes.<br>
<span class="body"><a href="tasklist.html">TASKLIST</a> - List running applications and services</span>.<br>
<a href="tlist.html">TLIST</a> Task list with full path.<br>
Windows Task Manager - List of running  process IDs (PID)<br>
PerfMon - Monitoring tool.<br>
Powershell: <a href="../ps/get-process.html">Get-Process</a> - Get a list of processes on a machine (ps/gps)<br>
Equivalent bash command (Linux): <a href="../bash/ps.html">ps</a> - Process status, information about processes running in memory.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pslist.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
