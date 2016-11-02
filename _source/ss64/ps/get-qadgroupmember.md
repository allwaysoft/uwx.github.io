---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-QADGroupMember</h1> 
<p>Retrieve the members of a group in Active Directory. </p>
<pre>Syntax
      Get-QADGroupMember [-Identity] <i>IdentityParameter</i> [-Indirect]
        [-Type <i>String</i>] [-SizeLimit <i>Int32</i>] [-LdapFilter <i>String</i>]
           <i>ADProperties</i> [-IncludeAllProperties] <i>DateTimeOptions</i>
              <i>Advanced_Options</i> [-SerializeValues]

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -Type        The type of directory objects to find ('objectClass' attribute).

   <i>ADProperties</i> Retrieve objects that match one or more of the properties below:
                [-Description <i>String</i>] [-Name <i>String</i>] [-DisplayName <i>String</i>]
                [-Anr <i>String</i>]  (ambiguous name resolution)

<i>   DateTimeOptions</i>
                Only return items matching a date range:
                [-CreatedOn <i>DateTime</i>] [-CreatedAfter <i>DateTime</i>] [-CreatedBefore <i>DateTime</i>]
                [-LastChangedOn <i>DateTime</i>] [-LastChangedAfter <i>DateTime</i>] [-LastChangedBefore <i>DateTime</i>]

   -SizeLimit   Maximum number of items to be returned (default=1000) 

   -LdapFilter  A case-sensitive LDAP search filter.<br>                If an Identity value is supplied this parameter will be ignored.

   -IncludeAllProperties
                Retrieve all attributes of the computer object

   -SerializeValues
                Output the object properties as a string (serialized) this makes it easy to
                export attribute values to a text file. When used with -IncludeAllProperties, <br>                an entire object can be exported from AD into a text file.

<i>Advanced_Options</i>:
                [-PageSize <i>Int32</i>] [-WildcardMode <i>WildcardMode</i>] [-ObjectAttributes <i>Object</i>]  
                [-DontConvertValuesToFriendlyRepresentation] [-ReturnPropertyNamesOnly]
                [-UseDefaultExcludedProperties] [-DontUseDefaultIncludedProperties] 
                [-UseDefaultExcludedPropertiesExcept <i>String</i> []] [-ExcludedProperties <i>String</i>[]]
                [-IncludedProperties <i>String</i>[]] [-UseGlobalCatalog] 
                [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
<b>Notes:</b><br>
By default <span class="code">Get-QADGroupMember</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Display  a list of members of the group:</p>
<p><span class="code">PS C:&gt; Get-QADGroupMember 'ss64Dom\Administrators'</span></p>
<p> Retrieve users that belong to a particular group (directly or because of group nesting):</p>
<p><span class="code">PS C:&gt; Get-QADGroupMember 'ss64Dom\Workstation_Admins_group' -Type 'user' -Indirect</span></p>
<p><i>“There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded” - Mark Twain</i></p>
<p><b>Related:</b></p>
<p><a href="get-qadgroup.html">Get-QADGroup</a> - Retrieve groups that match specific conditions<br>
<a href="quest.html">Quest cmdlets</a><br>
<a href="https://support.microsoft.com/kb/243330">Q243330</a> - Well-known security identifiers (sids) in Windows operating systems</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-qadgroupmember.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

