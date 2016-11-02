---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Replace.vbs</h1> 
<p>Find and replace a text string in a file.</p>
<pre>'usage: cscript replace.vbs Filename "StringToFind" "stringToReplace"
 
Option Explicit
Dim fso,strFilename,strSearch,strReplace,objFile,oldContent,newContent
 
strFilename=WScript.Arguments.Item(0)
strSearch=WScript.Arguments.Item(1)
strReplace=WScript.Arguments.Item(2)
 
'Does file exist?
Set fso=CreateObject("Scripting.FileSystemObject")
if fso.FileExists(strFilename)=false then
   wscript.echo "file not found!"
   wscript.Quit
end if
 
'Read file
set objFile=fso.OpenTextFile(strFilename,1)
oldContent=objFile.ReadAll
 
'Write file
newContent=replace(oldContent,strSearch,strReplace,1,-1,0)
set objFile=fso.OpenTextFile(strFilename,2)
objFile.Write newContent
objFile.Close </pre>
<p><b>Example</b></p>
<p class="code">cscript //Nologo  replace.vbs c:\docs\demo.txt "Madonna" "Lady Gaga"</p>
<p class="quote"><i>“Substitute “damn” every time you're inclined to write “very;” your editor will delete it and the writing will be just as it should be” ~ Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="replace.html">replace</a> - <span class="body">Find and replace text in a string.</span><br>
<a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=3855">Repl.bat</a> - FInd and Replace text,  JScript/Batch script<br>
<a href="http://www.dostips.com/forum/viewtopic.php?f=3&amp;t=4697">FindRepl.bat</a> - FInd and Replace text,  JScript/Batch script</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

