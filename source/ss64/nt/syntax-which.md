---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Which.cmd</h1>
<p>Show the full path to an executable file.</p>
<pre>:: WHICH.CMD  <i>CommandName</i>  [<i>ReturnVar</i>]
::
::  Determines the full path of the file that would execute if
::  CommandName were executed.
::
::  The result is stored in variable ReturnVar, or else it is
::  echoed to stdout if ReturnVar is not specified.
::
::  If no file is found, then an error message is echoed to stderr.
::
::  The ERRORLEVEL is set to one of the following values
::    0 - Success: A matching file was found
::    1 - No file was found and CommandName is an internal command
::    2 - No file was found and CommandName is not an internal command
::    3 - Improper syntax - no CommandName specified
::
@echo off
setlocal disableDelayedExpansion
set "file=%~1"
if not defined file (
  &gt;&amp;2 echo Syntax error: No CommandName specified
  exit /b 3
)
set "noExt="
setlocal enableDelayedExpansion
if "%~x1" neq "" if "!PATHEXT:%~x1=!" neq "!PATHEXT!" set noExt="";
set "modpath=.\;!PATH!"
@for %%E in (%noExt%%PATHEXT%) do @for %%F in ("!file!%%~E") do (
  setlocal disableDelayedExpansion
  if not "%%~$modpath:F"=="" if not exist "%%~$modpath:F\" (
    endlocal &amp; endlocal &amp; endlocal
    if "%~2"=="" (echo %%~$modpath:F) else set "%~2=%%~$modpath:F"
    exit /b 0
  )
  endlocal
)
endlocal
&gt;nul help %~1 &amp;&amp; (
  &gt;&amp;2 echo "%~1" is not a valid command
  exit /b 2
)
&gt;&amp;2 echo "%~1" is an internal command

:: Credits:
:: Dave Benham
:: <a href="http://ss64.org/viewtopic.php?id=1479">forum thread</a></pre>
<p><b>Related</b></p>
<p><a href="where.html">WHERE</a> - Locate and display files in a directory tree. <br>
<a href="http://www.flounder.com/whereis.htm">whereis utility</a> - Flounder.com</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-which.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

