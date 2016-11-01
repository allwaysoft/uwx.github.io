---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_vbsyntax.lbi" --><!-- #EndLibraryItem --><h1>Datetime.vbs</h1> 
<pre>' Syntax:
'  CSCRIPT datetime.vbs
 
'Returns: Year, Month, Day, Hour, Minute, Seconds, Offset from GMT, Daylight Savings=True/False

strComputer = "."

' Date and time

Set objWMIService = GetObject("winmgmts:\\" &amp; strComputer &amp; "\root\cimv2")
Set colItems = objWMIService.ExecQuery("Select * from Win32_OperatingSystem")

For Each objItem in colItems
    dtmLocalTime = objItem.LocalDateTime
    dtmMonth = Mid(dtmLocalTime, 5, 2)
    dtmDay = Mid(dtmLocalTime, 7, 2)
    dtmYear = Left(dtmLocalTime, 4)
    dtmHour = Mid(dtmLocalTime, 9, 2)
    dtmMinutes = Mid(dtmLocalTime, 11, 2)
    dtmSeconds = Mid(dtmLocalTime, 13, 2)
Next

' Daylight savings

Set Win32Computer = objWMIService.ExecQuery("SELECT * FROM Win32_ComputerSystem") 

For Each objItem In Win32Computer
   oGMT = (objItem.CurrentTimeZone / 60) 
   DaySave = objItem.DaylightInEffect 
Next

Wscript.Echo dtmYear &amp; " " &amp; dtmMonth &amp; " " &amp; dtmDay &amp; " " &amp; dtmHour &amp; " " &amp; dtmMinutes &amp; " " &amp; dtmSeconds &amp; " " &amp; oGMT &amp; " " &amp; DaySave
</pre>
<p>Calls:<br>
Win32_OperatingSystem<br>
Win32_ComputerSystem
</p><p> Alternatives:  Win32_LocalTime also gives the time
</p><p><b>Related</b>
</p><p><a href="syntax-getdate.html">GetDate.vbs</a> - Return the current Year/month/Day and time<br>
<a href="../nt/syntax-getdate.html">GetDate.cmd</a> - Get todays date Windows batch file<br>
<a href="syntax-easter.html">Easter.vbs</a> - Function to calculate the date of Easter
</p><p class="quote"><i>“If I had to live my life again, I'd make the same mistakes, only sooner” ~ Tallulah Bankhead.</i></p><!-- #BeginLibraryItem "/Library/foot_vb.lbi" --><p>
<!-- VB300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1683739502"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-getdatetime.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

