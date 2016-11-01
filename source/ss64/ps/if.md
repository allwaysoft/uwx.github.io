---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>If </h1>
<p>Conditionally perform a command.</p>
<pre>Syntax
      if (<i>condition</i>) {<i>commands_to_execute</i>}
      [ elseif (<i>condition2</i>) {<i>commands_to_execute</i>} ]
      else {<i>commands_to_execute</i>}  

Key
   <i>Condition</i>  An expression that will evaluate to true or false,
              often utilising one or more <a href="syntax-compare.html">comparison operators</a>.

   <i>commands_to_execute
             </i> A PowerShell or external command to run if the condition is true.</pre>
<p><b>Examples</b></p>
<p>Replace the text in the variable $MyDemoVar:</p>
<p><span class="code">PS C:\&gt; if ($MyDemoVar -like "*SS64*") {$MyDemoVar -replace "SS64", "Demonstration Example"}   </span><br>
  <br>
  Print the running services in green and stopped services in red:</p>
<p class="code">PS C:\&gt; get-service | foreach-object{  if ($_.status -eq "stopped") {write-host -f red $_.name $_.status}`  else{ write-host -f green $_.name $_.status{% raw %}}}{% endraw %}  </p>
<p class="quote"><i>“You see things; and you say 'Why?' But I dream things that never were; and I say 'why not?' - George Bernard Shaw </i></p>
<p><b>Related:</b><br>
 <br>    
<a href="foreach.html">ForEach</a> - Loop through values in the pipeline<br>
<a href="syntax-compare.html">Comparison operators</a> - Full list </p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="if.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->
