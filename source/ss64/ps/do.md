---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Do</h1> 
<p>Run a command block based on the results of a conditional test.</p>
<pre>Syntax
      [:<i>Loop_label</i>] <b>Do</b>
      {
         <i>command_block
      </i>} <b>while</b> (<i>condition</i>)

or

      [:<i>Loop_label</i>] <b>Do</b>
      {
         <i>command_block
      </i>} <b>until</b> (<i>condition</i>)

Key

   condition      If this evaluates to TRUE the loop {<i>command_block</i>} runs.
                  when the loop has run once the condition is evaluated again

   <i>command_block</i>  Commands, separated by commas, to run each time the loop repeats.

   :<i>Loop_label</i>    An optional label than can be used to break or continue.
</pre>
<p>As long as the condition is met, PowerShell will continue to rerun the {<i>command_block</i>} section unless interrupted by a <span class="code">break</span> or <span class="code">continue</span> statement.</p>
<p><b>Examples</b></p>
<p>Count to 10:</p>
<pre> PS&gt; Do { $val++ ; Write-Host $val } while($val -ne 10) </pre>
<p>You can use carriage returns instead of semi-colons:</p>
<pre> PS&gt; Do { $val++ 
          Write-Host $val
        } while($val -ne 10) </pre>
<p class="quote"><i>“A quarrel is quickly settled when deserted by one party; there is no battle unless there be two” ~ Lucius Annaeus Seneca</i></p>
<p><b>Related:</b></p>
<p><a href="while.html">While</a> - Loop  as long as the condition is TRUE.<br>
<a href="until.html">Until</a> - Loop  as long as the condition is FALSE. (<span class="code">Until</span> is an antonym of <span class="code">While</span>.)<br>
<a href="break.html">Break statement </a><br>
<a href="continue.html">Continue statement</a><br>
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

