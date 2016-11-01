---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Select ... Case </h1> 
<p>Conditionally execute a block of statements.</p>
<pre>Syntax 
      Select Case <i>TestExpression</i>
         [Case <i>ExpressionList</i>
            [<i>Statements-n</i>]]...
         [Case Else
            [<i>ElseStatements</i>]]
      End Select

Key
   <i>TestExpression</i>  A numeric or String expression which will
                   determine which block of code is executed<span class="code"></span>

   <i>ExpressionList</i>  Comma delimited list of expressions to compare/
                   match against <i>TestExpression</i>

   <i>Statements-n</i>    Statements to execute if a match is found.

   <i>ElseStatements</i>  Statements to execute if a match is not found.</pre>
<p>Example</p>
<pre>strPerson="Jasper"

select case strPerson<br>   case "Alex"
      WScript<a href="echo.html">.Echo</a> "We found Alex"<br>   case "Jasper"
      WScript<a href="echo.html">.Echo</a> "We found Jasper"<br>   case "Helen"
      WScript<a href="echo.html">.Echo</a> "We found Helen"<br>end select </pre>
<p><span class="quote"><i>“The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership” ~ Colin Powell</i></span></p>
<p><b>Related:</b></p>
<p><a href="if.html">If..Then</a> - Conditionally execute a block of statements<br>
<a href="while.html">While...Wend</a> - Conditionally repeat a block of statements<br>
Equivalent in PowerShell: <a href="../ps/switch.html">Switch</a>                     - Multiple if statements</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="select.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

