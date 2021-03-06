---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_bash.lbi" --><!-- #EndLibraryItem --><h1>tr</h1> 
<p> Translate, squeeze, and/or delete characters.</p>
<pre>Syntax
      tr [<i>options</i>]... <i>SET1</i> [<i>SET2</i>]
</pre>
<p>`tr' copies standard input to standard output, performing one of the following operations:</p>
<blockquote>
  <p> * translate, and optionally squeeze repeated characters in the result,<br>
      <br>
    * squeeze repeated characters,<br>
      <br>
    * delete characters,<br>
      <br>
    * delete characters, then squeeze repeated characters from the result.</p>
</blockquote>
<p>  The SET1 and (if given) SET2 arguments define ordered sets of characters, referred to below as SET1 and SET2.  These sets are the characters of the input that `tr' operates on.  The `--complement'
(`-c') option replaces SET1 with its complement (all of the characters that are not in SET1).</p>
<p><b>Specifying sets of characters</b><br>
<br>
  The format of the SET1 and SET2 arguments resembles the format of regular expressions; however, they are not regular expressions, only lists of characters.  Most characters simply represent themselves in these strings, but the strings can contain the shorthands listed below, for convenience.  Some of them can be used only in SET1 or SET2, as noted below.</p>
<p><b>Backslash escapes</b><br>     
A backslash followed by a character not listed below causes an     
error message.</p>
<pre>   \a          Control-G.

   \b          Control-H.

   \f          Control-L.

   \n          Control-J.

   \r          Control-M.

   \t          Control-I.

   \v          Control-K.

   \OOO        The character with the value given by OOO, which is 1 to 3 octal digits,

   \\          A backslash.

Ranges</pre>
<p>The notation <span class="code">M-N</span> expands to all of the characters from M through
N, in ascending order.  M should collate before N; if it doesn't,
an error results.  As an example, `<span class="code">0-9</span>' is the same as
`<span class="code">0123456789</span>'.  Although GNU <span class="code">tr</span> does not support the System V
syntax that uses square brackets to enclose ranges, translations<br>
specified in that format will still work as long as the brackets
in STRING1 correspond to identical brackets in STRING2.</p>
<pre>Repeated characters</pre>
<p>The notation [<span class="code">C*N]</span> in SET2 expands to N copies of character <span class="code">C</span>. Thus, <span class="code">[y*6]</span>'is the same as <span class="code">yyyyyy</span>.  The notation <span class="code">[C*]</span> in STRING2 expands to as many copies of C as are needed to make SET2 as long as SET1.  If N begins with `0', it is interpreted in octal, otherwise in decimal.</p>
<pre>Character classes</pre>
<p>The notation <span class="code">[:CLASS:]</span> expands to all of the characters in the (predefined) class CLASS.  The characters expand in no particular order, except for the `upper' and `lower' classes, which expand in ascending order.  When the <span class="code">--delete</span> (<span class="code">-d</span>) and <span class="code">--squeeze-repeats</span> (<span class="code">-s</span>) options are both given, any character class can be used in SET2.  Otherwise, only the character classes `lower' and `upper' are accepted in SET2, and then only if the corresponding character class (`upper' and `lower', respectively)
is specified in the same relative position in SET1.  Doing this specifies case conversion.  The class names are given below; an error results when an invalid class name is given.</p>
<pre>    `alnum'
          Letters and digits.

    `alpha'
          Letters.

    `blank'
          Horizontal whitespace.

    `cntrl'
          Control characters.

    `digit'
          Digits.

    `graph'
          Printable characters, not including space.

    `lower'
          Lowercase letters.

    `print'
          Printable characters, including space.

    `punct'
          Punctuation characters.

    `space'
          Horizontal or vertical whitespace.

    `upper'
          Uppercase letters.

    `xdigit'
          Hexadecimal digits.
</pre>
<p><span class="code">Equivalence classes</span></p>
<p>  The syntax `<span class="code">[=C=]</span>' expands to all of the characters that are equivalent to C, in no particular order. Equivalence classes are a relatively recent invention intended to support non-English    alphabets.  But there seems to be no standard way to define them
    or determine their contents.  Therefore, they are not fully implemented in GNU `tr'; each character's equivalence class consists only of that character, which is of no particular use.</p>
<h2>Translating</h2>
<blockquote>
<p> `tr' performs translation when SET1 and SET2 are both given and the `--delete' (`-d') option is not given.  `tr' translates each character<br>
of its input that is in SET1 to the corresponding character in SET2.<br>
Characters not in SET1 are passed through unchanged.  When a character appears more than once in SET1 and the corresponding characters in SET2<br>
are not all the same, only the final one is used.<br>
For example, these two commands are equivalent:</p>
<pre>     tr aaa xyz
     tr a z</pre>
<p>A common use of `tr' is to convert lowercase characters to uppercase.  This can be done in many ways.  Here are three of them:</p>
<pre>     tr abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ
     tr a-z A-Z
     tr '[:lower:]' '[:upper:]'</pre>
