---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>For Each ... Next Loop</h1> 
<p>Loop through the items in a collection or array.</p>
<pre>Syntax 
      For Each <i>element </i>In<i> Group</i>
        [<i>Statements</i>]
        [Exit For]
        [<i>Statements</i>]
      Next [<i>element</i>]

Key
   <i>element</i>     A variable<span class="code"></span> used to hold each item in the group

   <i>Group</i>       A collection or a VBScript array
</pre>
<p>Example</p>
<pre>Set objFSO = CreateObject("Scripting.<a href="filesystemobject.html">FileSystemObject</a>")

For Each objDrive In objFSO.Drives
  WScript<a href="echo.html">.Echo</a> objDrive.DriveType
Next

Set objFolder = objFSO.GetFolder("C:\Work")
Set arrFolders = objFolder.SubFolders
For Each strFolderName In arrFolders
  WScript<a href="echo.html">.Echo</a> strFolderName
Next</pre>
<p class="quote"><i>“Profit in business comes from repeat customers, customers that boast about your project or service, and that bring friends with them” ~ W. Edwards Deming</i></p>
<p><b>Related:</b></p>
<p><a href="for.html">For...Next</a> - Repeat a block of statements a given number of times<br>  
<a href="do.html">Do..Loop</a> - Repeat a block of statements<br>
Equivalent PowerShell cmdlet: <a href="../ps/foreach-object.html">ForEach-Object</a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="foreach.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

