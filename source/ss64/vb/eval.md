---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Eval</h1> 
<p> Evaluate an expression.</p>
<pre>Syntax
      Eval (<i>StringExpr</i>)

Key
   <i>StringExpr</i>  Any expression that returns a string or a number.</pre>
<p>The argument <i>stringexpr</i> must be an expression that is stored in a string. If you pass to the Eval function a string that doesn't contain a numeric expression or a function name but only a simple text string, a run-time error occurs. For example, Eval("Smith") results in an error.</p>
<p>Examples</p>
<p><span class="code">Eval("1 + 1")</span> returns 2.<span class="code"><br>
Eval("1=2") </span>returns False (-1)<br>
<span class="code">Eval("5 * 10") </span>returns 50 </p>
<p><span class="code">strResult = Eval("MY_Function()")<br>
MsgBox strResult </span>'displays the result of the function</p>
<p class="quote"><i>“More people are killed every year by pigs than by sharks, which shows you how good we are at evaluating risk” ~ Bruce Schneier</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-null.html">Syntax - IsBlank function</a> to detect Empty or NULL or Zero.</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="eval.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

