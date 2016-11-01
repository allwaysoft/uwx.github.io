---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>let</h1> 
<p> Perform arithmetic on shell variables.</p>
<pre>Syntax
      let <var>expression</var> [<var>expression</var>]</pre>
<p> Each <var>expression</var>  is an arithmetic expression to be evaluated. If the last <var>expression</var> evaluates to 0, <code>let</code> 
  returns 1; otherwise 0 is returned.</p>
<p>let is very similar to <span class="code">((</span> - the only difference being let is a builtin (simple command), and (( is a compound command. </p>
<p>The arguments to let are therefore subject to all the same expansions and substitutions as any other simple command - requiring proper quoting and escaping - whereas the contents of <span class="code">((</span> aren't subject to word-splitting or pathname expansion (almost never desirable for arithmetic). For this reason, the <a href="syntax-brackets.html#arithmetic">arithmetic compound command</a> should generally be preferred over let. <br>
  <br>
`let' is a bash builtin command.</p>
<p class="quote"><i>"Arithmetic is being able to count up to twenty without 
  taking off your shoes" ~ Mickey 
Mouse</i></p>
<p><b>Related:</b><br>
<br>
<a href="expr.html">expr</a> - Evaluate expressions <a href="eval.html"><br>
eval</a> - Evaluate several commands/arguments<br>
<a href="test.html">test</a> - Evaluate a conditional expression </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="let.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

