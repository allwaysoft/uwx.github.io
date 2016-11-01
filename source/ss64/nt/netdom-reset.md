---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> Reset   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Reset the secure connection between a workstation and a domain
controller.</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> RESET <i>machine</i> [/Domain:<i>domain</i>] [/Server:<i>server</i>]
             [/UserO:<i>user</i>] [/PasswordO:[<i>password</i> | *]] [/SecurePasswordPrompt]

Key:

   /Domain     The domain with which to establish the secure connection.

   /Server     Name of a specific domain controller that should be used to<br>               establish the secure connection.

   /UserO      User account used to make the connection with the machine to<br>               be reset

   /PasswordO  Password of the user account specified By /UserO.
               Specifying a * will prompt for the password.

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *</pre>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordO</span> can be supplied as just <span class="code">/PO</span> </p>
<p><i class="quote">“I don’t need a lot of money. Simplicity is the answer for me” - Linda McCartney </i><br>
<br>
<b>Related:</b></p>
<p><a href="netdom-verify.html">NETDOM VERIFY</a> - Verify the secure connection between a workstation and a DC</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-reset.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
