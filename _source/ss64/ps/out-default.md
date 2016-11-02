---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Out-Default</h1> 
<p>Send output to default</p>
<pre>Syntax
      Out-Default [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]

Key
   -inputObject     The input item {may be piped}

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>  This cmdlet has no effect on the formatting or output. It is a placeholder that lets you write your own Out-Default function or cmdlet.</p>
<p>The final part of displaying PowerShell output is a hidden background call to an Output cmdlet, by default as the last part of the execution process PowerShell calls the default output cmdlet which is typically Out-Host.</p>
<p><b>Examples</b></p>
<p class="code">PS C:\&gt; get-date<br>
Friday, December 17, 2010 18:23:43</p>
<p class="code">PS C:\&gt; function out-default { "hello" }<br>
PS C:\&gt; get-date<br>
<br>
PS C:\&gt; function out-default { "hello" | out-host }<br>
PS C:\&gt; get-date<br>
hello<br>
PS C:\&gt; del function:out-default<br>

PS C:\&gt; get-date<br>
Friday, December 17, 2010 18:24:52</p>
<p class="quote"><i>"Talk is cheap. Show me the code" ~ Linus Torvalds, 2006 </i></p>
<p><b>Related:</b><br>
  <br>
<a href="out-file.html">Out-File</a> - Send command output to a file <br>
<a href="out-host.html">Out-Host</a> - Send the pipelined output to the host <br>
<a href="out-null.html">Out-Null</a> - Send output to null <br>
<a href="out-printer.html">Out-Printer</a> - Send the output to a printer <br>
<a href="out-string.html">Out-String</a> - Send output to the pipleline as strings<br>
<a href="tee-object.html">Tee-Object</a> - Send input objects to two places</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

