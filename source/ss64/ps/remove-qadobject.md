---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-QADObject</h1> 
<p>Delete a user account, group or other object from Active Directory.</p>
<pre>Syntax
      Remove-QADObject [[-Identity] <i>IdentityParameter</i>]
         [-DeleteTree] [-Force] [-Proxy] 
             [-WhatIf] [-Confirm] <i>Advanced_Options</i>

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the user object you wish to disable. 

   -DeleteTree  Delete the specified object along with all of its descendant objects.
                Without this parameter, Remove-QADObject will fail to delete any
                container object that holds any child objects.

   -Force       Override any restrictions that prevent the command from succeeding.
                Useful when running the command in a script

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

   <i>Advanced_Options</i>:
                [-UseGlobalCatalog] [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Remove-QADObject</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Example</b></p>
<p>Remove the user account JaneC in domain ss64Dom </p>
<p><span class="code">PS C:&gt; remove-QADObject 'ss64Dom\JaneC'</span></p>
<p>Delete 
all the user objects located in a specific container:</p>
<p><span class="code">PS C:&gt; get-QADUser -searchRoot 'ss64Dom.ss64.com/testOU' | remove-QADObject 
-confirm </span></p>
<p class="quote"><i> “A bank is a place where they lend you an umbrella in fair weather and ask for it back  when it begins to rain” ~ Robert Frost</i></p>
<p><b>Related:</b></p>
<p> 
<a href="deprovision-qaduser.html">Deprovision-QADUser</a> - Deprovision a user account in AD<br>
<a href="remove-aduser.html">Remove-adUser</a> - Remove an AD user<br>
<a href="remove-adgroup.html">Remove-adGroup</a> - Remove an AD group<br>
<a href="quest.html">Quest cmdlets</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-qadobject.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

