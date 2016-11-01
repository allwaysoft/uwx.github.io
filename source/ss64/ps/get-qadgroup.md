---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-QADGroup</h1> 
<p>Retrieve all groups in a domain or container that match the specified conditions.</p>
<pre>Syntax
      Get-QADGroup [[-Identity] <i>IdentityParameter</i>] [-GroupType <i>GroupType</i>]
         [-GroupScope <i>GroupScope</i>] [-Tombstone] [-Dynamic] [-Empty]
            <i>ADProperties</i> <i>DateTimeOptions Membership</i> <i>Advanced_Options</i>
               [-SizeLimit <i>Int32</i>] [-LdapFilter <i>String</i>]
                  [-IncludeAllProperties] [-SerializeValues] 
Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -GroupType   'Security' or 'Distribution' 

   -GroupScope  'Global' 'Universal' or 'DomainLocal' 

   -Empty       Only retrieve groups that have no members.

   <i>ADProperties</i> Retrieve objects that match one or more of the properties below:
 
                [-Description <i>String</i>] [-Name <i>String</i>] [-DisplayName <i>String</i>]
                [-SamAccountName <i>String</i>] 
                [-Anr <i>String</i>]  (ambiguous name resolution)

<i>   DateTimeOptions</i>
                Only return items matching a date range:
                [-CreatedOn <i>DateTime</i>] [-CreatedAfter <i>DateTime</i>] [-CreatedBefore <i>DateTime</i>]
                [-LastChangedOn <i>DateTime</i>] [-LastChangedAfter <i>DateTime</i>] [-LastChangedBefore <i>DateTime</i>]

<i>   Membership</i>
                Only return items that belong (or don't belong) to given groups:

                [-MemberOf <i>IdentityParameter</i>[]] [-IndirectMemberOf <i>IdentityParameter</i>[]] 
                [-NotMemberOf <i>IdentityParameter</i>[]] [-NotIndirectMemberOf <i>IdentityParameter</i>[]]
                [-ContainsMember <i>IdentityParameter</i>[]] [-ContainsIndirectMember <i>IdentityParameter</i>[]] 
                [-NotContainsMember <i>IdentityParameter</i>[]] [-NotContainsIndirectMember <i>IdentityParameter</i>[]]

   -SizeLimit   Maximum number of items to be returned (default=1000) 

   -LdapFilter  A case-sensitive LDAP search filter.<br>                If an Identity value is supplied this parameter will be ignored.

   -IncludeAllProperties
                Retrieve all attributes of the computer object

   -SerializeValues
                Output the object properties as a string (serialized) this makes it easy to
                export attribute values to a text file. When used with -IncludeAllProperties, <br>                an entire object can be exported from AD into a text file.

   -Tombstone   Search for deleted objects. (see Restore-QADDeletedObject)

   <i>Advanced_Options</i>:
                [-LastKnownParent <i>IdentityParameter</i>] [-SecurityMask <i>SecurityMasks</i>]
                [-SearchRoot <i>IdentityParameter</i>] [-SearchScope <i>SearchScope</i>]
                [-AttributeScopeQuery <i>String</i>] [-PageSize <i>Int32</i>]  
                [-WildcardMode <i>WildcardMode</i>] [-ObjectAttributes <i>Object</i>]  [-Anr <i>String</i>] 
                [-DontConvertValuesToFriendlyRepresentation] [-ReturnPropertyNamesOnly]
                [-UseDefaultExcludedProperties] [-DontUseDefaultIncludedProperties] 
                [-UseDefaultExcludedPropertiesExcept <i>String</i> []] [-ExcludedProperties <i>String</i>[]]
                [-IncludedProperties <i>String</i>[]] [-UseGlobalCatalog] 
                [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Get-QADGroup</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Display the description of the 'SuperAdmins' group in domain ss64Dom </p>
<p><span class="code">PS C:&gt;(get-QADGroup 'ss64Dom\SuperAdmins').DirectoryEntry.description</span></p>
<p> Using an LDAP search filter, display all the  groups whose description starts with an 's' </p>
<p><span class="code">PS C:&gt; get-QADGroup -SearchRoot 'ss64.com/sampleOU' -LdapFilter '(description=s*)' </span></p>
<p>List all 
distribution groups in a specific OU container:</p>
<p class="code">PS C:&gt; get-QADGroup -SearchRoot 'ss64.com/sampleOU' -GroupType 'Distribution'</p>
<p>Retrieve groups from a particular container that have the user <span class="code">usr1021</span> as a direct or indirect 
member:</p>
<p><span class="code">PS C:&gt; get-QADGroup -SearchRoot '&lt;DN of container&gt;' -ContainsIndirectMember 
'ss64Dom\usr1021'</span></p>
<p><i>“Three groups spend other people's money: children, thieves, politicians. All three need supervision” - Dick Armey</i></p>
<p><b>Related:</b></p>
<p><a href="quest.html">Quest cmdlets</a><br>

<a href="set-qadgroup.html">Set-QADGroup</a> - Modify attributes of group(s)<br>
<a href="https://support.microsoft.com/kb/243330">Q243330</a> - Well-known security identifiers (sids) in Windows operating systems</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-qadgroup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

