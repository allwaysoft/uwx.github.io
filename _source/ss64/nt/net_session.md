---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="net.html">NET.exe</a> - NET SESSION and NET FILE</h1> 
<p>The NET command is used to manage open files and user sessions as follows: <br>
<br>
Display all the open shared files on a server and the lock-id<br>
<span class="code">NET FILE</span><br><br>
Close a shared file (disconnect other users and remove file locks)<br>
<span class="code">NET FILE <i>id</i> /CLOSE</span><br><br>
List all sessions connected to this machine:<br>
<span class="code">NET SESSION<br></span>or<br>
<span class="code">NET SESSION | Find "\\"</span><br><br>
List sessions from a given machine<br>
<span class="code">NET SESSION \\<i>ComputerName</i></span><br><br>
Disconnect all sessions connected to this machine<br>
<span class="code">NET SESSION /DELETE</span><br><br>
Disconnect all sessions connected to this machine (without any prompts)<br>
<span class="code">NET SESSION /DELETE /y</span><br><br>
Disconnect sessions from a given machine<br>
<span class="code">NET SESSION \\<i>ComputerName</i> /DELETE</span><br><br>
NET SESSION displays incoming connections only, in other words it must be run on the machine that is acting as the server.</p>
<p>To create file shares the SERVER service must be running, which in turn requires 'File and Print Sharing' to be installed.</p>
<h1> UAC elevation</h1>
<p>Administrator privileges are required to run the NET SESSION command, if run from a non-<a href="syntax-elevate.html">elevated</a> session it will return an <a href="errorlevel.html">ERRORLEVEL</a> = 5 Access is Denied. </p>
<p>NET SESSION  requires the Server service to be running</p>
<p><i class="quote">“Never mistake activity for achievement” ~ John Wooden</i><br>
<br>
<b>Related:<br>
</b><br>
<a href="net.html">NET</a> - Manage network resources<br>
<a href="net_use.html">NET USE</a> - connect to a file share <br>
<a href="openfiles.html">OPENFILES</a> - List or disconnect open files, local or remote (Win XP)<br>
<a href="psfile.html">PsFile</a> - Show files opened remotely<br>
<a href="psloggedon.html">PsLoggedOn</a> - Who's logged on.<br>
<a href="https://support.microsoft.com/kb/149427">Q149427</a> - Change Password from the CMD prompt<br>
<a href="https://support.microsoft.com/kb/321711">Q321711</a> -
 DrMapSrv DriveShare utility for Win 2K Terminal Services<br>
 Powershell: <a href="../ps/get-wmiobject.html">Get-WmiObject</a> win32_share<br>
Equivalent bash command (Linux): <a href="../bash/who.html">who</a> currently logged in</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
