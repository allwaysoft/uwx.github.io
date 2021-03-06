---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>sed</h1> 
<p>SED is a stream editor. A stream editor is used to perform basic 
  text transformations on an input stream (a file or input from a pipeline). <br>
  While in some ways similar to an editor which permits scripted edits, SED works 
  by making only one pass over the input(s), and is consequently more efficient. 
  But it is SED's ability to filter text in a pipeline which particularly distinguishes 
it from other types of editors.</p>
<pre>Syntax
      sed [-an] <i>command</i> [<i>file</i> ...]

      sed [-an] [-e <i>command</i>] [-f <i>command_file</i>] [<i>file</i> ...]

Options</pre>
<p>A single command may be specified as the first argument to sed. Multiple commands may be specified by using the -e or -f options. All commands are applied to the input in the order they are specified regardless of their origin.</p>
<pre>     <b>-a</b>      The files listed as parameters for the `w' functions are creat-
             ed (or truncated) before any processing begins, by default.  The
             <b>-a</b> option causes <b>sed</b> to delay opening each file until a command
             containing the related `w' function is applied to a line of in-
             put.

     <b>-e</b> <i>command</i>

             Append the editing commands specified by the <i>command</i> argument to
             the list of commands.

     <b>-f</b> <i>command</i><b>_</b><i>file</i>
             Append the editing commands found in the file <i>command</i><b>_</b><i>file</i> to the
             list of commands.  The editing commands should each be listed on
             a separate line.

     <b>-n</b>      By default, each line of input is echoed to the standard output
             after all of the commands have been applied to it.  The <b>-n</b> option
             suppresses this behavior.

     The form of a <b>sed</b> command is as follows:

           [address[,address]]function[arguments]

     Whitespace may be inserted before the first address and the function por-
     tions of the command.

     Normally, <b>sed</b> cyclically copies a line of input, not including its termi-
     nating newline character, into a <i>pattern</i> <i>space</i>, (unless there is some-
     thing left after a `D' function), applies all of the commands with ad-
     dresses that select that pattern space, copies the pattern space to the
     standard output, appending a newline, and deletes the pattern space.

     Some of the functions use a <i>hold</i> <i>space</i> to save all or part of the pattern
     space for subsequent retrieval.</pre>
<h2>Sed Addresses</h2>
<pre>     An address is not required, but if specified must be a number (that
     counts input lines cumulatively across input files), a dollar (`$')
     character that addresses the last line of input, or a context address
     (which consists of a regular expression preceded and followed by a delim-
     iter).

     A command line with no addresses selects every pattern space.

     A command line with one address selects all of the pattern spaces that
     match the address.

     A command line with two addresses selects the inclusive range from the
     first pattern space that matches the first address through the next pat-
     tern space that matches the second.  (If the second address is a number
     less than or equal to the line number first selected, only that line is
     selected.)  Starting at the first line following the selected range, <b>sed</b>
     starts looking again for the first address.

     Editing commands can be applied to non-selected pattern spaces by use of
     the exclamation character (`!') function.</pre>
<h2>Sed Regular Expressions</h2>
<pre>     The <b>sed</b> regular expressions are basic regular expressions (BRE's, see
     <b>regex(3)</b> for more information).  In addition, <b>sed</b> has the following two
     additions to BRE's:

     1.   In a context address, any character other than a backslash (`\')
          or newline character may be used to delimit the regular expression
          by prefixing the first use of that delimiter with a backslash.  Al-
          so, putting a backslash character before the delimiting character
          causes the character to be treated literally.  For example, in the
          context address \xabc\xdefx, the RE delimiter is an `x' and the
          second `x' stands for itself, so that the regular expression is
          `abcxdef'.

     2.   The escape sequence \n matches a newline character embedded in the
          pattern space.  You can't, however, use a literal newline character
          in an address or in the substitute command.

     One special feature of <b>sed</b> regular expressions is that they can default
     to the last regular expression used.  If a regular expression is empty,
     i.e. just the delimiter characters are specified, the last regular ex-
     pression encountered is used instead.  The last regular expression is de-
     fined as the last regular expression used as part of an address or sub-
     stitute command, and at run-time, not compile-time.  For example, the
     command `/abc/s//XXX/' will substitute `XXX' for the pattern `abc'.</pre>
<h2>Sed Functions</h2>
<pre>     In the following list of commands, the maximum number of permissible ad-
     dresses for each command is indicated by [0addr], [1addr], or [2addr],
     representing zero, one, or two addresses.

     The argument <i>text</i> consists of one or more lines.  To embed a newline in
     the text, precede it with a backslash.  Other backslashes in text are
     deleted and the following character taken literally.

     The `r' and `w' functions take an optional file parameter, which
     should be separated from the function letter by white space.  Each file
     given as an argument to <b>sed</b> is created (or its contents truncated) before
     any input processing begins.

     The `b', `r', `s', `t', `w', `y', `!', and `:' functions
     all accept additional arguments.  The following synopses indicate which
     arguments have to be separated from the function letters by white space
     characters.

     Two of the functions take a function-list.  This is a list of <b>sed</b> func-
     tions separated by newlines, as follows:

           { function
             function
             ...
             function
           }

     The ``{'' can be preceded by white space and can be followed by white
     space.  The function can be preceded by white space.  The terminating
     ``}'' must be preceded by a newline or optional white space.

     [2addr] function-list
             Execute function-list only when the pattern space is selected.

     [1addr]a\
     text
             Write <i>text</i> to standard output immediately before each attempt to
             read a line of input, whether by executing the ``N'' function or
             by beginning a new cycle.

     [2addr]b[label]
             Branch to the `:' function with the specified label.  If the
             label is not specified, branch to the end of the script.

     [2addr]c\
     text
             Delete the pattern space.  With 0 or 1 address or at the end of a
             2-address range, <i>text</i> is written to the standard output.

     [2addr]d
             Delete the pattern space and start the next cycle.

     [2addr]D
             Delete the initial segment of the pattern space through the first
             newline character and start the next cycle.

     [2addr]g
             Replace the contents of the pattern space with the contents of
             the hold space.

     [2addr]G
             Append a newline character followed by the contents of the hold
             space to the pattern space.

     [2addr]h
             Replace the contents of the hold space with the contents of the
             pattern space.

     [2addr]H
             Append a newline character followed by the contents of the pat-
             tern space to the hold space.

     [1addr]i\
     text
             Write <i>text</i> to the standard output.

     [2addr]l
             (The letter ell.)  Write the pattern space to the standard output
             in a visually unambiguous form.  This form is as follows:

                   backslash          \\
                   alert              \a
                   form-feed          \f
                   newline            \n
                   carriage-return    \r
                   tab                \t
                   vertical tab       \v

             Nonprintable characters are written as three-digit octal numbers
             (with a preceding backslash) for each byte in the character (most
             significant byte first).  Long lines are folded, with the point
             of folding indicated by displaying a backslash followed by a new-
             line.  The end of each line is marked with a ``$''.

     [2addr]n
             Write the pattern space to the standard output if the default
             output has not been suppressed, and replace the pattern space
             with the next line of input.

     [2addr]N
             Append the next line of input to the pattern space, using an em-
             bedded newline character to separate the appended material from
             the original contents.  Note that the current line number
             changes.

     [2addr]p
             Write the pattern space to standard output.

     [2addr]P
             Write the pattern space, up to the first newline character to the
             standard output.

     [1addr]q
             Branch to the end of the script and quit without starting a new
             cycle.

     [1addr]r file
             Copy the contents of <i>file</i> to the standard output immediately be-
             fore the next attempt to read a line of input.  If <i>file</i> cannot be
             read for any reason, it is silently ignored and no error condi-
             tion is set.

     [2addr]s/regular expression/replacement/flags
             Substitute the replacement string for the first instance of the
             regular expression in the pattern space.  Any character other
             than backslash or newline can be used instead of a slash to de-
             limit the RE and the replacement.  Within the RE and the replace-
             ment, the RE delimiter itself can be used as a literal character
             if it is preceded by a backslash.

             An ampersand (`&amp;') appearing in the replacement is replaced by
             the string matching the RE.  The special meaning of `&amp;' in this
             context can be suppressed by preceding it by a backslash.  The
             string `\#', where `#' is a digit, is replaced by the text
             matched by the corresponding backreference expression (see
             <b>re_format(7)</b>).

             A line can be split by substituting a newline character into it.
             To specify a newline character in the replacement string, precede
             it with a backslash.

             The value of <i>flags</i> in the substitute function is zero or more of
             the following:

                   0 ... 9
                           Make the substitution only for the N'th occurrence
                           of the regular expression in the pattern space.

                   g       Make the substitution for all non-overlapping
                           matches of the regular expression, not just the
                           first one.

                   p       Write the pattern space to standard output if a re-
                           placement was made.  If the replacement string is
                           identical to that which it replaces, it is still
                           considered to have been a replacement.

                   w <i>file</i>  Append the pattern space to <i>file</i> if a replacement
                           was made.  If the replacement string is identical
                           to that which it replaces, it is still considered
                           to have been a replacement.

     [2addr]t [label]

             Branch to the `:' function bearing the label if any substitu-
             tions have been made since the most recent reading of an input
             line or execution of a `t' function.  If no label is specified,
             branch to the end of the script.

     [2addr]w <i>file</i>

             Append the pattern space to the <i>file</i>.

     [2addr]x
             Swap the contents of the pattern and hold spaces.

     [2addr]y/string1/string2/
             Replace all occurrences of characters in <i>string1</i> in the pattern
             space with the corresponding characters from <i>string2</i>. Any charac-
             ter other than a backslash or newline can be used instead of a
             slash to delimit the strings.  Within <i>string1</i> and <i>string2</i>, a
             backslash followed by any character other than a newline is that
             literal character, and a backslash followed by an `n' is re-
             placed by a newline character.

     [2addr]!function
     [2addr]!function-list
             Apply the function or function-list only to the lines that are
             <i>not</i> selected by the address(es).

     [0addr]:label
             This function does nothing; it bears a label to which the `b'
             and `t' commands may branch.

     [1addr]=
             Write the line number to the standard output followed by a new-
             line character.

     [0addr]
             Empty lines are ignored.

     [0addr]#
             The `#' and the remainder of the line are ignored (treated as a
             comment), with the single exception that if the first two charac-
             ters in the file are `#n', the default output is suppressed.
             This is the same as specifying the <b>-n</b> option on the command line.

Exits 0 on success and &gt;0 if an error occurs.</pre>
<p><b>Example</b></p>
<p> Rename a bunch of iPhone screenshot files from IMG_0001.PNG, IMG_0002.PNG...<br>
 to ScreenShot01.png, ScreenShot01.png...</p>
<pre><a href="for.html">for</a> name in IMG*PNG
do
  # Work out the new name
  newname="$(echo $name | <b>sed</b> "s/IMG_00/ScreenShot/;s/PNG/png/")"

  # Move/rename the files
  echo "renaming $name as $newname"
  <a href="mv.html">mv</a> $name $newname
done</pre>
<p class="quote"><i>“life is 10% what happens to me and 90% how I react to it” ~ Charles Swindoll </i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/sed.1.html">sed man page</a> - Apple.com<br>  
<a href="awk.html">awk</a> - Find and Replace text within file(s)<br>
<a href="grep.html">grep</a> - Search file(s) for lines that match a given pattern<br>
<a href="http://sed.sf.net/sed1line.txt">Useful SED one liners</a><br>
regex(3)<br>
re_format(7)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="sed.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
