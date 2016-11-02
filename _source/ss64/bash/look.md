---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>look</h1> 
<p>Display any lines in file which contain <i>string</i> as a prefix. </p>
<pre>Syntax
      look [-df] [-t <i>termchar</i>] <i>string</i> [<i>file</i>]

 As look performs a binary search, the lines in <i>file</i> must be sorted.

Options:

 -d   Dictionary character set and order, i.e. only alphanumeric characters are compared.

 -f   Ignore the case of alphabetic characters (UPPER/lower).

 -t   Specify a string termination character, i.e. only the characters
      in <i>string </i>up to and including the first occurrence of <i>termchar</i> are compared.
</pre>
<p> If <i>file</i> is not specified, the dictionary file <span class="code">/usr/share/dict/words</span> is used, only alphanumeric characters are compared and the case of alphabetic characters is ignored.</p>
<p>Exits 0 if one or more lines were found and displayed, 1 if no lines were found, and &gt;1 if an error occurred.</p>
<p>The return status is the exit status of the last command executed 
in <var>consequent-commands</var>, or zero if none were executed. </p>
<p class="quote"><i>"One's destination is never a place but rather a new way of looking at things" ~ Henry Miller</i></p>
<p><b>Related:</b></p>
<p><a href="for.html">  </a><a href="grep.html">grep</a> Search file(s) for lines that match a given pattern<br>
<a href="sort.html">sort</a> Sort text files<br>
Equivalent Windows command:  <a href="../nt/find.html">FIND</a> - Search for a text string in a file</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="look.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

