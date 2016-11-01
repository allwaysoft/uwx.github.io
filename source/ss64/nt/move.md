---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MOVE</h1> 
<p>Move a file from one folder to another
</p><pre>Syntax
      MOVE [<i>options</i>] [<i>Source</i>] [<i>Target</i>]

Key
   <i>source</i> : The path and filename of the file(s) to move.

   <i>target</i> : The path and filename to move file(s) to.

   <i>options</i>:
            /Y    Suppress confirmation prompt, when overwriting files.

            /-Y   Enable confirmation prompt, when overwriting files.</pre>
<p>Both Source and Target can be either a folder or a single file.</p>
<p>The source can include <a href="syntax-wildcards.html">wildcards</a> (but not the destination). </p>
<p>Under Windows 2000 and above, the default action is to prompt on overwrite unless the command is being executed from within a batch script. <br>
To force the overwriting of destination files use the COPYCMD environment variable:<br>
<span class="code">SET COPYCMD=/Y</span></p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the File(s) were successfully  moved/renamed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
File not found, could not be moved/renamed or bad parameters = 1</p>
</blockquote>
<p><b>Examples:</b><br>
<br>
In the current folder<br>
<span class="code">MOVE oldfile.wp newfile.doc</span><br>
<br>
Full path specified<br>
<span class="code">MOVE g:\department\oldfile.wp "c:\Files to Convert\newfile.doc"</span><br>
<br>
Specify the drive and filename (assumes the current folder on both drives is correct)<br>
<span class="code">MOVE a:oldfile.wp c:newfile.doc</span><br>
<br>
Specify source only (will copy the file to current folder, keeping the same filename)<br>
<span class="code">MOVE g:\department\oldfile.wp</span> <br>
<br>
Quiet move (no feedback on screen)<br>
<span class="code">MOVE oldfile.wp newfile.doc &gt;nul</span></p>
<p>Move a file, but do not overwrite if the destination file already exists, this technique only works for a single file, no wildcards<br>
(<span class="code"> /-y</span> is required):</p>
<p class="code">Echo n|MOVE /-y c:\file1.txt c:\dir\file1.txt</p>
<p>MOVE is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote">“Any intelligent fool can make things bigger and more complex... It takes a touch of genius - and a lot of courage to move in the opposite direction” - Albert Einstein </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="copy.html">COPY</a> - Copy one or more files to another location<br>
<a href="inuse.html">INUSE</a> - Replace files that are in use by the OS<br>
<a href="robocopy.html">ROBOCOPY</a> /MOVE - Robust File and Folder Copy <br>
<a href="xcopy.html">XCOPY</a> - Copy files and folders<br>
<a href="ren.html">REN</a> - Rename a file or files. <br>
Cachemov - Offline Files Cache Mover. (<a href="../links/windows.html#kits">Win 2K ResKit</a>) <br>
Powershell: <a href="../ps/move-item.html">Move-Item</a> - Move an item from one location to another (move/mv/mi) <br>
Equivalent bash command (Linux): <a href="../bash/mv.html">mv</a> - Move or rename files or directories</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="move.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

