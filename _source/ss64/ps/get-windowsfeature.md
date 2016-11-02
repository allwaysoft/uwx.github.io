---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Get-WindowsFeature</h1> 
<p>Retrieve information about      roles, role services, and features that are available on a computer that      is running Windows Server 2008 R2.</p>
<pre>Syntax
      Get-WindowsFeature [-Name] <i>string</i>[] [-logPath <i>string</i>]
          [<i>CommonParameters</i>]

Key
   -Name <i>string</i>
       The command IDs of roles, role services, or features to retrieve.
       Alternatively, an array of Feature objects will also be accepted.
       You can find a list of command IDs for all roles, role services, and features in the
       topic "Overview of Server Manager Commands" in the Server Manager Help.

   -logPath <i>string</i>
       The name and location of a log file, other than the default, %windir%\logs\ServerManager.log.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p><b>Examples</b></p>
<p>Return a list of features with Command ID that starts with AD or Web:</p>
<p class="code">C:\PS&gt; Get-WindowsFeature AD*,Web*</p>
<p> Get all the Windows features available on the computer:</p>
<p class="code">C:\PS&gt; Get-WindowsFeature</p>
<p class="quote"><i>"</i>What has destroyed every previous civilization has been the tendency to the unequal distribution of wealth and power” ~ Henry George</p>
<p><b>Related:</b></p>
<p><a href="add-windowsfeature.html">Add-WindowsFeature</a> - Install roles, role services, and features<br>
<a href="remove-windowsfeature.html">Remove-WindowsFeature</a> - Remove roles, role services, and features</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="get-windowsfeature.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

