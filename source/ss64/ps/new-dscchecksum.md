---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-DSCCheckSum</h1> 
<p>Create checksum files for DSC documents and resources.</p>
<pre>Syntax
      New-DSCCheckSum [-ConfigurationPath] <i>String</i>[] [[-OutPath] <i>String</i>] [-Force] [<a href="common.html"><i>CommonParameters</i></a>]

Key
   -ConfigurationPath <i>String</i>[]
       An array of paths to the Desired State Configuration documents or resource archives.

   -Force
       Indicates that the cmdlet overwrites the specified output file if it already exists.

   -OutPath <i>String
</i>       The path and file name of the output checksum file.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>New-DSCCheckSum  generates checksum files for Desired State Configuration documents and compressed      Desired State Configuration resources. </p>
<p>The cmdlet generates a checksum file for each configuration and resource to      be used in pull mode. The DSC service uses the checksums to ensure that the correct      configuration and resources exist on the target node. Place the checksums along with the associated DSC documents and compressed DSC resources in the Desired State Configuration      service store.</p>
<p><b>Examples</b></p>
<p>Create checksum files for all configurations in a specific path, skipping any that already exist in the destination:<br>
<span class="code">PS C:\&gt; New-DscCheckSum -ConfigurationPath C:\DSC\Configurations\</span></p>
<p>Create checksum files for all configurations in a specific path and overwrite any that already exist in the destination:<span class="code"><br>
PS C:\&gt; New-DscCheckSum -ConfigurationPath C:\DSC\Configurations\ -Force</span></p>
<p class="quote"><i>“ I wanted to be a pharmacist. I liked the way our local pharmacist was always dressed in a nice white coat; he looked very calm, you'd give him money, and he'd give you something that you wanted to buy” ~ Walter Matthau</i></p><p><b>Related:</b></p>
<p><a href="get-dscconfiguration.html">Get-DscConfiguration</a> - Get the current config. of a node.<br>
<a href="get-dscresource.html">Get-DscResource</a> - Get Desired State Config. resources from a computer.<br>
<a href="start-dscconfiguration.html">Start-DscConfiguration</a> - Apply Desired State config to nodes.<br>
<a href="get-dsclocalconfigurationmanager.html">Get-DscLocalConfigurationManager</a> - Get Local Config Manager settings.<br>
<a href="https://technet.microsoft.com/en-us/library/dn249912.aspx">TechNet</a> - Desired State Configuration Overview<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

