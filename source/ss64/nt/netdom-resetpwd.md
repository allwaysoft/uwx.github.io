---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> ResetPWD   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Reset the machine account password for a domain controller</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> RESETPWD /Server:<i>domain_controller</i>
         /UserD:<i>user</i> /PasswordD:[<i>password</i> | *]
            [/SecurePasswordPrompt]

Key:

   <i>Server</i>      The name of a specific domain controller that should have its
               machine account password reset.

   /UserD      User account used to make the connection with the domain
               controller specified by the /Server argument.

   /PasswordD  Password of the user account specified By /UserD.
               Specifying a * will prompt for the password.

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *</pre>
<p>Currently there is no support for resetting the machine password of a remote machine or a member server. <br>
All parameters must be specified.</p>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordD</span> can be supplied as just <span class="code">/PD</span> </p>
<p><i class="quote">“You can’t convince a believer of anything; for their belief is not based on evidence, it’s based on a deep seated need to believe” ~ Carl Sagan</i><br>
<br><b>Related:</b></p>
<p><a href="netdom-reset.html">NETDOM RESET</a> - Reset the secure connection between a workstation and a DC</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-resetpwd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

