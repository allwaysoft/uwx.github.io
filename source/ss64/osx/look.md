---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>look</h1> 
<p>Display lines beginning with a given string. As look performs a
binary search, the lines in <i>file</i> must be sorted.</p>
<pre>Syntax
      look [-df] [-t <i>termchar</i>] <i>string</i> [<i>file</i> ...]

Options:

     -d      Dictionary character set and order,
             i.e., only alphanumeric characters are compared.

     -f      Ignore the case of alphabetic characters.

     -t      Specify a string termination character,
             i.e., only the characters in <i>string</i> up to and including
             the first occurrence of <i>termchar</i> are compared.

If <i>file</i> is not specified, the file /usr/share/dict/words is used, only alphanumeric
characters are compared and the case of alphabetic characters is ignored.</pre>
<p>ENVIRONMENT<br>
The LANG, LC_ALL and LC_CTYPE environment variables affect the execution of the look utility.  Their
     effect is described in environ(7).</p>
<p>FILES<br>
<span class="code">&nbsp;/usr/share/dict/words</span> the dictionary</p>
<p>EXIT STATUS<br>
  The look utility exits 0 if one or more lines were found and displayed, 1 if no lines were found, and
  &gt;1 if an error occurred.</p>
<p>BUGS
     <br>
  Lines are not compared according to the current locale's collating order.  Input files must be sorted
with LC_COLLATE set to `C'.</p>
<p class="quote"><i>“Enjoy the little things, for one day you may look back and realize they were the big things”  ~ Robert Brault </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/look.1.html">look man page</a> - Apple.com<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern<br>
<a href="sort.html">sort</a> - Sort text files</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="look.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
