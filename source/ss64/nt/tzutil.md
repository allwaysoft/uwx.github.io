---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TZUTIL.exe</h1>
<p> Time Zone Utility.</p>
<pre>Syntax
      TZUTIL /g | /l | /s "<i><a href="timezones.html">TimeZoneValue</a></i>[_dstoff]" | /?

Key
   /g   Display the current time zone value.

   /l   List all valid time zone values and display names in the following format:

<display name="">   /s   Set the time zone to <i>TimeZoneValue</i>
        The _dstoff suffix will disable Daylight Savings Time adjustment
        for the time zone (where applicable).

   /?  Display help.</display></pre>
<p><b>Examples:</b><br>
<br>
Display the current time zone id</p>
<p class="code">%SYSTEMROOT%\System32\tzutil.exe /g</p>
<p>Set the current time zone to Pacific Standard Time</p>
<p class="code">tzutil /s "Pacific Standard Time"</p>
<p>Set the current time zone to Pacific Standard Time and disable Daylight Saving Time adjustment</p>
<p><span class="code">tzutil /s "Pacific Standard Time_dstoff</span>"<br>
<br>
<i class="quote">“We have a normal. As you move outside of your comfort zone, what was once the unknown and frightening becomes your new normal” ~</i><i class="quote">Robin S. Sharma</i><br>
<br>
<b>Related:</b></p>
<p><a href="date.html">DATE</a> - Display or change the date<br>
<a href="time.html">TIME</a> - Display or set the system time<br>
<a href="w32tm.html">W32TM</a> - Time Service</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tzutil.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

