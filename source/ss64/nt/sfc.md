---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>SFC.exe (Windows XP, Server 2003, Win 7) </h1>
<p>System File Checker </p>
<pre>Syntax
      Sfc [/Scannow] [/Scanonce] [/Scanboot] [/Revert] [/Purgecache] [/Cachesize=<i>x</i>]
Key
   /Scannow   Scan all protected system files immediately and replace
              incorrect versions with correct Microsoft versions. 
              May require access to the Windows installation source files.

   /Scanonce  Scan all protected system files one time when you restart your computer.
              May require access to the Windows installation source
              files when you restart the computer.
              The SfcScan DWORD value is set to 2 in the following registry key
              HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon

   /Scanboot  Scan all protected system files every time you start your computer.
              May require access to the Windows installation source files every 
              time you start the computer.
              The SfcScan DWORD value is set to 1 in the following registry key 
              HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon

   /Revert    Return scan to the default setting
              (do not scan protected files when you start the computer).
              The default cache size is not reset when you run this command.

  /Purgecache Purge the file cache and scan all protected system files immediately.
              May require access to the Windows installation source files.

 /Cachesize=<i>x</i> Set the file cache size to <i>x</i> megabytes (MB).
              The default size of the cache is 50 MB. 
              This command requires you to restart the computer, and then run
              the /purgecache command to adjust the size of the on-disk cache.
              This command sets the SfcQuota DWORD value to x in the following registry key:
              HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon</pre>
<p> SFC must be run from an <a href="syntax-elevate.html">elevated</a> command prompt.</p>
<p class="quote"><i>“Oh, yes, I've learned from my mistakes and I'm sure I could repeat them exactly” ~  Sir Arthur Streeb-Greebling (aka Peter Cook)</i></p>
<p><b>Related:</b></p>
<p><a href="slmgr.html">SLMGR</a> - Software Licensing Management<br>  
<a href="winmsd.html">WINMSD</a> - Windows system diagnostics</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sfc.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

