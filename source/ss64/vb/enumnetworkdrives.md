---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WshNetwork.EnumNetworkDrives</h1> 
<p>Enumerate Network Drives.</p>
<pre>Syntax 
      WshNetwork.EnumNetworkDrives

Example

Set WshNetwork = WScript.CreateObject("<a href="network.html">WScript.Network</a>")
Set oDrives = WshNetwork.EnumNetworkDrives

For i = 0 to oDrives.Count - 1 Step 2
   WScript.Echo "Drive " &amp; oDrives.Item(i) &amp; " = " &amp; oDrives.Item(i+1)
Next</pre>
<p class="quote">“<i>When we got into office, the thing that surprised me the most was that things were as bad as we'd been saying they were” ~ John F. Kennedy</i></p>
<p><b>Related:</b></p>
<p>Map drive - <a href="mapnetworkdrive.html">WshNetwork.MapNetworkDrive</a> 
<br>
Remove drive map - <a href="removenetworkdrive.html">WshNetwork.RemoveNetworkDrive</a><br>
Equivalent Windows CMD command: <a href="../nt/net.html">NET</a> - Manage network resources<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-psdrive.html">Get-PSDrive</a> or [System.IO.DriveInfo]::GetDrives()</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enumnetworkdrives.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

