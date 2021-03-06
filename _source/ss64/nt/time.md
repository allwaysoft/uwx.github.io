---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>TIME</h1> 
<p>Display or set the system time. </p>
<pre>Syntax
      TIME [<i>new_time</i>]<br>
      TIME
<br>      TIME /T

key
   <i>new_time</i> : The time as HH:MM

   TIME with no parameters will display the current time and prompt 
   for a new value. Pressing ENTER will keep the same time.

  /T : Just display the time, formatted according to the current Regional settings.</pre>
<h2> Time Formatting</h2>
<blockquote>
<p>  In Control Panel, Regional settings a Time Appearance can be set. This can be 
  used to change the separator, and the number of characters used to display hours 
  and minutes.<br>
  <br>
  To display the time including Seconds:<br>
  <br>
  ECHO:| TIME will display the time, including seconds and hundredths of a second 
  <br>
  <br>

The time separator and the Country Code are user settings in the registry:<br>
  <br>
The <b>time separator</b> can be read using <a href="reg.html">REG</a> as follows</p>
<pre>@echo off
FOR /F "TOKENS=3" %%D IN ('REG QUERY ^"HKEY_CURRENT_USER\Control Panel\International^" /v sTime ^| find ^"REG_SZ^"') DO (
        SET _time_sep=%%D)
echo %_time_sep%</pre>
<p> To read the <b>Country Code</b> replace <span class="code">sTime</span> in the above with <span class="code">iCountry</span>.</p>
</blockquote>
<h2>Country Codes/Formats</h2>
<blockquote>
<p>The time formats for different country codes are as follows:</p>
</blockquote>
<!-- google_ad_section_start(weight=ignore) -->
<pre><b>   Country or language   CountryCode  Date format Time format</b>

   United States         001          01/03/1994  5:35:00.00p
  
   Czechoslovakia        042          03.01.1994 17:35:00 
   France                033          03.01.1994 17:35:00
   Germany               049          03.01.1994 17:35:00
   Latin America         003          03/01/1994  5:35:00.00p
   International English 061          03/01/1994 17:35:00.00
   Portugal              351          03-01-1994 17:35:00
   Finland               358          3.1.1994   17.35.00
   Switzerland           041          03.01.94   17 35.00
   Norway                047          03.01.94   17:35:00
   Belgium               032          03/01/94   17:35:00
   Brazil                055          03/01/94   17:35:00
   Italy                 039          03/01/94   17.35.00
   United Kingdom        044          03/01/94   17:35:00.00
   Denmark               045          03-01-94   17.35.00
   Netherlands           031          03-01-94   17:35:00
   Spain                 034          3/01/94    17:35:00
   Hungary               036          1994.01.03 17:35:00
   Canadian-French       002          1994-01-03 17:35:00
   Poland                048          1994-01-03 17:35:00
   Sweden                046          1994-01-03 17.35.00</pre>
<h2>Errorlevels</h2>
<blockquote>
<p>If the time was successfully changed (or not given) <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If the user lacks admin privileges = 1</p>
</blockquote>
<p>TIME is an <a href="syntax-internal.html">internal</a> command. If <a href="cmd.html">Command Extensions</a> are disabled <!-- google_ad_section_end -->TIME 
  will not support the /T switch</p>
<p><i class="quote">“Time is like money, the less we have of it to spare, the further we make it go” - Josh Billings </i><br>
<br>
<b>Related:</b></p>
<p>%TIME% - variable containing current time <br>

<a href="date.html">DATE</a> - Display or change the date<br>
  <a href="now.html">NOW</a> - Display Message with Current Date and Time<br>
 <a href="w32tm.html">W32TM</a> - Time Service<br>
<a href="tzutil.html">TZUTIL</a> - Time Zone Utility<br>
  Timethis - Time how long it takes the system to run a command. (<a href="../links/windows.html#kits">Win 
  2K ResKit</a>) <br>
  Uptime - Time since last reboot. (<a href="../links/windows.html#kits">Win 2K 
  ResKit</a>) <br>
  <a href="syntax-gettime.html">GetTime.cmd</a> - Script to get current time <br>
  <a href="syntax-gmt.html">GMT.cmd</a> - Current time in GMT (World Time)<br>
<a href="https://support.microsoft.com/kb/307938">Q307938</a> - Change Date and Time display (remove leading zeros) <br>
Powershell: <a href="../ps/get-date.html">Get-Date</a> - Get current date and time<br>
  Equivalent bash command (Linux): <a href="../bash/date.html">date</a> - Display or change the date &amp; time</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="time.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

