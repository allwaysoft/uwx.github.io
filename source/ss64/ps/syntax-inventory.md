---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Remote inventory of OperatingSystem and Service Pack</h1>
<p>GetOSVersion.ps1</p>
<pre>param( [string] $ServerName) 

"Server:$ServerName"

## check the machine is pingable
 
$query = "select * from win32_pingstatus where address = '$ServerName'"
$result = Get-WmiObject -query $query

if ($result.protocoladdress) {

 $build = @{n="Build";e={$_.BuildNumber{% raw %}}}{% endraw %}
 $SPNumber = @{n="SPNumber";e={$_.CSDVersion{% raw %}}}{% endraw %}
 $sku = @{n="SKU";e={$_.OperatingSystemSKU{% raw %}}}{% endraw %}
 $hostname = @{n="HostName";e={$_.CSName{% raw %}}}{% endraw %}

   $Win32_OS = Get-WmiObject Win32_OperatingSystem -computer $ServerName | select $build,$SPNumber,Caption,$sku,$hostname, servicepackmajorversion

   ## Get the Service pack level
   $servicepack = $Win32_OS.servicepackmajorversion

   ## Get the OS build

   switch ($Win32_OS.build) {
     ## the break statement will stop at the first match
     2600 {$os = 'XP'; break}
     3790 { if ($Win32_OS.caption -match 'XP') { $os = "XPx64" } else { $os = 'Server 2003' }; break }
     6000 {$os = 'Vista'; break}
     6001 { if ($Win32_OS.caption -match 'Vista' ) { $os = "Vista" } else { $os = 'Server 2008'}; break }
     }

   "Operating System: $os Service Pack: $servicepack"
   "Operating System: $os Service Pack: $servicepack" | out-file -filepath <b>C:\ServicePack.txt</b>
} else {
            "$ServerName Not Responding" }</pre>
<p>Run the script above with: <span class="code"><br>
PS C:\ ./GetOSVersion.ps1 MyServerName </span></p>
<p class="quote"><i>“The hero has died as a modern man; but as eternal man - perfected, unspecific, universal man, - he has been reborn” ~ Joseph Campbell</i></p>
<p><b>Related:</b></p>
<p><a href="get-wmiobject.html">Get-WMIobject</a> - Get WMI class information<br>
<a href="../nt/ver.html">VER</a> - Display version information<br>
<a href="http://msdn.microsoft.com/en-us/library/aa394606%28VS.85%29.aspx">WQL (WMI Query Language)</a> - msdn.microsoft.com</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-inventory.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

