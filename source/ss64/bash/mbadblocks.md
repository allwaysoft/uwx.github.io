---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>mbadblocks</h1> 
<p> Check and repair floppy disk problems, test an MS-DOS disk, and 
mark bad blocks in the FAT</p>
<pre>Syntax
      mbadblocks <i>drive</i>:</pre>
<p>  All unused bad blocks are marked as such in the FAT.
  This  is intended  to  be  used  right  after  mformat.
  It is not intended to salvage bad disks.<br>
    <br>
  bugs<br>
  Mbadblocks should (but doesn't yet) also try to
  salvage bad blocks which are in use by reading them 
  repeatedly, and then mark them bad.</p>
<p><i class="quote">"All things can corrupt perverted minds" ~ Ovid (tristia) </i><br>
<br>
<b> Related:</b><br>
<br>
<a href="mtools.html">mtools</a> - Manipulate MS-DOS files<br>
<a href="cksum.html">cksum</a> - Print CRC checksum and byte counts <br>
Equivalent Windows command:
<a href="../nt/chkdsk.html">CHKDSK</a> - Check Disk - check and repair disk 
problems</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="mbadblocks.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

