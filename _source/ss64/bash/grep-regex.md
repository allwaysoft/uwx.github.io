---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #EndLibraryItem --><h1><a href="grep.html">grep</a> Programs and Regular expressions </h1> 
<p>grep searches input files for lines that match a given pattern.</p>
<h2>  grep programs</h2>
<blockquote>
<p>  `grep' searches the named input files (or standard input if no files are named, 
  or the file name `-' is given) for lines containing a match to the given pattern. 
  By default, `grep' prints the matching lines. There are three major variants 
  of `grep', controlled by the following options.</p>
<pre>   -G
   --basic-regexp
        Interpret <i>PATTERN</i> as a basic regular expression.  This is the default.
   -E
   --extended-regexp
        Interpret <i>PATTERN</i> as an extended regular expression.
   -F
   --fixed-strings
        Interpret <i>PATTERN</i> as a list of fixed strings, separated by
        newlines, any of which is to be matched.

In addition, two variant programs <a href="egrep.html">EGREP</a> and <a href="fgrep.html">FGREP</a> are available.
EGREP is the same as `grep -E'.  FGREP is the same as `grep -F'.</pre>
</blockquote>

<h2> Regular Expressions</h2>
<blockquote>
<p>  A regular expression is a pattern that describes a set of strings.<br>
  <br>
  Regular expressions are constructed analogously to arithmetic expressions, by 
  using various operators to combine smaller expressions.<br>
  <br>
  `grep' understands two different versions of regular expression syntax: "basic" 
  and "extended". In GNU `grep', there is no difference in available functionality 
  using either syntax. In other implementations, basic regular expressions are 
  less powerful. The following description applies to extended regular expressions; 
  differences for basic regular expressions are summarized afterwards.<br>
  <br>
  The fundamental building blocks are the regular expressions that match a single 
  character. Most characters, including all letters and digits, are regular expressions 
  that match themselves. Any metacharacter with special meaning can be quoted 
  by preceding it with a backslash. 
A <i>bracket expression</i> is a list of characters enclosed by <b>[</b> and <b>]</b>. It matches any single character in that list; if the first character
of the list is the caret <b>^</b> then it matches any character <i>not</i> in the list. For example, the regular expression <b>[0123456789]</b> matches any
single digit.

</p>
<p>Within a bracket expression, a <i>range expression</i> consists of two characters separated by a hyphen. It matches any single character that sorts between
the two characters, inclusive, using the locale's collating sequence and character set. For example, in the default C locale, <b>[a-d]</b> is equivalent
to <b>[abcd]</b>. Many locales sort characters in dictionary order, and in these locales <b>[a-d]</b> is typically not equivalent to <b>[abcd]</b>; it
might be equivalent to <b>[aBbCcDd]</b>, for example. To obtain the traditional interpretation of bracket expressions, you can use the C locale by setting the
<b>LC_ALL</b> environment variable to the value <b>C</b>.

</p>
<p>Finally, certain named classes of characters are predefined within bracket expressions, as follows. Their names are self explanatory, and they are
<b>[:alnum:]</b>, <b>[:alpha:]</b>, <b>[:cntrl:]</b>, <b>[:digit:]</b>, <b>[:graph:]</b>, <b>[:lower:]</b>, <b>[:print:]</b>, <b>[:punct:]</b>,

<b>[:space:]</b>, <b>[:upper:]</b>, and <b>[:xdigit:].</b> For example, <b>[[:alnum:]]</b> means <b>[0-9A-Za-z]</b>, except the latter form
depends upon the C locale and the <small>ASCII</small> character encoding, whereas the former is independent of locale and character set. (Note that the
brackets in these class names are part of the symbolic names, and must be included in addition to the brackets delimiting the bracket list.) Most
metacharacters lose their special meaning inside lists. To include a literal <b>]</b> place it first in the list. Similarly, to include a literal <b>^</b>

place it anywhere but first. Finally, to include a literal <b>-</b> place it last.
</p>
<p>The period <b>.</b> matches any single character. The symbol <b>\w</b> is a synonym for <b>[[:alnum:]]</b> and <b>\W</b> is a synonym for

