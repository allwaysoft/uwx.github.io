---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DEL</h1> 
<p>Delete one or more files. </p>
<pre>Syntax
      DEL [<i>options</i>] [/A:<i>file_attributes</i>] <i>files_to_delete</i>

Key
   <i>files_to_delete</i> : A filename or a list of files, may include wildcards.

   options:
      /P  Give a Yes/No Prompt before deleting. 
      /F  Ignore read-only setting and delete anyway (FORCE) 
      /S  Delete from all Subfolders (DELTREE)
      /Q  Quiet mode, do not give a Yes/No Prompt before deleting.

      /A  Select files to delete based on <i>file_attributes</i>
            file_attributes:
              R  Read-only    -R  NOT Read-only
              A  Archive      -A  NOT Archive
              S  System       -S  NOT System
              H  Hidden       -H  NOT Hidden
              I  Not content indexed  -I  content indexed files
              L  Reparse points       -L  NOT Reparse points

              X  No scrub file attribute  -X  Scrub file attribute   (Windows 8+)
              V  Integrity attribute      -V  NO Integrity attribute (Windows 8+)

   <a href="syntax-wildcards.html">Wildcards</a>: These can be combined with part of a filename

      *  Match any characters
      ?  Match any ONE character</pre>
<p>If a folder name is given instead of a file, all files in the folder will be deleted, but the folder itself will not be removed.</p>
<p>Errorlevels: DEL will return an <a href="errorlevel.html">Errorlevel</a> of 0, irrespective if the delete succeeds or fails for any reason. <br>
(If you delete files using PowerShell then a True/False return code (<span class="code">$?</span>) will be set correctly.)</p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the files were successfully deleted <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
Bad or no parameters given = 1</p>
</blockquote>
<p><b>Examples:</b><br>
<br>
Delete "Hello  World.txt"</p>
<p><span class="code">DEL "Hello  World.txt"</span></p>
<p>Delete 3 named files:</p>
<p><span class="code">DEL file1.txt file2.txt "C:\demo\file3.txt"</span></p>
<p> Delete all files that start with the letter A</p>
<p><span class="code">DEL A*</span><br>
<br>
Delete all files that end with the letter A</p>
<p><span class="code">DEL *A.*</span></p>
<p><span class="code">  </span>Delete all files with a .doc extension:</p>
<p><span class="code">DEL *.doc</span><br>
<br>
  Delete all read only files:</p>
<p><span class="code">DEL /a:R *</span><br>
  <br>
  Delete all files including any that are read only:</p>
<p><span class="code">DEL /F *</span><br>
  <br>
  <b>Permanent deletion<br>
</b>Deleting a file will not prevent third party utilities from un-deleting it again. 
  Secure file deletion utilities are available, however for casual use, you can turn any file into a zero-byte file to destroy the file allocation 
  chain like this:<br>
  <span class="code"><br>
  TYPE nul &gt; C:\examples\MyFile.txt<br>
DEL C:\examples\MyFile.txt</span></p>
<p><b>Undeletable Files</b></p>
<p>Files are sometimes created with the very long filenames or reserved names: CON, AUX, COM1, COM2, COM3, COM4, LPT1, LPT2, LPT3, PRN, NUL <br> To delete these use the syntax: <span class="code">DEL \\.\C:\somedir\LPT1</span><br>
  Alternatively <a href="subst.html">SUBST</a> a drive letter to the folder containing the file.</p>
<p>If a file (or folder) still appears to be 'undeletable' this is often 
  caused by the indexing <a href="syntax-services.html">service</a>. Stopping the service will often enable the file to be deleted.</p>
<p><b>Delete Locked files</b> (Typically IE temp files or the Offline cache)</p>
<blockquote> 
  <p>Close all applications<br>
    Open a command prompt<br>
    Click Start, and then Shut Down<br>
    Simultaneously press CTRL+SHIFT+ALT. <br>
    While you keep these keys pressed, click Cancel in the Shut Down Windows dialog 
    box. <br>
    In the command prompt window, navigate to the cache location, and delete all 
    files from the folder (DEL /s) <br>
    At the command prompt, type explorer, and then press ENTER. </p>
</blockquote>
<p><b>DELTREE<a id="deltree"></a></b><br>
<br>
Older versions of Windows had the DELTREE command that deletes all files and sub folders. The script below, DelTree.cmd can replicate this functionality:</p>
<pre>:: DelTree.cmd<br>:: Remove all files and subfolders but NOT the root folder
:: From tip 617 at JsiFAQ.com
@echo off
if "%1"=="" goto:eof
pushd %1
del /q *.* 
for /f "Tokens=*" %%G in ('dir /B') do rd /s /q "%%G"
popd </pre>
<p>Normally DEL will display a list of the files deleted, if <a href="cmd.html">Command Extensions</a>  are disabled; it will instead display a list of any files it cannot find.</p>
<p>DEL is an <a href="syntax-internal.html">internal</a> command. ERASE is a synonym for DEL</p>
<p class="quote"><i>“It devoured my paper, it was a really good paper” - <a href="http://en.wikipedia.org/wiki/Ellen_Feiss">Ellen Feiss</a></i></p>
<p><b>Related:</b><br>
<a href="delprof.html"><br>
DELPROF</a> Delete NT user profiles<br>
Delrp - Delete a file/directory and NTFS reparse points.(<a href="../links/windows.html#kits">Win 2K ResKit</a>) <br>
<a href="rd.html">RD</a> - Delete folders or entire folder trees ()<br>
<a href="cleanmgr.html">CleanMgr</a> - Automated cleanup of Temp files, Internet files, downloaded files, recycle bin<br>
<a href="forfiles.html">FORFILES</a> - Delete files older than X days<br>
<a href="http://support.microsoft.com/?id=228930">INUSE</a> - updated file replacement utility (may not preserve file permissions)<br>
<a href="https://support.microsoft.com/kb/315226/">Q315226</a> - Remove Files with Reserved Names<br>
<a href="http://support.microsoft.com/?id=320081">Q320081</a> - You cannot delete a file or folder<br>
<a href="http://support.microsoft.com/?id=159199">Q159199</a> - A file cannot be deleted (NTFS)<br>
PowerShell: <a href="../ps/remove-item.html">Remove-Item</a> - Delete the specified items.<br>
Equivalent bash command (Linux): <a href="../bash/rmdir.html">rmdir</a> / <a href="../bash/rm.html">rm</a> - Remove folders/ files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="del.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

