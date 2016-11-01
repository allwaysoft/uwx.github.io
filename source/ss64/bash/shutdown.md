---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>shutdown</h1> 
<p> Shutdown or restart linux</p>
<pre>Syntax
       shutdown [<i>options</i>] <i>when</i> [<i>message</i>]

Options
   -c     Cancel a shutdown that is in progress.

   -f    Reboot fast, by suppressing the normal call to fsck
         when rebooting.
   -h    Halt the system when shutdown is complete.

   -k    Print the warning message, but suppress actual shutdown.

   -n    Perform shutdown without a call to init.

   -r    Reboot the system when shutdown is complete.

   -t <i>sec</i> 
         Ensure a sec-second delay between killing processes
         and changing the runlevel.

<b>Examples
</b> Shutdown immediately:
   shutdown -h now

 Reboot immediately:
   shutdown -r now 

 Shutdown at 8 pm:
   shutdown -h 20:00

 Shutdown in 10 minutes: 
   shutdown -h +10 </pre>
<p><i class="quote">"The illegal we do immediately. The unconstitutional takes a little longer" ~ Henry Kissinger </i><br>
<br>
<b>Related:</b><br>
<br>
<a href="logout.html">logout</a> - Exit a login shell<br>
Equivalent Windows command:
<a href="../nt/shutdown.html">SHUTDOWN</a></p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shutdown.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

