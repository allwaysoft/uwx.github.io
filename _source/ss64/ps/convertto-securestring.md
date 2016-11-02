---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>ConvertTo-SecureString</h1> 
<p>Convert   an encrypted standard string into a secure string, can also convert plain text into a secure string.</p>
<pre>Syntax
      ConvertTo-SecureString [-String] <i>String</i> 
         [[<b>-secureKey</b>] <i>SecureString</i>]
            [<i>CommonParameters</i>]
    
      ConvertTo-SecureString [-String] <i>String</i> 
         [<b>-key</b> <i>Byte</i>[]]
            [<i>CommonParameters</i>]

      ConvertTo-SecureString [-String] <i>String</i> 
         [[<b>-asPlainText</b>] [-force]]
            [<i>CommonParameters</i>]

key
   -String <i>SecureString</i>
       The string to convert to a secure string
        
   -secureKey <i>SecureString</i>
       The encryption key as a secure string,
       this is converted to a byte array before being used as the key.
       Valid key lengths are 16, 24, and 32 bytes
        
   -key <i>Byte</i>
       The encryption key as a byte array.
       Valid key lengths are 16, 24, and 32 bytes

   -asPlainText 
       A plain text string to convert to a secure string.
       The text is not encrypted so the input is not protected/confidential
       To use this option, you must also specify -Force
        
    -force 
       Set this to confirm that you understand the security risks of using PlainText

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>If the standard string being converted was encrypted with ConvertFrom-SecureString using a specified key, that same key must be provided as the value of the Key or SecureKey parameter of the ConvertTo-SecureString cmdlet.</p>
<p>To store the data in a file for later use, the secure string can be converted back to an encrypted, standard string using  ConvertFrom-SecureString</p>
<p><b>Examples</b></p>
<p>Create a secure string from plain text:</p>
<pre>PS C:\&gt; $my_secure_password = convertto-securestring "P@ssW0rD!" -asplaintext -force</pre>
<p>  Create a secure string using the Read-Host cmdlet:</p>
<pre>PS C:\&gt; $my_secure_password = read-host -assecurestring</pre>
<p>Save an encrypted string to disc:</p>
<pre>PS C:\&gt; $my_encrypted_string = convertfrom-securestring $my_secure_password -key (1..16)
PS C:\&gt; $my_encrypted_string &gt; password.txt</pre>
<p>Read an encrypted string from disc and convert back to a secure string: </p>
<pre>PS C:\&gt; $my_secure_password = convertto-securestring (get-content password.txt) -key (1..16)</pre>
<p class="quote"><i>“The great strength of the totalitarian state is that it forces those who fear it to imitate it” - Adolf Hitler</i></p>
<p><b>Related:</b></p>
<p> <a href="convertfrom-securestring.html">ConvertFrom-SecureString</a> - Convert a secure string into an encrypted standard string.<br>
<a href="get-credential.html">Get-Credential</a> - Get a security credential (username/password)<br>
<a href="http://powershell.com/cs/blogs/tips/archive/2015/02/02/credential-obfuscator.aspx">A small script that can generate</a> a credential object with the password obfuscated - powershell.com<br>
<a href="read-host.html">Read-Host</a> -  Read a line of input from the host console.<br>
<a href="../nt/cipher.html">CIPER</a> - Encrypt or Decrypt files and folders.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

