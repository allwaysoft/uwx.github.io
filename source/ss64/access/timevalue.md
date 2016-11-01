---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_access.lbi" --><!-- #EndLibraryItem --><h1>TimeValue</h1>
<p>  Convert a string to a Time.</p>
<pre>Syntax
      TimeValue ( <i>String</i> )

Key
   <i>String</i>   A string representation of a time
            (0:00:00 to 23:59:59).</pre>
<p>The hour/minute/seconds  can be numeric expressions. </p>
<p>The TimeValue() function can be used in VBA or in an <a href="syntax-functions.html">SQL query.</a> </p>
<p><b>Example</b></p>
<p><span class="code">Dim dtmSaved<br>
dtmSaved = TimeValue ("13:30:45")<br>
</span>or
<span class="code"><br>
dtmSaved = TimeValue ("1:30:45 PM")</span></p>
<p class="quote"><i>“The hours of folly are measured by the clock, but of wisdom no clock can measure” ~ William Blake</i></p>
<p><b>Related:</b></p>
<p><a href="now.html">Now</a> - Return the current date and time.<br>
<a href="date.html">Date</a> - Return the current date.<br>
<a href="timeserial.html">TimeSerial</a> - Return a time given an hour, minute, and second.</p><!-- #BeginLibraryItem "/Library/foot_access.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- access -->

<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

