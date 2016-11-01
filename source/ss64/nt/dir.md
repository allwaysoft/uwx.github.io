---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DIR</h1> 
<p>Display a list of files and subfolders</p>
<pre>Syntax
      DIR [<i>pathname(s)</i>] [<i>display_format</i>] [<i>file_attributes</i>] [<i>sorted</i>] [<i>time</i>] [<i>options</i>]</pre>
<pre>Key
   [<i>pathname</i>] The drive, folder, and/or files to display, <br>              this can include wildcards:<br>                 *   Match any characters<br>                 ?   Match any ONE character<br><br>   [<i>display_format</i>]
   /P   Pause after each screen of data.
   /W   Wide List format, sorted horizontally.
   /D   Wide List format, sorted by vertical column.
<br>   [<i>file_<b>a</b>ttributes</i>] <b>/A</b>[:]<i>attribute</i><b> </b><br><br>   /A:D  Folder         /A:-D  NOT Folder
   /A:R  Read-only      /A:-R  NOT Read-only 
   /A:H  Hidden         /A:-H  NOT Hidden
   /A:A  Archive        /A:-A  NOT Archive
   /A:S  System file    /A:-S  NOT System file
   /A:I  Not content indexed Files  /A:-I  NOT content indexed
   /A:L  Reparse Point  /A:-L  NOT Reparse Point (symbolic link)

   /A:X  No scrub file  /A:-X  Scrub file    (Windows 8+)
   /A:V  Integrity      /A:-V  NOT Integrity (Windows 8+)

   /A    Show all files<br>   Several attributes can be combined e.g. /A:HD-R<br><br>   [s<b>o</b>rted]   Sorted by <b>/O</b>[:]<i>sortorder</i><br><br>   /O:N   Name                  /O:-N   Name<br>   /O:S   file Size             /O:-S   file Size
   /O:E   file Extension        /O:-E   file Extension<br>   /O:D   Date &amp; time           /O:-D   Date &amp; time
   /O:G   Group folders first   /O:-G   Group folders last
   several attributes can be combined e.g. /O:GEN<br><br>   [<i><b>t</b>ime</i>] <b>/T:</b>  the time field to display &amp; use for sorting<br>
   /T:C   Creation
   /T:A   Last Access
   /T:W   Last Written (default)<br><br>   [<i>options</i>]
   /S     include all subfolders.
   /R     Display alternate data streams. (Vista and above)
   /B     Bare format (no heading, file sizes or summary).
   /L     use Lowercase.
   /Q     Display the owner of the file.

   /N     long list format where filenames are on the far right.
   /X     As for /N but with the short filenames included.<br>
   /C     Include thousand separator in file sizes. <br>   /-C    Don’t include thousand separator in file sizes.

   /4     Display four-digit years</pre>
<p> 
  The switches above can be preset by adding them to an environment variable called 
  DIRCMD. <br>
  For example: <span class="code">SET DIRCMD=/O:N /S</span><br>
  <br>
  Override any preset DIRCMD switches by prefixing the switch with - <br>
  For example: 
<span class="code">DIR *.* /-S</span></p>
<p>Upper and Lower Case filenames: <br>
  Filenames longer than 8 characters
  - will always display the filename with mixed case as entered.<br>
  Filenames shorter than 8 characters
  - can display the filename in upper or lower case - this can vary from one 
  client to another (registry setting)<br>
  <br>
  To obtain a bare DIR format (no heading or footer info) but retain all the details, 
pipe the output of DIR into FIND, this assumes that your date separator is<span class="code"> /</span></p>
<pre>DIR c:\temp\*.* | FIND "/"</pre>
<p> Normally <span class="code">DIR /b</span> will return just the filename, however when displaying 
  subfolders with <span class="code">DIR /b /s</span> the command will return a <a href="path.html">full 
pathname</a>.</p>
<p>All file sizes are shown in <a href="../convert.html">bytes</a>.</p>
<p><b>Examples</b></p>
<p>List the contents of <span class="code">c:\demo</span> including ALL files:</p>
<p class="code">dir /a c:\demo\</p>
<p>List the contents of <span class="code">c:\demo</span> displaying only the filenames:</p>
<p class="code">dir /b c:\demo\</p>
<p>List all the Reparse Points (symbolic links) in the current users profile:</p>
<p class="code">dir %USERPROFILE% /a:i</p>
<p>List the contents of <span class="code">c:\demo</span> with the full path of each file (<a href="http://ss64.org/viewtopic.php?id=910">source</a>)</p>
<p class="code">for %%<b>A</b> in ("c:\demo\*") do echo %%~f<b>A</b></p>
<p>List the contents of <span class="code">c:\demo</span>, without the header/footer details:</p>
<p class="code">FOR /f "tokens=*" %%<b>G</b> IN ('dir c:\demo\*.* ^| find "/"') DO echo %%<b>G</b></p>
<p>On Windows Vista and later, a list of alternate data streams can be obtained using <span class="code">DIR /R</span>, on earlier operating systems, the SysInternals utility <a href="http://technet.microsoft.com/en-us/sysinternals/bb897440">streams</a> can be used instead.</p>
<p>DIR is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote">“There it was, hidden in alphabetical order” ~ Rita Holt</i><br>
<br>
<b>Related</b><br>
<br>
<a href="where.html">WHERE</a> - Locate and display files in a directory tree.<br>
<a href="xcopy.html">XCOPY</a> /L - List files without copying.<br>
<a href="robocopy.html">ROBOCOPY /L</a> - List files with specific properties <br>
<a href="diruse.html">DIRUSE</a> - show size of multiple subfolders. (Resource Kit)<br>
Freedisk.exe - check free disk space. (<a href="../links/windows.html#kits">Win 2K ResKit</a>)<br>
Powershell: <a href="../ps/get-childitem.html">Get-ChildItem</a> - Get child items (contents of a folder or registry key) dir / ls / gci<br>
You can also get File Sizes and Date/Time from <a href="syntax-args.html">Batch Parameters</a><br>
Use DIR to display <a href="DrvReady.txt">drive status</a> - disk missing / ready / empty<br>
Equivalent bash command (Linux):<a href="../bash/export.html"> 
</a><a href="../bash/ls.html">ls</a> - List information about file(s)<br>
Equivalent Powershell: <a href="../ps/get-childitem.html">Get-ChildItem</a></p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

