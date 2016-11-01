---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> Move   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Move a workstation or member server to a new domain.</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> MOVE <i>machine</i> /Domain:<i>domain</i> [/OU:<i>ou_path</i>]
         [/UserD:<i>user</i>] [/PasswordD:[<i>password</i> | *]]
            [/UserO:<i>user</i>] [/PasswordO:[<i>password</i> | *]]
               [/UserF:<i>user</i>] [/PasswordF:[<i>password</i> | *]]
                  [/REBoot[:<i>Time_in_seconds</i>]]
                     [/SecurePasswordPrompt]

Key:

   <i>machine</i>     The name of the workstation or member server to be moved.

   /Domain     The domain which the machine should be moved.
               Specify a particular domain controller by entering
                /Domain:domain\dc.
               If a domain controller is specified, you can also
               include the user's domain. For example: /UserD:domain\user

   /UserD      User account used to make the connection with the Domain
               specified by the /Domain argument

   /PasswordD  Password of the user account specified By /UserD.
               Specifying a * will prompt for the password.

   /UserO      User account used to make the connection with the Machine to be
               moved

   /PasswordO  Password of the user account specified By /UserO.
               Specifying a * will prompt for the password.

   /UserF      User account used to make the connection with the machine's
               former domain (with which the machine had been a member before
               the move). Needed to disable the old machine account.

   /PasswordF  Password of the user account specified by /UserF.
               Specifying a * will prompt for the password.

   /OU         Organizational unit under which to create the machine account.
               This must be a fully qualified RFC 1779 DN for the OU.
               If not specified, the account will be created under the default
               organization unit for machine objects for that domain.

   /REBoot     Shutdown and automatically reboot the machine after the Join
               has completed.  The number of seconds before automatic shutdown
               can also be provided.  Default = 30 seconds

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *</pre>
<p>When moving a machine to a new domain, the old computer account in the
former domain is not deleted. If credentials are supplied for the former
domain, the old computer account will be disabled.</p>
<p>Moving a machine to a new domain will create an AD domain account for the
machine if one does not already exist on the new domain.</p>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordD</span> can be supplied as just <span class="code">/PD</span> </p>
<p><i class="quote">“Anger is a great force. If you control it, it can be transmuted into a power which can move the whole world” ~ William Shenstone</i><br>
<br>
<b> Related:</b></p>
<p><a href="netdom-join.html">NETDOM JOIN</a> - Join a workstation or member server to the domain<br>PowerShell: <a href="../ps/move-addirectoryserver.html">Move-ADDirectoryServer</a> - Move the operation master role to an AD directory server.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

