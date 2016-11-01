---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>ForEach (loop statement) </h1>
<p>Loop through a set of input objects and perform an operation (execute a block of statements) against each. </p>
<pre>Syntax
      ForEach (<i>item</i> <b>In</b> <i>collection</i>) {<i>ScriptBlock</i>}

key
   <i>item</i>         A variable to hold the current item
   <i>collection</i>   A collection of objects e.g. filenames, registry keys, servernames
   <i>ScriptBlock</i>  A block of script to run against each object.  </pre>
<p>The <i>collection</i> will be evaluated and stored as an array in memory before the <i>scriptblock</i> is executed. </p>
<p>The <span class="code">foreach</span> statement does not use pipelining (unlike <a href="foreach-object.html">ForEach-Object </a> ) If you use <span class="code">foreach</span> in a command pipeline PowerShell will actually run the <span class="code">foreach</span> alias that calls <span class="code">ForEach-Object</span>.</p>
<p>Use the <span class="code">ForEach</span> statement when the <i>collection </i>of objects is small enough that it can be loaded into memory.<br>
Use the <a href="foreach-object.html">ForEach-Object</a> cmdlet when you want to pass only one object at a time through the pipeline, minimising memory usage. In most cases <span class="code">ForEach</span> will run faster than <span class="code">ForEach-Object</span>, there are exceptions, such as starting multiple background jobs. If in doubt test both options with <a href="measure-command.html">Measure-Command</a>.</p>
<p>In PowerShell 4.0 and later, the <a href="foreach-method.html">ForEach method</a> provides even faster performance.</p>

<p><b>Examples</b></p>
<p>Loop through an array of strings:</p>
<p class="code">&nbsp;$trees = @("Alder","Ash","Birch","Cedar","Chestnut","Elm")<br>
  <br>
&nbsp;foreach ($tree in $trees) {<br>
&nbsp;&nbsp;&nbsp;"$tree = " + $tree.length<br>
&nbsp;}</p>
<p>Loop through a collection of the numbers, echo each number unless the number is 2: </p>
<p><span class="code">&nbsp;foreach ($num in 1,2,3,4,5) {<br>
&nbsp;&nbsp;if ($num -eq 2) { continue } ; $num<br>
&nbsp;}</span><br>
<br>Loop through a collection of .txt files:</p>
<p class="code">&nbsp; foreach ($file in get-ChildItem *.txt) {<br>
&nbsp; &nbsp; Echo $file.name<br>
&nbsp; }</p>
<p class="quote"><i>“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it” - Steve Jobs</i></p>
<p><b>Related:</b></p>
<p>  <span class="code">$foreach</span> <a href="syntax-automatic-variables.html">variable</a> - Refers to the enumerator in a foreach loop.<br>
  <a href="break.html">Break statement </a><br>
  <a href="continue.html">Continue statement</a><br>
  <a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline (foreach)<br>
<a href="foreach-method.html">ForEach (method)</a> - Loop through items in a collection <br>
  <a href="for.html">For</a> - Loop through items that match a condition<br>
  <a href="if.html">IF</a> - Conditionally perform a command<br>
  <a href="switch.html">Switch</a> - Multiple if statements<br>
  <a href="while.html">While</a> - Loop while a condition is True</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="foreach.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

