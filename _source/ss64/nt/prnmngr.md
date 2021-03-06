---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>PRNMNGR.vbs  (Vista and above or <a href="../links/windows.html">2003 adminpack.msi</a>)</h1>
<p>Add, delete and list printers and printer connections, can also display or set the <i>default </i>printer.</p>
<pre>Syntax
      cscript PRNMNGR.vbs [-<i>options</i>] [-s <i>server</i>][-p <i>printer_name</i>][-m <i>driver model</i>]
                  [-r <i>port</i>][-u <i>user_name</i>][-w <i>password</i>]

Options
   -l   list printers

   -a   add local printer
   -ac  add printer connection

   -g   get the default printer
   -t   set the default printer
   -d   delete printer
   -x   delete all printers</pre>
<p>Examples</p>
<pre>  Set _scripts=cscript <span class="code">%Windir%\System32\Printing_Admin_Scripts\en-US</span>

  :: add printer
  %_scripts%\prnmngr.vbs -a -p "printer" -m "driver" -r "lpt1:"
  :: delete printer
  %_scripts%\prnmngr.vbs -d -p "printer" -s server

  :: connect to printer
  %_scripts%\prnmngr.vbs -ac -p "\\server\printer"
  :: delete connection
  %_scripts%\prnmngr.vbs -d -p "\\server\printer"

  :: delete all printers
  %_scripts%\prnmngr.vbs -x -s server
  :: List all printers
  %_scripts%\prnmngr.vbs -l -s server

  :: List a specific printer
  %_scripts%\prnmngr.vbs -l |find "Printer name"

  :: get the DEFAULT printer
  %_scripts%\prnmngr.vbs -g
  :: Set the DEFAULT printer
  %_scripts%\prnmngr.vbs -t -p "\\server\printer"
</pre>
Prnmngr.vbs is not be included in the Windows <a href="path.html">PATH</a> but will be found at <span class="code">%Windir%\System32\Printing_Admin_Scripts\en-US\prnmngr.vbs</span><br>
If installed via the 2003 adminpack, it will be located in the \Program files\Windows Resource Kits\ folder.
<p class="quote">  “We photographers deal in things which are continually vanishing, and when they have vanished there is no contrivance on earth can make them come back again. We cannot develop and print a memory” ~ Henri Cartier-Bresson</p>
<p><b>Related:</b><br>
<br>
<a href="net_share.html">NET VIEW</a> \\Printserver - to view a list of available printers<br>
<a href="net_print.html">NET PRINT</a> - View and Delete print jobs <br>
<a href="prncnfg.html">PRNCNFG</a> - Add, delete, or list printers / connections, set the default printer. <br>
PRNDRVR - Add, delete or list printer drivers.<br>
PRNJOBS - Pause, resume, cancel, or list print jobs<br>
PRNPORT - Create, delete, or list TCP/IP printer ports, change port configuration. 
<br>
PRNQCTL - Print a test page, pause or resume a printer, clear a printer queue.<br>
<a href="print.html">PRINT</a> - Print a text file<br>
<a href="rundll32.html">RUNDLL32</a> - Install/Remove Printers (plus advanced options)  <br>
<a href="wmic.html">WMIC PRINTER</a> - Set printing options through WMI.  <br>
<a href="https://support.microsoft.com/kb/246868">Q246868</a> - New TCP/IP
Printing Options in the Windows Standard Port Monitor <br>
Add printer - <a href="../vb/addprinterconnection.html">.AddPrinterConnection</a> <br>
Add Network printer - <a href="../vb/addwindowsprinterconnection.html">.AddWindowsPrinterConnection</a> <br>
List printers - <a href="../vb/enumprinterconnections.html">.EnumPrinterConnections</a> <br>
Set default printer - <a href="../vb/setdefaultprinter.html">.SetDefaultPrinter</a><br>
Equivalent bash command (Linux): <a href="../bash/lpc.html">lpc</a> - Line printer control program</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="prnmngr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

