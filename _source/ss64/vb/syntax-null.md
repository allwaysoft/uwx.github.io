---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>IsBlank function </h1> 
<p>The IsBlank function  below will return <span class="code">True</span> if the variable or value passed to it is Empty or NULL or Zero.<br> 
It will return <span class="code">False</span> if the variable contains any string or a value other than '0'. </p>
<pre>Function IsBlank(Value)
'returns <span class="code">True</span> if Empty or NULL or Zero
If IsEmpty(Value) or IsNull(Value) Then
 IsBlank = True
ElseIf VarType(Value) = vbString Then
 If Value = "" Then
  IsBlank = True
 End If
ElseIf IsObject(Value) Then
 If Value Is Nothing Then
  IsBlank = True
 End If
ElseIf IsNumeric(Value) Then
 If Value = 0 Then
  wscript.echo " Zero value found"
  IsBlank = True
 End If
Else
 IsBlank = False
End If
End Function</pre>
<p>Arguably  the numeric value '0' is as valid a value as any other number. The logic behind flagging this as blank  is that you may have data like a Price or a Surname<span class="code"> = 0</span> which most likely should be treated as being blank.<br>
<br>
All vbscript variables are variants. A Variant is a special kind of data type that can contain different kinds of information, depending on how it is used.</p>
<p><b>Examples using the function above </b></p>
<p>Wscript.echo "testing 0..." <br>
boolReturn =<span class="code"> IsBlank(0) </span><br>
if boolReturn = true then wscript.echo "It's Blank" else wscript.echo "not blank" <br>
<br>
Wscript.echo "testing 123..." <br>
boolReturn = <span class="code">IsBlank(123)</span><br>
if boolReturn = true then wscript.echo "It's Blank" else wscript.echo "not blank"<br>
<br>
Wscript.echo "testing 100-100..." <br>
boolReturn =<span class="code"> IsBlank(100-100) </span><br>
if boolReturn = true then wscript.echo "It's Blank" else wscript.echo "not blank"<br>
<br>
Wscript.echo "testing null..." <br>
boolReturn =<span class="code"> IsBlank(null) </span><br>
if boolReturn = true then wscript.echo "It's Blank" else wscript.echo "not blank"<br>
<br>
Wscript.echo "testing empty string..." <br>
boolReturn = <span class="code">IsBlank("") </span><br>
if boolReturn = true then wscript.echo "It's Blank" else wscript.echo "not blank"<br>
<br>
Wscript.echo "testing string..." <br>
boolReturn = <span class="code">IsBlank("The quick brown fox") </span><br>
if boolReturn = true then wscript.echo "It's Blank" else wscript.echo "not blank"</p>
<p class="quote"><i>“Let him that would move the world, first move himself” - Socrates</i></p>
<p><b>Related:</b></p>
<p> <a href="isnull.html">IsNull</a>  - Is <i>expression</i> NULL?<br> 
<a href="isnumeric.html">IsNumeric</a>  - Is <i>expression</i> a Numeric?<br>
<a href="isempty.html">IsEmpty</a> -  Is <i>expression</i> initialised?<br>
<a href="http://support.microsoft.com/kb/250344">Q250344</a> - Microsoft sample utility  for array conversions</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-null.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
