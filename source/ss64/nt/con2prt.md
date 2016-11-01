---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>CON2PRT.exe (Zero Admin Toolkit, discontinued)</h1> 
<p> Connect or disconnect a Printer<br>
  <br>
  All commands issued using this utility will affect only the user currently
  logged in. Con2prt is therefore ideal for managing NETWORK printer connections
  when
  used in a login script.</p>
<pre>Syntax 
      CON2PRT /f
      CON2PRT /c \\PrintServer\PrintShare
      CON2PRT /cd \\PrintServer\PrintShare

Key
       /f  - remove all network printer connections
       /c  - connect to \\PrintServer\PrintShare
       /cd - connect to and set PrintShare as the default printer       </pre>
<p> Several switches can be combined in one command line. So you 
  can remove all connections before adding new ones all in one command, you can 
only specify one default printer.</p>
<p>Microsoft now recommend the more flexible <span class="body"><a href="rundll32.html">RUNDLL32</a></span> in preference to con2prt.</p>
<p>The freeware utility <a href="adprintx.zip">AdPrintX</a> is
  very similar to Con2Prt but has additional functionality, including compatibility
with Windows 9x systems. </p>
<p><i class="quote">“I think you know as well as I do what the problem is, Dave. You and Dr. Poole were planning to disconnect me. I cannot allow this to happen” - HAL</i><br>
<br>
<b>Related:</b></p>
<p>
<a href="../vb/syntax-qchange.html">Qchange.vbs</a> - Change printer connections<br>
<a href="syntax-printing.html">Network Printing</a> - Advice &amp; Tips<br>
<a href="print.html">PRINT</a> - Print a text file<br>
<a href="net_share.html">NET VIEW</a> - to view a list of printers<br>
<a href="prncnfg.html">PRNCNFG</a> - Display, configure or rename a printer <br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, or list printers / connections, set the default printer. <br>
<a href="rundll32.html">RUNDLL32</a> - Install/Remove Printers (plus advanced options)<br>
<a href="wmic.html">WMIC PRINTER</a> - Set printing options through WMI<br> 
VBScript
<b>:</b>
Add printer - <a href="../vb/addprinterconnection.html">WshNetwork.AddPrinterConnection</a> 
<br>
<a href="https://support.microsoft.com/kb/314486%20">Q314486</a> - Add Printers with No User Interaction (Win XP)<br>
Equivalent bash command (Linux):<a href="../bash/export.html">
</a><a href="../bash/lpc.html">lpc</a> - Line printer control program</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="con2prt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