<b>[^[:alnum]]</b>.
</p>
<p>The caret <b>^</b> and the dollar sign <b>$</b> are metacharacters that respectively match the empty string at the beginning and end of a line. The symbols
<b>\&lt;</b> and <b>\&gt;</b> respectively match the empty string at the beginning and end of a word. The symbol <b>\b</b> matches the empty string at the edge
of a word, and <b>\B</b> matches the empty string provided it's <i>not</i> at the edge of a word.
</p>
<pre>A regular expression can be followed by one of several repetition operators:

   ?   The preceding item is optional and will be matched at most once.
   *   The preceding item will be matched zero or more times.
   +   The preceding item will be matched one or more times.
  {N}  The preceding item is matched exactly N times.
 {N,}  The preceding item is matched n or more times.
{N,M}  The preceding item is matched at least N times, but not more than M times.
</pre>
<p><br>
Two regular expressions can be concatenated; the resulting regular
expression matches any string formed by concatenating two substrings
that respectively match the concatenated subexpressions.<br>
<br>
Two regular expressions can be joined by the infix operator `|'; the
resulting regular expression matches any string matching either
subexpression.<br>
<br>
Repetition takes precedence over concatenation, which in turn takes
precedence over alternation.  A whole subexpression can be enclosed in
parentheses to override these precedence rules.<br>
<br>
The backreference `\N', where N is a single digit, matches the
substring previously matched by the Nth parenthesized subexpression of
the regular expression.</p>
<pre>In basic regular expressions the metacharacters 
  ? , + , { , | , ( , and  )
lose their special meaning; instead use the backslashed versions:
 \? ,\+ ,\{ ,\| ,\( , and \)</pre>
<p>Traditional `egrep' did not support the `{' metacharacter, and some
`egrep' implementations support `\{' instead, so portable scripts
should avoid `{' in `egrep' patterns and should use `[{]' to match a
literal `{'.<br>
<br>
GNU `egrep' attempts to support traditional usage by assuming that
`{' is not special if it would be the start of an invalid interval
specification.  For example, the shell command `egrep '{1'' searches
for the two-character string `{1' instead of reporting a syntax error
in the regular expression.  POSIX.2 allows this behavior as an
extension, but portable scripts should avoid it.</p>
</blockquote>
<h2> Usage<br>
</h2>
<pre>   Here is an example shell command that invokes GNU `grep':

     grep -i 'hello.*world' menu.h main.c</pre>
<blockquote>
<p>This lists all lines in the files `menu.h' and `main.c' that contain
the string `hello' followed by the string `world'; this is because `.*'
matches zero or more characters within a line.  *Note Regular
Expressions::.  The `-i' option causes `grep' to ignore case, causing
it to match the line `Hello, world!', which it would not otherwise
match.  *Note Invoking::, for more details about how to invoke `grep'.</p>
</blockquote>
<pre>   Here are some common questions and answers about `grep' usage.

  1. How can I list just the names of matching files?

          grep -l 'main' *.c

     lists the names of all C files in the current directory whose
     contents mention `main'.

  2. How do I search directories recursively?

          grep -r 'hello' /home/gigi

     searches for `hello' in all files under the directory
     `/home/gigi'.  For more control of which files are searched, use
     `find', `grep' and `xargs'.  For example, the following command
     searches only C files:

          find /home/gigi -name '*.c' -print | xargs grep 'hello' /dev/null

  3. What if a pattern has a leading `-'?

          grep -e '--cut here--' *

     searches for all lines matching `--cut here--'.  Without `-e',
     `grep' would attempt to parse `--cut here--' as a list of options.

  4. Suppose I want to search for a whole word, not a part of a word?

          grep -w 'hello' *

     searches only for instances of `hello' that are entire words; it
     does not match `Othello'.  For more control, use `\&lt;' and `\&gt;' to
     match the start and end of words.  For example:

          grep 'hello\&gt;' *

     searches only for words ending in `hello', so it matches the word
     `Othello'.

  5. How do I output context around the matching lines?

          grep -C 2 'hello' *

     prints two lines of context around each matching line.

  6. How do I force grep to print the name of the file?

     Append `/dev/null':

          grep 'eli' /etc/passwd /dev/null

  7. Why do people use strange regular expressions on `ps' output?

          ps -ef | grep '[c]ron'

     If the pattern had been written without the square brackets, it
     would have matched not only the `ps' output line for `cron', but
     also the `ps' output line for `grep'.

  8. Why does `grep' report "Binary file matches"?

     If `grep' listed all matching "lines" from a binary file, it would
     probably generate output that is not useful, and it might even
     muck up your display.  So GNU `grep' suppresses output from files
     that appear to be binary files.  To force GNU `grep' to output
     lines even from files that appear to be binary, use the `-a' or
     `--text' option.

  9. Why doesn't `grep -lv' print nonmatching file names?

     `grep -lv' lists the names of all files containing one or more
     lines that do not match.  To list the names of all files that
     contain no matching lines, use the `-L' or `--files-without-match'
     option.

 10. I can do OR with `|', but what about AND?

          grep 'paul' /etc/motd | grep 'franc,ois'

     finds all lines that contain both `paul' and `franc,ois'.

 11. How can I search in both standard input and in files?

     Use the special file name `-':

          cat /etc/passwd | grep 'alain' - /etc/motd</pre>
<h2>Bugs</h2>
<blockquote>
<p> Large repetition counts in the `{m,n}' construct can cause `grep' to
use lots of memory.  In addition, certain other obscure regular
expressions require exponential time and space, and might cause grep to
run out of memory.  Backreferences are very slow, and can require
exponential time.</p>
</blockquote>
<p class="quote"><i>"I stand for freedom of expression, doing what you believe in, and going after your dreams" ~ Madonna Ciccone</i></p>
<p><b>Related:</b><br>
<br>
<a href="egrep.html">egrep</a> - Search file(s) for lines that match an extended 
expression<br>
<a href="fgrep.html">fgrep</a> - Search file(s) for lines that match a fixed 
string<br>
<a href="awk.html">gawk</a> - Find and Replace text within file(s)<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern 
<br>
<a href="tr.html">tr</a> - Translate, squeeze, and/or delete characters <br>
Equivalent Windows command: <a href="../nt/findstr.html">FINDSTR</a> - Search for strings in files </p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="grep-regex.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

