---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>Do ... Loop, Do While..., Do Until... </h1> 
<p>Repeat a block of statements.</p>
<pre>Syntax 
      Do [While <i>condition</i>]
          [<i>Statements</i>]
      [<a href="exit.html">Exit</a> Do]
          [<i>Statements</i>]
      Loop
or:
      Do [Until <i>condition</i>]
          [<i>Statements</i>]
      [<a href="exit.html">Exit</a> Do]
          [<i>Statements</i>]
      Loop
or:
      Do 
          [<i>Statements</i>]
      [<a href="exit.html">Exit</a> Do]
          [<i>Statements</i>]
      Loop [While <i>condition</i>]
or:
      Do 
          [<i>Statements</i>]
      [<a href="exit.html">Exit</a> Do]
          [<i>Statements</i>]
      Loop [Until <i>condition</i>]
Key
   <i>condition </i>  A boolean expression that evaluates to True or False<span class="code"></span>

  <i>Statements</i>   VBScript statements to be repeated until <i>condition</i> is True</pre>
<p>The keyword <span class="code">While</span> will continue the loop as long as <i>condition</i> is True.<br>
The keyword <span class="code">Until</span> will continue the loop as long as <i>condition</i> is False. <br>
If no <span class="code">condition</span> is specified, the loop will repeat indefinitely or until an <span class="code">Exit Do </span>is encountered.</p>
<p>Examples</p>
<pre>'Count to 50
Option Explicit
Dim counter
counter = 0

<b>Do</b>
  counter = counter + 1
  WScript<a href="echo.html">.Echo</a> counter
<b>Loop Until</b> counter = 50

WScript<a href="echo.html">.Echo</a> "Final total" &amp; counter


' Count to 100
Option Explicit
Dim i
i = 0

<b>Do While</b> i &lt; 100
  i = i + 1
  WScript<a href="echo.html">.Echo</a> i
<b>Loop</b>

WScript<a href="echo.html">.Echo</a> "Final total" &amp; i
</pre>
<p class="quote"><i>“Profit in business comes from repeat customers, customers that boast about your project or service, and that bring friends with them” ~ W. Edwards Deming</i></p>
<p><b>Related:</b></p>
<p>  <a href="for.html">For...Next</a> - Repeat a block of statements a given number of times<br>
<a href="foreach.html">For Each...</a> - Loop through the items in a collection or array<br>
<a href="if.html">If..Then</a> - Conditionally execute a block of statements<br>
Equivalent  PowerShell cmdlet: <a href="../ps/do.html">Do ... While </a> </p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

