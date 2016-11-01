---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem -->
<h1>The wscript.Shell + Shell.Application objects</h1> 
<p>Provides access to OS Shell methods.</p>
<pre>Syntax 
      Set objShell = <a href="createobject.html">CreateObject</a>("Wscript.Shell") 

Methods
   <span class="code"><a href="appactivate.html">.AppActivate</a></span>      'Activate running command.
   .<a href="run.html">Run</a>              'Run an application
   .TileVertically   'Tile app windows
   <a href="regread.html">.RegRead</a>          'Read from registry
   <a href="regdel.html">.RegDelete</a>        'Delete from registry
   <a href="regwrite.html">.RegWrite</a>         'Write to the registry


Syntax 
      Set objShell = <a href="createobject.html">CreateObject</a>("Shell.Application")

Methods
   .CanStartStopService("<i>ServiceName</i>")   'Can the current user start/stop the named service?
   .CascadeWindows      'Arrange app windows
   .EjectPC             'Eject PC from a docking station
   .Explore(<i>FolderPath</i>) 'Open a folder
   .FileRun             'Open the File-run dialogue
   .GetSystemInformation("PhysicalMemoryInstalled")  'Physical memory installed, in bytes.
   .IsServiceRunning("<i>ServiceName</i>")  'Check if a Windows service is running
   .MinimizeAll         'Minimize everything
   .NameSpace("C:\\")   'Create an object reference to a folder
   .ServiceStart("<i>ServiceName</i>", true)  'Start a windows service
   .ServiceStop("<i>ServiceName</i>", true)   'Stop a windows service
   .SetTime             'Open the set time GUI
   <a href="shellexecute.html">.ShellExecute</a>        'Run a script or application
   .ShutdownWindows
   .TileHorizontally   'Tile app windows
   .TileVertically     'Tile app windows
   .ToggleDesktop      'Show/Hide Desktop
   .TrayProperties     'Display the Taskbar/Start Menu Properties
   .UndoMinimizeAll    'Un-Minimize everything</pre>
<p><b> Example<br>
</b></p>
<pre>Dim objShell
Set objShell = WScript.CreateObject("WScript.Shell")
objShell<b>.Run</b> "C:\Demo"
Set objShell = Nothing</pre>
<p class="quote"><i>“It is possible to store the mind with a million facts and still be entirely uneducated” ~ Alec Bourne</i></p>
<p><b>Related:</b></p>
<p><a href="appactivate.html">.AppActivate</a> - Activate running command.<br>
<a href="application.html">.Application</a> BrowseForFolder/Open<br>
<a href="run.html">.Run</a> a command.<br>
</p>
<!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

