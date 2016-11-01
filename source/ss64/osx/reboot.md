---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>halt</h1> 
<p>Stop and restart the operating system. When the system is halted with the halt command, the system is powered off.</p>
<pre>Syntax
      halt [-lnqu]

      reboot [-lnq]

Options

   -l      Do not record the halt or reboot in the system log.
           This option is intended for applications such as <a href="shutdown.html">shutdown</a>
           that call reboot or halt and log this themselves.

   -n      Do not flush the file system cache.
           This option should probably not be used.

   -q      Halt or restart the system quickly and ungracefully, only the flushing
           of the file system cache is performed (if the -n option is not specified).
           This option should probably not be used.

   -u      Halt the system up until the point of removing system power, but wait
           before removing power for 5 minutes so that an external UPS (uninterruptible
           power supply) can forcibly remove power.  This simulates a dirty shutdown to 
           permit a later automatic power on.
           OS X uses this mode automatically with supported UPSs in emergency shutdowns.
</pre>
<p><b><br>
</b> The halt and reboot utilities flush the file system cache to disk, send all running processes a SIGTERM (and subsequently a SIGKILL) and, respectively, halt or restart the system. The action is logged, including entering a shutdown record into the wtmp(5) file.</p>
<p>Normally, the <a href="shutdown.html">shutdown</a> utility is used when the system needs to be halted or restarted, giving users advance warning of their impending doom and cleanly terminating specific programs. </p>
<p>SIGTERM TO SIGKILL INTERVAL<br>
The SIGKILL will follow the SIGTERM by an intentionally indeterminate period of time.
Programs are expected to take only enough time to flush all dirty data and exit. Developers are encouraged to file a bug with the OS vendor, should they encounter an issue
with this functionality. </p>
<p class="quote"><i>“Soldier: Halt, Who goes there?<br>
King Arthur: It is I, Arthur, Son of Uther Pendragon, from the castle of Camelot. King of the Britons, defeater of the Saxons, sovereign of all England.<br>
Soldier: Pull the other one” ~ Monty Python and the Holy Grail</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man8/reboot.8.html">halt/reboot man page</a> - Apple.com<br>tmp(5)<br>
<a href="shutdown.html">shutdown</a> - Shutdown or restart OS X<br>
sync(8)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="reboot.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
