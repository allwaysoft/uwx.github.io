---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-QADGroupMember</h1> 
<p>Remove  members from a group in Active Directory.</p>
<pre>Syntax
      Remove-QADGroupMember [-Identity] <i>IdentityParameter</i> [-Member <i>IdentityParameter</i>]  
         <i>Advanced_Options</i> [-WhatIf] [-Confirm]
  
Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the object you wish to find. 

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

<i>Advanced_Options</i>:
                [-Proxy] [-Service <i>String</i>] [-UseGlobalCatalog] 
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Remove-QADGroupMember</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Examples</b></p>
<p>Remove the users <span class="code">LiamJ</span> and <span class="code">SueA</span> from the group <span class="code">group64</span>:</p>
<p><span class="code">PS C:&gt; remove-QADGroupMember 'CN=group64,OU=demoOU,DC=ss64,DC=com' -member 'ss64Dom\LiamJ','ss64Dom\SueA'</span></p>
<p class="quote"><i> “Plans are being discussed as to who will replace Dick Cheney if he has to resign for health reasons. It's not easy for President Bush, he can't just name a replacement. He would first have to be confirmed by the oil, gas and power companies” ~ Jay Leno</i></p>
<p><b>Related:</b></p>
<p><a href="get-qadgroupmember.html">Get-QADGroupMember</a>    - Retrieve members of a group<br> 
<a href="syntax-wildcards.html">Syntax - Wildcards</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

