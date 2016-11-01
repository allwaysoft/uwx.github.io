---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>xlong.cmd</h1>
<p>It is possible to create very long filenames/pathnames on NTFS that exceed the Windows API  limit. This typically happens when a folder which is part of a deep hierarchy gets renamed. Very long filenames will often create errors in  applications that attempt to open them (even Windows Explorer.)</p>
<p> The script below will list any files that exceed this limit. </p>
<pre>@Echo off
Setlocal EnableDelayedExpansion
:: Report all file / folder paths that exceed the 256 character limit
If {% raw %}{%{% endraw %}1}=={} Echo Syntax: XLong DriveLetter&amp;goto :EOF
Set wrk=%1
Set wrk=%wrk:"=%

For /F "Tokens=*" %%a in ('dir %wrk% /b /s /a') do (
 set name=%%a
 if not "!name:~255,1!"=="" echo Extra long name: "%%a"
)
Endlocal</pre>
<p><b>Examples</b>
</p><p>Check the whole of the D: drive<span class="code"><br>
c:\&gt; xlong D:\</span>
</p><p>Check the current directory on the C: drive<span class="code">:<br>
c:\&gt; xlong C:</span>
</p><p>Check the S:\workgroups\ folder:<span class="code"><br>
c:\&gt; xlong S:\workgroups\
</span>
</p><p>The maximum Windows API MAX_Path is <span class="code">260</span> characters, subtract <span class="code">3</span> characters for the drive and colon: and <span class="code">1</span> character for a terminating NULL and you have a maximum <span class="code">256</span> characters that can be used for the pathname.

</p><p>All .Net applications enforce the Windows API pathname limit including Windows Explorer and PowerShell. 
</p><p>To access very long paths use <a href="robocopy.html">Robocopy</a>, <a href="subst.html">SUBST</a> or the<span class="code"> \\?\<i>UNCPATH</i>\ </span>syntax.
</p><p class="quote"><i>“This report, by its very length, defends itself against the risk of being read” ~ Winston Churchill</i></p>
<p><b>Related</b></p><p><a href="syntax-which.html">Which.cmd</a> - Display full path to any command<br>
Bash equivalent:<br>
<span class="code">find . | awk '{print length($0) " " $0}' | sort -n | tail -n 15 </span>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --></p><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-xlong.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

