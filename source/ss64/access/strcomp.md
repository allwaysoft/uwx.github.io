---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>StrComp</h1>
<p> Compare two strings for equality. </p>
<pre>Syntax
      StrComp(<i>String1</i>, <i>String2</i> [,<i>compare</i>])

Key
   <i>String1</i>    A string <a href="stringexpression.html">expression</a>.

   <i>String2</i>    A string <a href="stringexpression.html">expression</a>.

   <i>compare  </i>  The type of comparison.
               0 (default) = Binary compare
               1 = Text compare
               2 = Access compare
</pre>
<p>A Binary comparison compares the numeric Unicode value of each character in the string. A Text comparison compares each Unicode character based on its lexical meaning in the current culture. Different languages might have a different alphabetical order.</p>
<p>Result returned:</p>
<table border="1" cellpadding="4" cellspacing="0">
<tbody>
<tr>
<td width="200">String1 &lt; String2 </td>
<td width="27">-1</td>
</tr>
<tr>
<td>String1 = String2</td>
<td>0</td>
</tr>
<tr>
<td>String1 &gt; String2</td>
<td>1</td>
</tr>
<tr>
<td>String1 or String2 = NULL </td>
<td>NULL</td>
</tr>
</tbody></table>
<p>The StrComp() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p><b>Examples</b></p>
<p><span class="code">Dim intDemo as Integer <br>
intDemo = StrComp("universe", "apple")<br>
MsgBox 
intDemo<br>
</span>'Returns:<span class="code"> 1<br>
intDemo = StrComp("universe", "universe")<br>

</span>'Returns:<span class="code"> 0 </span></p>
<p class="quote"><i>“To compare is not to prove” ~ French Proverb</i></p>
<p><b>Related:</b></p>
<p><a href="iif.html">IIf</a> - If-Then-Else function</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="strcomp.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

