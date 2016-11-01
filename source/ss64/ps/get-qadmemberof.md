---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-QADMemberof</h1> 
<p>Retrieve group memberships of a particular object in Active Directory.</p>
<pre>Syntax
      Get-QADMemberOf [-Identity] <i>IdentityParameter</i> [-Indirect]  
         [-SizeLimit <i>Int32</i>] [-LdapFilter <i>String</i>]
            <i>ADProperties</i> <i>DateTimeOptions</i> <i>Advanced_Options</i>
               [-IncludeAllProperties] [-SerializeValues] 
  
Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -Indirect    Retrieve all groups to which the object belongs, (include inherited groups.)

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
                [-PageSize <i>Int32</i>] [-ObjectAttributes <i>Object</i>] [-WildcardMode <i>WildcardMode</i>]  
                [-DontConvertValuesToFriendlyRepresentation] [-ReturnPropertyNamesOnly]
                [-UseDefaultExcludedProperties] [-DontUseDefaultIncludedProperties] 
                [-UseDefaultExcludedPropertiesExcept <i>String</i> []] 
                [-IncludedProperties <i>String</i>[]] [-ExcludedProperties <i>String</i>[]]
                [-Proxy] [-Service <i>String</i>] [-UseGlobalCatalog] 
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Get-QADMemberof</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Retrieve groups of which <span class="code">LiamJ</span> is a direct member:</p>
<p><span class="code">PS C:&gt; Get-QADMemberOf 'ss64Dom\LiamJ'</span></p>
<p> Retrieve groups of which <span class="code">LiamJ</span> is a direct or indirect member and whose group name starts with 'Admin' </p>
<p><span class="code">PS C:&gt; Get-QADMemberOf 'domainName\userName' -Indirect -Name 'Admin*'</span></p>
<p><i>“It is the friends you can call up at 4 a.m. that matter” - Marlene Dietrich</i></p>
<p><b>Related:</b></p>
<p><a href="get-qadgroupmember.html">Get-QADGroupMember </a>- Retrieve members of a group<br>
<a href="quest.html">Quest cmdlets</a><br> 
<a href="syntax-wildcards.html">Syntax - Wildcards</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-qadmemberof.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

