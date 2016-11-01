---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1>CHKNTFS.exe</h1>  
<p>Check the NTFS file system with <a href="chkdsk.html">CHKDSK</a></p>
<pre>Syntax
      CHKNTFS <i>drive</i>: [...]
      CHKNTFS /C <i>drive</i>: [...]
      CHKNTFS /X <i>drive</i>: [...]
      CHKNTFS /t[:<i>Time</i>]
      CHKNTFS /D

Key
   drive : Specifies a drive letter.<br>
   /C : Check - schedules chkdsk to be run at the next reboot.<br>
   /X : Exclude a drive from the default boot-time check. 
        Excluded drives are not accumulated between command invocations.

   /T : Change the Autochk.exe initiation countdown time (time in seconds)
        If you don’t specify Time: displays the current countdown time.<br>
   /D : Restore the machine to the default behavior; all drives are<br>        checked at boot time and chkdsk is run on those that are dirty.
        This undoes the effect of the /X option.</pre>
<p> If no switches are specified, CHKNTFS will display the status of the dirty bit for each drive.</p>
<p><i class="quote">“I don’t make no dirty movements” ~ Elvis </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="chkdsk.html">CHKDSK</a> - Check Disk - check and repair disk problems <br>
<a href="fsutil.html">FSUTIL</a> - File and Volume utilities <br>
<a href="bootcfg.html">BOOTCFG</a> - Edit the Boot.ini file<br>
<a href="https://support.microsoft.com/kb/160963">Q160963</a> - ChkNTFS What you can use it for</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="chkntfs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

