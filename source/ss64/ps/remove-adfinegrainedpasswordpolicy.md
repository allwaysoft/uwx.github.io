---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADFineGrainedPasswordPolicy</h1> 
<p>Remove an AD fine-grained password policy.</p>
<pre>Syntax
      Remove-ADFineGrainedPasswordPolicy [-Identity] <i>ADFineGrainedPasswordPolicy</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Server <i>string</i>] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Identity <i>ADFineGrainedPasswordPolicy</i>
       Specify an AD fine-grained password policy object by providing one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: CN=Strict Password Policy,CN=Password Settings Container,CN=System,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c4d2e-f72d-4d20-8a78-030d69495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-5165297888-301467370-576410423-1803
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: PasswordPolicyLevel1

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

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
<p>Remove-ADFineGrainedPasswordPolicy  removes an AD fine grained password policy.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD fine grained password policy to remove. Identify a fine grained password policy by its distinguished name, or GUID. You can also set the -Identity parameter to a fine grained password object <a href="syntax-variables.html">variable</a>,  or pass an object through the PowerShell <a href="syntax-pipeline.html">pipeline</a>.<br>
<br>
<b>Examples</b></p>
<p>Remove the Fine Grained Password Policy object named 'MyPolicy':</p>
<p><span class="code">PS C:\&gt; Remove-ADFineGrainedPasswordPolicy MyPolicy</span></p>
<p>Remove the Fine Grained Password Policy object with DistinguishedName 'CN=MyPolicy,CN=Password Settings Container,CN=System,DC=SS64,DC=com:</p>
<p><span class="code">PS C:\&gt; Remove-ADFineGrainedPasswordPolicy -Identity 'CN=MyPolicy,CN=Password Settings Container,CN=System,DC=SS64,DC=com'</span></p>
<p>Remove all File Grained Password Policy objects that contain user in their names.<br>
<br>
<span class="code">PS C:\&gt; Get-ADFineGrainedPasswordPolicy -Filter {Name -like "*user*"} | Remove-ADFineGrainedPasswordPolicy</span></p>
<p class="quote"><i> “One of the most wonderful things in nature is a glance of the eye; it transcends speech; it is the bodily symbol of identity” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b></p>
<p><a href="set-adfinegrainedpasswordpolicy.html">Set-adFineGrainedPasswordPolicy</a> - Modify an AD fine-grained password policy.<br>
<a href="get-adfinegrainedpasswordpolicy.html">Get-adFineGrainedPasswordPolicy</a> - Get one or more AD fine-grained password policies.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-adfinegrainedpasswordpolicy.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

