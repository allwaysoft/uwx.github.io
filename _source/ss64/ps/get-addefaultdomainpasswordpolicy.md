---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ADDefaultDomainPasswordPolicy</h1> 
<p>Get the default password policy for an Active Directory domain.</p>
<pre>Syntax
      Get-ADDefaultDomainPasswordPolicy [[-Current] {LocalComputer | LoggedOnUser}]
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Server <i>string</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Get-ADDefaultDomainPasswordPolicy [-Identity] <i>ADDefaultDomainPasswordPolicy</i>
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

   -Current <i>ADCurrentDomainType</i>
       Whether to return the domain of the local computer or the current logged on user.
       Possible values:
          LocalComputer or 0
          <u>LoggedOnUser</u>  or 1

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

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Get-ADDefaultDomainPasswordPolicy  gets the default password policy for a domain.
The <span class="code">-Identity</span> parameter specifies the Active Directory domain. </p>
<p><b>Examples</b></p>
<p>Get the default domain password policy from current logged on user domain:</p>
<p><span class="code">PS C:\&gt; Get-ADDefaultDomainPasswordPolicy</span></p>
<p>Get the default domain password policy from current local computer:</p>
<p><span class="code">PS C:\&gt; Get-ADDefaultDomainPasswordPolicy -Current LocalComputer</span></p>
<p>Get the default domain password policy from a given domain:</p>
<p><span class="code">PS C:\&gt; Get-ADDefaultDomainPasswordPolicy -Identity SS64.com</span></p>
<p>Get the default domain password policy objects from all the domains in the forest:</p>
<p><span class="code">PS C:\&gt; (Get-ADForest -Current LoggedOnUser).Domains | %{ Get-ADDefaultDomainPasswordPolicy -Identity $_ }</span></p>
<p class="quote"><i>“Find purpose, the means will follow” ~ Mohandas Gandhi</i></p>
<p><b>Related:</b></p>
<p> <a href="set-addefaultdomainpasswordpolicy.html">Set-adDefaultDomainPasswordPolicy</a>  - Modify the default password policy for an AD domain</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

