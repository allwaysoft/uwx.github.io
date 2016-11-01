---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-AuthenticodeSignature</h1> 
<p>Get the signature object associated with a file, if the file is not signed, then blank fields will be retrieved.</p>
<pre>Syntax
      Get-AuthenticodeSignature [-filePath] <i>string</i>[] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -filePath <i>path</i>
      The path to the item {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Get   information about the Authenticode signature in  NewScript.ps1:</p>
<p><span class="code">PS C:\&gt;get-AuthenticodeSignature -filepath C:\NewScript.ps1</span><br>
  <br>
  Get   information about the Authenticode signature for two files:</p>
<p class="code">PS C:\&gt;get-AuthenticodeSignature  C:\NewScript.ps1 E:\OtherScript.ps1</p>
<p class="quote"><i>“It's the Real Thing” - Coca Cola campaign 1969-1975 </i></p>
<p><b>Related:</b><br>
  <br>
<a href="set-authenticodesignature.html">Set-AuthenticodeSignature</a> - Place a signature in a PowerShell script or other file<br>
<a href="get-executionpolicy.html">Get-ExecutionPolicy</a> - Get the execution policy for the shell <a href="set-executionpolicy.html"><br>
Set-ExecutionPolicy</a> - Change the execution policy (user preference)<br>
Get-Help about_signing<br>
Equivalent bash command: <a href="http://www.openssl.org/docs/apps/openssl.html">OpenSSL</a> - Open Secure Sockets Layer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-authenticodesignature.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

