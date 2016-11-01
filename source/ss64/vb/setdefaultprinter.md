---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WshNetwork.SetDefaultPrinter</h1> 
<p>Assign a remote printer the role Default Printer. </p>
<pre>Syntax 
      WshNetwork.SetDefaultPrinter(strPrinterName)

Arguments

   strPrinterName : The remote printer's UNC name.

<b class="body">Examples</b>

'Set the Default Printer to \\research\library1

Dim WshNetwork
Set WshNetwork = CreateObject("<a href="network.html">WScript.Network</a>")    
WshNetwork.SetDefaultPrinter "\\research\library1"


' Connect to \\research\library1  and set it as the default.

Set PrinterPath = "\\research\library1"
Set WshNetwork = WScript.CreateObject("<a href="network.html">WScript.Network</a>")
Set rc = WshNetwork.AddWindowsPrinterConnection(PrinterPath)
If Not rc then
      WScript.Echo("Printer Connection Failed!")
End If
WshNetwork.SetDefaultPrinter PrinterPath</pre>
<p>  This method fails when using a DOS-based printer connection.<br>
You cannot use 
the SetDefaultPrinter method find out the name of the current default printer.</p>
<p><i class="quote">“People think that being famous is just about having your picture taken all the time and being rich rich rich, and you know what?... They're absolutely right” ~ Madonna 
  </i><b><br>
  <br>
Related:</b></p>
<p>  Printer, add printer - <a href="addprinterconnection.html">WshNetwork.AddPrinterConnection</a> 
  <br>
  Printer, add Network printer - <a href="addwindowsprinterconnection.html">WshNetwork.AddWindowsPrinterConnection</a><br>
<a href="../nt/prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="setdefaultprinter.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

