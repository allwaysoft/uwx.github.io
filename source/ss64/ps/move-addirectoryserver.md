---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Move-ADDirectoryServer</h1>
<p>Move the operation master role to an AD directory server.</p>
<pre>Syntax
      Move-ADDirectoryServer [-Identity] <i>ADDirectoryServer</i>
         [-Site] <i>ADSite</i> [-AuthType {Negotiate | Basic}] [-Credential <i>PSCredential</i>]
            [-Server <i>string</i>] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use:
          Negotiate or 0
          Basic or 1
       A Secure Sockets Layer (SSL) connection is required for the Basic authentication method.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Force

   -Identity <i>ADDirectoryServer</i>
       An AD server object:

        Distinguished Name of the NTDS Settings object
          Example: CN=NTDS Settings,CN=DC064,CN=Servers,CN=eame,CN=Sites,CN=Configuration,DC=corp,DC=SS64,DC=com

        Distinguished Name of the server object that represents the directory server
          Example: CN=DC064,CN=Servers,CN=eame,CN=Sites,CN=Configuration,DC=corp,DC=SS64,DC=com

        GUID (objectGUID) of server object under the configuration partition
          Example: a7ca1c0d-9a72-497b-a1c2-209104124102

        GUID (objectGUID) of NTDS settings object under the configuration partition
          Example: 768c44de-f72d-66e0-8a88-0523ca495f20

       The identifier in parentheses is the LDAP display name for the attribute.

       The cmdlet searches the default naming context or partition to find the object.
       If the identifier given is a DN, the partition to search will be computed from that DN.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also accept an object through the pipeline.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be any of: AD Lightweight Domain Services,
       AD Domain Services or Active Directory Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Site <i>ADSite</i>
       The new site for the directory server.
       Identify the site by one of the following property values.

          Distinguished name (DN)
            Example: CN=eame,CN=Sites,CN=Configuration,DC=corp,DC=SS64,DC=com
          GUID (ObjectGUID)
           Example: 1db4e219-78df-437c-a160-bf2a734fff79
          Name (name)
            Example: eame

       The identifier in parentheses is the LDAP display name for the attribute.

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Move-ADDirectoryServer  moves a directory server in Active Directory to a new site within the same domain.</p>
<p>The <span class="code">-Identity</span> parameter specifies the  directory server to move. Specify a directory server object with the DN or objectGUID of the NTDS Settings object or the server object that represents the directory server. 
Alternatively set the -Identity parameter to a directory server object <a href="syntax-variables.html">variable</a> or by passing an object through the pipeline. For example, from <a href="get-addomaincontroller.html">Get-ADDomainController</a></p>
<p><b>Examples</b></p>
<p>Move the domain controller "SS64-DC5" to the site "Bernastrasse  Berne":</p>
<p class="code">PS C:\&gt; Move-ADDirectoryServer -Identity "SS64-DC5" -Site "Bernastrasse Berne"</p>
<p>Move all Read Only Domain Controllers to the site "RODC-Bernastrasse":</p>
<p class="code">PS C:\&gt; Get-ADDomainController -Filter {IsReadOnly -eq $true} | Move-ADDirectoryServer -site "RODC-Bernastrasse"</p>
<p class="quote"><i>“The horse, the horse! The symbol of surging potency and power of movement, of action” ~ D.H. Lawrence</i></p>
<p><b>Related:</b></p>
<p><a href="move-addirectoryserveroperationmasterrole.html">Move-adDirectoryServerOperationMasterRole</a> - Move the operation master (<abbr title="Flexible Single Master Operations">FSMO</abbr>) roles to an AD domain controller.<a href="set-addomain.html"><br>
</a><a href="set-addomainmode.html">Set-adDomainMode</a> - Set the domain functional level for an AD domain</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="move-addirectoryserver.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

