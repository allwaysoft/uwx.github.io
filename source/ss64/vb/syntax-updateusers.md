---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Update User Information (LDAP query)</h1> 
<p>Find all the users with a specific Office in Active Directory (physicalDeliveryOfficeName) and
update it to something new. This script could also be modified to target different <a href="syntax-userinfo.html">user attributes</a>.</p>
<pre>'OfficeRename.vbs
'
' Find all the users with a specific Office in AD and
' update their Office to a new Name.
'
Option Explicit

Dim objRootDSE, strDNSDomain, adoCommand, adoConnection
Dim strBase, strFilter, strAttributes, strQuery, adoRecordset
Dim strDN, strFirstName, strLastName, objUser, strSite,strUserName, strOldOffice, StrNewOffice, intOfficeLen


strOldOffice = "<b>College House</b>"
strNewOffice = "<b>New Grand Central</b>"

intOfficeLen = len(strOldOffice)

' Determine DNS domain name.
Set objRootDSE = GetObject("LDAP://RootDSE")
strDNSDomain = objRootDSE.Get("defaultNamingContext")

' Use ADO to search Active Directory.
Set adoCommand = CreateObject("ADODB.Command")
Set adoConnection = CreateObject("ADODB.Connection")
adoConnection.Provider = "ADsDSOObject"
adoConnection.Open "Active Directory Provider"
adoCommand.ActiveConnection = adoConnection

' Search entire domain.
strBase = "&lt;LDAP://" &amp; strDNSDomain &amp; "&gt;"

' Filter on all user objects.
strFilter = "(&amp;(objectCategory=person)(objectClass=user))"

' Comma delimited list of attribute values to retrieve.
strAttributes = "distinguishedName,givenName,sn,physicalDeliveryOfficeName"

' Construct the LDAP query.
strQuery = strBase &amp; ";" &amp; strFilter &amp; ";" &amp; strAttributes &amp; ";subtree"

' Run the query.
adoCommand.CommandText = strQuery
adoCommand.Properties("Page Size") = 100
adoCommand.Properties("Timeout") = 30
adoCommand.Properties("Cache Results") = False
Set adoRecordset = adoCommand.Execute

' Enumerate the resulting recordset.
Do Until adoRecordset.EOF
    ' Retrieve values.
    strDN = adoRecordset.Fields("distinguishedName").Value
    strDN = Replace(strDN, "/", "\/")
    strSite = adoRecordset.Fields("<b>physicalDeliveryOfficeName</b>").Value
    strFirstName = adoRecordset.Fields("givenName").Value &amp; ""
    strLastName = adoRecordset.Fields("sn").Value &amp; ""
    strUserName = adoRecordset.Fields("distinguishedName").Value

    If (left(strSite,intOfficeLen) = strOldOffice) Then
        ' Echo User
         wscript.echo strFirstName &amp; "." &amp; strLastName &amp; " " &amp; strUserName

        ' Bind to user object.
        Set objUser = GetObject("LDAP://" &amp; strDN)
        ' Assign value to physicalDeliveryOfficeName attribute.

        objUser.<b>physicalDeliveryOfficeName</b> = strNewOffice
        ' Save change.
        objUser.SetInfo
    End If
    adoRecordset.MoveNext
Loop
adoRecordset.Close
adoConnection.Close

' Clean up.
Set objRootDSE = Nothing
Set adoCommand = Nothing
Set adoConnection = Nothing
Set adoRecordset = Nothing</pre>
<p class="quote"><i>“Nearly all men can stand adversity, but if you want to test a man's character, give him power” ~ Abraham Lincoln</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-users.html">ListUsers</a> - List all Users<br>
  <a href="syntax-userinfo.html">UserInfo</a> - List properties of a User (as shown in ADUC)  <br>
  <a href="syntax-username.html">UserName</a> - List user's simple name when called with a Distinguished Name<br>
<a href="syntax-ad.html">SearchAD</a> - Search AD for either Users, Computers or Workgroups</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-updateusers.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

