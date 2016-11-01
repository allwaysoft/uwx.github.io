---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>NET.exe</h1> 
<p>The <a href="net.html">NET command</a> is used to manage Network 
  Print jobs. This command has been deprecated in Windows&nbsp;7 and Windows  Server&nbsp;2008&nbsp;R2. However, you can perform many of the same tasks using  Prnjobs.vbs, Windows Management Instrumentation (WMI), or Windows  <a href="../ps/index.html">PowerShell cmdlets</a>.<br>
  <br>

  Display the job# of current print jobs<br>
  <span class="code">NET PRINT \\ComputerName\ShareName</span><br>
  <br>
  Hold a print job waiting in the printer queue<br>
  <span class="code">NET PRINT [\\ComputerName] job# /HOLD </span><br>
  <br>
  Release a print job that has been held.<br>
  <span class="code">NET PRINT [\\ComputerName] job# /RELEASE</span><br>
  <br>
  Delete a print job from a printer queue.<span class="code"><br>
NET PRINT [\\ComputerName] job# /DELETE</span></p>
<p>List all available printers <br>
   <span class="code">NET VIEW \\MyServer |find "Print"</span></p>
<p>  <b>Related:</b><br>
  <br>
  <a href="net.html">NET</a> - Manage network resources<a href="con2prt.html">.<br>
</a><a href="printbrm.html">PRINTBRM</a> - Print queue Backup/Recovery<a href="con2prt.html">.<br>
</a><a href="prncnfg.html">PRNCNFG</a> - Display, configure or rename a printer.<br>
  PRNJOBS - Pause, resume, cancel, or list print jobs.<br>
<a href="prnmngr.html">PRNMNGR</a> - Add, delete, list printers and printer connections.<br>
  VB Script: <a href="../vb/addprinterconnection.html">Add printer connection</a> <br>
  VB Script: <a href="../vb/enumprinterconnections.html">List printers</a> <br>
  VB Script: <a href="../vb/setdefaultprinter.html">Set default printer</a><br>
  Equivalent bash command (Linux): <a href="../bash/lpc.html">lpc</a> - Line printer control program
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="net_print.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

