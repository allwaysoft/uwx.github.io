---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Variables and Operators (add, subtract, divide...) </h1>
<p>In PowerShell, all variable names  start with the “$” character. <br>
Creating a new variable can be done in several ways: </p>
<p class="code">$<i>MyVariable</i> = SomeValue<br>
$<i>MyVariable</i> = <i>"Some String Value</i>"<br>
[<a href="syntax-datatypes.html">DataType</a>]$<i>MyVariable</i> = <i>SomeValue</i><br>
<a href="new-item.html">New-Item</a> Variable:\<i>MyVariable</i> -value <i>SomeValue</i><br>
<a href="new-variable.html">New-Variable</a>:\<i>MyVariable</i> -value <i>SomeValue</i></p>
<p>Multiple variables can be initialised in a single line, this will create var1 and var2:</p>
<p class="code">$var2=($var1=1)+1</p>
<p>Variable names containing punctuation, can be handled with the  syntax <span class="code">${<i>MyVari@ble</i>} = <i>SomeValue<br>
</i></span>However if  the braces <span class="code">${&nbsp;}</span> contain a colon <span class="code">":"</span> then PowerShell will treat the variable as a PATH and store the values directly in that file.<br>
<span class="code">${<i>C:\some_file.txt</i>} = <i>SomeValue</i></span></p>
<p>Operators allow you to assign a value to the variable, or perform mathematical operations:</p>
<pre>  <i>Operator</i>   Description

     = <i>n</i>     Equals <i>n</i>
    += <i>n</i>     Increase value by <i>n</i> (for strings will append <i>n</i> to the string)
    -= <i>n</i>     Decrease the value by <i>n</i>
    *= <i>n</i>     Multiply the value by <i>n</i> (for strings, duplicate the string <i>n</i> times)
    /= <i>n</i>     Divide the value by <i>n</i>
    %= <i>n</i>     Divide the value by <i>n</i> and assign the remainder (modulus)

  Arithmetic operators:

    + Add, - Subtract, * Multiply, / Divide, % Mod(Remainder from a division)

 .NET Math library:

 [Math]::Abs(<i>n</i>)
 [Math]::Equals(<i>objA,ObjB</i>)
 [Math]::Exp(<i>double</i>)
 [Math]::Ceiling(<i>n</i>)
 [Math]::Floor(<i>n</i>)
 [Math]::Max(<i>m,n</i>)
 [Math]::Min(<i>m,n</i>)
 [Math]::Round(<i>n</i>)
 [Math]::Truncate(<i>n</i>)

 [system.math] | gm -static</pre>
<p>PowerShell will follow  normal arithmetic <a href="http://en.wikipedia.org/wiki/Order_of_operations">precedence</a> working left to right, <a href="syntax-operators.html">parentheses</a> can be used override this.</p>
<p>Examples</p>
<p><span class="code">$myPrice = 128<br>
$myPrice += 200<br>

$myItem = "Barbecue grill"<br>
$myDescription = $myItem + " $ " + $myPrice<br>
<br>
$CastAsString = "55"<br>
$myHexValue = 0x10<br>
$myExponentialValue = 6.5e3<br>
</span></p>
<h2>Strongly typed</h2>
<blockquote>Forcing the correct <a href="syntax-datatypes.html">Data Type</a>
can prevent/trap errors in later calculations.
<p><span class="code"> [int]$myPrice = 128<br>
[string]$myDescription = "Barbecue grill"<br>
[string]$myDescription = 123<br>
[string]$myDate = (get-date).ToString("yyyyMM")<br>
$([DateTime] "12/30/2009")<br>
</span><span class="code">$([DateTime]::Now)<br>
[datetime]$start_date=[datetime]::now.date.addDays(-5) </span></p>
<p>When creating strongly typed variables it can be helpful to indicate the datatype in the variable name:  $strProduct or $intPrice</p>
</blockquote>
<h2> Validation</h2>
<blockquote>
<p>In PowerShell V3.0, you can specify a range of valid attributes for any variable:</p>
<pre>PS C:\&gt; [ValidateRange(1,10)] [int]$x = 1 
PS C:\&gt;  $x = 11
The variable cannot be validated because the value 11 is not a valid value for the x variable.
At line:1 char:1 + $x = 11 </pre>
</blockquote>
<h2><a href="syntax-arrays.html">Array</a> variables: </h2>
<blockquote>
<p class="code">$myArray = "The", "world", "is", "everlasting"</p>
<p> PowerShell can also assign values to multiple variables:</p>
<p class="code">$varX, $varY = 64 <br>
$varA, $varB, $varC = 1, 2, 3</p>
<p>That will assign 1 to $varA, 2 to $varB, and 3 to $varC.</p>
</blockquote>
<h2>Script blocks<a id="scriptblocks"></a></h2>
<blockquote>
<p>An entire <a href="syntax-scriptblock.html">script block</a> can be stored in a variable: <span class="code">$myVar = { <i>a bunch of commands</i> } </span><br>
Then <a href="syntax-run.html">run/call the script using &amp;</a><br>
<span class="code">PS C:\&gt; &amp; $myVar</span><br>
<br>
You can take this one step further and  turn the script block into a <a href="syntax-functions.html">Function or Filter</a>.</p>
</blockquote>
<h2>Concatenating strings (appending text)</h2>
<blockquote>
<p>The <span class="code">+=</span> operator can be used to add one string to another</p>
<p class="code">$text = "Hello"<br>
$text += "world"<br>
$text</p>
<p>An alternative concatenation method is to use a <a href="http://msdn.microsoft.com/en-us/library/system.text.stringbuilder%28v=vs.110%29.aspx">StringBuilder</a> .Net object, this has the advantage of being much faster which may be important when working with long strings or repeatedly in a loop.</p>
<p class="code">$stringbuilder = New-Object -TypeName System.Text.StringBuilder<br>
$null = $stringbuilder.Append("Hello")<br>
$null = $stringbuilder.Append("World")<br>
$stringbuilder.ToString()</p>
</blockquote>
<h2>Reserved Words</h2>
<blockquote>
<p>The following may not be used as variable identifiers (unless surrounded in quotes) <br>
<span class="code">break, continue, do, else, elseif, for, foreach, function, filter, in, if, return, switch, until, where, while.</span></p>
</blockquote>
<p class="quote"><i>“Most variables can show either an upward trend or a downward trend, depending on the base year chosen” ~ Thomas Sowell</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-automatic-variables.html">Automatic variables</a> -  Variables  created and maintained by  PowerShell $_, $Args, $Error, $Home etc<br>
<a href="syntax-env.html">Environment variables</a> - Windows environment variables  <span class="code">Env:</span><br>
<a href="syntax-ref.html">Reference variables</a> - Change the value of a passed variable<br>
<a href="syntax-operators.html">PowerShell Operators </a>- More advanced Operators for Arrays and formatting expressions.<br>
  <a href="set-psbreakpoint.html">Set-PSBreakpoint</a> - Set a breakpoint on a line, command, or variable<br>
  <a href="get-item.html">Get-Item</a> <span class="code">Variable:</span><br>
  <a href="clear-variable.html">Clear-Variable</a> - Remove the value from a variable<br>
  <a href="get-variable.html">Get-Variable</a> - Get a PowerShell variable<br>
  <a href="new-variable.html">New-Variable</a> - Create a new variable<br>
  <a href="remove-variable.html">Remove-Variable</a> - Remove a variable and its value<br>
<a href="set-variable.html">Set-Variable</a> - Set a variable and a value</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

