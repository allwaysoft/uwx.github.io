---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-ADComputer</h1>
<p>Get one or more Active Directory computers.</p>
<pre>Syntax
      Get-ADComputer [-Identity] <i>ADComputer</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-Partition <i>string</i>] [-Properties <i>string</i>[]]
               [-Server <i>string</i>] [<i>CommonParameters</i>]
    
      Get-ADComputer <b>{</b> -Filter <i>string</i> | -LDAPFilter <i>string</i> <b>}</b>
         [-ResultPageSize <i>int</i>] [-ResultSetSize <i>Int32</i>]
            [-SearchBase <i>string</i>] [-SearchScope {Base | OneLevel | Subtree}]
               [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
                  [-Partition <i>string</i>] [-Properties <i>string</i>[]]
                     [-Server <i>string</i>] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use:
          Negotiate or 0
          Basic or 1
       A Secure Sockets Layer (SSL) connection is required for the Basic authentication method.

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Filter { <i>string</i> }
       A query string that retrieves Active Directory objects.
       This string uses the PowerShell Expression Language syntax.
       Supported Operators: -eq -le -ge -ne -lt -gt -approx -bor -band -recursivematch -like -notlike -and -or -not
       Also see about_ActiveDirectory_Filter. 

   -Identity <i>ADComputer</i>
       An AD computer object:

          Distinguished Name
             Example: CN=PC1234,CN=Europe,CN=Users,DC=SS64,DC=com
          GUID  (objectGUID)
             Example: af4867a2-5aa1-4143-bef2-b56c5c9a78de
          Security Identifier (objectSid)
             Example: S-1-5-21-3164297828-301567370-526410523-1153
          Security Accounts Manager Account Name (sAMAccountName)
             Example: PC1234

       The identifier in parentheses is the LDAP display name for the attribute.

       The cmdlet searches the default naming context or partition to find the object.
       If the identifier given is a DN, the partition to search will be computed from that DN.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also accept an object through the pipeline.
 
   -LDAPFilter <i>string</i>
       An LDAP query string that is used to filter AD objects.
       You can use this parameter to run existing LDAP queries.
       The Filter parameter syntax supports the same functionality as the LDAP syntax. 
       See the -Filter description.
        
       e.g. search for all objects in the organizational unit with a name beginning with "ss64".
        
         -LDAPFilter "(name=ss64*)"  -SearchScope Subtree -SearchBase "DC=demo,DC=ss64,DC=com"

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter.
       examples:
          -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

          -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -Properties <i>string</i>[]
       The properties of the output object to retrieve from the server.
       Use this parameter to retrieve properties that are not included in the default set.
        
       Specify properties for this parameter as a comma-separated list of names.
       To display all of the attributes that are set on the object, use *

       To specify an individual extended property, use the name of the property.
       For properties that are not default or extended properties, specify the LDAP display name. 
        
       To retrieve properties and display them for an object, use the Get-* cmdlet associated
       with the object and pass the output to <a href="get-member.html">Get-Member</a>. 
       e.g.   Get-ADGroup -Identity Administrators | Get-Member
        
       To retrieve and display the properties:
       e.g.   Get-ADGroup -Identity Administrators -Properties * | Get-Member
        
   -ResultPageSize <i>int</i>
       The number of objects to include in one page for an AD Domain Services query. 
       The default is 256 objects per page. 
       e.g.   -ResultPageSize 500
        
   -ResultSetSize <i>Int32</i>
       The maximum number of objects to return for an AD Domain Services query.
       To receive all objects (the default), set this parameter to $null.
       Use Ctrl+c to stop the query and return of objects. 

   -SearchBase <i>string</i>
       An AD path to search under. 
        
       When you run a cmdlet from an  drive,
       The default value of this parameter is the current path of the AD provider drive, the
       default naming context of the target domain, or (if specified) the target LDS instance.
        
       e.g. to search under an OU.
          -SearchBase "ou=Group64,dc=demo,dc=SS64,dc=com" 
        
   -SearchScope <i>ADSearchScope</i>
       The scope of an AD search. Possible values:
          Base     or 0
          OneLevel or 1
          Subtree  or 2
        
       Base will search only the current path or object.
       OneLevel will search the immediate children of the path or object.
       Subtree will search the current path or object and all children.
        
       e.g.
           -SearchScope Subtree

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Get-ADComputer  gets a computer or performs a search to retrieve multiple computers. The <span class="code">-Identity</span> parameter specifies the AD computer to retrieve.  Identify the computer by its distinguished name (DN), GUID, security identifier (SID) or Security Accounts Manager (SAM) account name. This parameter may also be set  to a computer object <a href="syntax-variables.html">variable</a> or through the <a href="syntax-pipeline.html">pipeline</a>.<br>
<br>To search for and retrieve more than one computer, use the <span class="code">-Filter</span> or<span class="code"> -LDAPFilter</span> parameters. The -Filter parameter uses the PowerShell Expression Language to write query strings for Active Directory.  For more information, see <a href="get-help.html">help</a> about_ActiveDirectory_Filter.<br> 
If you have existing LDAP query strings, you can use the -LDAPFilter parameter.<br>
<br>This cmdlet retrieves a default set of computer object properties. To retrieve additional properties use the <span class="code">-Properties</span> parameter. </p>
<p><b>Examples</b></p>
<p>Get a specific computer showing all the properties:</p>
<p class="code">PS C:\&gt; Get-ADComputer "Server64" -Properties *</p>
<p>Get all computer accounts:</p>
<p class="code">PS C:\&gt; Get-ADComputer -Filter *</p>
<p>List and count all the different Computer OS's found in AD </p>
<pre><span class="code">PS C:\&gt; $os = Get-ADComputer -Filter * -Properties OperatingSystem -ResultPageSize 500
PS C:\&gt; $os | Group-object -Property OperatingSystem -NoElement | ft  -autosize</span></pre>
<p>Filter that list to show  machines with a specific OS <span class="code"><br>
PS C:\&gt; $os | where OperatingSystem -eq "Windows Server 2003" | select name</span></p>
<p>Get an inventory list of all servers, plus OS and service pack (via Microsoft's  enterprise <a href="http://blogs.technet.com/b/askds/archive/2010/02/04/inventorying-computers-with-ad-powershell.aspx">AD support blog</a>):</p>
<p class="code">PS C:\&gt; Get-ADComputer -Filter {OperatingSystem -Like "<b>Windows *Server*</b>"} -Property * | Format-Table Name,OperatingSystem,OperatingSystemServicePack -Wrap -Auto</p>
<p>Get all the computers with a ComputerName matching a given string:</p>
<p class="code">PS C:\&gt; Get-ADComputer -Filter 'Name -like "Server*"' -Properties IPv4Address | <a href="format-table.html">Format-table</a> Name,DNSHostName,IPv4Address -A</p>
<p>Get all the computers that have changed their password in the last 30 days:</p>
<p class="code">PS C:\&gt; $d = [DateTime]::Today.AddDays(-30); Get-ADComputer -Filter 'PasswordLastSet -ge $d' -Properties PasswordLastSet | <a href="format-table.html">Format-table</a> Name,PasswordLastSet</p>
<p>Get the computer accounts in the location: "CN=Computers,DC=SS64,DC=com" that are listed as laptops (using an LDAPFilter):</p>
<p class="code">PS C:\&gt; Get-ADComputer -LDAPFilter "(name=*laptop*)" -SearchBase "CN=Computers,DC=SS64,DC=com"</p>
<p class="quote"><i>“The really efficient laborer will be found not to crowd his day with work, but will saunter to his task surrounded by a wide halo of ease and leisure” ~ Henry David Thoreau</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-lastlogon.html">LastLogon</a> - Find when a computer account last logged in.<br>
<a href="new-adcomputer.html">New-ADComputer</a>   - Create a new AD computer.<br>
<a href="remove-adcomputer.html">Remove-ADComputer</a> - Remove an AD computer. <a href="set-adcomputer.html"><br>
Set-ADComputer</a> - Modify an AD computer.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

