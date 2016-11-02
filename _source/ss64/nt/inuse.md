---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>INUSE.exe (Windows 2000 <a href="../links/windows.html">Resource Kit</a> – <a href="http://download.microsoft.com/download/win2000platform/inuse/1.0/NT5/EN-US/inuse.exe">download</a>)</h1> 
<p>Replace files that are currently in use by the OS, <u>requires a reboot</u>.
</p><pre>Syntax
      INUSE <i>source destination</i> [/y]

Key

  <i>source</i>         The new/replacement file.

  <i>destination</i>    The existing file to be replaced.

  /y             Suppress the confirmation prompt.

  /?             help</pre>
<p>  Source and destination must include the complete physical or UNC pathname.</p>
<p>The file will be replaced when the machine is rebooted.<br>
The 'locked file can be either the source or destination file.</p>
<p>Example</p>
<p class="code">inuse.exe \\server64\install\shiny.dll c:\program files\ss64\shiny.dll /y</p>
<h2>Registry</h2>
<p>Replacing in-use files, can also be done manually with the REGEDIT registry editor:<br>
<br>
Open <span class="code">HKLM\SYSTEM\CurrentControlSet\Control\Session Manager</span><br>
<br>
Double click on <br>
PendingFileRenameOperations <br>
(if it does not exist - create of type REG_MULTI_SZ  ) <br>
<br>
On the first line is the destination file prefixed with<span class="code"> \??\ </span><br>
e.g. <br>
<span class="code">\??\d:\backup\trouble.sys </span><br>
<br>
On the second line is the source file to be moved prefixed with <span class="code">!\??\</span><br>
e.g. <br>
<span class="code">!\??\c:\windows\system32\drivers\trouble.sys </span><br>
<br>
So the complete Multi-String Data would appear like:<br>
<br>
<span class="code">\??\d:\backup\trouble.sys <br>
!\??\c:\windows\system32\drivers\trouble.sys</span><br>
<br>
Reboot the machine and the file will be moved and the <span class="code">PendingFileRenameOperations</span> registry key will be deleted.</p>
<p><i class="quote">“Any intelligent fool can make things bigger and more complex... It takes a touch of genius - and a lot of courage to move in the opposite direction” - Albert Einstein </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="https://support.microsoft.com/kb/228930">Q228930</a> - How to replace currently locked files with Inuse.exe<br>
Powershell: <a href="../ps/move-item.html">Move-Item</a> - Move an item from one location to another (move/mv/mi) <br>
Equivalent bash command (Linux): <a href="../bash/mv.html">mv</a> - Move or rename files or directories</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="inuse.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

