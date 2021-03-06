---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADServiceAccount</h1> 
<p>Modify an Active Directory service account.</p>
<pre>Syntax
      Set-ADServiceAccount [-Identity] <i>ADServiceAccount</i>
        [-AccountExpirationDate <i>DateTime</i>] [-AccountNotDelegated <i>bool</i>]
           [-Add <i>hashtable</i>] [-Certificates <i>string</i>[]] [-Clear <i>string</i>[]]
              [-Description <i>string</i>] [-DisplayName <i>string</i>] [-Enabled <i>bool</i>]
                 [-HomePage <i>string</i>] [-Remove <i>hashtable</i>] [-Replace <i>hashtable</i>]
                    [-SamAccountName <i>string</i>] [-ServicePrincipalNames <i>hashtable</i>]
                       [-TrustedForDelegation <i>bool</i>] [-AuthType {Negotiate | Basic}]
                           [-Credential <i>PSCredential</i>] [-Partition <i>string</i>] [-PassThru]
                               [-Server <i>string</i>] [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

      Set-ADServiceAccount <b>-Instance</b> <i>ADServiceAccount</i>
         [-AuthType {Negotiate | Basic}] [-Credential <i>PSCredential</i>]
            [-Partition <i>string</i>] [-PassThru] [-Server <i>string</i>]
               [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -AccountExpirationDate <i>[System.DateTime]</i>
       The expiry date for the account. (0=never expires)        
       Use PowerShell <a href="/ps/syntax-dateformats.html">DateTime syntax</a>
       Time is assumed to be local time unless otherwise specified.
       The default time is 12:00 (Midday) local time.
       The default date is the current date.
       Examples using GMT, UTC and local time:
        -AccountExpirationDate "Mon, 17 Apr 2011 21:22:48 GMT"
        -AccountExpirationDate "2011-04-17T14:22:48.0000000" 
        -AccountExpirationDate "04/17/2011 2:22:48 PM"
       The LDAP Display name (ldapDisplayName) for this property is accountExpires.

   -AccountNotDelegated <i>bool</i>
       Security delegation. When True, the security context of the user is not
       delegated to a service even when the service account is set as trusted for
       Kerberos delegation. Sets the AccountNotDelegated property for an AD account.
       This parameter also sets the ADS_UF_NOT_DELEGATED flag of the AD User Account
       Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -Add <i>hashtable</i>
       Specify values to add to an object property.
       Use this parameter to add one or more values to a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       Specify multiple values to a property by specifying a comma-separated list of values
       and more than one property by separating them using a semicolon.
       The format for this parameter is 

          <b>-Add @{</b>Attribute1LDAPDisplayName=value1, value2, ...;
                 Attribute2LDAPDisplayName=value1, value2, ...; AttributeNLDAPDisplayName=value1, value2, ...<b>}</b>

        For example, to remove the value "555-222-2222" and add the values "555-222-1111" and "555-222-3333
        " to Phone-Office-Other attribute (LDAP display name 'otherTelephone'), and add the value "555-222-9999" to Pho
        ne-Mobile-Other (LDAP display name 'otherMobile'), set the Add and Remove parameters as follows.

          <b>-Add @{</b>otherTelephone='555-222-1111', '555-222-3333'; otherMobile='555-222-9999' <b>} -Remove @{</b>otherTelephone='
        555-222-2222'<b>}</b>

        When you use the -Add, -Remove, -Replace and -Clear parameters together, the operations will be
        performed in the order: Remove, then Add, then Replace, then clear.

   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

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

   -Clear <i>string</i>[]
       An array of object properties that will be cleared in the directory.
       Use this parameter to clear one or more values of a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       Modify more than one property by specifying a comma-separated list.
       The format for this parameter is
          -Clear Attribute1LDAPDisplayName, Attribute2LDAPDisplayName

       For example, to clear the value for the Phone-Office-Other attribute
       (LDAP display name 'otherTelephone') set the Clear parameter as follows.

          -Clear otherTelephone

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "MSAccount64" or "Domain01\MSAccount64" or a <a href="get-credential.html">PSCredential</a> object.

   -Description <i>string</i>
       A description of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "description".

   -DisplayName <i>string</i>
       The display name of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "displayName".

   -Enabled <i>bool</i>
       Is the account enabled.
       An enabled account requires a password.
       This parameter sets the Enabled property for an account object.
       Also sets the ADS_UF_ACCOUNTDISABLE flag of the AD User Account Control (UAC) attribute.
       Values for this parameter: $false or 0, $true or 1

   -HomePage <i>string</i>
       The URL of the home page of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "wWWHomePage".

   -Identity <i>ADAccount</i>
       Specify an AD domain object by providing one of the following values.
       (The identifier in parentheses is the LDAP display name for the attribute.)

          Distinguished Name 
            Example: DC=Helvetia,DC=corp,DC=SS64,DC=com 
          GUID (objectGUID) 
            Example: 9abd016a-31af-470a-af5a-be175343f9c3
          Security Identifier (objectSid) 
            Example: S-1-5-21-5165297888-301467370-576410423-1803
          Security Accounts Manager (SAM) Account Name (sAMAccountName)
            Example: Helvetia

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       This parameter can also get this object through the pipeline or you can set this
       parameter to an object instance.

   -Instance <i>ADServiceAccount</i>
       An instance of a service account object to use as a template for updating a service account object.
       When this parameter is used, any modifications made to the modified copy of the object are also
       made to the corresponding Active Directory object.
       Only the object properties that have changed will be updated.

       The -Instance parameter can only update service account objects that have been retrieved 
       with <a href="/ps/get-adserviceaccount.html">Get-ADServiceAccount</a>. Do not also specify other parameters that set properties on the object.

       Example of modifying an instance:

         # Retrieve a local instance of the object.
         $holly = Get-ADServiceAccount  -Identity ADServiceAdmin
         # Modify one or more properties of the instance.
         $holly.Description = "default"
         # Save changes
         Set-ADServiceAccount -Instance $holly

   -Partition <i>string</i>
       The distinguished name of an AD partition.
       The distinguished name must be one of the naming contexts on the current
       directory server. The cmdlet searches this partition to find the object defined by
       the -Identity parameter. 
       The following two examples show how to specify a value for this parameter.
          -Partition "CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"
          -Partition "CN=Schema,CN=Configuration,DC=Europe,DC=Test,DC=SS64,DC=com"

       In many cases, a <a href="partition-defaults.html">default value</a> will be used for the Partition parameter if no value
       is specified.

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Remove <i>hashtable</i>
       Remove values of an object property.
       Use this parameter to remove one or more values of a property that cannot be modified
       using a cmdlet parameter. To remove an object property, you must use the LDAP display name.
       You can remove more than one property by specifying a semicolon-separated list.
       The format for this parameter is 
          -Remove @{Attribute1LDAPDisplayName=value[];   Attribute2LDAPDisplayName=value[]}

       For example, to add the values blue and green and remove the value pink from a property with a LDAP
       display name of FavColors, set the Add and Remove parameters as follows.
          -Add @{FavColors=Blue,Green} -Remove {FavColors=Pink}

        When you use the -Add, -Remove, -Replace and -Clear parameters together, the operations will be
        performed in the order: Remove, then Add, then Replace, then clear.

   -Replace <i>hashtable</i>
       Specify values for an object property that will replace the current values.
       Use this parameter to replace one or more values of a property that cannot be modified
       using a cmdlet parameter. To modify an object property, you must use the LDAP display name.
       You can modify more than one property by specifying a comma-separated list. 
       The format for this parameter is 
          -Replace @{Attribute1LDAPDisplayName=value[],   Attribute2LDAPDisplayName=value[]}

   -SamAccountName <i>string</i>
       The Security Account Manager (SAM) account name of the user, group, computer, or service account.
       The maximum length of the description is 256 characters.
       For compatibility with older operating systems use 20 characters or less.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name of this property is "sAMAccountName".
       If the value provided is not terminated with a '$' character, the system will add one if needed.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name or Fully qualified directory server name (with or without port number).

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

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Set-ADServiceAccount  modifies the properties of an AD service account. Modify commonly used property values by using the cmdlet parameters. Property values that are not associated with cmdlet parameters can be modified by using the <span class="code">-Add, -Replace, -Clear </span>and<span class="code"> -Remove</span> parameters.</p>
<p>The <span class="code">-Identity</span> parameter specifies the AD service account to modify. Identify a service account
by its distinguished name (DN), GUID, security identifier (SID), or Security Accounts Manager (SAM) account name. Alternatively set the -Identity parameter to an object variable or by passing
an object through the pipeline. e.g. from <a href="get-adserviceaccount.html">Get-ADServiceAccount</a><br>
<br>
The <span class="code">-Instance</span> parameter provides a way to update a service account object by applying the changes made to a copy of 
the object. If the Instance parameter is set to a copy of an AD service account object that has been modified, then Set-ADServiceAccount may be used to save the same changes to the original service account object.</p>
<p><b>Examples</b></p>
<p>Set the description of Service Account 'svc_firewall' to "Firewall Alert Service":</p>
<p><span class="code">PS C:\&gt; Set-ADServiceAccount svc_firewall -Description "Firewall Alert Service"</span></p>
<p>Replace the value of property ServicePrincipalNames with "ADAMwdb/a.SS64.com", "ADAMbdb/a.SS64.com":</p>
<p><span class="code">PS C:\&gt; Set-ADServiceAccount svc_SS64 -ServicePrincipalNames @{replace="ADAMwdb/a.SS64.com", "ADAMbdb/a.SS64.com"}</span></p>
<p class="quote"><i>“Identity would seem to be the garment with which one covers the nakedness of the self, in which case, it is best that the garment be loose, a little like the robes of the desert, through which one's nakedness can always be felt, and, sometimes, discerned” ~ James Arthur Baldwin</i></p>
<p><b>Related:</b></p>
<p><a href="get-adserviceaccount.html">Get-adServiceAccount</a>  - Get one or more AD service accounts.<br>
<a href="add-adcomputerserviceaccount.html">Add-adComputerServiceAccount</a> - Add one or more service accounts to an AD computer.<br>
<a href="reset-adserviceaccountpassword.html">Reset-adServiceAccountPassword</a> - Reset the service account password for a computer<br>

<a href="http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=2852">Active Directory Management Gateway Service</a> - Required to manage  AD Domain Services with PowerShell.<br>
<a href="http://technet.microsoft.com/en-us/library/dd548356%28WS.10%29.aspx">Service Accounts Step-by-Step Guide</a> - Configure and administer Managed Service Accounts in Windows 2008.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

