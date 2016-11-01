---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_nt.lbi" --><!-- #EndLibraryItem --><h1>Empty</h1>
<p>CMD Batch script to show if a folder is empty:</p>
<pre>    @Echo off
    Setlocal
    if {% raw %}{%{% endraw %}1}=={} set _empty=Syntax: %0 "<folder to="" check="">" &amp;goto :message

    ::Does folder exist
    if not exist %1 (
      set _empty=No Such Folder
      goto :message
    )

    :: Is folder empty
    set _TMP=
    for /f "delims=" %%a in ('dir /b %1') do set _TMP=%%a

    IF {% raw %}{%{% endraw %}_TMP{% raw %}%}{% endraw %}=={} (
      set _empty=Empty
    ) ELSE (
      set _empty=Not Empty
    )

    :message
    echo:
    Echo %_empty%
    echo:
    Endlocal &amp; set _empty=%_empty%
</folder></pre>
<p class="quote"><i>“The difference between false memories and true ones is the same as for jewels: it is always the false ones that look the most real, the most brilliant” ~ Salvador Dalí</i>
</p><p>
  <b>Related:</b>
</p><p><a href="if.html">IF command</a> </p><!-- #BeginLibraryItem "/Library/foot_nt.lbi" --><p>
<!-- windows300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="7649547908"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="empty.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

