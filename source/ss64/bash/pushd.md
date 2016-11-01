---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>pushd</h1> 
<p>Save and then change the current directory. With no arguments, 
<code>pushd</code> exchanges the top two directories.</p>
<pre>Syntax
      pushd [<var>dir</var> | <var>+N</var> | <var>-N</var>] [-n]

Key
   +N   Brings the Nth directory (counting from the left of the list 
        printed by dirs, starting with zero) to the top of the list by 
        rotating the stack. 

   -N   Brings the Nth directory (counting from the right of the list 
        printed by dirs, starting with zero) to the top of the list by 
        rotating the stack. 

   -n   Suppresses the normal change of directory when adding directories to the 
        stack, so that only the stack is manipulated. 

   dir  Makes the current working directory be the top of the stack, and then executes 
        the equivalent of `cd dir'. cds to dir.</pre>
<p class="quote"><i>#Ah, push it - push it good<br>
Ah, push it - p-push it real good# ~ Salt 'N' Pepa</i></p>
<p><b>Related:</b><br>
<br>
<a href="dirs.html">dirs</a> - Display list of remembered directories <br>
<a href="popd.html">popd</a> - Restore the previous value of the current directory 
saved by PUSHD <br>
Equivalent Windows command: 
<a href="../nt/pushd.html">PUSHD</a> - Save and then change the current directory</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="pushd.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

