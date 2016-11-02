---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Break</h1> 
<p>Exit a program loop immediately.</p>
<p>Break can also be used to stop script execution when it is placed outside a loop or switch statement.</p>
<p>In a <a href="for.html">For</a>, <a href="foreach.html">ForEach</a>, <a href="while.html">While</a>,  <a href="do.html">Do</a> loop or in a <a href="switch.html">Switch</a> statement you can add a <span class="code">break</span> statement to exit the code block. </p>
<p>Choose the conditions under which you call the continue statement carefully, as it is easy to create an infinite loop. Most commonly an <a href="if.html"><span class="code">if</span></a> statement can be used to define the break conditions. </p>
<p><b>Examples</b></p>
<p>Count to 10 but stop as soon as you reach number 5:</p>

<pre> PS&gt; $i = 0
 PS&gt; while ($i -lt 10) <b>{</b>
        $i +=1 
        if ($i -eq 5) {break}
        Write-Host $i
     <b>}</b></pre>
<p class="quote"><i>“Our greatest glory is not in never failing, but in rising up every time we fail” ~ Ralph Waldo Emerson</i></p>
<p><b>Related:</b><br>
  <br>
<a href="continue.html">Continue</a> - Skip just this iteration of a loop<br>
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
<div id="bl" class="footer"><a href="break.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

