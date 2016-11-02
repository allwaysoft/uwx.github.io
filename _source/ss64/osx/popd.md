---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>popd</h1> 
<p>Restore the previous value of the current directory. </p>
<pre>Syntax
      popd [+<i>N</i> | -<i>N</i>] [-n]

Key

   +<i>N</i>   Remove the <i>N</i>th directory (counting from the left of the list 
        printed by <a href="dirs.html">dirs</a>), starting with zero. 

   -<i>N</i>   Remove the <i>N</i>th directory (counting from the right of the list 
        printed by <a href="dirs.html">dirs</a>), starting with zero. 

   -n   Suppress the normal change of directory when removing directories from 
        the stack, so that only the stack is manipulated. </pre>
<p>Without arguments, pops the directory stack and returns to the new top directory. The elements are numbered from 0 starting at the first directory listed with dirs; i.e., popd is equivalent to popd +0. </p>
<p>all forms of popd print the final directory stack</p>
<p>popd is a bash builtin command.</p>
<p class="quote"><i>"Half a pound of tuppenny rice, Half a pound of treacle, that's 
  the way the money goes, Pop! goes the weasel" 
  </i></p>
<p><b>Related:</b></p>
<p>
<a href="pushd.html">pushd</a> - Save and then change the current directory <br>
<a href="dirs.html">dirs</a> - Display list of remembered directories</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="popd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
