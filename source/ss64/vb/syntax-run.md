---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Run a  VBScript file</h1> 
<p> To run a VBScript from within another VBScript:</p>
<pre>Dim objShell<br>Set objShell = WScript.CreateObject("WScript.Shell")<br>objShell.Run "cscript c:\batch\demo.vbs"</pre>
<h2>Run a CMD batch file </h2>
<p>To run a CMD batch file from VBScript:<br>
<span class="code"> Dim objShell<br>
Set objShell = WScript.CreateObject("WScript.Shell")<br>

objShell.Run "c:\batch\test.cmd"</span></p>
<h2>Run a PowerShell script</h2>
<p>To run a PowerShell script from VBScript:<br>
<span class="code"> Dim objShell<br>
Set objShell = WScript.CreateObject("WScript.Shell")<br>
objShell.Run "powershell -file ""c:\batch\demo.ps1"""</span></p>
<p><b>Related</b>
</p><p><a href="syntax-hybrid.html">Hybrid batch/VBScript</a><br>
<a href="../ps/syntax-run.html">Run a script from PowerShell </a><br>
<a href="../nt/syntax-run.html">Run a script from the CMD shell</a>
</p><p class="quote">“Those that set in motion the forces of evil cannot always control them afterwards” ~ Charles W. Chesnutt</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-run.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

