---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> Remove   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Remove a workstation or server from the domain.</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> REMOVE <i>machine</i> [/Domain:<i>domain</i>]
         [/UserD:<i>user</i>] [/PasswordD:[<i>password</i> | *]]
            [/UserO:<i>user</i>] [/PasswordO:[<i>password</i> | *]]
               [/REBoot[:<i>Time_in_seconds</i>]] [/Force]
                  [/SecurePasswordPrompt]

Key:

   <i>machine</i>     The name of the computer to be removed

   /Domain     The domain in which to remove the machine 

   /UserD      User account used to make the connection with the Domain
               specified by the /Domain argument

   /PasswordD  Password of the user account specified By /UserD.
               Specifying a * will prompt for the password.

   /UserO      User account used to make the connection with the Machine to be
               removed.

   /PasswordO  Password of the user account specified By /UserO.
               Specifying a * will prompt for the password.

   /Force      Force the unjoin of the machine from the domain even if the 
               domain is not found or does not contain the matching computer 
               object.

   /REBoot     Shutdown and automatically reboot the machine after the remove
               has completed.  The number of seconds before automatic shutdown
               can also be provided.  Default = 30 seconds

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *</pre>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordD</span> can be supplied as just <span class="code">/PD</span> </p>
<p><i class="quote">“No amount of time can erase the memory of a good cat, and no amount of masking tape can ever totally remove his fur from your couch” ~ Leo F. Buscaglia</i><br>
<br>
<b>Related:</b><br>
<br>
<a href="netdom-add.html">NETDOM ADD</a> - Add a workstation or server account to the domain</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-remove.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

