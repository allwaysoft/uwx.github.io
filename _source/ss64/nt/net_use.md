---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="net.html">NET</a> USE</h1>
<p>Map a drive letter  to a remote server/share. </p>
<pre>Syntax
      NET USE [<i>devicename</i> | *] [<b>\\<i>computername</i>\<i>sharename</i></b>[\<i>volume</i>] [<i>password</i> | *]]
         [/USER:[<i>domainname</i>\]<i>username</i>]
         [/USER:[<i>dotted domain name</i>\]<i>username</i>]
         [/USER:[<i>username@dotted domain name</i>]
            [/SMARTCARD] [/SAVECRED] <b>[</b>[/DELETE] | [/PERSISTENT:{YES | NO}]<b>]</b>

      Map to the current user's home directory as specified in the users Active Directory record:
      NET USE {<i>devicename</i> | *} [<i>password</i> | *] <b>/HOME</b>

      Set defaults:
      NET USE [<b>/PERSISTENT</b>:{YES | NO}]</pre>
<p>To map a drive to a network resource, <i>File and Printer sharing</i> must  be enabled on the remote (server) computer.</p>
<p>NET USE command can map a network printer to an
  LPT port (for DOS type applications that print to a port.) but this does not
add the printer to the Control Panel.</p>
<p> By default all mapped
  drives have a 15 minute<i> idle session
  timeout</i>, you can modify this  with the <a href="net_config.html">NET
CONFIG</a> command. This behaviour is designed to improve  overall performance.</p>
<p>If running on an old (pre Windows 2000) computer, NET USE will use NetBIOS over TCP/IP (NetBT) to resolve computer names.</p>
<h2>Drive Descriptions</h2>
<blockquote>
<p>Windows  explorer displays a drive description for 
each share, while this can be edited in the  Explorer 
  GUI. The text is stored in the registry.</p>
<pre>HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\MountPoints2\##<i>ComputerName</i>#<i>ShareName</i>
_LabelFromReg=&lt;<i>description of drive mapping</i>&gt;
   (string REG_SZ)</pre>
</blockquote>
<p><b>Examples:</b></p>
<p>Join a file share (Drive MAP)<br>
<span class="code">&nbsp;NET USE [<i>driveletter</i>:] \\<i>ComputerName</i>\<i>ShareName</i> /PERSISTENT:YES</span></p>
<p><span class="code">&nbsp;NET USE [<i>driveletter</i>:] \\<i>ComputerName</i>\<i>ShareName\folder1\folder2</i> /PERSISTENT:No</span></p>
<p><span class="code"> &nbsp;NET USE H: /Home<br>
&nbsp;NET USE J: \\MainServer\Users\%Username%<br>
&nbsp;NET USE W: \\MainServer\GroupShare /Persistent:No<br>
&nbsp;NET USE \\MainServer\SharedPrinter</span></p>
<p>  Make all future connections persistent (auto-reconnect at login)<br>
<span class="code">&nbsp;NET USE /Persistent:Yes</span><br>
or
<br>
<span class="code">&nbsp;NET USE /P:Yes</span></p>
<p>Make all future connections non-persistent (reconnect with login script)<br>
<span class="code">&nbsp;NET USE  /Persistent:No</span><br>
or<br>
<span class="code">&nbsp;NET USE /P:No</span></p>
<p>Join a file share (Drive MAP) - with a long share name<br>
<span class="code">&nbsp;NET USE [<i>driveletter</i>:] "\\<i>ComputerName</i>\<i>ShareName</i>"</span></p>
<p>Connect a user to their HOME directory<br>
<span class="code">&nbsp;NET USE [<i>devicename</i> | *] [<i>password</i> | *]] [/HOME]</span><br>
This requires the users Home server/folder to be defined in AD<br>
  <br>
 In a script, to map a drive and wait until the mapping has completed before continuing:<br>
  <span class="code">&nbsp;<a href="start.html">START</a> /wait NET USE [<i>driveletter</i>:] \\<i>ComputerName\ShareName</i></span><br>
  This will be a little slower, but ensures that files can be read from the mapped drive.<br>
  <br>
  Join a Printer Share<br>
  <span class="code">&nbsp;NET USE [LPTx:] \\<i>ComputerName</i>\<i>printer_share</i> /PERSISTENT:YES</span><br>
  <br>
  Join a Printer Share - with a "long" share name<br>
  <span class="code">&nbsp;NET USE [LPTx:] "\\<i>ComputerName</i>\<i>printer_share</i>"</span><br>
  <br>
  Disconnect from a share<br>
  <span class="code">&nbsp;NET USE [<i>driveletter</i>:] /DELETE</span></p>
