---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Replace</h1> 
<p>Find and replace text in a string.</p>
<pre>Syntax
       Replace(<i>String</i>, <i>StringToFind</i>, <i>ReplaceString
</i>          [,<i>Start</i> [,<i>Count </i>[, <i>Compare</i>]]])

Key
   <i>String</i>         The initial string of Text
   <i>StringToFind</i>   The text we want to find in <i>String</i>
   <i>ReplaceString</i>  The string that will replace <i>StringToFind</i> if a match is found
   <i>Start</i>          Character position in <i>string </i>at which to start the search
   <i>Count</i>          The number of replacements to perform
   <i>Compare</i>        Either vbBinaryCompare or VBTextCompare</pre>
<p>If <i>ReplaceString</i> ="" then the <i>StringToFind</i> will be deleted from <i>String</i>.</p>
<p>Example</p>
<pre>myString="Hello John"
myString=Replace(myString,"John","world")
WScript<a href="echo.html">.Echo</a> myString</pre>
<p class="quote"><i>“Reputations are made by searching for things that can't be done and doing them” ~ Frank Tyger</i></p>
<p><b>Related:</b></p>
<p><a href="syntax-replace.html">replace.vbs</a> - Script to search and replace text <br>
<a href="instr.html">InStr</a> - Find one string within another<br>
RegExp - Regular expression search object <br>
<a href="strcomp.html">StrComp</a> - Compare two strings<br>
Equivalent in PowerShell: <span class="code">$result = "Hello Cleveland" <b>-replace</b>("Cleveland","world")</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="replace.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

