---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Long filenames, NTFS and legal filename characters </h1>
<p> <b>Long file names</b> - If a filename contains spaces you must surround it 
  "with double quotes" Filenames that include quotes or parenthesis (') 
- these are legal filenames but they can cause problems.</p>
<p><b>Short file names</b> - The order in which you create files will affect short 
  8.3 names<br>
  e.g. <br>
  echo abc &gt; "a long file 1.txt" <br>
  echo abc &gt; "a long file 3.txt" <br>
  echo abc &gt; "a long file 2.txt"<br>
  DIR /x <br>
  :: will produce this:<br>
  ALONGF~1.TXT a long file 1.txt <br>
  ALONGF~3.TXT a long file 2.txt <br>
  ALONGF~2.TXT a long file 3.txt <br>
  <br>
  If these files are now copied to another folder the 8.3 filenames will change, 
  this is most likely to happen when upgrading server storage or restoring data 
  from a backup. </p>
<p>Similarly for folders <br>
  md "a long folder 1" <br>
  md "a long folder 3" <br>
  md "a long folder 2" <br>
  DIR /x <br>
  :: will produce this:<br>
  ALONGF~1 a long folder 1<br>
  ALONGF~3 a long folder 2 <br>
  ALONGF~2 a long folder 3<br>
  <br>
  Again copying these to somewhere else will change the 8.3 names to: <br>
  ALONGF~1 a long folder 1 <br>
  ALONGF~2 a long folder 2<br>
  ALONGF~3 a long folder 3 <br>
</p>
<p> See the <a href="syntax-wildcards.html">Wildcards</a> page for more long/short filename issues. </p>
<h2> Enable or Disable 8.3 filenames in NTFS</h2>
<blockquote>
<p>If 8.3 filenames are disabled, ancient 16 bit software (like WordPerfect 3) will still be able to read/write short filenames (C:\WORK\JAN.WPD), but won’t see a short equivalent for long filenames (C:\My Documents\new stuff.wpd).<br>
An 8.3 filename can also be useful when dealing with corruption such as an 'undeletable' file.
</p>
<p>Disable the creation of 8.3 filenames<br>
  <span class="code">[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem]<br>
NtfsDisable8dot3NameCreation=1</span></p>
<p>Enable the creation of 8.3 filenames (default) <br>
  <span class="code">[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem]<br>
NtfsDisable8dot3NameCreation=0</span></p>
</blockquote>
<h2>Batch files  .BAT or .CMD ?</h2>
<blockquote>
<p>Batch files can be saved with the extension .BAT or .CMD <br>
The .BAT extension will run under Windows 95/MSDOS but the .CMD extension will only run under NT, XP or later.<br>
One key difference between .CMD and .BAT scripts (running under  CMD.EXE) is that with extensions enabled, commands like PATH/APPEND/PROMPT/SET/ASSOC will reset ERRORLEVEL to 0 if they succeed. In the old style .BAT file, the ERRORLEVEL 
will not be changed unless there is a new error (<a href="https://groups.google.com/forum/#!msg/microsoft.public.win2000.cmdprompt.admin/XHeUq8oe2wk/LIEViGNmkK0J">source</a>).</p>
</blockquote>
<h2>NTFS file system</h2>
<blockquote>
<p>Legal characters in NTFS include the following:</p>
<p class="code"> ! [ ] . ; = ( ) </p>
<p> Illegal Characters: The following characters are not permitted in Windows file or directory names: </p>
<p class="code style2"><b>/ \ : * ? " &lt; &gt; | </b></p>
<p>The control characters (<a href="../ascii.html"><span class="code">0x00-0x1F, 0x7F</span></a>) are also invalid in Windows' FAT and NTFS.<br>
Windows Explorer will not create files with a period (.) as the first or only character in the filename, although NTFS (and many command-line tools) do support this. </p>
<p>A long file name (LFN) can be up to 255 characters long. <br>
NTFS supports paths up to 32768 characters in length, but only when using the Unicode APIs. <br>
  <br>
  When using very long path names, prefix the path with the characters \\?\ and use the Unicode versions of the C Runtime functions.</p>
</blockquote>
<h2>8.3 format filenames</h2>
<blockquote>
<p>  These 
can have between 1 and 8 characters in the file name. Short file names have the 8.3 format and are compatible with MS-DOS and other legacy operating systems. <br>
The name must start with a letter or a number and can contain any characters except the following:</p>
<p><span class="code"><b>&nbsp;/ \ : * ? " [ ] | = ,  . ; (space) </b></span></p>
<p>An 8.3 file name typically has a file name extension between one and three characters long with the same character restrictions. A period separates the file name from the file name extension.</p>
<p>It should be noted that  some characters are invalid in 8.3 format filenames but are valid in NTFS filenames and are also valid <a href="syntax-esc.html">Delimiters</a> Typically the Windows GUI will silently rename such files where necessary. </p>
</blockquote>
<p>You can use long file names in both NTFS and FAT volumes. </p>
<p>Special file names reserved by the system (cannot be used for files or folders):</p>
<p>CON, AUX, COM1, COM2, COM3, COM4, LPT1, LPT2, LPT3, PRN, NUL , conIN$ , conOUT$
</p><p class="quote"><i>“Tongues, like governments, have a natural tendency to degeneration; we have long preserved our constitution, let us make some struggles for our language” - Samuel Johnson: Preface to the Dictionary </i>
</p><p><b>Related:</b>
</p><p>  <a href="syntax-esc.html">Escape Characters, Delimiters and Quotes</a>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

