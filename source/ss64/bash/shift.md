---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>shift</h1> 
<span class="body">Shift positional parameters to the left by n.</span><br>
<pre>Syntax
      shift [<i>n</i>]

Options

   <i>n</i>  : The number of parameters to shift (default = 1)</pre>
<p> The positional parameters from <br>
  n+1 ... $# <br>
  are renamed to <br>
  $1 ... $#-n+1<br>
  <br>
  Parameters represented by the numbers $# to n+1 are unset. <br>
  <br>
  n must be a positive number less than or equal to $#.<br>
  <br>
  The return status is zero unless n is greater than $# or less than zero. </p>
<p>shift is a bash builtin command.</p>
<p class="quote"><i>“Here lies Colonel Chinstrap, drowned, From the inside” ~ Shifting sands, The Goon Show </i></p>
<p><b>Related:</b><br>
<br>
<a href="getopts.html">getopts</a> - Parse positional parameters<br>
Equivalent Windows command: 
<a href="../nt/shift.html">SHIFT</a> - Shift  parameters 
in a batch file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="shift.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

