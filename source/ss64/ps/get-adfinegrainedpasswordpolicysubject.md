---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ADFineGrainedPasswordPolicy<b>Subject</b></h1> 
<p>Get the users and groups to which a fine grained password policy is applied.</p>
<pre>Syntax
      Get-ADFineGrainedPasswordPolicySubject [-Identity] <i>ADFineGrainedPasswordPolicy</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Server <i>string</i>] [<a href="common.html"><i>CommonParameters</i></a>]

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

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Get- ADFineGrainedPasswordPolicySubject  gets the users and groups that are subject to a <i>Fine-Grained Password Policy</i>.<br>
<br>The <span class="code">-Identity</span> parameter specifies the <i>Fine-Grained Password Policy</i>. Identify a fine grained password policy
by its distinguished name, GUID or name. The -Identity parameter may also be set to a <i>Fine-Grained Password Policy</i> object variable, or passed through the <a href="syntax-pipeline.html">pipeline</a> using for example <a href="get-adfinegrainedpasswordpolicy.html">Get-ADFineGrainedPasswordPolicy</a>.<br>
<br><b>Example</b></p>
<p>Get the <i>Fine Grained Password Policy</i> subject of the Password Policy named 'SS64PasswordSettings':</p>
<p><span class="code">PS C:\&gt; Get-ADFineGrainedPasswordPolicySubject -Identity SS64PasswordSettings | <a href="format-table.html">FT</a> Name,ObjectClass,DistinguishedName -AutoSize</span></p>
<p class="quote"><i>“One of the most wonderful things in nature is a glance of the eye; it transcends speech; it is the bodily symbol of identity” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b></p>
<p><a href="add-adfinegrainedpasswordpolicysubject.html">Add-adFineGrainedPasswordPolicySubject</a> - Apply a fine-grained password policy to one more users and groups<a href="get-adfinegrainedpasswordpolicysubject.html"><br>
</a><a href="remove-adfinegrainedpasswordpolicysubject.html">Remove-adFineGrainedPasswordPolicySubject</a> - Remove one or more users from a fine-grained policy</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-adfinegrainedpasswordpolicysubject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

