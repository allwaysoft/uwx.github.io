---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>POPD</h1> 
<p> Change directory back to the path/folder most recently stored 
  by the <a href="pushd.html">PUSHD</a> command.<br>
POPD will also remove any temporary drive maps created by PUSHD</p>
<pre>Syntax
      POPD </pre>
<p>PUSHD and POPD operate on a <a href="http://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29">stack</a> or LIFO (last in, first out) principle and so can be used multiple times.</p>
<p><b>Example</b></p>
<pre>   C:\Program Files<b>&gt;</b> PUSHD c:\utils
   C:\utils<b>&gt;</b> PUSHD c:\Windows
   C:\Windows<b>&gt;</b> 
   C:\Windows<b>&gt;</b> POPD
   C:\utils<b>&gt;</b> 
   C:\utils<b>&gt;</b> POPD
   C:\Program Files<b>&gt;</b></pre>
<h2>Errorlevels</h2>
<blockquote>
<p>If the directory is successfully changed <a href="errorlevel.html">%ERRORLEVEL%</a> = <i>unchanged</i> (this is a bug)<br>
If a bad switch is given = 1</p>
</blockquote>
<p>POPD is an <a href="syntax-internal.html">internal</a> command. If <a href="cmd.html">Command Extensions</a> are disabled PUSHD and POPD will not create temporary drive letters.<br><br>
<i class="quote">"It's amazing how low you go to get high" - John Lennon </i> <br>
<br>
<b>Related:</b></p>   
<p><a href="pushd.html">PUSHD</a> - Change the current directory/folder and store the previous folder/path<br>
<a href="cd.html">CD</a> - Change Directory, select a Folder (and drive)<br>
Powershell: 
<a href="../ps/pop-location.html">Pop-Location</a> - Set the current working location from the stack (popd) <br>
Equivalent bash command (Linux):<a href="../bash/popd.html"> 
popd</a> - Remove the top entry from the directory stack</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="popd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

