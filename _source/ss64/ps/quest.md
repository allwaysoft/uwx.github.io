---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Quest/Dell AD cmdlets for PowerShell (<a href="http://software.dell.com/products/activeroles-server/">Download</a>) </h1> 
<p>After installing, make the  cmdlets available by loading the  Active Roles snap-in: <span class="code"><br>
PS C:&gt; Add-PSSnapin Quest.ActiveRoles.ADManagement</span></p>
<pre> <a href="get-qadcomputer.html">Get-QADComputer</a>        Retrieve computer objects that match specified conditions.
 Connect-QADService     Connect to AD domain controller (or AD LDS) 
 Disconnect-QADService  Disconnect from an AD domain controller

 <a href="get-qadgroup.html">Get-QADGroup</a>          Retrieve groups that match specific conditions
 <a href="set-qadgroup.html">Set-QADGroup</a>          Modify attributes of group(s)
 <a href="new-qadgroup.html">New-QADGroup</a>          Create a new group

 <a href="get-qadgroupmember.html">Get-QADGroupMember</a>    Retrieve members of a group
 <a href="add-qadgroupmember.html">Add-QADGroupMember</a>    Add one or more objects to a group
 <a href="remove-qadgroupmember.html">Remove-QADGroupMember</a> Remove one or more members from a group
 <a href="get-qadmemberof.html">Get-QADMemberOf</a>       Retrieve group memberships of a particular object

 <a href="get-qaduser.html">Get-QADUser</a>           Retrieve users that match specific conditions
 <a href="set-qaduser.html">Set-QADUser</a>           Modify attributes of a user account
 <a href="new-qaduser.html">New-QADUser</a>           Create a new user account
 <a href="enable-qaduser.html">Enable-QADUser</a>        Enable a user account

 <a href="move-qadobject.html">Move-QADObject</a>        Move an object to a new OU
 <a href="remove-qadobject.html">Remove-QADObject</a>      Delete object(s) from Active Directory
 <a href="rename-qadobject.html">Rename-QADObject</a>      Rename an object in Active Directory

 <a href="disable-qaduser.html">Disable-QADUser</a>       Disable a user account
 <a href="unlock-qaduser.html">Unlock-QADUser</a>        Unlock a user account
 <a href="deprovision-qaduser.html">Deprovision-QADUser</a>   Deprovision a user account in AD</pre>
<p>Quest also provide cmdlets for managing AD Objects, AD ACLs, Password settings, Object security and Snap-In settings.</p>
<p>It is also possible to retrieve Active Directory (AD) information using native PowerShell by using LDAP paths with the ADSI provider, this method does tend to become rather verbose for anything non-trivial:</p>
<p class="code">$myOU = [adsi]"LDAP://CN=Jdoe,OU=TestOU,DC=ss64,DC=com"<br>
$myOU | Get-Member</p>
<p>The Quest AD cmdlets will run in PowerShell 1.0 and above.<br>
For  PowerShell 2.0 and above Microsoft now provide an <a href="ad.html">Active Directory module</a>.<br>
With the advent of PowerShell 4.0 many will argue that the Quest cmdlets are <a href="http://blogs.dirteam.com/blogs/sanderberkouwer/archive/2014/01/14/why-i-don-t-like-the-quest-active-directory-powershell-cmdlets.aspx">no longer needed</a>, they duplicate functionality  available in the PowerShell <a href="ad.html">AD Cmdlets</a> that Microsoft ship with Windows Server.</p>
<p class="quote">“More important than the quest for certainty is the quest for clarity”  ~ Francois Gautier </p>
<p><b>Related:</b></p>
<p><a href="http://wiki.powergui.org/index.php/QAD_cmdlets_reference">PowerGui Wiki</a> - List of all the Quest cmdlets<br>
<a href="http://dmitrysotnikov.wordpress.com/">Dmitry’s PowerBlog</a> - Examples<br>
<a href="http://download.microsoft.com/download/2/0/e/20e90413-712f-438c-988e-fdaa79a8ac3d/dotnetfx35.exe">.Net Framework 3.5 (Full)</a> - or (<a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=AB99342F-5D1A-413D-8319-81DA479AB0D7&amp;displaylang=en">Bootstrap</a>) - Required for the Quest Snap-In<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

