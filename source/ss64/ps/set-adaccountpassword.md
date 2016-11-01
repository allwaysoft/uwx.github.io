---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADAccountPassword</h1> 
<p>Modify the password of an Active Directory account.</p>
<pre>Syntax
      Set-ADAccountPassword [-Identity] <i>ADAccount</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-NewPassword <i>SecureString</i>] [-OldPassword <i>SecureString</i>]
               [-Partition] [-PassThru] [-Reset]
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

   -NewPassword <i>SecureString</i>
       A new password. This value is stored as an encrypted string.

   -OldPassword <i>SecureString</i>
       Supply the most recent password. This value is processed as a encrypted string.

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current
       directory server. The cmdlet searches this partition to find the object defined by
       the -Identity parameter. 
       The following two examples show how to specify a value for this parameter.
          -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          
       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -PassThru
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Reset
       Specifies to reset the password on an account.
       To use this parameter, you must set the -NewPassword parameter.
       You do not need to specify the -OldPassword parameter.

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
<p>Set-ADAccountPassword  sets the password for a user, computer or service account.
The <span class="code">-Identity</span> parameter specifies the Active Directory account to modify. </p>
<p> To change a password both the <span class="code">-OldPassword</span> and the <span class="code">-NewPassword</span> parameters must be specified unless <span class="code">-Reset</span> is used. When  <span class="code">-Reset</span> is specified, the <span class="code">-OldPassword</span> parameter is not required.</p>
<p><b>Examples</b></p>
<p>Set the password of a user account using the DistinguishedName (prompt for old and new password):</p>
<p><span class="code">PS C:\&gt; Set-ADAccountPassword -Identity JMarbles</span></p>
<p>Prompt the user for a new password, store the password in a temporary variable ($newPassword), and then use it to reset the password:</p>
<p><span class="code">PS C:\&gt; $newPassword = (Read-Host -Prompt "Provide New Password" -AsSecureString)<br>
PS C:\&gt; Set-ADAccountPassword -Identity JMarbles -NewPassword $newPassword -Reset</span></p>
<p>Set the password of a user account to 'p@ssw0rd' using the  DistinguishedName:</p>
<p><span class="code">PS C:\&gt; Set-ADAccountPassword 'CN=JMarbles,OU=Boston,DC=SS64,DC=com' -Reset -NewPassword (ConvertTo-SecureString -AsPlainText "p@ssw0rd" -Force)</span></p>
<p>Set the password of a user account to 'p@ssw0rd2' using the  SamAccountName:</p>
<p><span class="code">PS C:\&gt; Set-ADAccountPassword -Identity JMarbles -OldPassword (ConvertTo-SecureString -AsPlainText "0ldPaZZw0rd" -Force)
-NewPassword (ConvertTo-SecureString -AsPlainText "p@ssw0rd2" -Force)</span></p>
<p class="quote"><i>“We must plan for freedom, and not only for security, if for no other reason than that only freedom can make security secure” ~ Karl Popper</i></p>
<p><b>Related:</b></p>
<p><a href="set-adaccountexpiration.html">Set-adAccountExpiration</a> - Set the expiration date for an AD account<br>
<a href="enable-adaccount.html">Enable-adAccount</a> - Enable an Active Directory account<br>
<a href="reset-adserviceaccountpassword.html">Reset-adServiceAccountPassword</a> - Reset the service account password for a computer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-adaccountpassword.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

