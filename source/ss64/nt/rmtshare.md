---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RMTSHARE.exe (<a href="../links/windows.html#kits">NT 4 Resource kit</a> - <a href="ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/i386/">download</a>)</h1> 
<p>Manage File and Printer shares, local or on a remote server.<br>
  Although missing from recent Resource kits, the old version appears to work fine 
under Windows XP/2003.</p>
<pre>Syntax
  Display all shares
      RMTSHARE \\<i>server</i>

  Display details of a specific share
      RMTSHARE \\server\sharename

  Share a Folder 
      RMTSHARE \\<i>server\sharename</i>=drive:path [<i>options</i>]

  Share a Printer 
      RMTSHARE \\<i>server\sharename</i>=<i>printername</i> /PRINTER [<i>options</i>]

  Edit an existing SHARE
      RMTSHARE \\<i>server\sharename</i> [<i>options</i>]

  Delete a SHARE
      RMTSHARE \\<i>server\sharename</i> /DELETE

Options
      /USERS:<i>number</i> 
      /UNLIMITED
      /REMARK:"<i>text</i>"
      /GRANT <i>user</i>:<i>perm</i>
      /REMOVE <i>user</i>
</pre>
<p>Notes: 
Either specify <span class="code">/Users</span> to restrict the number of connections that can be made
OR specify <span class="code">/UNLIMITED</span><br>
You can include several <span class="code">/GRANT</span>s in a single command line.<br>
Enclose paths that include spaces like this<br>
<span class="code">\\server\"long share name"="c:\long file name"</span></p>
<p>An alternative way to list remote shares with PowerShell:</p>
<pre># List the file shares on the remote server: <i>SERVER64</i>.

$shares = <a href="../ps/get-wmiobject.html">Get-WmiObject</a> -class Win32_Share -computername <b><i>SERVER64 </i></b>-filter "Type=0"
$shares | foreach {
    $path=($_.path)
    $Description=($_.Description)
    $name=($_.name)
    $Caption=($_.Caption)

    "Share Name   : $name
     Source Folder: $path 
     Description  : $Description
     Caption : $Caption"
    }</pre>
<p> <i class="quote">“How to be green? consume less, share more, enjoy life” 
  ~ Penny Kemp </i><br>
  <br>
<b> Related:</b></p>
<p><a href="cacls.html">CACLS</a> - Apply File permissions <br>
  <a href="net.html">NET USE</a> - Connect to a file share <br>
  REMOTE - Run a command on a remote computer (Resource Kit)<br>
  <a href="rundll32.html">RUNDLL32</a> - Run a DLL command (add/remove print connections)  <br>
  <a href="share.html">SHARE</a> - List or edit a file share or print share (on any computer)<br>
Powershell: <a href="../ps/get-wmiobject.html">Get-WmiObject</a> win32_share<br>

Equivalent bash command (Linux): <a href="../bash/mount.html">mount</a> - Mount a file system</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rmtshare.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

