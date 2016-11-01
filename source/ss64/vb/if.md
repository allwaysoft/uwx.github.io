---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>If ... Then...Else</h1> 
<p>Repeat a block of statements.</p>
<pre>Syntax 
      If <i>condition</i> Then [<i>Statements</i>] [Else <i>Else-Statements</i>]
or
      If <i>condition</i> Then
         [<i>Statements</i>]
      [ElseIf <i>condition-n</i>] Then
         [<i>Statements</i>]
      [Else]
         [<i>Statements</i>]
      End If

Key
   <i>condition </i>  An expression that evaluates to True or False<span class="code"></span>

   <i>Statements</i>  Program code to be executed if <i>condition</i> is True</pre>
<p> Case sensitivity - the VBScript IF statement will always do a Case-Sensitive comparison:<br>
<span class="code">IF "New York" = "new york" THEN</span> ... will evaluate as false.</p>
<p>To make a comparison Case-insensitive, you can use either the <a href="ucase.html">UCase()</a> or <a href="lcase.html">LCase()</a> functions:<br>
<span class="code">IF UCase("New York") = UCase("new york") THEN</span> ...</p>
<p><b>Examples</b></p>
<pre>hournow = hour(Time())
If hournow &gt; 12 Then WScript<a href="echo.html">.Echo</a> "Good Afternoon"


Dim strCountry
strCountry = "USA"

If strCountry = "USA" Then
   WScript.Echo "United States of America."
ElseIf strCountry = "CA" Then
   WScript.Echo "Canada."
Else
   WScript.Echo "Some other country."
End If</pre>
<p class="quote"><i>“You have to learn the rules of the game. And then you have to play better than anyone else” ~ Albert Einstein</i></p>
<p><b>Related:</b></p>
<p><a href="select.html">Select...Case</a> - Conditional execution of a block of code<br>
<a href="do.html">Do..Loop</a> - Repeat a block of statements<br>
<a href="while.html">While...Wend</a> - Conditionally repeat a block of statements<br>
Equivalent in PowerShell: <a href="../ps/if.html">If</a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="if.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

