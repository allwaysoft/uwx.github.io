---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>.Environment </h1> 
<p>Return a Windows Environment variable.</p>
<pre>Syntax 
      <i>objShell</i>.Environment([<i>strType</i>]) 

Key:
   <i>objShell</i>   A WScript.Shell object 

   <i>strType</i> is one of
      "System" (HKLM),
      "User"   (HKCU),
      "Volatile" or "Process"

<b>Example
</b>
'Write to env variables
Set objShell = WScript.CreateObject("WScript.Shell")
objShell.Environment("USER").Item("MyVar1") = "hello"
objShell.Environment("USER").Item("MyVar2") = "world"

'Read Env Variables
WScript.Echo objShell.Environment("USER").Item("MyVar1")
WScript.Echo objShell.Environment("USER").Item("MyVar2") 

' Retrieve the %COMPUTERNAME% system environment variable
WScript.Echo objShell.Environment("PROCESS").Item("COMPUTERNAME") 

".Item" is actually the default property and can be omitted</pre>
<p class="quote"><i>“It is possible to store the mind with a million facts and still be entirely uneducated” ~ Alec Bourne</i></p>
<p><b>Related:</b></p>
<p><span class="body">Environment</span> variables <a href="envexpand.html">- Expand</a> - <a href="envrm.html">.Delete/Remove</a><br>
Equivalent Windows CMD command: <a href="../nt/set.html">SET</a> - Display, set, or remove environment 
variables<br>
Equivalent PowerShell cmdlet: <a href="../ps/get-item.html">Get-Item</a> <span class="code">env:<i>HOMEDRIVE</i></span> or <span class="code">$env:<i>HOMEDRIVE</i> </span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="env.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

