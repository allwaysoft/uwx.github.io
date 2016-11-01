---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.RemoveNetworkDrive</h1> 
<p>Remove a shared network drive mapping.</p>
<pre>Syntax 
      <i>objNetwork</i>.RemoveNetworkDrive(<i>strName</i>, [<i>bForce</i>], [<i>bUpdateProfile</i>])

Key
   objNetwork : A WScript.Network object

   strName    : The mapped drive you want to remove.
   
   bForce     : Force the removal of the mapped drive (TRUE/<u>FALSE</u>).
   
   bUpdateProfile : Remove the mapping from the user's profile (TRUE/<u>FALSE</u>).

Example

   Dim objNetwork
   Set objNetwork = CreateObject("<a href="network.html">WScript.Network</a>")
   objNetwork.MapNetworkDrive "I:", "\\print_server\hp_01","True","jdoe","jdoepassword"
   objNetwork.RemoveNetworkDrive "I:"</pre>
<p class="quote"><i>“No problem is so formidable that you can't walk away from it” ~ Charles M. Schulz</i></p>
<p><b>Related:</b></p>
<p>Map drive - <a href="mapnetworkdrive.html">.MapNetworkDrive</a> 
  <br>
  List drive mappings - <a href="enumnetworkdrives.html">.EnumNetworkDrives</a><br>
Equivalent Windows CMD command: <a href="../nt/net.html">NET</a> - Manage network resources</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="removenetworkdrive.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

