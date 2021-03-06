---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>If</h1>
<p>  If-Then-Else, VBA statement. </p>
<pre>Syntax
      If <i>condition_1</i> Then
         <i>result_1</i>
    [ ElseIf <i>condition_2</i> Then<i>
           result_2</i> ]
      ...
    [ ElseIf <i>condition_n</i> Then<i>
           result_n</i> ]
      End If

Key
   <i>condition_n</i>      Conditions are evaluated in the order listed.
                    Once a condition is found to be true, the corresponding code
                    will be executed and no further conditions will be evaluated.

   <i>result_n</i>         The code to be executed when a condition is met.</pre>
<p>Comparison operators: </p>
<blockquote>
<p> Less than <span class="code">&lt;</span>, Less than or equal to <span class="code">&lt;=</span><br>
Greater than <span class="code">&gt;</span>, Greater than or equal to <span class="code">&gt;=</span><br>
Not equal <span class="code">&lt;&gt;</span>,  Equal <span class="code">=</span></p>
</blockquote>
<p>By default comparisons are case sensitive, to make them case insensitive, use <a href="ucase.html">UCase()</a> or <a href="lcase.html">LCase()</a><br>
<span class="code">If ucase(string1) = ucase(string2) then... </span></p>
<p><b>Example</b></p>
<pre>Dim intVoltage as Integer
Dim strDescription as String

intVoltage = Me!txtVoltage

 If intVoltage = 110 Then
   strDescription = "Domestic"
 ElseIF intVoltage &gt; 200
   strDescription = "European"
 Else
   strDescription = "Unknown"
 End If

MsgBox strDescription</pre>
<p class="quote"><i>“You see things; and you say 'Why?' But I dream things that never were; and I say 'why not?'” ~ George Bernard Shaw</i></p>
<p><b>Related:</b></p>
<p><a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.<br>
<a href="iif.html">IIf</a> - If-Then-Else function (SQL) <br>
<a href="case.html">Case</a> - If Then Else<br>
<a href="for.html">For</a> - Loop.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="if.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

