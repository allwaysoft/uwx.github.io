---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-ADFineGrainedPasswordPolicy</h1> 
<p>Create a new AD fine-grained policy.</p>
<pre>Syntax
      New-ADFineGrainedPasswordPolicy [-Name] <i>string</i> [-Precedence <i>int</i>]
         [-AuthType {<u>Negotiate</u> | Basic}] [-ComplexityEnabled <i>bool</i>]
            [-Credential <i>PSCredential</i>] [-Description <i>string</i>]
               [-DisplayName <i>string</i>] [-Instance <i>ADFineGrainedPasswordPolicy</i>]
                  [-LockoutDuration <i>TimeSpan</i>] [-Lockout ObservationWindow <i>TimeSpan</i>]
                     [-LockoutThreshold <i>int</i>] [-MaxPasswordAge <i>TimeSpan</i>]
                        [-MinPasswordAge <i>TimeSpan</i>] [-MinPasswordLength <i>int</i>]
                           [-OtherAttributes <i>hashtable</i>] [-PassThru] [-PasswordHistoryCount <i>int</i>]
                              [-ProtectedFromAccidentalDeletion <i>bool</i>]
                                 [-ReversibleEncryptionEnabled <i>bool</i>] [-Server <i>string</i>]
                                    [-Confirm] [-WhatIf] [<a href="common.html"><i>CommonParameters</i></a>]
Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -ComplexityEnabled &lt;System.Nullable[bool]&gt;
       Whether password complexity is enabled for the password policy.
       If enabled, the password must contain two of the following three character types: 
          Uppercase characters (A, B, C, D, E, ...)
          Lowercase characters (a, b, c, d, e, ...)
          Numerals (0, 1, 2, 3, ...) 

       Values: $false or 0, $true or 1

   -Credential <i>PSCredential</i>
       A user account that has permission to perform this action.
       The default is the current user unless the cmdlet is run from an AD PowerShell provider drive
       in which case the account associated with the drive is the default.

       "User64" or "Domain01\User64" or a <a href="get-credential.html">PSCredential</a> object.

   -Description <i>string</i>
       A description of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "description".

   -DisplayName <i>string</i>
       The display name of the object.
       The <a href="../vb/syntax-userinfo.html">LDAP</a> Display Name for this property is "displayName".

   -Instance <i>ADFineGrainedPasswordPolicy</i>
       An instance of a fine-grained password policy object to use as a template for a new AD
       fine-grained password policy object.

       Method 1: Use an existing fine-grained password policy object as a template for a new object. Retrieve an
       instance of an existing computer object with <a href="get-adfinegrainedpasswordpolicy.html">Get-ADFineGrainedPasswordPolicy</a>. Then provide this object
       to the -Instance parameter of New-ADFineGrainedPasswordPolicy to create a new object.
       property values may also be overridden for the new object by setting the appropriate parameters. 

          $FGpwPolicyInstance = Get-ADFineGrainedPasswordPolicy -Identity PasswordPolicy90
          New-ADFineGrainedPasswordPolicy -Name "PasswordPolicy180" -Instance $FGpwPolicyInstance -Precedence 600 -MaxPasswordAge "180" 

       Method 2: Create a new ADFineGrainedPasswordPolicy object and pass this object to the -Instance parameter
       of New-ADFineGrainedPasswordPolicy to create the new Policy object. 

          $FGpwPolicyInstance = <a href="new-object.html">new-object</a> Microsoft.ActiveDirectory.Management.ADFineGrainedPasswordPolicy
          $FGpwPolicyInstance.MaxPasswordAge = "180" 
          New-ADFineGrainedPasswordPolicy -Name "PasswordPolicy180"  -Instance $FGpwPolicyInstance

   -LockoutDuration <i>TimeSpan</i>
       The length of time that an account is locked after the number of failed login attempts
       exceeds the lockout threshold. You cannot login to an account that is locked until the
       lockout duration time period has expired.
       The LDAP display name for lockoutDuration is "msDS-LockoutDuration".

       The lockout duration must be greater than or equal to the lockout observation time
       for a password policy. Use the LockOutObservationWindow parameter to set the lockout observation time. 

       Time interval format:
            [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Examples:
          Set the time to 2 days
            -LockoutDuration "2"
          Set the time to 4 hours
            -LockoutDuration "4:00"
          Set the time to 5 minutes
            -LockoutDuration "0:5"
          Set the time to 45 seconds
            LockoutDuration "0:0:45"

   -LockoutObservationWindow <i>TimeSpan</i>
       The maximum time interval between two unsuccessful login attempts before the number
       of unsuccessful login attempts is reset to 0.
       An account is locked when the number of unsuccessful login attempts exceeds the password
       policy lockout threshold.
       The LDAP Display Name of this property is "msDS-lockoutObservationWindow".

       The lockout observation window must be smaller than or equal to the lockout duration for a
       password policy. Use the LockoutDuration parameter to set the lockout duration time.

       Time interval format:
           [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Note: Time values must be between the following values: 0:0:0:0.0 and 10675199:02:48:05.4775807.

       Examples:
          Set the time to 2 days
            -LockoutObservationWindow "2"
          Set the time to 4 hours
            -LockoutObservationWindow "4:00"
          Set the time to 5 minutes
            -LockoutObservationWindow "0:5"
          Set the time to 45 seconds
            -LockoutObservationWindow "0:0:45"

    -LockoutThreshold <i>int</i>
       The number of unsuccessful login attempts that are permitted before an
       account is locked out. This number increases when the time between
       unsuccessful login attempts is less than the time specified for the
       lockout observation time window.

    -MaxPasswordAge <i>TimeSpan</i>
       The maximum length of time that you can have the same password.
       After this time period, the password expires and you must create a new one. 
        
       The LDAP Display Name for this property is "maxPwdAge".

       Time interval format:
           [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              [-] = Specifies a negative time interval
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)
        
       Time values must be between the following values: -10675199:02:48:05.4775808 and 10675199:02:48:05.4775807

       Examples:
          Set the time span to 2 days
            MaxPasswordAge "2"
          Set the time span to the previous 2 days
            MaxPasswordAge "-2"
          Set the time span to 4 hours
            MaxPasswordAge "4:00"
          Set the time span to 5 minutes
            MaxPasswordAge "0:5"
          Set the time span to 45 seconds
            MaxPasswordAge "0:0:45"

   -MinPasswordAge <i>TimeSpan</i>
       The minimum length of time before you can change a password.
       The LDAP Display Name for this property is "minPwdAge".

       Time interval format:
           [-]<i>D</i>.<i>H</i>:<i>M</i>:<i>S</i>.<i>F</i>
       where:
              [-] = Specifies a negative time interval
              D = Days (0 to 10675199)
              H = Hours (0 to 23)
              M = Minutes (0 to 59)
              S = Seconds (0 to 59)
              F= Fractions of a second (0 to 9999999)

       Note: Time values must be between the following values: -10675199:02:48:05.4775808 and 10675199:02:48:05.4775807.

       Examples
          Set the time span to 2 days
            -MinPasswordAge "2"
          Set the time span to 4 hours
            -MinPasswordAge "4:00"
          Set the time span to 5 minutes
            -MinPasswordAge "0:5"
          Set the time span to 45 seconds
            -MinPasswordAge "0:0:45"

   -MinPasswordLength <i>int</i>
       The minimum number of characters that a password must contain.

   -Name <i>string</i>
       The name of the object.
       The LDAP Display Name of this property is "name". 

   -OtherAttributes <i>hashtable</i>
        Specifies object attribute values for attributes that are not represented by cmdlet parameters.
        Syntax:
        To specify a single value:
           -OtherAttributes @{'<i>AttributeLDAPDisplayName</i>'=<i>value</i>}
        To specify multiple values
           -OtherAttributes @{'<i>AttributeLDAPDisplayName</i>'=<i>value1,value2</i>,...}

        e.g.:
           -OtherAttributes @{'ItemPrice'=123; 'favColors'="red","blue"}

   -PassThru
       Returns the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not 
       generate any output.

   -PasswordHistoryCount <i>int</i>
       The number of previous passwords to save.
       A user cannot reuse a password in the list of saved passwords.
       This parameter sets the PasswordHistoryCount property for a password policy. 

   -Precedence <i>int</i>
       A value that defines the precedence of a fine-grained password policy among
       all fine-grained password  policies. 
       The LDAP display name for this property is "msDS-PasswordSettingsPrecedence".

       This value determines which password policy to use when more than one password policy
       applies to a user or group. When there is a conflict, the password policy that has
       the lower Precedence property value has higher priority.
        
       Typically, password policy precedence values are assigned in multiples of 10 or 100, 
       making it easier to add policies at a later time.

       If the specified Precedence parameter is already assigned to another password policy object,
       the cmdlet returns a terminating error.

   -ProtectedFromAccidentalDeletion <i>bool</i>
       Whether to prevent the object from being deleted.
       When this property is set to true, you cannot delete the corresponding object without
       first changing the value of this property.
       Possible values: $false or 0, $true or 1

   -ReversibleEncryptionEnabled <i>bool</i>
       Whether the directory must store passwords using reversible encryption.
       Possible values: $false or 0, $true or 1 

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       NetBIOS name, Fully qualified directory server name (with or without port number) or AD Snapshot instance.

       Examples: demo.SS64.com  demo  demoDC02.demo.ss64.com  demoDC02.demo.ss64.com:3268

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>New-ADFineGrainedPasswordPolicy  creates a new AD fine grained password policy. You can set
commonly used fine grained password policy property values by using the cmdlet parameters. Property values that are not associated with cmdlet parameters can be set by using the<span class="code"> -OtherAttributes</span> parameter. <br>
<br>
You must set the <span class="code">-Name</span> and <span class="code">-Precedence</span> parameters to create a new fine grained password policy. <br>
<br>
The following methods explain different ways to create an object by using this cmdlet.</p>
<p>Method 1: Use  New-ADFineGrainedPasswordPolicy, specify the required parameters, and set any additional property values by using the cmdlet parameters.<br>
<br>
Method 2: Use a template to create the new object. To do this, create a new fine grained password policy object or 
retrieve a copy of an existing fine grained password policy object and set the <span class="code">-Instance</span> parameter to this object. The object provided to the -Instance parameter is used as a template for the new object. You can override property values from the template by setting cmdlet parameters.<br>
<br>
Method 3: Use <a href="import-csv.html">Import-CSV</a>  with the New-ADFineGrainedPasswordPolicy cmdlet to create multiple AD fine grained password policy objects. To do this, use  Import-CSV  to create the custom objects from 
a comma-separated value (CSV) file that contains a list of object properties. Then pass these objects through the <a href="syntax-pipeline.html">pipeline</a> to  New-ADFineGrainedPasswordPolicy  to create the fine grained password policy objects.<br>
<br>
<b>Examples</b></p>
<p>Create a new Fine Grained Password Policy object named 'DomainUsersPSO' and set the Precedence, ComplexityEnabled, 
Description, DisplayName, LockoutDuration, LockoutObservationWindw, and LockoutThreshold properties on the object:</p>
<p><span class="code">PS C:\&gt; New-ADFineGrainedPasswordPolicy -Name "DomainUsersPSO" -Precedence 500 -ComplexityEnabled $true -Description "The Domain Users Password Policy" -DisplayName "Domain Users PSO" -LockoutDuration "0.12:00:00" -LockoutObservationWindow "0.00:15:00" -LockoutThreshold 10</span></p>
<p class="quote"><i>“I never had a policy; I have just tried to do my very best each and every day” ~ Abraham Lincoln</i></p>
<p><b>Related:</b></p>
<p><a href="get-adfinegrainedpasswordpolicy.html">Get-adFineGrainedPasswordPolicy</a> - Get one or more AD fine-grained password policies. <br>
<a href="remove-adfinegrainedpasswordpolicy.html">Remove-adFineGrainedPasswordPolicy</a> - Remove an AD fine-grained password policy.<br> 
<a href="set-adfinegrainedpasswordpolicy.html">Set-adFineGrainedPasswordPolicy</a> - Modify an AD fine-grained password policy.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-adfinegrainedpasswordpolicy.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

