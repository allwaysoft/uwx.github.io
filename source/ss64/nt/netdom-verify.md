---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> Verify   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Verify the secure connection between a workstation and a domain
controller.</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> VERIFY <i>machine</i> [/Domain:<i>domain</i>]
         [/UserO:user] [/PasswordO:[password | *]]
            [/SecurePasswordPrompt]

Key:

   <i>machine</i>     The name of the computer whose secure connection is to be verified.

   /Domain     The domain with which to verify the secure connection.

   /UserO      User account used to make the connection with the machine to be<br>               verified.

   /PasswordO  Password of the user account specified By /UserO.
               Specifying a * will prompt for the password.

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *</pre>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordO</span> can be supplied as just <span class="code">/PO</span></p>
<p><i class="quote">“Eternity is not something that happens after you are dead. It's going on all the time. We're in it now” ~ Charlotte Perkins Gilman</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="netdom-reset.html">NETDOM RESET</a> - Reset the secure connection between a workstation and a DC</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-verify.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
