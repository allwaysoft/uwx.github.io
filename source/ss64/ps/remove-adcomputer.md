---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-ADComputer</h1>
<p>Remove an  AD computer.</p>
<pre>Syntax
      Remove-ADComputer [-Identity] <i>ADComputer</i> [-AuthType {<u>Negotiate</u> | Basic}]
         [-Credential <i>PSCredential</i>] [-Partition <i>string</i>] [-Server <i>string</i>]
            [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key       
   -AuthType <i>ADAuthType</i>
       The authentication method to use:
          <u>Negotiate</u> or 0
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
          -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=com"
          -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=com"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.
        
   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)  or AD Snapshot instance.
 
       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268
       
   -Confirm
       Prompt for confirmation before executing the command.
        
    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Remove-ADComputer  removes an AD computer.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD computer to remove. Identify a computer by its distinguished name Members (DN), GUID, security identifier (SID), or Security Accounts Manager (SAM) account name. The -Identity parameter can be set to a computer object <a href="syntax-variables.html">variable</a>, or a 
computer object passed through the <a href="syntax-pipeline.html">pipeline</a>. for example, from <a href="get-adcomputer.html">Get-ADComputer.</a></p>
<p><b>Examples</b></p>
<p>Remove one particular computer:</p>
<p class="code">PS C:\&gt; Remove-ADComputer -Identity "SRV251"</p>
<p>Remove all computers in a given location (will prompt: 'Are you sure', to disable the confirmation prompt use <span class="code">Remove-ADComputer -confirm:$false</span>):</p>
<p class="code">PS C:\&gt; Get-ADComputer -Filter 'Location -eq "Stavanger, Norway"' | Remove-ADComputer</p>
<p class="quote"><i>“The Skynet Funding Bill is passed. The system goes on-line August 4th, 1997. Human decisions are removed from strategic defense. Skynet begins to learn at a geometric rate. It becomes self-aware at 2:14 a.m. Eastern time, August 29th. In a panic, they try to pull the plug” ~ The Terminator</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-adcomputer.html">Get-ADComputer</a> - Get one or more AD computers. <a href="new-adcomputer.html"><br>
New-ADComputer</a> - Create a new AD computer.<br>
<a href="set-adcomputer.html">Set-ADComputer</a> - Modify an AD computer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

