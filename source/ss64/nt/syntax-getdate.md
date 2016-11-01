---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>GetDate.cmd</h1>
<p>Display the date and time independent of OS Locale, Language or the users chosen date format (Control Panel/Regional).</p>
<p>If all you need is the current date and time in <b>local</b> format, you can just use the built in variables <span class="code">%date% </span>and <span class="code">%time%</span> the more difficult problem is  making this work for <i>any</i> locale so that it can be used across international networks.</p>
<p>Method 1 - Calling a VBScript <a href="../vb/syntax-getdate.html">getdate.vbs</a> for Windows XP or greater</p>
<pre>@Echo off
For /f %%G in ('cscript /nologo <b>getdate.vbs</b>') do set _dtm=%%G
Set _yyyy=%_dtm:~0,4%
Set _mm=%_dtm:~4,2%
Set _dd=%_dtm:~6,2%
Set _hh=%_dtm:~8,2%
Set _nn=%_dtm:~10,2%
Echo %_yyyy%-%_mm%-%_dd%T%_hh%:%_nn%</pre>
<p>Method 2 - Calling <a href="wmic.html">WMIC</a> for Windows XP Professional or Vista/Windows 7</p> 
<pre>@Echo off
:: Check WMIC is available
WMIC.EXE Alias /? &gt;NUL 2&gt;&amp;1 || GOTO s_error

:: Use WMIC to retrieve date and time
FOR /F "skip=1 tokens=1-6" %%G IN ('<b>WMIC</b> Path Win32_LocalTime Get Day^,Hour^,Minute^,Month^,Second^,Year /Format:table') DO (
   IF "%%~L"=="" goto s_done
      Set _yyyy=%%L
      Set _mm=00%%J
      Set _dd=00%%G
      Set _hour=00%%H
      SET _minute=00%%I
)
:s_done

:: Pad digits with leading zeros
      Set _mm=%_mm:~-2%
      Set _dd=%_dd:~-2%
      Set _hour=%_hour:~-2%
      Set _minute=%_minute:~-2%

:: Display the date/time in ISO 8601 format:
Set _isodate=%_yyyy%-%_mm%-%_dd% %_hour%:%_minute%
Echo %_isodate%

GOTO:EOF

:s_error
Echo GetDate.cmd
Echo Displays date and time independent of OS Locale, Language or date format.
Echo Requires Windows XP Professional, Vista or Windows 7
echo:
Echo Returns 6 environment variables containing isodate,Year,Month,Day,hour and minute.
Based on the <a href="http://www.robvanderwoude.com/files/sortdate5_xp.txt">sorted date</a> code by Rob van der Woude.</pre>
<p>Previous <a href="http://www.robvanderwoude.com/amb_datetime.php">versions</a> of this script (for Windows XP) used the DATE command, under Windows 7 this now gives different output strings dependent on the short date format and OS Language.
</p><p class="quote"><i>"I've been on the calendar, but never on time" ~ Marilyn Monroe </i></p>
<p><b>Related</b>
</p><p><a href="../vb/syntax-getdatetime.html">datetime.vbs</a> - Get Date, Time and daylight savings (VB Script)<br>
<a href="http://stackoverflow.com/questions/11124572/what-is-the-windows-equivalent-of-the-command-dates/11128674#11128674">Get UNIX format date</a> - Dave Benham / StackOverflow (WMIC)<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
<a href="http://www.robvanderwoude.com/datetiment.html">Date/Time scripts</a> - Rob van der Woude<br>
<a href="http://www.commandline.co.uk/cmdfuncs/dandt/index.html">Date/Time scripts</a> - Ritchie Lawrence<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-getdate.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

