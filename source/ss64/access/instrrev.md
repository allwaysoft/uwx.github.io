---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>InStrRev</h1>
<p> Return the position of one string within another, starting at the end of the string.</p>
<pre>Syntax
      InstrRev ( <i>FullString</i>, <i>PartString</i>, [<i>start</i>], [<i><a href="accompare.html">compare</a></i>] )

Key<i>
   FullString</i>  The String (expression) to be searched.<i>

   PartString</i>  The String (expression) being sought.

   Start       Number (expression) that sets the start position for each search.
               Default=-1 (the last character)

   <i>compare</i>     The comparison mode (Binary/Text)
</pre>
<p>The InStrRev() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.<br>
Note that the syntax for the InstrRev function is not the same as the syntax for the <a href="instr.html">Instr</a> function.</p>
<p>Return values</p>
<pre><b>If                          InStr() returns</b>
String is found             Position at which match is found
FullString is zero-length   0
FullString is shorter than <i>start</i>  0
FullString is Null          Null

PartString is zero-length <i>  start</i>
PartString is Null          Null
PartString is not found     0</pre>
<p><b>Example</b></p>
<p class="code">Dim intDemo as Integer<br>
intDemo = InStr("The Universe is expanding", "U")<br>
MsgBox intDemo</p>
<p class="quote"><i>“One look is worth a thousand words” ~ Fred R. Barnard</i></p>
<p><b>Related:</b></p>
<p><a href="instr.html">Instr</a> - Return the position of one string within another</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="instrrev.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

