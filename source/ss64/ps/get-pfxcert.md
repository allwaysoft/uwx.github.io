---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-PfxCertificate</h1> 
<p>Get pfx certificate information. <br>
Pfx = Personal Information Exchange, each .pfx file includes both a certificate and a private key.</p>
<pre>Syntax
      Get-PfxCertificate [-filePath] <i>string</i>[] [<i>CommonParameters</i>]

Key
   -filePath 
        The full path to the .pfx file of the secured file. (may be piped)

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  When the .pfx certificate file is not password-protected, the value of the Authentication parameter of Invoke-Command must be "CredSSP".</p>
<p><b>Examples</b></p>
<p>Get   information about the ss64.pfx certificate:</p>
<p><span class="code">PS C:\&gt; get-pfxcertificate -filepath C:\windows\system32\ss64.pfx</span></p>
<p class="quote"><i>"Those were the days when men were <b>real</b> men,
 when women were <b>real</b> women,
when small, blue, fuzzy creatures from Alpha Centauri were<b> real</b> small, blue, fuzzy creatures from Alpha Centauri" ~ Douglas Adams</i></p>
<p><b>Related:</b><br>
  <br>
  <a href="get-authenticodesignature.html">Get-AuthenticodeSignature</a> - Get the signature object associated with a file <a href="set-authenticodesignature.html"><br>
Set-AuthenticodeSignature</a> - Place a signature in a .ps1 script or other file<br>
About_Signing<br>
<a href="http://msdn.microsoft.com/en-us/library/aa906332.aspx">Pvk2pfx.exe</a> - SDK tool to copy public/private key information from .spc, .cer, and .pvk files to a .pfx file.<br>
Equivalent bash commands: 
build-ca (Easy RSA) </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

