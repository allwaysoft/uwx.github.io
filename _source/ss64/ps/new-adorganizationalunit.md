---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-ADOrganizationalUnit</h1> 
<p>Create a new Active Directory organizational unit.</p>
<pre>Syntax
      New-ADOrganizationalUnit [-Name] <i>string</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-City <i>string</i>] [-Country <i>string</i>]
            [-Credential <i>PSCredential</i>] [-Description <i>string</i>]
               [-DisplayName <i>string</i>] [-Instance <i>ADOrganizationalUnit</i>]
                  [-ManagedBy <i>ADPrincipal</i>] [-OtherAttributes <i>hashtable</i>]
                     [-PassThru] [-Path <i>string</i>] [-PostalCode <i>string</i>] [-ProtectedFromAccidentalDeletion <i>bool</i>]
                        [-Server <i>string</i>] [-State <i>string</i>] [-StreetAddress <i>string</i>]
                           [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -City <i>string</i>
       The user's town or city.
        
    -Country <i>string</i>
       The country or region code for the user's language of choice.
       The LDAP Display Name (ldapDisplayName) of this property is "c".

   -Credential <i>PSCredential</i>
       The user account credentials to use to perform this task.
       The default credentials are those of the currently logged on user unless the
       cmdlet is run from an Active Directory PowerShell provider drive.
       If the cmdlet is run from such a provider drive, the account associated with the drive is the default.

       Type a user name, such as "User64" or "Domain64\User64" or specify a
       PSCredential object such as one generated by <a href="get-credential.html">Get-Credential</a> 

       If a user name is specified, the cmdlet will prompt for a password.

   -Description <i>string</i>
       A description of the object.

   -DisplayName <i>string</i>
       The display name of the object.

   -Instance <i>ADOrganizationalUnit</i>
       An instance of a organizational unit object to use as a template for a new OU object.

       Use an instance of an existing OU object as a template or construct a
       new OU object by using the PowerShell command line or by using a script.

       The following examples show how to use these two methods:

       Method 1: Use the <a href="get-adorganizationalunit.html">Get-ADOrganizationalUnit</a> cmdlet and then override property values of
       the new object by setting the appropriate parameters. 

          $ouInstance = Get-ADOrganizationalUnit -Identity demoOU1
          New-ADOrganizationalUnit -Name demo2  -Instance $ouInstance -Country Canada

       Method 2: Use the New-ADOrganizationalUnit cmdlet and pass this object to the -Instance
       parameter of New-ADOrganizationalUnit to create the new AD OU object.

          $ouInstance = new-object Microsoft.ActiveDirectory.Management.ADOrganizationalUnit
          $ouInstance.Country = Canada
          New-ADOrganizationalUnit -Name accountingCanada  -Instance $ouInstance

       Note: Specified attributes are not validated, so attempting to set attributes that
             do not exist or cannot be set will raise an error.

   -ManagedBy <i>ADPrincipal</i>
       The user or group that manages the object by providing one of the following property values.
       Note: The identifier in parentheses is the LDAP display name for the property.
          Distinguished Name 
            Example:  CN=demo1,OU=Europe,CN=Users,DC=corp,DC=ss64,DC=com
          GUID (objectGUID) 
            Example: 599c3d2e-f72d-4d20-8a88-030d99495f20 
          Security Identifier (objectSid) 
            Example: S-1-5-64-3265277888-301567356-523410843-1244
          SAM Account Name (sAMAccountName) 
            Example: demo1

   -Name <i>string</i>
       The name of the object. 
    
   -OtherAttributes <i>hashtable</i>
       Object attribute values for attributes that are not represented by cmdlet parameters.
       Set one or more parameters at the same time with this parameter.
       If an attribute takes more than one value, you can assign multiple values.
       To identify an attribute, specify the LDAPDisplayName (ldapDisplayName) defined for it in
       the Active Directory schema.

        Syntax:
        To specify a single value for an attribute:
           -OtherAttributes @{'AttributeLDAPDisplayName'=value}
        To specify multiple values for an attribute
           -OtherAttributes @{'AttributeLDAPDisplayName'=value1,value2,...}

        Specify values for more than one attribute by using semicolons to separate attributes.
        To set values for multiple attributes:
           -OtherAttributes @{'Attribute1LDAPDisplayName'=value; 'Attribute2LDAPDisplayName'=value1,value2;...}

        The following examples show how to use this parameter.

        To set the value of a custom attribute called favColors that takes a set of Unicode strings: 
           -OtherAttributes @{'favColors'="pink","purple"}

        To set values for favColors and dateOfBirth simultaneously, use the following syntax:
           -OtherAttributes @{'favColors'="pink","purple"; 'dateOfBirth'=" 01/01/1960"}

   -PassThru <i>switch</i>
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.
        
   -Path <i>string</i>
       The X.500 path of the Organizational Unit (OU) or container where the new object is created.  

       In many cases, a <a href="path-defaults.html">default value</a> will be used for -Path if no value is specified.

       Note:  The PowerShell cmdlets, such New-Item, Remove-Item, Remove-ItemProperty, Rename-Item and 
       Set-ItemProperty also contain a Path property. However, for the <a href="ad.html">AD provider cmdlets</a>, the -Path parameter 
       identifies the path of the actual object and not the container.

   -PostalCode <i>string</i>
       The user's postal code or zip code.

   -ProtectedFromAccidentalDeletion <i>bool</i>
       Whether to prevent the object from being deleted.
       When this property is set to true, you cannot delete the corresponding object without
       first changing the value of this property.
       Possible values: $false or 0, $true or 1

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number)

   -State <i>string</i>
       The user's or Organizational Unit's state or province.
        
   -StreetAddress <i>string</i>
       The organizational unit's street address.

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>New-ADOrganizationalUnit cmdlet creates a new AD OU. Commonly used organizational unit property values may be set using the cmdlet parameters. Property values that are not associated with cmdlet parameters can be set by using the <span class="code">-OtherAttributes</span> parameter.<br>
<br>
You must set the <span class="code">-Name</span> parameter to create a new organizational unit.<br>
If the <span class="code">-Path</span> parameter is not specified, the cmdlet creates an organizational unit under the default NC head for the domain.</p>
<p>There are 3 different ways to create an OU object.</p>
<p>Method 1: Use the New-ADOrganizationalUnit cmdlet, specify the required parameters, and set any additional property
values by using  cmdlet parameters.</p>
<p>Method 2: Use a template to create the new object. Create (or retrieve) an OU object  
and set the <span class="code">-Instance</span> parameter to this object. The object provided
to the <span class="code">-Instance</span> parameter will then used as a template for the new object. Property values from the template may be overridden by setting cmdlet parameters.</p>
<p>Method 3: Pass objects through the pipeline from <a href="import-csv.html">Import-CSV</a> to New-ADOrganizationalUnit to create multiple AD OU objects. </p>
<p><b>Examples</b></p>
<p>Create a new OU named 'Laptops' which is protected from accidental deletion.:</p>
<p><span class="code">PS C:\&gt; New-ADOrganizationalUnit -Name Laptops -Path "DC=SS64,DC=COM"</span></p>
<p>Create an OU named 'EAME', protected from accidental deletion and set its 'seeAlso' and 'managedBy' properties:</p>
<p><span class="code">PS C:\&gt; New-ADOrganizationalUnit -Name EAME -Path "DC=SS64,DC=COM" -OtherAttributes @{seeAlso="CN=Asia,OU=Groups,OU=Managed,DC=SS64,DC=com";managedBy="CN=KenC,DC=SS64,DC=COM"}</span></p>
<p>Uses the data from one OU as a template for another new OU:</p>
<p class="code">PS C:\&gt; $ouTemplate = Get-ADOrganizationalUnit "OU=EAME,DC=SS64,DC=com" -properties seeAlso,managedBy<br>
PS C:\&gt; New-ADOrganizationalUnit -name KenCReports -instance $ouTemplate</p>
<p class="quote"><i>“Never be afraid to try something new. Remember, amateurs built the ark. Professionals built the Titanic” ~ Unknown Author </i></p>
<p><b>Related:</b></p>
<p><a href="get-adorganizationalunit.html">Get-adOrganizationalUnit</a> - Get one or more AD OUs<br>
<a href="remove-adorganizationalunit.html">Remove-adOrganizationalUnit</a> - Remove an AD OU<br>
<a href="set-adorganizationalunit.html">Set-adOrganizationalUnit</a> - Modify an AD OU</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-adorganizationalunit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
