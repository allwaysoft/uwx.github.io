---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>List all drives on the local computer</h1>
<p>Ignoring CD, DVD and mapped network drives. </p>
<p>ListLocalDrives.cmd</p>
<pre>@echo off
setlocal
For /f "tokens=1* delims=\" %%G In ('FSUTIL FSINFO DRIVES ^| find ":"') Do (call :sub %%G)
goto :eof

:sub
     if /i "%1" NEQ "Drives:" (
         FSUTIL FSINFO drivetype %1 | find "Fixed Drive"
     ) ELSE (
         FSUTIL FSINFO drivetype %2 | find "Fixed Drive"
     )
</pre>
<p>An alternative method is to run <a href="psinfo.html">psinfo</a>  -d</p>
<p>See the full <a href="http://www.ss64.org/viewtopic.php?id=327">discussion thread</a> for more detail <br>
</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="fsutil_example.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

