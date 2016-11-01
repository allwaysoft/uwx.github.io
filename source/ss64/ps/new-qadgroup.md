---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-QADGroup</h1> 
<p>Create a new  group in active directory.</p>
<pre>Syntax
      New-QADGroup [-Name] <i>String</i> 
         -ParentContainer <i>IdentityParameter</i> 
           [-GroupType <i>GroupType</i>] [-GroupScope <i>GroupScope</i>] 
<i>              ADProperties</i>  <i> Advanced_Options</i>
                 [-DeserializeValues] [-WhatIf] [-Confirm]

Key

 -ParentContainer The Distinguished Name (DN) of the container in which to
                  create the new directory object.

   -GroupType    'Security' or 'Distribution' 

   -GroupScope   'Global' 'Universal' or 'DomainLocal' 

  <i>ADProperties</i>   Set one or more of the properties below:
 
                 [-Description <i>String</i>] [-DisplayName <i>String</i>]
                 [-SamAccountName <i>String</i>] [-Member <i>IdentityParameter</i>[]]

   -DeserializeValues
                 Use if the input contains serialized attribute values
                 (for instance, when importing a directory object from a text
                 file that was created using <a href="get-qadgroup.html">-Serialize</a>)

   -WhatIf       Describe what would happen if you executed the command,
                 without actually executing the command.

   -Confirm      Prompt for confirmation before executing the command.

   <i>Advanced_Options</i>:
  
                [-ObjectAttributes <i>ObjectAttributesParameter</i>]  
                [-UseDefaultExcludedProperties]  
                [-UseDefaultExcludedPropertiesExcept <i>String</i> []] [-ExcludedProperties <i>String</i>[]]
                [-IncludedProperties <i>String</i>[]] [-UseGlobalCatalog] 
                [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">New-QADGroup</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Create 
a new universal distribution group: </p>
<p><span class="code">PS C:&gt; new-qadGroup -name 'grp_demo' -ParentContainer 'OU=demo,DC=ss64,DC=com'<br>
-samAccountName 'grp_demo' -grouptype 'Distribution' -groupscope 'Universal'</span></p>
<p> Create a new local domain group with the name matching the value in the 'NEWTEAMS' column in the CSV file</p>
<p><span class="code">PS C:&gt; <a href="import-csv.html">import-csv</a> C:\accounts.csv | %{new-qadGroup -name $_.'NEWTEAMS' -ParentContainer <br>
'OU=demo,DC=ss64,DC=com' -GroupScope 'DomainLocal' -samAccountName $_.'NEWTEAMS'}</span></p>
<p class="quote"><i>“Finding good players is easy. Getting them to play as a team is another story” - Casey Stengel  (American Baseball Player)</i></p>
<p><b>Related:</b></p>
<p><a href="set-qadgroup.html">Set-QADGroup</a> - Modify attributes of group(s)<br>
<a href="get-qadgroup.html">Get-QADGroup</a> - Retrieve groups that match specific conditions<br>
<a href="quest.html">Quest cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="new-qadgroup.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

