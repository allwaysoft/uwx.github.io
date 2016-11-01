---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>WINMSD.exe</h1> 
<p>Microsoft Windows  diagnostics<br>
  Reports: Memory use, Services, Devices, IRQ's Ports, Environment variables, 
  <br>
Network (rights, transport, stats), Hardware including Display adapter.</p>
<pre>Syntax
      WINMSD [\\<i>computername</i>] <i>options</i>

Options:
       /a           All details
       /s           Summary details only
       /f           Send output to a file &lt;computername.txt&gt; in the current directory 
       /p           Send output to a printer

      WINMSD with no switches will open the GUI with details of the computer you are logged into. 

When a remote computername is specified then less info will be reported
e.g. Diskspace and Memory won't be listed</pre>
<p> Hot keys within the GUI:<br>
  <br>
  <b>SHIFT - F2</b> copies the current tab to the clipboard, <br>
  <b>F2</b> copies a summary of the current tab to the clipboard<br>
  <br>
  Winmsd in Windows 2000 will actually run <a href="msinfo32.html">Msinfo32</a> 
  - <br>
  mmc.exe /s "C:\Program Files\Common Files\Microsoft Shared\MSInfo\MSInfo32.msc" 
  <br>
  <br>
  It is advisable to have the SERVER <a href="syntax-services.html">service</a> running, if not - winmsd will show 
  a warning dialogue.<br>
  <br>
  Spooling output to file - if you have the resource kit <a href="z winmsdp.html">WINMSDP</a> 
allows more control over this.</p>
<p class="quote"><i>“It's a really crappy sort of memory that only works backwards” ~ The White Queen (Through the Looking Glass)</i></p>
<p><b>Related:</b><br>
  <a href="msinfo32.html"><br>
  MSINFO</a> - Windows NT diagnostics<br>
  <a href="z winmsdp.html">WINMSDP</a> - Windows NT Diagnostics II<br>
  <a href="https://support.microsoft.com/kb/311272">DevCon</a> - Device Manager 
  Command Line Utility <br>
  <a href="fsutil.html">FSUTIL</a> - File and Volume utilities <br>
<a href="systeminfo.html">SYSTEMINFO</a> - List system configuration<br>
  <span class="body">SRVINFO - <a href="http://www.microsoft.com/smserver/downloads/20/tools/spsupport/default.asp">SMS 
  support tools</a> - partition info, running services and Network info. </span> 
  <br>
  Dmdiag - display disk properties: Size, Status, Type...(<a href="../links/windows.html#kits">Win 
2K ResKit</a>)<br>
<a href="http://forums.majorgeeks.com/showthread.php?t=35407">Malware Removal Guide</a> - majorgeeks.com</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="winmsd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

