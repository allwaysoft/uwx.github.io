---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ADomainControllerPasswordReplicationPolicy</h1> 
<p>Get the members of the allowed list or denied list of a read-only domain controller's password replication policy.</p>
<pre>Syntax
      Get-ADDomainControllerPasswordReplicationPolicy [-Allowed] [-Identity] <i>ADDomainController</i> 
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Server <i>string</i>] [<a href="common.html"><i>CommonParameters</i></a>]

      Get-ADDomainControllerPasswordReplicationPolicy -Denied [-Identity] <i>ADDomainController</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Server <i>string</i>] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -Allowed
       Return the users, computers, and groups from the domain controller allowed list.
 
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Denied
       Return the users, computers, and groups from the domain controller denied list.

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
<p>Get-ADDomainControllerPasswordReplicationPolicy gets the users, computers, service accounts and groups that are members of the applied list or denied list for a read-only domain controller's (RODC) password replication policy.<br>
<br>The <span class="code">-Identity</span> parameter specifies the RODC that uses the allowed and denied lists to apply the password replication policy.</p>
<p>A domain controller may be identified by its GUID, IPV4Address, IPV6Address, DNS host name, the name of the server object that represents the domain controller, the Distinguished Name (DN) of the NTDS settings object or the server object, the GUID of the NTDS settings object or the server 
object under the configuration partition, or the DN of the computer object that represents the domain controller. <br>
<br>The -Identity parameter may also be set to an object <a href="syntax-variables.html">variable</a>  or passed through the <a href="syntax-pipeline.html">pipeline</a>. e.g. from <a href="get-addomaincontroller.html">Get-ADDomainController</a>. <br>
<br>If you specify a <i>writeable</i> Domain Controller for this cmdlet, the cmdlet returns a non-terminating error.</p>
<p><b>Examples</b></p>
<p>Get from an RODC domain controller password replication policy the allowed accounts showing the name and object class of each:</p>
<p><span class="code">PS C:\&gt; Get-ADDomainControllerPasswordReplicationPolicy -Identity "SS64RODC1" -Allowed | ft Name,ObjectClass</span></p>
<p>Get the password replcation policy allowed lists from all RODCs in the domain:</p>
<p><span class="code">PS C:\&gt; Get-ADDomainController -Filter {IsReadOnly -eq $true} | Get-ADDomainControllerPasswordReplicationPolicy -Allowed</span></p>
<p class="quote"><i>“Bliss was it in that dawn to be alive, But to be young was very heaven!” ~ Wordsworth</i></p>
<p><b>Related:</b></p>
<p><a href="remove-addomaincontrollerpasswordreplicationpolicy.html">Remove-adDomainControllerPasswordReplicationPolicy</a>   - RODC PRP Allowed/Denied List.
<br><a href="get-adomaincontrollerpasswordreplicationpolicyusage.html">Get-adDomainControllerPasswordReplicationPolicyUsage</a>  - Get the resultant password policy of the specified
ADAccount on the specified RODC.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-adomaincontrollerpasswordreplicationpolicy.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

