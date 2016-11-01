---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>COREINFO (<abbr title="Part of the Microsoft Sysinternals Suite"><a href="https://technet.microsoft.com/en-us/sysinternals/cc835722">Sysinternals</a></abbr>)</h1>
<p>Show  the mapping between logical processors and the physical processor, NUMA node, and socket on which they reside.</p>
<pre>Syntax
      coreinfo [-c][-f][-g][-l][-n][-s][-m][-v] -c

Key:

   -c   Dump information on cores.
   -f   Dump core feature information.
   -g   Dump information on groups.
   -l   Dump information on caches.
   -n   Dump information on NUMA nodes.
   -s   Dump information on sockets.
   -m   Dump NUMA access cost.
   -v   Dump only virtualization-related features including support
        for second level address translation.
        (requires administrative rights on Intel systems).  </pre>
<p> All options except -v are selected by default.<span class="code"></span><br>
<br>
<b>Example:</b><br>
<br>
Drop all the coreinfo data into a text file:</p>
<p class="code">coreinfo.exe &gt; coreinfo.txt</p>
<p class="quote"><i>“Sing then the core of dark and absolute oblivion where the soul at last is lost in utter peace” ~   D.H. Lawrence</i></p>
<p>  <b>Related:</b></p>
<p><a href="psinfo.html">PsInfo</a> - List information about a system<br>
<a href="wmic.html">wmic cpu</a> get NumberOfCores</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="coreinfo.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

