---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem -->
<h1>ForEach (method) </h1>
<p>Loop through a collection (or a set of properties) and perform an operation (execute a block of statements) against each. </p>
<pre>Syntax
      <i>collection</i>.ForEach<b>(</b><i>scriptblock_expression</i><b>)</b>
      <i>collection</i>.ForEach<b>(</b><i>scriptblock_expression</i>, <i>object</i>[] <i>arguments</i><b>)</b>
      <i>collection</i>.ForEach(<i>type convertToType</i>)
      <i>collection</i>.ForEach(<i>string propertyName</i>)
      <i>collection</i>.ForEach(<i>string propertyName</i>, <i>object</i>[] <i>newValue</i>)
      <i>collection</i>.ForEach(<i>string methodName</i>)
      <i>collection</i>.ForEach(<i>string methodName</i>, <i>object</i>[] <i>arguments</i>)

Key
   <i>collection</i>   A collection of objects e.g. filenames, registry keys, servernames
   <i>ScriptBlock</i>  A block of script to run against each object.  </pre>
<p>Available in PowerShell 4.0 and later, this method provides faster performance than a <a href="foreach.html">ForEach statement</a>.</p>

<p><b>Examples</b></p>
<p>Find all the running notepad processes, convert to an <a href="syntax-arrays.html">@array</a> and kill/stop them:</p>
<p><span class="code">@(Get-Process –Name notepad)<b>.ForEach(</b>{ <a href="stop-process.html">Stop-Process</a> -InputObject $_; }<b>)</b></span><br>
<br>
Loop through a collection of services:</p>
<pre># Get a set of services with names starting R
$services = Get-Service r*

# Display the names and status of each service in the collection
$services<b>.foreach(</b>{"$($_.Name)--$($_.status)"}<b>)</b>

# as we are passing a single script block argument this can be simplified to:
$services<b>.foreach</b>{"$($_.Name)--$($_.status)"}</pre>
<p class="quote"><i>“There are two ways of spreading light: to be the candle or the mirror that reflects it” ~ Edith Wharton</i></p><p><b>Related:</b></p>
<p>  <span class="code">$foreach</span> <a href="syntax-automatic-variables.html">variable</a> - Refers to the enumerator in a foreach loop.<br>
  <a href="break.html">Break statement </a><br>
  <a href="continue.html">Continue statement</a><br>
<a href="foreach.html">ForEach</a> statement<br>
  <a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline (foreach)<br>
  <a href="for.html">For</a> - Loop through items that match a condition<br>
  <a href="if.html">IF</a> - Conditionally perform a command<br>
  <a href="switch.html">Switch</a> - Multiple if statements<br>
  <a href="while.html">While</a> - Loop while a condition is True<br>
<a href="http://www.powershellmagazine.com/2014/10/22/foreach-and-where-magic-methods/">ForEach and Where magic methods</a> by Kirk Munro</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="foreach-method.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

