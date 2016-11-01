---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Where-Object</h1> 
<p>Filter input from the pipeline, control which objects will be passed along the command pipeline.<br>
The '<span class="code">?</span>' symbol and <span class="code">Where</span> are both  aliases for <span class="code">Where-Object</span>.</p>
<pre>Syntax
      Where-Object [-filterScript] {<i>scriptblock</i>}
             [-inputObject <i>psobject</i>] [CommonParameters]

Key
   -FilterScript <i>scriptblock</i>
       An expression that resolves to a Boolean (TRUE/FALSE) value.
       This will determine which input objects will be passed  along the command pipeline.

   -inputObject <i>psobject</i>
       The objects to be filtered. Typically objects are passed through the pipeline.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>The '<span class="code">?</span>' symbol and <span class="code">Where</span> are both aliases for <span class="code">Where-Object</span> and there is also a <span class="code"><a href="where.html">Where</a></span> statement. If you explicitly want to run the Where-Object command, run <span class="code">Where-object</span> or '<span class="code">?</span>' .</p>
<p>Where-object determines which objects to pass along the pipeline by evaluating a script block that may include a reference to an object being filtered. If the result of the evaluation is True, the object being processed is passed along the pipeline; otherwise the object is discarded.</p>
<p>The scriptblock expression can use any of the <a href="syntax-compare.html">PowerShell comparison operators</a> (as long as the result is a boolean.)<br>
Also:  <span class="code">-not</span>   logical not (with ! as an alias)
and <span class="code">-xor</span> (Exclusive OR) </p>
<p><b>Examples</b></p>
<p>Get a list of files but exclude folders:</p>
<p class="code">PS C:\&gt; Get-ChildItem 'C:\Apps\'  -Recurse | Where-Object {-not $_.PsIsContainer}</p>
<p>Get a list of all services that are currently stopped:</p>
<p><span class="code">PS C:\&gt; Get-Service | Where-Object {$_.Status -eq 'Stopped'}</span><br>
<br>Lists the processes with a working set greater than  25000K. (bytes = Kilobytes*1024):</p>
<p class="code">PS C:\&gt; Get-process | ? {$_.workingset -gt 25000*1024}</p>
<p>Get the processes with a ProcessName property that begins with the letter p. The <span class="code">-match</span> operator enables you to use <a href="syntax-regex.html">regular expressions</a>:</p>
<p class="code">PS C:\&gt; Get-process | Where-Object { $_.ProcessName -match '^p.*' }</p>
<p class="quote"><i>“The enemy of art is the absence of limitations” ~ Orson Welles</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-regex.html">PowerShell Syntax - Regular Expressions</a><br>
<a href="foreach-object.html">ForEach-Object</a> - Loop for each object in the pipeline<br>
<a href="group-object.html">Group-Object</a> - Group the objects that contain the same value for a common property<br>
<a href="select-object.html">Select-Object</a> - Select objects based on parameters set in the Cmdlet command string<br>
<a href="sort-object.html">Sort-Object</a> - Sort the input objects by property value<br>
<a href="where.html">Where</a> statement<br>
<a href="where-method.html">Where (method)</a> - Filter input from a collection</p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

