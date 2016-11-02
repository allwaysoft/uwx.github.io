---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1> .CreateShortcut</h1> 
<p>Create or edit a Windows Shortcut</p>
<pre>Syntax
      <i>objShell</i>.CreateShortcut(<i>strLinkFile</i>)
      <i>ShortcutObject</i>.property = "Your Value"

Key
   objShell   A WScript.Shell object
   ShortcutObject  An existing shortcut object

Example

   Set objShell = WScript.CreateObject("WScript.Shell")
   Set lnk = objShell.CreateShortcut("C:\MyShortcut.LNK")
   
   lnk.TargetPath = "C:\Program Files\MyApp\MyProgram.EXE"
   lnk.Arguments = ""
   lnk.Description = "MyProgram"
   lnk.HotKey = "ALT+CTRL+F"
   lnk.IconLocation = "C:\Program Files\MyApp\MyProgram.EXE, 2"
   lnk.WindowStyle = "1"
   lnk.WorkingDirectory = "C:\Program Files\MyApp"
   lnk.Save
   'Clean up <br>   Set lnk = Nothing

Similarly in Powershell:

   $objShell = <a href="../ps/new-object.html">New-Object</a> -ComObject WScript.Shell
   $lnk = $objShell.CreateShortcut("$home\Desktop\DemoShortcut.lnk")
   $lnk.TargetPath = "C:\demo.exe"
   $lnk.Save() </pre>
<p>The 'Description' property corresponds to the shortcut "Comment" 
  field, this will be displayed in a tool-tip. </p>
<p>HotKey mappings are only usable if the shortcut is on the Desktop or in the 
  Start Menu. <br>
  Valid hot key-options: <br>
  "ALT+", "CTRL+", "SHIFT+", and "EXT+". <br>
  "A" .. "Z", "0" .. "9", "Back", "Tab", "Clear", "Return", 
  "Escape", "Space", and "Prior".</p>
<p><b>Internet Shortcuts<br>
</b>Unlike file/folder shortcuts, Internet Explorer Favourite (.URL) files are simple text files which you can create with a couple of ECHO statements:</p>
<p><span class="code">Echo [InternetShortcut] &gt; demo.url <br>
Echo URL=http://ss64.com/ &gt;&gt; demo.url</span></p>
<p class="quote"><i>“Our life is frittered away by detail... simplify, simplify” - Henry David Thoreau</i></p>
<p><b>Related:</b></p>
<p>Arguments, display - <a href="arguments.html">WshArguments.Item</a><br>
  <a href="http://support.microsoft.com/?kbid=263324">Q263324</a> - Shortcut Command 
  truncates path names.<br>
  Equivalent Windows CMD command: <a href="../nt/shortcut.html">SHORTCUT</a> - Create a windows shortcut (.LNK 
file)</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

