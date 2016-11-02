---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Deprovision-QADUser</h1> 
<p>Request ActiveRoles Server to deprovision a user account. This removes all its rights and permissions without actually removing it. </p>
<pre>Syntax
      Deprovision-QADUser [[-Identity] <i>IdentityParameter</i>]
         [-ReportFile &lt;String&gt;] [-Xml]
            [-WhatIf] [-Confirm] <i>Advanced_Options</i>

Key

   -identity    The Distinguished Name (DN), Canonical Name, GUID or, where applicable,
                the Domain\Name, UPN or SID of the user object you wish to disable. 

   -ReportFile  Save a report on the deprovisioning results to a file
                in HTML or XML format.

   -Xml         Save in XML format. 

   -WhatIf      Describe what would happen if you executed the command,
                without actually executing the command.

   -Confirm     Prompt for confirmation before executing the command.

   <i>Advanced_Options</i>:
                [-UseGlobalCatalog] [-Proxy] [-Service <i>String</i>]
                [-ConnectionAccount <i>String</i>] [-ConnectionPassword <i>SecureString</i>]
                [-Credential <i>PSCredential</i>] [-Connection <i>ArsConnection</i>]</pre>
<p>
  <b>Notes:</b>        <br>
By default <span class="code">Unlock-QADUser</span> will connect to any available domain controller with the credentials of the locally logged on user, to connect to a specific domain controller using a specific account, either use the advanced options (-Proxy/-Service/-ConnectionAccount) or use the <span class="code">Connect-QADService</span> cmdlet to make the connection. </p>
<p><b>Example</b></p>
<p>Deprovision the user account JaneC in domain ss64Dom </p>
<p><span class="code">PS C:&gt; Deprovision-QADUser 'ss64Dom\JaneC'</span></p>
<p><span class="code">PS C:&gt; get-QADUser 'ss64Dom\JaneC' | deprovision-QADUser</span></p>
<p class="quote"><i> “Absence diminishes mediocre passions and increases great ones,as the wind blows out candles and fans fires” ~ La Rochefoucauld </i></p>
<p><b>Related:</b></p>
<p> <a href="enable-qaduser.html">Enable-QADUser</a> - Disable a user account <br>
<a href="unlock-qaduser.html">Unlock-QADUser </a>- Unlock a user account <br>
<a href="disable-qaduser.html">Disable-QADUser</a> - Disable a user account<br>
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

