---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-Credential</h1> 
<p>Get a security credential object based on a user name and password.</p>
<pre>Syntax
      Get-Credential [-credential] <i>PSCredential</i> [<i>CommonParameters</i>]

key
   -credential 
       A user name e.g."User01" or "Domain01\User01"

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>When you enter the command, you will be prompted for a password. <br>

If you omit <i>PSCredential</i>, you will be prompted for a user name and a password.</p>
<p>PowerShell    can  store passwords in 3 different forms: </p>
<blockquote>
<p><span class="code">String</span> - Plain text strings are  stored in memory as unsecure plain text and most cmdlets will not accept passwords in this form. </p>
<p><span class="code">SecureString</span> - This type is encrypted in memory. It uses reversible encryption so the password can be decrypted when needed, but only by the same user principal that encrypted it. <span class="code">[System.Security.SecureString]<br>
</span>A SecureString can be read in from the terminal with <span class="code"><a href="read-host.html">Read-Host</a> -AsSecureString</span></p>
<p><span class="code">PSCredential</span> - This class is composed of username (<span class="code">string</span>) plus a password (<span class="code">SecureString</span>). This is the type that most cmdlets require for specifying credentials. [<span class="code">System.Management.Automation.PSCredential</span>]</p>
</blockquote>
<p>Whenever possible do not ask users for a password, use integrated Windows authentication instead. <br>
Passwords should not be saved to disk or the registry as plain text. Use a plaintext representation of SecureString. </p>
<p>
  <b>Examples</b></p>
<p>Get a credential and save into a variable:</p>
<p><span class="code">PS C:\&gt; $ss64Cred = Get-Credential</span><br>
  <br>
  Use this credential (stored in the variable <span class="code">$ss64Cred</span>) to run a <a href="get-wmiobject.html">Get-WmiObject</a> command:</p>
<p class="code">PS C:\&gt; Get-WmiObject Win32_DiskDrive -ComputerName Server64 -Credential $ss64Cred</p>
<p>An alternative is to embed the Get-Credential cmdlet in an <a href="syntax-operators.html">expression</a>:</p>
<p class="code">PS C:\&gt; Get-WmiObject Win32_DiskDrive -ComputerName Server64 -Credential <b>(</b>get-credential Domain01\User64<b>)</b></p>
<p>Create PSCredentials for the user (<span class="code">user64</span>) with the (SecureString) password held  in the variable <span class="code">$sec_password</span>:</p>
<p class="code">$UserName = "Domain\User64"<br>
$Credentials = New-Object System.Management.Automation.PSCredential `<br>
&nbsp;&nbsp;&nbsp; -ArgumentList $UserName, $sec_password</p>
<p>Display the password from a PSCredential object using the GetNetworkCredential() method: </p>
<p class="code">PS C:\&gt; $PlainPassword = $Credentials.GetNetworkCredential().Password </p>
<p class="quote"><i>#Please allow me to introduce myself I'm a man of wealth and taste# ~ The Rolling Stones </i></p>
<p><b>Related:</b></p>
<p><a href="convertfrom-securestring.html">ConvertFrom-SecureString</a> - Convert a secure string into an encrypted standard string.<br>
<a href="convertto-securestring.html">ConvertTo-SecureString</a> - Convert an encrypted standard string into a secure string.<br>
<a href="get-authenticodesignature.html">Get-AuthenticodeSignature</a> - Get the signature object associated with a file</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-credential.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

