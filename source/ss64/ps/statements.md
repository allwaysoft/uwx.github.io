---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>PowerShell Statements</h1>
<p>  Conditional Statements. </p>
<pre>   <a href="if.html">if .. else</a>        Conditionally perform a command
   <a href="switch.html">Switch</a>            Multiple if statements</pre>
<p> Looping statements:</p>
<pre>   <a href="do.html">Do .. while</a>       Loop while a condition is True
   <a href="foreach.html">ForEach</a>           Loop through each item in a collection
   <a href="for.html">For</a>               Loop through items that match a condition
   <a href="while.html">While</a>             Loop while a condition is True</pre>

<p>Flow control statements:</p>
<pre>   <a href="break.html">break</a>             Halt execution of the current loop.
   <a href="continue.html">continue</a>          Return to top of a program loop immediately.

   return <i>value</i>      Return a value from a script/function
   Exit <i>errorlevel</i>   Return an error code from the current script.
</pre>
<p><b>Examples</b></p>
<p>Replace the text in the variable $MyDemoVar:</p>
<p><span class="code">PS C:\&gt; if ($MyDemoVar -like "*SS64*") {$MyDemoVar -replace "SS64", "Demonstration Example"}</span></p>
<p class="quote"><i>“Be kind, for everyone you meet is fighting a hard battle” ~ Ian Maclaren</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-args.html">Parameters</a> - Command Line Parameters  param() and $args[]<br>
<a href="common.html">CommonParameters</a> - cmdlet parameters</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="statements.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

