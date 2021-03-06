---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-ADForest</h1> 
<p>Modify an AD forest.</p>
<pre>Syntax
      Set-ADForest [-Identity] <i>ADForest</i>
         [-AuthType {<u>Negotiate</u> | Basic}] [-Credential <i>PSCredential</i>]
            [-PassThru] [-Server <i>string</i>]
               [-SPNSuffixes <i>hashtable</i>] [-UPNSuffixes <i>hashtable</i>] [<i>CommonParameters</i>]

Key
   -AuthType {<u>Negotiate</u> | Basic}
       The authentication method to use: Negotiate (or 0), Basic (or 1)
       A Secure Sockets Layer (SSL) connection is required for Basic authentication.

   -Credential <i>PSCredential</i>
       The user account credentials to use to perform this task.
       The default credentials are those of the currently logged on user unless the
       cmdlet is run from an Active Directory PowerShell provider drive.
       If the cmdlet is run from such a provider drive, the account associated with the drive is the default.

       Type a user name, such as "User64" or "Domain64\User64" or specify a
       PSCredential object such as one generated by <a href="get-credential.html">Get-Credential</a> 

       If a user name is specified, the cmdlet will prompt for a password.

   -Identity <i>ADForest</i>
       An AD Forest object.
       This may be given as:
          Fully qualified domain name: corp.SS64.com
          GUID (objectGUID): 539c5d2e-e75d-4d20-8a42-033d96465f68
          DNS host name:     dnsServer.corp.SS64.com
          NetBIOS name:      SS64

       The cmdlet searches the default naming context or partition to find the object.
       If two or more objects are found, the cmdlet returns a non-terminating error.

       The <i>ADForest</i> object may also be passed through the pipeline or set via a variable.

   -PassThru
       Return the new or modified object.
       By default (i.e. if -PassThru is not specified), this cmdlet does not generate any output.

   -Server <i>string</i>
       The AD Domain Services instance to connect to, this may be a Fully qualified domain name,
       or NetBIOS name, Fully qualified directory server name (with or without port number.)

   -SPNSuffixes <i>hashtable</i>
       Modify the list of Service Principal Name (SPN) suffixes of the forest.
       (sets the multi-valued msDS-SPNSuffixes property of the cross-reference container.)
       Use the following syntax to add remove, replace, or clear SPN suffix values:

          -SPNSuffixes @{Add=value1,value2,...}
          -SPNSuffixes @{Remove=value3,value4,...}
          -SPNSuffixes @{Replace=value1,value2,...}
          -SPNSuffixes $null
        
       Specify more than one change with a semicolon separated list.
       For example:
          @{Add=value1,value2,...};@{Remove=value3,value4,...}
        
       Operators will be applied in the sequence: Remove,Add, Replace then Clear
        
       example:
          -@{Add="SS64Europe", "SS64Asia"};@{Remove="SS64"}

   -UPNSuffixes <i>hashtable</i>
       Modify the list of User Principal Name (UPN) suffixes of the forest.
       (sets the multi-valued msDS-UPNSuffixes property of the cross-reference container.)
       This parameter uses the same syntax as -SPNSuffixes above

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Set-ADForest  modifies the properties of an AD forest. You can modify commonly used property values by using the cmdlet parameters. Property values that are not associated with cmdlet parameters can be modified with the -Add, -Replace, -Clear and -Remove parameters.<br>
<br>
The <span class="code">-Identity</span> parameter specifies the AD forest to modify. You can identify a forest by its fully qualified domain name (FQDN), GUID, DNS host name, or NetBIOS name. You can also set the -Identity parameter to an object variable  or  through the <a href="syntax-pipeline.html">pipeline</a>.<br>
<br>
The <span class="code">-Instance</span> parameter provides a way to update a forest object by applying the changes made to a copy of the object. When you set the -Instance parameter to a copy of an AD forest object that has been modified, the Set-ADForest cmdlet makes the same changes to the original forest object. To get a copy of the object to modify, use
the Get-ADForest object. </p>
<p>Example: Modify the UPNSuffixes property for the SS64.com forest by first modifying a local instance of the SS64.com forest. Then setting the -Instance parameter to the local instance:<br>
<br>
<span class="code">$forest = Get-ADForest -Identity SS64.com<br>
$forest.UPNSuffixes = "SS64.com","SS64","corp.SS64.com"<br>
Set-ADForest -Instance $forest.</span></p>
<p>The -Identity parameter is not allowed when you use the -Instance parameter. <br>
</p>
<p><b>Examples</b></p>
<p>Set the UPNSuffixes property on the SS64.com forest:</p>
<p class="code">PS C:\&gt; Set-ADForest -Identity SS64.com -UPNSuffixes @{replace="SS64.com","SS64","corp.SS64.com"}</p>
<p>Add corp.SS64.com to the SPNSuffixes property on the forest SS64.com: </p>
<p class="code">PS C:\&gt; Set-ADForest -Identity SS64.com -SPNSuffixes @{add="corp.SS64.com"}</p>
<p>Get the forest of the current logged on user and clear the UPNSuffixes property:</p>
<p class="code">PS C:\&gt; Get-ADForest | Set-ADForest -UPNSuffixes $null</p>
<p class="quote"><i>“The world's a forest, in which all lose their way; though by a different path each goes astray” ~ George Villiers</i></p>
<p><b>Related:</b></p>
<p><a href="set-addomain.html">Set-adDomain</a> - Modify an AD domain.<br> 
Set-adDomainMode     - Set the domain functional level for an AD domain.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-adforest.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

