---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>Disable-PSRemoting</h1> 
<p>Prevent remote users from running commands on the local computer.</p>
<pre>Syntax
      <span class="code">Disable</span>-PSRemoting [-Force] [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key:
   -Force
       Suppress all user prompts. By default, you are prompted to confirm each operation.

   -confirm
       Prompt for confirmation before executing the command.

   -whatIf
       Describe the command without actually executing it.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Enable-PSRemoting prevents users on other computers from running commands on the local computer.</p>
<p>To run this cmdlet, start PowerShell with the "<a href="syntax-elevate.html">Run as administrator</a>" option.</p>
<p> To enable remote access to selected session configurations, use  <a href="set-pssessionconfiguration.html" class="code">Set-PSSessionConfiguration -AccessMode</a><br>
You can also use  <a href="enable-pssessionconfiguration.html">Enable-PSSessionConfiguration</a> and <a href="disable-pssessionconfiguration.html">Disable-PSSessionConfiguration</a>  to enable and      disable session configurations for all users.</p>
<p>On systems that have both  PowerShell 3.0 and the PowerShell 2.0 engine, do not use      PowerShell 2.0 to run the Enable-PSRemoting or Disable-PSRemoting cmdlets.</p>
<p><b>Example</b></p>
<p>Configure the local computer to prevents remote access to all session configurations on the computer:</p>
<p><span class="code">PS C:\&gt; Disable-PSRemoting</span> </p>
<p>Prevent remote access to all session configurations on the computer &amp; suppress user prompts:</p>
<p><span class="code">PS C:\&gt; Disable-PSRemoting -Force</span></p>
<p>Display the session configurations on the      computer:</p>
<p class="code">PS C:\&gt; <a href="get-pssessionconfiguration.html">Get-PSSessionConfiguration</a> | Format-Table -Property Name, Permission -Auto</p>
<p class="quote"><i>“He who lies hid in remote places is a law unto himself” ~ Publilius Syrus</i></p><p><b>Related:</b></p>
<p><a href="enable-psremoting.html">Enable-PSRemoting</a> - Allow the computer to receive remote commands.<br>
<a href="invoke-command.html">Invoke-Command</a> - Run commands on local and remote computers.</p>
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

