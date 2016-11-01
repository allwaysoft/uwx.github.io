---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>Replace</h1>
<p>  Replace a sequence of characters in a string.</p>
<pre>Syntax
      Replace(<i>string</i>, <i>findStr</i>, <i>ReplaceStr</i>, [<i>start</i>, [<i>count</i>, [<i><a href="accompare.html">compare</a></i>]]])

Key
   <i>string</i>     The initial text string.

   <i>findStr</i>    The text string to search for in <i>string</i>.

   <i>ReplaceStr</i> The new string that will replace <i>findStr</i> in <i>string</i>.

   <i>start</i>      The position in <i>string</i> to begin the search.
              default=start (character 1)

   <i>count</i>      The number of occurrences to replace.
              default=replace all occurrences.

   <i>compare</i>    The comparison mode (Binary/Text)</pre>
<p>The Replace() function can be used in VBA or in an <a href="syntax-functions.html">SQL query</a>.</p>
<p> <b>Examples</b></p>
<p><span class="code">Dim strDemo as String <br>
strDemo = Replace("Don Quijote", "Quij", "Quix")<br>
MsgBox StrDemo<br>
</span>Returns: 
<span class="code">Don Quixote</span></p>
<p class="quote"><i>“The shooting of the movie is the truth part and the editing of the movie is the lying part, the deceit part” ~ Paul Hirsch</i></p>
<p><b>Related:</b></p>
<p><a href="instr.html">InStr</a> - Return the position of one string within another.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

