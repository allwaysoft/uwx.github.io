---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>MkDir</h1>
<p> Create a directory. </p>
<pre>Syntax
      MkDir <i>path</i>

Key
   <i>path</i>   The directory to create.</pre>
<p>Any higher-level directories must already exist or MkDir will fail. </p>
<p>UNC paths are not supported, but MkDir will work against mapped drives, alternatively, shell out and run an <a href="../nt/md.html">MD</a> command from the OS:</p>
<p><span class="code">Dim strPath as String</span><br>
<span class="code">Const DQ As String =""""<br>
strPath = DQ &amp; "\\Server64\folder1" &amp; DQ<br>
</span><span class="code">Shell "cmd.exe /c IF NOT EXIST " &amp; strPath &amp; " MD " &amp; strPath, vbNormalFocus</span></p>
<p><b>Examples</b></p>
<p><span class="code">MkDir "D:\test folder"</span><br>
<br>
'Create only if the folder does not already exist:<br>
<span class="code">If Len(Dir("C:\demo\folder", vbDirectory)) = 0 Then MkDir "C:\demo\folder"</span></p>
<p class="quote"><i>“Is not the whole world a vast house of assignation of which the filing system has been lost?” ~ Quentin Crisp</i></p>
<p><b>Related:</b></p>
<p><a href="dir.html">Dir</a> - List directory<br>
Windows CMD shell: <a href="../nt/md.html">MKDIR</a> </p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="mkdir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

