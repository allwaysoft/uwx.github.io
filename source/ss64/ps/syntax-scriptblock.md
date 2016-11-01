---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem -->
<h1>PowerShell Scriptblocks</h1>
<p> A ScriptBlock is a collection of statements surrounded with <span class="code">{ </span>curly parenthesis<span class="code"> }<br>
</span>a scriptblock  can be saved in a variable and executed using the &amp; <a href="call.html">call operator</a> </p>
<p> <b>Example</b></p>
<p class="code">$alert = { "Hello World" } <br>
&amp; $alert<br>
&amp; $alert</p>
<p>Notice that to execute a ScriptBlock you must use the call operator “&amp;”, just defining the ScriptBlock is not enough.</p>
<p>Just like a function, we can add a <a href="syntax-args.html">param</a> block to make the scriptblock more flexible: </p>
<p class="code">$alert = { param ($message) "$message" } <br>
&amp; $alert -Message "Hello World"</p>
<p>When passing a variable to a scriptblock it is important to consider the <a href="syntax-scopes.html">scope</a></p>
<ol>
<li>Each time the scriptblock is run; it will dynamically read the current value of the variable.</li>
<li>When a scriptblock is run using  the “&amp;” (<a href="call.html">call</a>) operator, updates to a variable are not reflected in the parent scope.</li>
<li>When a scriptblock is run using  the  “.” (<a href="call.html">dot</a>) operator, updates to a variable apply to the current scope.</li>
</ol>
<h2>GetNewClosure</h2>
<blockquote>
<p>GetNewClosure can be used to reverse the above behaviour (1.) so that a variable will only be read  when the scriptblock is initialised. This makes the scriptblock self-contained or closed:</p>
<pre>PS C:\&gt; $name = "Hello world"
PS C:\&gt; $ScriptBlock = {$name}
PS C:\&gt; $closedScriptBlock = $ScriptBlock.GetNewClosure()

PS C:\&gt; &amp; $scriptblock
"Hello world"
PS C:\&gt; &amp; $closedScriptBlock
"Hello world"
</pre>
<p> Now if we change the variable and re-run the scriptblock,  the closed version does not pick up the change:<br>
</p>
<pre>PS C:\&gt; $name = "New Green shoes"
PS C:\&gt; &amp; $scriptblock
"New Green shoes"
PS C:\&gt; &amp; $closedScriptBlock
"Hello world"</pre>
</blockquote>
<p><span class="code">Begin {}, Process {}</span> and<span class="code"> End {}</span> blocks can be added to a scriptblock, just like a function</p>
<p>For anything more complex, you can take the scriptblock one step further and  turn it into a <a href="syntax-functions.html">Function or Filter</a>.</p>
<p class="quote"><i>“I…confess to a strong bias against the fashion for reusable code. To me, 're-editable code' is much, much better…” ~ Donald Knuth</i></p>
<p><b>Related:</b></p>
<p><a href="set-variable.html">Set-Variable</a> - Set a variable and its value<br>
<a href="syntax-functions.html">Functions</a> - Write a named block of code<br>
CMD Shell: <a href="../nt/syntax-macros.html">Batch file macros</a></p>
<!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-scriptblock.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

