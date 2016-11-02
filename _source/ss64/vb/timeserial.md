---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vb.lbi" --><!-- #EndLibraryItem --><h1>TimeSerial</h1> 
<p>Construct a Time value from Hours, Minutes and seconds.</p>
<pre>Syntax 
      TimeSerial(<i>Hour, Minute </i>,<i>Second</i>)

Key
   <i>Hour</i>     A numeric hour (0-23)

   <i>Minute</i>   A numeric minute (0-59)

   <i>Second</i>   A numeric second (0-59)</pre>
<p>Example</p>
<pre>result = TimeSerial(14,30,07)
WScript<a href="echo.html">.Echo</a> result
&gt; 14:30:07</pre>
<p class="quote"><i>“Time is more valuable than money. You can get more money, but you cannot get more time” ~ Jim Rohn</i></p>
<p><b>Related:</b></p>
<p><a href="replace.html">Replace</a> - Find and replace text<br>
Equivalent PowerShell cmdlet: <span class="code">$result = <a href="../ps/get-date.html">get-date</a> -h 17 -mi 10 -s 45 -displayhint time</span></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="timeserial.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

