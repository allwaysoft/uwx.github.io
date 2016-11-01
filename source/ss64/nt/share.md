---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Share.vbs (<a href="../links/windows.html#kits">Resource Kit</a>) </h1>
<p>List or edit a file share or print share (on any computer)</p>
<p>Although missing from recent Resource Kits, this VBS script does still work under recent versions of Windows. The preferred method for creating shares is the <a href="rmtshare.html">RMTShare</a> command, which can also grant permissions.</p>
<pre>Syntax:
<i> List Shares
</i>        Share.vbs <b>/L</b> [/S &lt;<i>server</i>&gt;] [/U &lt;<i>username</i>&gt;] [/W &lt;<i>password</i>&gt;] [/O &lt;<i>outputfile</i>&gt;]<br>                <i>
 Create a Share</i><br>        Share.vbs <b>/C </b>/N &lt;<i>name</i>&gt; /P &lt;<i>path</i>&gt; [/T &lt;<i>type</i>&gt;] [/V &lt;description&gt;]<br>                         [/S &lt;<i>server</i>&gt;] [/U &lt;<i>username</i>&gt;] [/W &lt;<i>password</i>&gt;] [/O &lt;<i>outputfile</i>&gt;]
<i> Delete a Share</i><br>        Share.vbs <b>/D</b> /N &lt;<i>name</i>&gt;<br>                         [/S &lt;<i>server</i>&gt;] [/U &lt;<i>username</i>&gt;] [/W &lt;<i>password</i>&gt;] [/O &lt;<i>outputfile</i>&gt;]

Key:<br>
  /L             List<br>  /C             Create<br>  /D             Delete
  /N <i>name        </i>Name of the share to be created or deleted.<br>  /P <i>path</i>        Path of the share to be created.<br>  /v <i>description</i> A description for the share.<br>  /T <i>type</i>        Type of the share to be created. (Disk, Printer, IPC or Special)<br>  /S <i>server</i>      A machine name.<br>  /U <i>username </i>   The current user's name.<br>  /W <i>password </i>   Password of the current user.<br>  /O <i>outputfile </i> Output file name.</pre>
<p><b>Examples:</b><br>
  <br>
List the shares on the machine \\Frodo</p>
<p class="code"> cscript Share.vbs /L /s Frodo</p>
<p>Create a file share called "scratch" on the local machine:</p>
<p><span class="code">cscript Share.vbs /c /n scratch /p "c:\my shared files" /t Disk /v "project files"</span><br>
  <br>
  Delete the share named "scratch" on the machine \\Frodo</p>
<p><span class="code">cscript Share.vbs /d /n scratch /s Frodo</span><br>
  <span class="quote"><br>
  <i>"The inherent vice of capitalism is the unequal sharing of blessings,
  the inherent vice of Socialism is the equal sharing of
  miseries" ~ Winston Churchill</i></span><br>
<b> <br>
Related:</b><br>
  <br>
  <a href="cacls.html">CACLS</a> - Display or modify Access Control Lists
        (ACLs) for files and folders<br>
        <a href="rmtshare.html">RMTShare</a> - The preferred method for creating a file system share (it can also grant permissions)<br>
        <a href="rundll32.html">RUNDLL32</a> - Run a DLL command (add/remove print connections)<br>
Powershell: <a href="../ps/get-wmiobject.html">Get-WmiObject</a> win32_share<br>
Equivalent bash command (Linux): <a href="../bash/export.html">mount</a> - Mount a file system</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="share.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

