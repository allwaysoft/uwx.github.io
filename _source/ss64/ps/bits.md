---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>BITS  PowerShell cmdlets (iis) </h1> 
<p>The Background Intelligent Transfer Service can be used to transfer large files from remote hosts. 
  BITS  
supports throttled  and asynchronous transfer of files between machines using idle network bandwidth.</p>
<pre>  <a href="add-bitsfile.html">Add-BitsFile</a>            Add one or more files to a BITS transfer.
  <a href="complete-bitstransfer.html">Complete-BitsTransfer</a>   Complete a BITS transfer.
  <a href="get-bitstransfer.html">Get-BitsTransfer</a>        Get a single or multiple BITS transfer.
  <a href="remove-bitstransfer.html">Remove-BitsTransfer</a>     Delete a BITS transfer.
  <a href="resume-bitstransfer.html">Resume-BitsTransfer</a>     Resume a suspended BITS transfer.
  <a href="set-bitstransfer.html">Set-BitsTransfer</a>        Configure BITS transfer jobs.
  <a href="start-bitstransfer.html"><b>Start-BitsTransfer</b></a>      Create and start a BITS transfer job.
  <a href="suspend-bitstransfer.html">Suspend-BitsTransfer</a>    Suspend a BITS transfer job.</pre>
<p>This service is used by Windows Update, SUS,  SMS and many third party packages such as Google gears and AppSense. </p>
<p>The BITS server extension may be installed on IIS 7.0 (Windows Server 2008)<br>
<span class="code">Add/Remove Windows Components | Application Server | Details | IIS | BITS Server Extensions</span><br>
Then <a href="http://go.microsoft.com/fwlink/?LinkId=142215">configure</a> an IIS virtual directory.</p>
<p><b>Related:</b></p>
<p><a href="bits.txt">BitsTransfer.ps1</a> - Example bits script<br>
<a href="test-path.html">Test-Path</a> - Return true if a path exists<br>
<a href="http://en.wikipedia.org/wiki/Background_Intelligent_Transfer_Service">Background Intelligent Transfer Service</a> - Wikipedia<br>
<a href="../nt/bitsadmin.html">BITSADMIN</a> - command line utility<br>
<a href="index.html">PowerShell Cmdlets </a></p><!-- #BeginLibraryItem "/Library/foot_menu.lbi" --><hr>
<div id="bl" class="footer"><a href="bits.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

