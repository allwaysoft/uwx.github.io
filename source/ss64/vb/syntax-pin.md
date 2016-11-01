---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>VBScript to Pin or UnPin items to the Start Menu (Windows 7)</h1> 
<p>Executable files on the local machine may be Pinned to the Start Menu and/or Taskbar.</p>
<p>PIN.vbs</p>
<pre>Dim strFolder, strExecutable
Set objShell = CreateObject("Shell.Application")

strFolder = "<b>C:\Windows\System32\</b>"
strExecutable = "<b>notepad.exe</b>"

Set objFolder = objShell.Namespace(strFolder)
Set objFolderItem = objFolder.ParseName(strExecutable)

Set colVerbs = objFolderItem.Verbs

'uncomment this section to display the available verbs
' For Each objVerb In colVerbs
'    If objVerb &lt;&gt; "" Then
'       WScript.Echo objVerb
'    End If
' Next

'Loop through the verbs and if PIN is found then 'DoIt' (execute)
blnOptionFound = False
For Each objVerb In colVerbs
   If Replace(objVerb.name, "&amp;", "") = "Pin to Start Menu" Then
      objVerb.DoIt
      blnOptionFound = True
      WScript.Echo "The application '" &amp; strExecutable &amp; "' was just Pinned to the Start Menu."
   End If
Next

if blnOptionFound = false then
   WScript.Echo "The application '" &amp; strExecutable &amp; "' was already pinned to the Start Menu."
end if</pre>
<p> Items can also be pinned to the TaskBar instead of the Start menu, replace 'Pin to Start Menu' with 'Pin to Taskbar'.<br>
To remove items use the UNPIN script below.</p>
<p>UNPIN.vbs</p>
<pre>Dim strFolder, strExecutable

Set objShell = CreateObject("Shell.Application")

strFolder = "<b>C:\Windows\System32\</b>"
strExecutable = "<b>notepad.exe</b>"

Set objFolder = objShell.Namespace(strFolder)
Set objFolderItem = objFolder.ParseName(strExecutable)

'Collect Applications verbs
Set colVerbs = objFolderItem.Verbs

'Loop through the verbs and if UNPIN is found then 'DoIt' (execute)
blnOptionFound = False
For Each objVerb In colVerbs
   If Replace(objVerb.name, "&amp;", "") = "Unpin from Start Menu" Then
      objVerb.DoIt
      blnOptionFound = True
      WScript.Echo "The application '" &amp; strExecutable &amp; "' was just Unpinned from the Start Menu."
   End If
Next

if blnOptionFound = false then
   WScript.Echo "The application '" &amp; strExecutable &amp; "' was already unpinned from the Start Menu."
end if</pre>
<p class="quote"><i>“It is not the place for a program to decide unilaterally, 'I am so cool. I am your favorite icon. I just know it'” ~ <a href="http://blogs.msdn.com/b/oldnewthing/archive/2003/09/03/54760.aspx">The Old New Thing</a> blog</i></p>
<p>Related</p>
<p> <a href="syntax-mapdrive.html">MapDrive</a> - Map a Drive letter to a network file share<br>
<a href="syntax-qchange.html">qchange</a> - Re-assign network printer connections<br>
PowerShell - <a href="https://gallery.technet.microsoft.com/scriptcenter/b66434f1-4b3f-4a94-8dc3-e406eb30b750">Pin / Unpin</a> applications from the taskbar and Start menu.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-pin.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

