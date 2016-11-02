---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>VOL </h1> 
<p>Display the volume label of a disk.</p>
<pre>Syntax
      VOL [<i>drive</i>:[<i>drive</i>:]]</pre>
<p>If the drive exists, VOL will display it's disk <a href="label.html">label</a> and serial number and will return an <a href="errorlevel.html">%ERRORLEVEL%</a> of 0.</p>
<p>If the drive does not exist or is not ready (CD/DVD drive with no disk  loaded), VOL will return an %ERRORLEVEL% of 1.</p>
<p>If several drives are given, VOL will iterate through and check each of them. If any drive is invalid  it will change the errorlevel  but will still display information about the others.</p>
<h2>Errorlevels</h2>
<blockquote>
<p>If the Volume label was successfully displayed <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
If Drive not found or bad parameters given = 1</p>
</blockquote>
<p>VOL is an <a href="syntax-internal.html">internal</a> command.</p>
<p><b>Example</b></p>
<p class="code">vol c: h:</p>
<p><i class="quote">“I've found the Nobel label very handy because who'd want to hear anything from Betty Williams, ordinary housewife?” ~ <a href="http://en.wikipedia.org/wiki/Betty_Williams_(nobel_laureate)">Betty Williams</a> Nobel Prize 1976 </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="label.html">LABEL</a> - Edit the volume label of a disk<br>
<a href="bootcfg.html">BootCFG</a> - Edit Boot.ini settings. <br>
powershell: <a href="../ps/get-wmiobject.html">Get-WmiObject</a> Win32_LogicalDisk $label<br>
  Equivalent bash command (Linux): <a href="../bash/hostname.html">hostname</a> - Print or set system name </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="vol.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

