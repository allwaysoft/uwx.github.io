---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Pipelines</h1> 
<p>A common scripting requirement is to loop through a collection of items (files, registry entries etc.)<br>
Pipelines provide an easy way to achieve this, for example consider the following script:</p>
<pre> $a = Get-ChildItem *.txt
 foreach ($file in $a)
 {
  if ($file.length -gt 100) 
  {
  Write-Host $file.name
  }
 }</pre>
<p>Rewriting this with a pipeline it becomes a one liner:</p>
<p class="code">Get-ChildItem *.txt <b>|</b> where {<b>$_</b>.length -gt 100} <b>|</b> Format-Table name</p>
<p>To chain commands together into a pipeline,  specify each command in the order that they should run (left to right). <br>
Separate the commands with a pipe symbol (<span class="code">|</span>). </p>
<p>The commands will pass the necessary objects down the pipeline as part of a single operation.</p>
<p>The <span class="code">$_</span>  is a <a href="syntax-automatic-variables.html">variable</a> created automatically by PowerShell to store the current pipeline object. All properties of the pipeline object can be accecced via this variable.</p>
<p>In PowerShell 3.0 and above a new <a href="syntax-automatic-variables.html">automatic variable</a> called <span class="code">$PSItem</span> is available, this is exactly the same as <span class="code">$_</span><br>
It just provides an alternative name to make your pipeline code easier to read.</p>
<p class="quote"><i>“Pipe Dream": An unrealistic hope or fantasy - The allusion is to the dreams experienced by smokers of opium pipes.</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-args.html">parameters</a> - Command Line Parameters  param() and $args[]<br>
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br> 
<a href="foreach.html">ForEach</a> - Loop through values in the pipeline</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-pipeline.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

