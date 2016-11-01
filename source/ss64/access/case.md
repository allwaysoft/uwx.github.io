---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Case</h1>
<p>  If-Then-Else, VBA statement. </p>
<pre>Syntax
      Select Case <i>test_expression</i>
         Case <i>condition_1
           result_1</i>
         Case <i>condition_2
           result_2</i>
         ...
         Case <i>condition_n
           result_n</i>
       [ Case Else
           <i>result_else</i> ]
      End Select
Key
   <i>test_expression</i>  An expression returning a string or numeric value. 
                    This value will be compared to the list of conditions.

   <i>condition_n</i>      Conditions are evaluated in the order listed.
                    Once a condition is found to be true, the corresponding code
                    will be executed and no further conditions will be evaluated.

   <i>result_n</i>         The code to be executed when a condition is met.</pre>
<p>Comparison operators: Less than <span class="code">&lt;</span>, Less than or equal to <span class="code">&lt;=</span>, Greater than <span class="code">&gt;</span>, Greater than or equal to <span class="code">&gt;=</span>, Not equal <span class="code">&lt;&gt;</span>,  Equal <span class="code">=<br>
</span>Range comparison can also be done: <span class="code">1 To 10</span> or <span class="code">500 To 600</span><br>
or the comparison can be a comma separated list of items: <span class="code">2,4,6,8,10</span> or <span class="code">"Jan", "Feb", "Mar"</span></p>
<p><b>Example</b></p>
<pre>Dim intVoltage as Integer
Dim strDescription as String

intVoltage = Me.txtVoltage

Select Case intVoltage
   Case 110
      strDescription = "Domestic"
   Case 220,240
      strDescription = "European"
   Case 600
      strDescription = "Industrial"
   Case Else
      strDescription = "Unknown"
End Select

MsgBox strDescription</pre>
<p class="quote"><i>“You see things; and you say 'Why?' But I dream things that never were; and I say 'why not?'” ~ George Bernard Shaw</i></p>
<p><b>Related:</b></p>
<p><a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.<br>
<a href="if.html">If-Then-Else
</a></p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="case.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

