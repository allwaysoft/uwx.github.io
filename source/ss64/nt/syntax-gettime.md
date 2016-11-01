---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>GetTime.cmd</h1>
<p>Returns the current time into the variable <span class="code">%_time%</span> </p>
<pre>  @echo off
  SETLOCAL
  For /f "tokens=1-3 delims=1234567890 " %%a in ("%time%") Do set "delims=%%a%%b%%c"
  For /f "tokens=1-4 delims=%delims%" %%G in ("%time%") Do (
    Set _hh=%%G
    Set _min=%%H
    Set _ss=%%I
    Set _ms=%%J
  )
  :: Strip any leading spaces
  Set _hh=%_hh: =%

  :: Ensure the hours have a leading zero
  if 1%_hh% LSS 20 Set _hh=0%_hh%

  Echo The time is:   %_hh%:%_min%:%_ss%
  ENDLOCAL&amp;Set _time=%_hh%:%_min%</pre>
<p>Although the default time delimiter, in Windows XP and above is either<span class="code"> . </span>or<span class="code"> : </span> users can change the delimiter to just about any character they like. And you know theres always that one guy, the one who writes everything in green ink, who will do this!
</p><p>Based on the discussion thread <a href="http://ss64.org/viewtopic.php?id=734">here</a>,  this script always returns HH:MM no matter which time delimiter has been set in the control panel. Thanks to avery_larry and bluesxman for their improvements. To include Milliseconds just tack on the <span class="code">%_ms%</span> variable.</p>
<p class="quote"><i>“What may be done at any time will be done at no time” ~
Scottish Proverb</i></p>
<p><b>Related</b>
</p><p><a href="../vb/syntax-getdatetime.html">datetime.vbs</a> - Get Date, Time and daylight savings (VB Script)<br>
%TIME% - variable containing current time <br>
<a href="time.html">TIME</a> - Set the time (list of default time formats for different countries)<br>
<a href="syntax-getdate.html">GetDate.cmd</a> - Get todays date (any region, any OS)<br>
<a href="syntax-tdiff.html">tdiff.cmd</a> - Time difference in Hours/Minutes<br>

<a href="http://www.commandline.co.uk/cmdfuncs/dandt/index.html">Commandline.co.uk</a> - date/time scripts<br>

<a href="http://www.robvanderwoude.com/datetiment.html">Rob Vanderwoude</a> - date/time scripts
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-gettime.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

