---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>expand / unexpand</h1> 
<p>expand tabs to spaces, and vice versa. </p>
<pre>Syntax
      expand [-tabstop] [-tab1,tab2,...,tabn] <i>file</i> ...

      unexpand [-a] <i>file</i> ...
</pre>
<p><span class="code">expand</span> processes the named files or the standard input writing the standard
output with tabs changed into blanks.  Backspace characters are preserved
into the output and decrement the column count for tab calculations.
<span class="code">expand</span> is useful for pre-processing character files (before sorting,
looking at specific columns, etc.) that contain tabs.<br>
<br>
If a single tabstop argument is given, then tabs are set tabstop spaces
apart instead of the default 8.  If multiple tabstops are given then the<br>
tabs are set at those specific columns.<br>
<br>
<span class="code">unexpand</span> puts tabs back into the data from the standard input or the
named files and writes the result on the standard output.</p>
<pre>Options:

     -a    By default when unexpanding, only leading blanks and tabs are reconverted to 
           maximal strings of tabs.  If the -a option is given, then tabs are inserted
           whenever they would compress the resultant file by replacing two or more
           characters.</pre>
<p class="quote"><i>“I would rather train someone and lose them, than not train them and keep them” ~ Zig Ziglar</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/expand.1.html">expand man page</a> - Apple.com<br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="expand.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