<p>When `tr' is performing translation, SET1 and SET2 typically have the same length.  If SET1 is shorter than SET2, the extra characters at<br>
the end of SET2 are ignored.<br>
<br>
On the other hand, making SET1 longer than SET2 is not portable; POSIX.2 says that the result is undefined.  In this situation, BSD `tr'<br>
pads SET2 to the length of SET1 by repeating the last character of SET2 as many times as necessary.  System V `tr' truncates SET1 to the length<br>
of SET2.<br>
<br>
By default, GNU `tr' handles this case like BSD `tr'.  When the `--truncate-set1' (`-t') option is given, GNU `tr' handles this case like the System V `tr' instead.  This option is ignored for operations
other than translation.<br>
<br>
Acting like System V `tr' in this case breaks the relatively common BSD idiom:<br>
<br>
<span class="code">tr -cs A-Za-z0-9 '\012'</span><br>
<br>
because it converts only zero bytes (the first element in the complement of SET1), rather than all non-alphanumerics, to newlines.<br>
</p>
</blockquote>
<h2>Squeezing repeats and deleting</h2>
<blockquote>
<p> When given just the `--delete' (`-d') option, `tr' removes any input characters that are in SET1.<br>
<br>
When given just the `--squeeze-repeats' (`-s') option, `tr' replaces each input sequence of a repeated character that is in SET1 with a<br>
single occurrence of that character.<br>
<br>
When given both `--delete' and `--squeeze-repeats', `tr' first performs any deletions using SET1, then squeezes repeats from any<br>
remaining characters using SET2.<br>
<br>   
The `--squeeze-repeats' option can also be used when translating, in which case `tr' first performs translation, then squeezes repeats from<br>
any remaining characters using SET2.</p>
</blockquote>
<p> Here are some examples to illustrate various combinations of options:</p>
<pre>   * Remove all zero bytes:

          tr -d '\000'

   * Put all words on lines by themselves.  This converts all
     non-alphanumeric characters to newlines, then squeezes each string
     of repeated newlines into a single newline:

          tr -cs 'a-zA-Z0-9' '[\n*]'

   * Convert each sequence of repeated newlines to a single newline:

          tr -s '\n'

   * Find doubled occurrences of words in a document.  For example,
     people often write "the the" with the duplicated words separated
     by a newline.  The bourne shell script below works first by
     converting each sequence of punctuation and blank characters to a
     single newline.  That puts each "word" on a line by itself.  Next
     it maps all uppercase characters to lower case, and finally it
     runs `uniq' with the `-d' option to print out only the words that
     were adjacent duplicates.

          #!/bin/sh
          cat "$@" \
            | tr -s '[:punct:][:blank:]' '\n' \
            | tr '[:upper:]' '[:lower:]' \
            | uniq -d</pre>
<h2>Warning messages</h2>
<blockquote>
<p> Setting the environment variable `POSIXLY_CORRECT' turns off the following warning and error messages, for strict compliance with POSIX.2.  Otherwise, the following diagnostics are issued:<br>
<br>
1. When the `--delete' option is given but `--squeeze-repeats' is not, and SET2 is given, GNU `tr' by default prints a usage message and exits, because SET2 would not be used.  The POSIX
specification says that SET2 must be ignored in this case.
Silently ignoring arguments is a bad idea.<br>
<br>
2. When an ambiguous octal escape is given.  For example, `\400' is actually `\40' followed by the digit `0', because the value 400 octal does not fit into a single byte.<br>
<br>
<br>
GNU `tr' does not provide complete BSD or System V compatibility. For example, it is impossible to disable interpretation of the POSIX constructs `[:alpha:]', `[=c=]', and `[c*10]'.  Also, GNU `tr' does not
delete zero bytes automatically, unlike traditional Unix versions, which provide no way to preserve zero bytes.</p>
</blockquote>
<p><b>Examples</b></p>
<p class="code"># Swap case<br>
$ echo "Hello World" | tr "A-Za-z" "a-zA-Z"<br> 
hELLO wORLD</p>
<p class="code"># Make lower case<br>
$ echo "Hello World" | tr "[:upper:]" "[:lower:]"<br>
hello world
</p>
<p class="code"># As a function<br>
$ toLower() {<br>
echo $1 | tr "[:upper:]" "[:lower:]" <br>
} </p>
<p class="code">$ toLower SomeMixEDCaseText<br>
somemixedcasetext</p>
<p class="code"># Split the path into its elements, one per line:<br>
$ echo $PATH | tr ":" "\n" | sort</p>
<p><i class="quote">"Chance is always powerful. - Let your hook be always cast; in the pool where you least expect it, there will be a fish" ~ Ovid </i></p>
<p><b>Related:</b><br>
<br>
<a href="awk.html">gawk</a> - Find and Replace text within file(s)<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern<br>
Equivalent Windows command: <a href="../nt/findstr.html">FINDSTR</a> - Search for strings in files</p><!-- #BeginLibraryItem "/Library/foot_bash.lbi" --><p><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- bash300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="4615356305"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

