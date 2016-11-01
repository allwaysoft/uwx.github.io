---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1><a href="netdom.html">NETDOM</a> Add   (Windows Server 2003/2008/R2/2012 + Windows 7/8)</h1>
<p>Add a workstation or server account to the domain.</p>
<pre><i>Syntax</i>
      <a href="netdom.html">NETDOM</a> ADD <i>machine</i> [/Domain:<i>domain</i>]
         [/UserD:<i>user</i>] [/PasswordD:[<i>password</i> | *]]
            [/Server:<i>server</i>] [/OU:<i>ou_path</i>] [/DC] [/SecurePasswordPrompt]

Key:
   <i>Machine</i>     The name of the computer to be added

   /Domain     The domain in which to create the machine account

   /UserD      User account used to make the connection with the domain
               specified by the /Domain argument

   /PasswordD  Password of the user account specified with /UserD.
               Specifying a * will prompt for the password.

   /Server     Name of a specific domain controller that should be used to perform
               the Add. This option cannot be used with the /OU option.

   /OU         Organizational unit under which to create the machine account.
               To use this argument, you must be run the command directly on a domain
               controller for the specified domain.
               <i>ou_path</i> must be a fully qualified (<a href="http://www.ietf.org/rfc/rfc1779.txt">RFC 1779</a>) DN for the OU.
               If this argument is ommited, the account will be created
               under the default OU.

   /DC         Create a Domain Controller machine account.
               This option cannot be used with the /OU option. 

   /SecurePasswordPrompt 
               Use secure credentials popup to specify credentials.
               Use when smartcard credentials need to be specified.
               This only takes effect when the password is supplied as *</pre>
<p>Netdom options can be abbreviated to just the UPPER case letters, e.g. <span class="code">/PasswordD</span> can be supplied as just <span class="code">/PD</span> </p>
<p class="quote"><i>“Everything you add to the truth subtracts from the truth” ~ Aleksander Solzhenitsyn</i></p>
<p><b> Related:</b></p>
<p><a href="netdom-remove.html">NETDOM REMOVE</a> - Remove a workstation or server from the domain.<br>
<a href="https://support.microsoft.com/kb/216393">Q216393</a> - Resetting computer accounts in Windows<br>
PowerShell: <a href="../ps/new-adcomputer.html">New-ADComputer</a> - Create a new AD computer.</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="netdom-add.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

