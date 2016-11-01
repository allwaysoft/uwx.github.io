---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.RegRead </h1> 
<p>Read a value from the Registry </p>
<pre>Syntax 
      <i>strValue</i> = <i>objShell</i>.RegRead(<i>strRegistryKey</i>\)
      <i>strValue</i> = <i>objShell</i>.RegRead(<i>strRegistryValue</i>)

Key

   objShell    A WScript.Shell object

   The Registry key or value must start with one of:

   HKEY_CURRENT_USER  or HKCU
   HKEY_USERS         
   HKEY_LOCAL_MACHINE or HKLM
   HKEY_CLASSES_ROOT  or HKCR
   HKEY_CURRENT_CONFIG</pre>
<p><b>Examples</b></p>
<pre>Dim objShell,strLogonServer,strDNSdomain

strLogonServer = "HKEY_CURRENT_USER\Volatile Environment\LOGONSERVER"
strDNSdomain = "HKEY_CURRENT_USER\Volatile Environment\USERDNSDOMAIN"

Set objShell = WScript.CreateObject("WScript<a href="shell.html">.Shell</a>")
WScript.Echo "Logon server: " objShell<b>.RegRead</b>(strLogonServer) 
WScript.Echo "DNS domain: " objShell<b>.RegRead</b>(strDNSdomain) </pre>
<p class="quote"><i>“Machines can only find what ignorant men have programmed them to find” ~ Poul Anderson</i></p>
<p><b>Related:</b></p>
<p> Registry, delete - <a href="regdel.html">.RegDelete</a> <br>
Registry, write - <a href="regwrite.html">.RegWrite</a><br>
Equivalent Windows CMD command: 
<a href="../nt/reg.html">REG</a> - Read, Set or Delete registry keys and values<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-item.html">Get-Item</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

