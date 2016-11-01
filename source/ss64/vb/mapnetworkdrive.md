---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.MapNetworkDrive</h1> 
<p>Add a shared network drive mapping.</p>
<pre>Syntax 
      <i>objNetwork</i>.MapNetworkDrive(<i>strLocalDrive</i>, <i>strRemoteShare</i>, [<i>persistent</i>], [<i>strUser</i>], [<i>strPassword</i>])

Key
   objNetwork     : A WScript.network object

   strLocalDrive  : The drive letter (e.g. L:)
   
   strRemoteShare : The UNC path to the remote drive \\MyServer\MyPrinter
                    (String value)
   
   persistent     : True/False - store the mapping persistently in the users profile
                    default = false
   
   strUser        :  The user name. (Optional)
   
   strPassword    :  The password. (Optional)</pre>
<p><b>Example</b></p>
<p class="code">Dim objNetwork,  strRemoteShare<br>
Set objNetwork = WScript.CreateObject("<a href="network.html">WScript.Network</a>")<br>
 strRemoteShare = "\\myserver\users"  <br>
objNetwork<b>.MapNetworkDrive</b> "H:", strRemoteShare, False</p>
<p>To run these commands in PowerShell without calling cscript:</p>
<p class="code">$network = New-Object -ComObject WScript.Network<br>
$RemoteShare = '\\myserver\users'<br>
$network<b>.MapNetworkDrive</b>('H:', $RemoteShare, $false) </p>
<p>The example script below takes this a stage further, disconnecting the drive letter first (and coded to cope with persistent and/or disconnected drive shares) </p>
<p><a href="syntax-mapdrive.html">DriveMap.vbs - Connect a local drive letter to a remote file share</a></p>
<p>For  workgroup  machines  sharing  files via  pass-thru authentication with no domain  login script, a <i><a href="syntax-mapdrivepersistent.html">persistent</a></i> drive map can be used. Persistent drives will automatically connect to the resource whenever it is available. </p>
<p class="quote"><i>“The price one pays for pursuing any profession or calling is an intimate knowledge of its ugly side” ~ James Baldwin</i></p>
<p><b>Related:</b></p>
<p>  NET, list drive mappings - <a href="enumnetworkdrives.html">.EnumNetworkDrives</a> 
  <br>
  NET, remove drive map - <a href="removenetworkdrive.html">.RemoveNetworkDrive</a><br>
  <span class="body"><a href="http://support.microsoft.com/?kbid=138365">Q138365</a> - Autodisconnect (Red cross)<br>
  <a href="http://support.microsoft.com/?kbid=305355">Q305355</a> - Drives disconnected, and a red "X" appears</span>  <br>
  Equivalent Windows CMD command: <a href="../nt/net.html">NET</a> - Manage network resources</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mapnetworkdrive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

