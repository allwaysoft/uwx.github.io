---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Move-QADObject</h1> 
<p>Move an object to a new OU.</p>
<pre>Syntax
      Move-QADObject [-Identity] <i>IdentityParameter</i> -NewParentContainer <i>IdentityParameter</i>
         [-Control <i>hashtable</i>] <i>Advanced_Options</i> [-Confirm] [-WhatIf] [<i>CommonParameters</i>] 

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the user object you wish to disable. 

   -ConnectionAccount <br>                The user logon name of the account with which to connect, in the form <br>                DomainName\UserName, or in the form of a user principal name.

   -NewParentContainer <br>                The Distinguished Name of the destination container
                The container the object will be moved to. 

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

   <i>Advanced_Options</i>:
                [-UseGlobalCatalog] [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  Use this cmdlet to move an object between containers within an Active Directory domain (the cmdlet 
cannot move an object to a different domain). An object to move can be specified by DN, SID, GUID, 
UPN or Domain\Name, or it can be located by using a Get- cmdlet and then piped into the Move- cmdlet. 
The destination container can be specified by DN or GUID.</p>
<p><b>Example</b></p>
<p>Move the PC called 'newpc' (in domain SS64Dom) to the same OU as that where the PC 'oldpc' currently resides. This is handy when replacing one PC with another. </p>
<p><span class="code">PS C:&gt; move-qadobject -identity 'SS64dom\newpc' –newparentcontainer (get-qadcomputer 'SS64Dom\oldpc$').parentcontainer</span></p>
<p class="quote"><i>“A bank is a place where they lend you an umbrella in fair weather and ask for it back  when it begins to rain” ~ Robert Frost</i></p>
<p><b>Related:</b></p>
<p> 
<a href="get-qadcomputer.html">Get-QADComputer</a> - Retrieve computer objects that match specified conditions<br>
<a href="quest.html">Quest cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="move-qadobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

