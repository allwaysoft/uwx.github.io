---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Computer Information</h1> 
<p>List Computer properties as displayed in ADUC</p>
<pre>'compinfo.vbs

' Usage:
'        cscript //Nologo compinfo.vbs

' List Computer properties as displayed in ADUC

On Error Resume Next
Dim objSysInfo, objComp
Set objSysInfo = CreateObject("ADSystemInfo")

' Current computer
Set objComp = GetObject("LDAP://" &amp; objSysInfo.ComputerName)
 ' or a specific computer:
 ' Set objComp = GetObject("LDAP://CN=pc005,OU=Computers,DC=ss64,DC=com")

WScript.Echo "--- Computer Properties ---"
WScript.Echo "Name: " &amp; objComp.name
WScript.Echo "cn: " &amp; objComp.cn
WScript.Echo "DNSHostName: " &amp; objComp.dNSHostName

WScript.Echo "OperatingSystem: " &amp; objComp.operatingSystem
WScript.Echo "ServicePack: " &amp; objComp.operatingSystemServicePack

WScript.Echo "SAMAccountName: " &amp; objComp.sAMAccountName
WScript.Echo "Location: " &amp; objComp.location
WScript.Echo "UserAccountControl: " &amp; objComp.userAccountControl
WScript.Echo "PrimaryGroupID: " &amp; objComp.primaryGroupID
WScript.Echo "WhenCreated: " &amp; objComp.whenCreated
WScript.Echo "WhenChanged: " &amp; objComp.whenChanged
WScript.Echo "DistinguishedName: " &amp; objComp.distinguishedName</pre>
<p class="quote"><i>“Success is falling nine times and getting up ten” ~ Jon Bon Jovi</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-computers.html">ListComputers.vbs</a> - List all computers <br>
<a href="syntax-userinfo.html">userinfo.vbs</a> - List properties of a User (as shown in ADUC)<br>
<a href="syntax-ad.html">SearchAD</a> - Search AD for either Users, Computers or groups<br>
Powershell : <a href="../ps/get-adcomputer.html">Get-adComputer</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-computerinfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

