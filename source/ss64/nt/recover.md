---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>RECOVER</h1> 
<p> Recover a damaged file from a defective disk.</p>
<pre>Syntax
      RECOVER [<i>drive</i>:][<i>path</i>]<i>filename</i></pre>
<p> You must specify a <i>filename</i>.</p>
<p>Recover is designed to help in the case of hardware failure. When a drive fails the failure is not always total, you can often read some files but not others, and some files will be only partly 
readable.<br>
<br>
The data on a disk is stored in tracks and sectors in an almost random manner. <br>
<br>
RECOVER reads a file sector by sector and recovers data from the good sectors, data stored in a bad sectors cannot be read so this will often result in a partial recovery with some data loss. Restoring a backup is almost always a better option.<br>
<br>
Recover does not allow you to undelete a file.<br>
<br>
<i class="quote">“Whom the gods love dies young” ~ Menander 300 BC </i> <br>
<br>
<b>Related:</b><br>
<a href="chkdsk.html"><br>
CHKDSK</a> - Check Disk - check and repair disk problems<br>
Equivalent bash command (Linux): <a href="../bash/cksum.html">cksum</a> - Print CRC checksum and byte counts (can detect problems but not fix them)</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="recover.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

