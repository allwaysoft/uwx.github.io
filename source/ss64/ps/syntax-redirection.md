---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Redirection</h1> 
<pre>  <i>command</i> &gt;  <i>filename</i>     # Redirect command output to a file (overwrite)

  <i>command</i> &gt;&gt; <i>filename</i>     # APPEND into a file

<i>  command</i> 2&gt; <i>filename</i>     # Redirect Errors from operation to a file(overwrite)

  <i>command</i> 2&gt;&gt; <i>filename</i>    # APPEND errors to a file

  <i>command</i> 2&gt;&amp;1            # Add errors to results

  <i>command</i> 1&gt;&amp;2            # Add results to errors

  <i>command</i> | <i>command</i>       # This is the basic form of a PowerShell <a href="syntax-pipeline.html">Pipeline</a>

In PowerShell 3.0+

  <i>command</i> 3&gt; warning.txt  # Write <a href="write-warning.html">warning</a> output to warning.txt 

  <i>command</i> 4&gt;&gt; verbose.txt # Append verbose.txt with the <a href="write-verbose.html">verbose</a> output 

  <i>command</i> 5&gt;&amp;1            # Writes <a href="write-debug.html">debug</a> output to the output stream 

  <i>command</i> *&gt; out.txt      # Redirect all streams (output, error, warning, verbose, and debug) to out.txt</pre>
<p>In PowerShell you must redirect only the commands that will output string data:<br>
<br>
<span class="code">if ($demo -eq $null) <b>{</b>Echo 'result'<b>}</b> &gt;demo.txt #this will fail</span><br>
<span class="code">if ($demo -eq $null) <b>{</b>Echo 'result' &gt;demo.txt<b>}</b> #this will work</span></p>
<p>Redirecting output to Null (to discard the output from a cmdlet) can be done with <a href="out-null.html">out-null</a>, but a far faster method is redirecting to the <span class="code">$null</span> <a href="syntax-automatic-variables.html">automatic variable</a>:</p>
<p><span class="code">PS C:\&gt; get-childitem &gt; $null</span></p>
<p>In PowerShell it is not  possible to redirect the output of an entire session (so Powershell.exe .... &gt;filename.txt won't work) however a very similar text output can be produced using the <a href="start-transcript.html">Start-Transcript</a> cmdlet. </p>
<p>The text files produced by PowerShell are by default in Unicode (UTF16), if you need a different encoding, use <a href="out-file.html">Out-File</a> instead of the redirection operator. </p>
<p><b>Examples</b></p>
<p class="code">PS C:\&gt; Get-ChildItem c:\windows\system &gt;&gt; "c:\my logs\text1.txt"</p>
<p class="code">PS C:\&gt; Get-ChildItem c:\windows\system | Out-File text2.txt -encoding ASCII </p>
<p class="code">PS C:\&gt; Start-Transcript -path c:\docs\Text3.txt<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ...<br>
PS C:\&gt; Stop-Transcript</p>
<p class="quote"><i>“Most variables can show either an upward trend or a downward trend, depending on the base year chosen” ~ Thomas Sowell</i></p>
<p><b>Related:</b></p>
<p><a href="out-host.html">Out-Host</a> - Send the pipelined output to the host.<br>
<a href="out-string.html">Out-String</a> - Send objects to the host as a series of strings.<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places.<br>
<a href="start-transcript.html">Start-Transcript</a> - Start a transcript of a command shell session<a href="stop-transcript.html">.<br>
Stop-Transcript</a> - Stop the transcription process.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-redirection.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

