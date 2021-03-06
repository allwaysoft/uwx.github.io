---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ADComputerServiceAccount</h1>
<p>Get the service accounts that are hosted by an AD computer.</p>
<pre>Syntax
      Get-ADComputerServiceAccount [-Identity] <i>ADComputer</i> 
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>] 
            [-Partition <i>string</i>] [-Server <i>string</i>] [<i>CommonParameters</i>]

Key
   -AuthType <i>ADAuthType</i>
       The authentication method to use:
          Negotiate or 0
          Basic or 1
       A Secure Sockets Layer (SSL) connection is required for the Basic authentication method.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Identity <i>ADComputer</i>
       An AD computer object:

          Distinguished Name
             Example: CN=PC1234,CN=Europe,CN=Users,DC=SS64,DC=com
          GUID  (objectGUID)
             Example: 579c4d2e-f62d-4d20-8a88-030d97495f10
          Security Identifier (objectSid)
             Example: S-1-5-21-3164297828-301567370-526410523-1153
          Security Accounts Manager Account Name (sAMAccountName)
             Example: PC1234

       The identifier in parentheses is the LDAP display name for the attribute.

       The cmdlet searches the default naming context or partition to find the object.
       If the identifier given is a DN, the partition to search will be computed from that DN.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also accept an object through the pipeline.
 
    -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter.
       examples:
          -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

          -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -Server <i>DomainName\ComputerName</i>
       The domain controller that will add the computer to the domain.
       Default = the local computer.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  Get-ADComputerServiceAccount  gets all of the service accounts that are hosted by the specified computer.<br>
<br>
The <span class="code">-Computer </span>parameter specifies the AD computer that hosts the service accounts. Identify a 
computer by its distinguished name (DN), GUID, security identifier (SID) or Security Accounts Manager (SAM) account
name. You can also set the <span class="code">-Computer </span> parameter to a computer object <a href="syntax-variables.html">variable</a>, or pass a computer object through the <a href="syntax-pipeline.html">pipeline</a> to the <span class="code">-Computer </span> parameter, for example, using <a href="get-adcomputer.html">Get-ADComputer</a>.</p>
<p><b>Examples</b></p>
<p>Get the service accounts hosted on a computer account 'pc64':</p>
<p class="code">PS C:\&gt; Get-ADComputerServiceAccount -Identity pc64</p>
<p class="quote"><i>“The most likely way for the world to be destroyed, most experts agree, is by accident. That's where we come in; we're computer professionals. We cause accidents” ~ Nathaniel Borenstein</i></p>
<p><b>Related:</b></p>
<p>  <a href="add-adcomputerserviceaccount.html">Add-ADComputerServiceAccount</a> - Add one or more service accounts to an AD computer<br>
<a href="remove-adcomputerserviceaccount.html">Remove-ADComputerServiceAccount</a> - Remove one or more service accounts from a computer.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-adcomputerserviceaccount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

