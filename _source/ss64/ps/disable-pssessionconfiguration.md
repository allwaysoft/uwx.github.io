---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Disable-PSSessionConfiguration</h1> 
<p>Disable session configurations on the local computer.</p>
<p>To prevent all users of the computer from remoting, use  <span class="code"><a href="disable-psremoting.html">Disable-PSRemoting</a></span>. 
This is an advanced cmdlet designed for use by system administrators to manage custom session configurations for their users.</p>
<pre>Syntax
      Disable-PSSessionConfiguration [[-Name] <i>string</i>[]]
        [-Force] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Name <i>string</i>
       The name(s) of session configurations to disable.
       Enter one or more configuration names. Wildcards are permitted.
       You can also pipe a configuration name (a string or a session configuration object.)
        
       If you omit this parameter, Disable-PSSessionConfiguration will disable
       Microsoft.PowerShell session configuration, which is the default.

   -force
       Suppress all user prompts.
       By default, you are prompted to confirm each operation.

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe what would happen if you executed the command without actually
       executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p> Beginning in  PowerShell 3.0,  <span class="code">Disable-PSSessionConfiguration</span>  sets the Enabled setting of the      session configuration (WSMan:\localhost\Plugins\&lt;SessionConfiguration&gt;\Enabled) to "False".<br>
<br>
Without parameters, Disable-PSSessionConfiguration disables the Microsoft.PowerShell configuration, which is the default configuration that is used for sessions. Unless the user specifies a different configuration, both local and 
remote users are effectively prevented from creating any sessions that connect to the computer.<br>
</p>
<p><b>Examples</b></p>
<p>Disable the Microsoft.PowerShell session configuration: </p>
<pre>PS C:&gt; Disable-PSSessionConfiguration
</pre>
<p>Disable all registered session configurations on the computer:</p>
<pre>PS C:&gt; disable-pssessionConfiguration -name *</pre>
<p>Disable all session configurations that have names that begin with "Microsoft":</p>
<pre>PS C:&gt; disable-pssessionConfiguration -name Microsoft* -force
</pre>
<p>Disable the MaintenanceShell and AdminShell session configurations, via pipe from Get-PSSessionConfiguration:</p>
<pre>PS C:&gt; Get-PSSessionConfiguration -name MaintenanceShell, AdminShell<b> | </b>Disable-PSSessionConfiguration</pre>
<p>Disable all session configurations that have names that begin with "Microsoft":</p>
<pre>PS C:&gt; disable-pssessionConfiguration -name Microsoft* -force</pre>
<p class="quote"><i>“Economics is about how people make choices; sociology is about how they have no choices to make” ~ David Hackett Fisher</i></p>
<p><b>Related:</b></p>
<p>  <a href="enable-pssessionconfiguration.html">Enable-PSSessionConfiguration</a> - Enable PS session configuration<br> 
<a href="get-pssessionconfiguration.html">Get-PSSessionConfiguration</a> - Get the registered PS session configuration<br>
<a href="disable-psremoting.html">Disable-PSRemoting</a> - Disable session configurations on the local computer.</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

