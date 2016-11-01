---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>rmdir</h1> 
<p>Remove directory, this command will only work if the folders are empty.</p>
<pre>Syntax
      rmdir [<i>options</i>]... <i>folder(s)</i>...

Options
      --ignore-fail-on-non-empty
                  Ignore each failure that is solely because the
                  directory is non-empty.

  -p, --parents   Remove explicit parent directories if being emptied

      --verbose   Output a diagnostic for every directory processed

      --help      Display help and exit

      --version   Output version information and exit</pre>
<p><b>Example</b></p>
<p class="code">$ rmdir myfolder </p>
<p>Before removing directories  with a wildcard, it's wise to list them first:</p>
<p class="code">$ ls -d britney*/</p>
<p class="quote"><i>"It devoured my paper, it was a really good paper" ~ <a href="http://en.wikipedia.org/wiki/Ellen_Feiss">Ellen Feiss</a></i></p>
<p><b>Related:</b><br>
<br>
<a href="rm.html">rm</a> - Remove files (rm -rf will recursively remove folders and their contents)<br>
<a href="ls.html">ls -al</a> - List information about files<br>
Equivalent Windows commands: <a href="../nt/rd.html">RD</a> - Delete folders or entire folder trees (DELTREE)</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="rmdir.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

