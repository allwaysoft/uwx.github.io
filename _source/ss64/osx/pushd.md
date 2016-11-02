---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>pushd</h1> 
<p>Save the value of the current directory. </p>
<pre>Syntax
      pushd [-n] [<i>dir</i>]<br>      pushd [-n] [+<i>N</i>] [-<i>N</i>]

Key
   +<i>N</i>   Rotate the stack so that the nth directory (counting from the left of the list shown<br>        by <a href="dirs.html">dirs</a>, starting with zero) is at the top.
<br>   -<i>N</i>   Rotate the stack so that the nth directory (counting from the right of the list shown<br>        by <a href="dirs.html">dirs</a>, starting with zero) is at the top.

   -n   Suppresses the normal change of directory when adding directories to the stack, so that<br>        only the stack is manipulated.
<br>  <i>dir</i>   Add <i>dir</i> to the directory stack at the top, making it the new current working directory.</pre>
<p>If the pushd command is successful, a <a href="dirs.html">dirs</a> is performed as well. If the first form is used, pushd returns 0 unless the cd to dir fails. With the second form, pushd returns 0 unless the directory stack is empty, a non-existent directory stack element is specified, or the directory change to the specified new current directory fails.</p>
<p>pushd is a bash builtin command.</p>
<p class="quote"><i>  "Fear is the greatest salesman" ~ Robert 
  Klein </i></p>
<p><b>Related:</b></p>
<p><a href="popd.html">popd</a> - Restore the previous directory </p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pushd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
