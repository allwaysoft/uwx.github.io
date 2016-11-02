---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Set-QADGroup</h1> 
<p>Retrieve all groups in a domain or container that match the specified conditions.</p>
<pre>Syntax
      Set-QADGroup [[-Identity] <i>IdentityParameter</i>] [-GroupType <i>GroupType</i>]
         [-GroupScope <i>GroupScope</i>] <i>ADProperties</i> <i> Advanced_Options</i>
               [-DeserializeValues] [-WhatIf] [-Confirm]

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -GroupType   'Security' or 'Distribution' 

   -GroupScope  'Global' 'Universal' or 'DomainLocal' 

  <i>ADProperties</i>  Set one or more of the properties below:
 
                [-Description <i>String</i>] [-DisplayName <i>String</i>]
                [-SamAccountName <i>String</i>] [-Email <i>String</i>] [-Notes <i>String</i>] 

   -DeserializeValues
                Use if the input contains serialized attribute values
                (for instance, when importing a directory object from a text
                file that was created using <a href="get-qadgroup.html">-Serialize</a>)

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

   <i>Advanced_Options</i>:
  
                [-ObjectAttributes <i>Object</i>]  
                [-UseDefaultExcludedProperties]  
                [-UseDefaultExcludedPropertiesExcept <i>String</i> []] [-ExcludedProperties <i>String</i>[]]
                [-IncludedProperties <i>String</i>[]] [-UseGlobalCatalog] 
                [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Set-QADGroup</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Change the description of the 'Super Admins' group in domain ss64Dom </p>
<p><span class="code">PS C:&gt; Set-QADGroup 'ss64Dom\Super Admins' -description 'Level 1 Admin group'</span></p>
<p> Change the name of the group '<span class="code">Accountants</span>' by prefixing it with with  '<span class="code">GRP_</span>' (so it becomes 'GRP_Accountants') </p>
<p><span class="code">PS C:&gt; Get-QADGroup Accountants | %<b>{</b>Set-QADGroup $_ -SamAccountName ("GRP_" + $_.SamAccountName)<b>}</b> </span></p>
<p>Change the SAM account name (pre windows 2000) given the distinguished name:</p>
<p class="code">PS C:&gt; set-QADGroup 'CN=TestGroup,OU=Groups,DC=ss64,DC=com'              
-samaccountname 'Demo Group'</p>
<p class="quote"><i>“He travels the fastest who travels alone” ~ Rudyard Kipling</i></p>
<p><b>Related:</b></p>
<p><a href="get-qadgroup.html">Get-QADGroup</a> - Retrieve groups that match specific conditions<br>
<a href="quest.html">Quest cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

