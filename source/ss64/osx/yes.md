---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>yes</h1> 
<p>Print the command line argument(s), separated by spaces and followed by a newline, forever until killed. When piped into a command, it will continue until the pipe breaks (i.e., the program completes its execution).</p>
<pre>Syntax
      yes [<i>text</i>]

Key
   text       The text to repeat

   If no arguments are given, prints 'y' followed by a newline forever until killed with Ctrl-C.</pre>
<p>yes in conjunction with <a href="head.html" title="Head (Unix)">head</a> can be used to generate large  test files. For example, executing</p>
<p class="code">yes 123456789 | head -1000 &gt; file.txt</p>
<p>results in a file with 1000 lines each consisting of 10 characters (1, 2, 3, 4, 5, 6, 7, 8, 9 and newline).</p>
<p>Using yes results in 100% processor usage, for this reason it is rarely used other than for testing e.g. to max out a computer's CPU.</p>
<p class="quote">“...I was a Flower of the mountain <b>yes</b> when I put the rose in my hair like the Andalusian girls used or shall I wear a red <b>yes</b> and how he kissed me under the Moorish wall and I thought well as well him as another and then I asked him with my eyes to ask again <b>yes..</b>.” ~ <a href="http://en.wikipedia.org/wiki/Molly_Bloom%27s_soliloquy">Molly Bloom</a></p>
<p><b>Related</b><br>
<br>
<a href="false.html">false</a> - Do nothing, unsuccessfully<br>
<a href="true.html">true</a> - Do nothing, successfully<br>
Equivalent Windows command: <span class="code">ECHO Y | command</span></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="yes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
