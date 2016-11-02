---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>MKLink (Vista/Windows 7/2008)</h1>
<p>Create a symbolic link to a directory or a file, or create a hard file link or directory junction.</p> 
<pre>Syntax
      MKLINK [[/D] | [/H] | [/J]] <i>Link Target</i>

Key:

   /D     Create a Directory symbolic link. (default is file)

   /H     Create a hard link instead of a symbolic link.

   /J     Create a Directory Junction.

   <i>Link</i>   The new symbolic link name.

   <i>Target</i> The path (relative or absolute) that the new link refers to.</pre>
<h2>Types of Link<br>
</h2>
<table class="mklink">
<tbody><tr>
<td></td>
<th><p>Can link to files?</p></th>
<th><p>Can link to folders?</p></th>
<th><p>Can link across hard drives?</p></th>
<th><p>Supported on:</p></th>
<th><p>Can point to a non-existent target?</p></th>
<th><p>Can be relative?</p></th>
<th><p>How to delete:</p></th>
</tr>
<tr>
<th><p><a href="shortcut.html">Shortcut</a></p></th>
<td><p>Yes</p></td>
<td><p>Yes</p></td>
<td><p>Yes</p></td>
<td><p>Windows 95+</p></td>
<td><p>Yes</p></td>
<td><p>No</p></td>
<td><p><a href="del.html">Del</a></p></td>
</tr>
<tr>
<th><p>Hard link</p></th>
<td><p>Yes</p></td>
<td><p>No</p></td>
<td><p>No</p></td>
<td><p>Windows 3.5+</p></td>
<td><p>No<br>
</p></td>
<td><p>No</p></td>
<td><p><a href="del.html">Del</a></p></td>
</tr>
<tr>
<th><p>Junction<br>
(soft link)</p></th>
<td><p>No</p></td>
<td><p>Yes</p></td>
<td><p>Y (on the same computer)</p></td>
<td><p>Windows 2000+</p></td>
<td><p>Yes</p></td>
<td><p>No</p></td>
<td><p><a href="rd.html">RD</a></p></td>
</tr>
<tr>
<th><p>Symbolic link</p></th>
<td><p>Yes</p></td>
<td><p>Yes</p></td>
<td><p>Yes</p></td>
<td><p>Vista+</p></td>
<td><p>Yes</p></td>
<td><p>Yes (on the same volume)</p></td>
<td><p>RD <i>folder</i> or Del <i>file</i></p></td>
</tr>
</tbody></table>
<p>Symbolic links are transparent to users; the links appear as normal NTFS files or directories, and can be acted upon by the user or application in exactly the same manner. Symbolic links can span volumes and can use UNC paths. </p>
<p> A symlink can be an absolute path <span class="code">C:\Programs</span> or a path relative to the link's location <span class="code">\Programs</span>. <br>
</p>
<p><b> </b>Symbolic Links and Directory Junctions are implemented using <a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa365503(v=vs.85).aspx">reparse points</a>.</p>
<p> Hard Links are implemented  with multiple file table entries that point to the same inode – the same  as Unix hard links. If the original filename is deleted, the hard link will still work - it points directly to the data on disk.<br>
To create hard links on Windows XP use <a href="fsutil.html">fsutil</a>.</p>
<p>It is possible (but not advisable) to create  two links that point to each other in a loop, or a link that targets  itself. Symbolic links can expose security vulnerabilities in applications that aren't designed to handle them.</p>
<p>By default, only Administrators can create symbolic links. The security setting 'Create symbolic links' can be granted at: <span class="code">Configuration\Windows Settings\Security Settings\Local Policies\User Rights Assignment\</span></p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the link was successfully created <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
Link could not be created or bad parameters given = 1</p>
</blockquote>
<p><b>Examples:</b></p>
<p> Link for a file:<br>
<span class="code"> C:\&gt; MKlink ss64.exe C:\Windows\system32\notepad.exe<br>
C:\&gt; Dir<br>
C:\&gt; Del ss64.exe</span></p>
<p> Link for a folder<span class="code">:<br>
C:\&gt; MKlink /D Apr C:\work\April<br>
C:\&gt; Dir<br>
C:\&gt; RD Apr</span></p>
<p>MKLINK is an <a href="syntax-internal.html">internal</a> command.</p>
<p><i class="quote"> "And so its my assumption, I’m really up the junction" ~ Squeeze </i><br>
  <b><br>
Related Commands:</b></p>
<p><a href="fsutil.html">FSUTIL</a> - Create Hard Junction Link<br>
<a href="fsutil.html#behavior">FSUTIL behavior set symlinkevalution</a> - Allow/disable symbolic links<br>
<a href="mountvol.html">MOUNTVOL</a> - Manage a volume mount point<br>
<a href="https://support.microsoft.com/kb/205524">Q205524</a> - How to create and manipulate NTFS junction points<br>
LinkD - Create symbolic link (2003 Resource Kit)<br>
<a href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa365006%28v=vs.85%29.aspx">Hard Links and Junctions</a> - MSDN<br>
<a href="http://en.wikipedia.org/wiki/NTFS_symbolic_link">NTFS_symbolic_link</a> - Wikipedia<br>
<a href="http://technet.microsoft.com/en-gb/sysinternals/bb896768.aspx">Junction</a> - Create directory symbolic link (sysInternals)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mklink.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
