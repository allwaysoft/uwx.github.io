---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>iif - immediate if </h1>
<p>  If-Then-Else function.</p>
<pre>Syntax
      iif (<i>condition</i>, <i>value_if_true</i>, <i>value_if_false</i>)

Key
   <i>condition</i>      The expression to test.
                  For multiple conditions use AND / OR

   <i>value_if_true</i>  The value returned if <i>condition</i> evaluates to TRUE.

   <i>value_if_false</i> The value returned if <i>condition</i> evaluates to FALSE.
</pre>
<p>The iif() function can be used in VBA or in an <a href="syntax-functions.html">SQL query.</a> The value returned can be a text string, a number or a True/False literal value. </p>
<p>An Excel <span class="code">AND()</span> function can be converted to Access like this:</p>
<p><span class="code">=AND(<i>expression1</i>, <i>expression2</i>)<br>
</span>becomes<span class="code"><br> 
iif(<i>expression1</i> AND <i>expression2</i>, True) </span></p>
<p> <b>Examples</b></p>
<p class="code">Dim strLocal as String<br>
Dim strDemo as String</p>
<p class="code"> strLocal = iif ([State] = "TX", "Local", "National")</p>
<p class="code">strDemo = iif ([State] = "TX" OR [State] = "OK" , "Free Delivery ", "")<br> 
MsgBox strDemo<br>
strDemo = iif ([State] = "TX" AND [Price] &gt; 20 , "Free", "Delivery $8 surcharge")</p>
<p class="quote"><i>“The test of a good teacher is not how many questions he can ask his pupils that they will answer readily, but how many questions he inspires them to ask him which he finds it hard to answer” ~ Alice Wellington Rollins</i></p>
<p><b>Related:</b></p>
<p><a href="if.html">If Then Else</a> - If-Then-Else<br>
<a href="case.html">Case</a> - If Then Else<br>
<a href="nz.html">Nz</a> - Detect a NULL value</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="iif.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

