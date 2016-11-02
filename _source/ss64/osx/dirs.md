---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>dirs</h1> 
<p>Display the list of currently remembered directories. </p>
<pre>Syntax
      dirs [-clpv] [+n] [-n]

Key
   +n   Display the nth entry counting from the <b>left</b> of the list shown by dirs when
        invoked without options, starting with zero.

   -n   Display the nth entry counting from the <b>right</b> of the list shown by dirs when
        invoked without options, starting with zero.

   -c   Clear the directory stack by deleting all of the entries.

   -l   Produce a longer listing; the default listing format using a tilde to
        denote the home directory.

   -p   Print the directory stack with one entry per line.

   -v   Print  the directory stack with one entry per line, prefixing each entry with
        its index in the stack.</pre>
<p> Without options, displays the list of currently remembered directories. The default display is on a single line with directory names separated by spaces. Directories are added to the
list with the pushd command; the popd command removes entries from the list.</p>
<p>The return value is 0 unless an invalid option is supplied or n indexes beyond the end of the
directory stack.</p>
<p>dirs is a bash built in command.</p>
<p class="quote"><i>“Women always worry about the things that men forget; men always worry about the things women remember”</i></p>
<p><b>Related:</b></p>
<p>
<a href="popd.html">popd</a> - Restore the previous value of the current directory 
saved by `pushd'<a href="pushd.html"><br>
pushd</a> - Save and then change the current directory</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="dirs.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
