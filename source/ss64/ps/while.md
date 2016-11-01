---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>While</h1> 
<p>Run a command block based on the results of a conditional test.</p>
<pre>Syntax
      while (<i>condition</i>) {<i>command_block</i>}

Key

   condition      If this evaluates to TRUE the loop {<i>command_block</i>} runs.
                  when the loop has run once the condition is evaluated again

   <i>command_block</i>  Commands, separated by commas, to run each time the loop repeats.
</pre>
<p>
  As long as the condition remains true, PowerShell reruns the {<i>command_block</i>} section.</p>
<p><b>Examples</b></p>
<p>Count to 10:</p>
<pre> PS&gt; while($val -ne 10) { $val++ ; Write-Host $val }</pre>
<p>You can use carriage returns instead of semi-colons:</p>
<pre> PS&gt; while($val -ne 10)
     {
       $val++
       Write-Host $val
     }</pre>
<p class="quote"><i>“A quarrel is quickly settled when deserted by one party; there is no battle unless there be two” ~ Lucius Annaeus Seneca</i></p>
<p><b>Related:</b><br>
  <br>
<a href="break.html">Break statement </a><br>
<a href="continue.html">Continue statement</a><br>
<a href="do.html">Do</a>  - 
Run a command block based on the results of a conditional test.<br>
<a href="foreach-object.html">ForEach-Object</a> -  Loop for each object in the pipeline (foreach)<br>
<a href="foreach.html">ForEach</a> - Loop through values in the pipeline<br>
<a href="if.html">IF</a> - Conditionally perform a command<br>
<a href="for.html">For</a> - Loop through items that match a condition<br>
<a href="switch.html">Switch</a> - Multiple if statements</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

