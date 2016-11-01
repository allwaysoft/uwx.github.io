---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>Measure-Command</h1> 
<p>Measure running time (for script blocks and cmdlets).</p>
<pre>Syntax
      Measure-Command [-expression] <i>scriptblock</i> 
         [-inputObject <i>psobject</i>] [<i>CommonParameters</i>]
Key
   -expression 
       The expression to be timed.
       Enclose the expression in {curly braces}

   -inputObject
       An object that represents an expression.
       A command, expression or variable that contains the object(s).

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Measures the time it takes to run a "get-eventlog" command:</p>
<p><span class="code">PS C:\&gt; Measure-Command { get-eventlog "windows powershell" }</span><br>
  <br>
  Compare the performance of -filter and -include:</p>
<p class="code">PS C:\&gt; measure-command {get-childitem c:\windows -include *.txt -recurse}<br>
PS C:\&gt; measure-command {get-childitem c:\windows -filter "*.txt" -recurse}</p>
<p class="quote"><i>“There is no monument dedicated to the memory of a committee” ~ Lester J. Pourciau</i></p>
<p><b>Related:</b></p>
<p>  <span class="body"><a href="compare-object.html">Compare-Object</a> - Compare the properties of objects<br>
<a href="trace-command.html">Trace-Command</a> - Trace an expression or command<br>
</span>    <a href="invoke-expression.html">Invoke-Expression</a> - Run a PowerShell expression<br>  
Equivalent bash command: <a href="../bash/time.html">time</a> - Measure program running time</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="measure-command.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

