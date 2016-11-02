---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>PowerShell Data Types</h1>
<p>The most common DataTypes used in PowerShell are listed below.</p>
<pre> [string]    Fixed-length string of Unicode characters
 [char]      A Unicode 16-bit character
 [byte]      An 8-bit unsigned character

 [int]       32-bit signed integer
 [long]      64-bit signed integer
 [bool]      Boolean True/False value

 [decimal]   A 128-bit decimal value
 [single]    Single-precision 32-bit floating point number
 [double]    Double-precision 64-bit floating point number
 [DateTime]  Date and Time

 [xml]       Xml object
 [array]     An array of values
 [hashtable] Hashtable object</pre>
<p>PowerShell has two built in variables <span class="code">$true</span> and <span class="code">$false</span> for displaying the true and false boolean values. <br>
There is also <span class="code">[void]</span>  casting an expression to the void datatype will effectively discard it (like <a href="out-null.html">out-null</a> or redirecting to <a href="syntax-automatic-variables.html">$null</a>)</p>
<h2>Unicode</h2>
<p>To encode a Unicode character  in a PowerShell string, prefix the unicode with <span class="code">0x</span> and cast it to System.Char:</p>
<p class="code">PS &gt; [char]0x263a<br>
☺</p>
<h2>Casting</h2>
<p>To force a conversion to a specific datatype,  prefix the value or variable with the type in square brackets, this is known as a <i>Cast Operator </i>and forces the chosen datatype: </p>
<p class="code">PS C:\&gt; [int]"0064"<br>
64<br>
<br>
PS C:\&gt; [int]$false<br>
0</p>
<p class="code">PS C:\&gt;  [byte]('0x' + 'FF')<br>
255</p>
<p>Casting is particularly important when reading in data supplied by a user (with <a href="read-host.html">read-host</a>) casting to <span class="code">[string]</span> will return a String even if the user enters <span class="code">123</span></p>
<p>If you cast a fractional value to an integer, PowerShell will <span class="code">Round()</span> the result, to strip off all decimals behind the decimal point, use <a href="syntax-variables.html">Truncate()</a> from the .NET Math library.</p>
<p>Casting a string into <span class="code">[DateTime]</span>will by default accept USA format dates MM/DD/YYYY or <a href="../dates.html">ISO 8601 YYYY-MM-DD</a>. You can override this by using<span class="code"> ::ParseExact</span> to specify the exact format of the date string you are supplying.</p>
<p>  For example to cast a date string "08-12-2012" that’s in UK format:<br>
</p>
<pre><span class="code">PS C:\&gt; [DateTime]::ParseExact("08-12-2012","dd-MM-yyyy",[System.Globalization.CultureInfo]::InvariantCulture) </span>
Saturday, December 08, 2012 00:00:00</pre>
<p>Cast a date string "09-Jun-2012" that’s in UK format and then display it as "yyyy-MM-dd"
</p><pre><span class="code">PS C:\&gt; [DateTime]::ParseExact("09-Jun-2012","dd-MMM-yyyy",[System.Globalization.CultureInfo]::InvariantCulture).ToString("yyyy-MM-dd") 
</span>2012-06-09  </pre>
<h2>Testing DataTypes</h2>
<p>To test the datatype of a value use a <a href="syntax-compare.html">comparison operator</a>:</p>
<pre>PS C:\&gt; 32 -is [int]<br>True

PS C:\&gt; $true -is [bool]<br>True</pre>
<p>In addition to the above, if you are using other <a href="http://mow001.blogspot.com/2005/11/exploring-net-types-classes-and-enums.html">.NET classes</a> then you can use those DataTypes too. </p>
<p class="quote"><i>“Character is what we do when no one's looking” ~ Bill Hybels</i></p>
<p><b>Related:</b></p>
<p> <a href="syntax-variables.html">Variables and Operators</a> - Create, add, subtract, divide.<br>
<a href="syntax-dateformats.html">DateTime formats </a><br>
<a href="get-item.html">Get-Item</a> Variable:<br>
<a href="get-variable.html">Get-Variable</a></p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-datatypes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

