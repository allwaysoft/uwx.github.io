---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADComputer</h1>
<p>Modify an  AD computer object.</p>
<pre>Syntax
      Set-ADComputer [-Identity] <i>ADComputer</i> [-AccountExpirationDate <i>[System.DateTime]</i>]
         [-AccountNotDelegated <i>[bool]</i>] [<b>-Add</b><i> hashtable</i>]
            [-AllowReversiblePasswordEncryption <i>[bool]</i>] [-AuthType {<u>Negotiate</u> | Basic}]
               [-CannotChangePassword <i>[bool]</i>] [-Certificates <i>hashtable</i>]
                  [-ChangePasswordAtLogon <i>[bool]</i>] [-Credential <i>PSCredential</i>] [<b>-Clear</b> <i>string[]</i>]
                     [-Description <i>string</i>] [-DisplayName <i>string</i>] [-DNSHostName <i>string</i>]
                        [-Enabled <i>[bool]</i>] [-HomePage <i>string</i>]
                           [-Location <i>string</i>] [-ManagedBy <i>ADPrincipal</i>] 
                              [-OperatingSystem <i>string</i>] [-OperatingSystemHotfix <i>string</i>] 
                                 [-OperatingSystemServicePack <i>string</i>] [-OperatingSystemVersion <i>string</i>]
                                    [-PasswordNeverExpires <i>[bool]</i>] [-PasswordNotRequired <i>[bool]</i>]
                                       [<b>-Remove</b> <i>hashtable</i>] [<b>-Replace</b> <i>hashtable</i>]
                                          [-ServicePrincipalNames <i>hashtable</i>] [-SAMAccountName <i>string</i>]
                                             [-Server <i>string</i>] [-TrustedForDelegation <i>[bool]</i>]
                                                [-UserPrincipalName <i>string</i>]
                                                   [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AccountExpirationDate <i>[System.DateTime]</i>
       The expiry date for the account. (0=never expires)        
       Use PowerShell <a href="syntax-dateformats.html">DateTime syntax</a>
       Time is assumed to be local time unless otherwise specified.
       The default time is 12:00 (Midday) local time.
       The default date is the current date.
       Examples using GMT, UTC and local time:
        -AccountExpirationDate "Mon, 17 Apr 2011 21:22:48 GMT"
        -AccountExpirationDate "2011-04-17T14:22:48.0000000" 
        -AccountExpirationDate "04/17/2011 2:22:48 PM"
       The LDAP Display name (ldapDisplayName) for this property is accountExpires.

   -AccountNotDelegated <i>bool</i>
       Security delegation. When True, the security context of the account is not
       delegated to a service even when the service account is set as trusted for
       Kerberos delegation. Sets the AccountNotDelegated property for an AD account.
       This parameter also sets the ADS_UF_NOT_DELEGATED flag of the AD User Account
       Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -Add <i>hashtable</i>
       Add values to add to an object property.
       Use this for properties that cannot be modified using a cmdlet parameter.
       To modify an object property, use the LDAP display name. 
       Specify multiple values as a comma-separated list of values 
       Specify more than one property by separating them with a semicolon
       The format for this parameter is 
-Add @<b>{</b><i>Attribute1LDAPDisplayName</i>=<i>value1</i>, <i>value2</i>,... ; <i>Attribute2LDAPDisplayName</i>=<i>value1</i>, <i>value2</i>,... <b>}</b>

       If the -Add, -Remove, -Replace and -Clear parameters are used together, the operations
       will always be performed in the order: <b>-Remove</b> then <b>-Add</b> then <b>-Replace</b> then <b>-Clear</b>

   -AllowReversiblePasswordEncryption <i>bool</i>
       Whether reversible password encryption is allowed for the account.
       This parameter sets the AllowReversiblePasswordEncryption property of the account.
       This also sets the ADS_UF_ENCRYPTED_TEXT_PASSWORD_ALLOWED flag of
       the AD User Account Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -AuthType <i>ADAuthType</i>
       The authentication method to use:
          <u>Negotiate</u> or 0
          Basic or 1
       A Secure Sockets Layer (SSL) connection is required for the Basic authentication method.

   -CannotChangePassword <i>bool</i>
       Whether the account password can be changed.
       Sets the 'CannotChangePassword' property of an account.
       Values for this parameter: $false or 0, $true or 1

   -Certificates <i>X509Certificate[]</i>
       Modifies the DER-encoded X.509v3 certificates of the account.
       These certificates include the public key certificates issued to
       this account by the Microsoft Certificate Service. 
       Sets the Certificates property of the account object.
       The LDAP Display Name for this property is "userCertificate".

       Syntax to add/remove/replace/clear:
         -Certificates @{Add=<i>value1</i>,<i>value2</i>,...}
         -Certificates @{Remove=<i>value3</i>,<i>value4</i>,...}
         -Certificates @{Replace=<i>value1</i>,<i>value2</i>,...}
         -Certificates $null

       Multiple operations may be specified by using a list separated by semicolons.
         -Certificates @{Add=value1,value2,...};@{Remove=value3,value4,...}

       Example - creating a certificate:

         $cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate cert1.cer <i>certPassword</i>
         Set-ADUser saradavis  -Certificates @{Add=$cert}

   -ChangePasswordAtLogon <i>bool</i>
       Whether a password must be changed during the next logon attempt.
       Values for this parameter: $false or 0, $true or 1
       This cannot be set to $true for an account that also has PasswordNeverExpires set.

   -Clear <i>string[]</i>
       An array of object properties that will be cleared.
       Use this parameter to clear properties that cannot be modified using a cmdlet parameter.
       To modify an object property, use the LDAP display name.
       Modify more than one property by specifying a comma-separated list.

       Example: Clear the value for the Phone-Office-Other attribute (LDAP display name 'otherTelephone')

          -Clear otherTelephone

       If the -Add, -Remove, -Replace and -Clear parameters are used together, the operations
       will always be performed in the order: <b>-Remove</b> then <b>-Add</b> then <b>-Replace</b> then <b>-Clear</b>

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Description <i>string</i>
       A description of the object.

   -DisplayName <i>string</i>
       The display name of the object.

   -DNSHostName <i>string</i>
       The fully qualified domain name (FQDN) of the computer.
       This parameter sets the DNSHostName property for a computer object.
       The LDAP Display Name for this property is "dNSHostName". 

    -Enabled <i>bool</i>
       Is the account enabled.
       An enabled account requires a password.
       This parameter sets the Enabled property for an account object.
       Also sets the ADS_UF_ACCOUNTDISABLE flag of the AD User Account Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -HomePage <i>string</i>
       The URL of the home page of the object.

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

   -Instance <i>ADComputer</i>
       Specifies a modified copy of a computer object to use to update the actual AD computer object.
       When this parameter is used, any modifications made to the modified copy of the object are
       also made to the corresponding AD object. This will only update the object properties that have changed.

       The -Instance parameter can only update computer objects that have been retrieved with <a href="get-adcomputer.html">Get-ADComputer</a>
       you cannot specify other parameters that set properties on the object.

       Example
          # Retrieve a local instance of the object.
          $computerInstance = Get-ADComputer  -Identity PC001
          # Modify one or more properties of the object instance.
          $computerInstance.Description = "Graphic Design Computer"
          # Save the changes
          Set-ADComputer -Instance $computerInstance
   
   -Location <i>string</i>
       The location of the computer, such as an office number.

   -ManagedBy <i>ADPrincipal</i>
       The user or group that manages the object.
       Note: The identifier in parentheses is the LDAP display name for the property.
       Examples:
          Distinguished Name: CN=SaraDavis,OU=Europe,CN=Users,DC=corp,DC=ss64,DC=com
          GUID (objectGUID) : 599c3d2e-f72d-4d20-8a88-030d99495f20 
          Security Identifier (objectSid) : S-1-5-21-3165297888-301567370-576410423-1103
          SAM Account Name (sAMAccountName): JDoe
        
       This parameter sets the Active Directory attribute with an LDAP Display Name of "managedBy". 

   -OperatingSystem <i>string</i>
       An operating system name. e.g. "Windows Server 2008 Enterprise"

   -OperatingSystemHotfix <i>string</i>
       An operating system hotfix name.

   -OperatingSystemServicePack <i>string</i>
       The name of an operating system service pack.

   -OperatingSystemVersion <i>string</i>
       An operating system version.

    -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current directory server.
       The cmdlet searches this partition to find the object defined by the -Identity parameter.
       examples:
          -Partition "CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

          -Partition "CN=Schema,CN=Configuration,DC=EUROPE,DC=TEST,DC=SS64,DC=COM"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for -Partition if no value is specified.

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -PasswordNeverExpires <i>bool</i>
       Whether the password of an account can expire.
       This parameter also sets the ADS_UF_DONT_EXPIRE_PASSWD flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

       Note: This parameter cannot be set to $true for an account that also has the ChangePasswordAtLogon property set.

   -PasswordNotRequired <i>bool</i>
       Whether the account requires a password.
       This parameter also sets the ADS_UF_PASSWD_NOTREQD flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

   -Remove <i>hashtable</i>
       Remove values from an object property.
       Use this for properties that cannot be modified using a cmdlet parameter.
       To modify an object property, use the LDAP display name. 
       Specify multiple values as a comma-separated list of values 
       Specify more than one property by separating them with a semicolon
       The format for this parameter is 
           -Remove @<b>{</b><i>Attribute1LDAPDisplayName</i>=<i>value1</i>, <i>value2</i>,... ; <i>Attribute2LDAPDisplayName</i>=<i>value1</i>, <i>value2</i>,... <b>}</b>

       If the -Add, -Remove, -Replace and -Clear parameters are used together, the operations
       will always be performed in the order: <b>-Remove</b> then <b>-Add</b> then <b>-Replace</b> then <b>-Clear</b>

   -Replace <i>hashtable</i>
       Replace values for an object property.
       Use this for properties that cannot be modified using a cmdlet parameter.
       To modify an object property, use the LDAP display name. 
       Specify multiple values as a comma-separated list of values 
       Specify more than one property by separating them with a semicolon
       The format for this parameter is 
           -Replace @<b>{</b><i>Attribute1LDAPDisplayName</i>=<i>value1</i>, <i>value2</i>,... ; <i>Attribute2LDAPDisplayName</i>=<i>value1</i>, <i>value2</i>,... <b>}</b>

       If the -Add, -Remove, -Replace and -Clear parameters are used together, the operations
       will always be performed in the order: <b>-Remove</b> then <b>-Add</b> then <b>-Replace</b> then <b>-Clear</b>

   -SAMAccountName <i>string</i>
       The Security Account Manager (SAM) account name of the user, group, computer, or service account. 
       The maximum length of the description is 256 characters.
       To be compatible with older operating systems use 20 characters or less.
       Note: If the SAMAccountName string provided, does not end with a '$', one will be appended if needed.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)  or AD Snapshot instance.
 
       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268
       
   -ServicePrincipalNames <i>string[]</i>
       The service principal names for the account.
       Use the following syntax to add remove, replace or clear service principal name values:

          -ServicePrincipalNames @{Add=<i>value1</i>,<i>value2</i>,...}
          -ServicePrincipalNames @{Remove=<i>value3</i>,<i>value4</i>,...}
          -ServicePrincipalNames @{Replace=<i>value1</i>,<i>value2</i>,...}
          -ServicePrincipalNames $null

       Multiple operations may be specified by using a list separated by semicolons.
         -ServicePrincipalNames @{Add=value1,value2,...};@{Remove=value3,value4,...}

       Example:
         -ServicePrincipalNames @{Add="SQLservice\NewService.ss64.com:1456"};{Remove="SQLservice\demo.ss64.com:1456"}

   -TrustedForDelegation <i>bool</i>
       Whether an account is trusted for Kerberos delegation.
       A service that runs under an account that is trusted for Kerberos delegation can
       assume the identity of a client requesting the service. 
       This value also sets the ADS_UF_TRUSTED_FOR_DELEGATION flag of the AD UAC attribute.
       Values for this parameter: $false or 0, $true or 1

   -UserPrincipalName <i>string</i>
       Each user account has a user principal name (UPN) in the format
         <i>user</i>@<i>DNS-domain-name</i>
       A UPN is a friendly name assigned by an administrator that is shorter than the LDAP 
       distinguished name used by the system and easier to remember.
       The UPN is independent of the user object's DN, so a user object can be moved or
       renamed without affecting the user logon name. When logging on using a UPN, users
       no longer have to choose a domain from a list on the logon dialog box.

   -Confirm
       Prompt for confirmation before executing the command.

    -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Set-ADComputer modifies the properties of an AD computer object. Commonly used property values can be modified  using the cmdlet parameters. Property values that are not associated with cmdlet parameters 
