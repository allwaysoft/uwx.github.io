---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Dim</h1> 
<p>Explicitly declare a new variable or array variable.</p>
<pre>Syntax 
       Dim <i>Varname</i>[([<i>subscript</i>])] [,<i>Varname</i>[([<i>subscript</i>])] ...]

Key
   Varname     Name for the new variable
   subscript   Number of elements in an array variable</pre>
<p>Dim statements are not required unless the VBScript contains an <i>Option Explicit </i>statement.</p>
<p>Unlike many other languages there is no need to specify a data type (integer, string, object etc) All VBScript variables are variants. Most experienced scripters will choose variable names that indicate the data type to be stored e.g. strEmployee. </p>
<p>Examples</p>
<pre>Option explicit

Dim myString, price
myString="Hello world"
price=123</pre>
<p>Create an Array Variable with 3 elements: </p>
<pre>Dim strPrintQueues(2)
strPrintQueues(0)="HP Deskjet 1200"
strPrintQueues(1)="Kyocera first floor"
strPrintQueues(2)="Mikes printer"
</pre>
<p><i class="quote">“Listen to many, speak to a few” ~ William Shakespeare</i><br>
<b><br>
Related:</b></p>
<p>  <a href="array.html">Array</a> - Add values to an Array variable<br>
Private <i>VarName</i> - Declare a local variable/array variable <br>
Public <i>VarName</i> - Declare a public variable/array variable<br>
Equivalent  PowerShell cmdlet: <a href="../ps/syntax-variables.html">$MyVariable = SomeValue</a></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

