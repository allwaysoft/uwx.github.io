---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>popd</h1> 
<p>Remove the top entry from the directory stack, and <code>cd</code> 
to the new top directory.</p>
<pre>Syntax
      popd [+<i>N</i> | -<i>N</i>] [-n]

Key
   +<i>N</i>   Remove the <i>N</i>th directory (counting from the left of the list 
        printed by dirs), starting with zero. 

   -<i>N</i>   Remove the <i>N</i>th directory (counting from the right of the list 
        printed by dirs), starting with zero. 

   -n   Suppress the normal change of directory when removing directories from 
        the stack, so that only the stack is manipulated. </pre>
<p>When no arguments are given, popd removes the top directory from 
  the stack and performs a cd to the new top directory. <br>
  <br>
  The elements are numbered from 0 starting at the first directory listed with 
dirs; i.e., popd is equivalent to popd +0.</p>
<p><i class="quote">"It's amazing how low you go to get high" ~ John Lennon </i><br>
<b><br>
Related:</b><br>
<br>
<a href="dirs.html">dirs</a> - Display list of remembered directories<br>
<a href="pushd.html">pushd</a> - Save and then change the current directory <br>
Equivalent Windows  command: 
<a href="../nt/popd.html">POPD</a> - Restore the previous value of the current directory</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="popd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

