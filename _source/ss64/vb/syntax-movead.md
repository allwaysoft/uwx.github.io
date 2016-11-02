---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Move an AD object   to a new Organisational Unit.</h1> 
<p>This script can be used to move an AD object (User,  Group, computer etc) to a different OU within Active Directory.<br>
</p>
<pre>Option Explicit
' Move-object.vbs ObjectToMove TargetOU ObjectType
'
' Move an AD object into a specific OU
' Search AD (from the root) to find the current location of the object.

On Error Resume Next
Dim strObject,strTargetOU,objTargetOU,objRootDSE,strDNSDomain,strTarget,objConnection,objCmd,objRecordSet
Dim Object,strParent,objParentOU,strObjectName,strObjectDN,strObjectOU

strObject =  Wscript.Arguments(0)
strTargetOU = Wscript.Arguments(1)
strObjectType = Wscript.Arguments(2)

wscript.Echo "Move the Object " &amp; strObject 
'wscript.Echo &amp; "into the OU: " &amp; strTargetOU

Set objTargetOU = GetObject("LDAP://" &amp; strTargetOU)

' Connect to the LDAP server's root object
Set objRootDSE = GetObject("LDAP://RootDSE")
strDNSDomain = objRootDSE.Get("defaultNamingContext")
strTarget = "LDAP://" &amp; strDNSDomain

' Connect to AD Provider
Set objConnection = CreateObject("ADODB.Connection")
objConnection.Provider = "ADsDSOObject"
objConnection.Open "Active Directory Provider"

' Search command
Set objCmd = CreateObject("ADODB.Command")
Set objCmd.ActiveConnection = objConnection 

' Query to match Object name
objCmd.CommandText = "SELECT Name, ADsPath,distinguishedName FROM '" &amp; strTarget &amp; "' WHERE objectCategory = strObjectType AND name='" &amp; strObject &amp; "'"
' Run the Search command
Const ADS_SCOPE_SUBTREE = 2
objCmd.Properties("Page Size") = 100
objCmd.Properties("Timeout") = 30
objCmd.Properties("Searchscope") = ADS_SCOPE_SUBTREE
objCmd.Properties("Cache Results") = False
Set objRecordSet = objCmd.Execute

' Iterate through the results
objRecordSet.MoveFirst
Do Until objRecordSet.EOF
   strObjectName = objRecordSet.Fields("Name")
   wscript.Echo "Object Name: " &amp; strObjectName
   strObjectDN = objRecordSet.Fields("distinguishedName")
   wscript.Echo "Object DN: " &amp; strObjectDN
   objRecordSet.MoveNext
Loop

' Having the current OU we can bind directly to the Object that will be moved.
Set Object = GetObject("LDAP://" &amp; strObjectDN)
wscript.Echo Object.ADsPath

' Optionally you may want to display the parent OU.
 strParent = Object.Parent
 'wscript.Echo "Parent: " &amp; strParent
 Set objParentOU = GetObject(strParent)
 strObjectOU = objParentOU.distinguishedName
 'wscript.Echo "ParentOU: " &amp; strObjectOU


' Move the Object
On Error Resume Next
wscript.Echo "Move the Object [" &amp; strObject &amp; "] to " &amp; strTargetOU
objTargetOU.MoveHere Object.ADsPath, vbNullString

if err.number &lt;&gt; 0 then
   wscript.Echo "Error - failed."
else
   wscript.Echo "Complete."
end if 

On Error Goto 0
</pre>
<p>The valid AD Object types are: User, Contact, Group, Shared Folder, Printer, Computer, Domain Controllers, OU</p>
<p><b>Example</b></p>
<p class="code">cscript Move-object.vbs "johndoe" "LDAP://OU=Users,DC=ss64,DC=com" "User"<br>
</p>
<p class="quote"><i>“The majority of men meet with failure because of their lack of persistence in creating new plans to take the place of those which fail” ~   Napoleon Hill</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-ad.html">SearchAD</a> - Search AD for Users, Computers or groups</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-movead.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

