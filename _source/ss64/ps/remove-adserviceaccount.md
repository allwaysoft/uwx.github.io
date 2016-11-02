---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADServiceAccount</h1> 
<p>Remove an Active Directory service account.</p>
<pre>Syntax
      Remove-ADServiceAccount [-Identity] <i>ADServiceAccount</i>
         [-AuthType {Negotiate | Basic}] [-Credential <i>PSCredential</i>]
            [-Partition <i>string</i>] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "MSAccount64" or "Domain01\MSAccount64" or a <a href="get-credential.html">PSCredential</a> object.

   -Identity <i>ADServiceAccount</i>
       An AD service account object, specified with one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: CN=WebAccount,CN=ManagedServiceAccounts, DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c3d2e-f72d-4d20-8a88-030d99495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-3165297888-301567370-576410423-1103
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: WebAccount$

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

       This example shows how to set the parameter to a distinguished name.
          -Identity  "CN=WebAccount,CN=ManagedServiceAccounts,DC=corp,DC=SS64,DC=com"

       This example shows how to set this parameter to a group object instance named "accountInstance".
          -Identity $accountInstance

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       <i>string</i> must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter. 
       Examples:
         -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
         -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          
       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name or Fully qualified directory server name (with or without port number).

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-ADServiceAccount  removes an AD service account. This cmdlet does not make changes to any computers that use the service account. After this operation, the service account is no longer hosted on the 
target computer but still exists in the directory.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD service account to remove. Identify a service account
by its distinguished name (DN), GUID, security identifier (SID) or security accounts manager (SAM) account name. Alternatively set the -Identity parameter to a service account object <a href="syntax-variables.html">variable</a>, or pass a service account object through the <a href="syntax-pipeline.html">pipeline</a>. For example, from <a href="get-adserviceaccount.html">Get-ADServiceAccount</a>. <br>
<br>
Note: Removing the service account is a different operation than uninstalling the service account locally.</p>
<p><b>Examples</b></p>
<p>Remove the service account named 'SS64':</p>
<p><span class="code">PS C:\&gt; Remove-ADServiceAccount -Identity SS64</span></p>
<p>Remove all service accounts with names that start with 'SQL':</p>
<p><span class="code">PS C:\&gt; Get-ADServiceAccount -Filter {Name -like 'SQL*'} | Remove-ADServiceAccount</span></p>
<p class="quote"><i>“If you want to know the end, look at the beginning” ~ African Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="new-adserviceaccount.html">New-adServiceAccount</a> - Create a new AD service account<br>
<a href="set-adserviceaccount.html">Set-adServiceAccount</a> - Modify an AD service account<br>
<a href="uninstall-adserviceaccount.html">Uninstall-adServiceAccount</a> - Uninstall an AD service account from a computer<br>
<a href="remove-adcomputerserviceaccount.html">Remove-adComputerServiceAccount</a> Remove one or more service accounts from a computer<br>
<a href="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=2852">Active Directory Management Gateway Service</a> - Required to manage  AD Domain Services with PowerShell.<br>
<a href="http://technet.microsoft.com/en-us/library/dd548356%28WS.10%29.aspx">Service Accounts Step-by-Step Guide</a> - Configure and administer Managed Service Accounts in Windows 2008.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-adserviceaccount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