can be modified by using the <span class="code">-Add, -Replace, -Clear</span> and <span class="code">-Remove</span> parameters.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD computer to modify. Identify a computer by its distinguished name Members (DN), GUID, security identifier (SID) or Security Accounts Manager (SAM) account name. The -Identity parameter can also be set to an object <a href="syntax-variables.html">variable</a>, or you can pass an object through the PowerShell <a href="syntax-pipeline.html">pipeline</a>. For example, from <a href="get-adcomputer.html">Get-ADComputer</a>.<br>
<br>The <span class="code">-Instance</span> parameter provides a way to update a computer by applying the changes made to a copy of the computer object. When you specify the -Instance parameter you should not pass the -identity parameter. <br>
<br>Three ways to modify the Location property of a computer object:</p>
<blockquote>
<p>Method 1: Set-ADComputer  -Identity PC00189  -Location "London"<br>
<br>Method 2: Get-ADComputer PC00189 | Set-ADcomputer -Location "London"<br>
<br>Method 3:<br>
$computer = Get-ADcomputer PC00189<br>
$computer.Location= "London"<br>
Set-ADComputer -Instance $computer</p>
</blockquote>
<p><b>Examples</b></p>
<p>Modify the SPN value for a given computer:</p>
<p class="code">PS C:\&gt; Set-ADComputer "SRV251" -ServicePrincipalName @{Replace="MSSQLSVC/SRV251.ss64.com:1456","MS OLAPSVC.3/SRV251.ss64.com:analyze"}</p>
<p>Modify the location for a given computer to "Stavanger, Norway":</p>
<p class="code">PS C:\&gt; Set-ADComputer "SRV251" -Location "Stavanger, Norway"</p>
<p>Set the 'managed by' attribute value for a given computer using the SAM account name of the user:</p>
<p class="code">PS C:\&gt; Set-ADComputer "SRV251" -ManagedBy "CN=SQL Administrator 01,OU=UserAccounts,OU=Managed,DC=ss64,DC=com"</p>
<p>Set the 'location' and 'managed-by' attributes of a given computer using the instance parameter set:</p>
<p class="code">PS C:\&gt; $comp = Get-ADComputer "SRV251"; $comp.Location = "Stavanger, Norway"<br>
PS C:\&gt; $comp.ManagedBy = "CN=SQL Administrator 01,OU=UserAccounts,OU=Managed,DC=ss64,DC=com"<br>
PS C:\&gt;  Set-ADComputer -Instance $comp</p>
<p class="quote"><i>“A happy person is not a person in a certain set of circumstances, but rather a person with a certain set of attitudes” ~ Hugh Downs</i></p>
<p><b>Related:</b></p>
<p><a href="get-adcomputer.html">Get-ADComputer</a> - Get one or more AD computers. <a href="new-adcomputer.html"><br>
New-ADComputer</a> - Create a new AD computer.<br>
<a href="remove-adcomputer.html">Remove-ADComputer</a> - Remove an AD computer</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-adcomputer.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

