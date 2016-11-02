---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Eval</h1>
<p> Evaluate an expression.</p>
<pre>Syntax
      Eval (<i>StringExpr</i>)

Key
   <i>StringExpr</i>  Any expression that returns a string or a number.</pre>
<p>The argument <i>stringexpr</i> must be an expression that is stored in a string. If you pass to the Eval function a string that doesn't contain a numeric expression or a function name but only a simple text string, a run-time error occurs. For example, Eval("Smith") results in an error.</p>
<p><b>Examples</b></p>
<p><span class="code">Eval("1 + 1")</span> returns 2.<span class="code"><br>
Eval("1=2") </span>returns False (-1)<br>
<span class="code">Eval("5 * 10") </span>returns 50 </p>
<p><span class="code">strResult = Eval("MY_Function()")<br>
MsgBox strResult </span>'displays the result of the function<span class="code"><br>
<br>
Dim strName As String<br>
strName = "Forms!frmPatients!txtPatientsName"<br>
MsgBox Eval(strName)<br>
</span>' Returns the patients name, <br>
' i.e. the same as Msgbox Me!txtPatientsName
<br>In general, if there is a more direct way of evaluating an expression without using Eval() you should use it. </p>
<p class="quote"><i>“More people are killed every year by pigs than by sharks, which shows you how good we are at evaluating risk” ~ Bruce Schneier</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-references.html">Access Form References</a> - Evaluating references to controls on forms and subforms.<br>
<a href="nz.html">Nz</a> - Detect a NULL value or Zero Length string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

