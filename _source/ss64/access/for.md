---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>For</h1>
<p>  Loop - repeat a block of statements a specific number of times. </p>
<pre>Syntax
      For <i>CounterVariable</i> = <i>StartNum</i> To <i>EndNum</i> [STEP <i>StepNum</i>]

      Next [<i>CounterVariable</i>]
</pre>
<p>If not specified the default step is 1.<br>
To decrease the counter variable use a negative STEP value. <br>
To exit a For...Next statement before the counter reaches its end value use the EXIT FOR statement.
</p>
<p><b>Example</b></p>
<pre>For x = 1 to 100
  Total = Total + x
Next

MsgBox "The total is " &amp; Total</pre>
<p class="quote"><i>“Winning takes talent; to repeat takes character.” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p> <a href="if.html">If Then Else</a> - If-Then-Else<br>
<a href="case.html">Case</a> - If Then Else</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

