---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WshShell.SpecialFolders</h1> 
<p>Obtain the full path to any of the special Windows folders (Desktop, Start Menu etc). </p>
<pre>Syntax 
      <i>strMyPath</i> = <i>objShell</i>.SpecialFolders("<i>strFolderName</i>")
      or
      <i>strMyPath</i> = <i>objShell</i>.SpecialFolders.Item("<i>strFolderName</i>")

Arguments:

   objShell   A WScript.Shell object 

   strFolderName : One of the following special folders 
                   (not all are available to all flavors of Windows)

      AllUsersDesktop
      AllUsersStartMenu
      AllUsersPrograms
      AllUsersStartup
      Desktop
      Favorites
      Fonts
      MyDocuments
      NetHood
      PrintHood
      Programs
      Recent
      SendTo
      StartMenu
      Startup
      Templates

Returns:
   strMyPath : The full path to the special folder
               returns NULL if the folder is not available.</pre>
<p><b>Examples</b></p>
<p>Return the full path to the Windows Desktop:</p>
<pre>   Dim objShell As Object
   Dim strPath As String

   Set objShell = Wscript.CreateObject("Wscript.Shell")
   strPath = objShell.SpecialFolders("Desktop")
   wscript.echo strPath</pre>
<p>To read a value from the script above into a CMD batch file: <br>
<span class="code">FOR /F "usebackq delims=" %%i in (`cscript FindDesktop.vbs`) DO Set _DeskTopDir=%%i</span><br>
<br> 
List all special folders:</p>
<pre>   For Each strFolder In WshShell.SpecialFolders
      MsgBox strFolder
   Next</pre>
<p class="quote"><i>“An artist who was once known as Prince <br>
  On the stage he would wiggle and mince <br>
  And then, for a giggle, He changed his name to a squiggle <br>
And nobody's heard of him since” ~ Tim Brooke-Taylor </i></p>
<p>Equivalent in PowerShell:  <a href="../ps/syntax-env.html">environment variables</a> or <span class="code">(Get-WMIObject Win32_OperatingSystem).SystemDirectory</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
