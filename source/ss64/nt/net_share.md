---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET Command</a> is used to manage File 
Shares, Printer Shares and sessions as follows: <br>
<br>
Display a local share<br>
<span class="code">NET SHARE <i>sharename</i></span><br>
<br>
Display a list of computers in the current domain. <br>
<span class="code">NET VIEW</span><br>
<br>
To see a list of shares on a remote computer <br>
<span class="code">NET VIEW \\<i>ComputerName</i></span><br>
<br>
To see a list of all shares in the domain:<br>
<span class="code">NET VIEW /DOMAIN</span><br>
<br>
To see a list of shares on a different domain<br>
<span class="code">NET VIEW /DOMAIN:<i>domainname</i></span><br>
<br>
To see a list of shares on a remote Netware computer <br>
<span class="code">NET VIEW /NETWORK:NW [\\<i>ComputerName</i>]</span><br>
<br>
Create a new local file share<br>
<span class="code">NET SHARE <i>sharename</i>=<i>drive:path</i> /REMARK:"<i>text</i>" [/CACHE:Manual | Automatic | No 
]</span><br>
<br>
Limit the number of users who can connect to a share<br>
<span class="code">NET SHARE <i>sharename</i> /USERS:<i>number</i> /REMARK:"<i>text</i>"</span><br>
<br>
Remove any limit on the number of users who can connect to a share<br>
<span class="code">NET SHARE <i>sharename</i> /UNLIMITED /REMARK:"<i>text</i>"</span><br>
<br>
Delete a share<br>
<span class="code">NET SHARE {<i>sharename</i> | <i>devicename</i> | <i>drive:path</i>} /DELETE</span><br>
<br>
Delete all shares that apply to a given device<br>
<span class="code">NET SHARE <i>devicename</i> /DELETE</span><br>
In this case the devicename can be a printer (Lpt1) or a pathname (C:\Docs\)<br>
<br>
Join a file share (Drive MAP)<br>
<a href="net_use.html">NET USE</a> <br>
<br>
Display all the open shared files on a server and the lock-id<br>
<span class="code">NET FILE</span><br>
<br>
Close a shared file (disconnect other users and remove file locks)<br>
<span class="code">NET FILE <i>id</i> /CLOSE</span><br>
<br>
List all sessions connected to this machine<br>
<span class="code">NET SESSION</span><br>
<br>
List sessions from a given machine<br>
<span class="code">NET SESSION \\<i>ComputerName</i></span><br>
<br>
Disconnect all sessions connected to this machine<br>
<span class="code">NET SESSION /DELETE</span><br>
<br>
Disconnect all sessions connected to this machine (without any prompts)<br>
<span class="code">NET SESSION /DELETE /y</span><br>
<br>
Disconnect sessions from a given machine<br>
<span class="code">NET SESSION \\<i>ComputerName</i> /DELETE</span><br>
<br>
NET SESSION displays incoming connections only, in other words it must be run on the machine that is acting as the server.</p>
<p>  To create file shares, <i>File and Printer sharing</i> must  be enabled on the (server) computer.</p>
<p><span class="quote"><i>“Don’t worry about people stealing an idea. If it's original, you will have to ram it down their throats” ~ Howard Aiken</i></span><i><br>
</i><br>
<b>Related:<br>
</b><br>
<a href="net.html">NET</a> - Manage network resources<br>
<a href="net_use.html">NET USE</a> - connect to a file share <br>
 OPENFILES - List or disconnect open files, local or remote (Win XP)<br>
<a href="psfile.html">PsFile</a> - Show files opened remotely<br>
<a href="psloggedon.html">PsLoggedOn</a> - Who's logged on <br>
fsmgmt.msc - Network share Admin snap-in.<br>
Drmapsrv - Drive Share for use with Terminal Services (Win 2K Server <a href="../links/windows.html#kits">Resource Kit</a> only)<br>
<a href="https://support.microsoft.com/kb/149427">Q149427</a> - Change Password from the CMD prompt<br>
 Powershell: <a href="../ps/get-wmiobject.html">Get-WmiObject</a> win32_share<br>
Equivalent bash command (Linux): <a href="../bash/users.html">users</a> - Users currently
logged in, <a href="../bash/who.html">who</a> currently logged in</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

