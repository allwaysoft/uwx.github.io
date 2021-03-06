---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_osx.lbi" --><!-- #EndLibraryItem --><h1>stat/readlink</h1> 
<p>Display the status of a file.
</p>
<pre>Syntax:
      stat [-FLnq] [-f <i>format</i> | -l | -r | -s | -x] [-t <i>timefmt</i>] [<i>file</i> ...]

      readlink [-n] [<i>file</i> ...]

Key
   -F      As in ls(1), display a slash (`/') immediately after each path-name that is a directory,
           an asterisk (`*') after each that is executable, an at sign (`@') after each symbolic link,
           a percent sign (`%') after each whiteout, an equal sign (`=') after each socket, and a vertical
           bar (`|') after each that is a FIFO.  The use of -F implies -l.

   -f <i>format</i>  Display information using the specified format.
              See the FORMATS section for a description of valid formats.

   -L      Use stat(2) instead of lstat(2).  The information reported by stat will refer to the target of file,
           if file is a symbolic link, and not to file itself.

   -l      Display output in ls -lT format.
   -n      Do not force a newline to appear at the end of each piece of output.
   -q      Suppress failure messages if calls to stat(2) or lstat(2) fail.
           When run as readlink, error messages are automatically suppressed.

   -r      Display raw information.  That is, for all the fields in the stat structure,
           display the raw, numerical value (for example, times in seconds since the epoch, etc.).

   -s      Display information in 'shell output', suitable for initializing variables.

   -t <i>timefmt</i>  Display timestamps using the specified format.  This format is passed directly to strftime(3).

   -x      Display information in a more verbose way as known from some Linux distributions.

 <i>Formats</i>      Format strings are similar to printf(3) formats in that they start with %,
              are then followed by a sequence of formatting characters, and end in acharacter
              that selects the field of the struct stat which is to be formatted.
              If the % is immediately followed by one of n, t, %, or @, then a newline character,
              a tab character, a percent character, or the current file number is printed,
              otherwise the string is examined for the following:
              Any of the following optional flags:
              #    Selects an alternate output form for octal and hexadecimal output.
                   Non-zero octal output will have a leading zero, and non-zero hexadecimal
                   output will have '0x' prepended to it.
              +    Asserts that a sign indicating whether a number is positive or negative
                   should always be printed.  Non-negative numbers are not usually printed with
                   a sign.
              -    Aligns string output to the left of the field, instead of to the right.
              0    Sets the fill character for left padding to the `0' character, instead of a space.
              space   Reserves a space at the front of non-negative signed output fields.
                      A '+' overrides a space if both are used.

              Then the following fields:
              <i>size</i>    An optional decimal digit string specifying the minimum field width.
              <i>prec</i>    An optional precision composed of a decimal point '.' and a decimal digit
                      string that indicates the maximum string length, the number of digits to
                      appear after the decimal point in floating point output, or the minimum
                      number of digits to appear in numeric output.
              <i>fmt</i>     An optional output format specifier which is one of D, O, U, X, F, or S.
                      These represent signed decimal output, octal output, unsigned decimal output,
                      hexadecimal output, floating point output, and string output, respectively.
                      Some output formats do not apply to all fields.  Floating point output only
                      applies to timespec fields (the a, m, and c fields).
                      The special output specifier <b>S</b> may be used to indicate that the output,
                      if applicable, should be in string format.

                      May be used in combination with:
                      amc     Display date in strftime(3) format.
                      dr      Display actual device name.
                      gu      Display group or user name.
                      p       Display the mode of file as in ls -lTd.
                      N       Displays the name of file.
                      T       Displays the type of file.
                      Y       Insert a ' -&gt; ' into the output.  Note that the default output
                              format for Y is a string, but if specified explicitly,
                              these four characters are prepended.
              <i>sub</i>     An optional sub field specifier (high, middle, low).
                      Only applies to the p, d, r, and T output formats.  It can be one of
                      the following:
                      H       'High' -- specifies the major number for devices from r or d,
                              the 'user' bits for permissions from the string form of p, the file 'type'
                              bits from the numeric forms of p, and the long output form of T.
                      L       'Low' -- specifies the minor number for devices from r or d, the 'other'
                              bits for permissions from the string form of p, the 'user', 'group',
                              and 'other' bits from the numeric forms of p, and the ls -F style output
                              character for file type when used with T (the use of L for this is optional).
                      M       'Middle' -- specifies the 'group' bits for permissions from the string
                              output form of p, or the 'suid','sgid', and 'sticky' bits for the
                              numeric forms of p.
              <i>datum</i>   A required field specifier, being one of the following:
                      d       Device upon which file resides.
                      i       file's inode number.
                      p       File type and permissions.
                      l       Number of hard links to file.
                      u, g    User ID and group ID of file's owner.
                      r       Device number for character and block device special files.
                      a, m, c, B   The time file was last accessed or modified, of when the inode was last
                              changed, or the birth time of the inode.
                      z       The size of file in bytes.
                      b       Number of blocks allocated for file.
                      k       Optimal file system I/O operation block size.
                      f       User defined flags for file.
                      v       Inode generation number.

                      The following four field specifiers are not drawn directly from the data in struct stat,
                      but are:      N   The name of the file.
                                    T   The file type, either as in ls -F or in a more descriptive form if
                                        the sub field specifier H is given.
                                    Y   The target of a symbolic link.
                                    Z   Expands to 'major,minor' from the rdev field for character or block
                                        special devices and gives size output for all others.

               Only the % and the field specifier are required. Most field specifiers default to U as an
               output form, with the exception of p which defaults to O, a, m, and c which default to
               D, and Y, T, and N which default to S.

 EXIT STATUS   The stat and readlink utilities exit 0 on success, and &gt;0 if an error occurs.</pre>
<p>The <span class="code">stat</span> utility displays information about the file pointed to by <i>file</i>.      Read, write or execute permissions of the named file are not required,      but all directories listed in the path name leading to the file must be      searchable.  If no argument is given, stat displays information about the      file descriptor for standard input.      </p>
<p>When invoked as <span class="code">readlink</span>, only the target of the symbolic link is      printed.  If the given argument is not a symbolic link, readlink will      print nothing and exit with an error.</p>
<p> <b>Examples</b></p>
<p>Given a symbolic link foo that points from /tmp/foo to /, you would use      stat as follows:</p>
<p class="code">$  stat -F /tmp/foo<br>
lrwxrwxrwx 1 jschauma cs 1 Apr 24 16:37:28 2002 /tmp/foo@ -&gt; /<br>
<br>
$ stat -LF /tmp/foo<br>
drwxr-xr-x 16 root wheel 512 Apr 19 10:57:54 2002 /tmp/foo/</p>
<p>To initialize some shell variables, you could use the -s flag as follows:</p>
<p class="code">$ sh<br>
$ eval $(stat -s .profile)<br>
$ echo $st_size $st_mtimespec<br>
1148 1015432481</p>
<p class="quote"><i>“If it disagrees with experiment it is wrong. In that simple statement is the key to science. It does not make any difference how beautiful your guess is. It does not make any difference how smart you are, who made the guess, or what his name is – if it disagrees with experiment it is wrong” ~ <a href="http://www.youtube.com/watch?v=EYPapE-3FRw">Richard Feynman</a></i></p>
<p><b>Related:</b></p>
<p><a href="https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/stat.1.html">stat man page</a> - Apple.com<br>
<a href="chmod.html">chmod</a> - Change access permissions<br>
<a href="ls.html">ls</a> - List information about file(s)</p><!-- #BeginLibraryItem "/Library/foot_osx.lbi" --><p>
<!-- OSX300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="1823340303"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="stat.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->
