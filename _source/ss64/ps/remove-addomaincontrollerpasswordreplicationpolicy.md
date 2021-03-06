---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADDomainControllerPasswordReplicationPolicy</h1> 
<p>Remove users, computers and groups from the allowed or denied list of a read-only domain controller password replication policy.</p>
<pre>Syntax
      Remove-ADDomainControllerPasswordReplicationPolicy -AllowedList <i>ADPrincipal</i>[]
         [-Identity] <i>ADDomainController </i>[-AuthType {<u>Negotiate</u> | Basic}]
            [-Credential <i>PSCredential</i>] [-PassThru] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Remove-ADDomainControllerPasswordReplicationPolicy -DeniedList <i>ADPrincipal</i>[]
         [-Identity] &lt;ADDomainController&gt; [-AuthType {<u>Negotiate</u> | Basic}]
            [-Credential <i>PSCredential</i>] [-PassThru] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AllowedList <i>ADPrincipal</i>[]
       Specify the users, computers, groups, or other accounts to remove from the list of 
       accounts allowed to replicate their passwords to this Read-only domain controller (RODC).
       Specify more than one value by using a comma-separated list.
       To identify each user, computer, or group, use one of the following property values:
          Distinguished name
              Example:  CN=ScottHeron,CN=employees,CN=Users,DC=SS64,DC=com
          GUID  (objectGUID)
              Example:  599c3d2e-f72d-4d20-8a88-030d99495f20
          Security identifier (objectSid)
              Example:  S-1-5-21-3165297888-301567370-576410423-1103
          SAM account name (sAMAccountName)
              Example:  ScottHeron

   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -DeniedList <i>ADPrincipal</i>[]
       Specify the users, computers, groups, or other accounts denied to replicate
       their passwords this Read-only domain controller (RODC).
       Specify more than one value by using a comma-separated list.
       To identify each user, computer, or group, use one of the following property values:
          Distinguished name
              Example:  CN=ScottHeron,CN=employees,CN=Users,DC=SS64,DC=com
          GUID  (objectGUID)
              Example:  599c3d2e-f72d-4d20-8a88-030d99495f20
          Security identifier (objectSid)
              Example:  S-1-5-21-3165297888-301567370-576410423-1103
          SAM account name (sAMAccountName)
              Example:  ScottHeron

   -Identity <i>ADAccount</i>
       Specify an AD domain object by providing one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: DC=Helvetia,DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c4d2e-f72d-4d20-8a78-030d69495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-5165297888-301467370-576410423-1803
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: Helvetia

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

   -PassThru
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-ADDomainControllerPasswordReplicationPolicy  removes one or more users, computers and groups from 
the allowed or denied list of a read-only domain controller (RODC) password replication policy. The <span class="code">-AllowedList</span> parameters specify the users, computers and groups to remove from the allowed list. Similarly, the <span class="code">-DeniedList</span> parameter specifies the users, computers and groups to remove from the denied list.</p>
<p><b>Examples</b></p>
<p>Remove the users with samAccountNames 'JSmith' and'PJones' from the Allowed list on SS64RODC1:</p>
<p><span class="code">PS C:\&gt; Remove-ADDomainControllerPasswordReplicationPolicy -Identity "SS64RODC1" -AllowedList "JSmith", "PJones"</span></p>
<p>Remove the users with samAccountNames 'JSmith' and'PJones' from the Denied list on SS64RODC1:</p>
<p><span class="code">PS C:\&gt; Remove-ADDomainControllerPasswordReplicationPolicy -Identity "SS64RODC1" -DeniedList "JSmith", "PJones"</span></p>
<p class="quote"><i>“Here’s a rule I recommend. Never practice two vices at once” ~ Tallulah Bankhead</i></p>
<p><b>Related:</b></p>
<p><a href="get-adomaincontrollerpasswordreplicationpolicyusage.html">Get-adDomainControllerPasswordReplicationPolicyUsage</a> - Get the resultant password policy of the specified AD Account on the specified RODC.<br>
<a href="get-adomaincontrollerpasswordreplicationpolicy.html">Get-adDomainControllerPasswordReplicationPolicy</a>  - Get the members of the allowed list or denied list of a RODC's password replication policy.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-addomaincontrollerpasswordreplicationpolicy.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

