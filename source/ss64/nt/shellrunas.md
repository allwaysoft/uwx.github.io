---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>ShellRunas (<a href="http://technet.microsoft.com/en-US/sysinternals/cc300361">SysInternals tool</a>) </h1> 
<p> Launch a program  under a different user account (typically an Admin level account).</p>
<pre>Syntax
      shellrunas [/netonly] <i>program arguments</i>
      shellrunas /reg [/quiet]
      shellrunas /regnetonly [/quiet] 
      shellrunas unreg

Key
   <i>program</i>     Run <i>program</i> with specified credentials and parameters

   /netonly    Use if specified credentials are for remote access only

   /reg        Register ShellRunas shell context-menu entry
   /regnetonly Register Shell /netonly context-menu entry
               Note: a command prompt will flash when the program starts
   /unreg      Unregister ShellRunas shell context-menu entry
   /quiet      Register or unregisters ShellRunas shell context-menu entry without result dialog</pre>
<p><b>Examples:</b></p>
<p class="code">C:\&gt; shellrunas photoshop.exe </p>
<p> <i class="quote">"If NumLock is on, pressing a key on the numeric keypad while holding  SHIFT  overrides NumLock and instead generates an arrow key" ~ <a href="http://blogs.msdn.com/oldnewthing/archive/2004/09/06/226045.aspx">OldNewThing</a> </i><br>
  <br>
  <b>Related:</b><br>
  <br>
  <a href="runas.html">RUNAS</a> - Execute a program under a different user account<br>
<a href="http://blogs.msdn.com/b/aaron_margosis/">Aaron Margosis</a> - Running with least privilege</p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shellrunas.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

