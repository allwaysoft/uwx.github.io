---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>ConvertFrom-SecureString</h1> 
<p>Convert a secure string into an encrypted standard string.</p>
<pre>Syntax
      ConvertFrom-SecureString [-secureString] <i>SecureString</i> 
         [[<b>-secureKey</b>] <i>SecureString</i>]
            [<i>CommonParameters</i>]
    
      ConvertFrom-SecureString [-secureString] <i>SecureString</i> 
         [<b>-key</b> <i>Byte</i>[]]
            [<i>CommonParameters</i>]

key
   -secureString SecureString
       The secure string to convert to an encrypted standard string.
        
   -secureKey SecureString
       The encryption key as a secure string,
       this is converted to a byte array before being used as the key.
        
   -key <i>Byte</i>
       The encryption key as a byte array.
        
   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Create a secure string by typing at the command prompt.</p>
<p><span class="code">PS C:\&gt; $securestring = read-host -asSecureString</span><br>
  <br>
  Convert a secure string stored in a variable to an encrypted standard string. The resulting encrypted standard string  can be displayed by typing $standardstring:</p>
<p class="code">PS C:\&gt; $my_encrypted_string = Convertfrom-SecureString  $securestring</p>
<p>Convert a secure string using the Rijndael algorithm, the key is an array of 24 digits, all of which are less than 256, (24 * 8 bit bytes = 192 bits) </p>
<p class="code">PS C:\&gt; $key = (3,42,2,3,100,34,254,222,1,1,2,23,42,54,33,233,1,64,2,7,6,5,35,43)<br>
PS C:\&gt; $standardstring = convertfrom-securestring $securestring -key $key</p>
<p class="quote"><i>“The one permanent emotion of the inferior man is fear of the unknown, the complex, the inexplicable.
What he wants beyond everything else is safety” ~  H. L. Mencken</i></p>
<p><b>Related:</b></p>
<p> <a href="convertto-securestring.html">ConvertTo-SecureString</a><br>
<a href="get-credential.html">Get-Credential</a> - Get a security credential (username/password)<br>
<a href="read-host.html">Read-Host</a> -  Read a line of input from the host console.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="convertfrom-securestring.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

