---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>REPLACE</h1> 
<p>Replace  one file with another (both having the same filename).</p>
<pre>Syntax
      REPLACE [<i>Drive</i>:][<i>path</i>]<i>SourceFiles </i>[<i>Drive</i>:][<i>path</i>2] [/A] [/P] [/R] [/W]<br>
      REPLACE [<i>Drive</i>:][<i>path</i>]<i>SourceFiles </i>[<i>Drive</i>:][<i>path</i>2] [/S] [/P] [/R] [/W] [/U]<br>
Key
   <i>path/files</i> : The source file(s), <a href="syntax-wildcards.html">wildcards</a> accepted.<br>
   <i>path2</i>      : The destination folder. If no destination is specified REPLACE will
                use the <a href="cd.html">current</a> drive and directory as the destination.

   /A   : Add any missing files.<br>
   /P   : Prompt for confirmation (each file)<br>
   /R   : Replace even Read-only files<br>
   /S   : Include all subfolders of the destination.<br>
   /W   : Wait/pause (originally to allow inserting a floppy disk.)<br>
   /U   : Update only files that are older than the source.</pre>
<p>When replacing in all subdirectories (/S ) the files in the source are matched against every subfolder, this is not a mirror, the files in each folder are matched separately.  <br>
The 
(/S ) subdirectories option cannot be combined with Add files (/A) or Restrict to Updating older (/U).</p>
<p>REPLACE will list all the files that are replaced. By default, only files that <i>already</i> exist in the destination will be replaced.</p>
<p>You cannot use REPLACE to update any file which has a hidden or system attribute set, see the <a href="attrib.html">ATTRIB</a> command for more.<br>
</p>
<p>REPLACE will set <span class="code"><a href="errorlevel.html">%ERRORLEVEL%</a></span> as follows:</p>
<blockquote>
<p> <span class="code">0 </span>0 or more files were replaced. <br>
<span class="code">3 </span>Source or destination not found.<br>
<span class="code">5 </span>Access denied. <br>
<span class="code">11 </span>Invalid switch.</p>
</blockquote>
<p> The path to the destination folder must NOT include a trailing backslash.
</p>
<p><b>Examples</b></p>
<p>Update the files in C:\delivery\ with the .exe files in C:\source files\</p>
<p class="code">C:\&gt; replace "C:\source files\*.exe" C:\delivery</p>
<p>Update the report.doc file in all the folders beneath C:\reports :</p><p class="code">C:\&gt; replace "C:\demo\report.doc" C:\reports /s<br>
Replacing C:\reports\Jan\report.doc<br>
Replacing C:\reports\Feb\report.doc<br>
Replacing C:\reports\Mar\report.doc</p>
<p><i class="quote">"That's the secret to life... replace one worry with another" ~ Charles M. Schulz</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="robocopy.html">ROBOCOPY</a> - Robust File and Folder Copy<br>
<a href="move.html">MOVE</a> - Move files from one folder to another folder 
on the same drive<br>
<a href="del.html">DEL</a> - Delete one or more files<br>
<a href="copy.html">COPY</a> - Copy one or more files to another location<br>
Equivalent bash command (Linux): <a href="../bash/install.html">install</a> - Copy files and set attributes</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="replace.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

