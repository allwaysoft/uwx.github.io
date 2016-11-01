---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Continue</h1> 
<p>Return to top of a program loop, skip just this iteration of the loop.</p>
<p>In a <a href="for.html">For</a>, <a href="foreach.html">ForEach</a> or <a href="while.html">While</a> loop you can add a <span class="code">continue</span> statement to jump to the top of the innermost loop. </p>
<p>Choose the conditions under which you call the continue statement carefully, as it is easy to create an infinite loop.</p>
<p><b>Example</b></p>
<p>Count to 10 but miss out the number 5:</p>

<pre> PS&gt; $i =0
     while ($i -lt 10)
         {
           $i +=1 
           if ($i -eq 5) {continue}
           Write-Host $i
         }
</pre>
<p class="quote"><i>“Just don't give up trying to do what you really want to do. <br>
Where there is love and inspiration, I don't think you can go wrong” ~ Ella Fitzgerald</i></p>
<p><b>Related:</b><br>
<br>
<a href="break.html">Break</a> - Exit a program loop<br>
<a href="exit-pssession.html">Exit-PSSession</a> - 
Exit PowerShell (or exit a script)<br>
<a href="return.html">Return</a> -  Exit the current scope, (function, script, or script block).<br>
<a href="trap.html">Trap</a> - 
Handle a terminating error<br>
<a href="while.html">While</a> - Loop while a condition is True</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="continue.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

