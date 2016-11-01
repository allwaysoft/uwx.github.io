---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WshNetwork.EnumPrinterConnections</h1> 
<p>Enumerate printer connections</p>
<pre>Syntax 
      myObject.EnumPrinterConnections

Example

Set WshNetwork = WScript.CreateObject("<a href="network.html">WScript.Network</a>")
Set oPrinters = WshNetwork.EnumPrinterConnections

For i = 0 to oPrinters.Count - 1 Step 2
   WScript.Echo "Port " &amp; oPrinters.Item(i) &amp; " = " &amp; oPrinters.Item(i+1)
Next
</pre>
<p class="quote"><i>”Utility is when you have one telephone, luxury is when you have two, opulence is when you have three — and paradise is when you have none” ~ Doug Larson (English middle-distance runner)</i></p>
<p><b>Related:</b></p>
<p>  Printer, set default printer - <a href="setdefaultprinter.html">WshNetwork.SetDefaultPrinter</a><br>
  Printer, remove printer - <a href="removeprinterconnection.html">WshNetwork.RemovePrinterConnection</a><br>
  Equivalent Windows CMD command: 
<a href="../nt/net_share.html">NET VIEW</a> - to view a list of printers<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-wmiobject.html">GWMI -CL "Win32_Printer"</a> -Name "root\Cimv" 
-comp $strComputer</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="enumprinterconnections.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

