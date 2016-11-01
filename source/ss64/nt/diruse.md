---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DIRUSE (<a href="../links/windows.html#kits">2K Resource Kit / XP Support Tools</a>)</h1>
<p>Display disk usage.</p>
<pre>Syntax
      DIRUSE [<i>options</i>] <i>Folders</i>...

Options
   /M  Display in Mb
   /K  Display in Kb
   /B  Display in bytes (default)
   /,  Use thousand separator when displaying sizes. 
   /Q:#  Quota limit, mark folders that exceed the size (#) with a "!".
         set %errorlevel% to ONE if any folders are found that
         exceed the specified size

   /*  Report on one level of subfolders (top-level folders)

   /D  Display only folders that exceed specified sizes.
   /S  Include detail of every subfolder in the output
   /O  Don’t check subfolders for quota overflow.
   /V  Display progress report for every subfolder

   /C  Use Compressed size instead of apparent size.
   /L  Output overflows to logfile .\DIRUSE.LOG.
   /A  generate an alert if quota is exceeded
       (requires the Alerter service)</pre>
<p> Options for DIRUSE can be specified with either <span class="code"> -option </span>or<span class="code"> /option</span></p>
<p>This utility does still work under Windows 7/2008 R2/2012, although  (like all Resource Kit tools) it is unsupported.<br>
<br>
<b>Example</b><br>
<span class="code"><br>
C:\&gt; DIRUSE /M /q:1.5 /* e:\users</span><br>
<br>
<i class="quote">“Work is achieved by those employees who have not yet reached their level of incompetence” ~ Laurence J. Peter (The Peter Principle)</i> <br>
<br>
<b>Related</b><br>
<a href="dir.html"><br>
DIR</a> - Display a list of files and folders<br>
DirQuota - Create and manage quotas
(File Server Resource Manager)<br>
<a href="diskuse.html">DISKUSE</a> - Show the space used in a folder/subfolders (2003 Resource Kit). <br>
You can also list files with <a href="xcopy.html">XCOPY</a> /L<br>
<a href="freedisk.html">FREEDISK</a> - Check free disk space.<br>
<a href="fsutil.html">FSUTIL</a> - File and Volume utilities<br>
Powershell: <span class="code">(<a href="../ps/get-childitem.html">Get-ChildItem</a> C:\docs\* -recurse) | measure-object -property length -sum </span><br>
Equivalent bash command (Linux):  <a href="../bash/quotacheck.html">quotacheck</a> - Scan a file system for disk usage</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="diruse.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

