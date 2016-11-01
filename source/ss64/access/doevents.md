---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>DoEvents</h1>
<p>  Yield execution so  the operating system can process other events.</p>
<pre>Syntax
      DoEvents
</pre>
<p> When using DoEvents make sure the same procedure cannot be executed multiple times before the first call returns; this can cause unpredictable results.</p>
<p>The DoEvents() function can be used in VBA only. </p>
<p><b>Examples</b></p>
<p>Wait during a long loop operation, pausing once every 1000 loops:</p>
<pre>Dim i As Integer
For i = 1 To 15000 ' Start loop.
  If i Mod 1000 = 0 Then ' If loop has repeated 1000 times.
     DoEvents ' Yield to operating system.
  End If
' Other stuff happens here..
Next i</pre>
<p> Wait for 3secs:<br>
</p>
<pre>Dim WAIT As Double
WAIT = Timer

While Timer &lt; WAIT + 3
    DoEvents  'do nothing
Wend </pre>
<p class="quote"><i>“Begin at the beginning, the King said, very gravely, and go on till you come to the end: then stop” ~ Lewis Carroll</i></p>
<p><b>Related:</b></p>
<p><a href="cancelevent.html">.CancelEvent</a> - Cancel an event.<br>
<a href="for.html">For</a> - Loop<br>
<a href="onclick.html">OnClick, OnOpen</a> - Events.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="doevents.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

