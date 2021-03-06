---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>XCOPY </h1> 
<p>Copy files and/or directory trees to another folder. XCOPY is 
  similar to the COPY command except that it has additional switches to specify 
both the source and destination in detail.</p>
<p>Xcopy has been <a href="http://en.wikipedia.org/wiki/Deprecation">deprecated</a> under Vista and Windows 2008, this means that while still available now it might disappear in a future OS release. To ensure your scripts are 'future proof' use other tools (such as <a href="robocopy.html">Robocopy</a>) instead of xcopy. <br>
  <br>
  XCOPY is particularly useful when copying files from CDROM to a hard drive, 
as it will automatically remove the read-only attribute.</p>
<pre>Syntax
      XCOPY <i>source</i> [<i>destination</i>] [<i>options</i>]<br>
Key
   source      : Pathname for the file(s) to be copied (accepts <a href="syntax-wildcards.html">wildcards</a>).

   destination : Pathname for the new file(s).
   
   [options] can be any combination of the following:
      
<i>Source Options</i>
      
   /A    Copy files with the archive attribute set (default=Y)<br>
   /M    Copy files with the archive attribute set and
         turn off the archive attribute, use this option
         when making regular Backups (default=Y)
                                   
   /H    Copy hidden and system files and folders (default=N)<br>
   /D:mm-dd-yyyy
         Copy files changed on or after the specified date.
         If no date is given, copy only files whose
         source date/time is newer than the destination time.<br>
   /U    Copy only files that already exist in destination.
   
   /S    Copy folders and subfolders<br>
   /E    Copy folders and subfolders, including Empty folders.
         can be used to modify /T.

   /EXCLUDE:<i>file1</i>[+<i>file2</i>][+<i>file3</i>]...

         The files can each contain one or more full or partial pathnames to be excluded.
         When any of these match any part of the absolute path of a SOURCE file, then 
         that file will be excluded.
         For example, specifying a string like \obj\ or .obj will exclude
         all files underneath the directory obj or all files with the
         .obj extension respectively.
               
<i>Copy Options</i>
               
   /W    Prompt you to press a key before starting to copy.
   /P    Prompt before creating each file.

   /Y    Suppress prompt to confirm overwriting a file.
         can be preset in the COPYCMD env variable.
   /-Y   Prompt to confirm overwriting a file.
   
   /V    <a href="verify.html">Verify</a> that the new files are readable.
   /C    Continue copying even if an error occurs.
   
   /I    If in doubt always assume the destination is a folder
         e.g. when the destination does not exist.

   /B    Copy the Symbolic link itself, not the target of the file.

   /G    Allow the copying of encrypted files to a destination that does not support encryption.

   /J    Copy using unbuffered I/O. Recommended for very large files.
  
   /Q    Do not display file names while copying.
   /F    Display full source and destination file names while copying.
   /L    List only - Display files that would be copied.

   /Z    Copy files in restartable mode. If the copy is interrupted part way through,
         it will restart if possible. (use on slow networks)<br><i>
Destination Options</i><br>
   /R    Overwrite read-only files.<br>
   /T    Create folder structure, but do not copy files. 
         Do not include empty folders or subfolders. <br>          /T /E will include empty folders and subfolders.<br>
   /K    Copy attributes. XCOPY will otherwise reset read-only attributes.<br><br>   /N    If at all possible, use only a short filename (8.3) when creating
         a destination file. This can be necessary when copying between disks
         that are formatted differently e.g NTFS and VFAT, or when archiving 
         data to an ISO9660 CDROM.

   /O    Copy file Ownership and ACL information.

   /X    Copy file audit settings (implies /O).</pre>
<p> XCOPY will accept UNC pathnames<b>.</b></p>
<p>To always overwrite destination files use the COPYCMD environment variable: <span class="code">SET COPYCMD=/Y</span><br>
<br>
When comparing Dates/Times the granularity (the finest increment of the timestamp) is 2 seconds for a FAT volume and 0.1 microsecond for an NTFS volume.</p>
<h2>Copy a single file</h2>
<blockquote>
<p>In most cases copying a single file is best done with the <a href="copy.html">COPY</a> command. When copying a single file with XCOPY, there is no option to indicate if the destination is a filename or a directory (with the filename defaulting to that of the source file).<br>
In such cases XCOPY will prompt with a (locale specific) message like:<br>
<span class="code">C:\&gt; xcopy foo.txt bar.txt<br>
Does foo.txt specify a file name<br>
or directory name on the target<br>
(F = file, D = directory)?</span></p>
<p>Adding a wildcard (*) to the end of the destination will suppress this prompt and default to copying as a file:<br>
<span class="code">C:\&gt; xcopy foo.txt bar.txt*<br>
C:foo.txt <br>
1 File(s) copied</span><br>
This requires the source and target file extensions to be the same length, typically 3 characters.</p>
</blockquote>
<h2>  Insufficient Memory error</h2>
<blockquote>
<p> Attempting to XCOPY a source file that has a pathname longer than the Windows maximum path length (254 characters) will result in a rather unhelpful 'Insufficient Memory' error, the operation will then halt. This bug which has been around for over 10 years makes XCOPY a poor choice for any kind of backup script, use <a href="robocopy.html">ROBOCOPY</a> instead.</p>
</blockquote>
<p>
<b>Examples:</b><br>
<br>
Copy a file:<br>
<br>
<span class="code">echo F| XCOPY C:\utils\MyFile.txt D:\Backup\CopyFile.txt</span><br>
<br>
Copy a folder:<br>
<br>
<span class="code">XCOPY C:\utils D:\Backup\utils /i</span><br>
<br>
Copy a folder including all subfolders.<br>
<br>
<span class="code">XCOPY C:\utils\* D:\Backup\utils /s /i</span><br>
</p>
<p><i class="quote">“It is easier to copy than to think, hence fashion” ~  Wallace Stevens</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="copy.html">COPY</a> - Copy one or more files to another location<br>
<a href="del.html">DEL</a> - Delete files <br>
<a href="move.html">MOVE</a> - Move a file from one folder to another<br>
<a href="robocopy.html">ROBOCOPY</a> - Robust File and Folder Copy<br>
 PowerShell: <a href="../ps/copy-item.html">Copy-Item</a> - Copy an item from one location to another<br>
Equivalent bash command (Linux): <a href="../bash/cp.html">cp</a> - Copy one or more files to another location</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

