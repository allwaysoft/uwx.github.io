---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Add-WindowsFeature</h1> 
<p>Install specified roles, role      services, and features on a computer that is running Windows Server 2008      R2.</p>
<pre>Syntax
      Add-WindowsFeature [-Name] <i>string</i>[] [-IncludeAllSubFeature] [-logPath <i>string</i>]
         [-WhatIf] [-Restart] [-Concurrent] [<i>CommonParameters</i>]

Key
   -Name <i>string</i>
       The command IDs of roles, role services, or features to install.
       Alternatively, an array of Feature objects will also be accepted.
       You can find a list of command IDs for all roles, role services, and features in the
       topic "Overview of Server Manager Commands" in the Server Manager Help.

   -IncludeAllSubFeature
       Specifies the installation of all subordinate services and features along
       with the parent role, role service, or feature named in the -Name parameter.

   -logPath <i>string</i>
       The name and location of a log file, other than the default, %windir%\logs\ServerManager.log.

   -WhatIf
       Describe what would happen if you executed the command,  without actually
       executing the command. This will also display any Windows features that
       would be installed due to dependencies.

   -Restart
       Restart the computer automatically when installation is complete,
       if restarting is required by the roles or features installed.

   -Concurrent
       Allow concurrent instances of Add-WindowsFeature or Remove-WindowsFeature
       to run at the same time. Do not add this parameter unless you are installing
       roles, role services, or features that are downloaded separately from
       Windows Server 2008 R2, and you want to install Windows features on which
       the downloaded technology depends at the same time. The use of this switch is not recommended.
       This switch is intended for out-of-band feature(s) to install their dependencies.

   -passThru <i>SwitchParameter</i>
       Pass the newly-extended object created by this cmdlet along the pipeline.
       For most objects, Add-Member adds the new members to the input object. However,
       when the input object is a string, Add-Member cannot add the member to the input object.
       For these objects, use the PassThru parameter to create an output object.
       In PowerShell 2.0, Add-Member added members only to the PSObject wrapper of objects, not to the object.
       Use -PassThru to create an output object for any object that has a PSObject wrapper.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Install both Telnet Server and Telnet Client:</p>
<p class="code">C:\PS&gt; Add-WindowsFeature Telnet-Server,Telnet-Client</p>
<p> Install all Web features:</p>
<p class="code">C:\PS&gt; Get-WindowsFeature Web-* | Add-WindowsFeature</p>
<p class="quote"><i>"What we think, we become" ~ Siddhartha Gautama (Buddha)</i></p>
<p><b>Related:</b></p>
<p> <a href="get-windowsfeature.html">Get-WindowsFeature</a> - Retrieve roles, role services, and features<br>
<a href="remove-windowsfeature.html">Remove-WindowsFeature</a> - Remove roles, role services, and features</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="add-windowsfeature.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

