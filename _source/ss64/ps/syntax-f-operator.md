---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1> <span class="code">-f </span>Format operator</h1> 
<p>Format a string expression.</p>
<pre>Syntax:
       "String with placeholders" <b>-f</b> "Array of values to place into the placeholders"

<span class="code">       'Filename: <b>{0}</b> Created: <b>{1}</b>' <b>-f</b> $_.fullname,$_.creationtime</span>

       "{<i>I,A:FS</i>} {<i>I,A:FS</i>} {<i>I,A:FS</i>}.." <b>-f</b> "string0", "string1", "string2"...</pre>
<blockquote>
<blockquote>
<p>Place <span class="code">{0} {1}</span> etc. into the string as placemarkers where you want the variables to appear, <span class="code"></span>immediately follow the string with the<span class="code"> -f </span>operator and then lastly, a list of comma separated variables which will be used to populate the placemarkers.</p>
</blockquote>
</blockquote>
<pre>Key:
<i>   I </i>  Index of the item to display, 0,1,2 etc.</pre>
<pre><i>   A</i>   Alignment. 
       A positive number will <b>right</b> align <i>n </i>characters. 
       A negative number will <b>left</b> align <i>n </i>characters. 
        so {2,-25} will allocate 25 characters of horizontal space on the line, even if the string is only 1 character long. </pre>
<pre><i>   FS</i>  An optional format string that acts on the item depending on its type (not case sensitive).

       Valid format strings:</pre>
<blockquote><blockquote>
<table class="tab1">
<tbody><tr>
<td>:c </td>
<td>Currency format </td>
</tr>
<tr>
<td>:e</td>
<td>Scientific (exp) notation </td>
</tr>
<tr>
<td>:f</td>
<td>Fixed point<br>
:f5 = fix to 5 places </td>
</tr>
<tr>
<td>:g</td>
<td>Most compact format, fixed or sci<br>
:g5 = 5 significant digits </td>
</tr>
<tr>
<td>:n</td>
<td>Number (:n<i>P</i> precision=number of decimal places), includes culture separator for thousands 1,000.00 </td>
</tr>
<tr>
<td>:p</td>
<td>percentage</td>
</tr>
<tr>
<td>:r</td>
<td>reversible precision </td>
</tr>
<tr>
<td>:x</td>
<td>Hex format </td>
</tr>
<tr>
<td>:hh<br>
:mm<br>
:ss</td>
<td>Convert a DateTime to a 2 digit Hour/minute/second<br>
"{0:hh}:{0:mm}"</td>
</tr>
<tr>
<td>:ddd</td>
<td>Convert a DateTime to Day of the Week </td>
</tr>
</tbody></table>
<p><a href="syntax-dateformats.html">A full list of Date Formats</a> <br> 
</p>
<p>The format string can be surrounded by either single or double quotes. <br>
Static text may be included before or in-between the -f {format strings.} </p>
</blockquote></blockquote>
<p><b>Examples: </b></p>
<p>Convert a number to Hex:<br>
<span class="code"> PS C:\&gt; "{1,10} {0,10} {2,10:x}" <b>-f</b> "First", "Second", 255<br>
&nbsp;&nbsp;&nbsp;&nbsp;Second&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FF<br>
</span></p>
<pre><span class="body">Display filenames and creation time</span>:<br><span class="code">PS C:\&gt; Get-ChildItem c:\docs | ForEach-Object <b>{</b>'Filename: <b>{0}</b> Created: <b>{1}</b>' <b>-f</b> $_.fullname,$_.creationtime<b>}</b></span></pre>
<p>Display the hours and minutes from a date time value:<span class="code"><br>
PS C:\&gt; "{0:hh}:{0:mm}" <b>-f</b> (Get-Date)<br>
17:52</span></p>
<pre><span class="body">Left and right align text:</span>
<span class="code">PS C:\&gt; "|{0,-10}| |{1,10}|" <b>-f</b> "hello", "world"</span>
<span class="code">|hello     ||     world</span>|
</pre>
<p>Reverse the order of display:<br>
<span class="code"> PS C:\&gt; "{2} {1,-10} {0:n3}" <b>-f</b> [math]::pi, "world", "hello"<br>
hello world 3.142</span></p>
<p class="quote"><i>“I skate to where the puck is going to be, not where it has been” ~ Wayne Gretsky</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-operators.html">PowerShell Operators</a> - Format strings and arrays<br>
<a href="syntax-variables.html">Variables</a> - PowerShell Variables and basic Mathematical operators (+ - = /)<br>
<a href="syntax-pipeline.html">Pipelines</a> - Pass objects down the pipeline<br>
</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
