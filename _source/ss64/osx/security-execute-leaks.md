---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1><a href="security.html">security</a> execute - leaks - errors </h1> 
<pre>   execute-with-privileges <program> [<i>args</i>...]
          Execute tool with privileges.  On success stdin will be read and forwarded to the tool.

   leaks [-h] [-cycles] [-nocontext] [-nostacks] [-exclude <i>symbol</i>]
          Run /usr/bin/leaks on this process.  This can help find memory leaks after running certain commands.
          mands.

          Options:
          -cycles         Use a stricter algorithm (See leaks(1) for details).
          -nocontext      Withhold the hex dumps of the leaked memory.
          -nostacks       Don't show stack traces of leaked memory.
          -exclude <i>symbol</i>
                          Ignore leaks called from symbol.

   error [-h] [<error code(s)...="">]
          Display an error string for the given security-related error code.  The error can be in decimal or
          hex, e.g. 1234 or 0x1234. Multiple errors can be separated by spaces.

   help [-h]
          Show all commands, or show usage for a command.</error></program></pre>
<p class="quote"><i>“Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing” ~ Helen Keller</i></p>
<p><b>Related:</b></p>
<p><a href="security.html">security</a> - Administer Keychains, keys, certificates and the Security framework.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
