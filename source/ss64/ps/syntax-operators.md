---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Operators <span class="code">$( ) @( ) :: &amp;</span> </h1> 
<h2><span class="code">( ) </span>Grouping Expression operator.</h2>
<blockquote>
<p>Parenthesis/Brackets work just as they do in mathematics, each pair will determine the order of evaluation and return the result of the expression within.<br>
<span class="code">PS C:\&gt; (2 + 3) * 5</span></p>
<p>A shortcut syntax is available <span class="code">(…).<i>property</i></span> that returns a single property from  an item or a collection (PowerShell V3.0):<br>
<span class="code">PS C:\&gt; (dir).FullName</span><br> 
To return multiple properties, pipe  to ForEach-Object (%) or Select-Object</p>
</blockquote>
<h2><span class="code">$( ) </span>SubExpression operator.</h2>
<blockquote>
<p>Use a subexpression to return specific <a href="get-member.html">properties</a> of an object.<br>
Unlike simple parenthesis, a subexpression can contain multiple ; semicolon ; separated ; statements. <br>
<br>
 The output of each statement contributes to the output of the subexpression. For a 
single result, it will return a scalar. For multiple results, it will return an 
array.<br>
Subexpressions allow you to evaluate and act on the results of an expression in a single line; with no need for an intermediate variable:

</p>
<p class="code">if(<b>$(</b><i>code that returns a value/object</i><b>)</b> -eq "<i>somevalue</i>") { <i>do_something</i> } </p>
<p><span class="code">PS C:\&gt; $city="Copenhagen"<br>
PS C:\&gt; $strLength = "<b>$(</b>$city.length<b>)</b>"</span> #n.b. not "<span class="code">$city.length</span>" that would  return "Copenhagen.Length"<br>
<br>
<span class="code">PS C:\&gt; "The result of 2 + 3 = <b>$(</b>2+3<b>)</b>"<br>
PS C:\&gt; <b>$(</b>Get-WMIObject win32_Directory<b>)</b></span><br>
</p>
</blockquote>
<h2> <span class="code">@( ) </span>Array SubExpression operator.</h2>
<blockquote>
<p>An <a href="syntax-arrays.html">array</a> subexpression behaves just like a subexpression except that it guarantees that the output will be an array.<br>
This works even if there is no output at all (gives an empy array.)<br>
If 
the result is a scalar value then the result will be a single element array containg the scalar value.<br>
(If the output is already an array then the use of an array subexpression will  have no effect, it won't wrap one array inside of another array.)<br>
<span class="code">PS C:\&gt; <b>@(</b>Get-WMIObject win32_logicalDisk<b>)</b></span><br>
<br>
</p>
</blockquote>
<p>Using either <span class="code">$( )</span> or <span class="code">@( )</span>will cause the powershell parser to re-evaluate the <a href="http://rkeithhill.wordpress.com/2007/11/24/effective-powershell-item-10-understanding-powershell-parsing-modes/">parsing mode</a> based on the first non-whitespace character inside the parenthesis. A neat effect of this is that object properties will be evaluated instead of being treated as literal strings:</p>
<p><span class="code">"$user.department"</span> ==&gt; JDOE<span class="code">.department </span><br>
<span class="code">"$($user.department)"</span> ==&gt; "Human Resources"</p>
<h2><span class="code"><a id="static"></a>:: </span>Static member operator</h2>
<blockquote>
<p>Call the static properties operator and methods of a .NET
Framework class.<br>
 To find the static properties and methods of an 
object, use the <span class="code">-Static</span> parameter of <a href="get-member.html">Get-Member</a>:</p>
<p class="code">[datetime] | gm -static<br>
[datetime]::now<br>
[datetime]::Utcnow</p>
</blockquote>
<h2><span class="code"><a id="comma"></a>, </span>Comma operator</h2>
<blockquote>
<p>As a binary operator, the comma creates an <a href="syntax-arrays.html">array</a>. <br>
As a unary operator, the comma creates an array with one member. Place the comma before the member.</p>
</blockquote>
<h2><span class="code"><a id="call"></a>&amp; </span><a href="call.html">Call operator</a></h2>
<blockquote>
<p>Run a command, script, or script block. The call operator, also known as
the "invocation operator," lets you run commands that are stored in
variables and represented by strings. Because the call operator does not
parse the command, it cannot interpret command parameters. </p>
<p class="code"> C:\PS&gt; $c = "get-executionpolicy"<br>
C:\PS&gt; $c<br>
get-executionpolicy<br>

C:\PS&gt; &amp; $c<br>
AllSigned</p>
</blockquote>
<h2><span class="code"><a id="dot"></a>. </span><a href="source.html">Dot sourcing</a> operator</h2>
<blockquote>
<p>Run a script in the current scope so that any functions,
aliases, and variables that the script creates are added to the current
scope. (without dot sourcing, the variables created within a script will all disappear when the script finishes.)</p>
<p> <span class="code">. C:\sample1.ps1<br>
. .\sample2.ps1</span></p>
<p> Note: The dot sourcing operator is followed by a space. Use the space to
distinguish the dot from the dot (.) symbol that represents the 
current directory.</p>
</blockquote>
<h2> <span class="code"><a id="format"></a>-f </span><a href="syntax-f-operator.html">Format operator</a></h2>
<blockquote>
<p>Format a string expression.</p>
<p>Place <span class="code">{0} {1}</span> etc. into the string as placemarkers where you want the variables to appear, <span class="code"></span>immediately follow the string with the<span class="code"> -f </span>operator and then lastly, the list of comma separated variables which will be used to populate the placemarkers.</p>
<p class="code"> Get-ChildItem c:\ | ForEach-Object {'File {0} Created {1}' <b>-f</b> $_.fullname,$_.creationtime}</p>
<p> Optional format string(s) can be included to add padding/alignment and display dates/times/percentages/hex etc correctly, see the <a href="syntax-f-operator.html">-f format</a> page for full details.</p>
</blockquote>
<h2> <span class="code"><a id="range"></a>..</span>Range operator</h2>
<blockquote>
<p>Produce a sequence of numbers:</p>
<p class="code">10..20<br>
5..25</p>
</blockquote>
<p class="quote"><i>“No need to ask. He's a smooth operator, smooth operator, smooth operator..” ~ Sade</i></p>
<p><b>Related:</b></p>
<p><b></b><a href="syntax-variables.html">Variables</a> - PowerShell Variables and basic Mathematical operators (+ - = /)<br>
<a href="syntax-pipeline.html">Pipelines</a> - Pass objects down the pipeline</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-operators.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

