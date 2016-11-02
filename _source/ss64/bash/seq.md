---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>seq</h1> 
<p>Print a sequence of numbers to standard output</p>
<pre>Syntax
      seq [<i>options</i>]... [<i>FIRST</i> [<i>STEP</i>]] <i>LAST</i>...

Options

 -f <i>FORMAT</i>
 --format=<i>FORMAT</i>
     Print all numbers using FORMAT; default `%g'.  FORMAT must contain
     exactly one of the standarding float output formats `%e', `%f', or
     `%g'.

 -s <i>STRING</i>
 --separator=<i>STRING</i>
     Separate numbers with <i>STRING</i>; default is a newline.  The output
     always terminates with a newline.

 -w
 --equal-width
     Print all numbers with the same width, by padding with leading
     zeroes.  (To have other kinds of padding, use `--format').</pre>
<p>`seq' prints the numbers from <i>FIRST</i> to <i>LAST</i> by <i>STEP</i>. <br>
  <br>
  By default, FIRST and STEP are both 1, and each number is printed on its own 
  line. All numbers can be reals, not just integers.</p>
<p><b>Examples</b></p>
<p>Produce a sequence of numbers from 1 to 100</p>
<p class="code">$ seq 100</p>
<p>You can also produce a sequence with the <a href="for.html">for</a> command </p>
<p><span class="code">for ((myseq=0; myseq&lt;50; myseq++))<br>
do<br>
echo The sequence is ${myseq}<br>
done <br>
fi</span><br>
  <br>
  <i class="quote">“The idea of a Being who interferes with the sequence of events in the world is absolutely impossible” ~ Albert Einstein</i></p>
<p><b>Related:</b><br>
<br>
<a href="expr.html">expr</a> - Evaluate expressions<br>
<a href="for.html">for</a> - Expand <var>words</var>, and execute <var>commands</var><br>
<a href="nl.html">nl</a> - Number lines and write files <br>
Equivalent Windows commands:  <a href="../nt/for_l.html">FOR</a> /L - Numeric loop. </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="seq.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

