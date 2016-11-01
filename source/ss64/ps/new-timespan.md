---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ps.lbi" --><!-- #EndLibraryItem --><h1>New-TimeSpan</h1> 
<p>Create a TimeSpan object. The resulting object can be used to add or subtract time from a DateTime object to create additional DateTime objects.</p>
<pre>Syntax
      New-TimeSpan [-start] <i>DateTime</i> [-end] <i>DateTime</i>
            [<i>CommonParameters</i>]

      New-TimeSpan [-days <i>int</i>] [-hours <i>int</i>] [-minutes <i>int</i>]
            [-seconds <i>int</i>] [<i>CommonParameters</i>]

Key
   The timespan can either be a specific number of days/hours/minutes
   or you can enter a Start/End and PowerShell will calculate the difference.

   -Start<i>DateTime</i>
       The start of the timespan.

   -End<i> DateTime</i>
       The end of the timespan, may be piped. Default=Now

   -Days <i>int</i>
       Days in the timespan.

   -Hours <i>int</i><br>       Hours in the timespan.

   -Minutes <i>int<br>       </i>Minutes in the timespan.

   -Seconds <i>int</i>
       Seconds in the timespan.

   <a href="common.html">CommonParameters</a>:
       -Verbose, -Debug, -ErrorAction, -ErrorVariable, -WarningAction, -WarningVariable,
       -OutBuffer -OutVariable.</pre>
<p>
  <b>Examples</b></p>
<p>Create a TimeSpan object of duration 1 hour plus 90 minutes and store it in a variable named $mytspan:</p>
<p><span class="code">PS C:\&gt; $mytspan = new-timespan -hour 1 -minute 90 </span><br>
  <br>
  Create a new TimeSpan object  for Jan 1970 - Jan 1971:</p>
<p class="code">PS C:\&gt; $mytspan = new-timespan (get-date -year 1970 -month 01) (get-date -year 1971 -month 01)</p>
<p class="quote"><i>“I wasted time, and now doth time waste me” ~  Shakespeare (Richard II)</i></p>
<p><b>Related:</b></p>
<p>  <a href="get-date.html">Get-Date</a> - Get current date and time <a href="set-date.html"><br>
Set-Date</a> - Set system time on the host system<br>
Equivalent bash command: <a href="../bash/date.html">date</a> - Display or change the date</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

