---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>DELTREE - Windows 95 Command</h1>
<p> <b>DELTREE<a id="deltree"></a></b><br>
<br>
Previous versions of Windows had the DELTREE command that deletes all files 
and sub folders.</p>
<p>DEL /s will delete all files<br>
RD /s will remove all files and folders including the root folder.</p>
<pre>:: Remove all files and subfolders but NOT the root folder
:: From tip 617 at JsiFAQ.com
@echo off
pushd %1
del /q *.* 
for /f "Tokens=*" %%G in ('dir /B') do rd /s /q "%%G"
popd </pre>
<p class="quote"><i>“Everyone has a strategy until they get punched in the face” ~ Mike Tyson</i></p><p><b>Related:</b><br>
<br>
<a href="rd.html">RD</a> - Delete folders or entire folder trees <br>
<a href="delprof.html">DELPROF</a> Delete NT user profiles<br>
<a href="del.html">DEL</a> - Delete files<br>
PowerShell: <a href="../ps/remove-item.html">Remove-Item</a> - Delete the specified items.<br>
Equivalent bash command (Linux): <a href="../bash/rmdir.html">rmdir</a> / <a href="../bash/rm.html">rm</a> - Remove folders/ files</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

