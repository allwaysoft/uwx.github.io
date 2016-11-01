---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Search AD </h1> 
<p>Search Active Directory for either Users, Computers or Groups.<br> 
The LDAP query string below can be modified to return different information. Alternative search query strings can be written using the <i>Active Directory Users and Computers</i> (ADUC) GUI.</p>
<pre>'SearchAD.vbs
On Error Resume Next
' Connect to the LDAP server's root object
Set objRootDSE = GetObject("LDAP://RootDSE")
strDNSDomain = objRootDSE.Get("defaultNamingContext")
strTarget = "LDAP://" &amp; strDNSDomain
wscript.Echo "Starting search from " &amp; strTarget

' Connect to Ad Provider
Set objConnection = CreateObject("ADODB.Connection")
objConnection.Provider = "ADsDSOObject"
objConnection.Open "Active Directory Provider"

Set objCmd =   CreateObject("ADODB.Command")
Set objCmd.ActiveConnection = objConnection 

' Show only computers
objCmd.CommandText = "SELECT Name, ADsPath FROM '" &amp; strTarget &amp; "' WHERE objectCategory = 'computer'"

' or show only users
'objCmd.CommandText = "SELECT Name, ADsPath FROM '" &amp; strTarget &amp; "' WHERE objectCategory = 'user'"

' or show only groups
'objCmd.CommandText = "SELECT Name, ADsPath FROM '" &amp; strTarget &amp; "' WHERE objectCategory = 'group'"<br>
Const ADS_SCOPE_SUBTREE = 2
objCmd.Properties("Page Size") = 100
objCmd.Properties("Timeout") = 30
objCmd.Properties("Searchscope") = ADS_SCOPE_SUBTREE
objCmd.Properties("Cache Results") = False

Set objRecordSet = objCmd.Execute

' Iterate through the results
objRecordSet.MoveFirst
Do Until objRecordSet.EOF
   sComputerName = objRecordSet.Fields("Name")
   wscript.Echo sComputerName
   objRecordSet.MoveNext
Loop
</pre>
<p><b> Examples</b></p>
<p class="code">cscript SearchAD.vbs<br>
<br>
cscript SearchAD.vbs &gt;output.txt</p>
<p class="quote"><i>“Face the facts of being what you are, for that is what changes what you are” ~ Soren Kierkegaard</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-computerinfo.html">ComputerInfo</a> - List properties of a Computer (as shown in ADUC)<br>
CMD:
<a href="../nt/dsquery.html">DSQUERY</a> - Search for an active directory object.<br>
<a href="syntax-movead.html">Move-Object</a> - Move an AD object (User,  Group, computer etc) to a different OU<br>
Powershell : <a href="../ps/get-adcomputer.html">Get-adComputer</a> - <a href="../ps/get-aduser.html">Get-adUser</a> - <a href="../ps/get-adgroup.html">Get-adGroup</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-ad.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

