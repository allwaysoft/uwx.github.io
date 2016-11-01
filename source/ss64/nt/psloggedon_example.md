---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>List usernames and the computer each is logged into.</h1>
<p> (on a large domain this will take a while to run) </p>
<p>WhoWhere.cmd</p>
<pre>@echo off
setlocal
for /f "Tokens=1" %%c in ('net view /domain:"%USERDOMAIN%"^|Findstr /L /C:"\\"') do (
 for /f "Tokens=*" %%u in ('<a href="psloggedon.html">PsLoggedOn</a> -L %%c^|find /i "%USERDOMAIN%\"') do (
  call :report %%c "%%u"
 )
)
endlocal
goto :EOF

:report
set work=%1
set comp=%work:~2%
set user=%2
set user=%user:"=%
call set user=%%user:*%USERDOMAIN%\=%%
@echo %comp% %user%</pre><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

