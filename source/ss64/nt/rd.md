---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RD</h1> 
<p>Delete folder(s)</p>
<pre>Syntax
      RD <i><a href="path.html#pathname">pathname</a></i>
      RD /S <i><a href="path.html#pathname">pathname</a></i>
      RD /S /Q <i><a href="path.html#pathname">pathname</a></i>
   
Key
   /S  : Delete all files and subfolders
         in addition to the folder itself.
         Use this to remove an entire folder tree.

   /Q  : Quiet - do not display Y/N confirmation</pre>
<p> Place any long pathnames in double quotes.</p>
<p>RD will only delete an empty folder.<br>
RD /Q will <i>silently</i> fail to delete any folders that are not empty.</p>
<p> RD /S will delete subfolders even if they contain files. <br>
<br>
RD does not support <a href="syntax-wildcards.html">wildcards</a> but you can remove multiple folders in one command:<br>
<br>
<span class="code">RD C:\docs\Jan C:\docs\Feb "C:\My Documents\Mar"</span></p>
<h2> Exit code / Errorlevel</h2>
<blockquote>
<p> In normal use RD will <a href="http://stackoverflow.com/questions/11137702/batch-exit-code-for-rd-is-0-on-error-as-well">fail</a> to return an <a href="errorlevel.html">ERRORLEVEL</a> to the shell, irrespective if the command succeeds or fails the ERRORLEVEL will be left unchanged.</p>
<p>It will however set an Exit Code</p>
<blockquote>
<p>Directory deleted successfully = 0<br>
Invalid option = 1 <br>
Directory not found = 2<br>
Access denied = 5<br>
Directory in use = 32<br>
Directory not empty = 145</p>
</blockquote>
<p> A workaround to detect  a non zero Exit Code from RD is to use <a href="syntax-conditional.html">conditional execution</a> to run a command if the RD fails, the second command can be anything, an Echo, Goto or CALL statement:</p>
<p class="code"> RD NonExistentFolder || Echo This failed!<br>
</p>
</blockquote>
<p> If you delete folders using PowerShell then a True/False return code (<span class="code">$?</span>) will be set correctly.</p>
<p>RMDIR is a synonym for RD</p>
<p>RD is an <a href="syntax-internal.html">internal</a> command.<br>
  <br>
  <i class="quote">“Dying is the most embarrassing thing that can happen to you, because someones got to take care of all your details” - Andy Warhol </i> <br>
  <br>
  <b>Related:</b></p>
<p><a href="md.html">MD</a> - Create folder(s)<br>
<a href="del.html">DEL</a> - Delete selected files from an entire folder tree<br>
<a href="http://ss64.org/viewtopic.php?pid=4640#p4640">Delete all empty folders</a> - script
<br>
Delrp - Delete a file/directory and NTFS reparse points.(<a href="../links/windows.html#kits">Win 
2K ResKit</a>) <br>
<a href="https://support.microsoft.com/kb/228930">INUSE</a> - updated file replacement utility (may not preserve file permissions)<br>Powershell: <a href="../ps/remove-item.html">Remove-Item</a> - Remove an item (rd/ri/rmdir) <br>
Equivalent bash command (Linux):<a href="../bash/rmdir.html">rmdir</a> - Remove folder(s) <a href="../bash/rm.html">rm -rf</a> - Delete directory recursively</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
