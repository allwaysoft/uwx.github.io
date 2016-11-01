---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>aspell</h1> 
<p>Spellcheck a file. </p>
<pre>Syntax
      aspell check [<i>options</i>] <i>filename</i>

Key
   -mode=<i>mode</i>
       The mode to use when checking files.
       The available modes are none, <u>url</u>, email, sgml, tex, texinfo, nroff and any
       others available on your system. <a href="http://aspell.net/man-html/Notes-on-Various-Filters-and-Filter-Modes.html">more..</a>

   –dont-backup
       Don't create a backup file. Normally, if there are any corrections the Aspell utility
       will append .bak to the existing file name and then create a new file with corrections
       made during spell checking.

   -sug-mode=<i>mode</i>
       The suggestion <i>mode</i> to use where mode is one of ultra, fast, normal, or bad-spellers.
       For more information on these modes see Notes on the Different Suggestion Modes.

   -lang=<i>name</i>
   -l <i>name</i>
       The language the document is written in. The default depends on the current locale.

   -encoding=<i>name</i>
       Encoding the document is expected to be in. The default depends on the current locale.

   -master=<i>name</i>
   -d <i>name</i>
       The main dictionary to use.

   -keymapping=<i>name</i>
       The keymapping to use. Either aspell for the default mapping or ispell to use the same
       mapping that the Ispell utility uses.

   <a href="http://aspell.net/man-html/The-Options.html">Further/advanced options</a></pre>
<p><b>Examples</b></p>
<p> Check the file foo.txt:</p>
<p class="code"> $ aspell check foo.txt</p>
<p>Check the file foo.txt using the bad-spellers suggestion mode and the American English dictionary:</p>
<p class="code"> $ aspell check --sug-mode=bad-spellers -d en_US foo.txt</p>
<p class="quote"><i>“My spelling is Wobbly. It's good spelling but it Wobbles, and the letters get in the wrong places” ~ A. A. Milne</i></p>
<p><b>Related:</b><br>
<br><a href="http://aspell.net/">aspell.net</a><br>
Equivalent Windows command: <a href="http://discuss.joelonsoftware.com/default.asp?joel.3.731014.6">Word</a> </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="aspell.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
