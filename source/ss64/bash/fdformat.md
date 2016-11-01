---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>fdformat</h1> 
<p>Low-level format a floppy disk</p>
<pre>Syntax
      fdformat [ -n ] <i>device

</i>Options
       -n     No verify.  This will disable the verification
              that is performed after the format.</pre>
<p>  fdformat does a low level format on a floppy disk.  </p>
<p>device
  is usually one of the following (for floppy  devices,  the major  =2, and the minor is shown for informational purposes only):</p>
<pre>              /dev/fd0d360  (minor = 4)
              /dev/fd0h1200 (minor = 8)
              /dev/fd0D360  (minor = 12)
              /dev/fd0H360  (minor = 12)
              /dev/fd0D720  (minor = 16)
              /dev/fd0H720  (minor = 16)
              /dev/fd0h360  (minor = 20)
              /dev/fd0h720  (minor = 24)
              /dev/fd0H1440 (minor = 28)

              /dev/fd1d360  (minor = 5)
              /dev/fd1h1200 (minor = 9)
              /dev/fd1D360  (minor = 13)
              /dev/fd1H360  (minor = 13)
              /dev/fd1D720  (minor = 17)
              /dev/fd1H720  (minor = 17)
              /dev/fd1h360  (minor = 21)
              /dev/fd1h720  (minor = 25)
              /dev/fd1H1440 (minor = 29)</pre>
<p>  The generic floppy devices, /dev/fd0  and  /dev/fd1,  will 
  fail  to  work with fdformat when a non-standard format is<br>
  being used, or if the format  has  not  been  autodetected 
  earlier.   In  this case, use setfdprm(8) to load the disk
parameters.</p>
<p class="quote"><i>“Meetings are a symptom of bad organization. The fewer meetings the better” ~ Peter F. Drucker</i></p>
<p><b>Related:</b><br>
<br>
format - Format disks or tapes<br>
<a href="mtools.html">mtools</a> - Manipulate MS-DOS files<br>
fd(4), setfdprm(8), mkfs(8), emkfs(8)<br>
Equivalent Windows commands: 
<a href="../nt/format.html">FORMAT</a> - Format a disk</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

