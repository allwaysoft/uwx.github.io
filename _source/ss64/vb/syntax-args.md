---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>VBScript command line arguments</h1> 
<h2>Positional arguments</h2>
<p>Calling a script with unnamed arguments is a simple method of passing values into a VBScript, those values can then be picked up within the script by reading the properties of <b>WScript.Arguments</b></p>
<pre>cscript.exe demo.vbs December 500
</pre>
<p> [demo.vbs]<br>
<span class="code">strMonth = WScript.Arguments.Item(0)<br>
strPrice = WScript.Arguments.Item(1)<br>wscript.echo strMonth &amp; " and " &amp; strPrice</span><br>
</p>
<p>This can be extended to cope with a large number of arguments <span class="code">.Item(<i>n</i>)</span> but  every time the script is called all of the arguments must be present and passed in the same order. If any are missed out then the numbers will change <span class="code">.Item(4)</span> becomes <span class="code">.Item(3)</span>etc.</p>
<h2>Named arguments</h2>
<p>A named argument begins with a slash (<span class="code">/</span>), and the name and the value are separated by a colon (<span class="code">:</span>) those values can then be picked up within the script by reading the collection <b>WScript.Arguments.Named</b> </p>
<p><span class="code">cscript.exe demo2.vbs /month:April /price:500<br>
<br>
</span>[demo2.vbs]<span class="code"><br>
Set colArgs = WScript.Arguments<b>.Named</b><br>
strMonth = colArgs.Item("month")<br>
strPrice = colArgs.Item("price")<br>
wscript.echo strMonth &amp; " and " &amp; strPrice</span></p>
<p>Named arguments can be given in any order</p>
<p><span class="code">cscript.exe demo2.vbs /price:500</span><span class="code"> /month:April </span></p>
<p>Named arguments are optional, so you can include a default:</p>
<pre>If <span class="code">colArgs</span>.Exists("<span class="code">month</span>") Then  
   <span class="code">strMonth</span> = <span class="code">colArgs</span>.Item("<span class="code">month</span>") 
Else  
   <span class="code">strMonth</span> = "January" 
End If</pre>
<p> To count the number of arguments:<br>
</p>
<p class="code">intCount = WScript.Arguments<b>.Count</b><br>
wscript.echo intCount</p>
<p class="quote"><i>“Art, in itself, is an attempt to bring order out of chaos” ~ Stephen Sondheim</i></p>
<p>Related</p>
<p><a href="arguments.html">Arguments</a> - Command line arguments<br>
<a href="syntax-variables.html">Variables</a> - Define VBScript constants and variables<br>
<a href="http://technet.microsoft.com/en-us/library/ee156618.aspx">Windows 2000 Scripting Guide</a> - Technet</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

