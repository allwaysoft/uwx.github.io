---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DISKUSE (<a href="../links/windows.html#kits">2003 Resource Kit</a>)</h1>
<p>Display disk usage.</p>
<pre>Syntax
      DISKUSE <i>path</i> <i>options</i>

Options
   /f:<i>file</i>   Store results in <i>file</i>
   /e:<i>file</i>   Store errors in <i>file</i>
   /u:<i>user</i>   Only search for <i>user</i>
   /s        Include subdirectories
   /t        Table format
   /w        Unicode output
   /q        Quiet
   /? |h     Help
   /r:file   Store restrictions in file
   /o        Show only users over the limit
   /v        verbose mode
   /d:a|c|w  Date to display   Access | Create | Write
   /n:<i>number</i> Display <i>number</i> largest files per user
   /x:<i>number</i> Display files of <i>number</i> bytes or larger</pre>
<p><b>Example</b><br>
</p>
<p>List the files in the current folder and subfolders in verbose mode <br>
<span class="code">C:\demo\&gt; DISKUSE /v /s</span><br>
<br>
<i class="quote">“Work is achieved by those employees who have not yet reached their level of incompetence” ~ Laurence J. Peter (The Peter Principle)</i> <br>
<br>
<b>Related</b><br>
<a href="dir.html"><br>
DIR</a> - Display a list of files and folders<br>
DirQuota - Create and manage quotas
(File Server Resource Manager)<br>
<a href="diruse.html">DIRUSE</a> - Display disk usage (2000 Resource Kit)<br>
You can also list files with <a href="xcopy.html">XCOPY</a> /L<br>
<a href="freedisk.html">FREEDISK</a> - Check free disk space.<br>
<a href="fsutil.html">FSUTIL</a> - File and Volume utilities<br>
Powershell: <span class="code">(<a href="../ps/get-childitem.html">Get-ChildItem</a> C:\docs\* -recurse) | measure-object -property length -sum </span><br>
Equivalent bash command (Linux):  <a href="../bash/quotacheck.html">quotacheck</a> - Scan a file system for disk usage</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

