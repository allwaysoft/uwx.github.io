---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TASKKILL</h1>
<p>End one or more processes (by process id or image name).</p>
<pre>Syntax
      TASKKILL [/S <i>system</i> [/U <i>username</i> [/P [<i>password</i>]]]]
         { [/FI <i>filter</i>] [/PID <i>processid</i> | /IM <i>imagename</i>] } [/F] [/T]

<i>Options
</i>    /S   <i>system</i>           The remote system to connect to.

    /U   [domain\]<i>user</i>    The user context under which
                          the command should execute.

    /P   [password]       The password. Prompts for input if omitted.

    /F                    Forcefully terminate the process(es).

    /FI  <i>filter</i>           Display a set of tasks that match a
                          given criteria specified by the filter.

    /PID <i>process id   </i>    The PID of the process to be terminated.

    /IM  <i>image name</i>       The image name of the process to be terminated.
                          Wildcard '*' can be used to specify all image names.

    /T                     Tree kill: terminates the specified process
                           and any child processes which were started by it.

  Filters    Apply one of the Filters below:

             Imagename   eq, ne                  <i>String</i>
             PID         eq, ne, gt, lt, ge, le  Positive integer.
             Session     eq, ne, gt, lt, ge, le  Any valid session number.
             Status      eq, ne                  RUNNING | NOT RESPONDING
             CPUTime     eq, ne, gt, lt, ge, le  <i>Time</i> hh:mm:ss
             MemUsage    eq, ne, gt, lt, ge, le  Any valid integer.
             Username    eq, ne                  <i>User name</i> ([Domain\]User).
             Services    eq, ne                  <i>String</i> The service name
             Windowtitle eq, ne                  <i>String</i>
             Modules     eq, ne                  <i>String </i>The DLL name
</pre>
<p> <b> Examples:</b></p>
<pre>Examples:
    TASKKILL /S system /F /IM notepad.exe /T
    TASKKILL /PID 1230 /PID 1241 /PID 1253 /T
    TASKKILL /F /IM notepad.exe /IM mspaint.exe
    TASKKILL /F /FI "PID ge 1000" /FI "WINDOWTITLE ne untitle*"
    TASKKILL /F /FI "USERNAME eq NT AUTHORITY\SYSTEM" /IM notepad.exe
    TASKKILL /S system /U domain\username /FI "USERNAME ne NT*" /IM *
    TASKKILL /S system /U username /P password /FI "IMAGENAME eq note*"
</pre>
<p> Home editions of Windows do not have TASKKILL, useTSKILL instead.</p>

<p class="quote">  <i>“Here's to the success of our impossible task!” ~ Soviet dissidents, 1975</i></p>
<p>  <b>Related:</b></p>
<p><a href="tskill.html">TSKILL</a> - End a running process<br>
<a href="pskill.html">PsKill</a> - Kill processes by name or process ID<br>
Powershell: <a href="../ps/stop-process.html">Stop-Process</a> - Kill a process<br>
Equivalent bash command (Linux): <a href="../bash/kill.html">kill</a> - Kill a process</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="taskkill.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

