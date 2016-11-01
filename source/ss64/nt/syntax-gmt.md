---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>GMT.cmd</h1>
<p>Returns the current time into the variable <span class="code">%_gmt%</span> adjusted to <a href="http://en.wikipedia.org/wiki/Gmt">Greenwich Mean Time</a>, this can be useful when comparing events across multiple time zones or whenever you don’t want daylight savings to affect the result.</p>
<pre>  ::gmt.cmd  Display the current time in GMT (World Time)

  @echo off
  Setlocal
  Set _key=HKLM\System\CurrentControlSet\Control\TimeZoneInformation
  :: find offset from GMT in minutes
  For /f "Tokens=3" %%G in ('Reg query %_key% /V ActiveTimeBias^|FIND "REG_DWORD"') do (
    Set /a _offset=%%G
  )

  :: Convert to hours
  Set /a _offset_hours=%_offset% / 60

  :: Get current local time
  For /f "tokens=1-3 delims=1234567890 " %%a in ("%time%") Do set "delims=%%a%%b%%c"
  For /f "tokens=1-4 delims=%delims%" %%G in ("%time%") Do (
    Set _hh=%%G
    Set _min=%%H
  )
  :: Strip any leading spaces
  Set _hh=%_hh: =%

  :: Ensure the hours have a leading zero
  if 1%_hh% LSS 20 set _hh=0%_hh%

  Echo   Local time: %_hh%:%_min%

  :: add offset to the current time
  Set /a _hh=%_hh% + %_offset_hours%

  :: display result
  Echo   GMT time:   %_hh%:%_min%
  ENDLOCAL&amp;Set _gmt=%_hh%:%_min%
</pre>
<p><b><br>
</b><i class="quote">“Time is like money, the less we have of it to spare, the further we make it go” ~ Josh Billings </i>
</p><p><b>Related</b>
</p><p><a href="../vb/syntax-getdatetime.html">datetime.vbs</a> - Get Date, Time and daylight savings (VB Script) <br>
<a href="syntax-gettime.html">GetTime.cmd</a> - Get the time now<br>
<a href="time.html">TIME</a> - Set the time (list of default time formats for different countries)<br>
<a href="http://www.robvanderwoude.com/datetiment.html">Rob Vanderwoude</a> - date/time scripts
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-gmt.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

