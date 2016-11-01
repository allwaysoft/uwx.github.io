---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>DelOlder.vbs</h1> 
<p>Delete files older than <i>N</i> days from a  folder.</p>
<pre>Option Explicit
'on error resume next
    Dim objFS
    Dim strDirectoryPath
    Dim objFolder
    Dim objFileCollection
    Dim objFile
    Dim intDaysOld

strDirectoryPath = WScript.Arguments.Item(0)
intDaysOld = WScript.Arguments.Item(1)

' Check the number of days is 1 or greater (otherwise it will just delete everything)
If (intDaysOld&lt;=0) Then WScript.quit -1
wscript.echo "Delete files more than " &amp; intDaysOld &amp; " days old:"

If (IsNull(strDirectoryPath)) Then WScript.quit -1
wscript.echo "Delete from: " &amp; strDirectoryPath
wscript.echo ""

    Set objFS = CreateObject("Scripting.FileSystemObject")
    set objFolder = objFS.GetFolder(strDirectoryPath)
    set objFileCollection = objFolder.Files

    For each objFile in objFileCollection
        If objFile.DateLastModified &lt; (Date() - intDaysOld) Then
                Wscript.Echo objFile.Name &amp; " " &amp; objFile.DateLastModified
                '<b>objFile.Delete(True)</b>
        'To delete for real, remove the ' from the line above
        End If
    Next</pre>
<p><b>Example</b></p>
<p><span class="code"> cscript delolder.vbs "D:\Demo\log files" 90 </span><br>
</p>
<p class="quote"><i>“The long run is a misleading guide to current affairs. In the long run, we are all dead” ~ John Maynard Keynes </i></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-delolder.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

