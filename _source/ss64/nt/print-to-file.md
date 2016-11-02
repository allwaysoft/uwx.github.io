---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Print to file </h1> 
<p> Windows 7 can be configured to print plain text directly to a specified file without prompting for a filename. This is done by adding a value to the Registry and configuring an additional printer port as follows:</p>
<p>1) Locate the following registry key in Regedit:</p>
<p class="code">HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Ports</p>
<p>2. From the Edit menu, choose Add Value REG_SZ. In the  Name field type a suitable  path and filename (<span class="code">C:\docs\printout.txt</span>). Leave the value blank.</p>
<p>3. Save your changes and exit Registry Editor.</p>
<p>4. <b>Restart</b> the computer.</p>
<p>5. Start Control Panel, Printers and select an existing printer connection, or add a new one.</p>
<p>6. Choose Printer Properties from the  File menu. For best results configure the printer with the <span class="code">Generic/Text</span> print driver.</p>
<p>7. Under Ports, select the filename  specified in Step 2.</p>
<p>The file can appear without a file extension.<br>
Before sending a second print job the file must be renamed or deleted.</p>
<p class="quote"><i>“I write down everything I want to remember. That way, instead of spending a lot of time trying to remember what it is I wrote down, I spend the time looking for the paper I wrote it down on” ~ Beryl Pfizer</i></p>
<p><b>Related:</b></p>
<p><a href="print.html">PRINT</a> - Print a text file<br>
<a href="net_share.html">NET PRINT</a> - View and Delete print jobs</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="print-to-file.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

