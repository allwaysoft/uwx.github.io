---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADFineGrainedPasswordPolicy<b>Subject</b></h1> 
<p>Remove one or more users from a fine grained password policy.</p>
<pre>Syntax
      Remove-ADFineGrainedPasswordPolicySubject [-Identity] <i>ADFineGrainedPasswordPolicy</i>
         [-Subjects] <i>ADPrincipal</i>[] [-AuthType {<u>Negotiate</u> | Basic}]
            [-Credential <i>PSCredential</i>] [-Partition <i>string</i>] [-PassThru]
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
            Example: b7fa5896-7461-476c-a489-a2a839abcd5f
          Security Identifier (objectSid) 
            Example: S-1-5-21-5165297888-301467370-576410423-1803
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: PasswordPolicyLevel1

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
          -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"
          -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"
          
       In many cases, a <a href="partition-defaults.html">default value</a> will be used for the Partition parameter if no value
       is specified.

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Subjects <i>ADPrincipal</i>[]
       One or more users or groups by providing one of the following property values.
       To specify more than one user or group, use a comma-separated list.
          Distinguished Name (DN)
            Example: CN=MikeHsu,CN=Users,DC=corp,DC=SS64,DC=com
          GUID (objectGUID)
            Example: b7fa5896-7461-476c-a489-a2a839abcd5f
          Security Identifier (objectSid)
            Example: S-1-5-21-3165297868-301267370-276410423-1103
          SAM Account Name (sAMAccountName)
            Example: MikeHsu

        The identifier in (parentheses) is the LDAP display name.
        You can also provide objects to this parameter directly.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-ADFineGrainedPasswordPolicySubject  removes one or more global security groups and users from a fine grained password policy.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the <i>Fine-Grained Password Policy</i>,  identified by its distinguished name or GUID. The -Identity parameter may also be set to a <i>Fine-Grained Password Policy</i> object
<a href="syntax-variables.html">variable</a>, or passed through the PowerShell <a href="syntax-pipeline.html">pipeline</a>. For example, using <a href="get-adfinegrainedpasswordpolicy.html">Get-ADFineGrainedPasswordPolicy</a>.<br>
<br>
The <span class="code">-Subjects</span> parameter specifies the users and groups to remove from the password policy. The user or group may be identified by its distinguished name (DN), GUID, security identifier (SID), security accounts manager (SAM) account name, or canonical name. Alternatively specify a User or group object variable,  to
specify more than one, use a comma-separated list.<br>
<br>
<b>Examples</b></p>
<p>  Remove the Fine-Grained Password Policy named 'SS64PasswordSettings' from two users, with SamAccountNames 'xiaoping' and 'MikeHsu':</p>
<p><span class="code">PS C:\&gt; Remove-ADFineGrainedPasswordPolicySubject SS64PasswordSettings -Subjects xiaoping,MikeHsu</span></p>
<p>Remove any subjects that have names ending with 'Ballmer' from the name list on which the Fine-Grained Password Policy named 'SS64PasswordSettings' applies:</p>
<p><span class="code">PS C:\&gt; Get-ADFineGrainedPasswordPolicySubject  SS64PasswordSettings | where {$_.Name -like "*Ballmer"} | Remove-ADFineGrainedPasswordPolicySubject DlgtdAdminsPSO</span></p>
<p class="quote"><i>“Any person who selects a goal in life which can be fully achieved, has already defined his own limitations” ~ Cavett Robert</i></p>
<p><b>Related:</b></p>
<p><a href="add-adfinegrainedpasswordpolicysubject.html">Add-adFineGrainedPasswordPolicySubject</a> - Apply a fine-grained password policy to one more users and groups<a href="get-adfinegrainedpasswordpolicysubject.html"><br>
Get-adFineGrainedPasswordPolicySubject</a> - Get the users and groups to which a fine-grained policy is applied.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-adfinegrainedpasswordpolicysubject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

