---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Rename-QADObject</h1> 
<p>Change the name of an object (user account/group) in Active Directory.</p>
<pre>Syntax
      Rename-QADObject [[-Identity] <i>IdentityParameter</i>] -NewName <i>String</i> 
             [-WhatIf] [-Confirm] <i>Advanced_Options</i>

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the user object you wish to disable. 

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

   <i>Advanced_Options</i>:
                [-UseGlobalCatalog] [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Rename-QADObject</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Example</b></p>
<p>Rename the user account JaneC in domain ss64Dom </p>
<p><span class="code">PS C:&gt; rename-QADObject 'ss64Dom\JaneC' -NewName 'JaneS'</span></p>
<p class="quote"><i>“The more pretentious a corporate name, the smaller the organization. (For instance, The Murphy Center for Codification of Human and Organizational Law, contrasted to IBM, GM, AT&amp;T ...) ~ Murphys Law No 19 </i></p>
<p><b>Related:</b></p>
<p> 
<a href="disable-qaduser.html">Disable-QADUser</a> - Disable a user account<br>
<a href="quest.html">Quest cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rename-qadobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

