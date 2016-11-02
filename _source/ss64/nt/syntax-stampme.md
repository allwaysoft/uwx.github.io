---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>StampMe.cmd</h1>
<p>Rename a file (or folder) by appending the current date and time to the existing filename:</p>
<pre>  @ECHO off
  SETLOCAL
  IF [%1] NEQ [] goto s_start

  :: Author - Simon Sheppard, Nov 2014
  :: Tested for Windows XP Pro or greater
  Echo StampMe.cmd
  Echo Rename a file with the DATE/Time
  Echo:
  Echo Syntax
  Echo    STAMPME TestFile.txt
  Echo:
  Echo    STAMPME "Test File.txt"
  Echo:
  Echo    STAMPME "c:\docs\Test File.txt"
  Echo:
  Echo    Will rename the file in the format "Test File-2014-12-30@16-55-01.txt"
  Echo:
  Echo    In a batch file use CALL STAMPME ...
  GOTO :eof
  
  :s_start
  Set _file=%~n1%
  Set _pathname=%~f1%
  Set _ext=%~x1%
  
  :: Get the date/time
  FOR /f %%a in ('WMIC OS GET LocalDateTime ^| find "."') DO Set _DTS=%%a
  Set _datetime=%_DTS:~0,4%-%_DTS:~4,2%-%_DTS:~6,2%@%_DTS:~8,2%-%_DTS:~10,2%-%_DTS:~12,2%

  Echo   Year-MM-Day@HR-Min-Sec
  Echo   %_datetime%
  
  :: Rename the file
  REN "%_pathname%" "%_file%-%_datetime%%_ext%"</pre>
<p>The last  line  of the batch file does the <a href="ren.html">REName</a>.
</p><p><b>Examples</b>
</p><p class="code">c:\&gt; StampMe "sample file.txt"
<br>
c:\&gt; StampMe "C:\logs\data\errorlog.txt"<br>
c:\&gt; StampMe "C:\docs\example folder"
</p><p>An alternative 'quick and dirty' way to do the same thing in one line is shown below, this does work but is less robust as the results will vary according to regional/control panel settings.
</p><p class="code">c:\&gt; REN "sample file.txt" "* %Date:/= % %Time::=.%.*" 
</p><p class="quote"><i>“The time you enjoy wasting is not wasted time” ~ Bertrand Russell</i></p>
<p><b>Related</b>
</p><p><a href="syntax-delolder.html">DelOlder.cmd</a> - Delete files more than n days old<br>
<a href="syntax-getdate.html">GetDate</a> and <a href="syntax-gettime.html">GetTime</a> scripts<br>
<a href="../dates.html">Standard date and time notation</a> - YYYY-MM-DD<br>
<a href="../ps/syntax-stampme.html">Stampme.ps1</a> - Powershell version
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

