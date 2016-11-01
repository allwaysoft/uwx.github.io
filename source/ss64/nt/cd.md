---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CD</h1>  
<p>Change Directory - Select a Folder (and drive)</p>
<pre>Syntax
      CD [/D] [<i>drive</i>:][<i>path</i>]
      CD [..]

Key
   /D : change the current DRIVE in addition to changing folder.</pre>
<p>CHDIR is a synonym for CD.</p>
<h2>Errorlevels</h2>
<blockquote>
<p>Current directory was changed = 0<br>
Directory does not exist or is not accessible = 1</p>
</blockquote>
<h2>Tab Completion</h2>
<blockquote>
<p> This allows changing current folder by entering part of the path and pressing TAB</p>
<pre>   C:&gt; CD Prog [PRESS TAB] 
   Will go to C:\Program Files\</pre>
<p>Tab Completion is disabled by default, it has been known to create difficulty when using a batch script to process text files that contain TAB characters.<br>
<br>
Tab Completion is turned on by setting the registry value shown below<br>
<br>
<span class="code">REGEDIT4<br>
[HKEY_CURRENT_USER\Software\Microsoft\Command Processor]<br>
"CompletionChar"=dword:00000009</span></p>
</blockquote>
<p><b>Examples</b></p>
<p>   Change to the parent directory:<br>   
<span class="code">C:\Work&gt; CD .. </span><br>   
<br>   
Change to the grant-parent directory:<br>   
<span class="code">C:\Work\backup\January&gt; CD ..\..</span><br>   
<br>   
Change to the ROOT directory:<br>   
<span class="code">C:\Work\backup\January&gt; CD \ </span><br>   
<br>   
Display the current directory in the specified drive:<br>   
<span class="code">C:\&gt; CD D: </span><br>   
<br>   
Display the current drive and directory:<br>   
<span class="code">C:\Work&gt; CD</span><br>
<br>   
Display the current drive and directory:<br>   
<span class="code">C:\Work&gt; ECHO "%CD%"</span><br>
<br>   
In a batch file to display the location of the batch script file (%0)  <br>   
<span class="code">C:\&gt; ECHO "%~dp0"</span><br>
<br>   
In a batch file to CD to the location of the batch script file (%0)  <br>   
<span class="code">C:\&gt; CD /d "%~dp0"</span><br>
<br>   
Move down the folder tree with a full path reference to the ROOT folder...<br>   
<span class="code">C:\windows&gt; CD<b> \</b>windows\java<br>
C:\windows\java&gt; </span><br>   
<br>   
Move down the folder tree with a reference RELATIVE to the current folder...<br>   
<span class="code">C:\windows&gt; CD java<br>
C:\windows\java&gt; </span><br>   
<br>   
Move up and down the folder tree in one command...<br>   
<span class="code">C:\windows\java&gt; CD ..\system32<br>
C:\windows\system32&gt;</span></p>
<p>If <a href="cmd.html">Command Extensions</a> are enabled the CD command is enhanced 
as follows: <br>
<br>
The current directory string is not CASE sensitive. <br>
So <span class="code">CD C:\wiNdoWs</span> will set the current directory to C:\Windows<br>
<br>
CD does not treat spaces as delimiters, so it is possible to CD into a subfolder name that contains a space without surrounding the name with quotes. <br>
<br>
For example: <br>
<span class="code">cd \My folder</span><br>
<br>
is the same as: <br>
<span class="code">cd "\My folder" </span></p>
<p> An asterisk can be used to complete a folder name<br>
e.g. 
<span class="code">C:&gt; CD pro*</span> will move to
<span class="code">C:\Program Files </span><br>
<br>
</p>
<p> <b>Change the Current Drive</b><br>
<br>
Enter the drive letter followed by a colon <br>
<span class="code">C:&gt; E:<br>
E:&gt; </span><br>
<br>
To change drive and directory at the same time, use CD with the /D switch<br>
<span class="code">C:&gt; cd /D E:\utils<br>
E:\utils\&gt;</span></p>
<p><br>
CHDIR is a synonym for CD</p>
<p>CD is an <a href="syntax-internal.html">internal</a> command.</p>
<p class="quote"><i>“Change is the law of life.  And those who look only to the past or the present are certain to miss the future” ~ John F. Kennedy</i></p>
<p><b>Related:</b><br>
<br>
<a href="pushd.html">pushd</a> - Change Directory<br>
<a href="https://support.microsoft.com/kb/156276">Q156276</a> - Cmd does not support UNC names as the current directory <br>
Powershell:  <a href="../ps/set-location.html">Set-Location</a> - Set the current working location<br>
Equivalent bash command (Linux): <a href="../bash/cd.html">cd</a> - Change Directory</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

