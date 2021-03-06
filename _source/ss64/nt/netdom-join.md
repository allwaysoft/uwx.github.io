---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> Join   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Join a workstation or member server to the domain.</p>
<pre>Syntax
      <a href="netdom.html">NETDOM</a> JOIN <i>machine</i> /Domain:domain [/OU:<i>ou_path</i>]
         [/UserD:<i>user</i>] [/PasswordD:[<i>password</i> | *]]
            [/UserO:<i>user</i>] [/PasswordO:[<i>password</i> | *]]
               [/PasswordM:[<i>password</i> | *]]
                  [/ReadOnly] [/REBoot[:<i>Time_in_seconds</i>]]
                     [/SecurePasswordPrompt]

Key:

   <i>machine</i>     The name of the workstation or member server to be joined

   /Domain     The domain which the machine should join.
               Specify a particular domain controller by entering
                /Domain:domain\dc. When /ReadOnly option is used, you 
                must specify a domain controller. 

   /UserD      User account used to make the connection with the Domain of
               the machine to be managed

   /PasswordD  Password of the user account specified By /UserD.
               Specifying a * will prompt for the password.

   /UserO      User account used to make the connection with the Machine to be
               managed

   /PasswordO  Password of the user account specified By /UserO.
               Specifying a * will prompt for the password.

   /OU         Organizational unit under which to create the machine account.
               This must be a fully qualified RFC 1779 DN for the OU.
               If not specified, the account will be created under the default
               organization unit for machine objects for that domain.

   /PasswordM  Password of the pre-created computer account, whose name is 
               specified by the <i>machine</i> parameter.
               Specifying a * will prompt for the password.
               This option must be used with /ReadOnly option.

   /ReadOnly   Perform a domain join using a pre-created computer account and 
               without performing any writes to a domain controller. This 
               option therefore, does not require a writable domain controller.
               You must specify the domain controller (using /Domain option) 
               and computer account password (using /PasswordM option) 
               when the option is used.
               This option cannot be used with the /OU option. 

   /REBoot     Shutdown and automatically reboot the machine after the Join
               has completed.  The number of seconds before automatic shutdown
               can also be provided.  Default = 30 seconds

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials. This
               option should be used when smartcard credentials need to be
               specified. This option is only in effect when the password 
               value is supplied as *</pre>
<p>Windows Professional machines with the <i>ForceGuest</i> setting enabled (which is the
default for machines not joined to a domain during setup) cannot be remotely
administered. Thus the join operation must be run directly on the machine
when the <i>ForceGuest</i> setting is enabled.<br>

<br>
Joining a machine to the domain will create an AD domain account for the
machine if one does not already exist.</p>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordD</span> can be supplied as just <span class="code">/PD</span> </p>
<p><i class="quote">“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us, and the world will be as one” ~ John Lennon</i><br>
<br>
<b> Related:</b><br>
<br>
<a href="netdom-add.html">NETDOM ADD</a> - Add a workstation or server account to the domain<br>
PowerShell: <a href="../ps/add-computer.html">Add-Computer</a> - Add a computer to the domain </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-join.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

