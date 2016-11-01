---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>getdate.vbs</h1>
<p>Return the current Year/Month/Day and Time formatted as a string.</p> 
<pre>' Syntax:
'  CSCRIPT /nologo getdate.vbs
 
Dim dt
dt=now
'output format: yyyymmddHHnn
wscript.echo ((<a href="year.html">year</a>(dt)*100 + <a href="month.html">month</a>(dt))*100 + <a href="day.html">day</a>(dt))*10000 + <a href="hour.html">hour</a>(dt)*100 + <a href="minute.html">minute</a>(dt)
</pre>
<p>Example
</p><p class="code">C:\demo&gt; CSCRIPT /nologo getdate.vbs<br>
C:\demo&gt; 201307081735</p><p><b>Related</b>
</p><p> <a href="../nt/syntax-getdate.html">GetDate.cmd</a> - Get todays date Windows batch file.<br>
<a href="syntax-getdatetime.html">datetime.vbs</a> - Get Date, Time and Daylight savings.<br>
<a href="syntax-easter.html">Easter.vbs</a> - Function to calculate the date of Easter.</p>
<p class="quote"><i>“If future generations are to remember us with gratitude rather than contempt, we must leave them more than the miracles of technology. We must leave them a glimpse of the world as it was in the beginning, not just after we got through with it” </i>~ President Lyndon B. Johnson</p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-getdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

