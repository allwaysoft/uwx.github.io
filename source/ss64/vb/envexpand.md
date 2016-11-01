---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.ExpandEnvironmentStrings</h1> 
<p>Expand a Windows environment variable.</p>
<pre>Syntax 
      <i>objShell</i>.ExpandEnvironmentStrings(<i>strString</i>)

Key

   <i>objShell</i>    A WScript.Shell object

   <i>strString</i>   A PROCESS environment variable 
                    (enclosed with "%" characters)
</pre>
<p>Example</p>
<pre>Set objShell = WScript.CreateObject("WScript.Shell")
MsgBox "Prompt is " &amp; objShell.ExpandEnvironmentStrings("%PROMPT%")</pre>
<p>Note: Variable names are not case-sensitive.</p>
<p><i class="quote">”I would rather train someone and lose them, than not train them and keep them” ~ Zig Ziglar</i><br>
<b><br>
Related:</b></p>
<p>Environment, <a href="env.html">Read Environment variables</a> <br>
Equivalent Windows CMD command: <a href="../nt/set.html">SET</a> - Display, set, or remove environment 
variables<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-item.html">Get-Item</a> <span class="code">env:<i>HOMEDRIVE</i></span> or <span class="code">$env:<i>HOMEDRIVE</i> </span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="envexpand.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

