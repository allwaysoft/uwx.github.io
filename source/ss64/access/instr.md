---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>InStr</h1>
<p> Return the position of one string within another, starting by default at the beginning of the string.</p>
<pre>Syntax
      Instr ( [<i>start</i>], <i>FullString</i>, <i>PartString</i>, [<i><a href="accompare.html">compare</a></i>] )

Key
   <i>Start</i>       Number (expression) that sets the start position for each search.
               Default=1
<i>
   FullString</i>  The String (expression) to be searched.<i>

   PartString</i>  The String (expression) being sought.

   <i>compare</i>     The comparison mode (Binary/Text)
</pre>
<p>The InStr() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
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
<p class="code">Dim intDemo as Integer </p>
<p class="code">intDemo = InStr("The Universe is everlasting ", "is")<br>
MsgBox intDemo</p>
<p class="code">intDemo = InStr(4, "The Universe is everlasting", "e")<br>
MsgBox intDemo</p>
<p class="quote"><i>“Believe those who are seeking the truth; doubt those who find it” ~ Andre Gide</i></p>
<p><b>Related:</b></p>
<p><a href="instrrev.html">InstrRev</a> - Return the position of one string within another<br>
<a href="replace.html">Replace</a> - Replace a sequence of characters in a string.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="instr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

