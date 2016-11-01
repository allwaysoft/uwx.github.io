---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Clear-ADAccountExpiration</h1> 
<p>Clear the expiration date for an Active Directory account.</p>
<pre>Syntax
      Clear-ADAccountExpiration [-Identity] <i>ADAccount</i>
        [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
           [-Partition <i>string</i>] [-PassThru] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

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

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current
       directory server. The cmdlet searches this partition to find the object defined by
       the -Identity parameter. 
       The following two examples show how to specify a value for this parameter.
          -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          
       In many cases, a <a href="partition-defaults.html">default value</a> will be used for the Partition parameter if no value
       is specified.

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
<p><span class="code">Clear-ADAccountExpiration</span>  clears the expiration date for an Active Directory user or computer account. When the expiry date for an account is cleared, the account does not expire. The <span class="code">-Identity </span>parameter specifies the user or computer account to modify.</p>
<p><b>Examples</b></p>
<p>Clear the account expiration date for the user with SamAccountName: TommyEllis:</p>
<p><span class="code">PS C:\&gt; Clear-ADAccountExpiration -Identity TommyEllis</span></p>
<p>Clear the account expiration date for the user with DistinguishedName: "CN=TommyEllis,DC=AppNC" on the AD LDS instance: "SS64SVR1:60000"</p>
<p><span class="code">PS C:\&gt; Clear-ADAccountExpiration -Identity "CN=TommyEllis,DC=AppNC" -server "SS64SVR1:60000"</span></p>
<p><i>“Your vision will become clear only when you look into your heart. Who looks outside, dreams. Who looks inside, awakens” - Carl Gustav Jung</i></p>
<p><b>Related:</b></p>
<p><a href="set-adaccountexpiration.html">Set-adAccountExpiration</a> - Set the expiration date for an AD account.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="clear-adaccountexpiration.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

