---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADOrganizationalUnit</h1> 
<p>Modify an Active Directory organizational unit.</p>
<pre>Syntax
      Remove-ADOrganizationalUnit [-Identity] <i>ADOrganizationalUnit</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Partition <i>string</i>] [-Recursive] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       The user account credentials to use to perform this task.
       The default credentials are those of the currently logged on user unless the
       cmdlet is run from an Active Directory PowerShell provider drive.
       If the cmdlet is run from such a provider drive, the account associated with the drive is the default.

       Type a user name, such as "User64" or "Domain64\User64" or specify a
       PSCredential object such as one generated by <a href="get-credential.html">Get-Credential</a> 

       If a user name is specified, the cmdlet will prompt for a password.

   -Identity <i>ADOrganizationalUnit</i>
       An AD organizational unit object. Most often this will be a Distinguished Name (e.g. OU=demo,DC=SS64,DC=com)
       The identity may also be given as a GUID, Security Identifier or sAMAccountName.

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       The AD OU object may also be passed through the pipeline or set via a variable.

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       <i>string</i> must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter.
       Examples:
         -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=COM"
         -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=COM"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -Recursive
       Remove the OU and any child items it contains.
       Specify this parameter to remove an OU that is not empty.
       This will remove all child objects even any that have been marked with 'ProtectedFromAccidentalDeletion'.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-ADOrganizationalUnit  removes an Active Directory Organizational Unit.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the organizational unit to remove. Identify an organizational unit by its 
distinguished name (DN) or GUID. Alternatively set the -Identity parameter to an object <a href="syntax-variables.html">variable</a> or pass an object through the <a href="syntax-pipeline.html">pipeline</a>. e.g. from <a href="get-adorganizationalunit.html">Get-adOrganizationalUnit</a><br>
<br>
If the object you specify to remove has child objects, you must specify the <span class="code">-Recursive</span> parameter. <br>
<br>
If the 'ProtectedFromAccidentalDeletion' property of the OU object is set to true, the cmdlet returns a terminating error. </p>
<p><b>Examples</b></p>
<p>Remove an OU and all of it's children.:</p>
<p><span class="code">PS C:\&gt; Remove-ADOrganizationalUnit -Identity "OU=Accounting,DC=SS64,DC=com" -Recursive</span></p>
<p>Removes an OU using it's objectGUID as the Identity while suppressing the confirmation prompt:</p>
<p><span class="code">PS C:\&gt; Remove-ADOrganizationalUnit -Identity "1b228aa5-2c14-48b8-ad8a-2685dc22e055" -confirm:$false</span></p>
<p>Remove the EaME OrganizationalUnit:</p>
<p class="code">PS C:\&gt; Remove-ADOrganizationalUnit -Identity "OU=EaME,DC=SS64,DC=com"</p>
<p>Remove an OU from an LDS instance:</p>
<p class="code">PS C:\&gt; Remove-ADOrganizationalUnit -Identity "OU=Managed,DC=AppNC" -server "SS64-SRV1:60000" -confirm:$false</p>
<p class="quote"><i>“I never saw an oft-transplanted tree, Nor yet an oft-removed family, That throve so well as those that settled be” ~ Benjamin Franklin</i></p>
<p><b>Related:</b></p>
<p> <a href="get-adorganizationalunit.html">Get-adOrganizationalUnit</a> - Get one or more AD OUs<br>
<a href="new-adorganizationalunit.html">New-adOrganizationalUnit</a> - Create a new AD OU<br>

<a href="set-adorganizationalunit.html">Set-adOrganizationalUnit</a> - Modify an AD OU</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-adorganizationalunit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
