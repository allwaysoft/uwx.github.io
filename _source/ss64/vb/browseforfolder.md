---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.BrowseForFolder</h1> 
<p>Prompt the user to select a folder. </p>
<pre>Syntax 
      .BrowseForFolder(<i>WINDOW_HANDLE</i>, "Window Title", <i>WINDOW_OPTIONS</i>, <i>StartPath</i>)

Key
<i>   WINDOW_HANDLE</i>  This should always be 0<i>

   WINDOW_OPTIONS</i>
     Const BIF_RETURNONLYFSDIRS   = &amp;H0001  (The default)
     Const BIF_DONTGOBELOWDOMAIN  = &amp;H0002
     Const BIF_STATUSTEXT         = &amp;H0004
     Const BIF_RETURNFSANCESTORS  = &amp;H0008
     Const BIF_EDITBOX            = &amp;H0010
     Const BIF_VALIDATE           = &amp;H0020
     Const BIF_NONEWFOLDER        = &amp;H0200
     Const BIF_BROWSEFORCOMPUTER  = &amp;H1000
     Const BIF_BROWSEFORPRINTER   = &amp;H2000
     Const BIF_BROWSEINCLUDEFILES = &amp;H4000
     ' These can be combined e.g. BIF_EDITBOX + BIF_NONEWFOLDER

<i>   StartPath</i>     A drive/folder path or one of the following numeric constants: 
     DESKTOP = 0
     PROGRAMS = 2
     DRIVES = 17
     NETWORK = 18
     NETHOOD = 19
     PROGRAMFILES = 38
     PROGRAMFILESx86 = 48
     WINDOWS = 36</pre>
<p>Although you can display  <i>files</i> with <span class="code">.BrowseForFolder</span>, the method will only return a <i>folder</i>, hence the name. </p>
<p><b>Example</b></p>
<pre>Dim objFolder, objShell
Set objShell = CreateObject("Shell<a href="shell.html">.Application</a>")
Set objFolder = objShell<b>.BrowseForFolder</b>(0, "Please select the folder.", 1, "")
If Not (objFolder Is Nothing) Then
   wscript.echo "Folder: " &amp; objFolder.title
   wscript.echo "Full Path: " &amp; objFolder.Self.path 
End If</pre>
<p class="quote"><i>“You affect the world by what you browse” ~ Tim Berners-Lee</i></p>
<p><b>Related:</b></p>
<p><a href="application.html">.Application</a> - BrowseForFolder/Open<br>
<a href="filesystemobject.html">FileSystemObject</a> - Work with Drives, Folders and Files </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="browseforfolder.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

