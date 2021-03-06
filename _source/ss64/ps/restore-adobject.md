---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Restore-ADObject</h1> 
<p>Restore an Active Directory object.</p>
<pre>Syntax
      Restore-ADObject [-Identity] <i>ADObject</i> [-AuthType {<u>Negotiate</u> | Basic}]
         [-Credential <i>PSCredential</i>] [-NewName <i>string</i>] [-Partition <i>string</i>]
            [-PassThru] [-Server <i>string</i>] [-TargetPath <i>string</i>]
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

   -Identity <i>ADObject</i>
       An AD object. Most often this will be a Distinguished Name (e.g. CN=sample1,OU=demo,DC=SS64,DC=com)
       The identity may also be given as a GUID.

       Derived types, such as the following are also accepted:
          [Microsoft.ActiveDirectory.Management.]
            ADGroup,ADUser,ADComputer,ADServiceAccount,ADFineGrainedPasswordPolicy,ADDomain

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       The ADObject may also be passed through the pipeline or set via a variable.

   -NewName <i>string</i>
       The new name of the object.
       This parameter sets the Name property of the AD object.

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       <i>string</i> must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter.
       Examples:
         -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"
         -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -PassThru
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.
 
   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)

   -TargetPath <i>string</i>
       The new location for the object.
       This location must be the path to a container or organizational unit.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Restore-ADObject  restores a deleted Active Directory object. <br>
<br>
The <span class="code">-NewName</span> parameter specifies the new name for the restored object. If the -NewName parameter is not specified, the last known name  is used (msDS-lastKnownRDN). </p>
<p>The <span class="code">-TargetPath</span>parameter specifies the new location for the restored object. If the -TargetPath is not specified, the "lastKnownParent" is used.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD object to restore. Identify an object with its distinguished name (DN) or GUID or set the -Identity parameter to an object <a href="syntax-variables.html">variable</a> or through the PowerShell <a href="syntax-pipeline.html">pipeline</a>. <br>
<span class="code"><a href="get-adobject.html">Get-ADObject</a>  -IncludedeDeletedObjects</span> will return the distinguished names of deleted objects.</p>
<p><b>Examples</b></p>
<p>Find a deleted user whose SamAccountName is GungiPaterson, and restore it:</p>
<p><span class="code">PS C:\&gt; Get-ADObject -Filter 'samaccountname -eq "GungiPaterson"' -IncludeDeletedObjects | Restore-ADObject</span></p>
<p>Restore an AD-LDS object using its ObjectGUID:</p>
<p><span class="code">PS C:\&gt; Restore-ADObject  -Identity 'a5dcceeb-76dc-4550-ad76-f31a50aeb2ed' -Server server64:50000</span></p>
<p class="quote"><i>“There are different kinds of justice. Retributive justice is largely Western. The African understanding is far more restorative - not so much to punish as to redress or restore a balance that has been knocked askew" ~ Desmond Tutu</i></p>
<p><b>Related:</b></p>
<p><a href="get-adobject.html">Get-adObject</a>  - Get one or more AD objects<br>
<a href="move-adobject.html">Move-adObject</a> - Move an AD object or container  to a different container or domain. <br>
<a href="new-adobject.html">New-adObject</a> - Create an AD object. <br>
<a href="remove-adobject.html">Remove-adObject</a> - Remove an AD object.<br>
<a href="rename-adobject.html">Rename-adObject</a> - Change the name of an AD object. <br>

<a href="set-adobject.html">Set-adObject</a> - Modify an AD object.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="restore-adobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
