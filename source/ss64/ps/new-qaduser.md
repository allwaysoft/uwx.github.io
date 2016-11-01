---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-QADUser (<a href="quest.html">Quest</a> cmdlet) </h1> 
<p>Create a new user account.</p>
<pre>Syntax
      New-QADUser [-Name] <i>String</i> [-ParentContainer <i>IdentityParameter</i>] <i>ADProperties</i>
         -UserPassword <i>String</i> [-AccountExpires <i>Nullable</i>] [-PasswordNeverExpires]
            [-UserMustChangePassword] <i>TerminalServiceProperties</i>
               [-UserPassword <i>String</i>] <i>Advanced_Options</i>
                  [-<a href="common.html">WhatIf</a>] [-<a href="common.html">Confirm</a>]

Key
   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -AccountExpires
                Set the account expiration date

   -PasswordNeverExpires
                Set to True to never expire the account password

   <i>ADProperties</i>
                Set object properties:
                [-Manager <i>IdentityParameter</i>] [-City <i>String</i>] [-Company <i>String</i>]
                [-Department <i>String</i>] [-Fax <i>String</i>] [-FirstName <i>String</i>]
                [-HomePhone <i>String</i>] [-Initials <i>String</i>]  [-LastName <i>String</i>]
                [-MobilePhone <i>String</i>] [-Notes <i>String</i>] [-Office <i>String</i>]
                [-Pager <i>String</i>] [-PhoneNumber <i>String</i>] [-PostalCode <i>String</i>]
                [-PostOfficeBox <i>String</i>] [-SamAccountName <i>String</i>] [-StateOrProvince <i>String</i>]
                [-StreetAddress <i>String</i>] [-Title <i>String</i>] [-UserPrincipalName <i>String</i>]
                [-WebPage <i>String</i>] 
               <b> [-ProfilePath <i>String</i>] [-LogonScript <i>String</i>] [-Email <i>String</i>] ?</b>
                [-Description <i>String</i>] [-DisplayName <i>String</i>] 

  <i>Advanced_Options</i>:
                [-ObjectAttributes <i>ObjectAttributesParameter</i>] 
                [-ExcludedProperties <i>String[]</i>] [-IncludedProperties <i>String[]</i>]
                [-DeserializeValues] [-UseDefaultExcludedProperties] 
                [-Proxy] [-UseGlobalCatalog] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>] 
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">New-QADUser</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Create a user called 'user64' </p>
<p><span class="code">PS C:&gt; New-QADUser  -name 'user64' -ParentContainer 'CN=Users,DC=SS64,DC=com' -samAccountName 'user64' -UserPassword 'Pass123'</span></p>
<p> Create a user called 'user65' </p>
<p><span class="code">PS C:&gt; $pass = read-host "Enter password" -AsSecureString</span></p>
<p><span class="code">PS C:&gt; New-QADUser  -name 'user65' -ParentContainer 'CN=Users,DC=SS64,DC=com' -samAccountName 'user65' -UserPassword $pass</span></p>
<p class="quote"><i>“Birth does not lead to greatness; but the cultivation of virtues by a person leads him to greatness” ~ Anon </i></p>
<p><b>Related:</b></p>
<p><a href="http://wiki.powergui.org/index.php/New-QADUser">PowerGui Wiki</a> for New-QADUser<br>
<a href="get-qaduser.html">Get-QADUser</a> - Retrieve users that match specific conditions<a href="set-qaduser.html"><br>Set-QADUser</a> - Modify attributes of a user account</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-qaduser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

