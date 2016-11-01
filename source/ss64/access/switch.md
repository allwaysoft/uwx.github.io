---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Switch</h1>
<p>  Evaluate a list of expressions and return a value corresponding to the first expression that is TRUE.</p>
<pre>Syntax
      Switch ( <i>expr1</i>, <i>value1</i>, <i>expr2</i>, <i>value2</i>, … <i>expr_n</i>, <i>value_n</i> )
Key
   <i>expr1,expr2</i>…    The expressions to evaluate<i>.

   value1,value2 </i>… A list of values</pre>
<p>The switch() function can be used in VBA or in an <a href="syntax-functions.html">SQL query.</a> </p>
<p><b>Examples</b></p>
<p class="code">Dim strDemo as String</p>
<p class="code"> strDemo =     Switch (CountryID = 1, "USA", CountryID = 2, "Canada", CountryID &gt; 2, "other" )</p>
<p class="code">MsgBox strDemo</p>
<p class="quote"><i>“The test of a good teacher is not how many questions he can ask his pupils that they will answer readily, but how many questions he inspires them to ask him which he finds it hard to answer” ~ Alice Wellington Rollins</i></p>
<p><b>Related:</b></p>
<p><a href="if.html">If Then Else</a> - If-Then-Else<br>
<a href="case.html">Case</a> - If Then Else<br>
<a href="nz.html">Nz</a> - Detect a NULL value</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="switch.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

