---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WshNetwork.AddWindowsPrinterConnection</h1> 
<p>MAP a Network (remote) Printer </p>
<pre>Syntax 
      myObject.AddWindowsPrinterConnection(strLocalName UNC_Printer_Name)


Example

   Dim net
   Set net = CreateObject("WScript.Network")    
   net.AddWindowsPrinterConnection "\\ServerName\PrinterName"

or
   net.AddWindowsPrinterConnection "LPT1", "\\ServerName\PrinterName"</pre>
<p class="quote"><i>“God made everything out of nothing, but the nothingness shows through” ~ Paul Valery</i></p>
<p><b>Related:</b></p>
<p>
Printer, add printer - <a href="addprinterconnection.html">WshNetwork.AddPrinterConnection</a><br>
<a href="../nt/syntax-printing.html">printcon.vbs</a> - change a Print connection to a different Queue/Server  <br>
<a href="../nt/net_share.html">NET VIEW</a> - to view a list of printers<br>
<a href="../nt/net_print.html">NET PRINT</a> - View and Delete print jobs <br>
<a href="../nt/prncnfg.html">PRNCNFG</a> - Display, configure or rename a printer 
<br>
PRNDRVR - Add, delete or list printer drivers<br>
PRNMNGR - Add, delete, or list printers / connections, set the default printer<br>
<a href="../nt/syntax-printing.html">Network Printing</a> - Advice &amp; Tips</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
