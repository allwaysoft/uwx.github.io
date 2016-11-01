---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.RemovePrinterConnection </h1> 
<p>Remove a shared network printer connection.</p>
<pre>Syntax 
      <i>objNetwork</i>.RemovePrinterConnection(<i>strName</i>, [<i>bForce</i>], [<i>bUpdateProfile</i>])

Key
   objNetwork : A WScript.network object

   strName : The printer name. It can be a UNC name, or a local name (such as LPT1). 
   
   bForce  : Force the removal of the mapped printer. 
            (Boolean Optional, default = false). 
   
   bUpdateProfile : Save changes in the user's profile
                   (Boolean Optional, default = false)


<b>Example</b>
' Disconnect a network printer
Set PrinterPath = "\\printserv\MyPrinter"
Set objNetwork = WScript.CreateObject("<a href="network.html">WScript.Network</a>") 
objNetwork.RemovePrinterConnection (PrinterPath, true, true)</pre>
<p>The RemovePrinterConnection method removes both Windows and MS-DOS based printer connections. </p>
<p>If the printer was connected using the method AddPrinterConnection, strName must be the printer's local name. If the printer was connected using the AddWindowsPrinterConnection method, or was added manually (using the Add Printer wizard), then strName must be the printer's UNC name. </p>
<p><i class="quote">“Law: Once you eliminate your #1 problem, #2 gets a promotion” ~ Gerald Weinberg, "The Secrets of Consulting"</i><br>
<b><br>
Related:</b></p>
<p> Printer, add printer - <a href="addprinterconnection.html">.AddPrinterConnection</a> 
<br>
Printer, add Network printer - <a href="addwindowsprinterconnection.html">.AddWindowsPrinterConnection</a> 
<br>
Printer, list printers - <a href="enumprinterconnections.html">.EnumPrinterConnections</a> 
<br>
Printer, set default printer - <a href="setdefaultprinter.html">.SetDefaultPrinter</a><br>
<a href="../nt/prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="removeprinterconnection.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

