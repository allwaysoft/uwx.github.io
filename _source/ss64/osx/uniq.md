---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>uniq</h1> 
<p>Report or filter out repeated lines in a file. <br>
  Reads standard input comparing adjacent lines, and writes a copy of each unique 
  input line to the standard output. <br>
The second and succeeding copies of identical 
adjacent input lines are not written. </p>
<pre>Syntax
       uniq [-c | -d | -u] [-f <i>fields</i>] [-s <i>chars</i>] [<i>input</i>_<i>file</i> [<i>output</i>_<i>file</i>]]

Options<i>
</i>     <b>-c</b>      Precede each output line with the count of the number of times
             the line occurred in the input, followed by a single space.

     <b>-d</b>      Distinct - Don't output lines that are not repeated in the input.

     <b>-f</b> <i>fields</i>
             Ignore the first <i>fields</i> in each input line when doing compar-
             isons.  A field is a string of non-blank characters separated
             from adjacent fields by blanks.  Field numbers are one based,
             i.e. the first field is field one.

     <b>-s</b> <i>chars</i>
             Ignore the first <i>chars</i> characters in each input line when doing
             comparisons.  If specified in conjunction with the <b>-f</b> option, the
             first <i>chars</i> characters after the first <i>fields</i> fields will be ignored.
             Character numbers are one based, i.e. the first character
             is character one.

     <b>-u</b>      Don't output lines that are repeated in the input.
             Print only lines that are unique in the INPUT.</pre>
<p><b>  </b>By default, <span class="code">uniq</span> prints the unique lines in a sorted file, it 
discards all but one of identical successive input lines. so that the OUTPUT contains unique lines.</p>
<p><span class="code">uniq</span> will only compare lines that appear <i>successively</i> in the input.</p>
<p>Repeated lines in the input will not be 
  detected if they are not adjacent, so it may be necessary to sort the files 
first.</p>
<p>If an <i>InputFile</i> of <span class="code">-</span> (or nothing) is given, then uniq will read from standard input.</p>
<p>If no <i>OutputFile</i> file is specified, <span class="code">uniq</span> writes to standard output.<br>
<br>
The historic +number and -number options have been deprecated 
but are still supported in this implementation.</p>
<p><b>Examples</b></p>
<p>Count the frequency of some words:</p>
<p class="code">echo "one two three one three" | tr -cs "A-Za-z" "\n"  | sort | uniq -c | sort -n -r</p>
<p class="quote"><i>“Do you know what you are? You are a marvel. You are unique” ~ Pablo Picasso</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/uniq.1.html">uniq man page</a> - Apple.com<br>
<a href="sort.html">sort</a> - Sort text files<br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters.</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
