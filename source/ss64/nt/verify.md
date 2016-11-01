---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>VERIFY</h1> 
<p> To check that files are saved to disk correctly; the system can 
re-read the disk after saving to verify that the file is readable.</p>
<pre>Syntax
      VERIFY [ON | OFF]</pre>
<p>By default the CMD shell has verify OFF<br>
</p>
<p>Verify simply checks that the destination file, once written, can be read.
No comparison with the source the files occurs.</p>
<p>Copying files with verify OFF can be significantly faster, up to twice as fast. <br>
<br>VERIFY without a parameter will display the current setting.<br>
</p>
<h2>Errorlevels</h2>
<blockquote>Valid or no parameters given <a href="errorlevel.html">%ERRORLEVEL%</a> = 0<br>
Bad parameters given = 1
</blockquote>
<p>VERIFY is an <a href="syntax-internal.html">internal</a> command.<br>
<br>
<i class="quote">“Most of what is shaping you in the course of your reading you will not be able to remember.<br>
The most formative years of my life were the first five, and if those years were to be evaluated on the basis of my ability to pass a test on them, the conclusion would be that nothing important happened then, which would be false. <br>
The fact that you can’t remember things doesn’t mean that you haven’t been shaped by them” ~ Douglas Wilson, (author of Wordsmithy)</i><br>
<br>
<b>Related:</b></p>
<p><a href="copy.html">COPY /V</a> - Verify<br>
<a href="move.html">MOVE</a> - Move files from one folder to another<br>
<a href="exit.html">EXIT</a> - Quit the current  script/routine, optionally setting an errorlevel.<br>
<a href="https://support.microsoft.com/en-us/kb/126457">Q126457</a> - VERIFY ON, COPY /V, XCOPY /V commands do not compare data.<br>
Equivalent bash command (Linux): <a href="../bash/cksum.html">cksum</a> - Print CRC checksum and byte counts</p>
<!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="verify.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->


