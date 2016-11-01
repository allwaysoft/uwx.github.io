---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>tr</h1> 
<p>Translate, squeeze, and/or delete characters. Copies the standard 
input to the standard output with substitution or deletion of selected characters.</p>
<pre>Syntax
      tr [-Ccsu] <i>string1 string2</i>
      tr [-Ccu] -d <i>string1</i>
      tr [-Ccu] -s <i>string1</i>
      tr [-Ccu] -ds <i>string1 string2</i>

Options<i>
</i>   <b>-C</b>     Complement the set of characters in <i>string1</i>, that is '-C ab'
          includes every character except for 'a' and 'b'.

   <b>-c</b>     Same as <b>-C</b> but complement the set of byte values in <i>string1</i>.

   <b>-d </b>    Delete characters in <i>string1</i> from the input.

   <b>-s</b>     Squeeze multiple occurrences of the characters listed in the last
          operand (either <i>string1</i> or <i>string2</i>) in the input into a single
          instance of the character.  This occurs after all deletion and
          translation is completed.

   <b>-u</b>     Guarantee that any output is unbuffered.

     In the first synopsis form, the characters in <i>string1</i> are translated into
     the characters in <i>string2</i> where the first character in <i>string1</i> is trans-
     lated into the first character in <i>string2</i> and so on.  If <i>string1</i> is
     longer than <i>string2</i>, the last character found in <i>string2</i> is duplicated
     until <i>string1</i> is exhausted.

     In the second synopsis form, the characters in <i>string1</i> are deleted from
     the input.

     In the third synopsis form, the characters in <i>string1</i> are compressed as
     described for the <b>-s</b> option.

     In the fourth synopsis form, the characters in <i>string1</i> are deleted from
     the input, and the characters in <i>string2</i> are compressed as described for
     the <b>-s</b> option.

     The following conventions can be used in <i>string1</i> and <i>string2</i> to specify
     sets of characters:

     character Any character not described by one of the following conven-
     tions represents itself.

     \octal A backslash followed by 1, 2 or 3 octal digits represents a
     character with that encoded value.  To follow an octal
     sequence with a digit as a character, left zero-pad the octal
     sequence to the full 3 octal digits.

     \character
     A backslash followed by certain special characters maps to
     special values.

     \a    &lt;alert character&gt;
     \b    &lt;backspace&gt;
     \f    &lt;form-feed&gt;
     \n    &lt;newline&gt;
     \r    &lt;carriage return&gt;
     \t    &lt;tab&gt;
     \v    &lt;vertical tab&gt;

     A backslash followed by any other character maps to that character.

     c-c Represents the range of characters between the range end-points, inclusively.

     [:class:] Represents all characters belonging to the defined character
     class. Class names are:

     alnum   &lt;alphanumeric characters&gt;
     alpha   &lt;alphabetic characters&gt;
     cntrl   &lt;control characters&gt;

     digit   &lt;numeric characters&gt;
     graph   &lt;graphic characters&gt;
     lower   &lt;lower-case alphabetic characters&gt;
     print   &lt;printable characters&gt;
     punct   &lt;punctuation characters&gt;

     space   &lt;space characters&gt;
     upper   &lt;upper-case characters&gt;
     xdigit   &lt;hexadecimal characters&gt;

     With the exception of the `upper' and `lower' classes,
     characters in the classes are in unspecified order.  In the
     `upper' and `lower' classes, characters are entered in
     ascending order.

     For specific information as to which ASCII characters are
     included in these classes, see <b>ctype(3)</b> and related manual
     pages.

     [=equiv=] Represents all characters belonging to the same equivalence
     class as <i>equiv</i>, ordered by their encoded values.

     [#*n] Represents <i>n</i> repeated occurrences of the character represented
     by <i>#</i>.  This expression is only valid when it occurs in
     <i>string2</i>.  If <i>n</i> is omitted or is zero, it is be interpreted as
     large enough to extend <i>string2</i> sequence to the length of
     <i>string1</i>.  If <i>n</i> has a leading zero, it is interpreted as an
     octal value, otherwise, it's interpreted as a decimal value.</pre>
<h2>ENVIRONMENT</h2>
<pre>     The LANG, LC_ALL, LC_CTYPE and LC_COLLATE environment variables affect
     the execution of <b>tr</b> as described in <b>environ(7)</b>.
</pre>
<p>The <span class="code">tr</span> utility has historically been extremely forgiving of syntax errors, 
  for example, the -c and -s options were ignored unless two strings were specified. 
  This implementation will not permit illegal syntax.</p>
<p>The <span class="code">tr</span> utility has historically not permitted the manipulation 
  of NUL bytes in its input and, additionally, stripped NUL's from its input stream. 
  This implementation has removed this behavior as a bug. </p>
<p>Exits 0 on success, and &gt;0 if an error occurs</p>
<h2>Examples</h2>
<p># Swap case<span class="code"><br>
$ echo "Hello World" | tr "A-Za-z" "a-zA-Z"<br>
hELLO wORLD</span></p>
<p># Make lower case<span class="code"><br>
$ echo "Hello World" | tr "[:upper:]" "[:lower:]"<br>
hello world </span></p>
<p># As a function<span class="code"><br>
$ toLower() {<br>
&nbsp;echo $1 | tr "[:upper:]" "[:lower:]" <br>
} </span></p>
<p class="code">$ toLower SomeMixEDCaseText<br>
somemixedcasetext</p>
<p># Split the path into its elements<span class="code"><br>
$ echo $PATH | tr ":" "\n" | sort</span></p>
<p>Create a list of the words in file1, one per line, where a word is taken
     to be a maximal string of letters.<span class="code"><br>
$ tr -cs "[:alpha:]" "\n" &lt; file1

</span></p>
<p>Translate the contents of file1 to upper-case.

    <span class="code"><br>
$ tr "[:lower:]" "[:upper:]" &lt; file1</span></p>
<p>Strip out non-printable characters from file1.

    <span class="code"><br>
$ 
tr -cd "[:print:]" &lt; file1</span></p>
<p>Remove diacritical marks from all accented variants of the letter 'e':
<br>
<span class="code">$ tr "[=e=]" "e"</span></p>
<p class="quote"><i>“Chance is always powerful. - Let your hook be always cast; in the pool where you least expect it, there will be a fish” ~ Ovid</i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/tr.1.html">tr man page</a> - Apple.com<br>
<a href="awk.html">awk</a> - Find and Replace text within file(s)<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="tr.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="../index.html">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
