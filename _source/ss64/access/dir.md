---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Dir</h1>
<p>  List the files in a folder.</p>
<pre>Syntax
      Dir [( <i>path</i> [, <i>attributes</i> ] ) ]

Key
   <i>path</i>   Path to a file, folder, or directory.
          If the <i>path</i> is not found, dir will return a zero-length string.

   <i>attributes
          </i>The sum of the file attributes.
          One or a combination of the following values:</pre>
<blockquote>
<blockquote>
<p> 0
&nbsp;vbNormal   (Default)<br>
1 &nbsp;vbReadOnly  <br>
2 &nbsp;vbHidden  <br>
4 &nbsp;vbSystem  System file<br>
8 &nbsp;vbVolume  Volume label<br>
16 vbDirectory<br>
64 vbAlias</p>
</blockquote>
</blockquote>
<p>Wildcards * and ? can be used to return multiple files.</p>
<p>To test if a folder (or server) exists at all, you can use this function <a href="http://allenbrowne.com/func-11.html">from Allen Browne</a></p>
<pre>Function FolderExists(strPath As String) As Boolean
   On Error Resume Next     
   FolderExists = ((<a href="getattr.html">GetAttr</a>(strPath) And vbDirectory) = vbDirectory) 
End Function</pre>
<p><b>Examples</b></p>
<pre>'List a filename
Dir("C:\docs\demo.xls")

'Check if a file exists
If Len(Dir("C:\docs\demo.xls")) = 0 Then Msgbox "File not found!"

'Check if a folder exists
If Len(Dir("C:\docs", vbDirectory)) = 0 Then Msgbox "Folder not found!"</pre>
<p class="quote"><i>“Is not the whole world a vast house of assignation of which the filing system has been lost?” ~ Quentin Crisp</i></p>
<p><b>Related:</b></p>
<p><a href="mkdir.html">MkDir</a> - Create directory</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="dir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

