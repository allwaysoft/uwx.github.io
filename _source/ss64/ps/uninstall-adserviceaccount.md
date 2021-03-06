---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Uninstall-ADServiceAccount</h1> 
<p>Uninstall an Active Directory service account from a computer.</p>
<pre>Syntax
      Uninstall-ADServiceAccount [-Identity] <i>ADServiceAccount</i>
         [-AuthType {Negotiate | Basic}]
            [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Identity <i>ADServiceAccount</i>
       An AD service account object, specified with one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: CN=WebAccount,CN=ManagedServiceAccounts, DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 599c3d2e-f72d-4d20-8a88-030d99495f20
          Security Identifier (objectSid) 
            Example: S-1-5-21-3165297888-301567370-576410423-1103
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: WebAccount$

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

       This example shows how to set the parameter to a distinguished name.
          -Identity  "CN=WebAccount,CN=ManagedServiceAccounts,DC=corp,DC=SS64,DC=com"

       This example shows how to set this parameter to a group object instance named "accountInstance".
          -Identity $accountInstance

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Uninstall-ADServiceAccount  removes an  AD service account on the computer on which 
the cmdlet is run. The specified service account must be installed on the computer.</p>
<p>The <span class="code">-Identity</span> parameter specifies the Active Directory service account to uninstall. Identify a service account by its distinguished name Members (DN), GUID, security identifier (SID) or Security Accounts Manager (SAM) account name. You can also set the parameter to a service account object <a href="syntax-variables.html">variable</a>, or pass a service account object through the <a href="syntax-pipeline.html">pipeline</a>. For example, from <a href="get-adserviceaccount.html">Get-ADServiceAccount</a>. </p>
<p><b>Examples</b></p>
<p>Uninstall the  Service Account with the name 'svc64' from the local computer:</p>
<p><span class="code">PS C:\&gt; Uninstall-ADServiceAccount -Identity 'svc64' </span></p>
<p>Get a Service Account named 'svc64' from the default directory and uninstall it from the local machine.:</p>
<p><span class="code">PS C:\&gt; $acct = Get-ADServiceAccount -Filter { Name -eq 'svc64'} <br>
PS C:\&gt; Uninstall-ADServiceAccount $acct<br>
PS C:\&gt; Remove-ADServiceAccount $acct</span></p>
<p class="quote"><i>“If you want to know the end, look at the beginning” ~ African Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="new-adserviceaccount.html">New-adServiceAccount</a> - Create a new AD service account<br>
<a href="install-adserviceaccount.html">Install-adServiceAccount</a> - Install an AD service account on a computer<br>
<a href="remove-adserviceaccount.html">Remove-adServiceAccount</a> - Remove an AD service account.<br>
<a href="http://technet.microsoft.com/en-us/library/dd548356%28WS.10%29.aspx">Service Accounts Step-by-Step Guide</a> - Configure and administer Managed Service Accounts in Windows 2008.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="uninstall-adserviceaccount.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

