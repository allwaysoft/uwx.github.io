---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-QADUser (<a href="quest.html">Quest</a> cmdlet) </h1> 
<p>Modify attributes of a user account in Active Directory.</p>
<pre>Syntax
      Set-QADUser [[-Identity] <i>IdentityParameter</i>] <i>ADProperties</i>
         [-AccountExpires <i>Nullable</i>] [-PasswordNeverExpires]
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
                [-WebPage <i>String</i>] [-HomeDirectory <i>String</i>] [-HomeDrive <i>String</i>]
                [-ProfilePath <i>String</i>] [-LogonScript <i>String</i>] [-Email <i>String</i>] 
                [-Description <i>String</i>] [-DisplayName <i>String</i>] [-Name <i>String</i>]

<i>  TerminalServiceProperties</i>:
                [-TsProfilePath <i>String</i>] [-TsHomeDirectory <i>String</i>]
                [-TsHomeDrive <i>String</i>] [-TsWorkDirectory <i>String</i>]
                [-TsInitialProgram <i>String</i>] [-TsMaxDisconnectionTime <i>TimeSpan</i>] 
                [-TsMaxConnectionTime <i>TimeSpan</i>] [-TsMaxIdleTime <i>TimeSpan</i>]
                [-TsAllowLogon] [-TsRemoteControl <i>Int32</i>] [-TsReconnectionAction <i>Int32</i>]
                [-TsBrokenConnectionAction <i>Int32</i>] [-TsConnectClientDrives]
                [-TsConnectPrinterDrives] [-TsDefaultToMainPrinter]

  <i>Advanced_Options</i>:
                [-ObjectAttributes <i>ObjectAttributesParameter</i>] 
                [-ExcludedProperties <i>String[]</i>] [-IncludedProperties <i>String[]</i>]
                [-DeserializeValues] [-UseDefaultExcludedProperties] 
                [-Proxy] [-UseGlobalCatalog] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>] 
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Set-QADUser</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Change the  description for JDoe </p>
<p><span class="code">PS C:&gt; Set-QADUser 'CN=JDoe,CN=Users,DC=SS64,DC=com' -description 'Fall guy'</span></p>
<p> Assign two values to the multi-valued attribute "otherTelephone" for JDoe: </p>
<p><span class="code">PS C:&gt; Set-QADUser 'SS64.com/usersOU/JDoe' -objectAttributes 
@{otherTelephone=@('0208 124 2244','0207 468 2323')}</span></p>
<p>Clear the multi-valued attribute "otherTelephone" for JDoe: </p>
<p class="code">PS C:&gt; Set-QADUser 'SS64.com/usersOU/JDoe' -objectAttributes @{otherTelephone=''}</p>
<p class="quote"><i>“Those who flee temptation generally leave a forwarding address” ~ Lane Olinghouse</i></p>
<p><b>Related:</b></p>
<p><a href="http://en.community.dell.com/techcenter/powergui/w/wiki/new_2d00_qaduser">PowerGui Wiki</a> for New-QADUser<br>
<a href="get-qadcomputer.html">Get-QADComputer</a><br>
<a href="get-qadgroup.html">Get-QADGroup</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="set-qaduser.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

