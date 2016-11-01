---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Run a CMD batch file</h1>
<p>To run a batch script from the CMD shell, save the file as plain ASCII text with the file extension .CMD, then from the command line, enter the name of the script and press return.<br>
<br>
<span class="code">C:\Batch&gt; Demo.cmd</span></p>
<p>To run a batch file from within another batch file, use the <a href="call.html">CALL</a> command, otherwise the first script will exit without performing any further commands.</p>
<p>It is also possible to run batch scripts with the old (Windows 95 style) .BAT extension, but be aware that these will set <span class="code"><a href="errorlevel.html">ERRORLEVEL</a></span> differently.</p>
<h2>Run a Powershell script</h2>
<blockquote>
<p>To run a PowerShell script from the CMD shell:</p>
<pre><span class="code">C:\&gt; </span>powershell -file "c:\batch\demo.ps1"
</pre>
</blockquote>
<h2>Run a VBScript file </h2>
<blockquote>
<p>To run a VBScript from the CMD shell:</p>
<pre><span class="code">C:\&gt; cscript c:\batch\demo.vbs</span></pre>
</blockquote>
<p class="quote"><i>“The method of the enterprising is to plan with audacity and execute with vigor” ~ John Christian Bovee</i>
</p><p><b>Related</b>
</p><p><a href="../ps/syntax-run.html">Run a script from PowerShell </a><br>
<a href="../vb/syntax-run.html">Run a script from VBScript 

</a>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-run.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

