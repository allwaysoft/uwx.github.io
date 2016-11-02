---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>dirs</h1> 
<p>Display the list of currently remembered directories. </p>
<pre>Syntax
      dirs [+N | -N] [-clpv]

Options
     +N   Displays the Nth directory (counting from the left of the list 
          printed by dirs when invoked without options), starting with 
          zero. 

     -N   Displays the Nth directory (counting from the right of the list 
          printed by dirs when invoked without options), starting with 
          zero.  

     -c   Clears the directory stack by deleting all of the elements. 

     -l   Produces a longer listing; the default listing format uses a tilde to denote 
          the home directory.

     -p   Causes dirs to print the directory stack with one entry per 
          line. 
     -v   Causes dirs to print the directory stack with one entry per 
          line, prefixing each entry with its index in the stack.</pre>
<span class="body"><b>Description</b></span> 
<p>Equivalent to `ls -C -b'; that is,by default files are listed 
  in columns, sorted vertically, and special characters are represented by backslash 
  escape sequences. </p>
<p class="quote"><i>"After all, what is your hosts' purpose in having a party? Surely not for you to enjoy yourself; if that were their sole purpose, they'd have simply sent champagne and women over to your place by taxi" ~ P.J. O'Rourke </i></p>
<p><b>Related:</b><br>
<a href="popd.html"><br>
popd</a> - Restore the previous value of the current directory saved by `pushd'<a href="pushd.html"><br>
pushd</a> - Save and then change the current directory<br>
Equivalent Windows commands: <a href="../nt/pushd.html">
PUSHD</a>/
<a href="../nt/popd.html">POPD</a> </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dirs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

