---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>uname</h1> 
<p>Print operating system name.</p>
<pre>Syntax
      uname [-amnpsrv]

Options
     -a      Behave as though all of the options -mnrsv were specified.

     -m      Print the machine hardware name.

     -n      Print the nodename (the nodename may be a name that the system is
             known by to a communications network).

     -p      Print the generic processor type.

     -s      Print the operating system name.
             This is the default if no other options are specified.

     -r      Print the operating system release.

     -v      Print the operating system version.</pre>
<p>Examples</p>
<p class="code">$ uname -m<br>
i386</p>
<p class="code">$ uname -v<br>
Darwin Kernel Version 9.8.0: Wed Jul 15 16:55:01 PDT 2009; root:xnu-1228.15.4~1/RELEASE_I386</p>
<p>The version data includes either <span class="code">i386</span> or <span class="code">X86_64</span> indicating a 32 or 64 bit kernel. A 32-bit kernel is the default on most Apple computers, and this will still run 64-bit applications under Snow Leopard. Unless you are doing kernel/system-level development there is no need or benefit to running a 64-bit kernel.</p>
<p>During system boot you can hold down '6' and '4' to load the 64 bit kernel or hold down '3' and '2' to use the 32 bit kernel.<br> 
Your machine will default into the kernel that is best supported.</p>
<p class="quote"><i>“I have discovered the art of deceiving diplomats. I tell them  the truth and they never believe me” ~ Camillo Di Cavour </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/uname.1.html">uname man page</a> - Apple.com<br>hostname -  Print or set system name.<br>
<a href="serverinfo.html">serverinfo</a> - Server information.</p>
<!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="uname.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
