---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1><span class="code">--% </span>Stop parsing input as PowerShell commands or expressions.</h1> 
<p>When calling an executable program in  PowerShell, place the stop-parsing symbol before any program arguments.</p>
<pre>Syntax
      <i>PowerShell_commands</i> <b>--%</b>  <i>non-powershell_arguments/expressions</i></pre>
<p>The stop-parsing symbol  (<span class="code">--%</span>), introduced in  PowerShell 3.0, directs PowerShell to refrain from interpreting any further input on the line as  PowerShell commands or expressions. </p>
<p><b>Examples</b></p>
<p>Call a VBScript or batch file:</p>
<p class="code">PS C:\&gt; &amp; cmd.exe <b>--%</b> /C "C:\demo files\email.cmd" %USERNAME%</p>
<p><span class="code">PS C:\&gt; &amp; cmd.exe /C C:\Batch\demo.cmd test 123</span></p>
<p class="code">PS C:\&gt; &amp; cscript.exe <b>--%</b> -nologo "H:\export scripts\export.vbs"</p>
<p class="quote"><i>"The big divide in this country is not between Democrats and Republicans, or women and men, but between talkers and doers" ~ Thomas Sowell</i></p><p><b>Related:</b><br>
<br>
<a href="invoke-command.html">Invoke-Command</a> -   Run commands on local and remote computers.<br>
<a href="invoke-expression.html">Invoke-Expression</a> - Run a PowerShell expression.<br>
<a href="invoke-item.html">Invoke-Item</a> - Invoke an executable or open a file (START)<br>
<a href="start-process.html">Start-Process</a> -  Start one or more processes, optionally as a specific user.<br>
<a href="call.html">&amp; (call)</a> - Run a command script.<br>
<a href="source.html">. (source)</a> - Run a command script in the current shell (persist variables and functions)</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stop-parsing.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

