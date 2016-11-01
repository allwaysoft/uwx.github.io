---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-QADGroupMember</h1> 
<p>Add one or more objects to a group in Active Directory.</p>
<pre>Syntax
      Add-QADGroupMember [-Identity] <i>IdentityParameter</i> [-Member] <i>IdentityParameter</i>
        [-Type <i>String</i>] [-SizeLimit <i>Int32</i>] [-LdapFilter <i>String</i>]
           <i>ADProperties</i> [-IncludeAllProperties] <i>DateTimeOptions</i>
              [-WhatIf] [-Confirm]  <i>Advanced_Options</i> 

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -Member      A list of objects to be added to the group.
                Each list entry is the DN, SID, GUID, UPN or Domain\Name of
                a directory object. Separate the list entries with commas.

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

<i>Advanced_Options</i>:
                [-Proxy] [-Service <i>String</i>] [-UseGlobalCatalog] 
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Add-QADGroupMember</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Add  a list of members to the group <span class="code">group64</span>:</p>
<p><span class="code">PS C:&gt; add-QADGroupMember -identity 'CN=group64,OU=demoOU,DC=ss64,DC=com' -member <br>
'ss64\JaneD','ss64Dom\LiamJ'</span></p>
<p><i>“I hope someday you'll join us, and the world will be as one” - John Lennon (Imagine) </i></p>
<p><b>Related:</b></p>
<p><a href="get-qadgroup.html">Get-QADGroup</a> - Retrieve groups that match specific conditions<br>
<a href="quest.html">Quest cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="add-qadgroupmember.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

