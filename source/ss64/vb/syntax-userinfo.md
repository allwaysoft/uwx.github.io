---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>User Information</h1> 
<p>List User properties as displayed in ADUC</p>
<pre>'userinfo.vbs

' Usage:
'       cscript //Nologo userinfo.vbs

' List User properties as displayed in ADUC

On Error Resume Next
Dim objSysInfo, objUser
Set objSysInfo = CreateObject("ADSystemInfo")

' Currently logged in User
Set objUser = GetObject("LDAP://" &amp; objSysInfo.UserName)
 ' or specific user:
 'Set objUser = GetObject("LDAP://CN=johndoe,OU=Users,DC=ss64,DC=com")

WScript.Echo "DN: " &amp; objUser.distinguishedName

WScript.Echo ""
WScript.Echo "GENERAL"
WScript.Echo "First name: " &amp; objUser.givenName
'WScript.Echo "First name: " &amp; objUser.FirstName
WScript.Echo "Initials: " &amp; objUser.initials
WScript.Echo "Last name: " &amp; objUser.sn
'WScript.Echo "Last name: " &amp; objUser.LastName
WScript.Echo "Display name: " &amp; objUser.displayName
'WScript.Echo "Display name: " &amp; objUser.FullName
WScript.Echo "Description: " &amp; objUser.description
WScript.Echo "Office: " &amp; objUser.physicalDeliveryOfficeName
WScript.Echo "Telephone number: " &amp; objUser.telephoneNumber
WScript.Echo "Other Telephone numbers: " &amp; objUser.otherTelephone
WScript.Echo "Email: " &amp; objUser.mail
' WScript.Echo "Email: " &amp; objUser.EmailAddress
WScript.Echo "Web page: " &amp; objUser.wWWHomePage
WScript.Echo "Other Web pages: " &amp; objUser.url
WScript.Echo ""
WScript.Echo "ADDRESS"
WScript.Echo "Street: " &amp; objUser.streetAddress
WScript.Echo "P.O. Box: " &amp; objUser.postOfficeBox
WScript.Echo "City: " &amp; objUser.l
WScript.Echo "State/province: " &amp; objUser.st
WScript.Echo "Zip/Postal Code: " &amp; objUser.postalCode
WScript.Echo "Country/region: " &amp; objUser.countryCode
'WScript.Echo "Country/region: " &amp; objUser.c    '(ISO 4217)
WScript.Echo ""
WScript.Echo "ACCOUNT"
WScript.Echo "User logon name: " &amp; objUser.userPrincipalName
WScript.Echo "pre-Windows 2000 logon name: " &amp; objUser.sAMAccountName
WScript.Echo "AccountDisabled: " &amp; objUser.AccountDisabled
' WScript.Echo "Account Control #: " &amp; objUser.userAccountControl
WScript.Echo "Logon Hours: " &amp; objUser.logonHours
WScript.Echo "Logon On To (Logon Workstations): " &amp; objUser.userWorkstations
' WScript.Echo "User must change password at next logon: " &amp; objUser.pwdLastSet
WScript.Echo "User cannot change password: " &amp; objUser.userAccountControl
WScript.Echo "Password never expires: " &amp; objUser.userAccountControl
WScript.Echo "Store password using reversible encryption: " &amp; objUser.userAccountControl
' WScript.Echo "Account expires end of (date): " &amp; objUser.accountExpires
WScript.Echo ""
WScript.Echo "PROFILE"
WScript.Echo "Profile path: " &amp; objUser.profilePath
' WScript.Echo "Profile path: " &amp; objUser.Profile
WScript.Echo "Logon script: " &amp; objUser.scriptPath
WScript.Echo "Home folder, local path: " &amp; objUser.homeDirectory
WScript.Echo "Home folder, Connect, Drive: " &amp; objUser.homeDrive
WScript.Echo "Home folder, Connect, To:: " &amp; objUser.homeDirectory
WScript.Echo ""
WScript.Echo "TELEPHONE"
WScript.Echo "Home: " &amp; objUser.homePhone
WScript.Echo "Other Home phone numbers: " &amp; objUser.otherHomePhone
WScript.Echo "Pager: " &amp; objUser.pager
WScript.Echo "Other Pager numbers: " &amp; objUser.otherPager
WScript.Echo "Mobile: " &amp; objUser.mobile
WScript.Echo "Other Mobile numbers: " &amp; objUser.otherMobile
WScript.Echo "Fax: " &amp; objUser.facsimileTelephoneNumber
WScript.Echo "Other Fax numbers: " &amp; objUser.otherFacsimileTelephoneNumber
WScript.Echo "IP phone: " &amp; objUser.ipPhone
WScript.Echo "Other IP phone numbers: " &amp; objUser.otherIpPhone
WScript.Echo "Notes: " &amp; objUser.info
WScript.Echo ""
WScript.Echo "ORGANISATION"
WScript.Echo "Title: " &amp; objUser.title
WScript.Echo "Department: " &amp; objUser.department
WScript.Echo "Company: " &amp; objUser.company
WScript.Echo "Manager: " &amp; objUser.manager</pre>
<p class="quote"><i>“Nearly all men can stand adversity, but if you want to test a man's character, give him power” ~ Abraham Lincoln</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-users.html">ListUsers</a> - List all Users <br>
<a href="syntax-computerinfo.html">ComputerInfo</a> - List Computer properties (as shown in ADUC)<br>
<a href="syntax-username.html">UserName</a> - List user's simple name when called with a Distinguished Name<br>
<a href="syntax-ad.html">SearchAD</a> - Search AD for either Users, Computers or groups</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-userinfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

