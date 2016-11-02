---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>basename</h1> 
<p>Strip directory and suffix from filenames</p>
<pre>Syntax
      basename <i>string</i> [<i>suffix</i>]

      basename [-a] [-s <i>suffix</i>] <i>string</i> [...]

      dirname string

Key
   -a   Treat every argument as a string
        (as if basename were invoked with just one argument)

   -s   The suffix is taken as its argument, all other arguments are treated as a string.</pre>
<p> The <span class="code">basename</span> utility deletes any prefix ending with the last slash <span class="code">/</span> character present
in string (after first stripping trailing slashes), and a suffix, if given. The suffix
is not stripped if it is identical to the remaining characters in string. The resulting
filename is written to the standard output.</p>
<p> A non-existent suffix is ignored. </p>
<p>The <span class="code">dirname</span> utility deletes the filename portion, beginning with the last slash `/' character to the end of string (after first stripping trailing slashes), and writes the
result to the standard output.</p>
<p>basename and dirname will exit 0 on success, and &gt;0 if an error occurs.</p>
<p><b>Examples</b></p>
<p>Set the shell variable FOO to /usr/bin</p>
<p class="code"> $ FOO=`dirname /usr/bin/trail`</p>
<p>Set the shell variable FOO$ to the basename of iTunes </p>
<p class="code">$ FOO=`basename /Applications/itunes.app` <br> 
 itunes.app
</p>
<p class="quote"><i>“Then I came up with this crazy idea just to walk out on the stage with no band at all and just start singing whatever came to mind. I actually fought the idea for a while because it seemed almost too radical, but it became obvious what I was supposed to be doing” - <a href="http://www.youtube.com/watch?v=PgvJg7D6Qck">Bobby McFerrin</a> </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/basename.1.html">basename man page</a> - Apple.com<br>
<a href="ls.html">ls</a> - List information about file(s)<br>
Equivalent Windows command: <a href="../nt/syntax-substring.html"> Variable Substring </a></p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="basename.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
