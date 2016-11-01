---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Reference Variables</h1>
<p>A Reference variable is used to pass values into a <a href="syntax-functions.html">function</a>. <br>
By default, PowerShell <a href="syntax-variables.html">variables</a> are created with a "Local" scope, so a variable definition like <span class="code">$myvar = 'Hello World'</span> will be visible only to the current script or the current function.</p>
<p>A reference variable ( defined with type: <span class="code">[ref]</span>) is able to change the value of another variable that is passed to it. This means that you can write a <a href="syntax-functions.html">function</a> that directly modifies one, (or more likely several) existing variables, rather than just returning a value.</p>
<p>Examples</p>
<p><span class="code">    PS C:\&gt; function add5([ref]$num)<br>
&gt;&gt; {<br>
&gt;&gt;       $num.value = $num.value + 5<br>
&gt;&gt; }<br>
<br>
    PS C:&gt; $testing = 2<br>
PS C:&gt; $testing<br> 
2
<br>
PS C&gt; add5 ([ref]$testing)<br>
PS C&gt; $testing<br> 
7
<br>
<br>
# Extending this to modify two variables:<br>
    PS&gt; function add5minus5([ref]$add,[ref]$minus)<br>
&gt;&gt; {<br>
&gt;&gt;     $add.value = $add.value + 5<br>
&gt;&gt; </span><span class="code">$minus.value = $minus.value - 5<br>
&gt;&gt; }</span></p>
<p>If the parameter passed is not a reference variable, an <i>InvalidArgument</i> exception will be thrown. The parameters passed must also match the <i>type </i>required, integer, string etc. </p>
<p class="quote"><i>“To take the measure of oneself by reference to one’s colleagues leads to envy or complacency rather than constructive self-examination” ~ Benno C. Schmidt, Jr.</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-variables.html">Variables</a> - Create/read variables<br>
<a href="set-psbreakpoint.html">Set-PSBreakpoint</a> - Set a breakpoint on a line, command, or variable<br>
<a href="new-variable.html">New-Variable</a> - allows a choice of "Global", "Local", "Private" or "Script"<br>
<a href="get-variable.html">Get-Variable</a> - Get a PowerShell variable<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable and a value</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