<p>Disconnect from a share and close all resources (undocumented) <br>
<span class="code">&nbsp;NET USE [<i>driveletter</i>:] /DELETE /Y </span></p>
<p>Map a drive using alternate credentials - this will prompt for a password<br>
<span class="code">&nbsp;NET USE G: \\Server64\Share1 /USER:SS64dom\user64</span><br>
</p>
<p>Map a drive using  alternate credentials, passing a password credential (this must be run from PowerShell)</p>
<pre>PS C:\&gt; "s5QxXkwnOxt3MuNlgY6E" | ConvertTo-SecureString -AsPlainText -Force | ConvertFrom-SecureString | Out-File C:\temp\credential.txt</pre>
<pre>PS C:\&gt; $SecString = get-content C:\temp\credential.txt | ConvertTo-SecureString</pre>
<pre>PS C:\&gt; $cred = New-Object System.Management.Automation.PsCredential(<span class="code">'SS64dom\user64</span>',$SecString)</pre>
<pre>PS C:\&gt; <a href="../ps/new-psdrive.html">New-PSDrive</a> -name G -Root \\Server64\Share1 -Credential $cred -PSProvider filesystem -Persist</pre>
<p>the password can be decrypted only by the user who encrypted it on the same machine. Now when you need to use this credential you can do </p>
<p> <i class="quote">“Two roads diverged in a wood, and I-
I took the one less traveled by,
And that has made all the difference” ~ Robert Frost</i><br>
 <br>
  <b>Related:<br>
  </b><br>
 VB Script: <a href="../vb/mapnetworkdrive.html">MapDrive</a>  [ <a href="../vb/syntax-mapdrive.html">example</a> ]<br>
VB Script: <a href="../vb/addwindowsprinterconnection.html">Add Printer Connection</a>  [<a href="syntax-printing.html">Examples</a>]<br>
  <a href="net.html">NET</a> - Manage network resources.<br>
<a href="net_share.html">NET SESSION</a> - List or disconnect open files.<br>
  <a href="net_share.html">NET SHARE</a> - Create file share.<br>
  <a href="openfiles.html">OPENFILES</a> - List or disconnect open files, local or remote.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
  <a href="pushd.html">PUSHD</a> -  Map to a drive share.<br>
  <a href="rmtshare.html">RMTSHARE</a> - List or edit a file share or print share (on any computer)<br>
  <a href="rundll32.html">RUNDLL32</a> - Add/remove print <i>connections</i><br>
  <a href="share.html">SHARE</a> - List or edit a file share or print share.<br>
  <a href="wmic.html">WMIC NETUSE</a> - WMI access to drive mappings.<br>
  fsmgmt.msc - List or disconnect open files - (Win XP GUI)<br>
  Drmapsrv - Drive Share for use with Terminal Services (Win 2K Server <a href="../links/windows.html#kits">Resource 
  Kit</a>)<br>
Equivalent PowerShell command: <a href="../ps/new-psdrive.html">New-PSDrive</a>- Create a  mapped network drive.<br>
Equivalent bash command (Linux):  <a href="../bash/lpc.html">lpc</a> - line printer control program.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

