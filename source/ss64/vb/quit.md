---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>WScript.Quit</h1> 
<p>Exit the VBScript script.</p>
<pre>Syntax 
      WScript.Quit [<i>intErrorCode</i>]

Arguments:
   <i>intErrorCode</i>  An exit (or error) code
</pre>
<p>The default is to return no value (0)<br>
Quit is a wscript method.</p>
<p>Example</p>
<pre>WScript.Quit 1</pre>
<p>If calling a VBScript from  a batch file, catch the Errorlevel with an <a href="../nt/if.html">IF</a> statement <br>
  <br>
  <span class="code">cscript.exe MyScript.vbs<br>
  IF errorlevel 1 goto s_next</span></p>
<p><i class="quote">“You might as well aim high. Why shoot yourself in the foot when you can shoot yourself in the head?” - William Shatner</i><br>
<b><br>
</b>
  
<b>Related</b></p>
<p>Equivalent Windows CMD command: 
EXIT - Quit the CMD shell<br>
Equivalent PowerShell cmdlet: Exit </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="quit.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

