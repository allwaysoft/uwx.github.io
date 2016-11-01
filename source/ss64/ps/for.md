---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>For</h1> 
<p>Run a command block based on a conditional test.</p>
<pre>Syntax
      for (<i>init</i>; <i>condition</i>; <i>repeat</i>) 
        {<i>command_block</i>}

Key

   init      Commands, separated by commas, to run before the loop begins.
             Typically used to initialize a variable with a starting value.

   condition If this evaluates to TRUE the for loop {<i>command_block</i>} runs
             when the loop has run once the condition is evaluated again

   repeat    Commands, separated by commas, to run each time the loop repeats.

</pre>
<p>
  A typical use of the for loop is to operate on a subset of the values in an array.<br> 
In most cases, if you want to iterate <b>all</b> values in an array, consider using a <a href="foreach.html">foreach</a> statement.</p>
<p><b>Examples</b></p>
<p>Count to 10:</p>
<pre> PS&gt; for($i=1; $i -le 10; $i++){Write-Host $i}</pre>
<p>You can use carriage returns instead of semi-colons:</p>
<pre> PS&gt; for($i=1
     $i -le 10
     $i++){
       Write-Host $i
     }</pre>
<p class="quote"><i>“An essential aspect of creativity is not being afraid to fail” ~ Edwin Land </i></p>
<p><b>Related:</b><br>
  <br>
  <a href="break.html">Break statement </a><br> 
<a href="continue.html">Continue statement</a><br>

comparison_operators<br>
<a href="foreach.html">ForEach</a> - Loop through values in the pipeline<br>

<a href="if.html">IF</a> - Conditionally perform a command<br>
<a href="while.html">While</a> Loop while a condition is True</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="for.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

