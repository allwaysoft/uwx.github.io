---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_ntsyntax.lbi" --><!-- #EndLibraryItem --><h1>Delete files older than <i>N </i>days</h1> 
<p> 
There are several ways to do this</p>
<p>1) Using <a href="forfiles.html">ForFiles</a> to delete files over 7 days old:<br>
<br>
<span class="code">C:\&gt; forfiles /p "C:\source_folder" /s /m *.* /c "cmd /c Del @path" /d -<b>7</b><br>
</span></p>
<p>2) Using Robocopy /Move to delete files over 7 days old:</p>
<p class="code">C:\&gt; set _robodel=%TEMP%\~robodel<br>
C:\&gt; MD %_robodel%<br>
C:\&gt; ROBOCOPY "C:\source_folder" %_robodel% /move /minage:<b>7</b><br>
C:\&gt; del %_robodel% /q</p>
<p>3) Using <a href="syntax-datemath.html">DateMath.cmd</a> and <a href="syntax-getdate.html">Getdate.cmd</a>, 
download <a href="delolder.txt">DelOlder.cmd </a></p>
<p>4) With PowerShell delete files over 7 days old:<br>
<span class="code">PS C:\&gt; $now = get-date<br>
PS C:\&gt; dir "C:\source_folder\" | <a href="../ps/where-object.html">where</a> {$_.LastWriteTime -le $now.AddDays(-<b>7</b>)} | <a href="../ps/remove-item.html">del</a> <a href="../ps/common.html">-whatif</a></span></p>
<p>Powershell also has <span class="code">.AddHours</span> if you want to delete more recent files.</p>
<p class="quote"><i>“We were having one of those great first dates you can only have when it's not an actual date” - Sarah Jessica Parker </i></p>
<p><b>Related:</b></p>
<p><a href="setlocal.html">SetLocal</a> - Control the visibility of environment variables in a batch file.<br>
<a href="../ps/syntax-methods.html">Powershell methods </a> -  Math operations (<span class="code">.addDays</span>) </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-delolder.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

