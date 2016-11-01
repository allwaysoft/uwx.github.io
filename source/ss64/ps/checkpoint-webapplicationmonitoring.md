---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Checkpoint-WebApplicationMonitoring</h1> 
<p>Create a checkpoint of the IntelliTrace file for an Internet Information Services (IIS) web application.</p>
<pre>Syntax
      Checkpoint-WebApplicationMonitoring [-Name] <i>String</i>
         [-Confirm] [-WhatIf] [<i>CommonParameters</i>]

Key
   -Name <i>String
</i>       The name of the web application for which to create a checkpoint.
       This name is listed in IIS Manager.
       Valid values for this parameter are:
         -- A web application name.
            Must be specified as  <i>website name</i>/<i>web application name</i>
            For example, "Default Web Site/WebApp1".
         -- An IIS path. For example, "IIS:\sites\Default Web Site\WebApp1".

   -Confirm
       Prompt for confirmation before executing the command.

   -WhatIf
       Describe what would happen if you executed the command, without actually executing the command.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>Creates a Visual Studio IntelliTrace file without stopping      application monitoring. <br>
The IntelliTrace file is created in the output path that you specify in the      Start-WebApplicationMonitoring cmdlet.</p>
<p><b>Examples</b></p>
<p>Create a checkpoint:</p>
<p><span class="code">PS C:\&gt; Checkpoint-WebApplicationMonitoring -Name "Default Web Site/WebApp1"</span></p>
<p class="quote"><i>“If you're not making mistakes, then you're not doing anything. I'm positive that a doer makes mistakes” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p><a href="get-webapplicationmonitoringstatus.html">Get-WebApplicationMonitoringStatus</a> - Get the monitoring status of web apps</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="checkpoint-webapplicationmonitoring.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

