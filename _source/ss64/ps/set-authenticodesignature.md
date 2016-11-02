---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-AuthenticodeSignature</h1> 
<p>Use an authenticode signature to sign a PowerShell script or other file.</p>
<pre>Syntax
      Set-AuthenticodeSignature [-filePath] <i>string</i>[]
           [-certificate] <i>X509Certificate2</i>  [-includeChain <i>string</i>]
              [-timeStampServer string] [-HashAlgorithm <i>string</i>]
                 [-force] [-whatIf] [-confirm] [<i>CommonParameters</i>]
key
   -FilePath <i>path</i>
      The path to a file that is being signed. {may be piped}

   -Certificate <i>X509Certificate2</i>
       The certificate that will be used to sign the script/file.
       (use an expression or variable that gets the certificate via 
       Get-PfxCertificate or Get-ChildItem)

   -includeChain <i>string</i>
       What should be included in the digital signature: 
       
        "Signer" : Include only the signer's certificate.
        
        "NotRoot": Include all of the certificates in the certificate chain,
                   except for the root authority. (this is the default)
        
        "All"    : Include all certificates in the certificate chain.

   -TimeStampServer <i>string</i>
       Use a timestamp server to certify the time that the certificate
       was added to the file. <i>string</i> = the URL of the timestamp server.

   -Force
       Override restrictions that prevent the command from succeeding, apart
       from security settings. e.g. -force will append a signature to a read-only file,
       but will not override security permissions.

   -HashAlgorithm <i>string</i>
       The hashing algorithm that Windows uses to compute the digital signature for the file.
       The default is SHA1, which is the Windows default hashing algorithm.<br>        <br>       Files that are signed with a different hashing algorithm might not be recognized on other systems.

   -WhatIf
       Describe what would happen if you executed the command without actually
       executing the command.
        
   -Confirm
       Prompt for confirmation before executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  If the certificate is not valid or does not have code-signing authority, the command will fail.</p>
<p>To create a self-signed certificate, use MakeCert.exe, (available in the Microsoft .NET Framework SDK) for details see: Get-Help about_signing </p>
<p><b>Examples</b></p>
<p>Retrieve a code-signing certificate from the certificate provider and use it to sign a  PowerShell script:</p>
<p><span class="code">PS C:\&gt;$cert=Get-ChildItem -FilePath cert:\CurrentUser\my -CodeSigningCert<br>
PS C:\&gt;Set-AuthenticodeSignature PsTest.ps1 -cert $cert</span><br>
  <br>
  Find a code signing certificate and  use it to sign a PowerShell script:</p>
<p class="code">PS C:\&gt;$cert = Get-PfxCertificate C:\Test\Mysign.pfx<br>
PS C:\&gt;Set-AuthenticodeSignature -Filepath C:\myscript.ps1 -Cert $cert</p>
<p>Add a digital signature signed by a third-party timestamp server:</p>
<p class="code">PS C:\&gt;Set-AuthenticodeSignature -filepath c:\myscript.ps1 -cert $cert  -TimeStampServer "http://www.fabrikam.com/TimeManager"</p>
<p class="quote"><i>#I'll send you all my dreams, 
Every day in a letter, 
Sealed with a kiss# ~ <a href="http://www.youtube.com/watch?v=xIkUiD8N81k">Brian Hyland </a></i></p>
<p><b>Related:</b><br>
  <br>
<a href="get-authenticodesignature.html">Get-AuthenticodeSignature</a> - Get the signature object associated with a file<br>
<a href="get-executionpolicy.html">Get-ExecutionPolicy</a> - Get the execution policy for the shell <a href="set-executionpolicy.html"><br>
Set-ExecutionPolicy</a> - Change the execution policy (user preference)<br>
<a href="get-pfxcert.html">Get-Pfxcertificate</a> - Get pfx certificate information<br>
Get-Help about_signing
<br>
Equivalent bash command: <a href="http://www.openssl.org/docs/apps/openssl.html">OpenSSL</a> - Open Secure Sockets Layer </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

