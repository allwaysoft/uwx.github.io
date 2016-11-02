---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remove-WindowsFeature</h1> 
<p>Remove specified roles,      role services, and features from a computer that is running Windows      Server 2008 R2.</p>
<pre>Syntax
      Remove-WindowsFeature [-Name] <i>string</i>[] [-logPath <i>string</i>]
         [-WhatIf] [-Restart] [-Concurrent]  [<i>CommonParameters</i>]

Key
   -Name <i>string</i>
       The command IDs of roles, role services, or features to remove.
       Alternatively, an array of Feature objects will also be accepted.
       You can find a list of command IDs for all roles, role services, and features in the
       topic "Overview of Server Manager Commands" in the Server Manager Help.

   -logPath <i>string</i>
       The name and location of a log file, other than the default, %windir%\logs\ServerManager.log.

   -WhatIf
       Describe what would happen if you executed the command,  without actually
       executing the command. This will also display any Windows features that
       would be removed due to dependencies.

   -Restart
       Restart the computer automatically when removal is complete,
       if restarting is required by the roles or features removed.

   -Concurrent
       Allow concurrent instances of Add-WindowsFeature or Remove-WindowsFeature
       to run at the same time.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Remove both Telnet Server and Telnet Client:</p>
<p class="code">C:\PS&gt; Remove-WindowsFeature Telnet-Server,Telnet-Client</p>
<p> Remove all Web features, including dependencies:</p>
<p class="code">C:\PS&gt; Get-WindowsFeature Web-* | Remove-WindowsFeature</p>
<p class="quote"><i>"</i>No amount of time can erase the memory of a good cat, and no amount of masking tape can ever totally remove his fur from your couch<i>"</i> ~ Leo F. Buscaglia</p>
<p><b>Related:</b></p>
<p><a href="add-windowsfeature.html">Add-WindowsFeature</a> - Install roles, role services, and features<br>
<a href="get-windowsfeature.html">Get-WindowsFeature</a> - Retrieve roles, role services, and features</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="remove-windowsfeature.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

